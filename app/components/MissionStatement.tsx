'use client';

import { motion } from 'framer-motion';

export function MissionStatement() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="mission-tagline mx-auto mt-4 max-w-xl text-center text-xs italic text-slate-300"
    >
      Building products where AI feels native: faster execution, cleaner operations, and tools people want to use daily.
    </motion.p>
  );
}
