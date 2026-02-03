export default function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <div className="text-xs tracking-[0.2em] uppercase text-gold/90">{eyebrow}</div>}
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-3 text-sm md:text-base text-ink/70">{subtitle}</p>}
    </div>
  );
}
