import { Star, MapPin, Share2 } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import type { Match } from "@/lib/matches";
import { toast } from "sonner";

interface Props {
  match: Match;
  favorites: Set<string>;
  toggleFavorite: (code: string) => void;
}

function formatIST(utcIso: string): { time: string; date: string } {
  const d = new Date(utcIso);
  // IST = UTC+5:30
  const ist = new Date(d.getTime() + (5.5 * 60 * 60 * 1000));
  const h = ist.getUTCHours();
  const m = ist.getUTCMinutes();
  const hh12 = ((h + 11) % 12) + 1;
  const ampm = h >= 12 ? "PM" : "AM";
  const time = `${hh12}:${String(m).padStart(2, "0")} ${ampm} IST`;
  const dateOpts: Intl.DateTimeFormatOptions = { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" };
  const date = ist.toLocaleDateString("en-IN", dateOpts);
  return { time, date };
}

function statusOf(utcIso: string): { label: string; cls: string } {
  const start = new Date(utcIso).getTime();
  const now = Date.now();
  const end = start + 120 * 60 * 1000;
  if (now < start) return { label: "Upcoming", cls: "bg-accent/20 text-accent border-accent/40" };
  if (now < end) return { label: "LIVE", cls: "bg-live/20 text-live border-live/50 animate-live-pulse" };
  return { label: "Completed", cls: "bg-success/20 text-success border-success/40" };
}

export function MatchCard({ match, favorites, toggleFavorite }: Props) {
  const { time, date } = formatIST(match.utcKickoff);
  const status = statusOf(match.utcKickoff);
  const isUpcoming = status.label === "Upcoming";

  const share = async () => {
    const text = `⚽ ${match.home.flag} ${match.home.name} vs ${match.away.flag} ${match.away.name}\n📅 ${date} · ${time}\n📍 ${match.stadium}, ${match.city}\n#FIFAWorldCup2026`;
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Match info copied!");
    } catch {
      toast.error("Couldn't copy");
    }
  };

  const fav = (code: string) => favorites.has(code);

  return (
    <article className="glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-electric hover:border-accent/40 group animate-float-up">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          {match.group && (
            <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-primary/15 text-primary border border-primary/30">
              Group {match.group}
            </span>
          )}
          <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-secondary/60 text-secondary-foreground">
            {match.stage}
          </span>
        </div>
        <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md border ${status.cls}`}>
          {status.label}
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mb-4">
        <TeamSide team={match.home} faved={fav(match.home.code)} toggle={() => toggleFavorite(match.home.code)} align="left" />
        <div className="flex flex-col items-center">
          <span className="text-xs text-muted-foreground mb-1">vs</span>
          <span className="text-lg font-black text-accent animate-vs-glow">⚔️</span>
        </div>
        <TeamSide team={match.away} faved={fav(match.away.code)} toggle={() => toggleFavorite(match.away.code)} align="right" />
      </div>

      <div className="space-y-2 text-sm border-t border-border/50 pt-3">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">{date}</span>
          <span className="font-bold text-foreground">{time}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
          <span className="truncate">{match.stadium}, {match.city}</span>
        </div>
        {isUpcoming && (
          <div className="flex items-center justify-between pt-1">
            <CountdownTimer targetUtcIso={match.utcKickoff} compact />
            <button
              onClick={share}
              className="opacity-60 hover:opacity-100 hover:text-accent transition-colors"
              aria-label="Share match"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

function TeamSide({
  team,
  faved,
  toggle,
  align,
}: {
  team: { name: string; flag: string; code: string };
  faved: boolean;
  toggle: () => void;
  align: "left" | "right";
}) {
  return (
    <div className={`flex flex-col items-center gap-2 ${align === "right" ? "" : ""}`}>
      <div className="relative">
        <span
          className={`text-5xl md:text-6xl inline-block hover-wave transition-all ${
            faved ? "drop-shadow-[0_0_12px_#FFD700]" : ""
          }`}
        >
          {team.flag}
        </span>
        <button
          onClick={toggle}
          className="absolute -top-1 -right-2 p-1 rounded-full bg-background/80 hover:scale-110 transition-transform"
          aria-label={faved ? "Unfavorite team" : "Favorite team"}
        >
          <Star
            className={`w-3.5 h-3.5 ${faved ? "fill-primary text-primary" : "text-muted-foreground"}`}
          />
        </button>
      </div>
      <span className="text-sm font-bold text-center leading-tight">{team.name}</span>
    </div>
  );
}
