"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["about", "experience", "skills", "projects", "education", "contact"];

export function Nav({ name }: { name: string }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-white/10 bg-ink/70 backdrop-blur-xl" : ""
      }`}
    >
      <motion.div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-accent to-accent-2"
        style={{ scaleX: progress }}
      />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-lg font-bold">
          {initials}
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden gap-8 text-sm text-muted md:flex">
          {sections.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="capitalize transition-colors hover:text-white">
                {id}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4 border-b border-white/10 bg-ink/95 px-6 pb-6 md:hidden"
        >
          {sections.map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="capitalize">
                {id}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
