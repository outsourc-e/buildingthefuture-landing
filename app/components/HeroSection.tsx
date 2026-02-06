'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const rotatingTaglines = ['Building AI Tools', 'Shipping Products', 'Scaling Operations', 'Building the Future'];

export function HeroSection() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [typedTagline, setTypedTagline] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = rotatingTaglines[taglineIndex];
    const atFullText = typedTagline === currentTagline;
    const atEmptyText = typedTagline.length === 0;

    const timeout = setTimeout(
      () => {
        if (!isDeleting && atFullText) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && atEmptyText) {
          setIsDeleting(false);
          setTaglineIndex((current) => (current + 1) % rotatingTaglines.length);
          return;
        }

        if (isDeleting) {
          setTypedTagline(currentTagline.slice(0, typedTagline.length - 1));
        } else {
          setTypedTagline(currentTagline.slice(0, typedTagline.length + 1));
        }
      },
      !isDeleting && atFullText ? 1200 : isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [isDeleting, taglineIndex, typedTagline]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-3xl"
    >
      <Image
        src="/assets/banner.jpg"
        alt="Dreamy Ghibli-style sky"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-page/85 via-page/65 to-accent-1/30" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent-2/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-24 h-48 w-48 rounded-full bg-accent-1/25 blur-3xl" />

      <div className="relative z-10 p-3 sm:p-5">
        <div className="glass glow-ring rounded-3xl p-5 sm:p-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 rounded-3xl border border-white/30 bg-white/10 p-1.5 shadow-[0_0_36px_rgba(74,144,217,0.35)]">
              <Image
                src="/assets/profile.jpg"
                alt="Eric with sunglasses in Miami"
                width={112}
                height={112}
                priority
                className="h-24 w-24 rounded-2xl object-cover sm:h-28 sm:w-28"
              />
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Eric</h1>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.26em] text-accent-3">@outsourc_e</p>
            <p className="mt-4 h-6 text-sm font-medium text-accent-1 sm:text-base">
              {typedTagline}
              <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-accent-3 align-middle" />
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-100 sm:text-base">
              Developer and entrepreneur crafting AI-native products, automation systems, and dev tools that scale fast.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
