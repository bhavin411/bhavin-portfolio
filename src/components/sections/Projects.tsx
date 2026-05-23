"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Apple, Play } from "lucide-react";
import { projects } from "@/lib/content";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

const accentMap = {
  violet: "167,139,250",
  cyan: "34,211,238",
  pink: "240,171,252",
  lime: "190,242,100",
} as const;

export function Projects() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-16 flex flex-col gap-4">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
              · 02 — Selected Work
            </span>
          </Reveal>
          <AnimatedText
            as="h2"
            text="Apps in production."
            className="font-display text-4xl font-semibold tracking-tight sm:text-6xl"
          />
          <Reveal delay={0.15}>
            <p className="max-w-xl text-white/60">
              Live on the Play Store and App Store — built end-to-end, from architecture to release.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
          {projects.map((p, i) => {
            const color = accentMap[p.accent as keyof typeof accentMap];
            const span = p.featured ? "md:col-span-3" : "md:col-span-3";
            return (
              <Reveal key={p.title} delay={i * 0.08} className={span}>
                <TiltCard glowColor={color} className="h-full">
                  <article className="relative flex h-full flex-col gap-6 overflow-hidden p-8 sm:p-10">
                    {/* phone mockup glow */}
                    <div className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full opacity-70 blur-3xl"
                      style={{ background: `radial-gradient(circle, rgba(${color},0.35), transparent 70%)` }}
                    />

                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
                          {p.subtitle}
                        </div>
                        <h3 className="mt-1 font-display text-3xl font-semibold text-white">
                          {p.title}
                        </h3>
                      </div>

                      <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ type: "spring", stiffness: 260, damping: 16 }}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
                        style={{ color: `rgb(${color})` }}
                      >
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </div>

                    <p className="text-sm leading-relaxed text-white/65">{p.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-white/65"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-3 pt-2">
                      {"android" in p.links && p.links.android && (
                        <a
                          href={p.links.android}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group/btn inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/80 transition-colors hover:bg-white/[0.08] hover:text-white"
                          data-cursor="pointer"
                        >
                          <Play size={14} className="fill-current" />
                          Play Store
                          <ArrowUpRight size={12} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                        </a>
                      )}
                      {"ios" in p.links && p.links.ios && (
                        <a
                          href={p.links.ios}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group/btn inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/80 transition-colors hover:bg-white/[0.08] hover:text-white"
                          data-cursor="pointer"
                        >
                          <Apple size={14} />
                          App Store
                          <ArrowUpRight size={12} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                        </a>
                      )}
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
