import { NextResponse } from 'next/server';

// Canonical Discord invite for buildingthefuture / Hermes community.
// Rotate the URL here once if the invite ever changes.
const DISCORD_INVITE = 'https://discord.gg/mATfwmrsWx';

export function GET() {
  return NextResponse.redirect(DISCORD_INVITE, 301);
}
