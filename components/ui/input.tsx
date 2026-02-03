import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "h-11 w-full rounded-xl bg-white/5 border border-line px-3 text-sm text-ink placeholder:text-ink/40",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60",
        props.className
      )}
    />
  );
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "min-h-[140px] w-full rounded-xl bg-white/5 border border-line px-3 py-3 text-sm text-ink placeholder:text-ink/40",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60",
        props.className
      )}
    />
  );
}
