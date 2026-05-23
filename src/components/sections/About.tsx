"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Layers, Linkedin, MapPin, Smartphone, Zap } from "lucide-react";
import { profile } from "@/lib/content";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

const pillars = [
  {
    icon: Smartphone,
    title: "Native first",
    body: "Jetpack Compose and SwiftUI for fluid, platform-true UI.",
    color: "167,139,250",
  },
  {
    icon: Layers,
    title: "Multiplatform",
    body: "One Kotlin codebase, two app stores — without compromise.",
    color: "34,211,238",
  },
  {
    icon: Zap,
    title: "Real-time",
    body: "WebSocket pipelines that keep UI in lock-step with data.",
    color: "240,171,252",
  },
  {
    icon: Code2,
    title: "Clean code",
    body: "Modular, testable architectures that scale with the team.",
    color: "190,242,100",
  },
] as const;

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-16 flex flex-col gap-4">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
              · 01 — About
            </span>
          </Reveal>
          <AnimatedText
            as="h2"
            text="Engineer. Builder. Mentor."
            className="font-display text-4xl font-semibold tracking-tight sm:text-6xl"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Photo card */}
          <Reveal className="lg:col-span-4">
            <TiltCard className="h-full">
              <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-2/5"
                    style={{
                      background:
                        "linear-gradient(to top, var(--color-surface) 0%, color-mix(in oklab, var(--color-surface) 60%, transparent) 55%, transparent 100%)",
                    }}
                  />

                  {/* Floating glow */}
                  <motion.div
                    aria-hidden
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-60 blur-3xl"
                    style={{
                      background:
                        "conic-gradient(from 0deg, rgba(167,139,250,0.6), rgba(34,211,238,0.4), rgba(240,171,252,0.55), rgba(167,139,250,0.6))",
                    }}
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/70">
                      Available
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-white/65">{profile.role}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="inline-flex items-center gap-1.5 text-xs text-white/55">
                      <MapPin size={12} />
                      {profile.location.split(",")[0]}
                    </span>
                    <a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-xs text-white/55 transition-colors hover:text-white"
                      data-cursor="pointer"
                    >
                      <Linkedin size={12} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Bio card */}
          <Reveal className="lg:col-span-8">
            <TiltCard className="h-full">
              <div className="flex h-full flex-col gap-6 p-8 sm:p-10">
                <p className="text-lg leading-relaxed text-white/80">
                  I've spent the last <span className="text-white">{profile.yearsExperience}+ years</span> turning
                  product ideas into shipped mobile apps. I started deep in Android — Java, then Kotlin, then
                  Jetpack Compose — and over the last two years moved into iOS through Kotlin Multiplatform,
                  writing shared business logic and platform-native UI.
                </p>
                <p className="text-base leading-relaxed text-white/60">
                  At Tixza Digital I lead a small mobile team: I own architecture, run code reviews,
                  mentor engineers and ship production releases used by thousands of people every day —
                  from live-sports scoring to wellness and hospitality apps.
                </p>
                <p className="text-base leading-relaxed text-white/60">
                  I care about details — micro-interactions, motion, perceived performance — and the
                  invisible scaffolding that makes a product feel reliable. Currently exploring Compose
                  Multiplatform for desktop, and AI-assisted developer tooling.
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {["Kotlin", "Swift", "Compose", "SwiftUI", "KMP", "WebSockets"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Pillars */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <TiltCard glowColor={p.color} className="h-full">
                  <div className="flex h-full flex-col gap-3 p-6">
                    <div
                      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10"
                      style={{ background: `rgba(${p.color},0.12)`, color: `rgb(${p.color})` }}
                    >
                      <p.icon size={18} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{p.body}</p>
                    <motion.div
                      aria-hidden
                      className="mt-auto h-px w-full"
                      style={{
                        background: `linear-gradient(90deg, transparent, rgba(${p.color},0.6), transparent)`,
                      }}
                    />
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
