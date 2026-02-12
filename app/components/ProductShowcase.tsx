"use client";

import { useEffect, useState, useCallback } from "react";

const SCREENS = ["Dashboard", "Agent Hub", "Chat", "Browser", "Terminal", "Tasks", "Skills"] as const;
type Screen = (typeof SCREENS)[number];
const CYCLE_MS = 4500;

export function ProductShowcase() {
  const [active, setActive] = useState<Screen>("Dashboard");
  const [paused, setPaused] = useState(false);
  const [dark, setDark] = useState(true);

  const advance = useCallback(() => {
    setActive((prev) => {
      const i = SCREENS.indexOf(prev);
      return SCREENS[(i + 1) % SCREENS.length];
    });
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, CYCLE_MS);
    return () => clearInterval(id);
  }, [paused, advance]);

  // Theme classes
  const bg = dark ? "bg-[#0c0a09]" : "bg-white";
  const bgSidebar = dark ? "bg-[#0f0e0d]" : "bg-[#fafaf9]";
  const borderC = dark ? "border-stone-800/60" : "border-stone-200";
  const textPrimary = dark ? "text-stone-100" : "text-stone-900";
  const textSecondary = dark ? "text-stone-400" : "text-stone-500";
  const textMuted = dark ? "text-stone-500" : "text-stone-400";
  const textFaint = dark ? "text-stone-600" : "text-stone-300";
  const hoverBg = dark ? "hover:bg-stone-800/40" : "hover:bg-stone-100";
  const cardBg = dark ? "bg-stone-900/50" : "bg-stone-50";
  const cardBorder = dark ? "border-stone-800" : "border-stone-200";
  const inputBg = dark ? "bg-stone-900/60" : "bg-stone-50";
  const codeBg = dark ? "bg-black/50" : "bg-stone-100";

  const navItems = [
    { icon: "🏠", label: "Dashboard", screen: "Dashboard" as Screen },
    { icon: "🤖", label: "Agent Hub", screen: "Agent Hub" as Screen },
    { icon: "💬", label: "Chat", screen: "Chat" as Screen },
    { icon: "🌐", label: "Browser", screen: "Browser" as Screen },
    { icon: "⌨️", label: "Terminal", screen: "Terminal" as Screen },
    { icon: "📋", label: "Tasks", screen: "Tasks" as Screen },
    { icon: "⚡", label: "Skills+", screen: "Skills" as Screen },
  ];

  const sessions = [
    { title: "ClawSuite Optimizations", time: "10:00 PM", sub: "main", active: active === "Chat" },
    { title: "Landing page redesign", time: "8:17 PM", sub: "ID 2a6becb9", active: false },
    { title: "Auth integration research", time: "8:15 PM", sub: "ID e4b0ff54", active: false },
    { title: "Fix WS reconnect bug", time: "3:51 PM", sub: "ID 403efeee", active: false },
    { title: "Cron: Discord Monitor", time: "Feb 10", sub: "ID 06059eba", active: false },
  ];

  return (
    <div
      className="mx-auto mt-8 max-w-5xl md:mt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`overflow-hidden rounded-2xl border ${dark ? "border-stone-800/70 shadow-2xl shadow-orange-950/20" : "border-stone-200 shadow-2xl shadow-stone-300/40"}`}>
        {/* ── macOS Title Bar ── */}
        <div className={`flex items-center justify-between border-b ${borderC} ${dark ? "bg-stone-950" : "bg-[#f5f5f4]"} px-4 py-2`}>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className={`hidden rounded-md border ${cardBorder} ${inputBg} px-3 py-1 text-[11px] ${textMuted} font-mono md:block`}>
            ClawSuite — localhost:3000
          </div>
          {/* Dark/Light toggle */}
          <button
            onClick={() => setDark(!dark)}
            className={`rounded-lg border ${cardBorder} px-2 py-1 text-[10px] ${textSecondary} transition ${hoverBg}`}
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* ── Mobile Screen Tabs ── */}
        <div className={`border-b ${borderC} px-2 py-2 md:hidden ${dark ? "bg-stone-950/70" : "bg-stone-50/80"}`}>
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {navItems.map((item) => {
              const isActive = item.screen === active;
              return (
                <button
                  key={`mobile-${item.label}`}
                  onClick={() => item.screen && setActive(item.screen)}
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium transition ${
                    isActive
                      ? "bg-orange-500/15 text-orange-400"
                      : `${textSecondary} ${hoverBg}`
                  }`}
                >
                  <span className="mr-1">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── App Layout ── */}
        <div className={`h-[360px] md:grid md:h-[520px] md:grid-cols-[220px_1fr] ${bg}`}>
          {/* ── SIDEBAR ── */}
          <div className={`hidden flex-col overflow-hidden border-r md:flex ${borderC} ${bgSidebar}`}>
            {/* Header */}
            <div className={`flex items-center gap-2 px-3 py-3 border-b ${borderC}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/clawsuite-favicon.svg" alt="" className="h-5 w-5" />
              <span className={`text-sm font-semibold ${textPrimary}`}>ClawSuite</span>
            </div>

            {/* Search */}
            <div className="px-2 py-2">
              <div className={`flex items-center gap-2 rounded-lg border ${cardBorder} ${inputBg} px-2.5 py-1.5 text-[11px] ${textMuted}`}>
                🔍 Search
              </div>
            </div>

            {/* STUDIO section */}
            <div className="px-3 pt-1 pb-0.5">
              <span className={`text-[10px] font-semibold uppercase tracking-wider ${textFaint}`}>Studio</span>
            </div>
            <div className="space-y-0.5 px-1.5 text-[12px]">
              {navItems.map((item) => {
                const isActive = item.screen === active;
                return (
                  <button
                    key={item.label}
                    onClick={() => item.screen && setActive(item.screen)}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 transition text-left ${
                      isActive
                        ? "bg-orange-500/10 text-orange-500 font-medium"
                        : `${textSecondary} ${hoverBg}`
                    }`}
                  >
                    <span className="w-4 text-center text-xs">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Sessions */}
            <div className={`mt-2 flex-1 border-t ${borderC} overflow-hidden`}>
              <div className="px-3 pt-2 pb-1">
                <span className={`text-[10px] font-semibold uppercase tracking-wider ${textFaint}`}>Sessions</span>
              </div>
              <div className="space-y-0.5 px-1.5">
                {sessions.map((s) => (
                  <button
                    key={s.title}
                    onClick={() => setActive("Chat")}
                    className={`flex w-full flex-col rounded-lg px-2.5 py-1.5 text-left transition ${
                      s.active ? "bg-orange-500/10" : hoverBg
                    }`}
                  >
                    <span className={`text-[11px] font-medium truncate ${s.active ? "text-orange-500" : textPrimary}`}>{s.title}</span>
                    <span className={`text-[9px] ${textMuted}`}>{s.time} • {s.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className={`border-t ${borderC} px-3 py-2 space-y-1.5`}>
              <div className="flex items-center gap-2">
                <div className={`h-7 w-7 rounded-full ${dark ? "bg-stone-700" : "bg-stone-300"} flex items-center justify-center`}>
                  <svg className={`h-4 w-4 ${dark ? "text-stone-400" : "text-stone-500"}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                </div>
                <span className={`text-[11px] font-medium ${textPrimary}`}>User</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className={`text-[10px] ${textMuted}`}>Gateway Connected</span>
              </div>
            </div>
          </div>

          {/* ── MAIN CONTENT ── */}
          <div className="flex h-full min-h-0 flex-col overflow-hidden">
            {/* Screen nav bar - fixed strip */}
            <div className={`hidden shrink-0 items-center justify-between border-b ${borderC} px-3 py-1.5 md:flex ${dark ? "bg-stone-950/60" : "bg-stone-50/80"}`}>
              <div className="flex items-center gap-1">
                {SCREENS.map((screen) => (
                  <button
                    key={screen}
                    onClick={() => setActive(screen)}
                    className={`rounded-full px-2 py-0.5 text-[9px] font-medium transition ${
                      active === screen
                        ? "bg-orange-500/20 text-orange-400"
                        : `${textMuted} ${hoverBg}`
                    }`}
                  >
                    {screen}
                  </button>
                ))}
              </div>
              <div className={`h-1 w-10 shrink-0 overflow-hidden rounded-full ${dark ? "bg-stone-800" : "bg-stone-200"}`}>
                <div className="h-full rounded-full bg-orange-500/50" style={{ animation: paused ? "none" : `progress ${CYCLE_MS}ms linear infinite` }} />
              </div>
            </div>

            {/* Screen content */}
            <div className="relative flex-1 min-h-0">
              {SCREENS.map((screen) => (
                <div
                  key={screen}
                  className="absolute inset-0 transition-all duration-500 ease-out"
                  style={{
                    opacity: active === screen ? 1 : 0,
                    transform: active === screen ? "translateY(0)" : "translateY(8px)",
                    pointerEvents: active === screen ? "auto" : "none",
                  }}
                >
                  {screen === "Dashboard" && <DashboardScreen dark={dark} />}
                  {screen === "Agent Hub" && <AgentHubScreen dark={dark} />}
                  {screen === "Chat" && <ChatScreen dark={dark} />}
                  {screen === "Browser" && <BrowserScreen dark={dark} />}
                  {screen === "Terminal" && <TerminalScreen dark={dark} />}
                  {screen === "Tasks" && <TasksScreen dark={dark} />}
                  {screen === "Skills" && <SkillsScreen dark={dark} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feature pills */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {SCREENS.map((screen) => (
          <button
            key={screen}
            onClick={() => setActive(screen)}
            className={`rounded-full px-3 py-1.5 text-xs transition ${
              active === screen
                ? "border border-orange-500/40 bg-orange-500/15 text-orange-200"
                : "border border-stone-800 bg-stone-900/60 text-stone-400 hover:text-stone-200"
            }`}
          >
            {screen}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes progress { from { width: 0%; } to { width: 100%; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes pulse-dot { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SHARED HELPERS
   ═══════════════════════════════════════════════════════════════════ */

type SP = { dark: boolean };
const t = (dark: boolean, d: string, l: string) => dark ? d : l;

function StatCard({ label, value, dark, color }: { label: string; value: string; dark: boolean; color?: string }) {
  return (
    <div className={`rounded-xl border ${t(dark, "border-stone-800", "border-stone-200")} ${t(dark, "bg-stone-900/60", "bg-white")} p-3 text-center`}>
      <p className={`text-lg font-bold ${color || t(dark, "text-stone-100", "text-stone-900")}`}>{value}</p>
      <p className={`text-[10px] ${t(dark, "text-stone-500", "text-stone-400")}`}>{label}</p>
    </div>
  );
}

function SectionHeader({ title, subtitle, tag, dark, right }: { title: string; subtitle: string; tag?: string; dark: boolean; right?: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between mb-4">
      <div>
        {tag && <span className={`text-[10px] ${t(dark, "text-stone-500", "text-stone-400")} border ${t(dark, "border-stone-700", "border-stone-200")} rounded-full px-2 py-0.5 mr-2`}>{tag}</span>}
        <h3 className={`text-base font-semibold ${t(dark, "text-stone-100", "text-stone-900")} mt-1`}>{title}</h3>
        <p className={`text-[11px] ${t(dark, "text-stone-500", "text-stone-400")} mt-0.5`}>{subtitle}</p>
      </div>
      {right}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DASHBOARD
   ═══════════════════════════════════════════════════════════════════ */

function DashboardScreen({ dark }: SP) {
  return (
    <div className="h-full p-5 overflow-hidden">
      <SectionHeader dark={dark} title="Dashboard" subtitle="System overview and gateway health" tag="📊 Overview" />
      <div className="grid grid-cols-4 gap-3 mb-4">
        <StatCard dark={dark} label="Active Agents" value="4" color="text-emerald-400" />
        <StatCard dark={dark} label="Sessions" value="12" />
        <StatCard dark={dark} label="Tokens Today" value="142k" />
        <StatCard dark={dark} label="Cost Today" value="$0.86" color="text-orange-400" />
      </div>
      {/* Model usage chart mock */}
      <div className={`rounded-xl border ${t(dark, "border-stone-800", "border-stone-200")} ${t(dark, "bg-stone-900/50", "bg-white")} p-4 mb-3`}>
        <p className={`text-[11px] font-medium ${t(dark, "text-stone-300", "text-stone-600")} mb-3`}>Model Usage (24h)</p>
        <div className="space-y-2">
          {[
            { model: "Claude Sonnet 4.5", pct: 45, color: "bg-orange-500" },
            { model: "GPT-5.3 Codex", pct: 30, color: "bg-emerald-500" },
            { model: "Gemini Flash", pct: 18, color: "bg-blue-500" },
            { model: "Claude Haiku", pct: 7, color: "bg-amber-400" },
          ].map((m) => (
            <div key={m.model} className="flex items-center gap-3">
              <span className={`text-[10px] w-28 ${t(dark, "text-stone-400", "text-stone-500")}`}>{m.model}</span>
              <div className={`flex-1 h-2 rounded-full ${t(dark, "bg-stone-800", "bg-stone-100")}`}>
                <div className={`h-full rounded-full ${m.color} opacity-70`} style={{ width: `${m.pct}%` }} />
              </div>
              <span className={`text-[10px] w-8 text-right ${t(dark, "text-stone-500", "text-stone-400")}`}>{m.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      {/* Recent activity */}
      <div className={`rounded-xl border ${t(dark, "border-stone-800", "border-stone-200")} ${t(dark, "bg-stone-900/50", "bg-white")} p-4`}>
        <p className={`text-[11px] font-medium ${t(dark, "text-stone-300", "text-stone-600")} mb-2`}>Recent Activity</p>
        <div className={`space-y-1.5 text-[10px] ${t(dark, "text-stone-400", "text-stone-500")}`}>
          <div>🔧 <span className="text-orange-400">codex-main</span> committed auth refactor (3 files)</div>
          <div>📊 <span className="text-emerald-400">research-agent</span> completed competitor analysis</div>
          <div>🔔 Gateway reconnected after 2s timeout</div>
          <div>⚡ Skill <span className="text-blue-400">browser-use</span> updated to v2.0.1</div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   AGENT HUB — matches screenshot with office view + stats
   ═══════════════════════════════════════════════════════════════════ */

function AgentHubScreen({ dark }: SP) {
  const agents = [
    { name: "codex-main", status: "running", x: 12, y: 18, task: "Tasks: 3\nActive: 1\nDone: 2" },
    { name: "research", status: "streaming", x: 42, y: 12, task: "" },
    { name: "qa-sentinel", status: "running", x: 70, y: 22, task: "" },
    { name: "docs-writer", status: "running", x: 25, y: 55, task: "" },
    { name: "deploy-bot", status: "idle", x: 58, y: 52, task: "" },
  ];

  return (
    <div className="h-full p-5 overflow-hidden">
      <SectionHeader
        dark={dark}
        title="Agent Hub"
        subtitle="Real-time monitoring of all active agent sessions."
        tag="🔗 Orchestration"
        right={
          <div className="flex items-center gap-2">
            <div className={`flex rounded-lg border ${t(dark, "border-stone-700", "border-stone-200")} overflow-hidden text-[10px]`}>
              <span className="bg-orange-500 text-white px-2.5 py-1">🏢 Office</span>
              <span className={`px-2.5 py-1 ${t(dark, "text-stone-400 bg-stone-900", "text-stone-500 bg-white")}`}>📋 Cards</span>
            </div>
            <span className={`rounded-full border ${t(dark, "border-emerald-500/30", "border-emerald-400/40")} px-2.5 py-1 text-[10px] text-emerald-400 flex items-center gap-1.5`}>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Connected
            </span>
          </div>
        }
      />

      <div className="grid grid-cols-[1fr_180px] gap-3 h-[calc(100%-80px)]">
        {/* Virtual Office */}
        <div className={`rounded-xl border ${t(dark, "border-stone-800", "border-stone-200")} overflow-hidden relative`}>
          <div className={`h-full ${dark ? "bg-[#0a1628]" : "bg-[#e8edf5]"} relative`}>
            {/* Floor grid */}
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(${dark ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.08)"} 1px, transparent 1px), linear-gradient(90deg, ${dark ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.08)"} 1px, transparent 1px)`,
              backgroundSize: "36px 36px",
            }} />

            {/* Agents at desks */}
            {agents.map((a) => (
              <div key={a.name} className="absolute" style={{ left: `${a.x}%`, top: `${a.y}%` }}>
                {/* Task tooltip for first agent */}
                {a.task && (
                  <div className={`absolute -top-14 -left-2 rounded-lg ${dark ? "bg-stone-900/90 border-stone-700" : "bg-white border-stone-200"} border px-2 py-1.5 text-[8px] font-mono leading-tight whitespace-pre ${dark ? "text-stone-300" : "text-stone-600"} shadow-lg z-10`}>
                    {a.task}
                  </div>
                )}
                <div className="flex flex-col items-center">
                  {/* Agent character */}
                  <div className="relative mb-1">
                    {/* Status glow */}
                    {a.status !== "idle" && (
                      <div className={`absolute -inset-1 rounded-full ${
                        a.status === "streaming" ? "bg-orange-400/20" : "bg-emerald-400/15"
                      } ${a.status === "streaming" ? "animate-pulse" : ""}`} />
                    )}
                    {/* Head */}
                    <div className={`relative h-4 w-4 rounded-full ${
                      a.status === "streaming" ? "bg-orange-400" :
                      a.status === "running" ? "bg-emerald-400" : "bg-stone-500"
                    }`}>
                      {/* Eyes */}
                      <div className="absolute top-1.5 left-0.5 h-[2px] w-[2px] rounded-full bg-white/80" />
                      <div className="absolute top-1.5 right-0.5 h-[2px] w-[2px] rounded-full bg-white/80" />
                    </div>
                  </div>
                  {/* Desk */}
                  <div className={`h-4 w-12 rounded-sm ${dark ? "bg-blue-900/60 border-blue-700/30" : "bg-blue-200/80 border-blue-300/50"} border flex items-center justify-center`}>
                    <div className={`h-1.5 w-5 rounded-[1px] ${dark ? "bg-blue-400/30" : "bg-blue-500/20"}`} />
                  </div>
                  {/* Chair */}
                  <div className={`h-2 w-4 rounded-b-full ${dark ? "bg-stone-700/60" : "bg-stone-400/40"} -mt-[1px]`} />
                  {/* Name */}
                  <span className={`text-[7px] mt-1 font-mono ${dark ? "text-blue-300/50" : "text-blue-600/40"}`}>{a.name}</span>
                </div>
              </div>
            ))}

            {/* Decorative elements */}
            {/* Plant */}
            <div className="absolute bottom-8 left-6"><span className="text-base opacity-60">🌿</span></div>
            <div className="absolute top-10 right-8"><span className="text-base opacity-60">🌿</span></div>
            {/* Clock */}
            <div className={`absolute top-3 right-4 rounded px-1.5 py-0.5 text-[9px] font-mono ${dark ? "bg-emerald-500/20 text-emerald-300" : "bg-emerald-100 text-emerald-600"}`}>22:00</div>

            {/* Footer */}
            <div className={`absolute bottom-2 left-3 text-[9px] flex items-center gap-1 ${dark ? "text-blue-400/40" : "text-blue-600/30"}`}>
              🏢 ClawSuite Office
            </div>
            <div className={`absolute bottom-2 right-3 text-[9px] ${dark ? "text-blue-400/40" : "text-blue-600/30"}`}>
              5 agents · 8 sessions
            </div>
          </div>
        </div>

        {/* Stats panel */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <StatCard dark={dark} label="Active" value="4" color="text-emerald-400" />
            <StatCard dark={dark} label="Done" value="12" />
            <StatCard dark={dark} label="Tokens" value="92k" color="text-orange-400" />
            <StatCard dark={dark} label="Cost" value="$0.37" />
          </div>
          <div className={`rounded-xl border ${t(dark, "border-stone-800", "border-stone-200")} ${t(dark, "bg-stone-900/60", "bg-white")} p-3`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-[11px] font-medium ${t(dark, "text-stone-300", "text-stone-600")}`}>🤖 Agent Roster</span>
              <span className={`text-[10px] ${t(dark, "text-stone-500", "text-stone-400")}`}>5</span>
            </div>
            <div className="space-y-1.5">
              {agents.map((a) => (
                <div key={a.name} className={`text-[10px] ${t(dark, "text-stone-400", "text-stone-500")} flex items-center gap-1.5`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    a.status === "streaming" ? "bg-orange-400 animate-pulse" :
                    a.status === "running" ? "bg-emerald-400" : "bg-stone-600"
                  }`} />
                  <span className="font-mono">{a.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CHAT
   ═══════════════════════════════════════════════════════════════════ */

function ChatScreen({ dark }: SP) {
  return (
    <div className="flex h-full flex-col">
      <div className={`flex items-center justify-between border-b ${t(dark, "border-stone-800/60", "border-stone-200")} px-4 py-2`}>
        <div className="flex items-center gap-2">
          <span className="text-sm">🔧</span>
          <span className={`text-xs font-medium ${t(dark, "text-stone-200", "text-stone-800")}`}>ClawSuite Optimizations</span>
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-[10px] ${t(dark, "text-stone-500", "text-stone-400")}`}>just now</span>
          <span className={`rounded-full ${t(dark, "bg-stone-800/80", "bg-stone-100")} px-2 py-0.5 text-[10px] ${t(dark, "text-stone-400", "text-stone-500")}`}>Claude Sonnet 4.5</span>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-hidden px-4 py-4">
        {/* User */}
        <div className="flex gap-3 justify-end">
          <div className={`max-w-[75%] rounded-2xl rounded-tr-sm ${t(dark, "bg-orange-500/12", "bg-orange-50")} px-3.5 py-2.5 text-xs leading-relaxed ${t(dark, "text-stone-200", "text-stone-700")}`}>
            Refactor the auth module to use Better Auth. Keep the existing session handling but swap out the provider layer.
          </div>
          <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${dark ? "bg-stone-700" : "bg-stone-300"}`}>
            <svg className={`h-4 w-4 ${dark ? "text-stone-400" : "text-stone-500"}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
          </div>
        </div>

        {/* Assistant */}
        <div className="flex gap-3">
          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/clawsuite-favicon.svg" alt="" className="h-5 w-5" />
          </div>
          <div className="max-w-[85%] space-y-3">
            <div className={`text-xs leading-relaxed ${t(dark, "text-stone-300", "text-stone-600")}`}>
              I&apos;ll restructure the auth module in 3 steps:
            </div>
            <div className={`rounded-lg border overflow-hidden ${t(dark, "border-stone-800 bg-black/60", "border-stone-200 bg-stone-50")}`}>
              <div className={`flex items-center justify-between border-b ${t(dark, "border-stone-800/60", "border-stone-200")} px-3 py-1.5`}>
                <span className={`text-[10px] font-mono ${t(dark, "text-stone-500", "text-stone-400")}`}>src/lib/auth.ts</span>
                <span className={`text-[10px] cursor-pointer ${t(dark, "text-stone-600 hover:text-stone-400", "text-stone-400 hover:text-stone-600")}`}>Copy</span>
              </div>
              <div className="p-3 font-mono text-[11px] leading-5">
                <div><span className="text-orange-400">import</span> <span className={t(dark, "text-stone-300", "text-stone-600")}>{"{ betterAuth }"}</span> <span className="text-orange-400">from</span> <span className="text-emerald-400">&apos;better-auth&apos;</span></div>
                <div><span className="text-orange-400">import</span> <span className={t(dark, "text-stone-300", "text-stone-600")}>{"{ drizzleAdapter }"}</span> <span className="text-orange-400">from</span> <span className="text-emerald-400">&apos;better-auth/adapters&apos;</span></div>
                <div className="mt-1"><span className="text-orange-400">export const</span> <span className={t(dark, "text-stone-300", "text-stone-600")}>auth = </span><span className="text-blue-400">betterAuth</span>({"{"}...{"}"})
                  <span className="ml-0.5 inline-block h-3.5 w-[2px] bg-orange-400" style={{ animation: "blink 1s infinite" }} />
                </div>
              </div>
            </div>
            <div className={`flex items-center gap-2 text-[11px] ${t(dark, "text-stone-500", "text-stone-400")}`}>
              <span className="font-mono text-orange-400" style={{ animation: "pulse-dot 1.5s ease-in-out infinite" }}>⣿</span>
              Thinking…
            </div>
          </div>
        </div>
      </div>

      {/* Composer */}
      <div className={`border-t ${t(dark, "border-stone-800/60", "border-stone-200")} p-3`}>
        <div className={`rounded-xl border ${t(dark, "border-stone-800 bg-stone-900/40", "border-stone-200 bg-white")}`}>
          <div className="flex items-end gap-2 px-3 py-2.5">
            <span className={t(dark, "text-stone-600", "text-stone-300")}>+</span>
            <span className={`flex-1 text-xs ${t(dark, "text-stone-500", "text-stone-400")}`}>Message ClawSuite…</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500 text-white">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" /></svg>
            </span>
          </div>
          <div className={`flex items-center border-t ${t(dark, "border-stone-800/40", "border-stone-100")} px-3 py-1.5`}>
            <span className={`rounded-full ${t(dark, "bg-stone-800/60", "bg-stone-100")} px-2 py-0.5 text-[10px] ${t(dark, "text-stone-400", "text-stone-500")} flex items-center gap-1`}>
              Claude Sonnet 4.5 <span className={t(dark, "text-stone-600", "text-stone-300")}>▾</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   BROWSER
   ═══════════════════════════════════════════════════════════════════ */

function BrowserScreen({ dark }: SP) {
  return (
    <div className="h-full p-5 overflow-hidden">
      <SectionHeader dark={dark} title="Browser" subtitle="Remote browser control and automation" tag="🌐 Automation" />
      <div className={`rounded-xl border ${t(dark, "border-stone-800", "border-stone-200")} overflow-hidden h-[calc(100%-80px)]`}>
        <div className={`flex items-center gap-2 border-b ${t(dark, "border-stone-800/60", "border-stone-200")} px-3 py-2 ${t(dark, "bg-stone-900/60", "bg-stone-50")}`}>
          <div className="flex gap-1">
            <span className={`rounded ${t(dark, "bg-stone-800", "bg-stone-200")} px-1.5 py-0.5 text-[10px] ${t(dark, "text-stone-500", "text-stone-400")}`}>←</span>
            <span className={`rounded ${t(dark, "bg-stone-800", "bg-stone-200")} px-1.5 py-0.5 text-[10px] ${t(dark, "text-stone-500", "text-stone-400")}`}>→</span>
          </div>
          <div className={`flex-1 rounded-lg border ${t(dark, "border-stone-700 bg-stone-950", "border-stone-200 bg-white")} px-3 py-1 text-[11px] font-mono ${t(dark, "text-stone-400", "text-stone-500")}`}>
            https://docs.openclaw.ai
          </div>
        </div>
        <div className={`h-full ${t(dark, "bg-[#0a1628]", "bg-[#f0f4f8]")} p-8 flex items-center justify-center`}>
          <div className={`text-center ${t(dark, "text-stone-500", "text-stone-400")}`}>
            <p className="text-2xl mb-2">🌐</p>
            <p className="text-xs">Browser viewport</p>
            <p className={`text-[10px] mt-1 ${t(dark, "text-stone-600", "text-stone-300")}`}>Controlled by your agents in real-time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   TERMINAL
   ═══════════════════════════════════════════════════════════════════ */

function TerminalScreen({ dark }: SP) {
  return (
    <div className="h-full p-5 overflow-hidden">
      <SectionHeader dark={dark} title="Terminal" subtitle="Integrated shell with agent access" tag="⌨️ Shell" />
      <div className={`rounded-xl border ${t(dark, "border-stone-800", "border-stone-200")} overflow-hidden h-[calc(100%-80px)] ${t(dark, "bg-black", "bg-[#1e1e1e]")}`}>
        <div className="p-4 font-mono text-[11px] leading-5 text-stone-300 space-y-1">
          <div><span className="text-emerald-400">aurora@macbook</span>:<span className="text-blue-400">~/clawsuite</span>$ git status</div>
          <div className="text-stone-400">On branch main</div>
          <div className="text-stone-400">Changes not staged for commit:</div>
          <div className="text-red-400 pl-4">modified: src/lib/auth.ts</div>
          <div className="text-red-400 pl-4">modified: src/routes/api/send.ts</div>
          <div className="text-emerald-400 pl-4">new file: src/hooks/use-voice-recorder.ts</div>
          <div className="mt-2"><span className="text-emerald-400">aurora@macbook</span>:<span className="text-blue-400">~/clawsuite</span>$ npm run dev</div>
          <div className="text-stone-400">VITE v7.3.1 ready in 981ms</div>
          <div className="text-orange-400">➜ Local: http://localhost:3000/</div>
          <div className="mt-2"><span className="text-emerald-400">aurora@macbook</span>:<span className="text-blue-400">~/clawsuite</span>$ <span className="inline-block h-3.5 w-[2px] bg-stone-400" style={{ animation: "blink 1s infinite" }} /></div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   TASKS
   ═══════════════════════════════════════════════════════════════════ */

function TasksScreen({ dark }: SP) {
  const columns = [
    { label: "Backlog", color: "bg-stone-500", tasks: [
      { title: "Implement WebSocket reconnect", priority: "medium" },
      { title: "Add rate limiting to API", priority: "low" },
    ]},
    { label: "In Progress", color: "bg-orange-500", tasks: [
      { title: "Auth module refactor", priority: "high" },
      { title: "Landing page design", priority: "medium" },
    ]},
    { label: "Review", color: "bg-blue-500", tasks: [
      { title: "Voice input integration", priority: "medium" },
    ]},
    { label: "Done", color: "bg-emerald-500", tasks: [
      { title: "Chat send 500 fix", priority: "high" },
      { title: "Braille spinner component", priority: "low" },
      { title: "Model switcher polish", priority: "medium" },
    ]},
  ];

  return (
    <div className="h-full p-5 overflow-hidden">
      <SectionHeader dark={dark} title="Tasks" subtitle="Kanban board for tracking work items" tag="📋 Management" />
      <div className="grid grid-cols-4 gap-2 h-[calc(100%-80px)]">
        {columns.map((col) => (
          <div key={col.label} className={`rounded-xl border ${t(dark, "border-stone-800", "border-stone-200")} ${t(dark, "bg-stone-900/40", "bg-stone-50")} p-2 overflow-hidden`}>
            <div className="flex items-center gap-2 mb-2 px-1">
              <span className={`h-2 w-2 rounded-full ${col.color}`} />
              <span className={`text-[10px] font-semibold ${t(dark, "text-stone-300", "text-stone-600")}`}>{col.label}</span>
              <span className={`text-[9px] ${t(dark, "text-stone-600", "text-stone-400")}`}>{col.tasks.length}</span>
            </div>
            <div className="space-y-1.5">
              {col.tasks.map((task) => (
                <div key={task.title} className={`rounded-lg border ${t(dark, "border-stone-800 bg-stone-900/60", "border-stone-200 bg-white")} p-2`}>
                  <p className={`text-[10px] font-medium ${t(dark, "text-stone-200", "text-stone-700")} leading-tight`}>{task.title}</p>
                  <span className={`mt-1 inline-block rounded-full px-1.5 py-0.5 text-[8px] ${
                    task.priority === "high" ? "bg-red-500/20 text-red-400" :
                    task.priority === "medium" ? "bg-amber-500/20 text-amber-400" :
                    "bg-stone-500/20 text-stone-400"
                  }`}>{task.priority}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SKILLS
   ═══════════════════════════════════════════════════════════════════ */

function SkillsScreen({ dark }: SP) {
  const skills = [
    { icon: "🌤", name: "weather", desc: "Current weather & forecasts", installed: true },
    { icon: "🌐", name: "browser-use", desc: "Browser automation", installed: true },
    { icon: "🎙", name: "whisper-api", desc: "Audio transcription", installed: true },
    { icon: "💻", name: "coding-agent", desc: "Codex CLI sub-agent", installed: true },
    { icon: "🛡", name: "healthcheck", desc: "Security audits", installed: false },
    { icon: "🎬", name: "video-frames", desc: "Extract video frames", installed: false },
    { icon: "🖼", name: "image-gen", desc: "OpenAI image generation", installed: false },
    { icon: "📊", name: "mission-control", desc: "Kanban task management", installed: false },
  ];

  return (
    <div className="h-full p-5 overflow-hidden">
      <SectionHeader dark={dark} title="Skills+" subtitle="4 installed · 47 available on ClawHub" tag="⚡ Extensions"
        right={
          <div className={`flex items-center gap-2 rounded-lg border ${t(dark, "border-stone-700", "border-stone-200")} ${t(dark, "bg-stone-900/60", "bg-white")} px-2.5 py-1.5 text-[11px] ${t(dark, "text-stone-500", "text-stone-400")}`}>
            🔍 Search skills…
          </div>
        }
      />
      <div className="grid grid-cols-2 gap-2">
        {skills.map((s) => (
          <div key={s.name} className={`group rounded-xl border ${t(dark, "border-stone-800 bg-stone-900/40", "border-stone-200 bg-white")} p-3 transition hover:border-orange-500/30`}>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-base">{s.icon}</span>
                <div>
                  <p className={`text-[11px] font-medium font-mono ${t(dark, "text-stone-200", "text-stone-700")}`}>{s.name}</p>
                  <p className={`text-[10px] ${t(dark, "text-stone-500", "text-stone-400")}`}>{s.desc}</p>
                </div>
              </div>
              {s.installed ? (
                <span className="rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[9px] text-emerald-400">installed</span>
              ) : (
                <span className={`rounded-full border ${t(dark, "border-stone-700", "border-stone-200")} px-1.5 py-0.5 text-[9px] ${t(dark, "text-stone-400", "text-stone-500")} cursor-pointer group-hover:border-orange-500/40 group-hover:text-orange-300`}>install</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
