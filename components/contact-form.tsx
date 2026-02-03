"use client";

import { useState } from "react";
import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setMessage("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send message.");

      setState("success");
      setMessage("Message sent! We’ll get back to you shortly.");
      e.currentTarget.reset();
    } catch (err: any) {
      setState("error");
      setMessage(err?.message || "Something went wrong. Try again.");
    } finally {
      setTimeout(() => setState("idle"), 2500);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3" aria-label="Contact form">
      <div className="grid gap-1">
        <label className="text-xs text-ink/70" htmlFor="name">Name</label>
        <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
      </div>

      <div className="grid gap-1">
        <label className="text-xs text-ink/70" htmlFor="email">Email</label>
        <Input id="email" name="email" required type="email" autoComplete="email" placeholder="you@company.com" />
      </div>

      <div className="grid gap-1">
        <label className="text-xs text-ink/70" htmlFor="phone">Phone (optional)</label>
        <Input id="phone" name="phone" autoComplete="tel" placeholder="(225) 313-1914" />
      </div>

      <div className="grid gap-1">
        <label className="text-xs text-ink/70" htmlFor="details">Project details</label>
        <Textarea id="details" name="details" required placeholder="Tell us what you need…" />
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={state === "loading"}>
          {state === "loading" ? "Sending…" : "Send Message"}
        </Button>
        {message && (
          <p className={"text-sm " + (state === "success" ? "text-electric" : state === "error" ? "text-gold" : "text-ink/70")} role="status" aria-live="polite">
            {message}
          </p>
        )}
      </div>

      <p className="text-xs text-ink/50">
        Server-side email via Nodemailer. Add SMTP credentials to <code>.env.local</code> (and Amplify/Vercel env).
      </p>
    </form>
  );
}
