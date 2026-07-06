"use client";

import {
  Award,
  Building2,
  FileText,
  GraduationCap,
  IdCard,
  Plus,
  Shield,
  Trophy,
  Users,
} from "lucide-react";
import {
  ModuleDataTable,
  ModuleSection,
  StatusBadge,
} from "@/components/club/module/ModuleUI";
import { NationalAdminStats } from "@/components/national/module/NationalAdminStats";
import {
  leagueAssemblyDecisions,
  leagueClubs,
  leagueExecutive,
  leagueReports,
  leagueUpcomingTournaments,
  licensesList,
  rankExamsList,
  rankExamsStats,
  trainingCampsList,
  trainingCampsStats,
  transfersList,
  transfersStats,
} from "@/lib/national/modules/mock-data";
import { LeagueDashboard } from "@/components/national/module/LeagueDashboard";

type LeagueTabContentProps = {
  tab: string;
};

export function LeagueTabContent({ tab }: LeagueTabContentProps) {
  switch (tab) {
    case "dashboard":
      return <LeagueDashboard />;

    case "executive":
      return (
        <ModuleSection title="المكتب التنفيذي" icon={Shield} iconColor="blue" className="mt-5">
          <ModuleDataTable
            title="أعضاء المكتب التنفيذي للرابطة"
            columns={[
              { key: "name", label: "الاسم" },
              { key: "role", label: "المنصب" },
              { key: "phone", label: "الهاتف" },
              {
                key: "status",
                label: "الحالة",
                render: (row) => <StatusBadge status={String(row.status)} />,
              },
            ]}
            rows={leagueExecutive}
            searchPlaceholder="بحث في الأعضاء..."
          />
        </ModuleSection>
      );

    case "assembly":
      return (
        <ModuleSection title="الجمعية العامة" icon={Users} iconColor="blue" className="mt-5">
          <ModuleDataTable
            title="قرارات الجمعية العامة"
            columns={[
              { key: "decision", label: "القرار" },
              { key: "date", label: "التاريخ" },
              { key: "votes", label: "التصويت" },
              {
                key: "status",
                label: "الحالة",
                render: (row) => <StatusBadge status={String(row.status)} />,
              },
            ]}
            rows={leagueAssemblyDecisions}
            searchPlaceholder="بحث في القرارات..."
          />
        </ModuleSection>
      );

    case "clubs":
      return (
        <ModuleSection title="النوادي المنخرطة" icon={Building2} iconColor="orange" className="mt-5">
          <ModuleDataTable
            columns={[
              { key: "name", label: "النادي" },
              { key: "branches", label: "الفروع" },
              { key: "athletes", label: "الرياضيون" },
              { key: "licenses", label: "الإجازات" },
              {
                key: "status",
                label: "الحالة",
                render: (row) => <StatusBadge status={String(row.status)} />,
              },
            ]}
            rows={leagueClubs}
            searchPlaceholder="بحث في النوادي..."
          />
        </ModuleSection>
      );

    case "licenses":
      return (
        <div className="mt-5 space-y-5">
          <NationalAdminStats
            title="مؤشرات الإجازات"
            stats={[
              { label: "في انتظار المراجعة", value: 37 },
              { label: "معتمدة", value: "1,243" },
              { label: "ينقص وثائق", value: 12 },
              { label: "مرفوضة", value: 3 },
            ]}
            columns={6}
          />
          <ModuleSection title="الإجازات الرياضية" icon={IdCard} iconColor="orange">
            <ModuleDataTable
              columns={[
                { key: "name", label: "الاسم" },
                { key: "type", label: "النوع" },
                { key: "club", label: "النادي" },
                { key: "number", label: "رقم الإجازة" },
                {
                  key: "status",
                  label: "الحالة",
                  render: (row) => <StatusBadge status={String(row.status)} />,
                },
                { key: "expiry", label: "الصلاحية" },
              ]}
              rows={licensesList}
              searchPlaceholder="بحث في الإجازات..."
            />
          </ModuleSection>
        </div>
      );

    case "tournaments":
      return (
        <div className="mt-5 space-y-5">
          <ModuleSection title="المنافسات الولائية" icon={Trophy} iconColor="orange">
            <ModuleDataTable
              columns={[
                { key: "name", label: "البطولة" },
                { key: "date", label: "التاريخ" },
                {
                  key: "status",
                  label: "الحالة",
                  render: (row) => <StatusBadge status={String(row.status)} />,
                },
              ]}
              rows={leagueUpcomingTournaments}
              searchPlaceholder="بحث في المنافسات..."
            />
          </ModuleSection>
        </div>
      );

    case "trainingCamps":
      return (
        <div className="mt-5 space-y-5">
          <NationalAdminStats title="مؤشرات التربصات" stats={trainingCampsStats} columns={6} />
          <ModuleSection title="التربصات" icon={GraduationCap} iconColor="blue">
            <ModuleDataTable
              columns={[
                { key: "name", label: "التربص" },
                { key: "place", label: "المكان" },
                { key: "period", label: "الفترة" },
                { key: "participants", label: "المشاركون" },
                {
                  key: "status",
                  label: "الحالة",
                  render: (row) => <StatusBadge status={String(row.status)} />,
                },
              ]}
              rows={trainingCampsList}
              searchPlaceholder="بحث في التربصات..."
            />
          </ModuleSection>
        </div>
      );

    case "rankExams":
      return (
        <div className="mt-5 space-y-5">
          <NationalAdminStats title="مؤشرات امتحانات الرتب" stats={rankExamsStats} columns={6} />
          <ModuleSection title="امتحانات الرتب" icon={Award} iconColor="orange">
            <ModuleDataTable
              columns={[
                { key: "name", label: "الامتحان" },
                { key: "date", label: "التاريخ" },
                { key: "candidates", label: "المرشحون" },
                { key: "rank", label: "الرتبة" },
                {
                  key: "status",
                  label: "الحالة",
                  render: (row) => <StatusBadge status={String(row.status)} />,
                },
              ]}
              rows={rankExamsList}
              searchPlaceholder="بحث في الامتحانات..."
            />
          </ModuleSection>
        </div>
      );

    case "transfers":
      return (
        <div className="mt-5 space-y-5">
          <NationalAdminStats title="مؤشرات التحويلات" stats={transfersStats} columns={6} />
          <ModuleSection title="التحويلات" icon={Users} iconColor="blue">
            <ModuleDataTable
              columns={[
                { key: "athlete", label: "الرياضي" },
                { key: "from", label: "من" },
                { key: "to", label: "إلى" },
                { key: "type", label: "النوع" },
                { key: "date", label: "التاريخ" },
                {
                  key: "status",
                  label: "الحالة",
                  render: (row) => <StatusBadge status={String(row.status)} />,
                },
              ]}
              rows={transfersList}
              searchPlaceholder="بحث في التحويلات..."
            />
          </ModuleSection>
        </div>
      );

    case "reports":
      return (
        <ModuleSection title="التقارير" icon={FileText} iconColor="blue" className="mt-5">
          <ModuleDataTable
            title="تقارير الرابطة"
            columns={[
              { key: "title", label: "التقرير" },
              { key: "type", label: "النوع" },
              { key: "date", label: "التاريخ" },
              {
                key: "status",
                label: "الحالة",
                render: (row) => <StatusBadge status={String(row.status)} />,
              },
            ]}
            rows={leagueReports}
            searchPlaceholder="بحث في التقارير..."
          />
        </ModuleSection>
      );

    default:
      return null;
  }
}
