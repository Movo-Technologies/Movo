import { NextResponse } from "next/server";
import { createHash, randomUUID } from "node:crypto";
import { mkdir, writeFile, rename, readFile, rm } from "node:fs/promises";
import path from "node:path";
import { INTENTS, fieldsFor, type Intent } from "@/lib/enquiries";
export const runtime = "nodejs";
const fail = (error: string, status = 400) =>
  NextResponse.json({ error }, { status });
export async function POST(request: Request) {
  if (
    request.headers.get("origin") &&
    request.headers.get("origin") !== new URL(request.url).origin
  )
    return fail("Request origin is not allowed.", 403);
  if (Number(request.headers.get("content-length")) > 6 * 1024 * 1024)
    return fail("Please keep attachments below 5 MB.", 413);
  let form: FormData;
  try {
    const reader = request.body?.getReader();
    if (!reader) return fail("Please submit the website form.");
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 6 * 1024 * 1024) {
        await reader.cancel();
        return fail("Please keep attachments below 5 MB.", 413);
      }
      chunks.push(value);
    }
    form = await new Response(Buffer.concat(chunks), {
      headers: { "Content-Type": request.headers.get("content-type") ?? "" },
    }).formData();
  } catch {
    return fail("Please submit the website form.");
  }
  if (form.get("website")) return fail("Unable to accept this submission.");
  const intent = String(form.get("intent"));
  if (!Object.hasOwn(INTENTS, intent)) return fail("Choose an enquiry type.");
  const kind = intent as Intent;
  const data: Record<string, string> = {};
  let attachment: File | undefined;
  for (const field of fieldsFor(kind)) {
    const value = form.get(field.name);
    if (field.type === "file") {
      if (value instanceof File && value.size) {
        if (
          value.size > 5 * 1024 * 1024 ||
          !/\.(pdf|txt|png|jpe?g)$/i.test(value.name)
        )
          return fail("Attach a PDF, TXT, PNG or JPG file below 5 MB.");
        attachment = value;
      }
      continue;
    }
    const text = typeof value === "string" ? value.trim() : "";
    if (!field.optional && !text) return fail(`${field.label} is required.`);
    if (text.length > (field.type === "textarea" ? 5000 : 500))
      return fail(`${field.label} is too long.`);
    if (text && field.options && !field.options.includes(text))
      return fail(`Choose a valid ${field.label.toLowerCase()}.`);
    if (
      text &&
      field.type === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)
    )
      return fail("Enter a valid email address.");
    if (text && field.type === "url") {
      try {
        if (!["https:", "http:"].includes(new URL(text).protocol))
          throw Error();
      } catch {
        return fail("Enter a valid http or https file link.");
      }
    }
    if (
      text &&
      field.type === "number" &&
      (!Number.isInteger(Number(text)) || Number(text) < 1)
    )
      return fail("Enter a positive whole number of tracks.");
    if (
      text &&
      field.type === "date" &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(text) || Number.isNaN(Date.parse(text)))
    )
      return fail("Enter a valid release date.");
    data[field.name] = text;
  }
  const submissionId = String(form.get("submissionId") ?? "");
  if (!/^[a-f0-9-]{36}$/i.test(submissionId))
    return fail("Refresh the page and try again.");
  const configured = process.env.MOVO_DATA_DIR;
  if (process.env.NODE_ENV === "production" && !configured)
    return fail(
      "Signups and enquiries are temporarily unavailable. Please try again later.",
      503,
    );
  const root = configured ?? path.join(process.cwd(), ".movo-data");
  const identity =
    kind === "whitelist"
      ? `${kind}:${data.email.toLowerCase()}:${data.host}`
      : `${kind}:${submissionId}`;
  const id = createHash("sha256").update(identity).digest("hex");
  const target = path.join(/* turbopackIgnore: true */ root, id);
  const temporary = path.join(
    /* turbopackIgnore: true */ root,
    `.pending-${randomUUID()}`,
  );
  try {
    await mkdir(root, { recursive: true });
    try {
      await readFile(path.join(target, "submission.json"));
      return NextResponse.json({ ok: true });
    } catch (e) {
      if ((e as NodeJS.ErrnoException).code !== "ENOENT") throw e;
    }
    await mkdir(temporary);
    if (attachment)
      await writeFile(
        path.join(temporary, "attachment"),
        Buffer.from(await attachment.arrayBuffer()),
        { mode: 0o600 },
      );
    const record = {
      id,
      intent: kind,
      recipient: INTENTS[kind].email,
      receivedAt: new Date().toISOString(),
      data,
      attachment: attachment
        ? { name: attachment.name, size: attachment.size }
        : undefined,
      notification: "pending",
    };
    await writeFile(
      path.join(temporary, "submission.json"),
      JSON.stringify(record, null, 2),
      { mode: 0o600 },
    );
    try {
      await rename(temporary, target);
    } catch (e) {
      if (
        ["EEXIST", "ENOTEMPTY", "EPERM"].includes(
          (e as NodeJS.ErrnoException).code ?? "",
        )
      ) {
        await readFile(path.join(target, "submission.json"));
        await rm(temporary, { recursive: true, force: true });
        return NextResponse.json({ ok: true });
      }
      throw e;
    }
    // Optional existing delivery integration. The saved record remains the source of truth.
    if (process.env.MOVO_ENQUIRY_WEBHOOK_URL) {
      try {
        const response = await fetch(process.env.MOVO_ENQUIRY_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(process.env.MOVO_ENQUIRY_WEBHOOK_TOKEN
              ? {
                  Authorization: `Bearer ${process.env.MOVO_ENQUIRY_WEBHOOK_TOKEN}`,
                }
              : {}),
          },
          body: JSON.stringify(record),
          signal: AbortSignal.timeout(8000),
        });
        if (response.ok)
          await writeFile(
            path.join(target, "notification-delivered"),
            new Date().toISOString(),
          );
      } catch {
        /* Retain pending record for operator retry. */
      }
    }
    return NextResponse.json({ ok: true });
  } catch {
    await rm(temporary, { recursive: true, force: true }).catch(() => {});
    return fail("We couldn’t save your details. Please try again.", 503);
  }
}
