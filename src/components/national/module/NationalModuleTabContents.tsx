"use client";

import {
  ArrowLeftRight,
  Award,
  Bot,
  Building2,
  Calendar,
  Camera,
  ClipboardList,
  FileText,
  FolderOpen,
  GraduationCap,
  IdCard,
  MapPin,
  Medal,
  Settings,
  Shield,
  Sparkles,
  Trophy,
  UserCheck,
  Users,
  Video,
} from "lucide-react";
import {
  DistributionDonutChart,
  SeasonTrendBarChart,
} from "@/components/charts/ChartStyles";
import {
  AlbumGrid,
  PhotoGrid,
  VideoGrid,
} from "@/components/club/module/MediaGalleryUI";
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
  InfoPanel,
  MiniList,
  ModuleDashboardShell,
  PanelHeader,
  TaskList,
  TransferPath,
} from "@/components/national/module/NationalModuleShared";
import {
  campAttendance,
  campParticipants,
  campReports,
  examCandidates,
  examCertificates,
  examCommittees,
  examResultsList,
  licensesAlerts,
  licensesList,
  licensesStats,
  licensesTasks,
  nationalAlbumStats,
  nationalAlbums,
  nationalGalleryItems,
  nationalLicenseTrend,
  nationalSportDistribution,
  nationalTeamDocuments,
  nationalTeamInternational,
  nationalTeamList,
  nationalTeamResults,
  nationalTeamStaff,
  nationalTeamStats,
  nationalVideoItems,
  officialClubAthletes,
  officialClubBranches,
  officialClubCoaches,
  officialClubDocuments,
  officialClubLicenses,
  officialClubParticipations,
  officialClubReferees,
  officialClubTransfers,
  officialClubsList,
  officialClubsStats,
  rankExamsList,
  rankExamsStats,
  settingsCategories,
  settingsLicenseTemplates,
  settingsRanks,
  settingsSeasons,
  settingsSports,
  settingsStats,
  statisticsInsights,
  statisticsOverviewStats,
  trainingCampsList,
  trainingCampsStats,
  transfersList,
  wilayaActivity,
} from "@/lib/national/modules/mock-data";
import { seasonTrendData } from "@/lib/national/data";

type TabProps = { tab: string };

const statusCol = {
  key: "status",
  label: "الحالة",
  render: (row: Record<string, unknown>) => <StatusBadge status={String(row.status)} />,
};

function LicenseCard({
  name,
  type,
  club,
  number,
  status,
  expiry,
}: {
  name: string;
  type: string;
  club: string;
  number: string;
  status: string;
  expiry: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-asl-orange/30 hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-asl-navy">{name}</p>
          <p className="mt-0.5 text-xs text-slate-500">{type} · {club}</p>
        </div>
        <StatusBadge status={status} />
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
        <span className="font-mono">{number}</span>
        <span>{expiry !== "—" ? `حتى ${expiry}` : "—"}</span>
      </div>
    </div>
  );
}

function ClubCard({
  name,
  wilaya,
  sport,
  athletes,
  status,
}: {
  name: string;
  wilaya: string;
  sport: string;
  athletes: number;
  status: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-asl-blue/30 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-asl-blue/10">
          <Building2 className="h-5 w-5 text-asl-blue" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-asl-navy">{name}</p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
            <MapPin className="h-3 w-3 shrink-0" />
            {wilaya} · {sport}
          </p>
        </div>
        <StatusBadge status={status} />
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-asl-orange">
        <Users className="h-3.5 w-3.5" />
        {athletes} رياضي
      </div>
    </div>
  );
}

function CampCard({
  name,
  place,
  period,
  participants,
  status,
}: {
  name: string;
  place: string;
  period: string;
  participants: number;
  status: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-purple-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-bold text-asl-navy">{name}</p>
        <StatusBadge status={status} />
      </div>
      <p className="mt-2 text-xs text-slate-500">{place} · {period}</p>
      <p className="mt-2 text-xs font-semibold text-purple-600">{participants} مشارك</p>
    </div>
  );
}

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

function AthleteCard({
  name,
  sport,
  category,
  rank,
  status,
}: {
  name: string;
  sport: string;
  category: string;
  rank: string;
  status: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-asl-orange/30 hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-bold text-asl-navy">{name}</p>
          <p className="mt-0.5 text-xs text-slate-500">{sport} · {category}</p>
        </div>
        <StatusBadge status={status} />
      </div>
      <p className="mt-2 text-xs font-semibold text-asl-blue">{rank}</p>
    </div>
  );
}

function WilayaProgressList() {
  const max = Math.max(...wilayaActivity.map((w) => w.licenses));
  return (
    <ul className="space-y-3">
      {wilayaActivity.map((w) => (
        <li key={w.wilaya}>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="font-medium text-asl-navy">{w.wilaya}</span>
            <span className="font-bold text-asl-orange">{w.licenses.toLocaleString()}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-l from-asl-orange to-asl-blue"
              style={{ width: `${(w.licenses / max) * 100}%` }}
            />
          </div>
          <p className="mt-1 text-[10px] text-slate-500">{w.level} · {w.clubs} نادي</p>
        </li>
      ))}
    </ul>
  );
}

export function LicensesTabContent({ tab }: TabProps) {
  const rows =
    tab === "pending"
      ? licensesList.filter((l) => l.status === "قيد المراجعة")
      : tab === "approved"
        ? licensesList.filter((l) => l.status === "معتمدة")
        : tab === "incomplete"
          ? licensesList.filter((l) => l.status === "تحتاج وثائق")
          : licensesList;

  if (tab !== "dashboard" && tab !== "pending" && tab !== "approved" && tab !== "incomplete") {
    return (
      <ModuleSection title="سجل الإجازات" icon={IdCard} iconColor="orange" className="mt-5">
        <ModuleDataTable columns={[
          { key: "name", label: "الاسم" }, { key: "type", label: "النوع" },
          { key: "club", label: "النادي" }, { key: "number", label: "رقم الإجازة" },
          statusCol, { key: "expiry", label: "الانتهاء" },
        ]} rows={rows} searchPlaceholder="بحث..." />
      </ModuleSection>
    );
  }

  if (tab === "dashboard") {
    const pending = licensesList.filter((l) => l.status === "قيد المراجعة" || l.status === "تحتاج وثائق");
    return (
      <ModuleDashboardShell>
        <ModuleAlerts alerts={licensesAlerts} />
        <NationalAdminStats title="مؤشرات الإجازات" stats={licensesStats} columns={6} />
        <div className="grid gap-4 lg:grid-cols-2">
          <ModulePanel>
            <PanelHeader icon={IdCard} title="تطور الإجازات الوطنية" iconBg="bg-asl-orange/10" iconColor="text-asl-orange" />
            <SeasonTrendBarChart data={nationalLicenseTrend} height={220} />
          </ModulePanel>
          <ModulePanel>
            <PanelHeader icon={IdCard} title="توزيع حسب الرياضة" iconBg="bg-asl-blue/10" iconColor="text-asl-blue" />
            <DistributionDonutChart data={nationalSportDistribution} total="45,782" totalLabel="إجمالي" height={180} centered />
          </ModulePanel>
        </div>
        <ModuleSection title="طلبات تحتاج مراجعة" icon={ClipboardList} iconColor="orange">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pending.slice(0, 6).map((l) => (
              <LicenseCard key={l.number} {...l} />
            ))}
          </div>
        </ModuleSection>
        <BottomPanels>
          <InfoPanel icon={IdCard} title="مهام الإجازات" iconBg="bg-amber-100" iconColor="text-amber-600">
            <TaskList tasks={licensesTasks} />
          </InfoPanel>
          <InfoPanel icon={ClipboardList} title="في انتظار المراجعة" iconBg="bg-amber-100" iconColor="text-amber-700" urgent>
            <p className="text-2xl font-bold text-amber-900">312</p>
            <p className="mt-1 text-[11px] text-amber-800">يلزم المعالجة قبل 15/07/2026</p>
            <MiniList items={licensesList.filter((l) => l.status === "قيد المراجعة").slice(0, 3).map((l) => ({ label: l.name, value: l.club }))} />
          </InfoPanel>
          <InfoPanel icon={FileText} title="ملفات ناقصة الوثائق" iconBg="bg-red-100" iconColor="text-red-600">
            <p className="text-2xl font-bold text-asl-navy">89</p>
            <p className="mt-1 text-[11px] text-slate-600">تم إرسال إشعار للنوادي المعنية</p>
            <MiniList items={licensesList.filter((l) => l.status === "تحتاج وثائق").slice(0, 3).map((l) => ({ label: l.name, value: l.type }))} />
          </InfoPanel>
          <InfoPanel icon={IdCard} title="معدل المعالجة" iconBg="bg-green-100" iconColor="text-green-600">
            <p className="text-2xl font-bold text-green-600">94.2%</p>
            <p className="text-xs text-slate-500">هذا الموسم</p>
          </InfoPanel>
        </BottomPanels>
      </ModuleDashboardShell>
    );
  }

  return (
    <ModuleSection title="سجل الإجازات" icon={IdCard} iconColor="orange" className="mt-5">
      <ModuleDataTable columns={[
        { key: "name", label: "الاسم" }, { key: "type", label: "النوع" },
        { key: "club", label: "النادي" }, { key: "number", label: "رقم الإجازة" },
        statusCol, { key: "expiry", label: "الانتهاء" },
      ]} rows={rows} searchPlaceholder="بحث..." />
    </ModuleSection>
  );
}

export function OfficialClubsTabContent({ tab }: TabProps) {
  if (tab === "dashboard") {
    return (
      <ModuleDashboardShell>
        <NationalAdminStats title="مؤشرات النوادي" stats={officialClubsStats} columns={6} />
        <ModuleSection title="النوادي الأكثر نشاطاً" icon={Building2} iconColor="blue">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {officialClubsList.slice(0, 6).map((c) => (
              <ClubCard key={c.name} {...c} />
            ))}
          </div>
        </ModuleSection>
        <BottomPanels>
          <InfoPanel icon={Building2} title="الملف الرسمي" iconBg="bg-asl-blue/10" iconColor="text-asl-blue">
            <p className="mb-2 text-xs leading-relaxed text-slate-600">تتابع الإجازات، التحويلات، البطولات والتربصات — لا إدارة يومية داخلية.</p>
            <MiniList items={[
              { label: "نوادي نشطة", value: "1,248" },
              { label: "فروع معتمدة", value: "3,420" },
              { label: "رياضيون", value: "32,146" },
            ]} />
          </InfoPanel>
          <InfoPanel icon={ClipboardList} title="قيد المراجعة" iconBg="bg-amber-100" iconColor="text-amber-700" urgent>
            <p className="text-2xl font-bold text-amber-900">4</p>
            <p className="mt-1 text-[11px] text-slate-600">نوادي بانتظار اعتماد الملف الرسمي</p>
            <MiniList items={officialClubsList.filter((c) => c.status !== "نشط").map((c) => ({ label: c.name, value: c.wilaya }))} />
          </InfoPanel>
          <InfoPanel icon={Trophy} title="المشاركات الرسمية" iconBg="bg-green-100" iconColor="text-green-600">
            <MiniList items={[
              { label: "بطولات هذا الموسم", value: "58" },
              { label: "تربصات مشاركة", value: "12" },
              { label: "امتحانات رتب", value: "6" },
            ]} />
          </InfoPanel>
          <InfoPanel icon={Building2} title="توزيع جغرافي" iconBg="bg-asl-orange/10" iconColor="text-asl-orange">
            <MiniList items={wilayaActivity.slice(0, 4).map((w) => ({ label: w.wilaya, value: `${w.clubs} نادي` }))} />
          </InfoPanel>
        </BottomPanels>
      </ModuleDashboardShell>
    );
  }

  if (tab === "branches") {
    return (
      <ModuleSection title="الفروع المعتمدة" icon={Building2} iconColor="blue" className="mt-5">
        <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {officialClubBranches.map((b) => (
            <div key={`${b.club}-${b.branch}`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-bold text-asl-navy">{b.branch}</p>
              <p className="mt-1 text-xs text-slate-500">{b.club} · {b.wilaya}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-asl-orange">{b.athletes} رياضي</span>
                <StatusBadge status={b.status} />
              </div>
              <p className="mt-1 text-[11px] text-slate-500">المدرب: {b.coach}</p>
            </div>
          ))}
        </div>
        <ModuleDataTable columns={[
          { key: "club", label: "النادي" }, { key: "branch", label: "الفرع" },
          { key: "wilaya", label: "الولاية" }, { key: "athletes", label: "الرياضيون" },
          { key: "coach", label: "المدرب" }, statusCol,
        ]} rows={officialClubBranches} searchPlaceholder="بحث في الفروع..." />
      </ModuleSection>
    );
  }

  if (tab === "athletes") {
    return (
      <ModuleSection title="الرياضيون المسجلون" icon={Users} iconColor="orange" className="mt-5">
        <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {officialClubAthletes.map((a) => (
            <AthleteCard key={a.name} name={a.name} sport={a.branch} category={a.category} rank={a.license} status={a.status} />
          ))}
        </div>
        <ModuleDataTable columns={[
          { key: "name", label: "الاسم" }, { key: "club", label: "النادي" },
          { key: "branch", label: "الفرع" }, { key: "category", label: "الفئة" },
          { key: "license", label: "رقم الإجازة" }, statusCol,
        ]} rows={officialClubAthletes} searchPlaceholder="بحث في الرياضيين..." />
      </ModuleSection>
    );
  }

  if (tab === "coaches") {
    return (
      <ModuleSection title="المدربون المعتمدون" icon={UserCheck} iconColor="blue" className="mt-5">
        <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {officialClubCoaches.map((c) => (
            <div key={c.license} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-asl-blue/30 hover:shadow-md">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-bold text-asl-navy">{c.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{c.club}</p>
                  <p className="text-xs text-slate-500">{c.branch} · {c.diploma}</p>
                </div>
                <StatusBadge status={c.status} />
              </div>
              <p className="mt-2 font-mono text-[11px] text-slate-500">{c.license}</p>
            </div>
          ))}
        </div>
        <ModuleDataTable columns={[
          { key: "name", label: "الاسم" }, { key: "club", label: "النادي" },
          { key: "branch", label: "الفرع" }, { key: "diploma", label: "الشهادة" },
          { key: "license", label: "رقم الإجازة" }, statusCol,
        ]} rows={officialClubCoaches} searchPlaceholder="بحث في المدربين..." />
      </ModuleSection>
    );
  }

  if (tab === "referees") {
    return (
      <ModuleSection title="الحكام المعتمدون" icon={Shield} iconColor="orange" className="mt-5">
        <ModuleDataTable columns={[
          { key: "name", label: "الاسم" }, { key: "club", label: "النادي" },
          { key: "branch", label: "الاختصاص" }, { key: "level", label: "المستوى" },
          { key: "missions", label: "المهمات" }, { key: "license", label: "رقم الإجازة" }, statusCol,
        ]} rows={officialClubReferees} searchPlaceholder="بحث في الحكام..." />
      </ModuleSection>
    );
  }

  if (tab === "licenses") {
    return (
      <ModuleSection title="إجازات النادي الرسمية" icon={IdCard} iconColor="orange" className="mt-5">
        <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {officialClubLicenses.map((l) => (
            <LicenseCard key={l.number} name={l.holder} type={l.type} club={l.club} number={l.number} status={l.status} expiry={l.expiry} />
          ))}
        </div>
        <ModuleDataTable columns={[
          { key: "holder", label: "صاحب الإجازة" }, { key: "type", label: "النوع" },
          { key: "club", label: "النادي" }, { key: "number", label: "رقم الإجازة" },
          { key: "expiry", label: "الانتهاء" }, statusCol,
        ]} rows={officialClubLicenses} searchPlaceholder="بحث في الإجازات..." />
      </ModuleSection>
    );
  }

  if (tab === "transfers") {
    return (
      <ModuleSection title="تحويلات النادي" icon={ArrowLeftRight} iconColor="blue" className="mt-5">
        <div className="mb-5 grid gap-3 sm:grid-cols-2">
          {officialClubTransfers.map((t) => (
            <div key={`${t.athlete}-${t.date}`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-bold text-asl-navy">{t.athlete}</p>
                <StatusBadge status={t.status} />
              </div>
              <div className="mt-2"><TransferPath from={t.from} to={t.to} /></div>
              <p className="mt-2 text-xs text-slate-500">{t.type} · {t.date}</p>
            </div>
          ))}
        </div>
        <ModuleDataTable columns={[
          { key: "athlete", label: "الرياضي" },
          { key: "from", label: "من" }, { key: "to", label: "إلى" },
          { key: "type", label: "النوع" }, { key: "date", label: "التاريخ" }, statusCol,
        ]} rows={officialClubTransfers} searchPlaceholder="بحث في التحويلات..." />
      </ModuleSection>
    );
  }

  if (tab === "participations") {
    return (
      <ModuleSection title="المشاركات الرسمية" icon={Trophy} iconColor="orange" className="mt-5">
        <ModuleDataTable columns={[
          { key: "club", label: "النادي" }, { key: "tournament", label: "البطولة" },
          { key: "athletes", label: "الرياضيون" }, { key: "coach", label: "المدرب" },
          { key: "date", label: "التاريخ" }, statusCol,
        ]} rows={officialClubParticipations} searchPlaceholder="بحث في المشاركات..." />
      </ModuleSection>
    );
  }

  if (tab === "documents") {
    return (
      <ModuleSection title="الوثائق والقوانين" icon={FileText} iconColor="blue" className="mt-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {officialClubDocuments.map((d) => (
            <div key={d.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-asl-blue/30 hover:shadow-md">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-bold text-asl-navy">{d.title}</p>
                <StatusBadge status={d.status} />
              </div>
              <p className="mt-2 text-xs text-slate-500">{d.type} · {d.version}</p>
              <p className="mt-1 text-[11px] text-slate-400">{d.date}</p>
            </div>
          ))}
        </div>
      </ModuleSection>
    );
  }

  return (
    <ModuleSection title="النوادي الرسمية" icon={Building2} iconColor="orange" className="mt-5">
      <ModuleDataTable columns={[
        { key: "name", label: "النادي" }, { key: "wilaya", label: "الولاية" },
        { key: "sport", label: "الاختصاص" }, { key: "athletes", label: "الرياضيون" }, statusCol,
      ]} rows={officialClubsList} searchPlaceholder="بحث..." />
    </ModuleSection>
  );
}

export { TournamentsTabContent } from "@/components/national/module/TournamentsTabContent";

export function TrainingCampsTabContent({ tab }: TabProps) {
  if (tab === "dashboard") {
    return (
      <ModuleDashboardShell>
        <NationalAdminStats title="مؤشرات التربصات" stats={trainingCampsStats} columns={6} />
        <ModuleSection title="التربصات الحالية والقادمة" icon={GraduationCap} iconColor="blue">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trainingCampsList.map((t) => (
              <CampCard key={t.name} {...t} />
            ))}
          </div>
        </ModuleSection>
        <BottomPanels>
          <InfoPanel icon={Calendar} title="تربصات قادمة" iconBg="bg-purple-100" iconColor="text-purple-600">
            <p className="text-2xl font-bold text-asl-navy">8</p>
            <MiniList items={trainingCampsList.filter((t) => t.status === "قادم").map((t) => ({ label: t.name, value: t.period }))} />
          </InfoPanel>
          <InfoPanel icon={GraduationCap} title="جارية الآن" iconBg="bg-green-100" iconColor="text-green-600" urgent>
            <p className="text-2xl font-bold text-green-700">3</p>
            <MiniList items={trainingCampsList.filter((t) => t.status === "جاري").map((t) => ({ label: t.name, value: t.place }))} />
          </InfoPanel>
          <InfoPanel icon={GraduationCap} title="المشاركون" iconBg="bg-asl-blue/10" iconColor="text-asl-blue">
            <p className="text-2xl font-bold text-asl-navy">1,240</p>
          </InfoPanel>
          <InfoPanel icon={FileText} title="تقارير معلقة" iconBg="bg-amber-100" iconColor="text-amber-700" urgent>
            <p className="text-2xl font-bold text-amber-900">4</p>
          </InfoPanel>
        </BottomPanels>
      </ModuleDashboardShell>
    );
  }

  if (tab === "participants") {
    return (
      <ModuleSection title="المشاركون في التربصات" icon={Users} iconColor="blue" className="mt-5">
        <ModuleDataTable columns={[
          { key: "name", label: "الاسم" }, { key: "camp", label: "التربص" },
          { key: "club", label: "النادي" }, { key: "role", label: "الصفة" }, statusCol,
        ]} rows={campParticipants} searchPlaceholder="بحث في المشاركين..." />
      </ModuleSection>
    );
  }

  if (tab === "attendance") {
    return (
      <ModuleSection title="سجل الحضور" icon={ClipboardList} iconColor="orange" className="mt-5">
        <ModuleDataTable columns={[
          { key: "camp", label: "التربص" }, { key: "date", label: "التاريخ" },
          { key: "present", label: "حاضر" }, { key: "absent", label: "غائب" },
          { key: "rate", label: "نسبة الحضور" },
        ]} rows={campAttendance} searchPlaceholder="بحث..." />
      </ModuleSection>
    );
  }

  if (tab === "reports") {
    return (
      <ModuleSection title="تقارير التربصات" icon={FileText} iconColor="blue" className="mt-5">
        <ModuleDataTable columns={[
          { key: "camp", label: "التربص" }, { key: "author", label: "المسؤول" },
          { key: "due", label: "الموعد النهائي" }, statusCol,
        ]} rows={campReports} searchPlaceholder="بحث في التقارير..." />
      </ModuleSection>
    );
  }

  const rows =
    tab === "ongoing" ? trainingCampsList.filter((t) => t.status === "جاري")
      : tab === "upcoming" ? trainingCampsList.filter((t) => t.status === "قادم")
        : tab === "finished" ? trainingCampsList.filter((t) => t.status === "منتهي")
          : trainingCampsList;

  const title =
    tab === "ongoing" ? "التربصات الجارية"
      : tab === "upcoming" ? "التربصات القادمة"
        : tab === "finished" ? "التربصات المنتهية"
          : "التربصات";

  return (
    <ModuleSection title={title} icon={GraduationCap} iconColor="blue" className="mt-5">
      <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((t) => (
          <CampCard key={t.name} {...t} />
        ))}
      </div>
      <ModuleDataTable columns={[
        { key: "name", label: "التربص" }, { key: "place", label: "المكان" },
        { key: "period", label: "الفترة" }, { key: "participants", label: "المشاركون" }, statusCol,
      ]} rows={rows} searchPlaceholder="بحث..." />
    </ModuleSection>
  );
}

export { RankExamsTabContent } from "@/components/national/module/RankExamsTabContent";

export function NationalTeamTabContent({ tab }: TabProps) {
  if (tab === "dashboard") {
    return (
      <ModuleDashboardShell>
        <NationalAdminStats title="مؤشرات الفريق الوطني" stats={nationalTeamStats} columns={6} />
        <ModuleSection title="الرياضيون المستدعون والمرشحون" icon={Medal} iconColor="orange">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {nationalTeamList.map((a) => (
              <AthleteCard key={a.name} {...a} />
            ))}
          </div>
        </ModuleSection>
        <BottomPanels>
          <HighlightCard><p className="text-xs font-bold text-asl-navy">86 في القائمة الموسعة</p></HighlightCard>
          <HighlightCard urgent><p className="text-xs font-bold text-asl-orange">24 مستدعون للتربص القادم</p></HighlightCard>
          <ModulePanel><PanelHeader icon={Medal} title="منافسات دولية" iconBg="bg-asl-blue/10" iconColor="text-asl-blue" /><p className="text-2xl font-bold text-asl-navy">5</p></ModulePanel>
          <ModulePanel><PanelHeader icon={Medal} title="ميداليات" iconBg="bg-amber-100" iconColor="text-amber-600" /><p className="text-2xl font-bold text-amber-600">18</p></ModulePanel>
        </BottomPanels>
      </ModuleDashboardShell>
    );
  }

  if (tab === "called") {
    const called = nationalTeamList.filter((a) => a.status === "مستدعى");
    return (
      <ModuleSection title="المستدعون" icon={Medal} iconColor="orange" className="mt-5">
        <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {called.map((a) => (
            <AthleteCard key={a.name} {...a} />
          ))}
        </div>
        <ModuleDataTable columns={[
          { key: "name", label: "الاسم" }, { key: "sport", label: "الرياضة" },
          { key: "category", label: "الفئة" }, { key: "rank", label: "الرتبة" }, statusCol,
        ]} rows={called} searchPlaceholder="بحث..." />
      </ModuleSection>
    );
  }

  if (tab === "staff") {
    return (
      <ModuleSection title="الطاقم الفني" icon={UserCheck} iconColor="blue" className="mt-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {nationalTeamStaff.map((s) => (
            <div key={s.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-bold text-asl-navy">{s.name}</p>
              <p className="mt-1 text-xs text-slate-500">{s.role} · {s.sport}</p>
              <div className="mt-2"><StatusBadge status={s.status} /></div>
            </div>
          ))}
        </div>
      </ModuleSection>
    );
  }

  if (tab === "camps") {
    const nationalCamps = trainingCampsList.filter(
      (t) => t.name.includes("\u0625\u0639\u062f\u0627\u062f") || t.name.includes("\u0648\u0637\u0646\u064a")
    );
    return (
      <ModuleSection title="التربصات الوطنية" icon={GraduationCap} iconColor="blue" className="mt-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(nationalCamps.length > 0 ? nationalCamps : trainingCampsList.slice(0, 3)).map((t) => (
            <CampCard key={t.name} {...t} />
          ))}
        </div>
      </ModuleSection>
    );
  }

  if (tab === "international") {
    return (
      <ModuleSection title="المنافسات الدولية" icon={Trophy} iconColor="orange" className="mt-5">
        <ModuleDataTable columns={[
          { key: "event", label: "المنافسة" }, { key: "place", label: "المكان" },
          { key: "date", label: "التاريخ" }, { key: "athletes", label: "الرياضيون" }, statusCol,
        ]} rows={nationalTeamInternational} searchPlaceholder="بحث..." />
      </ModuleSection>
    );
  }

  if (tab === "results") {
    return (
      <ModuleSection title="النتائج والإنجازات" icon={Medal} iconColor="orange" className="mt-5">
        <ModuleDataTable columns={[
          { key: "event", label: "المنافسة" }, { key: "athlete", label: "الرياضي" },
          { key: "medal", label: "الميدالية" }, { key: "category", label: "الفئة" },
          { key: "date", label: "التاريخ" },
        ]} rows={nationalTeamResults} searchPlaceholder="بحث..." />
      </ModuleSection>
    );
  }

  if (tab === "documents") {
    return (
      <ModuleSection title="الملفات الرسمية" icon={FileText} iconColor="blue" className="mt-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {nationalTeamDocuments.map((d) => (
            <div key={d.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-bold text-asl-navy">{d.title}</p>
              <p className="mt-1 text-xs text-slate-500">{d.type} · {d.date}</p>
              <div className="mt-2"><StatusBadge status={d.status} /></div>
            </div>
          ))}
        </div>
      </ModuleSection>
    );
  }

  return (
    <ModuleSection title="القائمة الموسعة" icon={Medal} iconColor="orange" className="mt-5">
      <ModuleDataTable columns={[
        { key: "name", label: "الاسم" }, { key: "sport", label: "الرياضة" },
        { key: "category", label: "الفئة" }, { key: "rank", label: "الرتبة" }, statusCol,
      ]} rows={nationalTeamList} searchPlaceholder="بحث..." />
    </ModuleSection>
  );
}

export function StatisticsTabContent({ tab }: TabProps) {
  if (tab === "licenses") {
    return (
      <ModuleDashboardShell>
        <NationalAdminStats title="إحصائيات الإجازات" stats={licensesStats.slice(0, 4)} columns={6} />
        <div className="grid gap-4 lg:grid-cols-2">
          <ModulePanel>
            <PanelHeader icon={IdCard} title="تطور الإجازات" iconBg="bg-asl-orange/10" iconColor="text-asl-orange" />
            <SeasonTrendBarChart data={nationalLicenseTrend} height={240} />
          </ModulePanel>
          <ModulePanel>
            <PanelHeader icon={IdCard} title="توزيع حسب الرياضة" iconBg="bg-asl-blue/10" iconColor="text-asl-blue" />
            <DistributionDonutChart data={nationalSportDistribution} total="45,782" totalLabel="إجمالي" height={200} centered />
          </ModulePanel>
        </div>
      </ModuleDashboardShell>
    );
  }

  if (tab === "athletes") {
    return (
      <ModuleDashboardShell>
        <NationalAdminStats title="إحصائيات الرياضيين" stats={[
          { label: "الرياضيون المسجلون", value: "32,146" },
          { label: "النوادي النشطة", value: "1,248" },
          { label: "الفروع المعتمدة", value: "3,420" },
          { label: "متوسط الرياضيين/نادي", value: 26 },
        ]} columns={6} />
        <ModulePanel>
          <PanelHeader icon={Users} title="نشاط الولايات — عدد الرياضيين" iconBg="bg-asl-blue/10" iconColor="text-asl-blue" />
          <WilayaProgressList />
        </ModulePanel>
      </ModuleDashboardShell>
    );
  }

  if (tab === "tournaments") {
    return (
      <ModuleDashboardShell>
        <NationalAdminStats title="إحصائيات البطولات" stats={[
          { label: "البطولات الجارية", value: 58 },
          { label: "التسجيل مفتوح", value: 12 },
          { label: "النوادي المشاركة", value: 842 },
          { label: "الرياضيون المسجلون", value: "12,480" },
        ]} columns={6} />
        <ModulePanel>
          <PanelHeader icon={Trophy} title="تطور المشاركة" iconBg="bg-asl-orange/10" iconColor="text-asl-orange" />
          <SeasonTrendBarChart data={seasonTrendData} height={240} />
        </ModulePanel>
      </ModuleDashboardShell>
    );
  }

  if (tab === "transfers") {
    return (
      <ModuleDashboardShell>
        <NationalAdminStats title="إحصائيات التحويلات" stats={[
          { label: "معتمدة", value: 142 },
          { label: "قيد الدراسة", value: 28 },
          { label: "مرفوضة", value: 8 },
          { label: "طلبات جديدة", value: 38 },
        ]} columns={6} />
        <ModuleSection title="آخر التحويلات" icon={ArrowLeftRight} iconColor="blue">
          <div className="grid gap-3 sm:grid-cols-2">
            {transfersList.slice(0, 4).map((t) => (
              <div key={`${t.athlete}-${t.date}`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-bold text-asl-navy">{t.athlete}</p>
                  <StatusBadge status={t.status} />
                </div>
                <div className="mt-2"><TransferPath from={t.from} to={t.to} /></div>
              </div>
            ))}
          </div>
        </ModuleSection>
      </ModuleDashboardShell>
    );
  }

  if (tab === "ai") {
    return (
      <ModuleDashboardShell>
        <ModuleSection title="رؤى الذكاء الاصطناعي" icon={Bot} iconColor="blue">
          <div className="grid gap-3 sm:grid-cols-2">
            {statisticsInsights.map((insight, i) => (
              <HighlightCard key={insight} urgent={i === 0}>
                <p className="text-sm text-asl-navy">{insight}</p>
              </HighlightCard>
            ))}
          </div>
        </ModuleSection>
      </ModuleDashboardShell>
    );
  }

  return (
    <ModuleDashboardShell>
      <NationalAdminStats title="نظرة عامة" stats={statisticsOverviewStats} columns={6} />
      <div className="grid gap-4 lg:grid-cols-2">
        <ModulePanel>
          <PanelHeader icon={Sparkles} title="تطور التسجيل" iconBg="bg-asl-orange/10" iconColor="text-asl-orange" />
          <SeasonTrendBarChart data={seasonTrendData} height={240} />
        </ModulePanel>
        <ModulePanel>
          <PanelHeader icon={Sparkles} title="نشاط الولايات" iconBg="bg-asl-blue/10" iconColor="text-asl-blue" />
          <WilayaProgressList />
        </ModulePanel>
      </div>
    </ModuleDashboardShell>
  );
}

export function SettingsTabContent({ tab }: TabProps) {
  const configCards = [
    { label: "الفئات العمرية", value: "7", icon: Users, color: "text-asl-blue", bg: "bg-asl-blue/10" },
    { label: "الرتب المعتمدة", value: "24", icon: Award, color: "text-asl-orange", bg: "bg-asl-orange/10" },
    { label: "الاختصاصات", value: "26", icon: Trophy, color: "text-green-600", bg: "bg-green-100" },
    { label: "نماذج الإجازات", value: "6", icon: IdCard, color: "text-purple-600", bg: "bg-purple-100" },
  ];

  if (tab === "dashboard") {
    return (
      <ModuleDashboardShell>
        <NationalAdminStats title="إعدادات النظام" stats={settingsStats} columns={6} />
        <ModuleSection title="المواسم الرياضية" icon={Calendar} iconColor="blue">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {settingsSeasons.map((s) => (
              <div key={s.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-bold text-asl-navy">{s.name}</p>
                  <StatusBadge status={s.status} />
                </div>
                <p className="mt-2 text-xs text-slate-500">{s.start} — {s.end}</p>
              </div>
            ))}
          </div>
        </ModuleSection>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {configCards.map((c) => (
            <div key={c.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${c.bg}`}>
                <c.icon className={`h-4 w-4 ${c.color}`} />
              </div>
              <p className="text-2xl font-bold text-asl-navy">{c.value}</p>
              <p className="mt-1 text-xs text-slate-500">{c.label}</p>
            </div>
          ))}
        </div>
      </ModuleDashboardShell>
    );
  }

  if (tab === "seasons") {
    return (
      <ModuleSection title="المواسم الرياضية" icon={Calendar} iconColor="blue" className="mt-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {settingsSeasons.map((s) => (
            <div key={s.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-bold text-asl-navy">{s.name}</p>
                <StatusBadge status={s.status} />
              </div>
              <p className="mt-2 text-xs text-slate-500">{s.start} — {s.end}</p>
            </div>
          ))}
        </div>
      </ModuleSection>
    );
  }

  if (tab === "categories") {
    return (
      <ModuleSection title="الفئات العمرية" icon={Users} iconColor="blue" className="mt-5">
        <ModuleDataTable columns={[
          { key: "name", label: "الفئة" }, { key: "ageMin", label: "من" },
          { key: "ageMax", label: "إلى" }, statusCol,
        ]} rows={settingsCategories} searchPlaceholder="" />
      </ModuleSection>
    );
  }

  if (tab === "ranks") {
    return (
      <ModuleSection title="الرتب والأحزمة" icon={Award} iconColor="orange" className="mt-5">
        <ModuleDataTable columns={[
          { key: "sport", label: "الاختصاص" }, { key: "ranks", label: "عدد الرتب" },
          { key: "highest", label: "أعلى رتبة" }, statusCol,
        ]} rows={settingsRanks} searchPlaceholder="" />
      </ModuleSection>
    );
  }

  if (tab === "sports") {
    return (
      <ModuleSection title="الاختصاصات الرياضية" icon={Trophy} iconColor="orange" className="mt-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {settingsSports.map((s) => (
            <div key={s.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-bold text-asl-navy">{s.name}</p>
              <p className="mt-1 text-xs text-slate-500">{s.type} · {s.clubs} نادي</p>
              <div className="mt-2"><StatusBadge status={s.status} /></div>
            </div>
          ))}
        </div>
      </ModuleSection>
    );
  }

  if (tab === "licenses") {
    return (
      <ModuleSection title="نماذج الإجازات" icon={IdCard} iconColor="orange" className="mt-5">
        <ModuleDataTable columns={[
          { key: "name", label: "النموذج" }, { key: "version", label: "الإصدار" },
          { key: "fields", label: "الحقول" }, statusCol,
        ]} rows={settingsLicenseTemplates} searchPlaceholder="" />
      </ModuleSection>
    );
  }

  if (tab === "permissions") {
    const roles = [
      { role: "مدير الاتحادية", users: 3, scope: "كامل", status: "نشط" },
      { role: "مسؤول الرابطة", users: 48, scope: "ولائي", status: "نشط" },
      { role: "مسؤول النادي", users: 1248, scope: "نادي", status: "نشط" },
      { role: "مراجع الإجازات", users: 12, scope: "وطني", status: "نشط" },
    ];
    return (
      <ModuleSection title="الصلاحيات والأدوار" icon={Shield} iconColor="blue" className="mt-5">
        <div className="grid gap-3 sm:grid-cols-2">
          {roles.map((r) => (
            <div key={r.role} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-bold text-asl-navy">{r.role}</p>
              <p className="mt-1 text-xs text-slate-500">{r.users} مستخدم · {r.scope}</p>
              <div className="mt-2"><StatusBadge status={r.status} /></div>
            </div>
          ))}
        </div>
      </ModuleSection>
    );
  }

  if (tab === "audit") {
    const logs = [
      { action: "تحديث لائحة الإجازات", user: "محمد الأمين بن صالح", date: "04/07/2026", status: "منجز" },
      { action: "اعتماد موسم 2026/2027", user: "فاطمة زهراوي", date: "01/09/2026", status: "منجز" },
      { action: "تعديل فئة عمرية", user: "كريم بوعزة", date: "28/06/2026", status: "منجز" },
    ];
    return (
      <ModuleSection title="سجل العمليات" icon={ClipboardList} iconColor="orange" className="mt-5">
        <ModuleDataTable columns={[
          { key: "action", label: "العملية" }, { key: "user", label: "المستخدم" },
          { key: "date", label: "التاريخ" }, statusCol,
        ]} rows={logs} searchPlaceholder="بحث..." />
      </ModuleSection>
    );
  }

  return null;
}

export function AlbumTabContent({ tab }: TabProps) {
  const tournamentAlbums = nationalAlbums.filter((a) => a.type === "بطولة");
  const campAlbums = nationalAlbums.filter((a) => a.type === "تربص");
  const examAlbums = nationalAlbums.filter((a) => a.type === "امتحان");

  if (tab === "dashboard") {
    return (
      <ModuleDashboardShell>
        <NationalAdminStats title="مؤشرات الألبوم" stats={nationalAlbumStats} columns={6} />
        <ModuleSection title="آخر الألبومات" icon={FolderOpen} iconColor="blue">
          <AlbumGrid albums={nationalAlbums.slice(0, 3)} />
        </ModuleSection>
        <ModuleSection title="معرض الصور الأخيرة" icon={Camera} iconColor="orange">
          <PhotoGrid items={nationalGalleryItems.slice(0, 8)} />
        </ModuleSection>
        <ModuleSection title="آخر الفيديوهات" icon={Video} iconColor="blue">
          <VideoGrid items={nationalVideoItems.slice(0, 3)} />
        </ModuleSection>
      </ModuleDashboardShell>
    );
  }

  if (tab === "albums") {
    return (
      <ModuleSection title="جميع الألبومات" icon={FolderOpen} iconColor="blue" className="mt-5">
        <AlbumGrid albums={nationalAlbums} />
      </ModuleSection>
    );
  }

  if (tab === "photos") {
    return (
      <ModuleSection title="معرض الصور" icon={Camera} iconColor="orange" className="mt-5">
        <p className="mb-4 text-sm text-slate-500">
          {nationalGalleryItems.length} صورة موثقة للبطولات والتربصات والتتويجات الوطنية
        </p>
        <PhotoGrid items={nationalGalleryItems} />
      </ModuleSection>
    );
  }

  if (tab === "videos") {
    return (
      <ModuleSection title="معرض الفيديو" icon={Video} iconColor="blue" className="mt-5">
        <p className="mb-4 text-sm text-slate-500">
          {nationalVideoItems.length} فيديو موثق للبطولات والتربصات والمناسبات الرسمية
        </p>
        <VideoGrid items={nationalVideoItems} />
      </ModuleSection>
    );
  }

  if (tab === "tournaments") {
    return (
      <ModuleSection title="ألبومات البطولات" icon={Trophy} iconColor="orange" className="mt-5">
        <AlbumGrid albums={tournamentAlbums} />
      </ModuleSection>
    );
  }

  if (tab === "camps") {
    return (
      <ModuleSection title="ألبومات التربصات" icon={GraduationCap} iconColor="blue" className="mt-5">
        <AlbumGrid albums={campAlbums.length > 0 ? campAlbums : nationalAlbums.filter((a) => a.name.includes("تربص"))} />
      </ModuleSection>
    );
  }

  if (tab === "exams") {
    return (
      <ModuleSection title="ألبومات امتحانات الرتب" icon={Award} iconColor="orange" className="mt-5">
        <AlbumGrid albums={examAlbums} />
      </ModuleSection>
    );
  }

  if (tab === "nationalTeam") {
    return (
      <ModuleSection title="الفريق الوطني" icon={Medal} iconColor="orange" className="mt-5">
        <AlbumGrid albums={nationalAlbums.filter((a) => a.name.includes("تتويج") || a.name.includes("الفريق"))} />
        <div className="mt-5">
          <PhotoGrid items={nationalGalleryItems.filter((p) => p.category === "تتويج")} />
        </div>
      </ModuleSection>
    );
  }

  return null;
}
