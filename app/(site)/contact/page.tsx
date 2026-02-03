import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import MapEmbed from "@/components/map-embed";
import GlowCard from "@/components/glow-card";
import { site } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="py-14">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Build Together"
          subtitle="Tell us what you’re building. We’ll respond quickly with next steps and a clean plan."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GlowCard>
            <div className="text-sm text-ink/70">
              <div className="flex items-center justify-between gap-4">
                <span className="text-ink/60">Phone</span>
                <a className="hover:underline" href={`tel:${site.phone}`}>{site.phone}</a>
              </div>
              <div className="mt-2 flex items-center justify-between gap-4">
                <span className="text-ink/60">Email</span>
                <a className="hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div className="mt-2 flex items-center justify-between gap-4">
                <span className="text-ink/60">Location</span>
                <span>{site.location}</span>
              </div>
            </div>
            <div className="mt-6"><ContactForm /></div>
          </GlowCard>

          <GlowCard className="p-0 overflow-hidden">
            <div className="p-6 border-b border-line">
              <h3 className="text-lg font-semibold">Find us in Gonzales</h3>
              <p className="mt-1 text-sm text-ink/70">Embedded map centered on Gonzales, LA.</p>
            </div>
            <MapEmbed query="Gonzales LA 70737" />
          </GlowCard>
        </div>
      </Container>
    </div>
  );
}
