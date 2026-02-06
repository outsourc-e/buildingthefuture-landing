import type { SVGProps } from 'react';

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
      <path d="M18.4 2.4H21l-6.66 7.6L22 21.6h-6l-4.7-6.7-5.9 6.7H2.8l7.1-8.1L2 2.4h6.1l4.25 6.1 6.05-6.1Z" />
    </svg>
  );
}

export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
      <path d="M9 19c-4.5 1.4-4.5-2.4-6.3-3M15 21v-3.8a3.3 3.3 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.7 1.4a12.5 12.5 0 0 0-6.6 0C6 1.4 4.9 1.7 4.9 1.7a4.8 4.8 0 0 0-.1 3.5 5.2 5.2 0 0 0-1.4 3.6c0 5.3 3.2 6.5 6.2 6.8a3.3 3.3 0 0 0-.9 2.6V21" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
