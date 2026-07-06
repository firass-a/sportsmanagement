"use client";

import { useState } from "react";
import {
  Award,
  ClipboardList,
  CreditCard,
  FileText,
  GraduationCap,
  UserCheck,
  UserPlus,
} from "lucide-react";
import { ClubShell } from "@/components/club/ClubShell";
import { CoachesList } from "@/components/club/module/CoachesList";
import {
  ModuleAlerts,
  ModuleCompactStatRow,
  ModuleDataTable,
  ModuleDigitalCard,
  ModuleEmptyState,
  ModulePageHeader,
  ModuleSection,
  ModuleTabs,
  StatusBadge,
} from "@/components/club/module/ModuleUI";
import {
  coachCertificates,
  coachEvaluations,
  coachReports,
  coachesAlerts,
  coachesList,
} from "@/lib/club/modules/extended-mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "all", label: "جميع المدربين" },
  { id: "branches", label: "حسب الفروع" },
  { id: "cards", label: "البطاقات والتفعيل" },
  { id: "trainings", label: "التدريبات والحضور" },
  { id: "evaluations", label: "التقييمات" },
  { id: "reports", label: "التقارير والشهادات" },
  { id: "documents", label: "الوثائق" },
];

const compactStats = [
  { label: "إجمالي المدربين", value: 26 },
  { label: "نشطون", value: 22, accent: "blue" as const },
  { label: "تحتاج تفعيل", value: 4, accent: "warn" as const },
  { label: "وثائق ناقصة", value: 3, accent: "warn" as const },
];

function CoachCardPanel({ coach }: { coach: (typeof coachesList)[0] }) {
  return (
    <div className="sticky top-4 space-y-4">
      <ModuleDigitalCard
        name={coach.name}
        branch={coach.branch}
        category={coach.role}
        cardNumber={coach.card}
        activation={coach.activation}
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
        <p className="font-bold text-asl-navy">تفاصيل سريعة</p>
        <dl className="mt-3 space-y-2 text-slate-600">
          <div className="flex justify-between gap-2">
            <dt>الفريق</dt>
            <dd className="font-medium text-asl-navy">{coach.team}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt>الشهادة</dt>
            <dd className="font-medium text-asl-navy">{coach.certificate}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt>الحضور</dt>
            <dd className="font-medium text-asl-navy">{coach.attendance}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt>الحالة</dt>
            <dd>
              <StatusBadge status={coach.status} />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export function CoachesModule() {
  const [tab, setTab] = useState("dashboard");
  const [selectedCoach, setSelectedCoach] = useState(coachesList[0]);

  const isDashboard = tab === "dashboard";
  const showListWithCard = tab === "dashboard" || tab === "cards";
  const showListOnly = tab === "all" || tab === "branches";

  return (
    <ClubShell activeNav="coaches">
      <ModulePageHeader
        title="المدربون — نادي نجوم شباب الكيشين"
        subtitle="إدارة الطاقم الفني والبطاقات الرقمية والتدريبات"
        actions={[
          { label: "مدرب جديد", icon: UserPlus, primary: true },
          { label: "تفعيل البطاقات", icon: UserCheck },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {isDashboard && (
        <>
          <ModuleAlerts alerts={coachesAlerts} />
          <ModuleCompactStatRow stats={compactStats} />
        </>
      )}

      {showListWithCard && (
        <div className={`${isDashboard ? "mt-5" : "mt-4"} grid gap-4 lg:grid-cols-5`}>
          <div className="space-y-3 lg:col-span-3">
            <h2 className="text-sm font-bold text-asl-navy">قائمة المدربين</h2>
            <CoachesList
              coaches={coachesList}
              selectedName={selectedCoach.name}
              onSelect={setSelectedCoach}
              showSearch={tab === "cards"}
            />
          </div>
          <div className="lg:col-span-2">
            <h2 className="mb-3 text-sm font-bold text-asl-navy">بطاقة المدرب</h2>
            <CoachCardPanel coach={selectedCoach} />
          </div>
        </div>
      )}

      {showListOnly && (
        <div className="mt-4 space-y-3">
          <CoachesList
            coaches={coachesList}
            selectedName={selectedCoach.name}
            onSelect={setSelectedCoach}
          />
        </div>
      )}

      {tab === "trainings" && (
        <div className="mt-4 space-y-4">
          <ModuleSection title="الحضور والانضباط" icon={ClipboardList} iconColor="orange">
            <ModuleDataTable
              columns={[
                { key: "name", label: "المدرب" },
                { key: "branch", label: "الفرع" },
                { key: "attendance", label: "نسبة الحضور" },
                { key: "role", label: "الصفة" },
                {
                  key: "status",
                  label: "الحالة",
                  render: (r) => <StatusBadge status={String(r.status)} />,
                },
              ]}
              rows={coachesList}
              searchPlaceholder=""
            />
          </ModuleSection>
          <ModuleEmptyState
            icon={ClipboardList}
            title="البرنامج الأسبوعي"
            description="جدولة حصص التدريب حسب الفرع والفريق — مرتبط بوحدة التدريبات."
          />
        </div>
      )}

      {tab === "evaluations" && (
        <ModuleSection title="تقييم المدربين" icon={Award} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "name", label: "المدرب" },
              { key: "branch", label: "الفرع" },
              { key: "attendance", label: "الحضور" },
              { key: "reports", label: "التقارير" },
              { key: "results", label: "النتائج" },
              { key: "rating", label: "التقييم" },
            ]}
            rows={coachEvaluations}
            searchPlaceholder=""
          />
        </ModuleSection>
      )}

      {tab === "reports" && (
        <div className="mt-4 space-y-4">
          <ModuleSection title="التقارير الفنية" icon={FileText} iconColor="blue">
            <ModuleDataTable
              columns={[
                { key: "title", label: "التقرير" },
                { key: "coach", label: "المدرب" },
                { key: "branch", label: "الفرع" },
                { key: "date", label: "التاريخ" },
                {
                  key: "status",
                  label: "الحالة",
                  render: (r) => <StatusBadge status={String(r.status)} />,
                },
              ]}
              rows={coachReports}
              searchPlaceholder=""
            />
          </ModuleSection>
          <ModuleSection title="الشهادات والمؤهلات" icon={GraduationCap} iconColor="orange">
            <ModuleDataTable
              columns={[
                { key: "name", label: "المدرب" },
                { key: "certificate", label: "الشهادة" },
                { key: "expiry", label: "تاريخ الانتهاء" },
                {
                  key: "status",
                  label: "الحالة",
                  render: (r) => <StatusBadge status={String(r.status)} />,
                },
              ]}
              rows={coachCertificates}
              searchPlaceholder=""
            />
          </ModuleSection>
        </div>
      )}

      {tab === "documents" && (
        <ModuleEmptyState
          icon={CreditCard}
          title="الوثائق والعقود"
          description="عقود التكليف، السير الذاتية، قرارات التعيين والأرشيف — مرتبطة بوحدة الملفات."
        />
      )}
    </ClubShell>
  );
}
