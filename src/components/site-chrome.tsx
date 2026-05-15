import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Shield, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "motion/react";

export function SiteHeader() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/sos", label: "SOS" },
    { to: "/how-its-built", label: "How it's built" },
  ] as const;

  return (
    <header className="sticky top-[24px] z-50 mx-auto flex w-fit justify-center px-4">
      <nav
        className="flex items-center gap-2 rounded-[16px] px-3 py-2"
        style={{
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
          background: "rgba(255,255,255,0.45)",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)",
        }}
      >
        <Link
          to="/"
          className="flex items-center gap-1.5 px-3 text-[18px] font-bold tracking-tight"
          style={{ fontFamily: "Fustat, sans-serif" }}
        >
          <Shield className="h-5 w-5" style={{ color: "var(--blush)" }} />
          She Shield AI
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-[12px] px-3 py-2 text-[14px] font-medium text-foreground/80 transition-colors hover:bg-white/60 hover:text-foreground"
              activeProps={{ style: { color: "var(--blush-deep)" } }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/sos"
          className="ml-1 inline-flex items-center gap-1.5 rounded-[12px] px-3 py-2 text-[14px] font-semibold text-white transition hover:scale-[1.02]"
          style={{
            background: "var(--blush)",
            boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35), 0 6px 18px -6px rgba(232,90,138,0.6)",
          }}
        >
          Get Protected
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </nav>
    </header>
  );
}

function LogoIcon() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-[8px]" style={{ background: "var(--blush)" }}>
      <Shield className="h-4 w-4 text-white" />
    </div>
  );
}

function GlassText() {
  return (
    <div className="relative w-full select-none pt-2">
      {/* Hidden SVG defining the displacement filter */}
      <svg className="absolute h-0 w-0" aria-hidden>
        <defs>
          <filter id="sheGlass" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="14" />
            <feGaussianBlur stdDeviation="0.4" />
          </filter>
        </defs>
      </svg>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full items-center justify-center"
      >
        <h2
          className="bg-clip-text text-center font-bold leading-none text-transparent"
          style={{
            fontFamily: "Fustat, sans-serif",
            fontSize: "clamp(80px, 18vw, 260px)",
            letterSpacing: "-0.06em",
            backgroundImage: "linear-gradient(180deg,#FFC1D1 0%,#E85A8A 60%,#C7427A 100%)",
            filter: "url(#sheGlass)",
          }}
        >
          she shield
        </h2>
      </motion.div>
    </div>
  );
}

const socials = [Linkedin, Twitter, Instagram];

const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", to: "/features" as const },
      { label: "SOS", to: "/sos" as const },
      { label: "How it's built", to: "/how-its-built" as const },
      { label: "Updates", href: "#" },
    ],
  },
  {
    title: "Safety",
    links: [
      { label: "Trusted Circles", href: "#" },
      { label: "Safe Routes", href: "#" },
      { label: "Self-Defense", href: "#" },
      { label: "Resources", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-32 px-4 pb-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-[48px] border border-pink-100 bg-[#F4ECF1] shadow-sm">
          <div className="m-2 rounded-[40px] bg-white shadow-sm">
            <div className="grid grid-cols-1 gap-12 p-8 md:grid-cols-2 md:p-10 lg:grid-cols-5 lg:p-12">
              {/* Brand */}
              <div className="space-y-8 lg:col-span-2">
                <div className="flex items-center gap-2.5">
                  <LogoIcon />
                  <span className="text-[20px] font-bold tracking-tight" style={{ fontFamily: "Fustat, sans-serif" }}>
                    she shield ai
                  </span>
                </div>
                <p className="max-w-sm text-[15px] leading-relaxed text-[#475569]">
                  Intelligent safety for women — on-device AI, trusted human guardians, and one-tap response, designed to protect what matters most.
                </p>
                <div className="flex gap-3">
                  {socials.map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="group flex h-[44px] w-[44px] items-center justify-center rounded-xl border border-slate-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all hover:bg-slate-50 active:scale-95"
                    >
                      <Icon className="h-5 w-5 text-slate-800 transition-colors group-hover:text-[color:var(--blush-deep)]" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Link columns */}
              {cols.map((col) => (
                <div key={col.title} className="space-y-6">
                  <h4 className="text-[15px] font-semibold text-[#0F172A]" style={{ fontFamily: "Fustat, sans-serif" }}>
                    {col.title}
                  </h4>
                  <ul className="space-y-4">
                    {col.links.map((l) =>
                      "to" in l ? (
                        <li key={l.label}>
                          <Link
                            to={l.to}
                            className="text-[15px] font-medium text-[#1E293B] transition-colors hover:text-[color:var(--blush)]"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ) : (
                        <li key={l.label}>
                          <a
                            href={l.href}
                            className="text-[15px] font-medium text-[#1E293B] transition-colors hover:text-[color:var(--blush)]"
                          >
                            {l.label}
                          </a>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              ))}
            </div>

            {/* Massive glass display text */}
            <div className="px-6 pb-2 md:px-10 lg:px-12">
              <GlassText />
            </div>
          </div>

          {/* Legal bar */}
          <div className="flex flex-col items-center justify-between gap-6 px-6 py-5 text-[15px] sm:px-12 md:flex-row md:px-16 lg:px-20">
            <p className="text-[#64748B]">© {new Date().getFullYear()} She Shield AI. All rights reserved.</p>
            <div className="flex items-center gap-8 font-medium text-[#64748B]">
              <a href="#" className="hover:text-[color:var(--blush-deep)]">Legal Center</a>
              <span className="h-4 w-px bg-slate-300" />
              <a href="#" className="hover:text-[color:var(--blush-deep)]">User Agreement</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
