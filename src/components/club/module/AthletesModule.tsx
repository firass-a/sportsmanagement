"use client";

import { useState } from "react";
import {
  CreditCard,
  QrCode,
  RefreshCw,
  UserPlus,
  Users,
} from "lucide-react";
import { ClubShell } from "@/components/club/ClubShell";
import {
  ModuleAlerts,
  ModuleDataTable,
  ModuleDigitalCard,
  ModulePageHeader,
  ModulePanel,
  ModuleSection,
  ModuleStatGrid,
  ModuleTabs,
  StatusBadge,
} from "@/components/club/module/ModuleUI";
import {
  athleteAlerts,
  athleteStats,
  athletesList,
} from "@/lib/club/modules/mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "list", label: "جميع الرياضيين" },
  { id: "team", label: "رياضات جماعية" },
  { id: "individual", label: "رياضات فردية" },
  { id: "cards", label: "البطاقة الرقمية" },
  { id: "activation", label: "التفعيل السنوي" },
  { id: "attendance", label: "الحضور" },
];

export function AthletesModule() {
  const [tab, setTab] = useState("dashboard");

  const teamAthletes = athletesList.filter((a) =>
    ["كرة القدم", "كرة السلة"].includes(a.branch),
  );
  const individualAthletes = athletesList.filter((a) =>
    ["الجودو", "السباحة"].includes(a.branch),
  );
  const pendingActivation = athletesList.filter(
    (a) =>
      a.activation.includes("انتظار") || a.activation.includes("منتهية"),
  );

  return (
    <ClubShell activeNav="athletes">
      <ModulePageHeader
        title="الرياضيون – نادي: نجوم شباب الكيشين"
        subtitle="إدارة ملفات الرياضيين، البطاقات الرقمية، التفعيل السنوي، الحضور والمنافسات"
        actions={[
          { label: "إضافة رياضي", icon: UserPlus, primary: true },
          { label: "تفعيل البطاقات", icon: RefreshCw },
          { label: "بطاقة رقمية", icon: CreditCard },
          { label: "مسح QR", icon: QrCode },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleAlerts alerts={athleteAlerts} />
          <ModuleStatGrid stats={athleteStats} />
        </>
      )}

      {(tab === "dashboard" || tab === "list") && (
        <ModuleSection title="سجل الرياضيين" icon={Users}>
          <ModuleDataTable
            columns={[
              { key: "name", label: "الاسم واللقب" },
              { key: "number", label: "الرقم الداخلي" },
              { key: "cardNumber", label: "رقم البطاقة" },
              { key: "branch", label: "الفرع" },
              { key: "category", label: "الفئة" },
              {
                key: "activation",
                label: "التفعيل",
                render: (r) => (
                  <StatusBadge status={String(r.activation)} />
                ),
              },
              {
                key: "medical",
                label: "الملف الطبي",
                render: (r) => <StatusBadge status={String(r.medical)} />,
              },
              { key: "attendance", label: "الحضور" },
            ]}
            rows={athletesList}
            searchPlaceholder="بحث بالاسم، الرقم أو الفرع..."
          />
        </ModuleSection>
      )}

      {tab === "team" && (
        <ModuleSection title="رياضيون – رياضات جماعية" icon={Users}>
          <ModuleDataTable
            columns={[
              { key: "name", label: "اللاعب" },
              { key: "branch", label: "الفرع" },
              { key: "category", label: "الفئة" },
              {
                key: "activation",
                label: "البطاقة",
                render: (r) => (
                  <StatusBadge status={String(r.activation)} />
                ),
              },
              { key: "attendance", label: "الحضور" },
            ]}
            rows={teamAthletes}
            searchPlaceholder="بحث عن لاعب..."
          />
        </ModuleSection>
      )}

      {tab === "individual" && (
        <ModuleSection title="رياضيون – رياضات فردية" icon={Users} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "name", label: "الرياضي" },
              { key: "branch", label: "الفرع" },
              { key: "category", label: "الفئة" },
              { key: "gender", label: "الجنس" },
              {
                key: "activation",
                label: "البطاقة",
                render: (r) => (
                  <StatusBadge status={String(r.activation)} />
                ),
              },
            ]}
            rows={individualAthletes}
            searchPlaceholder="بحث عن رياضي..."
          />
        </ModuleSection>
      )}

      {tab === "cards" && (
        <ModuleSection title="البطاقات الرقمية" icon={CreditCard}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {athletesList.slice(0, 6).map((a) => (
              <ModuleDigitalCard
                key={a.number}
                name={a.name}
                branch={a.branch}
                category={a.category}
                cardNumber={a.cardNumber}
                activation={a.activation}
              />
            ))}
          </div>
        </ModuleSection>
      )}

      {tab === "activation" && (
        <ModuleSection title="التفعيل السنوي للبطاقات – 2026" icon={RefreshCw}>
          <ModulePanel className="mb-4">
            <p className="text-sm text-asl-navy/70">
              <span className="font-bold text-asl-orange">16</span> بطاقة في
              انتظار التفعيل. يتم التفعيل بعد مراجعة الوثائق والملف الطبي
              والاشتراك السنوي.
            </p>
          </ModulePanel>
          <ModuleDataTable
            columns={[
              { key: "name", label: "الرياضي" },
              { key: "branch", label: "الفرع" },
              {
                key: "activation",
                label: "الحالة",
                render: (r) => (
                  <StatusBadge status={String(r.activation)} />
                ),
              },
              {
                key: "medical",
                label: "الملف الطبي",
                render: (r) => <StatusBadge status={String(r.medical)} />,
              },
            ]}
            rows={pendingActivation}
            searchPlaceholder="بحث..."
          />
        </ModuleSection>
      )}

      {tab === "attendance" && (
        <ModuleSection title="سجل الحضور" icon={Users} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "name", label: "الرياضي" },
              { key: "branch", label: "الفرع" },
              { key: "attendance", label: "نسبة الحضور" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={athletesList}
            searchPlaceholder="بحث في سجل الحضور..."
          />
        </ModuleSection>
      )}
    </ClubShell>
  );
}
