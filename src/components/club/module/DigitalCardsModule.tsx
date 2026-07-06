"use client";

import { useState } from "react";
import {
  Ban,
  CreditCard,
  Download,
  QrCode,
  UserCheck,
  UserPlus,
} from "lucide-react";
import { ClubShell } from "@/components/club/ClubShell";
import {
  ModuleAlerts,
  ModuleDataTable,
  ModuleDigitalCard,
  ModuleEmptyState,
  ModulePageHeader,
  ModuleSection,
  ModuleSplitGrid,
  ModuleStatGrid,
  ModuleTabs,
  StatusBadge,
} from "@/components/club/module/ModuleUI";
import {
  digitalCardsAlerts,
  digitalCardsList,
  digitalCardsStats,
} from "@/lib/club/modules/extended-mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "all", label: "جميع البطاقات" },
  { id: "athletes", label: "رياضيون" },
  { id: "coaches", label: "مدربون" },
  { id: "referees", label: "حكام" },
  { id: "admin", label: "إداريون" },
  { id: "activation", label: "التفعيل السنوي" },
  { id: "qr", label: "QR والتحقق" },
  { id: "suspended", label: "موقوفة" },
  { id: "reports", label: "التقارير" },
];

export function DigitalCardsModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <ClubShell activeNav="digitalCards">
      <ModulePageHeader
        title="البطاقات الرقمية — نادي نجوم شباب الكيشين"
        subtitle="إدارة بطاقات الرياضيين والمدربين والحكام والإداريين"
        actions={[
          { label: "بطاقة جديدة", icon: UserPlus, primary: true },
          { label: "تفعيل جماعي", icon: UserCheck },
          { label: "مسح QR", icon: QrCode },
          { label: "تصدير", icon: Download },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleAlerts alerts={digitalCardsAlerts} />
          <ModuleStatGrid stats={digitalCardsStats} />
          <ModuleSplitGrid>
          <ModuleSection title="آخر البطاقات" icon={CreditCard} iconColor="blue">
            <ModuleDataTable
              columns={[
                { key: "name", label: "الاسم" },
                { key: "type", label: "النوع" },
                { key: "number", label: "الرقم" },
                { key: "activation", label: "التفعيل" },
              ]}
              rows={digitalCardsList}
            />
          </ModuleSection>
          <ModuleSection title="معاينة بطاقة" icon={QrCode} iconColor="orange">
            <ModuleDigitalCard
              name="محمد أمين"
              branch="الجودو"
              category="رياضي"
              cardNumber="QR-2024-01024"
              activation="مفعلة 2026"
            />
          </ModuleSection>
        </ModuleSplitGrid>
        </>
      )}

      {["all", "athletes", "coaches", "referees", "admin"].includes(tab) && (
        <ModuleSection title="سجل البطاقات" icon={CreditCard} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "name", label: "الاسم" },
              { key: "type", label: "النوع" },
              { key: "branch", label: "الفرع" },
              { key: "number", label: "رقم البطاقة" },
              { key: "activation", label: "التفعيل" },
              { key: "docs", label: "الوثائق" },
            ]}
            rows={
              tab === "all"
                ? digitalCardsList
                : digitalCardsList.filter((c) =>
                    tab === "athletes"
                      ? c.type === "رياضي"
                      : tab === "coaches"
                        ? c.type === "مدرب"
                        : tab === "referees"
                          ? c.type === "حكم"
                          : c.type === "إداري",
                  )
            }
          />
        </ModuleSection>
      )}

      {tab === "activation" && (
        <ModuleSection title="بطاقات في انتظار التفعيل" icon={UserCheck} iconColor="orange">
          <ModuleDataTable
            columns={[
              { key: "name", label: "الاسم" },
              { key: "type", label: "النوع" },
              { key: "docs", label: "الوثائق" },
              {
                key: "activation",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.activation)} />,
              },
            ]}
            rows={digitalCardsList.filter((c) => c.activation.includes("انتظار"))}
          />
        </ModuleSection>
      )}

      {tab === "qr" && (
        <ModuleEmptyState
          icon={QrCode}
          title="التحقق عبر QR"
          description="امسح رمز QR للتحقق من صلاحية البطاقة وحالة التفعيل."
        />
      )}

      {tab === "suspended" && (
        <ModuleEmptyState
          icon={Ban}
          title="البطاقات الموقوفة"
          description="لا توجد بطاقات موقوفة حالياً."
        />
      )}

      {tab === "reports" && (
        <ModuleEmptyState
          icon={Download}
          title="تقارير البطاقات"
          description="تصدير قوائم البطاقات حسب النوع والفرع وحالة التفعيل."
        />
      )}
    </ClubShell>
  );
}
