export interface Team {
  name: string;
  flag: string;
  code: string;
}

export type Stage =
  | "Group Stage"
  | "Round of 32"
  | "Round of 16"
  | "Quarterfinal"
  | "Semifinal"
  | "Third Place"
  | "Final";

export interface Match {
  id: string;
  date: string;
  utcKickoff: string;
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

// ── Teams ────────────────────────────────────────────────────────────────────
const T = {
  MEX: { name: "Mexico",               flag: "🇲🇽", code: "MEX" },
  KOR: { name: "South Korea",          flag: "🇰🇷", code: "KOR" },
  RSA: { name: "South Africa",         flag: "🇿🇦", code: "RSA" },
  CZE: { name: "Czechia",              flag: "🇨🇿", code: "CZE" },
  CAN: { name: "Canada",               flag: "🇨🇦", code: "CAN" },
  SUI: { name: "Switzerland",          flag: "🇨🇭", code: "SUI" },
  QAT: { name: "Qatar",                flag: "🇶🇦", code: "QAT" },
  BIH: { name: "Bosnia & Herz.",       flag: "🇧🇦", code: "BIH" },
  BRA: { name: "Brazil",               flag: "🇧🇷", code: "BRA" },
  MAR: { name: "Morocco",              flag: "🇲🇦", code: "MAR" },
  SCO: { name: "Scotland",             flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", code: "SCO" },
  HAI: { name: "Haiti",                flag: "🇭🇹", code: "HAI" },
  USA: { name: "USA",                  flag: "🇺🇸", code: "USA" },
  AUS: { name: "Australia",            flag: "🇦🇺", code: "AUS" },
  PAR: { name: "Paraguay",             flag: "🇵🇾", code: "PAR" },
  TUR: { name: "Türkiye",              flag: "🇹🇷", code: "TUR" },
  GER: { name: "Germany",              flag: "🇩🇪", code: "GER" },
  ECU: { name: "Ecuador",              flag: "🇪🇨", code: "ECU" },
  CIV: { name: "Ivory Coast",          flag: "🇨🇮", code: "CIV" },
  CUW: { name: "Curaçao",              flag: "🇨🇼", code: "CUW" },
  NED: { name: "Netherlands",          flag: "🇳🇱", code: "NED" },
  JPN: { name: "Japan",                flag: "🇯🇵", code: "JPN" },
  TUN: { name: "Tunisia",              flag: "🇹🇳", code: "TUN" },
  UKR: { name: "Ukraine",              flag: "🇺🇦", code: "UKR" },
  BEL: { name: "Belgium",              flag: "🇧🇪", code: "BEL" },
  IRN: { name: "Iran",                 flag: "🇮🇷", code: "IRN" },
  EGY: { name: "Egypt",                flag: "🇪🇬", code: "EGY" },
  NZL: { name: "New Zealand",          flag: "🇳🇿", code: "NZL" },
  ESP: { name: "Spain",                flag: "🇪🇸", code: "ESP" },
  URU: { name: "Uruguay",              flag: "🇺🇾", code: "URU" },
  KSA: { name: "Saudi Arabia",         flag: "🇸🇦", code: "KSA" },
  CPV: { name: "Cape Verde",           flag: "🇨🇻", code: "CPV" },
  FRA: { name: "France",               flag: "🇫🇷", code: "FRA" },
  SEN: { name: "Senegal",              flag: "🇸🇳", code: "SEN" },
  NOR: { name: "Norway",               flag: "🇳🇴", code: "NOR" },
  IRQ: { name: "Iraq",                 flag: "🇮🇶", code: "IRQ" },
  ARG: { name: "Argentina",            flag: "🇦🇷", code: "ARG" },
  AUT: { name: "Austria",              flag: "🇦🇹", code: "AUT" },
  ALG: { name: "Algeria",              flag: "🇩🇿", code: "ALG" },
  JOR: { name: "Jordan",               flag: "🇯🇴", code: "JOR" },
  POR: { name: "Portugal",             flag: "🇵🇹", code: "POR" },
  COL: { name: "Colombia",             flag: "🇨🇴", code: "COL" },
  UZB: { name: "Uzbekistan",           flag: "🇺🇿", code: "UZB" },
  COD: { name: "DR Congo",             flag: "🇨🇩", code: "COD" },
  ENG: { name: "England",              flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "ENG" },
  CRO: { name: "Croatia",              flag: "🇭🇷", code: "CRO" },
  PAN: { name: "Panama",               flag: "🇵🇦", code: "PAN" },
  GHA: { name: "Ghana",                flag: "🇬🇭", code: "GHA" },
} as const;

// ── Correct Groups ───────────────────────────────────────────────────────────
export const groups: Group[] = [
  { name: "A", teams: [T.MEX, T.KOR, T.RSA, T.CZE] },
  { name: "B", teams: [T.CAN, T.SUI, T.QAT, T.BIH] },
  { name: "C", teams: [T.BRA, T.MAR, T.SCO, T.HAI] },
  { name: "D", teams: [T.USA, T.AUS, T.PAR, T.TUR] },
  { name: "E", teams: [T.GER, T.ECU, T.CIV, T.CUW] },
  { name: "F", teams: [T.NED, T.JPN, T.TUN, T.UKR] },
  { name: "G", teams: [T.BEL, T.IRN, T.EGY, T.NZL] },
  { name: "H", teams: [T.ESP, T.URU, T.KSA, T.CPV] },
  { name: "I", teams: [T.FRA, T.SEN, T.NOR, T.IRQ] },
  { name: "J", teams: [T.ARG, T.AUT, T.ALG, T.JOR] },
  { name: "K", teams: [T.POR, T.COL, T.UZB, T.COD] },
  { name: "L", teams: [T.ENG, T.CRO, T.PAN, T.GHA] },
];

// ── Venues ───────────────────────────────────────────────────────────────────
export const venues = [
  { name: "Los Angeles Stadium",           city: "Los Angeles",      country: "USA",    capacity: 70240, flag: "🇺🇸" },
  { name: "New York New Jersey Stadium",   city: "East Rutherford",  country: "USA",    capacity: 82500, flag: "🇺🇸" },
  { name: "Dallas Stadium",               city: "Dallas",           country: "USA",    capacity: 80000, flag: "🇺🇸" },
  { name: "Atlanta Stadium",              city: "Atlanta",          country: "USA",    capacity: 71000, flag: "🇺🇸" },
  { name: "Boston Stadium",               city: "Boston",           country: "USA",    capacity: 65878, flag: "🇺🇸" },
  { name: "Houston Stadium",              city: "Houston",          country: "USA",    capacity: 72220, flag: "🇺🇸" },
  { name: "San Francisco Bay Area Stadium",city: "San Francisco",   country: "USA",    capacity: 68500, flag: "🇺🇸" },
  { name: "Philadelphia Stadium",         city: "Philadelphia",     country: "USA",    capacity: 69796, flag: "🇺🇸" },
  { name: "Kansas City Stadium",          city: "Kansas City",      country: "USA",    capacity: 76416, flag: "🇺🇸" },
  { name: "Seattle Stadium",              city: "Seattle",          country: "USA",    capacity: 68740, flag: "🇺🇸" },
  { name: "Miami Stadium",                city: "Miami",            country: "USA",    capacity: 64767, flag: "🇺🇸" },
  { name: "BC Place",                     city: "Vancouver",        country: "Canada", capacity: 54500, flag: "🇨🇦" },
  { name: "Toronto Stadium",              city: "Toronto",          country: "Canada", capacity: 45000, flag: "🇨🇦" },
  { name: "Mexico City Stadium",          city: "Mexico City",      country: "Mexico", capacity: 87000, flag: "🇲🇽" },
  { name: "Estadio Guadalajara",          city: "Zapopan",          country: "Mexico", capacity: 49850, flag: "🇲🇽" },
  { name: "Estadio Monterrey",            city: "Guadalupe",        country: "Mexico", capacity: 53500, flag: "🇲🇽" },
];

// ── UTC helper (ET = UTC-4 in summer) ────────────────────────────────────────
function etToUtc(dateStr: string, hourET: number, minET = 0): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, hourET + 4, minET)).toISOString();
}

let _id = 0;
function mk(
  dateET: string,
  hourET: number,
  home: Team,
  away: Team,
  group: string | undefined,
  stage: Stage,
  stadium: string,
  city: string,
  country: string,
): Match {
  return {
    id: `m${++_id}`,
    utcKickoff: etToUtc(dateET, hourET),
    date: dateET,
    group,
    stage,
    home,
    away,
    stadium,
    city,
    country,
  };
}

const GS: Stage = "Group Stage";

// ── Verified Group Stage Fixtures (all 72 matches) ───────────────────────────
// Source: FIFA / Al Jazeera official schedule. Times in ET (UTC-4).
// TBD teams = playoff qualifier spots not confirmed at draw time.
const TBD: Team = { name: "TBD", flag: "🏳️", code: "TBD" };

const groupMatches: Match[] = [
  // ── June 11 ──
  mk("2026-06-11", 15, T.MEX, T.RSA,  "A", GS, "Mexico City Stadium",          "Mexico City",  "Mexico"),
  mk("2026-06-11", 22, T.KOR, TBD,    "A", GS, "Estadio Guadalajara",           "Zapopan",      "Mexico"),

  // ── June 12 ──
  mk("2026-06-12", 15, T.CAN, TBD,    "B", GS, "Toronto Stadium",               "Toronto",      "Canada"),
  mk("2026-06-12", 21, T.USA, T.PAR,  "D", GS, "Los Angeles Stadium",           "Los Angeles",  "USA"),

  // ── June 13 ──
  mk("2026-06-13", 15, T.QAT, T.SUI,  "B", GS, "San Francisco Bay Area Stadium","San Francisco","USA"),
  mk("2026-06-13", 18, T.BRA, T.MAR,  "C", GS, "New York New Jersey Stadium",   "East Rutherford","USA"),
  mk("2026-06-13", 21, T.HAI, T.SCO,  "C", GS, "Boston Stadium",                "Boston",       "USA"),
  mk("2026-06-14",  0, T.AUS, TBD,    "D", GS, "BC Place",                      "Vancouver",    "Canada"),

  // ── June 14 ──
  mk("2026-06-14", 13, T.GER, T.CUW,  "E", GS, "Houston Stadium",               "Houston",      "USA"),
  mk("2026-06-14", 16, T.NED, T.JPN,  "F", GS, "Dallas Stadium",                "Dallas",       "USA"),
  mk("2026-06-14", 19, T.CIV, T.ECU,  "E", GS, "Philadelphia Stadium",          "Philadelphia", "USA"),
  mk("2026-06-14", 22, TBD,   T.TUN,  "F", GS, "Estadio Monterrey",             "Guadalupe",    "Mexico"),

  // ── June 15 ──
  mk("2026-06-15", 12, T.ESP, T.CPV,  "H", GS, "Atlanta Stadium",               "Atlanta",      "USA"),
  mk("2026-06-15", 15, T.BEL, T.EGY,  "G", GS, "BC Place",                      "Vancouver",    "Canada"),
  mk("2026-06-15", 18, T.KSA, T.URU,  "H", GS, "Miami Stadium",                 "Miami",        "USA"),
  mk("2026-06-15", 21, T.IRN, T.NZL,  "G", GS, "Los Angeles Stadium",           "Los Angeles",  "USA"),

  // ── June 16 ──
  mk("2026-06-16", 15, T.FRA, T.SEN,  "I", GS, "New York New Jersey Stadium",   "East Rutherford","USA"),
  mk("2026-06-16", 18, TBD,   T.NOR,  "I", GS, "Boston Stadium",                "Boston",       "USA"),
  mk("2026-06-16", 21, T.ARG, T.ALG,  "J", GS, "Kansas City Stadium",           "Kansas City",  "USA"),
  mk("2026-06-17",  0, T.AUT, T.JOR,  "J", GS, "San Francisco Bay Area Stadium","San Francisco","USA"),

  // ── June 17 ──
  mk("2026-06-17", 13, T.POR, TBD,    "K", GS, "Houston Stadium",               "Houston",      "USA"),
  mk("2026-06-17", 16, T.ENG, T.CRO,  "L", GS, "Dallas Stadium",                "Dallas",       "USA"),
  mk("2026-06-17", 19, T.GHA, T.PAN,  "L", GS, "Toronto Stadium",               "Toronto",      "Canada"),
  mk("2026-06-17", 22, T.UZB, T.COL,  "K", GS, "Mexico City Stadium",           "Mexico City",  "Mexico"),

  // ── June 18 ──
  mk("2026-06-18", 12, TBD,   T.RSA,  "A", GS, "Atlanta Stadium",               "Atlanta",      "USA"),
  mk("2026-06-18", 15, T.SUI, TBD,    "B", GS, "Los Angeles Stadium",           "Los Angeles",  "USA"),
  mk("2026-06-18", 18, T.CAN, T.QAT,  "B", GS, "BC Place",                      "Vancouver",    "Canada"),
  mk("2026-06-18", 21, T.MEX, T.KOR,  "A", GS, "Estadio Guadalajara",           "Zapopan",      "Mexico"),

  // ── June 19 ──
  mk("2026-06-19", 15, T.USA, T.AUS,  "D", GS, "Seattle Stadium",               "Seattle",      "USA"),
  mk("2026-06-19", 18, T.SCO, T.MAR,  "C", GS, "Boston Stadium",                "Boston",       "USA"),
  mk("2026-06-19", 21, T.BRA, T.HAI,  "C", GS, "Philadelphia Stadium",          "Philadelphia", "USA"),
  mk("2026-06-20",  0, TBD,   T.PAR,  "D", GS, "San Francisco Bay Area Stadium","San Francisco","USA"),

  // ── June 20 ──
  mk("2026-06-20", 13, T.NED, TBD,    "F", GS, "Houston Stadium",               "Houston",      "USA"),
  mk("2026-06-20", 16, T.GER, T.CIV,  "E", GS, "Toronto Stadium",               "Toronto",      "Canada"),
  mk("2026-06-20", 20, T.ECU, T.CUW,  "E", GS, "Kansas City Stadium",           "Kansas City",  "USA"),
  mk("2026-06-21",  0, T.TUN, T.JPN,  "F", GS, "Estadio Monterrey",             "Guadalupe",    "Mexico"),

  // ── June 21 ──
  mk("2026-06-21", 12, T.ESP, T.KSA,  "H", GS, "Atlanta Stadium",               "Atlanta",      "USA"),
  mk("2026-06-21", 15, T.BEL, T.IRN,  "G", GS, "Los Angeles Stadium",           "Los Angeles",  "USA"),
  mk("2026-06-21", 18, T.URU, T.CPV,  "H", GS, "Miami Stadium",                 "Miami",        "USA"),
  mk("2026-06-21", 21, T.NZL, T.EGY,  "G", GS, "BC Place",                      "Vancouver",    "Canada"),

  // ── June 22 ──
  mk("2026-06-22", 13, T.ARG, T.AUT,  "J", GS, "Dallas Stadium",                "Dallas",       "USA"),
  mk("2026-06-22", 17, T.FRA, TBD,    "I", GS, "Philadelphia Stadium",          "Philadelphia", "USA"),
  mk("2026-06-22", 20, T.NOR, T.SEN,  "I", GS, "New York New Jersey Stadium",   "East Rutherford","USA"),
  mk("2026-06-22", 23, T.JOR, T.ALG,  "J", GS, "San Francisco Bay Area Stadium","San Francisco","USA"),

  // ── June 23 ──
  mk("2026-06-23", 13, T.POR, T.UZB,  "K", GS, "Houston Stadium",               "Houston",      "USA"),
  mk("2026-06-23", 16, T.ENG, T.GHA,  "L", GS, "Boston Stadium",                "Boston",       "USA"),
  mk("2026-06-23", 19, T.PAN, T.CRO,  "L", GS, "Toronto Stadium",               "Toronto",      "Canada"),
  mk("2026-06-23", 22, T.COL, TBD,    "K", GS, "Estadio Guadalajara",           "Zapopan",      "Mexico"),

  // ── June 24 (final matchday Groups A-C simultaneous pairs) ──
  mk("2026-06-24", 15, T.SUI, T.CAN,  "B", GS, "BC Place",                      "Vancouver",    "Canada"),
  mk("2026-06-24", 15, TBD,   T.QAT,  "B", GS, "Seattle Stadium",               "Seattle",      "USA"),
  mk("2026-06-24", 18, T.SCO, T.BRA,  "C", GS, "Miami Stadium",                 "Miami",        "USA"),
  mk("2026-06-24", 18, T.MAR, T.HAI,  "C", GS, "Atlanta Stadium",               "Atlanta",      "USA"),
  mk("2026-06-24", 21, TBD,   T.MEX,  "A", GS, "Mexico City Stadium",           "Mexico City",  "Mexico"),
  mk("2026-06-24", 21, T.RSA, T.KOR,  "A", GS, "Estadio Monterrey",             "Guadalupe",    "Mexico"),

  // ── June 25 (final matchday Groups D-F simultaneous pairs) ──
  mk("2026-06-25", 16, T.ECU, T.GER,  "E", GS, "New York New Jersey Stadium",   "East Rutherford","USA"),
  mk("2026-06-25", 16, T.CUW, T.CIV,  "E", GS, "Philadelphia Stadium",          "Philadelphia", "USA"),
  mk("2026-06-25", 19, T.JPN, TBD,    "F", GS, "Dallas Stadium",                "Dallas",       "USA"),
  mk("2026-06-25", 19, T.TUN, T.NED,  "F", GS, "Kansas City Stadium",           "Kansas City",  "USA"),
  mk("2026-06-25", 22, TBD,   T.USA,  "D", GS, "Los Angeles Stadium",           "Los Angeles",  "USA"),
  mk("2026-06-25", 22, T.PAR, T.AUS,  "D", GS, "San Francisco Bay Area Stadium","San Francisco","USA"),

  // ── June 26 (final matchday Groups G-I simultaneous pairs) ──
  mk("2026-06-26", 15, T.NOR, T.FRA,  "I", GS, "Boston Stadium",                "Boston",       "USA"),
  mk("2026-06-26", 15, T.SEN, TBD,    "I", GS, "Toronto Stadium",               "Toronto",      "Canada"),
  mk("2026-06-26", 20, T.CPV, T.KSA,  "H", GS, "Houston Stadium",               "Houston",      "USA"),
  mk("2026-06-26", 20, T.URU, T.ESP,  "H", GS, "Estadio Guadalajara",           "Zapopan",      "Mexico"),
  mk("2026-06-26", 23, T.EGY, T.IRN,  "G", GS, "Seattle Stadium",               "Seattle",      "USA"),
  mk("2026-06-26", 23, T.NZL, T.BEL,  "G", GS, "BC Place",                      "Vancouver",    "Canada"),

  // ── June 27 (final matchday Groups J-L simultaneous pairs) ──
  mk("2026-06-27", 17, T.PAN, T.ENG,  "L", GS, "New York New Jersey Stadium",   "East Rutherford","USA"),
  mk("2026-06-27", 17, T.CRO, T.GHA,  "L", GS, "Philadelphia Stadium",          "Philadelphia", "USA"),
  mk("2026-06-27", 19, T.COL, T.POR,  "K", GS, "Miami Stadium",                 "Miami",        "USA"),
  mk("2026-06-27", 19, TBD,   T.UZB,  "K", GS, "Atlanta Stadium",               "Atlanta",      "USA"),
  mk("2026-06-27", 22, T.ALG, T.AUT,  "J", GS, "Kansas City Stadium",           "Kansas City",  "USA"),
  mk("2026-06-27", 22, T.JOR, T.ARG,  "J", GS, "Dallas Stadium",                "Dallas",       "USA"),
];

// ── Knockout Stage (placeholder teams) ───────────────────────────────────────
const ph = (label: string): Team => ({ name: label, flag: "🏳️", code: label });

function knockoutMatch(
  dateET: string,
  hourET: number,
  home: string,
  away: string,
  stage: Stage,
  stadium: string,
  city: string,
  country: string,
): Match {
  return mk(dateET, hourET, ph(home), ph(away), undefined, stage, stadium, city, country);
}

const knockoutMatches: Match[] = [
  // Round of 32 – Jun 28 to Jul 3
  knockoutMatch("2026-06-28", 15, "R32-1", "R32-2",   "Round of 32", "Los Angeles Stadium",            "Los Angeles",    "USA"),
  knockoutMatch("2026-06-29", 13, "R32-3", "R32-4",   "Round of 32", "Houston Stadium",                "Houston",        "USA"),
  knockoutMatch("2026-06-29", 16, "R32-5", "R32-6",   "Round of 32", "Boston Stadium",                 "Boston",         "USA"),
  knockoutMatch("2026-06-29", 21, "R32-7", "R32-8",   "Round of 32", "Estadio Monterrey",              "Guadalupe",      "Mexico"),
  knockoutMatch("2026-06-30", 13, "R32-9", "R32-10",  "Round of 32", "Dallas Stadium",                 "Dallas",         "USA"),
  knockoutMatch("2026-06-30", 17, "R32-11","R32-12",  "Round of 32", "New York New Jersey Stadium",    "East Rutherford","USA"),
  knockoutMatch("2026-06-30", 21, "R32-13","R32-14",  "Round of 32", "Mexico City Stadium",            "Mexico City",    "Mexico"),
  knockoutMatch("2026-07-01", 12, "R32-15","R32-16",  "Round of 32", "Atlanta Stadium",                "Atlanta",        "USA"),
  knockoutMatch("2026-07-01", 16, "R32-17","R32-18",  "Round of 32", "Kansas City Stadium",            "Kansas City",    "USA"),
  knockoutMatch("2026-07-01", 20, "R32-19","R32-20",  "Round of 32", "San Francisco Bay Area Stadium", "San Francisco",  "USA"),
  knockoutMatch("2026-07-02", 15, "R32-21","R32-22",  "Round of 32", "Los Angeles Stadium",            "Los Angeles",    "USA"),
  knockoutMatch("2026-07-02", 19, "R32-23","R32-24",  "Round of 32", "Toronto Stadium",                "Toronto",        "Canada"),
  knockoutMatch("2026-07-02", 23, "R32-25","R32-26",  "Round of 32", "BC Place",                       "Vancouver",      "Canada"),
  knockoutMatch("2026-07-03", 14, "R32-27","R32-28",  "Round of 32", "Dallas Stadium",                 "Dallas",         "USA"),
  knockoutMatch("2026-07-03", 18, "R32-29","R32-30",  "Round of 32", "Miami Stadium",                  "Miami",          "USA"),
  knockoutMatch("2026-07-03", 21, "R32-31","R32-32",  "Round of 32", "Kansas City Stadium",            "Kansas City",    "USA"),

  // Round of 16 – Jul 4–7
  knockoutMatch("2026-07-04", 13, "R16-W1","R16-W2",  "Round of 16", "Houston Stadium",                "Houston",        "USA"),
  knockoutMatch("2026-07-04", 17, "R16-W3","R16-W4",  "Round of 16", "Seattle Stadium",                "Seattle",        "USA"),
  knockoutMatch("2026-07-05", 13, "R16-W5","R16-W6",  "Round of 16", "New York New Jersey Stadium",    "East Rutherford","USA"),
  knockoutMatch("2026-07-05", 17, "R16-W7","R16-W8",  "Round of 16", "Philadelphia Stadium",           "Philadelphia",   "USA"),
  knockoutMatch("2026-07-06", 13, "R16-W9","R16-W10", "Round of 16", "Boston Stadium",                 "Boston",         "USA"),
  knockoutMatch("2026-07-06", 17, "R16-W11","R16-W12","Round of 16", "Los Angeles Stadium",            "Los Angeles",    "USA"),
  knockoutMatch("2026-07-07", 13, "R16-W13","R16-W14","Round of 16", "Atlanta Stadium",                "Atlanta",        "USA"),
  knockoutMatch("2026-07-07", 17, "R16-W15","R16-W16","Round of 16", "Dallas Stadium",                 "Dallas",         "USA"),

  // Quarterfinals – Jul 9–11
  knockoutMatch("2026-07-09", 14, "QF-W1","QF-W2",    "Quarterfinal","Houston Stadium",                "Houston",        "USA"),
  knockoutMatch("2026-07-09", 18, "QF-W3","QF-W4",    "Quarterfinal","Los Angeles Stadium",            "Los Angeles",    "USA"),
  knockoutMatch("2026-07-10", 14, "QF-W5","QF-W6",    "Quarterfinal","Kansas City Stadium",            "Kansas City",    "USA"),
  knockoutMatch("2026-07-11", 15, "QF-W7","QF-W8",    "Quarterfinal","Atlanta Stadium",                "Atlanta",        "USA"),

  // Semifinals – Jul 14–15
  knockoutMatch("2026-07-14", 15,