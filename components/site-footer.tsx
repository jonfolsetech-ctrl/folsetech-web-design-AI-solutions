import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg/80">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div className="flex items-start gap-3">
          <div className="relative h-10 w-10 shrink-0">
            <Image
              src="/folsetech-logo.png"
              alt="FolseTech logo"
              fill
              sizes="40px"
              className="object-contain drop-shadow-[0_0_16px_rgba(247,201,72,0.18)]"
            />
          </div>
          <div>
            <div className="font-semibold">{site.name}</div>
            <div className="text-sm text-ink/70">{site.tagline}</div>
            <div className="mt-3 text-sm text-ink/70">
              <div>{site.location}</div>
              <div>
                <a className="hover:underline" href={`tel:${site.phone}`}>
                  {site.phone}
                </a>
              </div>
              <div>
                <a className="hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold">Pages</div>
          <ul className="mt-3 grid gap-2 text-sm text-ink/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-ink hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-ink hover:underline" href="/locations/baton-rouge">
                Baton Rouge
              </Link>
            </li>
            <li>
              <Link className="hover:text-ink hover:underline" href="/locations/prairieville">
                Prairieville
              </Link>
            </li>
            <li>
              <Link className="hover:text-ink hover:underline" href="/locations/denham-springs">
                Denham Springs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Service Area</div>
          <p className="mt-3 text-sm text-ink/70">
            Proudly serving Gonzales, Baton Rouge, Prairieville, Denham Springs, and the River Parishes with modern
            web design, SEO, and automation.
          </p>
          <div className="mt-4 text-xs text-ink/60">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
