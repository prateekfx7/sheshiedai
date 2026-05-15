import { motion } from "motion/react";

const tools = [
  { name: "Next.js", sub: "Web & SSR" },
  { name: "React Native", sub: "Mobile app" },
  { name: "n8n", sub: "Automation" },
  { name: "AI Agents", sub: "Decisioning" },
  { name: "Retell AI", sub: "Voice calls" },
  { name: "Twilio", sub: "SMS / OTP" },
  { name: "Mapbox", sub: "Safe routes" },
  { name: "Supabase", sub: "Realtime DB" },
  { name: "OpenAI", sub: "On-device LLM" },
  { name: "WebRTC", sub: "Live streams" },
];

export function ToolsStack() {
  return (
    <section className="relative mt-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[color:var(--blush-deep)]">
          Built with
        </p>
        <h2
          className="mt-4 font-bold"
          style={{ fontFamily: "Fustat, sans-serif", fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, letterSpacing: "-1.2px" }}
        >
          The stack behind She Shield AI.
        </h2>
        <p className="mt-3 text-[16px] text-foreground/70">
          A modern, edge-first toolchain assembled for speed, privacy, and reliability — even when the network isn't.
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            maskImage: "linear-gradient(90deg,transparent,black 8%,black 92%,transparent)",
            WebkitMaskImage: "linear-gradient(90deg,transparent,black 8%,black 92%,transparent)",
          }}
        />
        <div className="flex w-max animate-marquee gap-5">
          {[...tools, ...tools].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className="flex h-[110px] w-[220px] flex-col justify-between rounded-2xl border border-black/5 bg-white/70 p-5"
              style={{ backdropFilter: "blur(14px)" }}
            >
              <span
                className="text-[20px] font-bold leading-none"
                style={{ fontFamily: "Fustat, sans-serif", letterSpacing: "-0.5px" }}
              >
                {t.name}
              </span>
              <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-foreground/55">
                {t.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
