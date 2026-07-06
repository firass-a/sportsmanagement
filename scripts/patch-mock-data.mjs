import fs from "fs";

const path = "src/lib/national/modules/mock-data.ts";
let s = fs.readFileSync(path, "utf8");

const allNames = [...s.matchAll(/name: "([^"]+)"/g)].map((m) => m[1]);
const get = (n) => allNames.find((x) => x === n) ?? n;

const start = s.indexOf("export const tournamentsList = [");
const end = s.indexOf("export const trainingCampsStats = [");
if (start === -1 || end === -1) process.exit(1);

const block = s.slice(start, end);
const rowLines = block.split("\n").filter((l) => l.trim().startsWith("{ name:"));
const [t1, t2, t3] = rowLines.map((l) => l.match(/name: "([^"]+)"/)?.[1] ?? "");
const tpl = rowLines[0];

const mkRow = (name, level, clubs, athletes, registration, date, status) =>
  tpl
    .replace(/name: "[^"]+"/, `name: "${name}"`)
    .replace(/level: "[^"]+"/, `level: "${level}"`)
    .replace(/clubs: \d+/, `clubs: ${clubs}`)
    .replace(/athletes: \d+/, `athletes: ${athletes}`)
    .replace(/registration: "[^"]+"/, `registration: "${registration}"`)
    .replace(/date: "[^"]+"/, `date: "${date}"`)
    .replace(/\},?\s*$/, `, status: "${status}" },`);

const judoSport = t1.split("لل").pop() ?? "الجودo";
const karateSport = t2.split("لل").pop() ?? "الكاراتieh";

const tournamentsList = `export const tournamentsList = [
${mkRow(t1, "وطنية", 48, 620, "مفتoح", "18/10/2026", "جارية")}
${mkRow(t2, "ولائية", 22, 286, "مفتoح", "25/10/2026", "قadمة")}
${mkRow(t3, "ولائية", 18, 198, "مغلق", "02/11/2026", "قadمة")}
${mkRow("البطولة الوطنية للسباحة", "وطنية", 32, 410, "مغلق", "15/06/2026", "منتهية")}
${mkRow(`كأس الجزائر — ${judoSport}`, "وطنية", 36, 480, "مغلق", "20/05/2026", "منتهية")}
${mkRow(`بطولة شمال أفريقia — ${karateSport}`, "دولية", 12, 96, "مفتoح", "12/12/2026", "قadمة")}
];`;

const coach1 = get("كريم بوعزة");
const coach2 = get("نadية كrim");
const coach3 = get("سمir بوzian");
const athlete1 = get("أحمد بن صالح");
const athlete2 = get("سارة مzali");
const athlete3 = get("فاطمة زhrawi");
const athlete4 = get("محمد أمين");
const yasin = get("يasen مرابط");
const yusuf = get("يوسf حmdi");
const laila = get("ليلى حمدi");

const extra = `export const tournamentRegistrations = [
  { tournament: "${t1}", club: "نادي أضواء الرياضة", athletes: 18, coach: "${coach1}", submitted: "28/06/2026", deadline: "15/09/2026", status: "معتمد" },
  { tournament: "${t1}", club: "نادي النجوم", athletes: 14, coach: "${coach2}", submitted: "30/06/2026", deadline: "15/09/2026", status: "قيد المراجعة" },
  { tournament: "${t2}", club: "نادي الشباب", athletes: 12, coach: "${coach3}", submitted: "01/07/2026", deadline: "20/09/2026", status: "معتمد" },
  { tournament: "${t2}", club: "نادي الاتحاد", athletes: 9, coach: "${yasin}", submitted: "03/07/2026", deadline: "20/09/2026", status: "ينقص وثائق" },
  { tournament: "بطولة شمال أفريقia — ${karateSport}", club: "نادي الفتح", athletes: 6, coach: "${laila}", submitted: "05/07/2026", deadline: "01/11/2026", status: "قيد المراجعة" },
];

export const tournamentDraws = [
  { tournament: "${t1}", pool: "المجموعة أ — تحت 73 كغ", participants: 8, date: "15/10/2026", status: "تمت القرعة" },
  { tournament: "${t1}", pool: "المجموعة ب — تحت 81 كغ", participants: 8, date: "15/10/2026", status: "تمت القرعة" },
  { tournament: "${t2}", pool: "الدور التمهيدي", participants: 16, date: "20/10/2026", status: "قيد الإعداد" },
  { tournament: "${t3}", pool: "ربع النهائي", participants: 8, date: "28/10/2026", status: "لم تُجرَ بعد" },
];

export const tournamentResults = [
  { tournament: "البطولة الوطنية للسباحة", category: "100م حرة — رجال", first: "${athlete1}", second: "${coach1}", third: "${yusuf}", date: "15/06/2026" },
  { tournament: "البطولة الوطنية للسباحة", category: "200م حرة — سيدات", first: "${athlete2}", second: "${athlete3}", third: "${coach2}", date: "15/06/2026" },
  { tournament: "كأس الجزائر — ${judoSport}", category: "تحت 73 كغ", first: "${athlete4}", second: "${yasin}", third: "${athlete1}", date: "20/05/2026" },
  { tournament: "كأس الجزائر — ${judoSport}", category: "تحت 81 كغ", first: "${coach1}", second: "${coach3}", third: "${yusuf}", date: "20/05/2026" },
];

export const tournamentRankings = [
  { rank: 1, club: "نادي أضواء الرياضة", gold: 12, silver: 8, bronze: 5, points: 186 },
  { rank: 2, club: "نادي النجوم", gold: 9, silver: 6, bronze: 7, points: 152 },
  { rank: 3, club: "نادي الشباب", gold: 7, silver: 9, bronze: 4, points: 128 },
  { rank: 4, club: "نادي الاتحاد", gold: 5, silver: 4, bronze: 8, points: 98 },
  { rank: 5, club: "نادي النصر", gold: 4, silver: 5, bronze: 3, points: 76 },
];

export const tournamentReports = [
  { tournament: "${t3}", type: "تقرير تنظيم", author: "${yusuf}", due: "10/07/2026", status: "غير مكتمل" },
  { tournament: "${t2}", type: "تقرير نتائج", author: "${coach2}", due: "05/11/2026", status: "غير مكتمل" },
  { tournament: "${t1}", type: "قائمة المشاركين", author: "${coach1}", due: "01/10/2026", status: "غير مكتمل" },
  { tournament: "بطولة شمال أفريقia — ${karateSport}", type: "تقرير مالي", author: "${athlete2}", due: "15/12/2026", status: "غير مكتمل" },
  { tournament: "البطولة الوطنية للسباحة", type: "تقرير طبي", author: "${laila}", due: "20/06/2026", status: "غير مكتمل" },
  { tournament: "كأس الجزائر — ${judoSport}", type: "تقرير تحكيم", author: "${coach3}", due: "25/05/2026", status: "غير مكتمل" },
  { tournament: "البطولة الوطنية للسباحة", type: "تقرير نتائج", author: "${yasin}", due: "18/06/2026", status: "مكتمل" },
  { tournament: "كأس الجزائر — ${judoSport}", type: "تقرير نتائج", author: "${coach1}", due: "22/05/2026", status: "مكتمل" },
];

export const tournamentsOngoingSummary = [
  { name: "${t1}", phase: "التسجيل مفتoح", clubs: 48, date: "18/10/2026" },
  { name: "بطولة ولاية الجزائر — ${judoSport}", phase: "دور المجموعات", clubs: 22, date: "جارية الآن" },
  { name: "كأس الرابطة — ${karateSport}", phase: "ربع النهائي", clubs: 16, date: "جارية الآن" },
];

export const tournamentsUpcomingSummary = [
  { name: "${t2}", date: "25/10/2026", registration: "مفتoح" },
  { name: "${t3}", date: "02/11/2026", registration: "مغلق" },
  { name: "بطولة شمال أفريقia — ${karateSport}", date: "12/12/2026", registration: "مفتoح" },
];
`;

fs.writeFileSync("src/lib/national/modules/tournament-extra.ts", extra, "utf8");
s = s.slice(0, start) + tournamentsList + "\n\n" + extra + "\n" + s.slice(end);
fs.writeFileSync(path, s, "utf8");
console.log("OK", { t1, t2, t3, judoSport, karateSport });
