"use client";

import { useState } from "react";
import { Settings } from "lucide-react";
import { NationalShell } from "@/components/national/NationalShell";
import { NationalModuleHeader } from "@/components/national/module/NationalModuleHeader";
import { SettingsTabContent } from "@/components/national/module/NationalModuleTabContents";
import { ModuleTabs } from "@/components/club/module/ModuleUI";

const tabs = [
  { id: "dashboard", label: "لوحة الإعدادات" },
  { id: "seasons", label: "المواسم الرياضية" },
  { id: "categories", label: "الفئات العمرية" },
  { id: "ranks", label: "الرتب والأحزمة" },
  { id: "sports", label: "الاختصاصات" },
  { id: "licenses", label: "نماذج الإجازات" },
  { id: "permissions", label: "الصلاحيات" },
  { id: "audit", label: "سجل العمليات" },
];

export function SettingsModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <NationalShell activeNav="settings">
      <NationalModuleHeader
        title="إعدادات النظام الرسمي"
        subtitle="تهيئة القوانين، المواسم، الفئات العمرية، الرتب، الاختصاصات، الصلاحيات ونماذج الإجازات"
        actions={[{ label: "حفظ التعديلات", icon: Settings, primary: true }]}
      />
      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />
      <SettingsTabContent tab={tab} />
    </NationalShell>
  );
}
