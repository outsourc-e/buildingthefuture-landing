'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type DemoLandingPageProps = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  visualLabel: string;
  previewImageSrc: string;
  previewImageAlt: string;
  waitlistCta: string;
};

export function DemoLandingPage({
  name,
  tagline,
  description,
  features,
  visualLabel,
  previewImageSrc,
  previewImageAlt,
  waitlistCta
}: DemoLandingPageProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const emailInputId = `${name.toLowerCase().replace(/\s+/g, '-')}-email`;

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsExpanded(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isExpanded]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email') ?? '').trim();

    if (!email) {
      return;
    }

    // TODO: Replace console logging with backend waitlist API integration.
    console.log(`[${name}] waitlist signup:`, email);
    setIsSuccess(true);
    event.currentTarget.reset();
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="glass glow-ring relative overflow-hidden rounded-3xl p-7 sm:p-12"
      >
        <div className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full bg-accent-3/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-8 h-56 w-56 rounded-full bg-accent-1/25 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-3/15 via-accent-1/10 to-accent-2/15" />

        <div className="relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-3">Building the Future Demo</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-6xl">{name}</h1>
          <p className="mt-3 text-xl text-accent-1 sm:text-2xl">{tagline}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-100 sm:text-lg">{description}</p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
        className="mt-10"
      >
        <div className="glass preview-shimmer preview-glow relative overflow-hidden rounded-3xl p-5 sm:p-7">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">Preview</h2>
              <p className="mt-2 text-sm text-slate-200 sm:text-base">{visualLabel}</p>
            </div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-3">Click image to expand</p>
          </div>

          <motion.button
            type="button"
            onClick={() => setIsExpanded(true)}
            whileHover={{ scale: 1.005, y: -2 }}
            whileTap={{ scale: 0.995 }}
            className="group relative block h-[280px] w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-950/55 text-left shadow-[0_24px_60px_rgba(3,8,20,0.58)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-3 sm:h-[380px] md:h-[520px] lg:h-[620px]"
          >
            <Image
              src={previewImageSrc}
              alt={previewImageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition duration-500 group-hover:scale-[1.01]"
              style={{ objectPosition: 'top' }}
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent px-4 py-4 sm:px-6">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-300">Static Screenshot</p>
              <p className="mt-1 text-sm text-slate-100 sm:text-base">{previewImageAlt}</p>
            </div>
          </motion.button>
        </div>
      </motion.section>

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

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="mt-8 glass rounded-2xl border border-accent-3/40 bg-gradient-to-br from-accent-2/12 to-accent-1/8 p-5 shadow-glow sm:p-6"
      >
        <h2 className="text-lg font-semibold text-white">Join the Waitlist</h2>
        <p className="mt-2 text-sm text-slate-200">{waitlistCta}</p>
        <p className="mt-2 text-xs text-slate-300/90">Early access notifications coming soon.</p>
        <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit} aria-label={`${name} waitlist form`}>
          <label htmlFor={emailInputId} className="sr-only">
            Email address
          </label>
          <input
            id={emailInputId}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@domain.com"
            className="h-11 w-full rounded-xl border border-white/25 bg-slate-950/50 px-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-accent-3 focus-visible:ring-2 focus-visible:ring-accent-3/65 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1222]"
          />
          <button
            type="submit"
            className="premium-hover h-11 rounded-xl bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-accent-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-3/65 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1222] active:scale-[0.99]"
          >
            Submit
          </button>
        </form>
        {isSuccess ? <p className="mt-3 text-xs text-accent-3">Thanks! You&apos;re on the list.</p> : null}
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.3, delay: 0.08 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="glass premium-hover inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-accent-3 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-3/65 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1222]"
        >
          ← Back to buildingthefuture.io
        </Link>
      </motion.div>

      {isExpanded ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-3 backdrop-blur-md sm:p-6"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="glass relative w-full max-w-6xl rounded-3xl p-3 shadow-[0_28px_100px_rgba(0,0,0,0.62)] sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="premium-hover absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-slate-950/70 text-xl text-white"
              aria-label="Close expanded preview"
            >
              ×
            </button>
            <div className="relative h-[72vh] max-h-[900px] overflow-hidden rounded-2xl border border-white/20 bg-slate-950/55">
              <Image
                src={previewImageSrc}
                alt={previewImageAlt}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
