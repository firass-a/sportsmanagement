"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { NationalShell } from "@/components/national/NationalShell";
import { NationalModuleHeader } from "@/components/national/module/NationalModuleHeader";
import { TournamentsTabContent } from "@/components/national/module/TournamentsTabContent";
import { ModuleTabs } from "@/components/club/module/ModuleUI";

const tabs = [
  { id: "dashboard", label: "لوحة البطولات" },
  { id: "ongoing", label: "جارية" },
  { id: "upcoming", label: "قادمة" },
  { id: "finished", label: "منتهية" },
  { id: "registration", label: "التسجيل" },
  { id: "draw", label: "القرعة" },
  { id: "results", label: "النتائج" },
  { id: "ranking", label: "الترتيب" },
  { id: "reports", label: "التقارير" },
];

export function TournamentsModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <NationalShell activeNav="tournaments">
      <NationalModuleHeader
        title="البطولات الرسمية"
        subtitle="إدارة المنافسات الولائية والجهوية والوطنية — التسجيل، القوائم، القرعة، النتائج والميداليات"
        actions={[{ label: "إنشاء بطولة", icon: Plus, primary: true }]}
      />
      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />
      <TournamentsTabContent tab={tab} />
    </NationalShell>
  );
}
