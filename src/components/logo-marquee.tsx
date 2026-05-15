const partners = [
  "SAFECONNECT",
  "GUARDIAN HUB",
  "SECURENET",
  "WOMEN SHIELD",
  "TRUSTLINK",
];

export function LogoMarquee({ label }: { label?: string }) {
  const row = [...partners, ...partners];
  return (
    <section className="relative mt-24">
      {label ? (
        <p
          className="text-center text-[12px] font-medium uppercase tracking-[0.25em] text-foreground/50"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {label}
        </p>
      ) : null}
      <div
        className="relative mt-8 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-[100px] whitespace-nowrap">
          {row.map((name, i) => (
            <span
              key={i}
              className="text-[20px] font-bold tracking-[0.18em] text-foreground/55 grayscale transition hover:text-[color:var(--blush-deep)]"
              style={{ fontFamily: "Fustat, sans-serif" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
