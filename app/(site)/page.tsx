import Container from "@/components/container";
import Hero from "@/components/hero";
import ServiceGrid from "@/components/service-grid";
import PortfolioGrid from "@/components/portfolio-grid";
import SectionHeading from "@/components/section-heading";
import GlowCard from "@/components/glow-card";
import ContactForm from "@/components/contact-form";
import MapEmbed from "@/components/map-embed";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div id="top">
      <LocalBusinessSchema city="Gonzales" region="LA" postalCode="70737" />
      <Hero />

      <section id="services" className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="High-performance websites + SEO + automation"
            subtitle="Modern Next.js builds with a clean, tech-forward design language—optimized for speed, accessibility, and local search."
          />
          <div className="mt-8">
            <ServiceGrid />
          </div>
        </Container>
      </section>

      <section id="portfolio" className="py-16 border-t border-line">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Work that looks sharp and converts"
            subtitle="A few sample project-style showcases with motion and polish. Replace with real client work as you add it."
          />
          <div className="mt-8">
            <PortfolioGrid />
          </div>
        </Container>
      </section>

      <section id="about" className="py-16 border-t border-line">
        <Container>
          <SectionHeading
            eyebrow="About"
            title="Local-first studio with enterprise polish"
            subtitle="We combine clean visual design, modern React engineering, and smart automation to help service businesses win online."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <GlowCard>
              <div className="text-xs tracking-[0.2em] uppercase text-gold/90">Focused</div>
              <h3 className="mt-2 text-lg font-semibold">Built for results</h3>
              <p className="mt-2 text-sm text-ink/70">
                Every section is crafted to convert: fast load time, clear messaging, and a layout that guides action.
              </p>
            </GlowCard>
            <GlowCard>
              <div className="text-xs tracking-[0.2em] uppercase text-gold/90">Modern</div>
              <h3 className="mt-2 text-lg font-semibold">React + Tailwind stack</h3>
              <p className="mt-2 text-sm text-ink/70">
                Clean components, scalable design tokens, and smooth motion for a premium, future-proof site.
              </p>
            </GlowCard>
            <GlowCard>
              <div className="text-xs tracking-[0.2em] uppercase text-gold/90">Local</div>
              <h3 className="mt-2 text-lg font-semibold">SEO that targets Louisiana</h3>
              <p className="mt-2 text-sm text-ink/70">
                We build city-focused pages and schema to help customers find you in Gonzales and nearby areas.
              </p>
            </GlowCard>
          </div>
        </Container>
      </section>

      <section id="process" className="py-16 border-t border-line">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="A simple, full-stack launch path"
            subtitle="Strategy, design, build, and launch—delivered with clarity and speed."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Plan",
                desc: "We align on goals, pages, and messaging with a clear scope and timeline."
              },
              {
                step: "02",
                title: "Build",
                desc: "Design + develop in React/Tailwind with performance, SEO, and accessibility baked in."
              },
              {
                step: "03",
                title: "Launch",
                desc: "We deploy, monitor, and optimize so your site is ready for real traffic."
              }
            ].map((item) => (
              <GlowCard key={item.step}>
                <div className="text-xs tracking-[0.2em] uppercase text-gold/90">{item.step}</div>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{item.desc}</p>
              </GlowCard>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="py-16 border-t border-line">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what you’re building"
            subtitle="We’ll respond quickly with next steps and a clean plan."
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
      </section>

      <section className="py-16 border-t border-line">
        <Container>
          <SectionHeading
            eyebrow="Service Areas"
            title="Proudly Serving South Louisiana"
            subtitle="City landing pages built for local SEO and fast conversions."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Baton Rouge",
              "Prairieville",
              "Denham Springs",
              "Gonzales",
              "Ascension Parish",
              "River Parishes"
            ].map((city) => (
              <div key={city} className="rounded-xl border border-line p-4 text-sm text-ink/80">
                {city} Web Design
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 border-t border-line">
        <Container>
          <GlowCard className="shadow-gold">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="text-xs tracking-[0.2em] uppercase text-gold/90">Ready to launch?</div>
                <h3 className="mt-2 text-xl md:text-2xl font-semibold">
                  Let’s build a fast, modern website for your business.
                </h3>
                <p className="mt-2 text-sm text-ink/70">Clean design. Smart SEO. Automation that saves time.</p>
              </div>
              <a href="/#contact" className="inline-flex h-11 items-center justify-center rounded-xl bg-gold text-bg px-5 text-sm font-semibold shadow-gold hover:bg-gold/90">
                Let’s Build Together
              </a>
            </div>
          </GlowCard>
        </Container>
      </section>
    </div>
  );
}
