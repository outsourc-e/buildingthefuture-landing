import { DemoLandingPage } from '../components/DemoLandingPage';

export default function OpenClawPage() {
  return (
    <DemoLandingPage
      name="ClawSuite"
      tagline="All-in-one command center for OpenClaw"
      description="Operate OpenClaw from one focused workspace for daily execution, automation, and team-level visibility."
      projectLinks={[
        { label: 'clawsuite.io', href: 'https://clawsuite.io' },
        { label: 'github.com/outsourc-e/clawsuite', href: 'https://github.com/outsourc-e/clawsuite' }
      ]}
      features={['Chat', 'Terminal', 'Files', 'Skills', 'Cron', 'Dashboard']}
      visualLabel="ClawSuite workspace with command panels, file context, and live operations telemetry."
      previewImageSrc="/assets/screenshots/openclaw-studio.jpg"
      previewImageAlt="ClawSuite dashboard preview"
      waitlistCta="Follow ClawSuite updates, releases, and module rollouts."
    />
  );
}
