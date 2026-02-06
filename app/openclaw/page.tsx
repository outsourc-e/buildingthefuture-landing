import { DemoLandingPage } from '../components/DemoLandingPage';

export default function OpenClawPage() {
  return (
    <DemoLandingPage
      name="OpenClaw Studio"
      tagline="Your AI gateway command center"
      description="Orchestrate tools, prompts, automations, and live workflows from one studio that feels fast, focused, and operator-first."
      features={[
        'Unified agent dashboard for multi-tool AI operations',
        'Prompt pipelines with reusable templates and version history',
        'Live execution view with logs, retries, and handoff controls',
        'Workspace-level automation recipes for repeatable workflows'
      ]}
      visualLabel="Studio layout with agent activity streams, prompt controls, and execution telemetry."
      previewImageSrc="/assets/screenshots/openclaw-studio.jpg"
      previewImageAlt="OpenClaw Studio dashboard preview"
      waitlistCta="Get early access to OpenClaw Studio launches, new modules, and integration drops."
    />
  );
}
