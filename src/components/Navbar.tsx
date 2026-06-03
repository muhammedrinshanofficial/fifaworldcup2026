import { Trophy, Menu, X, Sun, Moon, Search } from "lucide-react";
import { useState } from "react";

export type Tab = "schedule" | "groups" | "venues" | "myteams";

interface Props {
  tab: Tab;
  setTab: (t: Tab) => void;
  search: string;
  setSearch: (s: string) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
  favCount: number;
}

const TABS: { id: Tab; label: string }[] = [
  { id: "schedule", label: "Schedule" },
  { id: "groups", label: "Groups" },
  { id: "venues", label: "Venues" },
  { id: "myteams", label: "My Teams" },
];

export function Navbar({ tab, setTab, search, setSearch, theme, toggleTheme, favCount }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-40 glass-strong border-b border-border/60">
      <div className="container mx-auto px-4 h-16 flex items-center gap-4">
        <a href="#" className="flex items-center gap-2 font-black">
          <Trophy className="w-6 h-6 text-primary" />
          <span className="hidden sm:inline text-gradient-gold tracking-tight">WC 2026</span>
        </a>

        <div className="hidden md:flex items-center gap-1 ml-4">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                tab === t.id
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              {t.label}
              {t.id === "myteams" && favCount > 0 && (
                <span className="ml-1.5 text-[10px] bg-primary text-primary-foreground rounded-full px-1.5 py-0.5">
                  {favCount}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="flex-1" />

        <div className="hidden sm:flex items-center gap-2 glass rounded-full px-3 py-1.5 w-56">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search teams..."
            className="bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground"
          />
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-secondary/60 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-secondary/60"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 glass-strong">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTab(t.id);
                  setOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-semibold text-left ${
                  tab === t.id ? "bg-primary/20 text-primary" : "text-muted-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
            <div className="flex items-center gap-2 glass rounded-full px-3 py-1.5 mt-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search teams..."
                className="bg-transparent outline-none text-sm flex-1"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
