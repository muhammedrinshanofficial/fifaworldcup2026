import { Users, MapPin } from "lucide-react";
import { venues } from "@/lib/matches";

export function VenuesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {venues.map((v, i) => (
        <div
          key={`${v.name}-${i}`}
          className="glass rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-glow-gold animate-float-up"
          style={{ animationDelay: `${i * 0.03}s` }}
        >
          <div
            className="h-32 relative"
            style={{
              background: `linear-gradient(135deg, #0f2a3a, #1a3a5a), repeating-linear-gradient(45deg, transparent 0 10px, rgba(255,215,0,0.05) 10px 11px)`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-60">🏟️</div>
            <div className="absolute top-3 right-3 text-2xl">{v.flag}</div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-base mb-1 truncate">{v.name}</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
              <MapPin className="w-3 h-3" />
              {v.city}, {v.country}
            </p>
            <p className="text-xs text-accent flex items-center gap-1">
              <Users className="w-3 h-3" />
              {v.capacity.toLocaleString()} capacity
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
