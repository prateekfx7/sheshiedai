import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star, Sparkles, Lock, Users } from "lucide-react";
import { AegisOrb } from "@/components/aegis-orb";
import { LogoMarquee } from "@/components/logo-marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shield AI — Smarter safety for women, faster response" },
      { name: "description", content: "Intelligent threat detection, real-time alerts, and a trusted guardian network — built for women's safety." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pt-16 md:pt-24">
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
            Shield AI helps women feel secure everywhere — with intelligent threat detection,
            real-time SOS alerts, and a trusted guardian network that's always one tap away.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/sos"
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
            </Link>
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
    </main>
  );
}
