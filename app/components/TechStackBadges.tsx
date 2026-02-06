'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stack = [
  { platform: 'OpenClaw', role: 'Core', href: 'https://openclaw.ai', tone: 'bg-[#FF8A3D] text-[#2B1100]' },
  { platform: 'Convex', role: 'Backend', href: 'https://convex.dev', tone: 'bg-[#EE342F] text-white' },
  { platform: 'Vercel', role: 'Hosting', href: 'https://vercel.com', tone: 'bg-[#000000] text-white' },
  { platform: 'Anthropic', role: 'AI', href: 'https://anthropic.com', tone: 'bg-[#C89B7B] text-[#2F1C12]' },
  { platform: 'OpenAI', role: 'AI', href: 'https://openai.com', tone: 'bg-[#10A37F] text-[#04130F]' }
];

export function TechStackBadges() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mt-8"
    >
      <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-[0.18em] text-slate-300 md:mb-2.5">
        Powered By
      </h2>
      <div className="glass badge-shimmer relative overflow-hidden rounded-xl border border-white/15 bg-slate-950/40 p-2 md:p-2.5">
        <div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:justify-center md:overflow-x-visible md:pb-0">
          {stack.map((item, index) => (
            <motion.div
              key={item.platform}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.05 }}
              className="shrink-0"
            >
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass premium-hover badge-hover group inline-flex overflow-hidden rounded-md border border-white/20 text-[10px] font-semibold uppercase tracking-[0.08em] transition hover:border-accent-3/60"
                aria-label={`${item.platform} - ${item.role}`}
              >
                <span className="bg-slate-950/80 px-2 py-1 text-slate-100">{item.platform}</span>
                <span className={`${item.tone} px-2 py-1`}>{item.role}</span>
              </Link>
            </motion.div>
          ))}
        </div>
        <p className="pointer-events-none mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-400 md:hidden">
          Swipe to scroll
        </p>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-950/70 to-transparent md:hidden" />
      </div>
    </motion.section>
  );
}
