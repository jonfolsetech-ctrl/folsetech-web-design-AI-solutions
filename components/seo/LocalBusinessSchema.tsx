import { site } from "@/lib/site";

type Props = { city: string; region: string; postalCode: string };

export default function LocalBusinessSchema({ city, region, postalCode }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "FolseTech Web Design & AI Solutions",
    url: site.domain,
    logo: `${site.domain}/logo-ft-hex.png`,
    image: `${site.domain}/og.png`,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    founder: { "@type": "Person", name: site.owner },
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: region,
      postalCode,
      addressCountry: "US"
    },
    areaServed: { "@type": "AdministrativeArea", name: "Louisiana" },
    serviceArea: {
      "@type": "AdministrativeArea",
      name: ["Gonzales LA", "Baton Rouge LA", "Prairieville LA", "Denham Springs LA"]
    },
    sameAs: [site.domain],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Web Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Optimization" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automation Solutions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Solutions" } }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
