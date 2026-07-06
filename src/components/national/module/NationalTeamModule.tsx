"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { NationalShell } from "@/components/national/NationalShell";
import { NationalModuleHeader } from "@/components/national/module/NationalModuleHeader";
import { NationalTeamTabContent } from "@/components/national/module/NationalModuleTabContents";
import { ModuleTabs } from "@/components/club/module/ModuleUI";

const tabs = [
  { id: "dashboard", label: "لوحة الفريق الوطني" },
  { id: "shortlist", label: "القائمة الموسعة" },
  { id: "called", label: "المستدعون" },
  { id: "staff", label: "الطاقم الفني" },
  { id: "camps", label: "التربصات الوطنية" },
  { id: "international", label: "المنافسات الدولية" },
  { id: "results", label: "النتائج والإنجازات" },
  { id: "documents", label: "الملفات الرسمية" },
];

export function NationalTeamModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <NationalShell activeNav="nationalTeam">
      <NationalModuleHeader
        title="الفريق الوطني"
        subtitle="تسيير الرياضيين المرشحين والمستدعين، المدربين، التربصات، المنافسات الدولية والنتائج"
        actions={[{ label: "استدعاء رياضي", icon: Plus, primary: true }]}
      />
      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />
      <NationalTeamTabContent tab={tab} />
    </NationalShell>
  );
}
