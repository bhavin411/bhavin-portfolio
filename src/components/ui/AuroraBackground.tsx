"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-noise opacity-[0.18] mix-blend-overlay" />

      <motion.div
        aria-hidden
        className="absolute -top-40 -left-32 h-[42rem] w-[42rem] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(167,139,250,0.55), transparent 60%)" }}
        animate={{ x: [0, 80, -40, 0], y: [0, 60, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.45), transparent 60%)" }}
        animate={{ x: [0, -60, 30, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[-12rem] left-1/4 h-[36rem] w-[36rem] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle at 60% 40%, rgba(240,171,252,0.45), transparent 60%)" }}
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--color-bg)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </div>
  );
}
