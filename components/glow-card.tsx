import { cn } from "@/lib/utils";

export default function GlowCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-line bg-panel shadow-glow overflow-hidden",
        "before:absolute before:inset-0 before:bg-grid-tech before:opacity-40 before:pointer-events-none",
        className
      )}
    >
      <div className="relative p-6">{children}</div>
    </div>
  );
}
