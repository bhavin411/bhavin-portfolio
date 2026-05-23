"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 pb-12 pt-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[18vw] font-semibold leading-none tracking-tighter gradient-text"
        >
          {profile.name.split(" ")[0]}.
        </motion.h2>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind & Framer Motion.
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            All systems normal
          </div>
        </div>
      </div>
    </footer>
  );
}
