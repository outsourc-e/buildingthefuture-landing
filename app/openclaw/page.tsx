'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ProductShowcase } from '../components/ProductShowcase';

const projectLinks = [
  { label: 'clawsuite.io', href: 'https://clawsuite.io' },
  { label: 'github.com/outsourc-e/clawsuite', href: 'https://github.com/outsourc-e/clawsuite' },
];

const features = ['Chat', 'Terminal', 'Files', 'Skills', 'Cron', 'Dashboard'];

export default function OpenClawPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-3 pb-12 pt-4 sm:px-6 sm:pt-8">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="mb-3 sm:mb-4"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md transition hover:border-accent-3/50 hover:bg-white/10 hover:text-white sm:text-sm"
        >
          <span>←</span>
          <span>Home</span>
        </Link>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="glass glow-ring relative overflow-hidden rounded-3xl p-5 sm:p-12"
      >
        <div className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full bg-accent-3/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-8 h-56 w-56 rounded-full bg-accent-1/25 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-3/15 via-accent-1/10 to-accent-2/15" />

        <div className="relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-3">Building the Future Demo</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-6xl">ClawSuite</h1>
          <p className="mt-3 text-xl text-accent-1 sm:text-2xl">All-in-one command center for OpenClaw</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-100 sm:text-lg">
            Operate OpenClaw from one focused workspace for daily execution, automation, and team-level visibility.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {projectLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-slate-100 transition hover:border-accent-3/60 hover:bg-white/15 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Interactive Product Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
        className="mt-10"
      >
        <ProductShowcase />
      </motion.section>

      {/* Features */}
      <section className="mt-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="glass badge-shimmer preview-glow relative overflow-hidden rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(5,8,20,0.3)] sm:p-8"
        >
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Core Features</h2>
          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-300/80 sm:text-sm">Built for high-leverage teams</p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeOut' }}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 transition-colors duration-200 hover:border-accent-3/50 hover:bg-white/10 sm:text-base"
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>
    </main>
  );
}
