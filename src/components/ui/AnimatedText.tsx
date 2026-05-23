"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

const container = (delay: number, stagger: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const word: Variants = {
  hidden: { y: "115%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AnimatedText({
  text,
  className,
  delay = 0,
  stagger = 0.08,
  as = "h2",
}: Props) {
  const Tag = motion[as];
  return (
    <Tag
      className={cn("inline-block", className)}
      variants={container(delay, stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span variants={word} className="inline-block will-change-transform">
            {w}
            {i < text.split(" ").length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
