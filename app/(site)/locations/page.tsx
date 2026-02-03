import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import GlowCard from "@/components/glow-card";
import { cities } from "@/lib/cities";

export const metadata = { title: "Locations" };

export default function LocationsPage() {
  return (
    <div className="py-14">
      <Container>
        <SectionHeading eyebrow="Service Areas" title="Locations we serve" subtitle="City landing pages built for local SEO and fast conversions." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cities.map((c) => (
            <GlowCard key={c.slug}>
              <div className="text-xs tracking-[0.2em] uppercase text-gold/90">{c.region}</div>
              <h3 className="mt-2 text-lg font-semibold">{c.city}</h3>
              <p className="mt-2 text-sm text-ink/70">{c.description}</p>
              <a href={`/locations/${c.slug}`} className="inline-flex mt-4 h-10 items-center justify-center rounded-xl border border-line px-4 text-sm hover:bg-white/5">
                View Page
              </a>
            </GlowCard>
          ))}
        </div>
      </Container>
    </div>
  );
}
