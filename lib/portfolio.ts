export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
};

export const portfolio: PortfolioItem[] = [
  {
    title: "Local Service Website Refresh",
    category: "Next.js + SEO",
    description:
      "Rebuilt a dated site into a fast, mobile-first experience with structured data and local landing pages.",
    highlights: ["90+ Lighthouse", "Local SEO schema", "Lead capture improvements"]
  },
  {
    title: "Automation-Driven Lead Flow",
    category: "Automation",
    description:
      "Contact and quote workflows that route leads instantly and reduce manual follow-ups.",
    highlights: ["Email routing", "Form validation", "Scalable API routes"]
  },
  {
    title: "High-Conversion Landing System",
    category: "UI/UX",
    description:
      "Built a consistent landing page system with reusable sections and modern motion cues.",
    highlights: ["Reusable components", "Framer Motion", "A/B-ready structure"]
  }
];
