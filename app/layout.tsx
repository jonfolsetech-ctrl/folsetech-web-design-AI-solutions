import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: `${site.name} — ${site.location}`, template: `%s | ${site.name}` },
  description:
    "FolseTech builds fast, modern websites with AI-powered SEO and automation for businesses in Gonzales, Louisiana and surrounding areas.",
  openGraph: {
    title: `${site.name} — Web Design & AI Solutions`,
    description: "Modern Next.js websites, SEO, and automation solutions for local businesses in Gonzales, LA.",
    url: site.domain,
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "FolseTech" }],
    locale: "en_US",
    type: "website"
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen tech-bg">{children}</body>
    </html>
  );
}
