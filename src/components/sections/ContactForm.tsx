"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function updateField(field: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setFieldErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setFieldErrors(data.errors ?? {});
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border-border rounded-2xl border p-10 text-center">
        <p className="text-fg text-2xl font-semibold tracking-tight">
          Message sent.
        </p>
        <p className="text-fg-muted mt-3">
          Thanks for reaching out. Someone from Movo will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={(e) => updateField("website", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <Field
        label="Name"
        name="name"
        value={values.name}
        onChange={(v) => updateField("name", v)}
        error={fieldErrors.name}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={(v) => updateField("email", v)}
        error={fieldErrors.email}
      />
      <Field
        label="Company"
        name="company"
        value={values.company}
        onChange={(v) => updateField("company", v)}
        optional
      />
      <Field
        label="Message"
        name="message"
        value={values.message}
        onChange={(v) => updateField("message", v)}
        error={fieldErrors.message}
        textarea
      />

      {status === "error" && Object.keys(fieldErrors).length === 0 && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again in a moment.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === "submitting"}
        className="w-full sm:w-fit"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  optional,
  textarea,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  optional?: boolean;
  textarea?: boolean;
  type?: string;
}) {
  const baseClasses = cn(
    "w-full border-b bg-transparent py-3 text-lg text-fg outline-none transition-colors duration-300 placeholder:text-fg-muted/60",
    error ? "border-red-500" : "border-border focus:border-fg",
  );

  return (
    <div>
      <label
        htmlFor={name}
        className="text-fg-muted mb-2 block text-sm font-medium"
      >
        {label}
        {optional && <span className="text-fg-muted/60"> (optional)</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          required={!optional}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(baseClasses, "resize-none")}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={!optional}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseClasses}
        />
      )}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
