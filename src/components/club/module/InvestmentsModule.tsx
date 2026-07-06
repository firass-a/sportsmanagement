"use client";

import { useState } from "react";
import {
  Archive,
  ClipboardList,
  Download,
  FileText,
  Handshake,
  Landmark,
  Plus,
  TrendingUp,
} from "lucide-react";
import {
  ComparisonBarChart,
  DistributionDonutChart,
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
  investmentBudgetTrend,
  investmentFunding,
  investmentProjects,
  investmentProposals,
  investmentStatusDistribution,
  investmentsAlerts,
  investmentsStats,
} from "@/lib/club/modules/extended-mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "all", label: "جميع المشاريع" },
  { id: "proposed", label: "المقترحة" },
  { id: "funding", label: "التمويل" },
  { id: "reports", label: "التقارير" },
  { id: "archive", label: "الأرشيف" },
];

const dashboardStats = investmentsStats.slice(0, 4);

function parseProgress(progress: string) {
  return parseInt(progress.replace("%", ""), 10) || 0;
}

export function InvestmentsModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <ClubShell activeNav="investments">
      <ModulePageHeader
        title="الاستثمارات — نادي نجوم شباب الكيشين"
        subtitle="إدارة مشاريع النادي، المنشآت، التمويل، الإنجاز والمتابعة"
        actions={[
          { label: "مشروع استثماري", icon: Plus, primary: true },
          { label: "دراسة احتياج", icon: ClipboardList },
          { label: "مصدر تمويل", icon: Handshake },
          { label: "تقرير استثماري", icon: FileText },
          { label: "تصدير", icon: Download },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleAlerts alerts={investmentsAlerts} />
          <ModuleStatGrid stats={dashboardStats} />

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <ModuleSection
              title="الميزانية المخططة مقابل المنفقة"
              icon={TrendingUp}
              iconColor="blue"
              className="!mt-0"
            >
              <ComparisonBarChart
                data={investmentBudgetTrend}
                xKey="month"
                series={[
                  { key: "planned", name: "المخطط", color: "#1a6fd4" },
                  { key: "spent", name: "المنفق", color: "#f37021" },
                ]}
                height={240}
                currency
              />
            </ModuleSection>

            <ModuleSection
              title="المشاريع حسب الحالة"
              icon={ClipboardList}
              iconColor="orange"
              className="!mt-0"
            >
              <DistributionDonutChart
                data={investmentStatusDistribution}
                total="12"
                totalLabel="مشروع"
                height={200}
                centered
              />
            </ModuleSection>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <ModuleSection title="المشاريع النشطة" icon={TrendingUp} iconColor="blue" className="!mt-0">
              <ul className="space-y-3">
                {investmentProjects.map((project) => {
                  const pct = parseProgress(project.progress);
                  return (
                    <li
                      key={project.name}
                      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-asl-blue/30 hover:shadow-md"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <p className="text-sm font-bold text-asl-navy">{project.name}</p>
                        <StatusBadge status={project.status} />
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        {project.branch} · {project.type}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-4 text-xs">
                        <span>
                          <span className="text-slate-500">الميزانية: </span>
                          <span className="font-bold text-asl-navy">{project.budget}</span>
                        </span>
                        <span>
                          <span className="text-slate-500">المنفق: </span>
                          <span className="font-bold text-asl-orange">{project.spent}</span>
                        </span>
                      </div>
                      <div className="mt-3">
                        <div className="mb-1 flex justify-between text-xs">
                          <span className="text-slate-500">الإنجاز</span>
                          <span className="font-bold text-asl-blue">{project.progress}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-asl-blue transition-all"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <button
                type="button"
                onClick={() => setTab("all")}
                className="mt-3 text-sm font-semibold text-asl-blue hover:underline"
              >
                عرض كل المشاريع ←
              </button>
            </ModuleSection>

            <ModuleSection title="مصادر التمويل" icon={Landmark} iconColor="orange" className="!mt-0">
              <ul className="space-y-3">
                {investmentFunding.map((fund) => (
                  <li
                    key={`${fund.source}-${fund.project}`}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-asl-orange/30 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-asl-orange/15 ring-2 ring-asl-orange/20">
                      <Handshake className="h-4 w-4 text-asl-orange" strokeWidth={2.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-asl-navy">{fund.source}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{fund.project}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                        <span className="font-bold text-asl-navy">{fund.amount}</span>
                        <span className="text-slate-500">مستلم: {fund.received}</span>
                        <StatusBadge status={fund.status} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setTab("funding")}
                className="mt-3 text-sm font-semibold text-asl-orange hover:underline"
              >
                تفاصيل التمويل ←
              </button>
            </ModuleSection>
          </div>
        </>
      )}

      {tab === "all" && (
        <ModuleSection title="قائمة المشاريع الاستثمارية" icon={TrendingUp} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "name", label: "المشروع" },
              { key: "type", label: "النوع" },
              { key: "branch", label: "الفرع" },
              { key: "budget", label: "الميزانية" },
              { key: "spent", label: "المنفق" },
              { key: "progress", label: "الإنجاز" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={investmentProjects}
          />
        </ModuleSection>
      )}

      {tab === "proposed" && (
        <ModuleSection title="طلبات المشاريع من الفروع" icon={ClipboardList} iconColor="orange">
          <ModuleDataTable
            columns={[
              { key: "title", label: "المشروع" },
              { key: "branch", label: "الفرع" },
              { key: "requester", label: "صاحب الطلب" },
              { key: "cost", label: "التكلفة" },
              { key: "priority", label: "الأولوية" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={investmentProposals}
          />
        </ModuleSection>
      )}

      {tab === "funding" && (
        <ModuleSection title="التمويل والشراكات" icon={Handshake} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "source", label: "الجهة الممولة" },
              { key: "project", label: "المشروع" },
              { key: "type", label: "نوع التمويل" },
              { key: "amount", label: "المبلغ" },
              { key: "received", label: "المستلم" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={investmentFunding}
          />
        </ModuleSection>
      )}

      {tab === "reports" && (
        <ModuleSection title="التقارير والإحصائيات" icon={FileText} iconColor="blue">
          <div className="grid gap-5 lg:grid-cols-2">
            <ComparisonBarChart
              data={investmentBudgetTrend}
              xKey="month"
              series={[
                { key: "planned", name: "المخطط", color: "#1a6fd4" },
                { key: "spent", name: "المنفق", color: "#f37021" },
              ]}
              height={240}
              currency
            />
            <DistributionDonutChart
              data={investmentStatusDistribution}
              total="12"
              totalLabel="مشروع"
              height={200}
              centered
            />
          </div>
        </ModuleSection>
      )}

      {tab === "archive" && (
        <ModuleEmptyState
          icon={Archive}
          title="أرشيف المشاريع"
          description="مشاريع مكتملة، عقود، وثائق PDF وسجل العمليات."
        />
      )}
    </ClubShell>
  );
}
