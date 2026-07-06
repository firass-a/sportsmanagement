"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { NationalShell } from "@/components/national/NationalShell";
import { NationalModuleHeader } from "@/components/national/module/NationalModuleHeader";
import { OfficialClubsTabContent } from "@/components/national/module/NationalModuleTabContents";
import { ModuleTabs } from "@/components/club/module/ModuleUI";

const tabs = [
  { id: "dashboard", label: "لوحة النادي الرسمي" },
  { id: "branches", label: "الفروع المعتمدة" },
  { id: "athletes", label: "الرياضيون" },
  { id: "coaches", label: "المدربون" },
  { id: "referees", label: "الحكام" },
  { id: "licenses", label: "الإجازات الرياضية" },
  { id: "transfers", label: "التحويلات" },
  { id: "participations", label: "المشاركات الرسمية" },
  { id: "documents", label: "الوثائق والقوانين" },
];

export function OfficialClubsModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <NationalShell activeNav="officialClubs">
      <NationalModuleHeader
        title="النوادي الرسمية المسجلة"
        subtitle="تمثل النادي أمام الرابطة والاتحادية — الفروع، الرياضيون، المدربون، الحكام والمشاركات الرسمية"
        actions={[{ label: "تسجيل نادٍ جديد", icon: Plus, primary: true }]}
      />
      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />
      <OfficialClubsTabContent tab={tab} />
    </NationalShell>
  );
}
