"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { Briefcase, ExternalLink, GraduationCap, Award } from "lucide-react";
import { resume, type Project } from "@/data/resume";
import { Reveal, SectionTitle } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section">
      <SectionTitle eyebrow="01 · About" title="A little about me" />
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{resume.about}</p>
        </Reveal>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
          {resume.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="card text-center md:text-left">
                <p className="text-gradient text-3xl font-bold md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle eyebrow="02 · Experience" title="Where I've worked" />
      <ol className="relative ml-3 border-l border-white/10">
        {resume.experience.map((job, i) => (
          <li key={`${job.company}-${i}`} className="mb-12 ml-8">
            <motion.span
              className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-ink"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
            >
              <Briefcase size={12} />
            </motion.span>
            <Reveal delay={0.1}>
              <div className="card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">
                    {job.role} <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-muted">{job.period}</span>
                </div>
                {job.location && <p className="mt-1 text-sm text-muted">{job.location}</p>}
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle eyebrow="03 · Skills" title="What I work with" />
      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(resume.skills).map(([group, items], gi) => (
          <Reveal key={group} delay={gi * 0.1}>
            <div className="card h-full">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + i * 0.05 }}
                    whileHover={{ y: -3, scale: 1.06 }}
                    className="cursor-default rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TiltCard({ project }: { project: Project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="card group relative h-full overflow-hidden"
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`} className="text-muted hover:text-accent">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
        <p className="mt-3 text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs text-accent">
          {project.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle eyebrow="04 · Projects" title="Highlighted work" />
      <div className="grid gap-6 md:grid-cols-2">
        {resume.projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.1}>
            <TiltCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle eyebrow="05 · Education" title="Education & certifications" />
      <div className="grid gap-6 md:grid-cols-2">
        {resume.education.map((ed, i) => (
          <Reveal key={ed.degree} delay={i * 0.1}>
            <div className="card flex gap-4">
              <GraduationCap className="shrink-0 text-accent" />
              <div>
                <h3 className="font-semibold">{ed.degree}</h3>
                <p className="text-muted">{ed.school}</p>
                <p className="mt-1 font-mono text-sm text-muted">{ed.period}</p>
              </div>
            </div>
          </Reveal>
        ))}
        {resume.certifications.map((cert, i) => (
          <Reveal key={cert} delay={i * 0.1}>
            <div className="card flex gap-4">
              <Award className="shrink-0 text-accent-2" />
              <p>{cert}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
