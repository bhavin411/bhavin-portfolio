"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Ring uses a light spring so it trails subtly without feeling laggy.
  const ringX = useSpring(x, { stiffness: 900, damping: 45, mass: 0.25 });
  const ringY = useSpring(y, { stiffness: 900, damping: 45, mass: 0.25 });

  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const isInteractive =
        t.closest("a, button, [data-cursor='pointer'], input, textarea") !== null;
      setHover(isInteractive);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
        style={{ x, y }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <div className="h-1.5 w-1.5 rounded-full bg-white" />
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          animate={{
            width: hover ? 56 : 34,
            height: hover ? 56 : 34,
            borderColor: hover ? "rgba(167,139,250,0.9)" : "rgba(255,255,255,0.35)",
            backgroundColor: hover ? "rgba(167,139,250,0.10)" : "rgba(255,255,255,0)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border backdrop-blur-sm"
        />
      </motion.div>
    </>
  );
}
