import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import GlowCard from "@/components/glow-card";
import { site } from "@/lib/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="py-14">
      <Container>
        <SectionHeading
          eyebrow="About"
          title={`Meet ${site.owner}`}
          subtitle="FolseTech is built on clean design, performance-first development, and real-world business outcomes."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GlowCard>
            <h3 className="text-lg font-semibold">Mission</h3>
            <p className="mt-2 text-sm text-ink/70">
              Build modern websites and AI-powered systems that help local businesses look premium,
              rank higher, and convert more leads—without the bloat.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">Values</h3>
            <ul className="mt-3 grid gap-2 text-sm text-ink/70 list-disc pl-5">
              <li>Performance + accessibility are non-negotiable</li>
              <li>Design should be clean, confident, and conversion-aware</li>
              <li>SEO and structure are part of the build, not an afterthought</li>
              <li>Automation to save time and increase consistency</li>
            </ul>
          </GlowCard>
          <GlowCard className="md:col-span-2">
            <h3 className="text-lg font-semibold">Background</h3>
            <p className="mt-2 text-sm text-ink/70">
              Based in Gonzales, Louisiana, {site.owner} builds modern web experiences using Next.js and Tailwind—paired
              with smart SEO strategy and automation.
            </p>
          </GlowCard>
        </div>
      </Container>
    </div>
  );
}
