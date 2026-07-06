"use client";

import { ArrowLeftRight, ClipboardList, Shield } from "lucide-react";
import {
  ModuleAlerts,
  ModuleDataTable,
  ModulePanel,
  ModuleSection,
  StatusBadge,
} from "@/components/club/module/ModuleUI";
import { NationalAdminStats } from "@/components/national/module/NationalAdminStats";
import {
  BottomPanels,
  HighlightCard,
  ModuleDashboardShell,
  PanelHeader,
  TaskList,
  TransferPath,
  MiniList,
} from "@/components/national/module/NationalModuleShared";
import {
  transfersAlerts,
  transfersList,
  transfersStats,
  transfersTasks,
} from "@/lib/national/modules/mock-data";

const transferColumns = [
  { key: "athlete", label: "الشخص المعني" },
  {
    key: "path",
    label: "مسار التحويل",
    render: (row: Record<string, unknown>) => (
      <TransferPath from={String(row.from)} to={String(row.to)} />
    ),
  },
  { key: "type", label: "النوع" },
  { key: "date", label: "التاريخ" },
  {
    key: "status",
    label: "الحالة",
    render: (row: Record<string, unknown>) => (
      <StatusBadge status={String(row.status)} />
    ),
  },
];

function filterTransfers(tab: string) {
  if (tab === "pending" || tab === "new") {
    return transfersList.filter((t) => t.status === "قيد المراجعة" || t.status === "ينقص وثائق");
  }
  if (tab === "approved") return transfersList.filter((t) => t.status === "معتمد");
  if (tab === "rejected") return transfersList.filter((t) => t.status === "مرفوض");
  return transfersList;
}

export function TransfersTabContent({ tab }: { tab: string }) {
  const rows = filterTransfers(tab);

  if (tab === "dashboard") {
    return (
      <ModuleDashboardShell>
        <ModuleAlerts alerts={transfersAlerts} />
        <NationalAdminStats title="مؤشرات التحويلات" stats={transfersStats} columns={6} />

        <ModuleSection title="آخر التحويلات" icon={ArrowLeftRight} iconColor="blue">
          <div className="grid gap-3 sm:grid-cols-2">
            {transfersList.slice(0, 6).map((t) => (
              <div key={`${t.athlete}-${t.date}`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-asl-blue/30 hover:shadow-md">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-bold text-asl-navy">{t.athlete}</p>
                  <StatusBadge status={t.status} />
                </div>
                <div className="mt-2">
                  <TransferPath from={t.from} to={t.to} />
                </div>
                <p className="mt-2 text-xs text-slate-500">{t.type} · {t.date}</p>
              </div>
            ))}
          </div>
        </ModuleSection>

        <BottomPanels>
          <ModulePanel className="h-full">
            <PanelHeader icon={ClipboardList} title="مهام التحويلات" iconBg="bg-amber-100" iconColor="text-amber-600" />
            <TaskList tasks={transfersTasks} />
          </ModulePanel>
          <HighlightCard urgent className="h-full">
            <PanelHeader icon={Shield} title="تحويلات عاجلة" iconBg="bg-red-100" iconColor="text-red-600" />
            <ul className="space-y-2">
              {transfersList
                .filter((t) => t.status === "قيد المراجعة" || t.status === "ينقص وثائق")
                .slice(0, 3)
                .map((t) => (
                  <li key={t.athlete} className="rounded-lg bg-white/80 p-2">
                    <p className="text-[11px] font-bold text-asl-navy">{t.athlete}</p>
                    <TransferPath from={t.from} to={t.to} />
                  </li>
                ))}
            </ul>
          </HighlightCard>
          <ModulePanel className="h-full">
            <PanelHeader icon={ArrowLeftRight} title="إحصاء سريع" iconBg="bg-asl-blue/10" iconColor="text-asl-blue" />
            <div className="space-y-2 text-xs">
              <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
                <span className="text-slate-600">معتمدة هذا الموسم</span>
                <span className="font-bold text-green-600">142</span>
              </div>
              <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
                <span className="text-slate-600">قيد الدراسة</span>
                <span className="font-bold text-amber-600">28</span>
              </div>
              <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
                <span className="text-slate-600">مرفوضة</span>
                <span className="font-bold text-red-600">8</span>
              </div>
            </div>
          </ModulePanel>
          <HighlightCard className="h-full">
            <p className="text-xs font-bold text-asl-navy">فترة التحويلات</p>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
              الفترة الصيفية مفتوحة حتى 31/08/2026. يلزم موافقة الناديين والرابطة والاتحادية.
            </p>
          </HighlightCard>
        </BottomPanels>
      </ModuleDashboardShell>
    );
  }

  return (
    <ModuleSection title="سجل التحويلات" icon={ArrowLeftRight} iconColor="blue" className="mt-5">
      <ModuleDataTable columns={transferColumns} rows={rows} searchPlaceholder="بحث..." />
    </ModuleSection>
  );
}
