import { DemoLandingPage } from '../components/DemoLandingPage';

export default function AIWorkforcePage() {
  return (
    <DemoLandingPage
      name="AI Workforce"
      tagline="Autonomous agent swarm platform"
      description="Deploy coordinated AI teams that can execute real business tasks across research, operations, support, and growth with human oversight."
      features={[
        'Role-based agent squads for sales, ops, and customer success',
        'Task routing engine with priority queues and SLA guardrails',
        'Human-in-the-loop approvals for high-impact decisions',
        'Performance analytics tracking outcomes by agent and workflow'
      ]}
      visualLabel="Mission board showing active agents, queue priorities, and cross-team task handoffs."
      previewImageSrc="/assets/screenshots/ai-workforce-preview.jpg"
      previewImageAlt="AI Workforce mission control with active agents, task board, and performance analytics"
      waitlistCta="Join the AI Workforce waitlist for pilot access and deployment playbooks."
    />
  );
}
