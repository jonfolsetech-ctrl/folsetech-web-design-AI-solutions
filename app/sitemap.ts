import { MetadataRoute } from "next";
import { cities } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://folsetech.org";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    { url: `${base}/portfolio`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/locations`, lastModified: new Date() },
    ...cities.map((c) => ({ url: `${base}/locations/${c.slug}`, lastModified: new Date() }))
  ];
}
