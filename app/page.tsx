import { FeaturedProjects } from './components/FeaturedProjects';
import { HeroSection } from './components/HeroSection';
import { MissionStatement } from './components/MissionStatement';
import { NewsletterCTA } from './components/NewsletterCTA';
import { SocialLinksRow } from './components/SocialLinksRow';
import { BusinessesSection } from './components/BusinessesSection';
import { TechStackBadges } from './components/TechStackBadges';
import { ThemeSwitcher } from './components/ThemeSwitcher';

const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Eric',
  alternateName: '@outsourc_e',
  url: 'https://buildingthefuture.io',
  sameAs: ['https://x.com/outsourc_e', 'https://github.com/outsourc-e'],
  jobTitle: 'Developer & Entrepreneur',
  worksFor: {
    '@type': 'Organization',
    name: 'buildingthefuture.io'
  }
};

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-3 pb-12 pt-6 sm:px-6 sm:pt-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }} />
      <HeroSection />
      <SocialLinksRow />
      <FeaturedProjects />
      <BusinessesSection />
      <TechStackBadges />
      <MissionStatement />
      <NewsletterCTA />
      <footer className="mt-10 text-center text-xs text-muted/80">© 2026 buildingthefuture.io · Made with ⚡ and AI</footer>
      <ThemeSwitcher />
    </main>
  );
}
