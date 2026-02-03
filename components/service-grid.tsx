"use client";

import GlowCard from "@/components/glow-card";
import { MotionDiv } from "@/components/motion";

const items = [
  { title: "AI Web Design", desc: "Modern Next.js websites with conversion-focused layout, lightning performance, and a polished brand look." },
  { title: "SEO (Local + Technical)", desc: "Structured data, on-page SEO, indexing support, and city targeting to rank in Gonzales & surrounding areas." },
  { title: "Automation", desc: "Lead capture flows, email triggers, and workflows that reduce manual work and increase consistency." },
  { title: "Digital Solutions", desc: "Landing pages, content systems, analytics setup, and ongoing optimization for real results." }
];

export default function ServiceGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((s, idx) => (
        <MotionDiv
          key={s.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: idx * 0.04 }}
        >
          <GlowCard className="h-full">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{s.desc}</p>
                {detailed && (
                  <ul className="mt-4 grid gap-2 text-sm text-ink/70 list-disc pl-5">
                    <li>Performance-first build (Core Web Vitals)</li>
                    <li>Accessible UI (keyboard + contrast + semantic HTML)</li>
                    <li>Clean components and scalable structure</li>
                  </ul>
                )}
              </div>
              <div className="h-10 w-10 rounded-xl border border-line bg-white/5 shadow-glow" />
            </div>
          </GlowCard>
        </MotionDiv>
      ))}
    </div>
  );
}
