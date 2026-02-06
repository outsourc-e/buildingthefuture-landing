'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const businesses = [
  {
    emoji: '🏢',
    name: 'LuxeLab Management',
    description: 'Creator Agency',
    href: 'https://luxelabmgmt.com',
    accent: 'from-accent-1/25 via-accent-3/15 to-accent-2/10'
  },
  {
    emoji: '🤝',
    name: 'LuxeLab Group',
    description: 'B2B Services',
    href: 'https://luxelab.group',
    accent: 'from-accent-2/25 via-accent-1/15 to-accent-3/10'
  },
  {
    emoji: '🤖',
    name: 'Building the Future',
    description: 'AI Tools & Products',
    href: 'https://buildingthefuture.io',
    accent: 'from-accent-3/25 via-accent-2/15 to-accent-1/10'
  }
];

export function BusinessesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mt-8"
    >
      <h2 className="mb-3 text-lg font-semibold text-white">Businesses</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {businesses.map((business, index) => (
          <motion.div
            key={business.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
          >
            <Link
              href={business.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass premium-hover group relative block overflow-hidden rounded-xl p-3.5 sm:p-4"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${business.accent}`} />
              <div className="relative z-10">
                <p className="text-lg leading-none">{business.emoji}</p>
                <p className="mt-2 text-sm font-semibold text-white">{business.name}</p>
                <p className="mt-0.5 text-xs text-slate-200">{business.description}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-accent-3 transition group-hover:text-white">
                  {business.href.replace(/^https?:\/\//, '')}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
