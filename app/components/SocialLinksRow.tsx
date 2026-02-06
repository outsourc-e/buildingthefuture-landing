'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GitHubIcon, InstagramIcon, XIcon } from './icons';

const links = [
  { label: 'X / Twitter', href: 'https://x.com/outsourc_e', icon: XIcon },
  { label: 'GitHub', href: 'https://github.com/outsourc-e', icon: GitHubIcon },
  { label: 'Instagram', href: 'https://instagram.com/outsourc.e', icon: InstagramIcon }
];

/**
 * Social links sit near the top of the homepage and can be inside the viewport
 * immediately on mount (especially on back-navigation). Uses mount-driven
 * `animate` instead of `whileInView` to avoid the same blank-on-return bug
 * fixed in FeaturedProjects.
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
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      animate={hasMounted ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3"
    >
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass premium-hover group flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm text-slate-200 transition hover:border-accent-2/60 hover:text-white"
          >
            <Icon className="h-4 w-4" />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </motion.section>
  );
}
