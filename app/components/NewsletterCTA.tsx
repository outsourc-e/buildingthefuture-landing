'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

export function NewsletterCTA() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email') ?? '').trim();

    if (!email) {
      return;
    }

    // TODO: Replace console logging with backend newsletter integration.
    console.log('[buildingthefuture.io] newsletter signup:', email);
    setIsSuccess(true);
    event.currentTarget.reset();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="glass mt-10 rounded-2xl border border-accent-2/45 bg-gradient-to-br from-accent-2/18 to-accent-1/10 p-5 shadow-glow sm:p-6"
    >
      <h2 className="text-lg font-semibold text-white">Stay in the loop</h2>
      <p className="mt-2 text-sm text-slate-200">Get launch notes and dev updates from buildingthefuture.io.</p>
      <form className="mt-4 flex flex-col gap-2 sm:flex-row" onSubmit={handleSubmit} aria-label="Newsletter form">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@domain.com"
          className="h-11 w-full rounded-xl border border-white/25 bg-slate-950/50 px-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-accent-3"
          required
        />
        <button
          type="submit"
          className="premium-hover h-11 rounded-xl bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-accent-3"
        >
          Subscribe
        </button>
      </form>
      {isSuccess ? (
        <p className="mt-3 text-xs text-accent-3">Success. You&apos;re on the list.</p>
      ) : null}
      <p className="mt-3 text-xs text-slate-300">Prefer direct? Reach out: hello@buildingthefuture.io</p>
    </motion.section>
  );
}
