import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
};

export function Button({ className, variant = "primary", size = "md", ...props }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        size === "md" ? "h-11 px-4 text-sm" : "h-9 px-3 text-sm",
        variant === "primary" &&
          "bg-electric text-bg shadow-glow hover:bg-electric/90 active:translate-y-[1px]",
        variant === "ghost" && "bg-white/0 text-ink border border-line hover:bg-white/5",
        className
      )}
      {...props}
    />
  );
}
