"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/content";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: profile.socials.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  { icon: Download, label: "Resume", href: profile.resume },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 sm:p-16">
          {/* Animated gradient blob */}
          <motion.div
            aria-hidden
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(167,139,250,0.55), rgba(34,211,238,0.4), rgba(240,171,252,0.55), rgba(167,139,250,0.55))",
            }}
          />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
                  · 05 — Contact
                </span>
              </Reveal>
              <AnimatedText
                as="h2"
                text="Let's build"
                className="mt-4 font-display text-5xl font-semibold leading-[1] tracking-tight sm:text-7xl"
              />
              <AnimatedText
                as="h2"
                delay={0.1}
                text="something great."
                className="font-display text-5xl font-semibold leading-[1] tracking-tight gradient-text sm:text-7xl"
              />

              <Reveal delay={0.2}>
                <p className="mt-6 max-w-lg text-white/65">
                  Got a product idea, a tricky KMP problem or just want to chat about mobile?
                  My inbox is open — I usually reply within a day.
                </p>
              </Reveal>

              <Reveal delay={0.3} className="mt-8">
                <div className="flex flex-wrap gap-3">
                  <MagneticButton href={`mailto:${profile.email}`}>
                    <Mail size={16} />
                    {profile.email}
                  </MagneticButton>
                  <MagneticButton href={`tel:${profile.phone.replace(/\s/g, "")}`} variant="ghost">
                    <Phone size={16} />
                    {profile.phone}
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
                    Currently
                  </div>
                  <div className="mt-3 flex items-start gap-3">
                    <span className="relative mt-1.5 flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <p className="text-white/80">
                      Open to senior mobile / KMP roles & freelance product work for late {new Date().getFullYear()}.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-white/60">
                    <MapPin size={14} />
                    {profile.location}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3} className="mt-6">
                <div className="grid grid-cols-3 gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex flex-col items-start gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.06]"
                      data-cursor="pointer"
                    >
                      <s.icon size={18} className="text-white/80" />
                      <span className="flex w-full items-center justify-between text-xs text-white/60">
                        {s.label}
                        <ArrowUpRight
                          size={12}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
