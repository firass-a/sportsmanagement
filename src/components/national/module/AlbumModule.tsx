"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { NationalShell } from "@/components/national/NationalShell";
import { NationalModuleHeader } from "@/components/national/module/NationalModuleHeader";
import { AlbumTabContent } from "@/components/national/module/NationalModuleTabContents";
import { ModuleTabs } from "@/components/club/module/ModuleUI";

const tabs = [
  { id: "dashboard", label: "لوحة الألبوم" },
  { id: "albums", label: "الألبومات" },
  { id: "photos", label: "الصور" },
  { id: "videos", label: "الفيديوهات" },
  { id: "tournaments", label: "البطولات" },
  { id: "camps", label: "التربصات" },
];

export function AlbumModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <NationalShell activeNav="album">
      <NationalModuleHeader
        title="ألبوم الصور والفيديو"
        subtitle="توثيق البطولات، التربصات، امتحانات الرتب، نشاطات الاتحاديات والرابطات والتتويجات الرسمية"
        actions={[{ label: "رفع وسائط", icon: Plus, primary: true }]}
      />
      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />
      <AlbumTabContent tab={tab} />
    </NationalShell>
  );
}
