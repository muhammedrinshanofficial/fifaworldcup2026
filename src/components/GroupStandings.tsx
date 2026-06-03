import { groups } from "@/lib/matches";

export function GroupStandings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {groups.map((g, gi) => (
        <div key={g.name} className="glass rounded-2xl p-4 animate-float-up" style={{ animationDelay: `${gi * 0.04}s` }}>
          <h3 className="text-lg font-black mb-3 flex items-center gap-2">
            <span className="text-gradient-gold">Group {g.name}</span>
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border/60">
                <th className="text-left py-2 font-medium">Team</th>
                <th className="font-medium">P</th>
                <th className="font-medium">W</th>
                <th className="font-medium">D</th>
                <th className="font-medium">L</th>
                <th className="font-medium">GD</th>
                <th className="font-medium text-right pr-1">Pts</th>
              </tr>
            </thead>
            <tbody>
              {g.teams.map((t, ti) => {
                const cls =
                  ti < 2
                    ? "bg-success/10 border-l-2 border-success"
                    : ti === 2
                    ? "bg-primary/5 border-l-2 border-primary/60"
                    : "";
                return (
                  <tr key={t.code} className={`border-b border-border/30 last:border-0 ${cls}`}>
                    <td className="py-2 pl-2">
                      <span className="flex items-center gap-2">
                        <span className="text-lg">{t.flag}</span>
                        <span className="font-medium">{t.name}</span>
                      </span>
                    </td>
                    <td className="text-center text-muted-foreground">0</td>
                    <td className="text-center text-muted-foreground">0</td>
                    <td className="text-center text-muted-foreground">0</td>
                    <td className="text-center text-muted-foreground">0</td>
                    <td className="text-center text-muted-foreground">0</td>
                    <td className="text-right pr-2 font-bold">0</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
