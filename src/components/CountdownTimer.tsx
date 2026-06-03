import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
}

function diff(target: Date): TimeLeft {
  const ms = target.getTime() - Date.now();
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds, finished: false };
}

export function CountdownTimer({ targetUtcIso, compact = false }: { targetUtcIso: string; compact?: boolean }) {
  const target = new Date(targetUtcIso);
  const [t, setT] = useState<TimeLeft>(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [targetUtcIso]);

  if (t.finished) {
    return <span className="text-live font-semibold">Kick-off!</span>;
  }

  if (compact) {
    return (
      <span className="text-xs text-accent font-medium">
        Starts in {t.days}d {t.hours}h {t.minutes}m
      </span>
    );
  }

  const cells = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <div className="flex gap-3 md:gap-5 justify-center">
      {cells.map((c) => (
        <div key={c.label} className="glass-strong rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[72px] md:min-w-[110px] text-center">
          <div className="text-3xl md:text-5xl font-black text-gradient-gold tabular-nums">
            {String(c.value).padStart(2, "0")}
          </div>
          <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mt-1">{c.label}</div>
        </div>
      ))}
    </div>
  );
}
