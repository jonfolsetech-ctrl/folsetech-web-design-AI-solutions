import { notFound } from "next/navigation";
import { cities } from "@/lib/cities";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import GlowCard from "@/components/glow-card";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import MapEmbed from "@/components/map-embed";

type Props = { params: { city: string } };

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: Props) {
  const city = cities.find((c) => c.slug === params.city);
  if (!city) return {};
  return { title: `${city.title} | FolseTech`, description: city.description };
}

export default function CityPage({ params }: Props) {
  const city = cities.find((c) => c.slug === params.city);
  if (!city) return notFound();

  const base = "https://folsetech.org";

  return (
    <>
      <LocalBusinessSchema city={city.city} region={city.region} postalCode={city.postalCode} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: base },
          { name: "Locations", url: `${base}/locations` },
          { name: city.city, url: `${base}/locations/${city.slug}` }
        ]}
      />
      <FAQSchema
        faqs={[
          {
            question: `Do you offer web design services in ${city.city}?`,
            answer: `Yes. FolseTech provides full web design, SEO, and automation services for businesses in ${city.city}, Louisiana.`
          },
          {
            question: "Do you build SEO-optimized websites?",
            answer: "Absolutely. Every site is built with performance, accessibility, and local SEO best practices."
          },
          {
            question: "Can you redesign an existing website?",
            answer: "Yes. We modernize existing sites using Next.js and Tailwind while preserving content and improving conversions."
          }
        ]}
      />

      <div className="py-14">
        <Container>
          <SectionHeading eyebrow="Local Web Design" title={city.title} subtitle={city.description} />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <GlowCard>
              <h3 className="text-lg font-semibold">Serving {city.city}, Louisiana</h3>
              <p className="mt-2 text-sm text-ink/70">
                FolseTech delivers fast, SEO-optimized websites for businesses in {city.city} that want more leads and better visibility.
              </p>
            </GlowCard>

            <GlowCard>
              <h3 className="text-lg font-semibold">What We Offer</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-ink/70">
                <li>Custom Next.js Web Design</li>
                <li>Local SEO Optimization</li>
                <li>AI Automation & Lead Funnels</li>
                <li>Mobile-First UX</li>
              </ul>
            </GlowCard>

            <GlowCard className="md:col-span-2">
              <h3 className="text-lg font-semibold">Why Businesses Choose FolseTech</h3>
              <p className="mt-2 text-sm text-ink/70">
                Located near Gonzales, we understand the local Louisiana market and build websites designed to convert visitors into customers for {city.city} businesses.
              </p>
              <a href="/contact" className="inline-flex mt-4 h-11 items-center justify-center rounded-xl bg-electric text-bg px-5 text-sm font-semibold shadow-glow hover:bg-electric/90">
                Get a Free Consultation
              </a>
            </GlowCard>

            <GlowCard className="md:col-span-2 p-0 overflow-hidden">
              <div className="p-6 border-b border-line">
                <h3 className="text-lg font-semibold">{city.city} Map</h3>
                <p className="mt-1 text-sm text-ink/70">Service area reference map for local relevance.</p>
              </div>
              <MapEmbed query={`${city.city}, LA`} />
            </GlowCard>
          </div>
        </Container>
      </div>
    </>
  );
}
