"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";
import { profile, stats } from "@/lib/content";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-center pt-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div style={{ y, opacity }} className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-white/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open for new Android · iOS · KMP work
          </motion.div>

          <div className="flex flex-col gap-3">
            <AnimatedText
              text="Crafting mobile"
              as="h1"
              className="text-balance font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl"
            />
            <AnimatedText
              text="experiences."
              as="h1"
              delay={0.15}
              className="text-balance font-display text-5xl font-semibold leading-[0.95] tracking-tight gradient-text sm:text-7xl md:text-8xl"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-2xl text-balance text-base text-white/65 sm:text-lg"
          >
            I'm <span className="text-white">{profile.name}</span> — a {profile.role.toLowerCase()} based in {profile.location}.
            {" "}{profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#work">
              <Sparkles size={16} />
              See my work
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Get in touch
              <ArrowUpRight size={16} />
            </MagneticButton>
            <a
              href={profile.resume}
              download
              data-cursor="pointer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.dl
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.85 } } }}
            className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] sm:grid-cols-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="flex flex-col gap-1 bg-[var(--color-bg)] px-6 py-5"
              >
                <dt className="text-xs uppercase tracking-widest text-white/40">{s.label}</dt>
                <dd className="font-display text-3xl font-semibold text-white">{s.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mx-auto mt-16 flex w-fit flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
