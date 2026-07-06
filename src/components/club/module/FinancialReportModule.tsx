"use client";

import { useState } from "react";
import {
  Banknote,
  Calculator,
  Download,
  FileText,
  Plus,
  Printer,
  Receipt,
  Wallet,
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
  financialAlerts,
  financialExpenseBreakdown,
  financialExpenses,
  financialIncome,
  financialIncomeBreakdown,
  financialMonthlyTrend,
  financialStats,
} from "@/lib/club/modules/extended-mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "income", label: "الإيرادات" },
  { id: "expenses", label: "المصاريف" },
  { id: "treasury", label: "الخزينة" },
  { id: "reports", label: "التقارير" },
];

const dashboardStats = financialStats.slice(0, 4);

export function FinancialReportModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <ClubShell activeNav="financialReport">
      <ModulePageHeader
        title="التقرير المالي — نادي نجوم شباب الكيشين"
        subtitle="إدارة الإيرادات والمصاريف والاشتراكات والخزينة والميزانية"
        actions={[
          { label: "إيراد جديد", icon: Plus, primary: true },
          { label: "مصروف جديد", icon: Receipt },
          { label: "تقرير مالي", icon: FileText },
          { label: "طباعة", icon: Printer },
          { label: "تصدير", icon: Download },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleAlerts alerts={financialAlerts} />
          <ModuleStatGrid stats={dashboardStats} />

          <ModuleSection
            title="الإيرادات مقابل المصاريف — 2026"
            icon={Calculator}
            iconColor="blue"
            className="!mt-5"
          >
            <ComparisonBarChart
              data={financialMonthlyTrend}
              xKey="month"
              series={[
                { key: "income", name: "الإيرادات", color: "#27AE60" },
                { key: "expenses", name: "المصاريف", color: "#f37021" },
              ]}
              height={260}
              currency
            />
          </ModuleSection>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <ModuleSection
              title="توزيع الإيرادات"
              icon={Banknote}
              iconColor="blue"
              className="!mt-0"
            >
              <DistributionDonutChart
                data={financialIncomeBreakdown}
                total="2.85M"
                totalLabel="دج"
                height={200}
                centered
              />
            </ModuleSection>

            <ModuleSection
              title="توزيع المصاريف"
              icon={Receipt}
              iconColor="orange"
              className="!mt-0"
            >
              <DistributionDonutChart
                data={financialExpenseBreakdown}
                total="2.12M"
                totalLabel="دج"
                height={200}
                centered
              />
            </ModuleSection>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <ModuleSection title="آخر الإيرادات" icon={Banknote} iconColor="blue" className="!mt-0">
              <ul className="space-y-3">
                {financialIncome.map((item) => (
                  <li
                    key={item.number}
                    className="flex items-center justify-between gap-3 rounded-xl border border-green-100 bg-green-50/40 p-4 shadow-sm"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-asl-navy">{item.type}</p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {item.source} · {item.date}
                      </p>
                    </div>
                    <div className="text-left">
                      <p className="text-base font-bold text-green-700">{item.amount}</p>
                      <StatusBadge status={item.status} />
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setTab("income")}
                className="mt-3 text-sm font-semibold text-asl-blue hover:underline"
              >
                سجل الإيرادات الكامل ←
              </button>
            </ModuleSection>

            <ModuleSection title="آخر المصاريف" icon={Receipt} iconColor="orange" className="!mt-0">
              <ul className="space-y-3">
                {financialExpenses.map((item) => (
                  <li
                    key={item.number}
                    className="flex items-center justify-between gap-3 rounded-xl border border-orange-100 bg-orange-50/40 p-4 shadow-sm"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-asl-navy">{item.type}</p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {item.beneficiary} · {item.date}
                      </p>
                    </div>
                    <div className="text-left">
                      <p className="text-base font-bold text-asl-orange">{item.amount}</p>
                      <StatusBadge status={item.status} />
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setTab("expenses")}
                className="mt-3 text-sm font-semibold text-asl-orange hover:underline"
              >
                سجل المصاريف الكامل ←
              </button>
            </ModuleSection>
          </div>
        </>
      )}

      {tab === "income" && (
        <ModuleSection title="سجل الإيرادات" icon={Banknote} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "number", label: "الرقم" },
              { key: "type", label: "النوع" },
              { key: "source", label: "المصدر" },
              { key: "amount", label: "المبلغ" },
              { key: "date", label: "التاريخ" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={financialIncome}
          />
        </ModuleSection>
      )}

      {tab === "expenses" && (
        <ModuleSection title="سجل المصاريف" icon={Receipt} iconColor="orange">
          <ModuleDataTable
            columns={[
              { key: "number", label: "الرقم" },
              { key: "type", label: "النوع" },
              { key: "beneficiary", label: "المستفيد" },
              { key: "amount", label: "المبلغ" },
              { key: "date", label: "التاريخ" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={financialExpenses}
          />
        </ModuleSection>
      )}

      {tab === "treasury" && (
        <ModuleSection title="الخزينة والميزانية" icon={Wallet} iconColor="blue">
          <div className="mb-5 grid gap-4 sm:grid-cols-3">
            {financialStats.slice(0, 3).map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm"
              >
                <p className="text-xs font-semibold text-slate-500">{s.label}</p>
                <p className="mt-2 text-2xl font-bold text-asl-navy">{s.value}</p>
              </div>
            ))}
          </div>
          <ComparisonBarChart
            data={financialMonthlyTrend}
            xKey="month"
            series={[
              { key: "income", name: "الإيرادات", color: "#27AE60" },
              { key: "expenses", name: "المصاريف", color: "#f37021" },
            ]}
            height={240}
            currency
          />
        </ModuleSection>
      )}

      {tab === "reports" && (
        <ModuleEmptyState
          icon={FileText}
          title="التقارير المالية"
          description="تقارير شهرية وسنوية، ميزانية، اشتراكات وتجهيزات — جاهزة للتصدير PDF."
        />
      )}
    </ClubShell>
  );
}
