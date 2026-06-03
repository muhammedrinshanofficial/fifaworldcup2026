import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar, type Tab } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ConfettiBurst } from "@/components/ConfettiBurst";
import { MatchCard } from "@/components/MatchCard";
import { FilterBar, type Filters } from "@/components/FilterBar";
import { GroupStandings } from "@/components/GroupStandings";
import { VenuesGrid } from "@/components/VenuesGrid";
import { ScrollToTop } from "@/components/ScrollToTop";
import { matches, HOST_COUNTRIES } from "@/lib/matches";
import { Sparkles, Heart } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function useFavorites() {
  const [favs, setFavs] = useState<Set<string>>(() => {
    if (typeof window === "undefined") return new Set();
    try {
      const raw = localStorage.getItem("wc26-favs");
      return new Set(raw ? JSON.parse(raw) : []);
    } catch {
      return new Set();
    }
  });
  const toggle = (code: string) => {
    setFavs((prev) => {
      const next = new Set(prev);
      next.has(code) ? next.delete(code) : next.add(code);
      try { localStorage.setItem("wc26-favs", JSON.stringify([...next])); } catch {}
      return next;
    });
  };
  return { favs, toggle };
}

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

function Index() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [tab, setTab] = useState<Tab>("schedule");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Filters>({ date: "all", group: "all", stage: "all" });
  const { favs, toggle } = useFavorites();
  const { theme, toggle: toggleTheme } = useTheme();

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const allDates = useMemo(() => {
    const set = new Set(matches.map((m) => m.date));
    return [...set].sort();
  }, []);

  const todayDate = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    // pick nearest upcoming date >= today, else first
    return allDates.find((d) => d >= today) ?? allDates[0];
  }, [allDates]);

  const goToToday = () => {
    setFilters((f) => ({ ...f, date: todayDate }));
    setTimeout(() => {
      document.getElementById("schedule-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const filtered = useMemo(() => {
    return matches.filter((m) => {
      if (filters.stage !== "all" && m.stage !== filters.stage) return false;
      if (filters.group !== "all" && m.group !== filters.group) return false;
      if (filters.date !== "all" && m.date !== filters.date) return false;
      if (search.trim()) {
        const q = search.trim().toLowerCase();
        if (!m.home.name.toLowerCase().includes(q) && !m.away.name.toLowerCase().includes(q)) return false;
      }
      if (tab === "myteams") {
        if (favs.size === 0) return false;
        if (!favs.has(m.home.code) && !favs.has(m.away.code)) return false;
      }
      return true;
    });
  }, [filters, search, tab, favs]);

  const grouped = useMemo(() => {
    const m = new Map<string, typeof filtered>();
    for (const match of filtered) {
      const arr = m.get(match.date) ?? [];
      arr.push(match);
      m.set(match.date, arr);
    }
    return [...m.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

  const matchOfTheDay = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    const todays = matches.filter((m) => m.date >= today);
    // pick a marquee match: first one that contains BRA/ARG/FRA/ESP/ENG/GER
    const star = ["BRA", "ARG", "FRA", "ESP", "ENG", "GER"];
    return (
      todays.find((m) => star.includes(m.home.code) || star.includes(m.away.code)) ?? todays[0] ?? matches[0]
    );
  }, []);

  return (
    <div className="min-h-screen">
      {showConfetti && <ConfettiBurst />}
      <Navbar
        tab={tab}
        setTab={setTab}
        search={search}
        setSearch={setSearch}
        theme={theme}
        toggleTheme={toggleTheme}
        favCount={favs.size}
      />

      <HeroSection />

      <main className="container mx-auto px-4 pb-24 space-y-12">
        {tab === "schedule" && (
          <>
            {/* Match of the Day */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-black">
                  <span className="text-gradient-gold">Match of the Day</span>
                </h2>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#FFD700] via-[#00D4FF] to-[#FFD700] opacity-60 blur-md animate-gradient-shift" />
                <div className="relative">
                  <MatchCard match={matchOfTheDay} favorites={favs} toggleFavorite={toggle} />
                </div>
              </div>
            </section>

            <section id="schedule-list">
              <h2 className="text-xl md:text-2xl font-black mb-4">Full Schedule</h2>
              <FilterBar filters={filters} setFilters={setFilters} dates={allDates} goToToday={goToToday} />

              <div className="mt-8 space-y-10">
                {grouped.length === 0 && (
                  <p className="text-center text-muted-foreground py-12">No matches match your filters.</p>
                )}
                {grouped.map(([date, ms]) => {
                  const dt = new Date(date + "T00:00:00");
                  const label = dt.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  });
                  return (
                    <div key={date}>
                      <h3 className="text-sm uppercase tracking-widest font-bold text-accent mb-4 sticky top-16 glass-strong rounded-lg px-3 py-2 z-10 -mx-2">
                        {label} <span className="text-muted-foreground font-normal">· {ms.length} matches</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {ms.map((m) => (
                          <MatchCard key={m.id} match={m} favorites={favs} toggleFavorite={toggle} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}

        {tab === "groups" && (
          <section>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-gradient-gold">Group Standings</h2>
            <GroupStandings />
          </section>
        )}

        {tab === "venues" && (
          <section>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-gradient-gold">Host Venues</h2>
            <VenuesGrid />
          </section>
        )}

        {tab === "myteams" && favs.size === 0 && (
          <div className="text-center py-20 glass rounded-2xl">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No favorite teams yet</h3>
            <p className="text-muted-foreground">Tap the ⭐ on any flag to follow your team.</p>
          </div>
        )}
      </main>

      <footer className="border-t border-border/60 glass-strong">
        <div className="container mx-auto px-4 py-10 text-center space-y-3">
          <div className="flex justify-center gap-4 text-2xl">
            {HOST_COUNTRIES.map((c) => (
              <span key={c.name} className="hover-wave inline-block">{c.flag}</span>
            ))}
          </div>
          <p className="font-bold text-gradient-gold text-lg">FIFA World Cup 2026</p>
          <p className="text-xs text-muted-foreground">All match times in Indian Standard Time (IST · UTC+5:30)</p>
          <p className="text-xs text-muted-foreground">Built with <span className="text-live">♥</span> for football fans</p>
        </div>
      </footer>

      <ScrollToTop />
      <Toaster theme={theme} richColors position="bottom-right" />
    </div>
  );
}
