"use client";

import Image from "next/image";
import Container from "@/components/container";
import GlowCard from "@/components/glow-card";
import { MotionSection } from "@/components/motion";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="pt-10 md:pt-14"
    >
      <Container>
        <GlowCard className="p-0">
          <div className="relative p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-electric/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            </div>

            <div className="relative grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-ink/70">
                  <span className="h-2 w-2 rounded-full bg-electric shadow-glow" />
                  Gonzales, Louisiana • 70737
                </div>

                <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
                  Modern Web Design <span className="text-electric">+</span> AI Solutions
                </h1>

                <p className="mt-4 text-sm md:text-base text-ink/70 max-w-xl">
                  {site.name} builds high-converting websites with performance-first development,
                  local SEO, and automation that keeps your business moving.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/#contact"
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-electric text-bg px-5 text-sm font-semibold shadow-glow hover:bg-electric/90"
                  >
                    Let’s Build Together
                  </a>
                  <a
                    href="/#portfolio"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-line bg-white/0 px-5 text-sm font-medium hover:bg-white/5"
                  >
                    View Portfolio
                  </a>
                </div>

                <div className="mt-6 text-xs text-ink/60">
                  Fast. Accessible. SEO-focused. Deploy-ready on Vercel or AWS Amplify.
                </div>
              </div>

              <div className="relative">
                <div className="relative mx-auto h-44 w-44 md:h-56 md:w-56">
                  <Image
                    src="/folsetech-logo.png"
                    alt="FolseTech logo"
                    fill
                    sizes="224px"
                    className="object-contain drop-shadow-[0_0_30px_rgba(77,214,255,0.22)]"
                    priority
                  />
                </div>

                <div className="mt-6 grid gap-2 text-sm text-ink/70">
                  <div className="flex items-center justify-between">
                    <span className="text-ink/60">Owner</span>
                    <span className="font-medium text-ink">{site.owner}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink/60">Phone</span>
                    <a className="font-medium text-ink hover:underline" href={`tel:${site.phone}`}>
                      {site.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink/60">Email</span>
                    <a className="font-medium text-ink hover:underline" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlowCard>
      </Container>
    </MotionSection>
  );
}
