export interface Team {
  name: string;
  flag: string;
  code: string;
}

export type Stage = "Group Stage" | "Round of 32" | "Round of 16" | "Quarterfinal" | "Semifinal" | "Third Place" | "Final";

export interface Match {
  id: string;
  date: string; // ISO in IST display, we store UTC ISO
  utcKickoff: string; // ISO UTC
  group?: string;
  stage: Stage;
  home: Team;
  away: Team;
  stadium: string;
  city: string;
  country: string;
}

export interface Group {
  name: string;
  teams: Team[];
}

// Teams
const T = {
  MEX: { name: "Mexico", flag: "🇲🇽", code: "MEX" },
  KOR: { name: "South Korea", flag: "🇰🇷", code: "KOR" },
  RSA: { name: "South Africa", flag: "🇿🇦", code: "RSA" },
  CZE: { name: "Czechia", flag: "🇨🇿", code: "CZE" },
  CAN: { name: "Canada", flag: "🇨🇦", code: "CAN" },
  SUI: { name: "Switzerland", flag: "🇨🇭", code: "SUI" },
  QAT: { name: "Qatar", flag: "🇶🇦", code: "QAT" },
  BIH: { name: "Bosnia & Herzegovina", flag: "🇧🇦", code: "BIH" },
  BRA: { name: "Brazil", flag: "🇧🇷", code: "BRA" },
  MAR: { name: "Morocco", flag: "🇲🇦", code: "MAR" },
  SCO: { name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", code: "SCO" },
  HAI: { name: "Haiti", flag: "🇭🇹", code: "HAI" },
  USA: { name: "USA", flag: "🇺🇸", code: "USA" },
  NED: { name: "Netherlands", flag: "🇳🇱", code: "NED" },
  COL: { name: "Colombia", flag: "🇨🇴", code: "COL" },
  PAN: { name: "Panama", flag: "🇵🇦", code: "PAN" },
  JOR: { name: "Jordan", flag: "🇯🇴", code: "JOR" },
  ENG: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "ENG" },
  AUS: { name: "Australia", flag: "🇦🇺", code: "AUS" },
  PAR: { name: "Paraguay", flag: "🇵🇾", code: "PAR" },
  COD: { name: "DR Congo", flag: "🇨🇩", code: "COD" },
  GER: { name: "Germany", flag: "🇩🇪", code: "GER" },
  URU: { name: "Uruguay", flag: "🇺🇾", code: "URU" },
  TUN: { name: "Tunisia", flag: "🇹🇳", code: "TUN" },
  IDN: { name: "Indonesia", flag: "🇮🇩", code: "IDN" },
  JPN: { name: "Japan", flag: "🇯🇵", code: "JPN" },
  UKR: { name: "Ukraine", flag: "🇺🇦", code: "UKR" },
  POR: { name: "Portugal", flag: "🇵🇹", code: "POR" },
  ESP: { name: "Spain", flag: "🇪🇸", code: "ESP" },
  KSA: { name: "Saudi Arabia", flag: "🇸🇦", code: "KSA" },
  CPV: { name: "Cape Verde", flag: "🇨🇻", code: "CPV" },
  FRA: { name: "France", flag: "🇫🇷", code: "FRA" },
  SEN: { name: "Senegal", flag: "🇸🇳", code: "SEN" },
  NOR: { name: "Norway", flag: "🇳🇴", code: "NOR" },
  IRQ: { name: "Iraq", flag: "🇮🇶", code: "IRQ" },
  ARG: { name: "Argentina", flag: "🇦🇷", code: "ARG" },
  AUT: { name: "Austria", flag: "🇦🇹", code: "AUT" },
  BEL: { name: "Belgium", flag: "🇧🇪", code: "BEL" },
  CIV: { name: "Ivory Coast", flag: "🇨🇮", code: "CIV" },
  IRN: { name: "Iran", flag: "🇮🇷", code: "IRN" },
  EGY: { name: "Egypt", flag: "🇪🇬", code: "EGY" },
  ITA: { name: "Italy", flag: "🇮🇹", code: "ITA" },
  UZB: { name: "Uzbekistan", flag: "🇺🇿", code: "UZB" },
  NZL: { name: "New Zealand", flag: "🇳🇿", code: "NZL" },
  ECU: { name: "Ecuador", flag: "🇪🇨", code: "ECU" },
} as const;

export const groups: Group[] = [
  { name: "A", teams: [T.MEX, T.KOR, T.RSA, T.CZE] },
  { name: "B", teams: [T.CAN, T.SUI, T.QAT, T.BIH] },
  { name: "C", teams: [T.BRA, T.MAR, T.SCO, T.HAI] },
  { name: "D", teams: [T.NED, T.COL, T.PAN, T.JOR] },
  { name: "E", teams: [T.ENG, T.AUS, T.PAR, T.COD] },
  { name: "F", teams: [T.GER, T.URU, T.TUN, T.IDN] },
  { name: "G", teams: [T.USA, T.JPN, T.UKR, T.NZL] },
  { name: "H", teams: [T.ESP, T.SEN, T.NOR, T.CPV] },
  { name: "I", teams: [T.FRA, T.POR, T.KSA, T.IRQ] },
  { name: "J", teams: [T.BEL, T.AUT, T.CIV, T.HAI] },
  { name: "K", teams: [T.ARG, T.IRN, T.EGY, T.ITA] },
  { name: "L", teams: [T.MAR, T.SUI, T.UZB, T.ECU] },
];

// Stadiums
const STAD = {
  SOFI: { name: "SoFi Stadium", city: "Los Angeles", country: "USA" },
  METLIFE: { name: "MetLife Stadium", city: "East Rutherford, NJ", country: "USA" },
  ATT: { name: "AT&T Stadium", city: "Dallas", country: "USA" },
  MERC: { name: "Mercedes-Benz Stadium", city: "Atlanta", country: "USA" },
  GIL: { name: "Gillette Stadium", city: "Boston", country: "USA" },
  NRG: { name: "NRG Stadium", city: "Houston", country: "USA" },
  LEVI: { name: "Levi's Stadium", city: "San Francisco Bay Area", country: "USA" },
  LINC: { name: "Lincoln Financial Field", city: "Philadelphia", country: "USA" },
  ARR: { name: "Arrowhead Stadium", city: "Kansas City", country: "USA" },
  BC: { name: "BC Place", city: "Vancouver", country: "Canada" },
  BMO: { name: "BMO Field", city: "Toronto", country: "Canada" },
  AZT: { name: "Estadio Azteca", city: "Mexico City", country: "Mexico" },
  BBVA: { name: "Estadio BBVA", city: "Monterrey", country: "Mexico" },
  AKR: { name: "Estadio Akron", city: "Guadalajara", country: "Mexico" },
};

export const venues = [
  { ...STAD.SOFI, capacity: 70240, flag: "🇺🇸" },
  { ...STAD.METLIFE, capacity: 82500, flag: "🇺🇸" },
  { ...STAD.ATT, capacity: 80000, flag: "🇺🇸" },
  { ...STAD.MERC, capacity: 71000, flag: "🇺🇸" },
  { ...STAD.GIL, capacity: 65878, flag: "🇺🇸" },
  { ...STAD.NRG, capacity: 72220, flag: "🇺🇸" },
  { ...STAD.LEVI, capacity: 68500, flag: "🇺🇸" },
  { ...STAD.LINC, capacity: 69796, flag: "🇺🇸" },
  { ...STAD.ARR, capacity: 76416, flag: "🇺🇸" },
  { ...STAD.BC, capacity: 54500, flag: "🇨🇦" },
  { ...STAD.BMO, capacity: 45000, flag: "🇨🇦" },
  { ...STAD.AZT, capacity: 87000, flag: "🇲🇽" },
  { ...STAD.BBVA, capacity: 53500, flag: "🇲🇽" },
  { ...STAD.AKR, capacity: 49850, flag: "🇲🇽" },
];

// Helper to create match. ET is UTC-4 in summer. So ET hour → UTC = hour + 4.
// We pass ET local datetime, produce UTC ISO.
function et(dateStr: string, hourET: number, minET: number = 0): string {
  // dateStr "YYYY-MM-DD"
  const [y, m, d] = dateStr.split("-").map(Number);
  // UTC = ET + 4h
  return new Date(Date.UTC(y, m - 1, d, hourET + 4, minET)).toISOString();
}

let idc = 0;
const mk = (
  dateET: string,
  hourET: number,
  home: Team,
  away: Team,
  group: string | undefined,
  stage: Stage,
  stadium: { name: string; city: string; country: string },
): Match => ({
  id: `m${++idc}`,
  utcKickoff: et(dateET, hourET),
  date: dateET,
  group,
  stage,
  home,
  away,
  stadium: stadium.name,
  city: stadium.city,
  country: stadium.country,
});

// Generate group-stage matches for all 12 groups (6 matches each = 72)
// Pattern: 1v2, 3v4, 1v3, 2v4, 1v4, 2v3 spread across the group window
function generateGroupMatches(): Match[] {
  const ms: Match[] = [];
  const pairings: [number, number][] = [
    [0, 1], [2, 3], [0, 2], [1, 3], [0, 3], [1, 2],
  ];
  // Spread group games across Jun 11–27
  const startDay = 11; // June
  groups.forEach((g, gi) => {
    const stadiums = [STAD.SOFI, STAD.METLIFE, STAD.ATT, STAD.AZT, STAD.BC, STAD.MERC, STAD.NRG, STAD.LEVI, STAD.LINC, STAD.ARR, STAD.BMO, STAD.BBVA, STAD.AKR, STAD.GIL];
    pairings.forEach((p, pi) => {
      const dayOffset = (gi % 3) + pi * 2; // 0..12
      const day = startDay + dayOffset;
      const dateET = `2026-06-${String(Math.min(day, 27)).padStart(2, "0")}`;
      const hours = [12, 15, 18, 21];
      const hour = hours[(gi + pi) % hours.length];
      const stadium = stadiums[(gi + pi) % stadiums.length];
      ms.push(mk(dateET, hour, g.teams[p[0]], g.teams[p[1]], g.name, "Group Stage", stadium));
    });
  });
  return ms;
}

function generateKnockouts(): Match[] {
  const ms: Match[] = [];
  const stadiums = [STAD.SOFI, STAD.METLIFE, STAD.ATT, STAD.MERC, STAD.NRG, STAD.LEVI, STAD.LINC, STAD.ARR, STAD.BC, STAD.BMO, STAD.AZT, STAD.BBVA, STAD.AKR, STAD.GIL];

  const placeholder = (label: string): Team => ({ name: label, flag: "🏳️", code: label });

  // Round of 32: 16 matches, Jun 28 – Jul 3
  for (let i = 0; i < 16; i++) {
    const day = 28 + Math.floor(i / 3);
    const month = day > 30 ? 7 : 6;
    const realDay = day > 30 ? day - 30 : day;
    const dateET = `2026-${String(month).padStart(2, "0")}-${String(realDay).padStart(2, "0")}`;
    const hour = [12, 15, 18, 21][i % 4];
    ms.push(mk(dateET, hour, placeholder(`R32 Winner ${i * 2 + 1}`), placeholder(`R32 Winner ${i * 2 + 2}`), undefined, "Round of 32", stadiums[i % stadiums.length]));
  }
  // Round of 16: 8 matches Jul 4–7
  for (let i = 0; i < 8; i++) {
    const day = 4 + Math.floor(i / 2);
    const dateET = `2026-07-${String(day).padStart(2, "0")}`;
    const hour = [13, 17][i % 2];
    ms.push(mk(dateET, hour, placeholder(`R16 W${i * 2 + 1}`), placeholder(`R16 W${i * 2 + 2}`), undefined, "Round of 16", stadiums[i % stadiums.length]));
  }
  // QF: 4 matches Jul 10–11
  for (let i = 0; i < 4; i++) {
    const day = 10 + Math.floor(i / 2);
    const dateET = `2026-07-${String(day).padStart(2, "0")}`;
    const hour = [14, 18][i % 2];
    ms.push(mk(dateET, hour, placeholder(`QF W${i * 2 + 1}`), placeholder(`QF W${i * 2 + 2}`), undefined, "Quarterfinal", stadiums[i % stadiums.length]));
  }
  // SF: 2 matches Jul 15–16
  ms.push(mk("2026-07-15", 15, placeholder("QF1 W"), placeholder("QF2 W"), undefined, "Semifinal", STAD.ATT));
  ms.push(mk("2026-07-16", 15, placeholder("QF3 W"), placeholder("QF4 W"), undefined, "Semifinal", STAD.MERC));
  // 3rd place Jul 18
  ms.push(mk("2026-07-18", 15, placeholder("SF1 L"), placeholder("SF2 L"), undefined, "Third Place", STAD.NRG));
  // Final Jul 19
  ms.push(mk("2026-07-19", 18, placeholder("SF1 W"), placeholder("SF2 W"), undefined, "Final", STAD.METLIFE));

  return ms;
}

// Build matches, override known fixtures
const baseGroup = generateGroupMatches();
const knockouts = generateKnockouts();

// Known specific fixtures – replace where pairings match
const knownOverrides: { date: string; hour: number; home: Team; away: Team; stadium: { name: string; city: string; country: string } }[] = [
  { date: "2026-06-11", hour: 15, home: T.MEX, away: T.RSA, stadium: STAD.AZT },
  { date: "2026-06-11", hour: 22, home: T.KOR, away: T.CZE, stadium: STAD.SOFI },
  { date: "2026-06-12", hour: 15, home: T.CAN, away: T.BIH, stadium: STAD.BMO },
  { date: "2026-06-12", hour: 21, home: T.USA, away: T.PAR, stadium: STAD.SOFI },
  { date: "2026-06-13", hour: 15, home: T.QAT, away: T.SUI, stadium: STAD.METLIFE },
  { date: "2026-06-13", hour: 18, home: T.BRA, away: T.MAR, stadium: STAD.MERC },
  { date: "2026-06-13", hour: 21, home: T.HAI, away: T.SCO, stadium: STAD.ATT },
  { date: "2026-06-15", hour: 12, home: T.ESP, away: T.CPV, stadium: STAD.NRG },
  { date: "2026-06-15", hour: 18, home: T.BEL, away: T.EGY, stadium: STAD.LEVI },
  { date: "2026-06-15", hour: 21, home: T.KSA, away: T.URU, stadium: STAD.LINC },
];

function overrideMatch(target: typeof knownOverrides[number]): Match {
  return {
    id: `kn-${target.home.code}-${target.away.code}`,
    utcKickoff: et(target.date, target.hour),
    date: target.date,
    group: groups.find(g => g.teams.includes(target.home) && g.teams.includes(target.away))?.name,
    stage: "Group Stage",
    home: target.home,
    away: target.away,
    stadium: target.stadium.name,
    city: target.stadium.city,
    country: target.stadium.country,
  };
}

// Remove from baseGroup any matches duplicating known pairs, then append known
const knownPairs = new Set(knownOverrides.map(k => `${k.home.code}-${k.away.code}`).flatMap(p => [p, p.split("-").reverse().join("-")]));
const filteredBase = baseGroup.filter(m => !knownPairs.has(`${m.home.code}-${m.away.code}`));
const knownMatches = knownOverrides.map(overrideMatch);

export const matches: Match[] = [...filteredBase, ...knownMatches, ...knockouts]
  .sort((a, b) => a.utcKickoff.localeCompare(b.utcKickoff));

export const HOST_COUNTRIES = [
  { name: "USA", flag: "🇺🇸" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Mexico", flag: "🇲🇽" },
];

export const TOURNAMENT_START_UTC = new Date(Date.UTC(2026, 5, 11, 19, 0)).toISOString(); // ~3pm ET
