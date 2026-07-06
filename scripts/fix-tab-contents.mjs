import fs from "fs";

const p = "src/components/national/module/NationalModuleTabContents.tsx";
let s = fs.readFileSync(p, "utf8");

if (s.includes("export function TournamentsTabContent")) {
  const start = s.indexOf("export function TournamentsTabContent");
  const end = s.indexOf("export function TrainingCampsTabContent");
  s =
    s.slice(0, start) +
    'export { TournamentsTabContent } from "@/components/national/module/TournamentsTabContent";\n\n' +
    s.slice(end);
}

const trainingOld = `<BottomPanels>
          <HighlightCard><p className="text-xs font-bold text-asl-navy">8 تربصات قadمة</p></HighlightCard>
          <HighlightCard urgent><p className="text-xs font-bold text-green-700">3 تربصات جارية الآن</p></HighlightCard>
          <ModulePanel><PanelHeader icon={GraduationCap} title="المشاركون" iconBg="bg-asl-blue/10" iconColor="text-asl-blue" /><p className="text-2xl font-bold text-asl-navy">1,240</p></ModulePanel>
          <HighlightCard urgent><p className="text-xs font-bold text-amber-900">4 تقارير معلقة</p></HighlightCard>
        </BottomPanels>`;

const trainingNew = `<BottomPanels>
          <InfoPanel icon={Calendar} title="تربصات قadمة" iconBg="bg-purple-100" iconColor="text-purple-600">
            <p className="text-2xl font-bold text-asl-navy">8</p>
            <MiniList items={trainingCampsList.filter((t) => t.status === "قadم").map((t) => ({ label: t.name, value: t.period }))} />
          </InfoPanel>
          <InfoPanel icon={GraduationCap} title="جارية الآن" iconBg="bg-green-100" iconColor="text-green-600" urgent>
            <p className="text-2xl font-bold text-green-700">3</p>
            <MiniList items={trainingCampsList.filter((t) => t.status === "جاري").map((t) => ({ label: t.name, value: t.place }))} />
          </InfoPanel>
          <InfoPanel icon={GraduationCap} title="المشاركون" iconBg="bg-asl-blue/10" iconColor="text-asl-blue">
            <p className="text-2xl font-bold text-asl-navy">1,240</p>
            <MiniList items={trainingCampsList.map((t) => ({ label: t.name, value: String(t.participants) }))} />
          </InfoPanel>
          <InfoPanel icon={FileText} title="تقارير معلقة" iconBg="bg-amber-100" iconColor="text-amber-700" urgent>
            <p className="text-2xl font-bold text-amber-900">4</p>
            <MiniList items={[
              { label: "تربص تحكيم — قسنطينة", value: "10/07/2026" },
              { label: "تربص وطني — الجودo", value: "20/08/2026" },
              { label: "تربص ولائي — الكاراتieh", value: "05/09/2026" },
              { label: "تقرير حضور — وهران", value: "12/07/2026" },
            ]} />
          </InfoPanel>
        </BottomPanels>`;

if (s.includes("8 تربصات")) {
  s = s.replace(
    /<BottomPanels>\s*<HighlightCard><p className="text-xs font-bold text-asl-navy">8 تربصات[\s\S]*?<\/BottomPanels>/,
    trainingNew
  );
}

fs.writeFileSync(p, s);
console.log("done");
