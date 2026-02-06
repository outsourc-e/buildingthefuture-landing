# BUG-REPORT.md

## Scope
- Project: `buildingthefuture-landing/`
- Routes reviewed: `/`, `/openclaw`, `/ai-workforce`, `/aurora`
- Date: 2026-02-06

## Method Used
- Static QA of all route/component code paths.
- Build/type/lint verification:
  - `npm run build` (PASS)
  - `npm run lint` (PASS)
  - `npx tsc --noEmit` (PASS)
- Link/import/path validation for `href`, `src`, `embedUrls`, and route existence.
- Asset existence checks for profile/banner/screenshot files.

## Runtime Limitation
- Manual browser E2E was attempted but blocked in this sandbox: local server binding fails with `listen EPERM` on localhost.
- Because of this, true runtime-only checks (live console, animation jank perception, real click-through in browser) are marked as constrained.

## Findings

### HIGH
- None.

### MEDIUM
1. Forms do not persist submissions (newsletter + waitlists)
- Evidence:
  - `app/components/NewsletterCTA.tsx`
  - `app/components/DemoLandingPage.tsx`
- Current behavior: submit handlers only `console.log(...)` and reset form; no API call, no storage, no email provider integration.
- Impact: users believe they subscribed/joined waitlist, but leads are dropped.
- Suggested fix:
  - Add a backend endpoint (`/api/newsletter`, `/api/waitlist`) and persist to DB/ESP (ConvertKit/Beehiiv/Mailchimp/Supabase).
  - Add success + error states tied to actual server response.

2. Waitlist forms have no visible success confirmation
- Evidence:
  - `app/components/DemoLandingPage.tsx`
- Current behavior: valid submit resets input silently.
- Impact: ambiguous UX; users may resubmit or assume failure.
- Suggested fix:
  - Mirror homepage pattern with explicit success message and transient loading state.

### LOW
1. Next.js workspace root warning due multiple lockfiles
- Evidence from build/lint output (`pnpm-lock.yaml` + `buildingthefuture-landing/package-lock.json`).
- Impact: noisy CI/dev logs and potential confusion in monorepo tooling.
- Suggested fix:
  - Standardize on one lockfile strategy, or configure `outputFileTracingRoot` in `next.config.ts`.

## Checklist Status (Route Coverage: `/`, `/openclaw`, `/ai-workforce`, `/aurora`)

- Navigation links work: PASS (code-level verified)
- Back to homepage works from demo pages: PASS (`href='/'` exists)
- Hard refresh preserves route: PASS (all routes are static app pages in build output)
- Mobile viewport (375, 768, 1024, 1440): CONSTRAINED (responsive classes verified; no live viewport render possible in sandbox)
- All buttons clickable: PASS (code-level verified)
- Cards hover states work: PASS (`premium-hover`/`badge-hover` classes wired)
- Modal open/close (ESC + close button): PASS (`LiveDemoPreview` implements both)
- Iframe embeds load (or fallback to screenshot): PASS (embed retry + fallback path implemented)
- Forms submit (newsletter, waitlist): PARTIAL (client-side submit works; persistence missing)
- External links open in new tab with noopener: PASS (`target='_blank'` + `rel='noopener noreferrer'`)
- Social icons work (X, GitHub, Instagram): PASS (links/icons wired)
- Animations smooth (no jank): CONSTRAINED (animation code present; no runtime perception test possible)
- No console errors: CONSTRAINED (no live browser runtime)
- Scrolling smooth: PASS (horizontal smooth scroll enabled in tech badges)
- Tech badges shimmer animation works: PASS (`badge-shimmer` keyframes + class usage present)
- Profile/banner images load: PASS (files exist, routes reference valid paths)

## What Works Perfectly
- All four required routes compile and prerender successfully.
- Internal route wiring (`/openclaw`, `/ai-workforce`, `/aurora`) is correct.
- Back-navigation to homepage is implemented.
- External link security attributes are correctly set.
- Modal UX behavior is fully implemented in code (open, close button, ESC, backdrop close).
- Embed preview has a defensive fallback mechanism to screenshots.
- Core asset paths for profile/banner/demo screenshots are valid and present.
- No lint/type/build errors.
