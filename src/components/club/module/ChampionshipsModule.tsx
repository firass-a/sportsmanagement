"use client";

import { useState } from "react";
import {
  Award,
  Calendar,
  ClipboardList,
  Medal,
  Plus,
  Trophy,
  Users,
} from "lucide-react";
import { ClubShell } from "@/components/club/ClubShell";
import {
  CompetitionPlanningTimeline,
  type CompetitionPlan,
} from "@/components/club/module/CompetitionPlanningTimeline";
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
  ChampionshipResultsPodium,
  EventPodiumCard,
  type EventPodium,
} from "@/components/club/module/ChampionshipResultsPodium";
import {
  championshipsAlerts,
  championshipsList,
  championshipsStats,
} from "@/lib/club/modules/extended-mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "all", label: "جميع البطولات" },
  { id: "official", label: "رسمية" },
  { id: "internal", label: "داخلية" },
  { id: "team", label: "رياضات جماعية" },
  { id: "individual", label: "رياضات فردية" },
  { id: "registrations", label: "التسجيلات" },
  { id: "calendar", label: "التقويم" },
  { id: "results", label: "النتائج" },
  { id: "medals", label: "الميداليات" },
  { id: "rosters", label: "القوائم" },
  { id: "reports", label: "التقارير" },
];

const competitionsPlan: CompetitionPlan[] = [
  {
    name: "بطولة ولائية — كرة القدم",
    level: "ولائي",
    branch: "كرة القدم",
    date: "2026-07-12",
    registrationDeadline: "2026-07-08",
    venue: "ملعب الولاية",
    participants: 22,
    roster: "20/22",
    status: "قادمة",
    phase: "تحضير القائمة",
  },
  {
    name: "دوري داخلي — كرة اليد",
    level: "داخلي",
    branch: "كرة اليد",
    date: "2026-07-20",
    registrationDeadline: "2026-07-18",
    venue: "قاعة مغطاة",
    participants: 14,
    roster: "14/14",
    status: "نشطة",
    phase: "مرحلة المباريات",
  },
  {
    name: "كأس النادي — كرة السلة",
    level: "داخلي",
    branch: "كرة السلة",
    date: "2026-07-28",
    registrationDeadline: "2026-07-22",
    venue: "قاعة مغطاة",
    participants: 16,
    roster: "12/16",
    status: "قادمة",
    phase: "التسجيل مفتوح",
  },
  {
    name: "بطولة وطنية — الجودو",
    level: "وطني",
    branch: "الجودو",
    date: "2026-08-05",
    registrationDeadline: "2026-07-25",
    venue: "قاعة الفنون القتالية",
    participants: 8,
    roster: "8/8",
    status: "قادمة",
    phase: "التخطيط",
  },
  {
    name: "بطولة جهوية — السباحة",
    level: "جهوي",
    branch: "السباحة",
    date: "2026-09-10",
    registrationDeadline: "2026-08-30",
    venue: "المسبح الأولمبي",
    participants: 6,
    roster: "4/6",
    status: "قادمة",
    phase: "التخطيط",
  },
];

const eventPodiums: EventPodium[] = [
  {
    event: "بطولة ولائية — الجودو",
    branch: "الجودو",
    date: "2026-06-28",
    placements: [
      { rank: 1, athlete: "محمد أمين", result: "ذهبية" },
      { rank: 2, athlete: "ياسين بوعلام", result: "فضية" },
      { rank: 3, athlete: "رشيد قاسم", result: "برونزية" },
    ],
  },
  {
    event: "بطولة وطنية — الكاراتيه",
    branch: "الكاراتيه",
    date: "2026-05-15",
    placements: [
      { rank: 1, athlete: "أمين حمدي", result: "ذهبية" },
      { rank: 2, athlete: "سارة بن علي", result: "فضية" },
      { rank: 3, athlete: "نور الهدى", result: "برونزية" },
    ],
  },
  {
    event: "سباق 100 م — ألعاب القوى",
    branch: "ألعاب القوى",
    date: "2026-07-05",
    placements: [
      { rank: 1, athlete: "كريم بلحاج", result: "10.82 ث" },
      { rank: 2, athlete: "سامي عراب", result: "10.95 ث" },
      { rank: 3, athlete: "إلياس كريم", result: "11.04 ث" },
    ],
  },
  {
    event: "دوري كرة القدم — فئة الأشبال",
    branch: "كرة القدم",
    date: "2026-06-20",
    placements: [
      { rank: 1, athlete: "فريق الناشئين", result: "6 انتصارات" },
      { rank: 2, athlete: "فريق الأشبال", result: "4 انتصارات" },
      { rank: 3, athlete: "فريق الأرداف", result: "3 انتصارات" },
    ],
  },
];

export function ChampionshipsModule() {
  const [tab, setTab] = useState("dashboard");

  const featuredPodium = eventPodiums[0];
  const otherPodiums = eventPodiums.slice(1, 3);

  return (
    <ClubShell activeNav="championships">
      <ModulePageHeader
        title="البطولات والمسابقات — نادي نجوم شباب الكيشين"
        subtitle="إدارة البطولات والتسجيلات والنتائج والميداليات"
        actions={[
          { label: "بطولة جديدة", icon: Plus, primary: true },
          { label: "تسجيل مشارك", icon: Users },
          { label: "إدخال نتيجة", icon: Medal },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleAlerts alerts={championshipsAlerts} />
          <ModuleStatGrid stats={championshipsStats} />

          <ModuleSection
            title="خطة المنافسات"
            icon={Calendar}
            iconColor="blue"
            className="!mt-4"
          >
            <CompetitionPlanningTimeline
              competitions={competitionsPlan}
              onOpenCalendar={() => setTab("calendar")}
              onViewAll={() => setTab("all")}
            />
          </ModuleSection>

          <ModuleSection
            title="منصة التتويج — آخر النتائج"
            icon={Award}
            iconColor="orange"
            className="!mt-5"
          >
            <EventPodiumCard podium={featuredPodium} compact />

            {otherPodiums.length > 0 && (
              <div className="mt-4">
                <p className="mb-3 text-sm font-semibold text-asl-navy/70">منافسات أخرى</p>
                <ChampionshipResultsPodium podiums={otherPodiums} compact />
              </div>
            )}

            <button
              type="button"
              onClick={() => setTab("results")}
              className="mt-4 text-sm font-semibold text-asl-orange hover:underline"
            >
              عرض كل المنصات والنتائج ←
            </button>
          </ModuleSection>
        </>
      )}

      {["all", "official", "internal", "team", "individual"].includes(tab) && (
        <ModuleSection title="قائمة البطولات" icon={Trophy} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "name", label: "البطولة" },
              { key: "level", label: "المستوى" },
              { key: "branch", label: "الفرع" },
              { key: "date", label: "التاريخ" },
              { key: "participants", label: "المشاركون" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={
              tab === "internal"
                ? championshipsList.filter((c) => c.level === "داخلي")
                : tab === "official"
                  ? championshipsList.filter((c) => c.level !== "داخلي")
                  : championshipsList
            }
          />
        </ModuleSection>
      )}

      {tab === "results" && (
        <ModuleSection title="النتائج ومنصات التتويج" icon={Award} iconColor="orange">
          <ChampionshipResultsPodium podiums={eventPodiums} compact />
        </ModuleSection>
      )}

      {tab === "medals" && (
        <ModuleSection title="الميداليات" icon={Medal} iconColor="blue">
          <ChampionshipResultsPodium podiums={eventPodiums} compact />
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="mb-3 text-sm font-bold text-asl-navy">ملخص الميداليات</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-amber-100 px-4 py-3 text-center">
                <p className="text-2xl font-bold text-amber-700">6</p>
                <p className="text-xs font-semibold text-amber-800">🥇 ذهبية</p>
              </div>
              <div className="rounded-xl bg-slate-200 px-4 py-3 text-center">
                <p className="text-2xl font-bold text-slate-700">5</p>
                <p className="text-xs font-semibold text-slate-800">🥈 فضية</p>
              </div>
              <div className="rounded-xl bg-orange-100 px-4 py-3 text-center">
                <p className="text-2xl font-bold text-orange-700">4</p>
                <p className="text-xs font-semibold text-orange-800">🥉 برونزية</p>
              </div>
            </div>
          </div>
        </ModuleSection>
      )}

      {["registrations", "calendar", "rosters", "reports"].includes(tab) && (
        <ModuleEmptyState
          icon={tab === "calendar" ? Calendar : ClipboardList}
          title={`قسم ${tabs.find((t) => t.id === tab)?.label}`}
          description="إدارة التسجيلات والقوائم وتقارير المشاركة في البطولات."
        />
      )}
    </ClubShell>
  );
}
