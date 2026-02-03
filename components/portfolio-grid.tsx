"use client";

import GlowCard from "@/components/glow-card";
import { MotionDiv } from "@/components/motion";
import { portfolio } from "@/lib/portfolio";

export default function PortfolioGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {portfolio.map((p, idx) => (
        <MotionDiv
          key={p.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: idx * 0.05 }}
          whileHover={{ y: -4 }}
        >
          <GlowCard className="h-full">
            <div className="text-xs tracking-[0.2em] uppercase text-gold/90">{p.category}</div>
            <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{p.description}</p>
            <ul className="mt-4 grid gap-2 text-sm text-ink/70">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-glow" />
                  {h}
                </li>
              ))}
            </ul>
          </GlowCard>
        </MotionDiv>
      ))}
    </div>
  );
}
