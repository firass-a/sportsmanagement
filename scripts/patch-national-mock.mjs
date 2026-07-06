import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "../src/lib/national/modules/mock-data.ts");
let src = readFileSync(file, "utf8");

const J = "\u0627\u0644\u062c\u0648\u062f\u0648"; // الجودo

const replacements = [
  [
    /export const nationalSportDistribution = \[[\s\S]*?\];/,
    `export const nationalSportDistribution = [
  { name: "${J}", value: 26, color: "#2D5CFE", count: 11903 },
  { name: "\u0627\u0644\u0643\u0627\u0631\u0627\u062a\u064a\u0647", value: 22, color: "#27AE60", count: 10072 },
  { name: "\u0627\u0644\u062a\u0627\u064a\u0643\u0648\u0627\u0646\u062f\u0648", value: 18, color: "#F2994A", count: 8241 },
  { name: "\u0627\u0644\u0633\u0628\u0627\u062d\u0629", value: 14, color: "#9B51E0", count: 6410 },
  { name: "\u0623\u062e\u0631\u0649", value: 20, color: "#64748b", count: 9156 },
];`,
  ],
  [
    /export const trainingCampsList = \[[\s\S]*?\];/,
    `export const trainingCampsList = [
  { name: "\u062a\u0631\u0628\u0635 \u0648\u0637\u0646\u064a \u2014 ${J}", place: "\u0627\u0644\u062c\u0632\u0627\u0626\u0631", period: "15\u201320/08/2026", participants: 86, status: "\u0642\u0627\u062f\u0645" },
  { name: "\u062a\u0631\u0628\u0635 \u0648\u0644\u0627\u0626\u064a \u2014 \u0627\u0644\u0643\u0627\u0631\u0627\u062a\u064a\u0647", place: "\u0648\u0647\u0631\u0627\u0646", period: "01\u201305/09/2026", participants: 42, status: "\u0642\u0627\u062f\u0645" },
  { name: "\u062a\u0631\u0628\u0635 \u062a\u062d\u0643\u064a\u0645 \u0648\u0637\u0646\u064a", place: "\u0642\u0633\u0646\u0637\u064a\u0646\u0629", period: "10\u201312/07/2026", participants: 28, status: "\u062c\u0627\u0631\u064a" },
  { name: "\u062a\u0631\u0628\u0635 \u0625\u0639\u062f\u0627\u062f \u2014 \u0627\u0644\u0641\u0631\u064a\u0642 \u0627\u0644\u0648\u0637\u0646\u064a", place: "\u0633\u0637\u064a\u0641", period: "22\u201328/07/2026", participants: 24, status: "\u062c\u0627\u0631\u064a" },
  { name: "\u062a\u0631\u0628\u0635 \u0645\u062f\u0631\u0628\u064a\u0646 \u2014 \u0627\u0644\u062a\u0627\u064a\u0643\u0648\u0627\u0646\u062f\u0648", place: "\u0639\u0646\u0627\u0628\u0629", period: "05\u201308/09/2026", participants: 36, status: "\u0642\u0627\u062f\u0645" },
  { name: "\u062a\u0631\u0628\u0635 \u0648\u0644\u0627\u0626\u064a \u2014 \u0627\u0644\u0633\u0628\u0627\u062d\u0629", place: "\u0648\u0647\u0631\u0627\u0646", period: "12\u201315/08/2026", participants: 18, status: "\u0645\u0646\u062a\u0647\u064a" },
];`,
  ],
  [
    /export const rankExamsList = \[[\s\S]*?\];/,
    `export const rankExamsList = [
  { name: "\u0627\u0645\u062a\u062d\u0627\u0646 \u0627\u0644\u062d\u0632\u0627\u0645 \u0627\u0644\u0623\u0635\u0641\u0631 \u2014 ${J}", date: "20/09/2026", candidates: 86, rank: "\u062d\u0632\u0627\u0645 \u0623\u0635\u0641\u0631", status: "\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0641\u062a\u0648\u062d" },
  { name: "\u0627\u0645\u062a\u062d\u0627\u0646 \u0627\u0644\u062f\u0631\u062c\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u2014 \u0627\u0644\u0643\u0627\u0631\u0627\u062a\u064a\u0647", date: "05/10/2026", candidates: 54, rank: "\u062f\u0631\u062c\u0629 1 \u062f\u0627\u0646", status: "\u0642\u0627\u062f\u0645" },
  { name: "\u0627\u0645\u062a\u062d\u0627\u0646 \u0627\u0644\u0631\u062a\u0628\u0629 \u2014 \u0627\u0644\u062a\u0627\u064a\u0643\u0648\u0627\u0646\u062f\u0648", date: "12/06/2026", candidates: 72, rank: "\u062d\u0632\u0627\u0645 \u0623\u0632\u0631\u0642", status: "\u0645\u0646\u062a\u0647\u064a" },
  { name: "\u0627\u0645\u062a\u062d\u0627\u0646 \u0627\u0644\u062d\u0632\u0627\u0645 \u0627\u0644\u0628\u0631\u062a\u0642\u0627\u0644\u064a \u2014 ${J}", date: "15/11/2026", candidates: 64, rank: "\u062d\u0632\u0627\u0645 \u0628\u0631\u062a\u0642\u0627\u0644\u064a", status: "\u0642\u0627\u062f\u0645" },
  { name: "\u0627\u0645\u062a\u062d\u0627\u0646 \u0627\u0644\u062f\u0631\u062c\u0629 \u0627\u0644\u062b\u0627\u0646\u064a\u0629 \u2014 \u0627\u0644\u0643\u0627\u0631\u0627\u062a\u064a\u0647", date: "22/10/2026", candidates: 38, rank: "\u062f\u0631\u062c\u0629 2 \u062f\u0627\u0646", status: "\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0641\u062a\u0648\u062d" },
];`,
  ],
  [
    /export const nationalTeamList = \[[\s\S]*?\];/,
    `export const nationalTeamList = [
  { name: "\u0631\u064a\u0627\u0636 \u0628\u0646 \u0634\u0631\u064a\u0641", sport: "${J}", category: "\u062a\u062d\u062a 73 \u0643\u063a", status: "\u0645\u0633\u062a\u062f\u0639\u0649", rank: "\u062d\u0632\u0627\u0645 \u0623\u0633\u0648\u062f 2 \u062f\u0627\u0646" },
  { name: "\u0623\u0645\u064a\u0646\u0629 \u0628\u0648\u0632\u0631\u064a\u0641", sport: "\u0627\u0644\u0643\u0627\u0631\u0627\u062a\u064a\u0647", category: "\u0633\u064a\u062f\u0627\u062a +61 \u0643\u063a", status: "\u0645\u0633\u062a\u062f\u0639\u0649", rank: "\u062f\u0631\u062c\u0629 3 \u062f\u0627\u0646" },
  { name: "\u0645\u0647\u0646\u062f \u0642\u0627\u0633\u0645\u064a", sport: "\u0627\u0644\u062a\u0627\u064a\u0643\u0648\u0627\u0646\u062f\u0648", category: "\u062a\u062d\u062a 68 \u0643\u063a", status: "\u0645\u0631\u0634\u062d", rank: "\u062d\u0632\u0627\u0645 \u0623\u062d\u0645\u0631" },
  { name: "\u0644\u064a\u0644\u0649 \u0645\u0631\u0632\u0648\u0642", sport: "\u0627\u0644\u0633\u0628\u0627\u062d\u0629", category: "100\u0645 \u062d\u0631\u0629", status: "\u0645\u0633\u062a\u062f\u0639\u0649", rank: "\u2014" },
  { name: "\u064a\u0627\u0633\u064a\u0646 \u062d\u0645\u064a\u062f\u064a", sport: "${J}", category: "\u062a\u062d\u062a 81 \u0643\u063a", status: "\u0645\u0631\u0634\u062d", rank: "\u062d\u0632\u0627\u0645 \u0623\u0633\u0648\u062f 1 \u062f\u0627\u0646" },
  { name: "\u0646\u0648\u0631 \u0627\u0644\u0647\u062f\u0649 \u0628\u0646 \u0639\u0648\u062f\u0629", sport: "\u0627\u0644\u0643\u0627\u0631\u0627\u062a\u064a\u0647", category: "\u0633\u064a\u062f\u0627\u062a -55 \u0643\u063a", status: "\u0645\u0633\u062a\u062f\u0639\u0649", rank: "\u062f\u0631\u062c\u0629 2 \u062f\u0627\u0646" },
];`,
  ],
];

for (const [pattern, replacement] of replacements) {
  src = src.replace(pattern, replacement);
}

if (!src.includes("export const nationalAlbumStats")) {
  const albumInsert = `
export const nationalAlbumStats = [
  { label: "\u0627\u0644\u0623\u0644\u0628\u0648\u0645\u0627\u062a", value: 24 },
  { label: "\u0627\u0644\u0635\u0648\u0631", value: "2,840" },
  { label: "\u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a", value: 186 },
  { label: "\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0629", value: 12 },
];

export const nationalAlbums = [
  { id: "na1", name: "\u0627\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629 \u0644\u0644${J} 2026", type: "\u0628\u0637\u0648\u0644\u0629", branch: "${J}", photos: 48, videos: 6, date: "2026-06-15", status: "\u0645\u0646\u0634\u0648\u0631", image: "/images/album/judo-throw.png", imagePosition: "center 20%" },
  { id: "na2", name: "\u062a\u0631\u0628\u0635 \u0648\u0637\u0646\u064a \u2014 \u0627\u0644\u0643\u0627\u0631\u0627\u062a\u064a\u0647", type: "\u062a\u0631\u0628\u0635", branch: "\u0627\u0644\u0643\u0627\u0631\u0627\u062a\u064a\u0647", photos: 36, videos: 4, date: "2026-05-20", status: "\u0645\u0646\u0634\u0648\u0631", image: "/images/album/warm-up.png", imagePosition: "center 40%" },
  { id: "na3", name: "\u0627\u0645\u062a\u062d\u0627\u0646\u0627\u062a \u0627\u0644\u0631\u062a\u0628 \u2014 \u0627\u0644\u062a\u0627\u064a\u0643\u0648\u0627\u0646\u062f\u0648", type: "\u0627\u0645\u062a\u062d\u0627\u0646", branch: "\u0627\u0644\u062a\u0627\u064a\u0643\u0648\u0627\u0646\u062f\u0648", photos: 28, videos: 2, date: "2026-06-12", status: "\u0645\u0646\u0634\u0648\u0631", image: "/images/album/boxing-semifinal.png", imagePosition: "center" },
  { id: "na4", name: "\u062a\u062a\u0648\u064a\u062c \u0627\u0644\u0641\u0631\u064a\u0642 \u0627\u0644\u0648\u0637\u0646\u064a", type: "\u062a\u062a\u0648\u064a\u062c", branch: "\u062c\u0645\u064a\u0639 \u0627\u0644\u0627\u062e\u062a\u0635\u0627\u0635\u0627\u062a", photos: 52, videos: 8, date: "2026-04-01", status: "\u0645\u0646\u0634\u0648\u0631", image: "/images/album/graduation-trophy.png", imagePosition: "center" },
  { id: "na5", name: "\u0643\u0623\u0633 \u0627\u0644\u062c\u0632\u0627\u0626\u0631 \u2014 ${J}", type: "\u0628\u0637\u0648\u0644\u0629", branch: "${J}", photos: 42, videos: 5, date: "2026-05-20", status: "\u0645\u0646\u0634\u0648\u0631", image: "/images/album/judo-throw.png", imagePosition: "center 30%" },
  { id: "na6", name: "\u0627\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629 \u0644\u0644\u0633\u0628\u0627\u062d\u0629", type: "\u0628\u0637\u0648\u0644\u0629", branch: "\u0627\u0644\u0633\u0628\u0627\u062d\u0629", photos: 34, videos: 3, date: "2026-06-15", status: "\u0642\u064a\u062f \u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0629", image: "/images/album/warm-up.png", imagePosition: "center" },
];

export const nationalGalleryItems = [
  { id: "ng1", title: "\u0631\u0645\u064a\u0629 \u062d\u0627\u0633\u0645\u0629 \u2014 ${J}", album: "\u0627\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629 \u0644\u0644${J} 2026", date: "2026-06-15", category: "\u0628\u0637\u0648\u0644\u0629", image: "/images/album/judo-throw.png" },
  { id: "ng2", title: "\u062a\u0645\u0631\u064a\u0646 \u0627\u0644\u0625\u062d\u0645\u0627\u0621 \u2014 \u062a\u0631\u0628\u0635 \u0648\u0637\u0646\u064a", album: "\u062a\u0631\u0628\u0635 \u0648\u0637\u0646\u064a \u2014 \u0627\u0644\u0643\u0627\u0631\u0627\u062a\u064a\u0647", date: "2026-05-20", category: "\u062a\u0631\u0628\u0635", image: "/images/album/warm-up.png" },
  { id: "ng3", title: "\u062a\u062a\u0648\u064a\u062c \u0627\u0644\u0628\u0637\u0644 \u0627\u0644\u0648\u0637\u0646\u064a", album: "\u062a\u062a\u0648\u064a\u062c \u0627\u0644\u0641\u0631\u064a\u0642 \u0627\u0644\u0648\u0637\u0646\u064a", date: "2026-04-01", category: "\u062a\u062a\u0648\u064a\u062c", image: "/images/album/graduation-trophy.png" },
  { id: "ng4", title: "\u0627\u0645\u062a\u062d\u0627\u0646 \u0627\u0644\u062d\u0632\u0627\u0645 \u0627\u0644\u0623\u0632\u0631\u0642", album: "\u0627\u0645\u062a\u062d\u0627\u0646\u0627\u062a \u0627\u0644\u0631\u062a\u0628 \u2014 \u0627\u0644\u062a\u0627\u064a\u0643\u0648\u0627\u0646\u062f\u0648", date: "2026-06-12", category: "\u0627\u0645\u062a\u062d\u0627\u0646", image: "/images/album/boxing-semifinal.png" },
  { id: "ng5", title: "\u0646\u0647\u0627\u0626\u064a \u0643\u0623\u0633 \u0627\u0644\u062c\u0632\u0627\u0626\u0631", album: "\u0643\u0623\u0633 \u0627\u0644\u062c\u0632\u0627\u0626\u0631 \u2014 ${J}", date: "2026-05-20", category: "\u0628\u0637\u0648\u0644\u0629", image: "/images/album/judo-throw.png" },
  { id: "ng6", title: "\u0627\u0646\u0637\u0644\u0627\u0642 \u0627\u0644\u0633\u0628\u0627\u0642 \u0627\u0644\u0646\u0647\u0627\u0626\u064a", album: "\u0627\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629 \u0644\u0644\u0633\u0628\u0627\u062d\u0629", date: "2026-06-15", category: "\u0633\u0628\u0627\u062d\u0629", image: "/images/album/warm-up.png" },
  { id: "ng7", title: "\u0627\u062d\u062a\u0641\u0627\u0644 \u0627\u0644\u062a\u062a\u0648\u064a\u062c \u0627\u0644\u0631\u0633\u0645\u064a", album: "\u062a\u062a\u0648\u064a\u062c \u0627\u0644\u0641\u0631\u064a\u0642 \u0627\u0644\u0648\u0637\u0646\u064a", date: "2026-04-01", category: "\u062a\u062a\u0648\u064a\u062c", image: "/images/album/graduation-trophy.png" },
  { id: "ng8", title: "\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0631\u0645\u064a \u2014 ${J}", album: "\u0643\u0623\u0633 \u0627\u0644\u062c\u0632\u0627\u0626\u0631 \u2014 ${J}", date: "2026-05-20", category: "\u0628\u0637\u0648\u0644\u0629", image: "/images/album/judo-throw.png" },
];

export const nationalVideoItems = [
  { id: "nv1", title: "\u0645\u0644\u062e\u0635 \u0627\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629 \u0644\u0644${J}", album: "\u0627\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629 \u0644\u0644${J} 2026", date: "2026-06-15", duration: "8:24", image: "/images/album/judo-throw.png" },
  { id: "nv2", title: "\u062a\u0631\u0628\u0635 \u0648\u0637\u0646\u064a \u2014 \u0627\u0644\u0643\u0627\u0631\u0627\u062a\u064a\u0647", album: "\u062a\u0631\u0628\u0635 \u0648\u0637\u0646\u064a \u2014 \u0627\u0644\u0643\u0627\u0631\u0627\u062a\u064a\u0647", date: "2026-05-20", duration: "5:12", image: "/images/album/warm-up.png" },
  { id: "nv3", title: "\u062d\u0641\u0644 \u0627\u0644\u062a\u062a\u0648\u064a\u062c \u0627\u0644\u0648\u0637\u0646\u064a", album: "\u062a\u062a\u0648\u064a\u062c \u0627\u0644\u0641\u0631\u064a\u0642 \u0627\u0644\u0648\u0637\u0646\u064a", date: "2026-04-01", duration: "14:30", image: "/images/album/graduation-trophy.png" },
  { id: "nv4", title: "\u0627\u0645\u062a\u062d\u0627\u0646\u0627\u062a \u0627\u0644\u0631\u062a\u0628 \u2014 \u0645\u0644\u062e\u0635", album: "\u0627\u0645\u062a\u062d\u0627\u0646\u0627\u062a \u0627\u0644\u0631\u062a\u0628 \u2014 \u0627\u0644\u062a\u0627\u064a\u0643\u0648\u0627\u0646\u062f\u0648", date: "2026-06-12", duration: "3:48", image: "/images/album/boxing-semifinal.png" },
];

export const statisticsOverviewStats = [
  { label: "\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0625\u062c\u0627\u0632\u0627\u062a", value: "45,782" },
  { label: "\u0627\u0644\u0631\u064a\u0627\u0636\u064a\u0648\u0646 \u0627\u0644\u0645\u0633\u062c\u0644\u0648\u0646", value: "32,146" },
  { label: "\u0627\u0644\u0646\u0648\u0627\u062f\u064a \u0627\u0644\u0646\u0634\u0637\u0629", value: "1,248" },
  { label: "\u0627\u0644\u0628\u0637\u0648\u0644\u0627\u062a \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0633\u0645", value: 58 },
];`;

  src = src.replace(/export const settingsStats = /, `${albumInsert}\nexport const settingsStats = `);
}

writeFileSync(file, src, "utf8");
console.log("Done.");
