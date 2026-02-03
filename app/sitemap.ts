import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://folsetech.org";
  return [
    { url: base, lastModified: new Date() }
  ];
}
