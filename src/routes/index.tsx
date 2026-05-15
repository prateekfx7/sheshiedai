import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star, Sparkles, Lock, Users, PhoneCall, Bot, Siren, Map, Hand, Cpu, Cloud, Wifi, Database, Layers } from "lucide-react";
import { motion } from "motion/react";
import { AegisOrb } from "@/components/aegis-orb";
import { LogoMarquee } from "@/components/logo-marquee";
import { ToolsStack } from "@/components/tools-stack";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "She Shield AI — Smarter safety for women, faster response" },
      { name: "description", content: "Intelligent threat detection, real-time alerts, and a trusted guardian network — built for women's safety." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: PhoneCall, title: "Fake Call", desc: "Realistic incoming call to escape uncomfortable moments." },
  { icon: Bot, title: "AI Assistant", desc: "Conversational companion that listens and dispatches help." },
  { icon: Siren, title: "Loud Alarm", desc: "120dB siren that draws attention instantly." },
  { icon: Map, title: "Safe Routes", desc: "AI-curated walking routes scored for safety." },
  { icon: Users, title: "Trusted Circles", desc: "Share live location only with people you trust." },
  { icon: Hand, title: "Self-Defense", desc: "On-demand lessons from certified instructors." },
];

const sosSteps = [
  { icon: Siren, title: "120dB Alarm" },
  { icon: Map, title: "Live Location" },
  { icon: PhoneCall, title: "Auto-call Guardian" },
  { icon: Users, title: "Circle Notified" },
];

const layers = [
  { icon: Cpu, title: "On-device intelligence", desc: "Detection runs on your phone — audio never leaves." },
  { icon: Lock, title: "End-to-end encryption", desc: "Sealed with rotating keys only your guardians can open." },
  { icon: Wifi, title: "Offline-first mesh", desc: "Alerts hop via Bluetooth LE when networks fail." },
  { icon: Cloud, title: "Privacy-first cloud", desc: "Anonymous tokens — we route alerts without IDs." },
  { icon: Database, title: "Verified data", desc: "Routes blend municipal data + human review." },
  { icon: Layers, title: "Resilient by design", desc: "Multi-region failover with an open-source core." },
];

function Index() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pt-16 md:pt-24">
      {/* HERO */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex animate-fade-up flex-col gap-7">
          <div
            className="flex w-fit items-center gap-3 rounded-full border border-black/5 bg-white/60 px-4 py-2"
            style={{ backdropFilter: "blur(20px)" }}
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" style={{ color: "#FF801E", fill: "#FF801E" }} />
              ))}
            </div>
            <span className="text-[13px] font-medium text-foreground/80">Trusted 4.9/5 by 2700+ women</span>
          </div>

          <h1
            className="font-bold text-foreground"
            style={{ fontFamily: "Fustat, sans-serif", fontSize: "clamp(44px, 6vw, 75px)", lineHeight: 1.05, letterSpacing: "-2px" }}
          >
            Stay safer,<br />
            <span style={{ background: "linear-gradient(90deg,#E85A8A,#C7427A)", WebkitBackgroundClip: "text", color: "transparent" }}>
              respond faster
            </span>
          </h1>

          <p
            className="max-w-[540px] text-foreground/70"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", letterSpacing: "-0.5px", lineHeight: 1.55 }}
          >
            She Shield AI helps women feel secure everywhere — with intelligent threat detection,
            real-time SOS alerts, and a trusted guardian network that's always one tap away.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://sheshield-ai-guardian.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-[16px] py-4 pl-6 pr-2 text-[15px] font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg,#E85A8A,#C7427A)",
                boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35), 0 14px 36px -10px rgba(232,90,138,0.7)",
              }}
            >
              Get Protected Now
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[color:var(--blush-deep)] transition group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <Link to="/features" className="text-[14px] font-medium text-foreground/70 underline-offset-4 hover:underline">
              Explore features
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-6 border-t border-black/5 pt-6">
            {[
              { icon: Sparkles, k: "AI", v: "On-device" },
              { icon: Lock, k: "E2E", v: "Encrypted" },
              { icon: Users, k: "24/7", v: "Guardians" },
            ].map(({ icon: Icon, k, v }) => (
              <div key={k} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--blush-soft)]/40 text-[color:var(--blush-deep)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[15px] font-bold leading-none" style={{ fontFamily: "Fustat, sans-serif" }}>{k}</p>
                  <p className="text-[12px] text-foreground/60">{v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
          <AegisOrb />
        </div>
      </div>

      <LogoMarquee label="Trusted by leading women-safety partners" />

      {/* FEATURES TEASER */}
      <section id="features" className="mt-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[color:var(--blush-deep)]">Features</p>
            <h2 className="mt-3 font-bold" style={{ fontFamily: "Fustat, sans-serif", fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, letterSpacing: "-1.2px" }}>
              Six layered protections, one calm app.
            </h2>
          </div>
          <Link to="/features" className="inline-flex items-center gap-2 text-[14px] font-semibold text-[color:var(--blush-deep)] hover:underline">
            See all features <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 p-6"
              style={{ backdropFilter: "blur(20px)" }}
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-pink-100 to-rose-200 opacity-50 blur-2xl transition group-hover:opacity-90" />
              <div
                className="relative flex h-11 w-11 items-center justify-center rounded-2xl text-white"
                style={{ background: "linear-gradient(135deg,#E85A8A,#C7427A)", boxShadow: "0 10px 24px -8px rgba(232,90,138,0.6)" }}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-4 text-[18px] font-bold" style={{ fontFamily: "Fustat, sans-serif" }}>{f.title}</h3>
              <p className="relative mt-1.5 text-[13.5px] leading-relaxed text-foreground/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOS TEASER */}
      <section id="sos" className="mt-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[color:var(--blush-deep)]">Emergency</p>
            <h2 className="mt-3 font-bold" style={{ fontFamily: "Fustat, sans-serif", fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, letterSpacing: "-1.2px" }}>
              One tap. Four things happen.
            </h2>
            <p className="mt-4 max-w-md text-[16px] text-foreground/70">
              The SOS button arms a coordinated response — siren, location, call, and trusted circle alert — in under a second.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {sosSteps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/70 p-4"
                  style={{ backdropFilter: "blur(20px)" }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl text-white" style={{ background: "var(--blush)" }}>
                    <s.icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[14px] font-semibold" style={{ fontFamily: "Fustat, sans-serif" }}>{s.title}</span>
                </motion.div>
              ))}
            </div>
            <Link
              to="/sos"
              className="mt-8 inline-flex items-center gap-3 rounded-[16px] py-3.5 pl-6 pr-2 text-[14px] font-semibold text-white"
              style={{
                background: "linear-gradient(135deg,#E85A8A,#C7427A)",
                boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35), 0 14px 36px -10px rgba(232,90,138,0.7)",
              }}
            >
              Try the SOS demo
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[color:var(--blush-deep)]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative flex h-[360px] w-[360px] items-center justify-center">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="absolute h-full w-full rounded-full border-2 border-[color:var(--blush)]"
                  style={{ animation: `pulse-glow 2s ease-out ${i * 0.5}s infinite`, opacity: 0.4 }}
                />
              ))}
              <div
                className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full text-white"
                style={{
                  background: "linear-gradient(135deg,#E85A8A,#C7427A)",
                  boxShadow: "inset 0 14px 30px rgba(255,255,255,0.35), 0 30px 80px -20px rgba(232,90,138,0.8)",
                }}
              >
                <Siren className="h-12 w-12" />
                <p className="mt-1 text-[28px] font-bold" style={{ fontFamily: "Fustat, sans-serif", letterSpacing: "0.1em" }}>SOS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT'S BUILT TEASER */}
      <section id="how-its-built" className="mt-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[color:var(--blush-deep)]">Architecture</p>
          <h2 className="mt-3 font-bold" style={{ fontFamily: "Fustat, sans-serif", fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, letterSpacing: "-1.2px" }}>
            How She Shield AI is built.
          </h2>
          <p className="mt-4 text-[16px] text-foreground/70">
            A privacy-first, layered system designed to work even when everything else fails.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {layers.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="rounded-3xl border border-black/5 bg-white/70 p-6"
              style={{ backdropFilter: "blur(20px)" }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl text-white"
                style={{ background: "linear-gradient(135deg,#E85A8A,#C7427A)", boxShadow: "0 10px 24px -8px rgba(232,90,138,0.6)" }}
              >
                <l.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-[18px] font-bold" style={{ fontFamily: "Fustat, sans-serif" }}>{l.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-foreground/70">{l.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/how-its-built" className="inline-flex items-center gap-2 text-[14px] font-semibold text-[color:var(--blush-deep)] hover:underline">
            Read the full architecture <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* TOOLS STACK */}
      <ToolsStack />
    </main>
  );
}
