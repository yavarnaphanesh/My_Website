"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12">
      <p className="mb-2 font-mono text-sm uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
    </Reveal>
  );
}
