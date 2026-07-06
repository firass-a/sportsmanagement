"use client";

import { useState } from "react";
import {
  Archive,
  Award,
  Calendar,
  ClipboardCheck,
  CreditCard,
  Gavel,
  UserPlus,
} from "lucide-react";
import { ClubShell } from "@/components/club/ClubShell";
import { EventTimetable } from "@/components/club/EventTimetable";
import {
  ModuleAlerts,
  ModuleCompactStatRow,
  ModuleDataTable,
  ModuleEmptyState,
  ModulePageHeader,
  ModuleSection,
  ModuleTabs,
  StatusBadge,
} from "@/components/club/module/ModuleUI";
import {
  refereeMissions,
  refereesAlerts,
  refereesList,
} from "@/lib/club/modules/extended-mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "all", label: "جميع الحكام" },
  { id: "branches", label: "حسب الفرع" },
  { id: "assignments", label: "المهمات والتخطيط" },
  { id: "cards", label: "البطاقات" },
  { id: "attendance", label: "الحضور" },
  { id: "evaluations", label: "التقييمات" },
  { id: "training", label: "التكوين" },
  { id: "archive", label: "الأرشيف" },
];

const compactStats = [
  { label: "إجمالي الحكام", value: 18 },
  { label: "نشطون", value: 15, accent: "blue" as const },
  { label: "مهمات هذا الشهر", value: 26, accent: "blue" as const },
  { label: "تحتاج تفعيل", value: 4, accent: "warn" as const },
];

export function RefereesModule() {
  const [tab, setTab] = useState("dashboard");
  const isDashboard = tab === "dashboard";

  return (
    <ClubShell activeNav="referees">
      <ModulePageHeader
        title="الحكام — نادي نجوم شباب الكيشين"
        subtitle="إدارة الحكام والمهمات والبطاقات والتقييمات"
        actions={[
          { label: "حكم جديد", icon: UserPlus, primary: true },
          { label: "مهمة جديدة", icon: Calendar },
          { label: "تقييم", icon: Award },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {isDashboard && (
        <>
          <ModuleAlerts alerts={refereesAlerts} />
          <ModuleCompactStatRow stats={compactStats} />
        </>
      )}

      {tab === "dashboard" && (
        <div className="mt-5">
          <ModuleSection title="الحكام النشطون" icon={Gavel} iconColor="blue">
            <ModuleDataTable
              columns={[
                { key: "name", label: "الاسم" },
                { key: "branch", label: "الفرع" },
                { key: "rank", label: "الرتبة" },
                { key: "missions", label: "المهمات" },
                { key: "rating", label: "التقييم" },
                {
                  key: "status",
                  label: "الحالة",
                  render: (r) => <StatusBadge status={String(r.status)} />,
                },
              ]}
              rows={refereesList}
              searchPlaceholder=""
            />
          </ModuleSection>
        </div>
      )}

      {["all", "branches"].includes(tab) && (
        <ModuleSection title="سجل الحكام" icon={Gavel} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "name", label: "الاسم" },
              { key: "branch", label: "الفرع" },
              { key: "rank", label: "الرتبة" },
              { key: "level", label: "المستوى" },
              { key: "missions", label: "المهمات" },
              { key: "rating", label: "التقييم" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={refereesList}
          />
        </ModuleSection>
      )}

      {tab === "assignments" && (
        <div className="mt-4">
          <EventTimetable
            events={refereeMissions.filter((m) => m.status !== "مكتملة")}
            title="جدول المهمات"
            subtitle="مهمات الحكام مرتبة حسب التاريخ والوقت"
          />
        </div>
      )}

      {tab === "cards" && (
        <ModuleEmptyState
          icon={CreditCard}
          title="بطاقات الحكام"
          description="14 بطاقة مفعلة — 4 تحتاج تفعيلاً سنوياً."
        />
      )}

      {["attendance", "evaluations", "training"].includes(tab) && (
        <ModuleEmptyState
          icon={tab === "evaluations" ? Award : ClipboardCheck}
          title={`قسم ${tabs.find((t) => t.id === tab)?.label}`}
          description="سجل الحضور والتقييمات وبرامج التكوين للحكام."
        />
      )}

      {tab === "archive" && (
        <ModuleEmptyState
          icon={Archive}
          title="أرشيف الحكام"
          description="الحكام السابقون والمهمات المنتهية."
        />
      )}
    </ClubShell>
  );
}
