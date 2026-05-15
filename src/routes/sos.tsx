import { createFileRoute, Link } from "@tanstack/react-router";
import { Siren, PhoneCall, MapPin, Users, Shield } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/sos")({
  head: () => ({
    meta: [
      { title: "SOS — Shield AI" },
      { name: "description", content: "One-tap SOS that alerts your trusted circle, shares live location, and sounds a 120dB alarm." },
    ],
  }),
  component: SOSPage,
});

function SOSPage() {
  const [armed, setArmed] = useState(false);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    if (!armed) return;
    const id = setInterval(() => setPulse((p) => p + 1), 1200);
    return () => clearInterval(id);
  }, [armed]);

  const steps = [
    { icon: Siren, title: "120dB Alarm", desc: "Loud siren activated" },
    { icon: MapPin, title: "Location Shared", desc: "Live to trusted circle" },
    { icon: PhoneCall, title: "Auto-call", desc: "Connecting nearest guardian" },
    { icon: Users, title: "Circle Notified", desc: "5 contacts pinged" },
  ];

  return (
    <main className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-24 pb-16">
      <div className="mx-auto max-w-2xl text-center animate-fade-up">
        <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[color:var(--blush-deep)]">Emergency</p>
        <h1
          className="mt-4 font-bold"
          style={{ fontFamily: "Fustat, sans-serif", fontSize: "clamp(38px,5vw,60px)", lineHeight: 1.05, letterSpacing: "-1.5px" }}
        >
          One tap. Help is on the way.
        </h1>
        <p className="mt-4 text-[17px] text-foreground/70">
          Press and hold the SOS button to instantly alert your trusted circle, sound the alarm,
          and stream your live location to verified responders.
        </p>
      </div>

      {/* Big SOS button */}
      <div className="relative mt-16 flex flex-col items-center">
        <div className="relative flex h-[420px] w-[420px] items-center justify-center">
          {/* Ripples */}
          {armed &&
            [0, 1, 2].map((i) => (
              <span
                key={`${pulse}-${i}`}
                className="absolute h-full w-full rounded-full border-2 border-[color:var(--blush)]"
                style={{
                  animation: `pulse-glow 1.6s ease-out ${i * 0.4}s infinite`,
                  opacity: 0.5,
                }}
              />
            ))}

          <button
            onClick={() => setArmed((a) => !a)}
            className="relative flex h-[260px] w-[260px] items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-[1.04] active:scale-95"
            style={{
              background: armed
                ? "linear-gradient(135deg,#FF3D6E,#C7427A)"
                : "linear-gradient(135deg,#E85A8A,#C7427A)",
              boxShadow:
                "inset 0 14px 30px rgba(255,255,255,0.35), 0 30px 80px -20px rgba(232,90,138,0.8)",
            }}
            aria-label="Activate SOS"
          >
            <div className="text-center">
              <Siren className="mx-auto h-14 w-14" />
              <p className="mt-2 text-[34px] font-bold" style={{ fontFamily: "Fustat, sans-serif", letterSpacing: "0.1em" }}>
                {armed ? "ACTIVE" : "SOS"}
              </p>
              <p className="text-[12px] opacity-80">{armed ? "Tap to cancel" : "Tap to activate"}</p>
            </div>
          </button>
        </div>

        {/* Status grid */}
        <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-black/5 bg-white/70 p-5 transition-all duration-500 animate-fade-up"
              style={{
                backdropFilter: "blur(20px)",
                animationDelay: `${i * 100}ms`,
                borderColor: armed ? "rgba(232,90,138,0.4)" : undefined,
                boxShadow: armed ? "0 20px 40px -20px rgba(232,90,138,0.4)" : undefined,
              }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  background: armed ? "var(--blush)" : "var(--blush-soft)",
                  color: armed ? "#fff" : "var(--blush-deep)",
                  transition: "all .3s",
                }}
              >
                <s.icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-[15px] font-bold" style={{ fontFamily: "Fustat, sans-serif" }}>{s.title}</p>
              <p className="text-[13px] text-foreground/60">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-[13px] text-foreground/70">
          <Shield className="h-4 w-4 text-[color:var(--blush-deep)]" />
          End-to-end encrypted • Works offline • Battery efficient
        </div>

        <Link to="/features" className="mt-6 text-[14px] font-medium text-foreground/70 underline-offset-4 hover:underline">
          See all safety features →
        </Link>
      </div>
    </main>
  );
}
