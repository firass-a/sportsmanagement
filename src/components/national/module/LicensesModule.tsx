"use client";

import { useState } from "react";
import { Plus, Printer, Search } from "lucide-react";
import { NationalShell } from "@/components/national/NationalShell";
import { NationalModuleHeader } from "@/components/national/module/NationalModuleHeader";
import { LicensesTabContent } from "@/components/national/module/NationalModuleTabContents";
import { ModuleTabs } from "@/components/club/module/ModuleUI";

const tabs = [
  { id: "dashboard", label: "لوحة الإجازات" },
  { id: "pending", label: "في انتظار المراجعة" },
  { id: "approved", label: "المقبولة" },
  { id: "incomplete", label: "الناقصة الوثائق" },
  { id: "renewals", label: "التجديدات" },
  { id: "verify", label: "التحقق من الإجازة" },
];

export function LicensesModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <NationalShell activeNav="licenses">
      <NationalModuleHeader
        title="الإجازات الرياضية الرسمية"
        subtitle="إصدار وتجديد وتعليق وإلغاء الإجازات للرياضيين والمدربين والحكام — مع التحقق من الوثائق والبطاقة الرقمية والرتبة"
        actions={[
          { label: "طلب إجازة جديدة", icon: Plus, primary: true },
          { label: "التحقق من إجازة", icon: Search },
          { label: "طباعة", icon: Printer },
        ]}
      />
      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />
      <LicensesTabContent tab={tab} />
    </NationalShell>
  );
}
