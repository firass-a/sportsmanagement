"use client";

import { BookOpen, Building2, FileText, IdCard, Network, Shield, Trophy, Users, UsersRound } from "lucide-react";
import {
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
} from "@/components/national/module/NationalModuleShared";
import {
  federationAssembly,
  federationCommittees,
  federationDocuments,
  federationExecutive,
  federationLeagues,
  licensesList,
  nationalTeamList,
  officialClubsList,
  tournamentsList,
} from "@/lib/national/modules/mock-data";

type TabProps = { tab: string };

const statusCol = {
  key: "status",
  label: "الحالة",
  render: (row: Record<string, unknown>) => <StatusBadge status={String(row.status)} />,
};

export function FederationTabContent({ tab }: TabProps) {
  if (tab === "executive") {
    return (
      <ModuleSection title="المكتب التنفيذي" icon={Shield} iconColor="blue" className="mt-5">
        <ModuleDataTable
          title="أعضاء المكتب التنفيذي"
          columns={[
            { key: "name", label: "الاسم" },
            { key: "role", label: "المنصب" },
            { key: "phone", label: "الهاتف" },
            statusCol,
          ]}
          rows={federationExecutive}
          searchPlaceholder="بحث..."
        />
      </ModuleSection>
    );
  }

  if (tab === "assembly") {
    return (
      <ModuleDashboardShell>
        <ModuleSection title="الجمعية العامة" icon={UsersRound} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "name", label: "الجلسة" },
              { key: "date", label: "التاريخ" },
              { key: "attendees", label: "الحضور" },
              { key: "decisions", label: "القرارات" },
              statusCol,
            ]}
            rows={federationAssembly}
            searchPlaceholder="بحث في الجلسات..."
          />
        </ModuleSection>
        <BottomPanels>
          <HighlightCard urgent>
            <PanelHeader icon={UsersRound} title="الجمعية القادمة" iconBg="bg-purple-100" iconColor="text-purple-600" />
            <p className="text-xs text-slate-600">10/09/2026 — اعتماد اللائحة الداخلية</p>
          </HighlightCard>
          <ModulePanel>
            <PanelHeader icon={Shield} title="آخر جلسة" iconBg="bg-green-100" iconColor="text-green-600" />
            <p className="text-2xl font-bold text-asl-navy">142</p>
            <p className="text-[11px] text-slate-500">مشارك — 8 قرارات</p>
          </ModulePanel>
          <HighlightCard>
            <p className="text-xs font-bold text-asl-navy">186 عضو مسجل</p>
            <p className="mt-1 text-[11px] text-slate-600">نسبة الحضور 83%</p>
          </HighlightCard>
          <ModulePanel>
            <PanelHeader icon={FileText} title="محاضر الجلسات" iconBg="bg-asl-blue/10" iconColor="text-asl-blue" />
            <p className="text-xs text-slate-600">4 محاضر معتمدة · 2 قيد الإعداد</p>
          </ModulePanel>
        </BottomPanels>
      </ModuleDashboardShell>
    );
  }

  if (tab === "committees") {
    return (
      <ModuleDashboardShell>
        <ModuleSection title="اللجان التقنية الوطنية" icon={BookOpen} iconColor="orange">
          <ModuleDataTable
            columns={[
              { key: "name", label: "اللجنة" },
              { key: "sport", label: "الاختصاص" },
              { key: "head", label: "الرئيس" },
              { key: "members", label: "الأعضاء" },
              statusCol,
            ]}
            rows={federationCommittees}
            searchPlaceholder="بحث في اللجان..."
          />
        </ModuleSection>
        <BottomPanels>
          <HighlightCard urgent>
            <p className="text-xs font-bold text-amber-900">لجنة التحكيم — قيد التنفيذ</p>
            <p className="mt-1 text-[11px] text-slate-600">3 مرشحين في انتظار التعيين</p>
          </HighlightCard>
          <ModulePanel>
            <PanelHeader icon={BookOpen} title="إجمالي اللجان" iconBg="bg-asl-orange/10" iconColor="text-asl-orange" />
            <p className="text-2xl font-bold text-asl-navy">5</p>
          </ModulePanel>
          <HighlightCard>
            <p className="text-xs font-bold text-asl-navy">41 عضواً فنياً</p>
          </HighlightCard>
          <ModulePanel>
            <PanelHeader icon={Trophy} title="آخر اجتماع" iconBg="bg-green-100" iconColor="text-green-600" />
            <p className="text-xs text-slate-600">اللجنة التقنية — الجودo · 28/06/2026</p>
          </ModulePanel>
        </BottomPanels>
      </ModuleDashboardShell>
    );
  }

  if (tab === "documents") {
    return (
      <ModuleDashboardShell>
        <ModuleSection title="الوثائق والقوانين" icon={FileText} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "title", label: "الوثيقة" },
              { key: "type", label: "النوع" },
              { key: "version", label: "الإصدار" },
              { key: "date", label: "التاريخ" },
              statusCol,
            ]}
            rows={federationDocuments}
            searchPlaceholder="بحث في الوثائق..."
          />
        </ModuleSection>
        <BottomPanels>
          <HighlightCard urgent>
            <p className="text-xs font-bold text-amber-900">لائحة امتحانات الرتب — قيد المراجعة</p>
          </HighlightCard>
          <ModulePanel>
            <PanelHeader icon={FileText} title="وثائق معتمدة" iconBg="bg-green-100" iconColor="text-green-600" />
            <p className="text-2xl font-bold text-green-600">4</p>
          </ModulePanel>
          <HighlightCard>
            <p className="text-xs text-slate-600">آخر تحديث — 10/04/2026</p>
          </HighlightCard>
          <ModulePanel>
            <PanelHeader icon={Shield} title="النظام الأساسي" iconBg="bg-asl-blue/10" iconColor="text-asl-blue" />
            <p className="text-xs text-slate-600">v3.2 · معتمد 01/01/2026</p>
          </ModulePanel>
        </BottomPanels>
      </ModuleDashboardShell>
    );
  }

  if (tab === "leagues") {
    return (
      <ModuleSection title="الرابطات التابعة" icon={Network} iconColor="orange" className="mt-5">
        <ModuleDataTable
          columns={[
            { key: "name", label: "الرابطة" },
            { key: "wilaya", label: "الولاية" },
            { key: "clubs", label: "النوادي" },
            { key: "licenses", label: "الإجازات" },
            statusCol,
          ]}
          rows={federationLeagues}
          searchPlaceholder="بحث في الرابطات..."
        />
      </ModuleSection>
    );
  }

  if (tab === "clubs") {
    return (
      <ModuleSection title="النوادي" icon={Building2} iconColor="orange" className="mt-5">
        <ModuleDataTable
          columns={[
            { key: "name", label: "النادي" },
            { key: "wilaya", label: "الولاية" },
            { key: "sport", label: "الاختصاص" },
            { key: "athletes", label: "الرياضيون" },
            statusCol,
          ]}
          rows={officialClubsList}
          searchPlaceholder="بحث..."
        />
      </ModuleSection>
    );
  }

  if (tab === "licenses") {
    return (
      <ModuleSection title="الإجازات" icon={IdCard} iconColor="blue" className="mt-5">
        <ModuleDataTable
          columns={[
            { key: "name", label: "الاسم" },
            { key: "type", label: "النوع" },
            { key: "club", label: "النادي" },
            { key: "number", label: "رقم الإجازة" },
            statusCol,
          ]}
          rows={licensesList}
          searchPlaceholder="بحث..."
        />
      </ModuleSection>
    );
  }

  if (tab === "tournaments") {
    return (
      <ModuleSection title="البطولات" icon={Trophy} iconColor="orange" className="mt-5">
        <ModuleDataTable
          columns={[
            { key: "name", label: "البطولة" },
            { key: "level", label: "المستوى" },
            { key: "clubs", label: "النوادي" },
            { key: "date", label: "التاريخ" },
          ]}
          rows={tournamentsList}
          searchPlaceholder="بحث..."
        />
      </ModuleSection>
    );
  }

  if (tab === "nationalTeam") {
    return (
      <ModuleSection title="الفريق الوطني" icon={Users} iconColor="blue" className="mt-5">
        <ModuleDataTable
          columns={[
            { key: "name", label: "الاسم" },
            { key: "sport", label: "الرياضة" },
            { key: "category", label: "الفئة" },
            statusCol,
          ]}
          rows={nationalTeamList}
          searchPlaceholder="بحث..."
        />
      </ModuleSection>
    );
  }

  return (
    <ModuleDashboardShell>
      <NationalAdminStats
        title="ملخص الاتحادية"
        stats={[
          { label: "الرابطات", value: 48 },
          { label: "النوادي", value: 620 },
          { label: "الإجازات", value: "45,782" },
          { label: "البطولات", value: 58 },
        ]}
        columns={6}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <HighlightCard urgent>
          <PanelHeader icon={Shield} title="قيد الإنجاز" iconBg="bg-amber-100" iconColor="text-amber-600" />
          <p className="text-xs text-slate-600">3 رابطات تحتاج تحديث الوثائق القانونية</p>
        </HighlightCard>
        <HighlightCard>
          <PanelHeader icon={Trophy} title="آخر قرار" iconBg="bg-green-100" iconColor="text-green-600" />
          <p className="text-xs text-slate-600">تم اعتماد بطولة وطنية جديدة — الجودo</p>
        </HighlightCard>
      </div>
    </ModuleDashboardShell>
  );
}
