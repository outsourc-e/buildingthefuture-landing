'use client';

import { motion } from 'framer-motion';

export function MissionStatement() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="glass mt-10 rounded-2xl p-5 sm:p-6"
    >
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-3">Building the Future</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
        I build products where AI feels native: faster execution, cleaner operations, and tools developers actually want to use daily.
      </p>
    </motion.section>
  );
}
