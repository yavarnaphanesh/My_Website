"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { resume } from "@/data/resume";
import { Reveal } from "./Reveal";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z" />
    </svg>
  );
}

export function Contact() {
  const links = [
    resume.links.github && { href: resume.links.github, label: "GitHub", icon: <GithubIcon /> },
    resume.links.linkedin && { href: resume.links.linkedin, label: "LinkedIn", icon: <LinkedinIcon /> },
    resume.phone && { href: `tel:${resume.phone}`, label: resume.phone, icon: <Phone size={20} /> },
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode }[];

  return (
    <section id="contact" className="section text-center">
      <Reveal>
        <p className="mb-2 font-mono text-sm uppercase tracking-[0.3em] text-accent">06 · Contact</p>
        <h2 className="text-gradient text-5xl font-extrabold tracking-tight md:text-7xl">Let&apos;s work together</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          I&apos;m available to join immediately. Whether you have a role in mind or just want to talk data, my inbox is open.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <motion.a
          href={`mailto:${resume.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-4 text-lg font-semibold text-ink shadow-[0_0_40px_-8px] shadow-accent"
        >
          <Mail size={20} /> {resume.email}
        </motion.a>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-muted">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              whileHover={{ y: -4 }}
              className="inline-flex items-center gap-2 hover:text-accent"
            >
              {link.icon} {link.label}
            </motion.a>
          ))}
        </div>
      </Reveal>
      <footer className="mt-24 font-mono text-xs text-muted">
        © {new Date().getFullYear()} {resume.name}. Built with Next.js, Tailwind CSS &amp; Framer Motion.
      </footer>
    </section>
  );
}
