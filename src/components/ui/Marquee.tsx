"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
};

export function Marquee({ children, className, reverse = false }: Props) {
  return (
    <div className={cn("relative flex w-full overflow-hidden", className)}>
      <div
        className="flex shrink-0 animate-marquee gap-12 pr-12"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
        {children}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent" />
    </div>
  );
}
