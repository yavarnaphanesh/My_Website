"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { resume } from "@/data/resume";

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % resume.rotatingRoles.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  const words = resume.name.split(" ");
  const offsets = words.map((_, w) => words.slice(0, w).join(" ").length + (w ? 1 : 0));

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="blob left-[-10%] top-[10%] bg-accent/30" />
        <div className="blob right-[-10%] top-[40%] bg-accent-2/30 [animation-delay:-6s]" />
        <div className="grid-overlay absolute inset-0" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-24">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex flex-wrap items-center gap-4 font-mono text-accent"
        >
          Hi, my name is
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-white">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {resume.availability}
          </span>
        </motion.p>

        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl" aria-label={resume.name}>
          {words.map((word, w) => (
            <span key={w} className="inline-block whitespace-nowrap">
              {word.split("").map((char, c) => {
                const i = offsets[w] + c;
                return (
                  <motion.span
                    key={c}
                    aria-hidden
                    className="inline-block"
                    initial={reduce ? false : { opacity: 0, y: 60, rotate: 8 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ delay: 0.2 + i * 0.04, type: "spring", stiffness: 200, damping: 18 }}
                  >
                    {char}
                  </motion.span>
                );
              })}
              {w < words.length - 1 && "\u00a0"}
            </span>
          ))}
        </h1>

        <div className="mt-4 min-h-[2lh] overflow-hidden text-2xl font-semibold leading-tight text-muted sm:text-5xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={resume.rotatingRoles[index]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="text-gradient"
            >
              {resume.rotatingRoles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        >
          {resume.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-semibold text-ink transition-transform hover:scale-105"
          >
            <Mail size={18} /> Get in touch
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            View my work
          </a>
          <span className="inline-flex items-center gap-1 text-sm text-muted">
            <MapPin size={16} /> {resume.location}
          </span>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        animate={reduce ? undefined : { y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown />
      </motion.a>
    </section>
  );
}
