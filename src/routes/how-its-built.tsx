import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Cloud, Lock, Layers, Wifi, Database } from "lucide-react";

export const Route = createFileRoute("/how-its-built")({
  head: () => ({
    meta: [
      { title: "How it's built — Shield AI" },
      { name: "description", content: "The architecture behind Shield AI: on-device ML, encrypted mesh, and a privacy-first cloud." },
    ],
  }),
  component: HowItsBuilt,
});

const layers = [
  {
    icon: Cpu,
    title: "On-device intelligence",
    desc: "Threat detection, voice keyword spotting, and fall detection run entirely on your phone — no audio ever leaves the device.",
    tags: ["TFLite", "WebRTC", "CoreML"],
  },
  {
    icon: Lock,
    title: "End-to-end encryption",
    desc: "Trusted-circle messages and live location streams are sealed with rotating keys only your guardians can open.",
    tags: ["Signal protocol", "X25519", "AES-256"],
  },
  {
    icon: Wifi,
    title: "Offline-first mesh",
    desc: "When networks fail, alerts hop between nearby Shield AI users via Bluetooth LE until they reach connectivity.",
    tags: ["BLE Mesh", "CRDTs", "Sync"],
  },
  {
    icon: Cloud,
    title: "Privacy-first cloud",
    desc: "Anonymous tokens replace identities. We can route an alert without ever knowing who you are.",
    tags: ["Edge functions", "Zero-knowledge"],
  },
  {
    icon: Database,
    title: "Verified incident data",
    desc: "Safe-route scoring blends municipal data, anonymized user signals, and human-reviewed reports.",
    tags: ["Postgres", "PostGIS", "Human-in-loop"],
  },
  {
    icon: Layers,
    title: "Resilient by design",
    desc: "Multi-region failover, audited dependencies, and an open-source core for community trust.",
    tags: ["SOC2-aligned", "Open core"],
  },
];

function HowItsBuilt() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-24 pb-12">
      <div className="mx-auto max-w-2xl text-center animate-fade-up">
        <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[color:var(--blush-deep)]">Architecture</p>
        <h1
          className="mt-4 font-bold"
          style={{ fontFamily: "Fustat, sans-serif", fontSize: "clamp(38px,5vw,60px)", lineHeight: 1.05, letterSpacing: "-1.5px" }}
        >
          How Shield AI is built.
        </h1>
        <p className="mt-4 text-[17px] text-foreground/70">
          A layered system that puts privacy first — designed to work even when everything else fails.
        </p>
      </div>

      <div className="relative mt-20">
        {/* Vertical timeline line */}
        <div
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
          style={{ background: "linear-gradient(to bottom, transparent, var(--blush) 20%, var(--blush) 80%, transparent)" }}
        />

        <div className="flex flex-col gap-12">
          {layers.map((l, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={l.title}
                className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={left ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"}>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white ${left ? "md:ml-auto" : ""}`}
                    style={{ background: "linear-gradient(135deg,#E85A8A,#C7427A)", boxShadow: "0 10px 24px -8px rgba(232,90,138,0.6)" }}
                  >
                    <l.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-[24px] font-bold" style={{ fontFamily: "Fustat, sans-serif" }}>{l.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground/70">{l.desc}</p>
                  <div className={`mt-4 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}>
                    {l.tags.map((t) => (
                      <span key={t} className="rounded-full border border-black/5 bg-white/70 px-3 py-1 text-[12px] font-medium text-foreground/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center node */}
                <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 md:block">
                  <div
                    className="h-5 w-5 animate-pulse-glow rounded-full border-4 border-white"
                    style={{ background: "var(--blush)", boxShadow: "0 0 24px rgba(232,90,138,0.7)" }}
                  />
                </div>

                <div className={left ? "md:order-2" : ""} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
