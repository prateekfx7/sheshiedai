import { Shield, Heart } from "lucide-react";

/**
 * Animated "Aegis Orb" — a women-safety themed centerpiece.
 * A glowing blush halo surrounds a central protective shield with a pulsing heart,
 * orbited by tiny guardian dots representing the trusted circle network.
 */
export function AegisOrb() {
  return (
    <div className="relative flex h-[520px] items-center justify-center md:h-[640px]">
      {/* Soft outer glow */}
      <div
        className="absolute inset-0 rounded-[32px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,193,209,0.7), rgba(255,193,209,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Glassy plate */}
      <div
        className="absolute inset-6 overflow-hidden rounded-[28px] border border-white/60"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,225,235,0.45))",
          backdropFilter: "blur(20px)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.9), 0 30px 80px -30px rgba(232,90,138,0.45)",
        }}
      />

      {/* Concentric rings */}
      <div className="absolute h-[420px] w-[420px] animate-orb-spin rounded-full border border-dashed border-[color:var(--blush)]/30" />
      <div
        className="absolute h-[300px] w-[300px] rounded-full border border-[color:var(--blush)]/40"
        style={{ animation: "orb-spin 26s linear infinite reverse" }}
      />

      {/* Pulsing core halo */}
      <div
        className="absolute h-[260px] w-[260px] animate-pulse-glow rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,90,138,0.55), rgba(232,90,138,0) 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Center shield */}
      <div
        className="relative z-10 flex h-[170px] w-[170px] animate-float items-center justify-center rounded-full"
        style={{
          background:
            "linear-gradient(135deg, #FFD7E3 0%, #E85A8A 60%, #C7427A 100%)",
          boxShadow:
            "inset 0 8px 20px rgba(255,255,255,0.4), 0 24px 60px -10px rgba(199,66,122,0.55)",
        }}
      >
        <Shield className="h-20 w-20 text-white drop-shadow-md" strokeWidth={1.6} />
        <Heart
          className="absolute h-7 w-7 text-white"
          fill="white"
          style={{ top: "52%" }}
        />
      </div>

      {/* Orbiting guardian dots */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <div
          key={i}
          className="absolute h-[300px] w-[300px]"
          style={{
            transform: `rotate(${deg}deg)`,
            animation: `orb-spin ${20 + i}s linear infinite`,
          }}
        >
          <span
            className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full"
            style={{
              background: "var(--blush)",
              boxShadow: "0 0 14px rgba(232,90,138,0.8)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
