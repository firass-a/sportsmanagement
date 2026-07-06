"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { NationalShell } from "@/components/national/NationalShell";
import { NationalModuleHeader } from "@/components/national/module/NationalModuleHeader";
import { TransfersTabContent } from "@/components/national/module/TransfersTabContent";
import { ModuleTabs } from "@/components/club/module/ModuleUI";

const tabs = [
  { id: "dashboard", label: "لوحة التحويلات" },
  { id: "new", label: "طلبات جديدة" },
  { id: "incoming", label: "تحويلات واردة" },
  { id: "outgoing", label: "تحويلات صادرة" },
  { id: "pending", label: "قيد الدراسة" },
  { id: "approved", label: "معتمدة" },
  { id: "rejected", label: "مرفوضة" },
  { id: "disputes", label: "نزاعات" },
];

export function TransfersModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <NationalShell activeNav="transfers">
      <NationalModuleHeader
        title="التحويلات الرسمية"
        subtitle="طلبات انتقال الرياضي أو المدرب أو الحكم بين النوادي — مع موافقات الأطراف والرابطة والاتحادية"
        actions={[{ label: "طلب تحويل", icon: Plus, primary: true }]}
      />
      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />
      <TransfersTabContent tab={tab} />
    </NationalShell>
  );
}
