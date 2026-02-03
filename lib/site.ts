export const site = {
  name: "FolseTech",
  tagline: "Web Design & AI Solutions for Modern Businesses",
  owner: "Jon Folse",
  email: "jon@folsetech.org",
  phone: "225-313-1914",
  domain: "https://folsetech.org",
  location: "Gonzales, LA 70737"
} as const;

export const nav = [
  { href: "/#top", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" }
] as const;
