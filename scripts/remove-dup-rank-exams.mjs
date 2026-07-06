import { readFileSync, writeFileSync } from "fs";

const p = new URL("../src/components/national/module/NationalModuleTabContents.tsx", import.meta.url);
let s = readFileSync(p, "utf8");
const start = s.indexOf("export function RankExamsTabContent");
const end = s.indexOf("export function NationalTeamTabContent");
if (start >= 0 && end > start) {
  s =
    s.slice(0, start) +
    'export { RankExamsTabContent } from "@/components/national/module/RankExamsTabContent";\n\n' +
    s.slice(end);
  writeFileSync(p, s);
  console.log("ok");
}
