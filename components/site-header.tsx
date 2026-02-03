"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-line bg-bg/70">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10">
            <Image
              src="/folsetech-logo.png"
              alt="FolseTech logo"
              fill
              sizes="40px"
              className="object-contain drop-shadow-[0_0_18px_rgba(77,214,255,0.22)]"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">{site.name}</div>
            <div className="text-xs text-ink/70">{site.location}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active = item.href === "/" || item.href === "/#top" ? pathname === "/" : false;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm rounded-lg transition",
                  "hover:text-ink hover:bg-white/5",
                  active && "text-ink bg-white/5"
                )}
                aria-current={active ? "page" : undefined}
              >
                {active && (
                  <MotionDiv
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg border border-line shadow-glow"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#contact" className="hidden sm:block">
            <Button variant="primary">Let’s Build Together</Button>
          </Link>
          <Link href="/#contact" className="sm:hidden">
            <Button variant="primary" size="sm">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
