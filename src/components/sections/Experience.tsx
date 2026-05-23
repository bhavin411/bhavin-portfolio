"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { education, experiences } from "@/lib/content";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-16 flex flex-col gap-4">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
              · 03 — Experience
            </span>
          </Reveal>
          <AnimatedText
            as="h2"
            text="A career, in motion."
            className="font-display text-4xl font-semibold tracking-tight sm:text-6xl"
          />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-violet-400/70 via-pink-300/40 to-transparent sm:block"
          />

          <ol className="flex flex-col gap-10">
            {experiences.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.1}>
                <li className="relative sm:pl-16">
                  <motion.span
                    aria-hidden
                    whileHover={{ scale: 1.4 }}
                    className="absolute left-[10px] top-3 hidden h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_0_4px_rgba(167,139,250,0.25)] sm:block"
                  />
                  <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-2xl font-semibold text-white">
                          {e.role}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-sm text-white/65">
                          <Briefcase size={14} className="text-violet-300" />
                          {e.company}
                          <span className="text-white/30">·</span>
                          <MapPin size={14} className="text-cyan-300" />
                          {e.location}
                        </div>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white/65">
                        {e.period}
                      </span>
                    </div>

                    <ul className="mt-5 flex flex-col gap-2.5">
                      {e.highlights.map((h, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.05 + 0.2 }}
                          className="flex items-start gap-3 text-sm text-white/70"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-300" />
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mt-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-8">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
              Education
            </div>
            {education.map((ed) => (
              <div
                key={ed.degree}
                className="mt-3 flex flex-wrap items-center justify-between gap-3"
              >
                <div>
                  <h4 className="font-display text-lg font-semibold text-white">{ed.degree}</h4>
                  <p className="text-sm text-white/60">{ed.school}</p>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/50">
                  {ed.period}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
