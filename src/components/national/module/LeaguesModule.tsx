"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { NationalShell } from "@/components/national/NationalShell";
import { NationalModuleHeader } from "@/components/national/module/NationalModuleHeader";
import { LeagueTabContent } from "@/components/national/module/LeagueTabContent";
import { ModuleTabs } from "@/components/club/module/ModuleUI";

const tabs = [
  { id: "dashboard", label: "لوحة الرابطة" },
  { id: "executive", label: "المكتب التنفيذي" },
  { id: "assembly", label: "الجمعية العامة" },
  { id: "clubs", label: "النوادي المنخرطة" },
  { id: "licenses", label: "الإجازات الرياضية" },
  { id: "tournaments", label: "المنافسات الولائية" },
  { id: "trainingCamps", label: "التربصات" },
  { id: "rankExams", label: "امتحانات الرتب" },
  { id: "transfers", label: "التحويلات" },
  { id: "reports", label: "التقارير" },
];

export function LeaguesModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <NationalShell activeNav="leagues">
      <NationalModuleHeader
        title="الرابطة الولائية للرياضة — الجزائر"
        subtitle="إدارة النوادي المنخرطة، الإجازات، المنافسات، التربصات وامتحانات الرتب"
        registration="LIG-ALG-16-2026"
        wilaya="ولاية الجزائر"
        status="نشطة"
        actions={[{ label: "إضافة نادٍ", icon: Plus, primary: true }]}
      />
      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />
      <LeagueTabContent tab={tab} />
    </NationalShell>
  );
}
