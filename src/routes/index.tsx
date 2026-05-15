import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shield AI — Smarter safety for women, faster response" },
      {
        name: "description",
        content:
          "Shield AI helps women stay safe with intelligent threat detection, real-time alerts, and trusted guardian network.",
      },
      { property: "og:title", content: "Shield AI — Smarter safety for women" },
      {
        property: "og:description",
        content:
          "Intelligent threat detection, real-time alerts, and a trusted guardian network — built for women's safety.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fustat:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const logos = ["NORTHWIND", "ACME", "LUMEN", "ORBIT", "VERTEX"];

function Index() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full opacity-70"
          style={{
            background: "radial-gradient(closest-side, #60B1FF, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute left-40 -top-20 h-[500px] w-[500px] rounded-full opacity-80"
          style={{
            background: "radial-gradient(closest-side, #319AFF, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="sticky top-[30px] z-50 mx-auto flex w-fit justify-center px-4">
        <nav
          className="flex items-center gap-2 rounded-[16px] px-3 py-2"
          style={{
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(50px)",
            background: "rgba(255,255,255,0.3)",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.25)",
          }}
        >
          <a
            href="/"
            className="px-3 text-[18px] font-bold tracking-tight"
            style={{ fontFamily: "Fustat, sans-serif" }}
          >
            Shield AI
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {["Home", "Features", "Company", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-[12px] px-3 py-2 text-[14px] font-medium text-foreground/80 transition-colors hover:bg-white/40 hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </div>
          <button
            className="ml-1 inline-flex items-center gap-1.5 rounded-[12px] border border-black/10 bg-white/40 px-3 py-2 text-[14px] font-semibold text-foreground transition hover:bg-white/60"
            style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)" }}
          >
            Sign Up
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pt-16 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col gap-7">
            {/* Social proof */}
            <div
              className="flex w-fit items-center gap-3 rounded-full border border-black/5 bg-white/60 px-4 py-2"
              style={{ backdropFilter: "blur(20px)" }}
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4"
                    style={{ color: "#FF801E", fill: "#FF801E" }}
                  />
                ))}
              </div>
              <span className="text-[13px] font-medium text-foreground/80">
                Trusted 4.9/5 by 2700+ women
              </span>
            </div>

            <h1
              className="font-bold text-foreground"
              style={{
                fontFamily: "Fustat, sans-serif",
                fontSize: "clamp(44px, 6vw, 75px)",
                lineHeight: 1.05,
                letterSpacing: "-2px",
              }}
            >
              Stay safer,<br />respond faster
            </h1>

            <p
              className="max-w-[540px] text-foreground/70"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "18px",
                letterSpacing: "-0.5px",
                lineHeight: 1.55,
              }}
            >
              Shield AI helps women feel secure everywhere — with intelligent
              threat detection, real-time SOS alerts, and a trusted guardian
              network that's always one tap away.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                className="group inline-flex items-center gap-3 rounded-[16px] py-4 pl-6 pr-2 text-[15px] font-semibold text-white transition-transform duration-300 hover:scale-[1.02]"
                style={{
                  background: "rgba(0,132,255,0.8)",
                  backdropFilter: "blur(2px)",
                  boxShadow:
                    "inset 0px 4px 4px 0px rgba(255,255,255,0.35), 0 10px 30px -10px rgba(0,132,255,0.6)",
                }}
              >
                Get Protected Now
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0084FF]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
              <a
                href="#"
                className="text-[14px] font-medium text-foreground/70 underline-offset-4 hover:underline"
              >
                Watch how it works
              </a>
            </div>
          </div>

          {/* Right — Glassy Orb */}
          <div className="relative flex h-[520px] items-center justify-center md:h-[640px]">
            <div className="absolute inset-0 overflow-hidden rounded-[32px] bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full scale-125 object-cover"
                style={{
                  mixBlendMode: "screen",
                  filter:
                    "hue-rotate(-55deg) saturate(250%) brightness(1.2) contrast(1.1)",
                }}
              >
                <source
                  src="https://future.co/images/homepage/glassy-orb/orb-purple.webm"
                  type="video/webm"
                />
              </video>
            </div>
          </div>
        </div>

        {/* Footer logos */}
        <section className="mt-28 pb-16">
          <p
            className="text-center text-[13px] font-medium uppercase tracking-[0.2em] text-foreground/50"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Trusted by top-tier safety & tech partners
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-[100px] gap-y-8 opacity-60 grayscale">
            {logos.map((name) => (
              <span
                key={name}
                className="text-[20px] font-bold tracking-widest text-foreground/70"
                style={{ fontFamily: "Fustat, sans-serif" }}
              >
                {name}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
