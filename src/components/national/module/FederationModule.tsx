"use client";

import { useState } from "react";
import { Plus, Shield } from "lucide-react";
import { NationalShell } from "@/components/national/NationalShell";
import { NationalModuleHeader } from "@/components/national/module/NationalModuleHeader";
import { FederationDashboard } from "@/components/national/module/FederationDashboard";
import { FederationTabContent } from "@/components/national/module/FederationTabContent";
import { ModuleTabs } from "@/components/club/module/ModuleUI";

const tabs = [
  { id: "dashboard", label: "لوحة الاتحادية" },
  { id: "executive", label: "المكتب التنفيذي" },
  { id: "assembly", label: "الجمعية العامة" },
  { id: "committees", label: "اللجان التقنية الوطنية" },
  { id: "leagues", label: "الرابطات" },
  { id: "clubs", label: "النوادي" },
  { id: "licenses", label: "الإجازات الرياضية" },
  { id: "tournaments", label: "البطولات الرسمية" },
  { id: "nationalTeam", label: "الفريق الوطني" },
  { id: "documents", label: "الوثائق والقوانين" },
];

export function FederationModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <NationalShell activeNav="federation">
      <NationalModuleHeader
        title="الاتحادية الجزائرية للرياضة"
        subtitle="الإدارة الوطنية للرياضة، الرابطات، الإجازات، البطولات، اللجان التقنية والفريق الوطني"
        actions={[
          { label: "إضافة رابطة", icon: Plus, primary: true },
          { label: "مراجعة الإجازات", icon: Shield },
        ]}
      />
      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />
      {tab === "dashboard" ? <FederationDashboard /> : <FederationTabContent tab={tab} />}
    </NationalShell>
  );
}
