import type { Stage } from "@/lib/matches";

export interface Filters {
  date: string | "all";
  group: string | "all";
  stage: Stage | "all";
}

interface Props {
  filters: Filters;
  setFilters: (f: Filters) => void;
  dates: string[];
  goToToday: () => void;
}

const STAGES: (Stage | "all")[] = [
  "all",
  "Group Stage",
  "Round of 32",
  "Round of 16",
  "Quarterfinal",
  "Semifinal",
  "Third Place",
  "Final",
];

const GROUPS = ["all", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

function formatShort(d: string) {
  const dt = new Date(d + "T00:00:00");
  return dt.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function FilterBar({ filters, setFilters, dates, goToToday }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <select
          value={filters.stage}
          onChange={(e) => setFilters({ ...filters, stage: e.target.value as Stage | "all" })}
          className="glass rounded-lg px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-accent/50"
        >
          {STAGES.map((s) => (
            <option key={s} value={s} className="bg-background">
              {s === "all" ? "All Stages" : s}
            </option>
          ))}
        </select>

        <select
          value={filters.group}
          onChange={(e) => setFilters({ ...filters, group: e.target.value })}
          className="glass rounded-lg px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-accent/50"
        >
          {GROUPS.map((g) => (
            <option key={g} value={g} className="bg-background">
              {g === "all" ? "All Groups" : `Group ${g}`}
            </option>
          ))}
        </select>

        <button
          onClick={goToToday}
          className="ml-auto px-4 py-2 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0a0e1a] text-sm font-bold hover:shadow-glow-gold transition-all"
        >
          Today's Matches
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin">
        <button
          onClick={() => setFilters({ ...filters, date: "all" })}
          className={`shrink-0 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
            filters.date === "all"
              ? "bg-accent/20 text-accent border border-accent/40"
              : "glass text-muted-foreground hover:text-foreground"
          }`}
        >
          All Dates
        </button>
        {dates.map((d) => (
          <button
            key={d}
            id={`date-${d}`}
            onClick={() => setFilters({ ...filters, date: d })}
            className={`shrink-0 px-3 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
              filters.date === d
                ? "bg-accent/20 text-accent border border-accent/40"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {formatShort(d)}
          </button>
        ))}
      </div>
    </div>
  );
}
