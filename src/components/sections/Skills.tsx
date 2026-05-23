"use client";

import { motion } from "framer-motion";
import { skillGroups, skills } from "@/lib/content";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

const accent: Record<string, string> = {
  violet: "167,139,250",
  cyan: "34,211,238",
  pink: "240,171,252",
  lime: "190,242,100",
};

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-14 flex flex-col gap-4">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
              · 04 — Stack
            </span>
          </Reveal>
          <AnimatedText
            as="h2"
            text="Tools of the trade."
            className="font-display text-4xl font-semibold tracking-tight sm:text-6xl"
          />
        </div>

        <Marquee className="mb-16">
          {skills.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-3 text-3xl font-display font-medium text-white/30 transition-colors hover:text-white sm:text-4xl"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              {s.name}
            </div>
          ))}
        </Marquee>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 16 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-50 blur-3xl transition-opacity group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle, rgba(${accent[g.accent]},0.45), transparent 70%)` }}
                />
                <h3 className="font-display text-xl font-semibold text-white">{g.title}</h3>
                <div className="mt-1 h-px w-10" style={{ background: `rgb(${accent[g.accent]})` }} />
                <ul className="mt-5 flex flex-col gap-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-white/70">
                      <span
                        className="inline-block h-1 w-1 rounded-full"
                        style={{ background: `rgb(${accent[g.accent]})` }}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
