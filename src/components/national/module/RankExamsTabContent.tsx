"use client";

import { Award, Calendar, ClipboardList, FileText, UserCheck, Users } from "lucide-react";
import {
  ModuleDataTable,
  ModuleSection,
  StatusBadge,
} from "@/components/club/module/ModuleUI";
import { NationalAdminStats } from "@/components/national/module/NationalAdminStats";
import {
  BottomPanels,
  HighlightCard,
  InfoPanel,
  MiniList,
  ModuleDashboardShell,
} from "@/components/national/module/NationalModuleShared";
import { RankExamPlanningTimeline } from "@/components/national/module/RankExamPlanningTimeline";
import {
  examCandidates,
  examCertificates,
  examCommittees,
  examResultsList,
  rankExamsList,
  rankExamsPlans,
  rankExamsStats,
} from "@/lib/national/modules/mock-data";

type TabProps = { tab: string; onTabChange?: (tab: string) => void };

const statusCol = {
  key: "status",
  label: "الحالة",
  render: (row: Record<string, unknown>) => <StatusBadge status={String(row.status)} />,
};

function ExamCard({
  name,
  date,
  candidates,
  rank,
  status,
}: {
  name: string;
  date: string;
  candidates: number;
  rank: string;
  status: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-asl-orange/30 hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-bold text-asl-navy">{name}</p>
        <StatusBadge status={status} />
      </div>
      <p className="mt-2 text-xs text-slate-500">{date} · {rank}</p>
      <p className="mt-2 text-xs font-semibold text-asl-orange">{candidates} مرشح</p>
    </div>
  );
}

export function RankExamsTabContent({ tab, onTabChange }: TabProps) {
  const upcomingPlans = rankExamsPlans.filter((e) => e.status !== "منتهي");

  if (tab === "dashboard") {
    return (
      <ModuleDashboardShell>
        <NationalAdminStats title="مؤشرات الامتحانات" stats={rankExamsStats} columns={6} />

        <ModuleSection title="خطة امتحانات الرتب" icon={Calendar} iconColor="blue">
          <RankExamPlanningTimeline
            exams={rankExamsPlans}
            onViewAll={() => onTabChange?.("upcoming")}
          />
        </ModuleSection>

        <BottomPanels>
          <HighlightCard urgent>
            <p className="text-xs font-bold text-purple-700">التسجيل مفتوح — حزام أصفر (68/86)</p>
            <p className="mt-1 text-[11px] text-slate-600">آخر موعد: 05/09/2026</p>
          </HighlightCard>
          <InfoPanel icon={Award} title="الناجحون" iconBg="bg-green-100" iconColor="text-green-600">
            <p className="text-2xl font-bold text-green-600">1,860</p>
            <MiniList items={[
              { label: "معدل النجاح", value: "78%" },
              { label: "آخر امتحان", value: "تايكواندو" },
            ]} />
          </InfoPanel>
          <InfoPanel icon={FileText} title="الشهادات" iconBg="bg-asl-blue/10" iconColor="text-asl-blue">
            <p className="text-2xl font-bold text-asl-navy">1,820</p>
            <MiniList items={[
              { label: "قيد الطباعة", value: "12" },
              { label: "صادرة", value: "1,808" },
            ]} />
          </InfoPanel>
          <InfoPanel icon={UserCheck} title="اللجان النشطة" iconBg="bg-purple-100" iconColor="text-purple-600">
            <p className="text-2xl font-bold text-asl-navy">2</p>
            <MiniList items={examCommittees.map((c) => ({ label: c.exam.slice(0, 24) + "…", value: c.status }))} />
          </InfoPanel>
        </BottomPanels>
      </ModuleDashboardShell>
    );
  }

  if (tab === "planning") {
    return (
      <ModuleDashboardShell>
        <ModuleSection title="التخطيط والجدولة" icon={Calendar} iconColor="blue">
          <RankExamPlanningTimeline exams={rankExamsPlans} />
        </ModuleSection>

        <ModuleSection title="مراحل التحضير — نظرة عامة" icon={ClipboardList} iconColor="blue">
          <div className="relative space-y-0">
            {upcomingPlans.map((exam, i) => (
              <div key={exam.name} className="relative flex gap-4 pb-8 last:pb-0">
                {i < upcomingPlans.length - 1 && (
                  <div className="absolute bottom-0 start-[11px] top-6 w-0.5 bg-slate-200" />
                )}
                <div className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-asl-orange bg-white">
                  <span className="h-2 w-2 rounded-full bg-asl-orange" />
                </div>
                <div className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold text-asl-navy">{exam.name}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{exam.date} · {exam.wilaya}</p>
                    </div>
                    <StatusBadge status={exam.status} />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-slate-600">
                    <span>التسجيل: {exam.registered}/{exam.capacity}</span>
                    <span>اللجنة: {exam.committeeHead}</span>
                    <span>المرحلة: {exam.phase}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ModuleSection>
      </ModuleDashboardShell>
    );
  }

  if (tab === "candidates") {
    return (
      <ModuleSection title="المرشحون" icon={Users} iconColor="blue" className="mt-5">
        <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {examCandidates.map((c) => (
            <div key={c.name} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <p className="text-sm font-bold text-asl-navy">{c.name}</p>
              <p className="mt-0.5 text-xs text-slate-500">{c.club}</p>
              <p className="mt-1 text-[11px] text-asl-orange">{c.rank}</p>
              <div className="mt-2"><StatusBadge status={c.status} /></div>
            </div>
          ))}
        </div>
        <ModuleDataTable columns={[
          { key: "name", label: "الاسم" }, { key: "exam", label: "الامتحان" },
          { key: "club", label: "النادي" }, { key: "rank", label: "الرتبة المطلوبة" }, statusCol,
        ]} rows={examCandidates} searchPlaceholder="بحث في المرشحين..." />
      </ModuleSection>
    );
  }

  if (tab === "committees") {
    return (
      <ModuleSection title="لجان الامتحانات" icon={UserCheck} iconColor="orange" className="mt-5">
        <div className="mb-5 grid gap-3 sm:grid-cols-2">
          {examCommittees.map((c) => (
            <div key={c.exam} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-bold text-asl-navy">{c.exam}</p>
              <p className="mt-1 text-xs text-slate-500">رئيس اللجنة: {c.head}</p>
              <p className="mt-1 text-xs text-slate-500">{c.members} أعضاء · {c.date}</p>
              <div className="mt-2"><StatusBadge status={c.status} /></div>
            </div>
          ))}
        </div>
        <ModuleDataTable columns={[
          { key: "exam", label: "الامتحان" }, { key: "head", label: "رئيس اللجنة" },
          { key: "members", label: "الأعضاء" }, { key: "date", label: "التاريخ" }, statusCol,
        ]} rows={examCommittees} searchPlaceholder="بحث..." />
      </ModuleSection>
    );
  }

  if (tab === "results") {
    return (
      <ModuleSection title="نتائج الامتحانات" icon={Award} iconColor="orange" className="mt-5">
        <ModuleDataTable columns={[
          { key: "candidate", label: "المرشح" }, { key: "exam", label: "الامتحان" },
          { key: "score", label: "النتيجة" }, { key: "result", label: "الحكم" },
          { key: "date", label: "التاريخ" },
        ]} rows={examResultsList} searchPlaceholder="بحث في النتائج..." />
      </ModuleSection>
    );
  }

  if (tab === "certificates") {
    return (
      <ModuleSection title="الشهادات الصادرة" icon={FileText} iconColor="blue" className="mt-5">
        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          {examCertificates.map((c) => (
            <div key={c.holder} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-bold text-asl-navy">{c.holder}</p>
              <p className="mt-1 text-xs font-semibold text-asl-orange">{c.rank}</p>
              <p className="mt-0.5 text-[11px] text-slate-500">{c.exam}</p>
              <div className="mt-2"><StatusBadge status={c.status} /></div>
            </div>
          ))}
        </div>
        <ModuleDataTable columns={[
          { key: "holder", label: "الحاصل" }, { key: "rank", label: "الرتبة" },
          { key: "exam", label: "الامتحان" }, { key: "issued", label: "تاريخ الإصدار" }, statusCol,
        ]} rows={examCertificates} searchPlaceholder="بحث في الشهادات..." />
      </ModuleSection>
    );
  }

  const rows =
    tab === "upcoming"
      ? rankExamsList.filter((e) => e.status === "قادم" || e.status === "التسجيل مفتوح")
      : tab === "archive"
        ? rankExamsList.filter((e) => e.status === "منتهي")
        : rankExamsList;

  const title = tab === "upcoming" ? "امتحانات قادمة" : tab === "archive" ? "أرشيف الامتحانات" : "امتحانات الرتب";

  return (
    <ModuleSection title={title} icon={Award} iconColor="orange" className="mt-5">
      {tab === "upcoming" && (
        <div className="mb-6">
          <RankExamPlanningTimeline
            exams={rankExamsPlans.filter((e) => e.status !== "منتهي")}
          />
        </div>
      )}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((e) => (
          <ExamCard key={e.name} {...e} />
        ))}
      </div>
    </ModuleSection>
  );
}
