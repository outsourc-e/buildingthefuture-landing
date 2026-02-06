'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const links = [
  {
    label: 'X / Twitter',
    href: 'https://x.com/outsourc_e',
    bg: 'bg-black',
    ring: 'ring-white/20',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/outsourc-e',
    bg: 'bg-[#24292f]',
    ring: 'ring-white/20',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/outsourc.e',
    bg: 'bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743]',
    ring: 'ring-[#e6683c]/30',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

/**
 * Link.me–style circular brand icon row. Compact, visual, mobile-first.
 * Uses mount-driven `animate` to avoid blank-on-return bug.
 */
export function SocialLinksRow() {
  const [hasMounted, setHasMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const id = requestAnimationFrame(() => setHasMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
      animate={hasMounted ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="mt-4 flex items-center justify-center gap-4"
    >
      {links.map((link, i) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={hasMounted ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 0.06 * i, duration: 0.3, ease: 'easeOut' }}
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`flex h-12 w-12 items-center justify-center rounded-full ${link.bg} ring-2 ${link.ring} transition-all duration-200 hover:scale-110 hover:brightness-110 hover:shadow-[0_0_20px_rgba(245,197,66,0.3)] active:scale-95`}
          >
            {link.icon}
          </Link>
        </motion.div>
      ))}
    </motion.section>
  );
}
