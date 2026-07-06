"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { NationalShell } from "@/components/national/NationalShell";
import { NationalModuleHeader } from "@/components/national/module/NationalModuleHeader";
import { TrainingCampsTabContent } from "@/components/national/module/NationalModuleTabContents";
import { ModuleTabs } from "@/components/club/module/ModuleUI";

const tabs = [
  { id: "dashboard", label: "لوحة التربصات" },
  { id: "upcoming", label: "قادمة" },
  { id: "ongoing", label: "جارية" },
  { id: "finished", label: "منتهية" },
  { id: "participants", label: "المشاركون" },
  { id: "attendance", label: "الحضور" },
  { id: "reports", label: "التقارير" },
];

export function TrainingCampsModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <NationalShell activeNav="trainingCamps">
      <NationalModuleHeader
        title="التربصات الرسمية"
        subtitle="إدارة التربصات للرياضيين والمدربين والحكام — قوائم المشاركين، البرنامج، الإقامة والحضور"
        actions={[{ label: "إنشاء تربص", icon: Plus, primary: true }]}
      />
      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />
      <TrainingCampsTabContent tab={tab} />
    </NationalShell>
  );
}
