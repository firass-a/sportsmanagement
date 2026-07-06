"use client";

import { useState } from "react";
import { Bot } from "lucide-react";
import { NationalShell } from "@/components/national/NationalShell";
import { NationalModuleHeader } from "@/components/national/module/NationalModuleHeader";
import { StatisticsTabContent } from "@/components/national/module/NationalModuleTabContents";
import { ModuleTabs } from "@/components/club/module/ModuleUI";

const tabs = [
  { id: "dashboard", label: "لوحة الإحصائيات" },
  { id: "licenses", label: "الإجازات" },
  { id: "athletes", label: "الرياضيون" },
  { id: "tournaments", label: "البطولات" },
  { id: "transfers", label: "التحويلات" },
  { id: "ai", label: "الذكاء الاصطناعي" },
];

export function StatisticsModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <NationalShell activeNav="statistics">
      <NationalModuleHeader
        title="الإحصائيات والذكاء الاصطناعي"
        subtitle="تحليل الإجازات، المسجلين، البطولات، النتائج، الرتب، التحويلات ونشاط الرابطات والنوادي"
        actions={[{ label: "مساعد ذكي", icon: Bot, primary: true }]}
      />
      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />
      <StatisticsTabContent tab={tab} />
    </NationalShell>
  );
}
