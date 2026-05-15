import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Shield } from "lucide-react";

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
          Shield AI
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

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-32 border-t border-black/5 bg-gradient-to-b from-transparent to-pink-50/40">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-[20px] font-bold" style={{ fontFamily: "Fustat, sans-serif" }}>
            <Shield className="h-5 w-5" style={{ color: "var(--blush)" }} />
            Shield AI
          </div>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-foreground/65">
            Built for women, by people who care. Shield AI combines on-device intelligence
            with a trusted human network so help is always one tap away.
          </p>
        </div>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-widest text-foreground/50">Product</p>
          <ul className="mt-4 space-y-2 text-[14px] text-foreground/75">
            <li><Link to="/features" className="hover:text-[color:var(--blush-deep)]">Features</Link></li>
            <li><Link to="/sos" className="hover:text-[color:var(--blush-deep)]">SOS</Link></li>
            <li><Link to="/how-its-built" className="hover:text-[color:var(--blush-deep)]">How it's built</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-widest text-foreground/50">Company</p>
          <ul className="mt-4 space-y-2 text-[14px] text-foreground/75">
            <li><a href="#" className="hover:text-[color:var(--blush-deep)]">About</a></li>
            <li><a href="#" className="hover:text-[color:var(--blush-deep)]">Press</a></li>
            <li><a href="#" className="hover:text-[color:var(--blush-deep)]">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-3 px-6 py-6 text-[12px] text-foreground/55 md:flex-row">
          <span>© {new Date().getFullYear()} Shield AI. All rights reserved.</span>
          <span>Made with care for women's safety.</span>
        </div>
      </div>
    </footer>
  );
}
