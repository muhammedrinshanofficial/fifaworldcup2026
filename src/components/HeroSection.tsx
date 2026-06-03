import { Trophy } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import { HOST_COUNTRIES, TOURNAMENT_START_UTC } from "@/lib/matches";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Animated gradient backdrop */}
      <div
        className="absolute inset-0 -z-10 animate-gradient-shift"
        style={{
          background: "linear-gradient(120deg, #0a0e1a 0%, #0f2a3a 35%, #102540 65%, #0a0e1a 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #FFD70022 0, transparent 40%), radial-gradient(circle at 80% 70%, #00D4FF22 0, transparent 40%)",
        }}
      />

      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6 animate-float-up">
          <Trophy
            className="w-20 h-20 md:w-28 md:h-28 text-[#FFD700] animate-pulse-glow"
            strokeWidth={1.5}
          />
        </div>

        <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-3 animate-float-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-gradient-gold">FIFA WORLD CUP</span>
          <br />
          <span className="text-foreground">2026</span>
        </h1>

        <p className="text-base md:text-xl text-muted-foreground mb-10 animate-float-up" style={{ animationDelay: "0.2s" }}>
          48 Nations · 104 Matches · One Champion
        </p>

        <div className="mb-10 animate-float-up" style={{ animationDelay: "0.3s" }}>
          <CountdownTimer targetUtcIso={TOURNAMENT_START_UTC} />
        </div>

        <div className="flex items-center justify-center gap-3 md:gap-6 text-sm md:text-base animate-float-up" style={{ animationDelay: "0.4s" }}>
          {HOST_COUNTRIES.map((c, i) => (
            <div key={c.name} className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl hover-wave inline-block">{c.flag}</span>
              <span className="font-semibold">{c.name}</span>
              {i < HOST_COUNTRIES.length - 1 && <span className="text-muted-foreground/40 ml-3 md:ml-6">|</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
