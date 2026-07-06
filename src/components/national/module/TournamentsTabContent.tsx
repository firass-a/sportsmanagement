"use client";

import {
  Award,
  Calendar,
  ClipboardList,
  FileText,
  ListOrdered,
  Shuffle,
  Trophy,
} from "lucide-react";
import {
  ModuleDataTable,
  ModuleSection,
  StatusBadge,
} from "@/components/club/module/ModuleUI";
import { NationalAdminStats } from "@/components/national/module/NationalAdminStats";
import {
  BottomPanels,
  InfoPanel,
  MiniList,
  ModuleDashboardShell,
} from "@/components/national/module/NationalModuleShared";
import {
  tournamentDraws,
  tournamentRankings,
  tournamentRegistrations,
  tournamentReports,
  tournamentResults,
  tournamentsList,
  tournamentsOngoingSummary,
  tournamentsStats,
  tournamentsUpcomingSummary,
} from "@/lib/national/modules/mock-data";

const statusCol = {
  key: "status",
  label: "الحالة",
  render: (row: Record<string, unknown>) => <StatusBadge status={String(row.status)} />,
};

export function TournamentsTabContent({ tab }: { tab: string }) {
  const all = tournamentsList;
  const ongoing = all.filter((t) => t.status === "جارية");
  const upcoming = all.filter((t) => t.status === "قادمة");
  const finished = all.filter((t) => t.status === "منتهية");
  const incompleteReports = tournamentReports.filter((r) => r.status === "غير مكتمل");

  if (tab === "dashboard") {
    return (
      <ModuleDashboardShell>
        <NationalAdminStats title="مؤشرات البطولات" stats={tournamentsStats} columns={6} />
        <ModuleSection title="البطولات النشطة والقادمة" icon={Trophy} iconColor="orange">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {all.filter((t) => t.status === "جارية" || t.status === "قادمة").map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-asl-orange/30 hover:shadow-md">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-bold text-asl-navy">{t.name}</p>
                  <StatusBadge status={t.status} />
                </div>
                <p className="mt-2 text-xs text-slate-500">{t.level} · {t.date}</p>
                <div className="mt-3 flex gap-3 text-xs font-semibold">
                  <span className="text-asl-blue">{t.clubs} نادي</span>
                  <span className="text-asl-orange">{t.athletes} رياضي</span>
                  <span className="text-slate-500">{t.registration}</span>
                </div>
              </div>
            ))}
          </div>
        </ModuleSection>
        <BottomPanels>
          <InfoPanel icon={Trophy} title="بطولات جارية" iconBg="bg-green-100" iconColor="text-green-600" urgent>
            <p className="text-2xl font-bold text-asl-navy">58</p>
            <p className="mb-2 text-[11px] text-slate-600">12 تسجيل مفتوح</p>
            <MiniList items={tournamentsOngoingSummary.map((t) => ({ label: t.name, value: t.phase }))} />
          </InfoPanel>
          <InfoPanel icon={Calendar} title="بطولات قادمة" iconBg="bg-purple-100" iconColor="text-purple-600">
            <p className="text-2xl font-bold text-asl-navy">24</p>
            <p className="mb-2 text-[11px] text-slate-600">3 بطولات هذا الشهر</p>
            <MiniList items={tournamentsUpcomingSummary.map((t) => ({ label: t.name, value: t.registration }))} />
          </InfoPanel>
          <InfoPanel icon={FileText} title="تقارير غير مكتملة" iconBg="bg-red-100" iconColor="text-red-600" urgent>
            <p className="text-2xl font-bold text-red-600">{incompleteReports.length}</p>
            <p className="mb-2 text-[11px] text-slate-600">يلزم الإنجاز قبل المواعيد</p>
            <MiniList items={incompleteReports.slice(0, 4).map((r) => ({ label: r.tournament, value: r.due }))} />
          </InfoPanel>
          <InfoPanel icon={Trophy} title="المشاركة الوطنية" iconBg="bg-asl-orange/10" iconColor="text-asl-orange">
            <p className="text-2xl font-bold text-asl-navy">842</p>
            <p className="mb-2 text-[11px] text-slate-600">نادي مشارك · 12,480 رياضي</p>
            <MiniList items={tournamentRankings.slice(0, 3).map((r) => ({ label: r.club, value: `${r.points} نقطة` }))} />
          </InfoPanel>
        </BottomPanels>
      </ModuleDashboardShell>
    );
  }

  if (tab === "registration") {
    return (
      <ModuleSection title="تسجيل المشاركين" icon={ClipboardList} iconColor="orange" className="mt-5">
        <ModuleDataTable
          columns={[
            { key: "tournament", label: "البطولة" },
            { key: "club", label: "النادي" },
            { key: "athletes", label: "الرياضيون" },
            { key: "coach", label: "المدرب" },
            { key: "submitted", label: "تاريخ الإرسال" },
            { key: "deadline", label: "آخر موعد" },
            statusCol,
          ]}
          rows={tournamentRegistrations}
          searchPlaceholder="بحث في التسجيلات..."
        />
      </ModuleSection>
    );
  }

  if (tab === "draw") {
    return (
      <ModuleSection title="قرعة البطولات" icon={Shuffle} iconColor="blue" className="mt-5">
        <ModuleDataTable
          columns={[
            { key: "tournament", label: "البطولة" },
            { key: "pool", label: "المجموعة / الدور" },
            { key: "participants", label: "المشاركون" },
            { key: "date", label: "التاريخ" },
            statusCol,
          ]}
          rows={tournamentDraws}
          searchPlaceholder="بحث في القرعات..."
        />
      </ModuleSection>
    );
  }

  if (tab === "results") {
    return (
      <ModuleSection title="نتائج البطولات" icon={Award} iconColor="orange" className="mt-5">
        <ModuleDataTable
          columns={[
            { key: "tournament", label: "البطولة" },
            { key: "category", label: "الفئة" },
            { key: "first", label: "الذهبية" },
            { key: "second", label: "الفضية" },
            { key: "third", label: "البرونزية" },
            { key: "date", label: "التاريخ" },
          ]}
          rows={tournamentResults}
          searchPlaceholder="بحث في النتائج..."
        />
      </ModuleSection>
    );
  }

  if (tab === "ranking") {
    return (
      <ModuleSection title="ترتيب النوادي" icon={ListOrdered} iconColor="blue" className="mt-5">
        <ModuleDataTable
          columns={[
            { key: "rank", label: "الترتيب" },
            { key: "club", label: "النادي" },
            { key: "gold", label: "ذهب" },
            { key: "silver", label: "فضة" },
            { key: "bronze", label: "برونز" },
            { key: "points", label: "النقاط" },
          ]}
          rows={tournamentRankings}
          searchPlaceholder="بحث في الترتيب..."
        />
      </ModuleSection>
    );
  }

  if (tab === "reports") {
    return (
      <ModuleSection title="تقارير البطولات" icon={FileText} iconColor="blue" className="mt-5">
        <ModuleDataTable
          columns={[
            { key: "tournament", label: "البطولة" },
            { key: "type", label: "نوع التقرير" },
            { key: "author", label: "المسؤول" },
            { key: "due", label: "الموعد النهائي" },
            statusCol,
          ]}
          rows={tournamentReports}
          searchPlaceholder="بحث في التقارير..."
        />
      </ModuleSection>
    );
  }

  const rows = tab === "ongoing" ? ongoing : tab === "upcoming" ? upcoming : tab === "finished" ? finished : all;
  const title =
    tab === "ongoing"
      ? "البطولات الجارية"
      : tab === "upcoming"
        ? "البطولات القادمة"
        : tab === "finished"
          ? "البطولات المنتهية"
          : "البطولات";

  return (
    <ModuleSection title={title} icon={Trophy} iconColor="orange" className="mt-5">
      <ModuleDataTable
        columns={[
          { key: "name", label: "البطولة" },
          { key: "level", label: "المستوى" },
          { key: "clubs", label: "النوادي" },
          { key: "athletes", label: "الرياضيون" },
          { key: "date", label: "التاريخ" },
          statusCol,
        ]}
        rows={rows}
        searchPlaceholder="بحث..."
      />
    </ModuleSection>
  );
}
