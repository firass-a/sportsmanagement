"use client";

import { useState } from "react";
import {
  BarChart3,
  Download,
  PieChart,
  Printer,
  Trophy,
  User,
  Users,
} from "lucide-react";
import { ClubShell } from "@/components/club/ClubShell";
import { StatisticsSection } from "@/components/club/StatisticsSection";
import { BranchComparisonPanel } from "@/components/club/module/BranchComparisonPanel";
import {
  ModuleAlerts,
  ModuleEmptyState,
  ModulePageHeader,
  ModuleSection,
  ModuleStatGrid,
  ModuleTabs,
} from "@/components/club/module/ModuleUI";
import {
  branchComparison,
  statisticsAlerts,
  statisticsStats,
} from "@/lib/club/modules/extended-mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "athletes", label: "الرياضيون" },
  { id: "digitalCards", label: "البطاقات الرقمية" },
  { id: "branches", label: "الفروع" },
  { id: "teamSports", label: "الرياضات الجماعية" },
  { id: "individualSports", label: "الرياضات الفردية" },
  { id: "trainings", label: "التدريبات" },
  { id: "coaches", label: "المدربون" },
  { id: "referees", label: "الحكام" },
  { id: "championships", label: "البطولات" },
  { id: "admin", label: "الإدارة" },
  { id: "financial", label: "المالية" },
  { id: "literary", label: "الأدبية" },
  { id: "custom", label: "تقارير مخصصة" },
];

const dashboardStats = statisticsStats.slice(0, 4);

export function StatisticsModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <ClubShell activeNav="statistics">
      <ModulePageHeader
        title="الإحصائيات — نادي نجوم شباب الكيشين"
        subtitle="تحليل شامل للرياضيين والفروع والتدريبات والبطولات والإدارة"
        actions={[
          { label: "تقرير مخصص", icon: BarChart3, primary: true },
          { label: "طباعة", icon: Printer },
          { label: "تصدير", icon: Download },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleStatGrid stats={dashboardStats} />
          <ModuleAlerts alerts={statisticsAlerts} />

          <StatisticsSection embedded showTrendStats={false} />

          <ModuleSection
            title="مقارنة الفروع"
            icon={PieChart}
            iconColor="blue"
            className="!mt-6"
          >
            <BranchComparisonPanel branches={branchComparison} />
          </ModuleSection>
        </>
      )}

      {tab === "branches" && (
        <ModuleSection title="إحصائيات الفروع" icon={Users} iconColor="blue">
          <BranchComparisonPanel branches={branchComparison} />
        </ModuleSection>
      )}

      {["athletes", "digitalCards", "teamSports", "individualSports", "trainings", "coaches", "referees", "championships", "admin", "financial", "literary", "custom"].includes(tab) && (
        <ModuleEmptyState
          icon={tab === "championships" ? Trophy : tab === "athletes" ? User : BarChart3}
          title={`إحصائيات ${tabs.find((t) => t.id === tab)?.label}`}
          description="تقارير ورسوم بيانية تفصيلية حسب القسم — جاهزة للربط مع البيانات."
        />
      )}
    </ClubShell>
  );
}
