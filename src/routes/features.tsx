import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneCall, Bot, Siren, Map, Users, Hand, ArrowUpRight } from "lucide-react";
import { LogoMarquee } from "@/components/logo-marquee";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Shield AI" },
      { name: "description", content: "Fake call, AI assistant, loud alarm, safe routes, trusted circles, and self-defense techniques — all in one app." },
    ],
  }),
  component: FeaturesPage,
});

const features = [
  {
    icon: PhoneCall,
    title: "Fake Call",
    desc: "Trigger a realistic incoming call to escape uncomfortable situations gracefully.",
    accent: "from-pink-100 to-rose-200",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    desc: "Conversational safety companion that listens, advises, and dispatches help when needed.",
    accent: "from-rose-100 to-pink-200",
  },
  {
    icon: Siren,
    title: "Loud Alarm",
    desc: "120dB siren that draws attention and disorients potential threats instantly.",
    accent: "from-pink-100 to-fuchsia-200",
  },
  {
    icon: Map,
    title: "Safe Routes",
    desc: "AI-curated walking routes scored by lighting, foot traffic, and verified incident data.",
    accent: "from-rose-200 to-pink-100",
  },
  {
    icon: Users,
    title: "Trusted Circles",
    desc: "Share live location only with people you trust — with one-tap activation.",
    accent: "from-pink-200 to-rose-100",
  },
  {
    icon: Hand,
    title: "Self-Defense Techniques",
    desc: "On-demand video lessons from certified instructors, designed for real situations.",
    accent: "from-fuchsia-100 to-pink-200",
  },
];

function FeaturesPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pt-24 pb-12">
      <div className="mx-auto max-w-2xl text-center animate-fade-up">
        <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[color:var(--blush-deep)]">Features</p>
        <h1
          className="mt-4 font-bold"
          style={{ fontFamily: "Fustat, sans-serif", fontSize: "clamp(38px, 5vw, 60px)", lineHeight: 1.05, letterSpacing: "-1.5px" }}
        >
          Everything you need to feel safe.
        </h1>
        <p className="mt-4 text-[17px] text-foreground/70">
          Six layered protections, one calm interface. Activate any of them in under a second.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(232,90,138,0.35)] animate-fade-up"
            style={{ backdropFilter: "blur(20px)", animationDelay: `${i * 80}ms` }}
          >
            <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${f.accent} opacity-50 blur-2xl transition group-hover:opacity-80`} />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl text-white"
              style={{ background: "linear-gradient(135deg,#E85A8A,#C7427A)", boxShadow: "0 10px 24px -8px rgba(232,90,138,0.6)" }}
            >
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="relative mt-5 text-[20px] font-bold" style={{ fontFamily: "Fustat, sans-serif" }}>{f.title}</h3>
            <p className="relative mt-2 text-[14px] leading-relaxed text-foreground/70">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="relative mt-28 overflow-hidden rounded-[32px] p-10 md:p-16"
        style={{ background: "linear-gradient(135deg,#FFE3EC 0%,#FFC1D1 60%,#E85A8A 130%)" }}
      >
        <div className="absolute -left-20 -bottom-20 h-72 w-72 animate-pulse-glow rounded-full bg-white/40 blur-3xl" />
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-bold text-[color:var(--blush-deep)]" style={{ fontFamily: "Fustat, sans-serif", fontSize: "clamp(28px,3.5vw,44px)", letterSpacing: "-1px" }}>
              Ready to feel safer, today?
            </h2>
            <p className="mt-2 max-w-xl text-foreground/70">Join 2,700+ women already protected by Shield AI. Free for 30 days, no card required.</p>
          </div>
          <Link
            to="/sos"
            className="inline-flex items-center gap-3 rounded-[16px] bg-white py-4 pl-6 pr-2 text-[15px] font-semibold text-[color:var(--blush-deep)] transition hover:scale-[1.03]"
            style={{ boxShadow: "0 14px 36px -10px rgba(199,66,122,0.55)" }}
          >
            Activate SOS
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--blush)] text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      <LogoMarquee label="Trusted by leading women-safety partners" />
    </main>
  );
}
