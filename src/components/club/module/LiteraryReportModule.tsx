"use client";

import { useState } from "react";
import {
  Archive,
  Camera,
  Download,
  FileText,
  FolderOpen,
  Plus,
  Printer,
} from "lucide-react";
import {
  ComparisonBarChart,
  DistributionDonutChart,
  SimpleBarChart,
} from "@/components/charts/ChartStyles";
import { ClubShell } from "@/components/club/ClubShell";
import {
  ModuleAlerts,
  ModuleDataTable,
  ModuleEmptyState,
  ModulePageHeader,
  ModuleSection,
  ModuleStatGrid,
  ModuleTabs,
  StatusBadge,
} from "@/components/club/module/ModuleUI";
import {
  literaryActivities,
  literaryAlerts,
  literaryBranchDistribution,
  literaryMonthlyActivities,
  literaryReports,
  literaryStats,
} from "@/lib/club/modules/extended-mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "reports", label: "التقارير" },
  { id: "activities", label: "النشاطات" },
  { id: "review", label: "المراجعة والاعتماد" },
  { id: "archive", label: "الأرشيف" },
];

const dashboardStats = literaryStats.slice(0, 4);

export function LiteraryReportModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <ClubShell activeNav="literaryReport">
      <ModulePageHeader
        title="التقرير الأدبي — نادي نجوم شباب الكيشين"
        subtitle="إعداد ومراجعة واعتماد التقرير الأدبي السنوي والنشاطات والإنجازات"
        actions={[
          { label: "تقرير جديد", icon: Plus, primary: true },
          { label: "إضافة نشاط", icon: FileText },
          { label: "تقرير صور", icon: Camera },
          { label: "طباعة", icon: Printer },
          { label: "تصدير", icon: Download },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleAlerts alerts={literaryAlerts} />
          <ModuleStatGrid stats={dashboardStats} />

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <ModuleSection
              title="النشاطات الشهرية"
              icon={FileText}
              iconColor="blue"
              className="!mt-0"
            >
              <SimpleBarChart
                data={literaryMonthlyActivities}
                xKey="month"
                yKey="count"
                name="النشاطات"
                color="#1a6fd4"
                height={240}
              />
            </ModuleSection>

            <ModuleSection
              title="توزيع النشاطات حسب الفرع"
              icon={FolderOpen}
              iconColor="orange"
              className="!mt-0"
            >
              <DistributionDonutChart
                data={literaryBranchDistribution}
                total="46"
                totalLabel="نشاط"
                height={200}
                centered
              />
            </ModuleSection>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <ModuleSection title="التقارير الحالية" icon={FileText} iconColor="blue" className="!mt-0">
              <ul className="space-y-3">
                {literaryReports.map((report) => (
                  <li
                    key={report.title}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-asl-blue/30 hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <p className="text-sm font-bold text-asl-navy">{report.title}</p>
                      <StatusBadge status={report.status} />
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      {report.type} · {report.period}
                    </p>
                    <div className="mt-3">
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-slate-500">نسبة الإنجاز</span>
                        <span className="font-bold text-asl-blue">{report.progress}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-asl-blue transition-all"
                          style={{ width: report.progress }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setTab("reports")}
                className="mt-3 text-sm font-semibold text-asl-blue hover:underline"
              >
                عرض كل التقارير ←
              </button>
            </ModuleSection>

            <ModuleSection title="آخر النشاطات" icon={Camera} iconColor="orange" className="!mt-0">
              <ul className="space-y-3">
                {literaryActivities.map((activity) => (
                  <li
                    key={activity.title}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-asl-orange/30 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-asl-orange/15 ring-2 ring-asl-orange/20">
                      <Camera className="h-4 w-4 text-asl-orange" strokeWidth={2.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-asl-navy">{activity.title}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {activity.date} · {activity.branch}
                      </p>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                        <span className="font-medium text-asl-orange">{activity.photos} صورة</span>
                        <StatusBadge status={activity.status} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setTab("activities")}
                className="mt-3 text-sm font-semibold text-asl-orange hover:underline"
              >
                عرض كل النشاطات ←
              </button>
            </ModuleSection>
          </div>
        </>
      )}

      {tab === "reports" && (
        <ModuleSection title="جميع التقارير الأدبية" icon={FileText} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "title", label: "العنوان" },
              { key: "type", label: "النوع" },
              { key: "period", label: "الفترة" },
              { key: "progress", label: "نسبة الإنجاز" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={literaryReports}
          />
        </ModuleSection>
      )}

      {tab === "activities" && (
        <ModuleSection title="النشاطات المدرجة" icon={FolderOpen} iconColor="orange">
          <ModuleDataTable
            columns={[
              { key: "title", label: "النشاط" },
              { key: "date", label: "التاريخ" },
              { key: "branch", label: "الفرع" },
              { key: "photos", label: "عدد الصور" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={literaryActivities}
          />
        </ModuleSection>
      )}

      {tab === "review" && (
        <ModuleSection title="المراجعة والاعتماد" icon={FileText} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "title", label: "التقرير" },
              { key: "progress", label: "الإنجاز" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={literaryReports.filter((r) => r.status !== "معتمد")}
          />
        </ModuleSection>
      )}

      {tab === "archive" && (
        <ModuleEmptyState
          icon={Archive}
          title="أرشيف التقارير"
          description="استعراض التقارير السنوية والفصلية المعتمدة — تصدير PDF أو Word."
        />
      )}
    </ClubShell>
  );
}
