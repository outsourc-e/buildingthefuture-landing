'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const projects = [
  {
    title: '🧠 Hermes Workspace',
    subtitle: 'Open-source AI agent workspace',
    href: 'https://hermes-workspace.com',
    accent: 'from-accent-1/30 via-accent-3/20 to-accent-2/15'
  },
  {
    title: '🌍 HermesWorld',
    subtitle: 'AI agent RPG built into Workspace',
    href: 'https://hermes-world.ai',
    accent: 'from-purple-500/30 via-cyan-400/20 to-accent-3/15'
  },
  {
    title: '🤖 ClawSuite',
    subtitle: 'All-in-one command center for OpenClaw',
    href: '/openclaw',
    accent: 'from-accent-2/35 via-accent-3/20 to-accent-1/15'
  },
  {
    title: '🏢 MyAgencyLab',
    subtitle: 'B2B operations platform',
    href: 'https://myagencylab.com',
    accent: 'from-accent-3/30 via-accent-2/20 to-accent-1/15'
  },
  {
    title: '⚡ BenchLoop',
    subtitle: 'Local LLM benchmarking — quality, speed, agent loop',
    href: 'https://bench-loop.com',
    accent: 'from-emerald-500/30 via-accent-3/20 to-accent-2/15'
  }
];

/**
 * Featured project cards on the homepage.
 *
 * BUG FIX — "blank cards on back-navigation":
 * Previously these cards used Framer Motion's `whileInView` with
 * `viewport={{ once: true }}`.  When the user navigated to a demo page and
 * then returned (browser back or the "← Back" link), the component would
 * remount with `initial={{ opacity: 0 }}`.  Because the cards were already
 * inside the viewport at mount time, the IntersectionObserver created by
 * Framer Motion could miss the initial intersection entry — leaving the cards
 * permanently invisible.
 *
 * The fix uses a tiny `useEffect` that flips a `hasMounted` flag on the first
 * paint.  We then drive the animation with `animate` (guaranteed to run) rather
 * than the viewport-dependent `whileInView`.  The staggered entrance is
 * preserved via per-card `delay`.
 */
export function FeaturedProjects() {
  const [hasMounted, setHasMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Flip on next frame so `initial` styles are applied first.
    const id = requestAnimationFrame(() => setHasMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="featured-section mt-7">
      <h2 className="featured-heading mb-3 text-center text-lg font-semibold text-white">Featured Projects</h2>
      <div className="featured-grid grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          // Internal routes should stay in-tab; external demos open in a new tab.
          const isExternal = project.href.startsWith('http');
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              animate={hasMounted ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
            >
              <Link
                href={project.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="project-card glass premium-hover group relative block overflow-hidden rounded-2xl p-3.5 sm:p-4"
              >
                <div className={`project-card-accent pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-90`} />
                <div className="project-card-content relative z-10 text-center">
                  <p className="project-title text-base font-semibold text-white">{project.title}</p>
                  <p className="project-subtitle mt-1 text-sm text-slate-200">{project.subtitle}</p>
                  <p className="project-link mt-3 text-xs uppercase tracking-[0.2em] text-accent-3 transition group-hover:text-white">
                    View demo
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
