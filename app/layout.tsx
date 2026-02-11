import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://buildingthefuture.io'),
  title: 'Eric | Building the Future',
  description:
    'Developer and entrepreneur shipping AI tools, platforms, and infrastructure. Explore projects from ClawSuite to ClawdHub.',
  keywords: ['buildingthefuture.io', 'Eric', 'AI tools', 'developer', 'entrepreneur', 'ClawSuite'],
  openGraph: {
    title: 'Eric | Building the Future',
    description: 'A premium developer hub for projects, stack, and contact.',
    url: 'https://buildingthefuture.io',
    siteName: 'Building the Future',
    type: 'website',
    images: [{ url: '/assets/og-cover.png', width: 1200, height: 630, alt: 'Building the Future by Eric' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eric | Building the Future',
    description: 'Developer/entrepreneur building AI products.',
    creator: '@outsourc_e',
    images: ['/assets/og-cover.png']
  },
  alternates: {
    canonical: 'https://buildingthefuture.io'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
