"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { INTENTS, fieldsFor, type Intent } from "@/lib/enquiries";
export function ContactForm({
  intent = "general",
  host = false,
  discordUrl,
}: {
  intent?: Intent;
  host?: boolean;
  discordUrl?: string;
}) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const busy = useRef(false);
  const key = useRef<string | null>(null);
  const successRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (status === "success") {
      successRef.current?.focus();
      successRef.current?.scrollIntoView({ block: "center" });
    }
  }, [status]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    busy.current = true;
    setStatus("submitting");
    setError("");
    const data = new FormData(event.currentTarget);
    data.set("intent", intent);
    key.current ??= crypto.randomUUID();
    data.set("submissionId", key.current);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.error ?? "Please check your details and try again.",
        );
      setStatus("success");
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "We couldn’t save your enquiry. Please try again.",
      );
      setStatus("error");
    } finally {
      busy.current = false;
    }
  }
  if (status === "success")
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="border-border scroll-mt-28 rounded-2xl border p-8"
      >
        <h2 className="text-2xl font-semibold">
          {intent === "whitelist"
            ? "You’re on the list."
            : "Your enquiry is saved."}
        </h2>
        <p className="text-fg-muted mt-4">
          {intent === "whitelist"
            ? "We’ll invite testers in batches as early access expands."
            : "Thank you. Your details have been recorded for the right team at Movo."}
        </p>
        {intent === "whitelist" && discordUrl && (
          <Button className="mt-6" href={discordUrl}>
            Join the Beta Community
          </Button>
        )}
        <Link className="mt-6 block text-sm underline" href="/ecosystem">
          Explore the ecosystem
        </Link>
      </div>
    );
  return (
    <form
      onSubmit={submit}
      className="flex flex-col gap-7"
      aria-busy={status === "submitting"}
    >
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <fieldset
        disabled={status === "submitting"}
        className="flex min-w-0 flex-col gap-7"
      >
        <legend className="mb-6 text-xl font-semibold">
          {INTENTS[intent].label}
        </legend>
        {fieldsFor(intent).map((field) => {
          const id = `${intent}-${field.name}`;
          const styles =
            "w-full min-w-0 border-b border-border bg-transparent py-3 text-base text-fg focus:border-fg";
          return (
            <div key={field.name}>
              <label
                htmlFor={id}
                className="text-fg-muted mb-2 block text-sm font-medium"
              >
                {field.label}
                {field.optional ? " (optional)" : ""}
              </label>
              {field.options ? (
                <select
                  id={id}
                  name={field.name}
                  required={!field.optional}
                  className={styles}
                  defaultValue={
                    field.name === "host" && host
                      ? "Yes"
                      : field.name === "service" && intent === "release"
                        ? "Distribution"
                        : ""
                  }
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {field.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  id={id}
                  name={field.name}
                  required={!field.optional}
                  rows={5}
                  maxLength={5000}
                  className={styles}
                />
              ) : (
                <input
                  id={id}
                  name={field.name}
                  type={field.type ?? "text"}
                  required={!field.optional}
                  maxLength={field.type === "file" ? undefined : 500}
                  min={field.type === "number" ? 1 : undefined}
                  accept={
                    field.type === "file"
                      ? ".pdf,.txt,.png,.jpg,.jpeg"
                      : undefined
                  }
                  autoComplete={
                    field.name === "name"
                      ? "name"
                      : field.name === "email"
                        ? "email"
                        : field.name === "phone"
                          ? "tel"
                          : undefined
                  }
                  className={styles}
                />
              )}
            </div>
          );
        })}
        <p className="text-fg-muted text-sm leading-relaxed">
          {intent === "whitelist"
            ? "We use these details to manage beta invitations, identify test hosts and contact you about early access."
            : "We use your details to respond to this enquiry and route it to the relevant Movo team."}{" "}
          Only share information needed for your enquiry.
        </p>
        <Button type="submit" className="w-full sm:w-fit">
          {status === "submitting" ? "Saving…" : INTENTS[intent].action}
        </Button>
      </fieldset>
      {error && (
        <p role="alert" className="text-sm text-red-700">
          {error} Your entries are still here.{" "}
          {intent !== "whitelist" && (
            <>
              You can also email{" "}
              <a
                className="break-all underline"
                href={`mailto:${INTENTS[intent].email}`}
              >
                {INTENTS[intent].email}
              </a>
              .
            </>
          )}
        </p>
      )}
    </form>
  );
}
