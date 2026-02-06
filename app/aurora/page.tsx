import { DemoLandingPage } from '../components/DemoLandingPage';

export default function AuroraPage() {
  return (
    <DemoLandingPage
      name="Project Aurora"
      tagline="All-in-one business command center"
      description="Run planning, revenue insights, client delivery, and operational intelligence from a single cockpit built for modern founder-led teams."
      features={[
        'Executive dashboard combining finance, pipeline, and delivery health',
        'Smart planning assistant for goals, milestones, and risk signals',
        'Cross-project timeline with blockers, owners, and dependencies',
        'Automated briefing summaries delivered daily to your team'
      ]}
      visualLabel="Operations cockpit with KPI cards, timeline orchestration, and daily executive briefing widgets."
      previewImageSrc="/assets/screenshots/aurora-dashboard.jpg"
      previewImageAlt="Project Aurora dashboard and agent view preview"
      waitlistCta="Request early access to Project Aurora and help shape the roadmap."
    />
  );
}
