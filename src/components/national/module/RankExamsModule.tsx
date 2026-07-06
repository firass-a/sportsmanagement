"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { NationalShell } from "@/components/national/NationalShell";
import { NationalModuleHeader } from "@/components/national/module/NationalModuleHeader";
import { RankExamsTabContent } from "@/components/national/module/RankExamsTabContent";
import { ModuleTabs } from "@/components/club/module/ModuleUI";

const tabs = [
  { id: "dashboard", label: "لوحة الامتحانات" },
  { id: "planning", label: "التخطيط والجدولة" },
  { id: "upcoming", label: "قادمة" },
  { id: "candidates", label: "المرشحون" },
  { id: "committees", label: "اللجان" },
  { id: "results", label: "النتائج" },
  { id: "certificates", label: "الشهادات" },
  { id: "archive", label: "الأرشيف" },
];

export function RankExamsModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <NationalShell activeNav="rankExams">
      <NationalModuleHeader
        title="امتحانات اجتياز الرتب"
        subtitle="التخطيط الموسمي، جدولة الامتحانات، اللجان، المرشحون، النتائج والشهادات"
        actions={[{ label: "إنشاء امتحان", icon: Plus, primary: true }]}
      />
      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />
      <RankExamsTabContent tab={tab} onTabChange={setTab} />
    </NationalShell>
  );
}
