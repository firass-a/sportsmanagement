"use client";

import { useMemo, useState } from "react";
import {
  Calendar,
  ClipboardList,
  Clock,
  Dumbbell,
  FileText,
  MapPin,
  Plus,
  Tent,
  User,
  Users,
} from "lucide-react";
import { ClubShell } from "@/components/club/ClubShell";
import { ScheduleTimeline } from "@/components/club/ScheduleTimeline";
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
  trainingReports,
  trainingSessions,
  trainingsAlerts,
  trainingsStats,
} from "@/lib/club/modules/extended-mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "calendar", label: "التقويم" },
  { id: "sessions", label: "الحصص" },
  { id: "programs", label: "البرامج" },
  { id: "team", label: "رياضات جماعية" },
  { id: "individual", label: "رياضات فردية" },
  { id: "attendance", label: "الحضور" },
  { id: "reports", label: "التقارير" },
  { id: "facilities", label: "المرافق" },
  { id: "camps", label: "المعسكرات" },
];

const TODAY = "2026-07-15";

function parseAttendanceRatio(attendance: string) {
  const match = attendance.match(/(\d+)\/(\d+)/);
  if (!match) return null;
  return {
    present: Number(match[1]),
    total: Number(match[2]),
    percent: Math.round((Number(match[1]) / Number(match[2])) * 100),
  };
}

export function TrainingsModule() {
  const [tab, setTab] = useState("dashboard");

  const todaySessions = useMemo(
    () =>
      trainingSessions
        .filter((session) => session.date === TODAY)
        .sort((a, b) => a.time.localeCompare(b.time)),
    [],
  );

  const pendingReports = useMemo(
    () =>
      trainingReports.filter((report) =>
        ["لم يُرفع", "قيد المراجعة"].includes(report.status),
      ),
    [],
  );

  return (
    <ClubShell activeNav="trainings">
      <ModulePageHeader
        title="التدريبات — نادي نجوم شباب الكيشين"
        subtitle="جدولة الحصص ومتابعة الحضور والتقارير والمعسكرات"
        actions={[
          { label: "حصة جديدة", icon: Plus, primary: true },
          { label: "تقرير تدريب", icon: FileText },
          { label: "التقويم", icon: Calendar },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleAlerts alerts={trainingsAlerts} />
          <ModuleStatGrid stats={trainingsStats} />

          <ModuleSection
            title="جدول حصص اليوم"
            icon={Calendar}
            iconColor="blue"
            className="!mt-4"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-asl-blue/20 bg-asl-blue/5 px-4 py-3">
              <p className="text-sm font-semibold text-asl-navy">
                {todaySessions.length} حصص مجدولة — {todaySessions.filter((s) => s.status === "منجز").length} منجزة ·{" "}
                {todaySessions.filter((s) => s.status === "مبرمج").length} قادمة
              </p>
              <button
                type="button"
                onClick={() => setTab("calendar")}
                className="text-sm font-semibold text-asl-blue hover:underline"
              >
                فتح التقويم الكامل ←
              </button>
            </div>

            <ol className="space-y-0">
              {todaySessions.map((session, index) => {
                const done = session.status === "منجز";
                const attendance = parseAttendanceRatio(session.attendance);

                return (
                  <li key={`${session.time}-${session.title}`} className="flex gap-4">
                    <div className="flex w-[76px] shrink-0 flex-col items-center">
                      <span
                        className={`rounded-xl px-3 py-2 text-sm font-bold tabular-nums ${
                          done
                            ? "bg-green-100 text-green-700"
                            : "bg-asl-navy text-white"
                        }`}
                      >
                        {session.time}
                      </span>
                      {index < todaySessions.length - 1 && (
                        <div className="my-1 w-0.5 flex-1 min-h-[24px] bg-asl-blue/20" />
                      )}
                    </div>

                    <div
                      className={`mb-4 min-w-0 flex-1 rounded-xl border p-4 shadow-sm transition hover:shadow-md ${
                        done
                          ? "border-green-200 bg-green-50/50"
                          : "border-asl-blue/25 bg-white hover:border-asl-blue/40"
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <p className="text-base font-bold text-asl-navy">{session.title}</p>
                        <StatusBadge status={session.status} />
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 rounded-md bg-asl-orange/10 px-2 py-0.5 text-xs font-semibold text-asl-orange">
                          {session.branch}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                          <MapPin className="h-3.5 w-3.5" />
                          {session.place}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                          <User className="h-3.5 w-3.5" />
                          {session.coach}
                        </span>
                      </div>

                      {attendance && (
                        <div className="mt-3">
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span className="font-medium text-asl-navy">الحضور</span>
                            <span className="font-bold text-asl-blue">
                              {session.attendance} ({attendance.percent}%)
                            </span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className="h-full rounded-full bg-asl-blue transition-all"
                              style={{ width: `${attendance.percent}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {!attendance && session.status === "مبرمج" && (
                        <p className="mt-3 text-xs font-medium text-asl-blue">
                          <Clock className="mr-1 inline h-3.5 w-3.5" />
                          لم تبدأ بعد — سجل الحضور عند بدء الحصة
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>

            <button
              type="button"
              onClick={() => setTab("sessions")}
              className="mt-2 text-sm font-semibold text-asl-blue hover:underline"
            >
              عرض كل الحصص ←
            </button>
          </ModuleSection>

          <ModuleSection
            title="تقارير معلقة"
            icon={ClipboardList}
            iconColor="orange"
            className="!mt-5"
          >
            {pendingReports.length > 0 && (
              <p className="mb-3 text-sm font-medium text-amber-700">
                {pendingReports.length} تقارير تحتاج إجراءً فورياً
              </p>
            )}

            <ul className="grid gap-3 lg:grid-cols-2">
              {trainingReports.map((report) => {
                const urgent = ["لم يُرفع", "قيد المراجعة"].includes(report.status);

                return (
                  <li
                    key={`${report.session}-${report.date}`}
                    className={`rounded-xl border p-4 shadow-sm transition hover:shadow-md ${
                      urgent
                        ? "border-amber-200 bg-amber-50/60"
                        : "border-slate-200 bg-white hover:border-asl-orange/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-asl-orange/15 ring-2 ring-asl-orange/20">
                        <FileText className="h-5 w-5 text-asl-orange" strokeWidth={2.5} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <p className="text-sm font-bold text-asl-navy">{report.session}</p>
                          <StatusBadge status={report.status} />
                        </div>
                        <p className="mt-2 text-xs text-slate-500">
                          {report.date} · {report.coach}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-asl-orange">
                          نسبة الحضور: {report.attendance}
                        </p>
                        {urgent && (
                          <button
                            type="button"
                            className="mt-3 rounded-lg bg-asl-orange px-3 py-1.5 text-xs font-bold text-white hover:bg-asl-orange-dark"
                          >
                            {report.status === "لم يُرفع" ? "رفع التقرير" : "مراجعة التقرير"}
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={() => setTab("reports")}
              className="mt-4 text-sm font-semibold text-asl-orange hover:underline"
            >
              عرض كل التقارير ←
            </button>
          </ModuleSection>
        </>
      )}

      {tab === "sessions" && (
        <ModuleSection title="جميع الحصص" icon={Dumbbell} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "title", label: "الحصة" },
              { key: "date", label: "التاريخ" },
              { key: "time", label: "الوقت" },
              { key: "place", label: "المكان" },
              { key: "coach", label: "المدرب" },
              { key: "attendance", label: "الحضور" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={trainingSessions}
          />
        </ModuleSection>
      )}

      {tab === "calendar" && (
        <ScheduleTimeline
          title="تقويم التدريبات"
          subtitle="31 حصة هذا الأسبوع — 8 حصص مجدولة لليوم"
          showHeader={false}
          className="mt-4 border-0 shadow-none"
        />
      )}

      {["programs", "team", "individual"].includes(tab) && (
        <ModuleEmptyState
          icon={Users}
          title={`${tabs.find((t) => t.id === tab)?.label}`}
          description="برامج التدريب حسب الرياضة والفئة العمرية."
        />
      )}

      {tab === "attendance" && (
        <ModuleSection title="سجل الحضور" icon={ClipboardList} iconColor="orange">
          <ModuleDataTable
            columns={[
              { key: "title", label: "الحصة" },
              { key: "date", label: "التاريخ" },
              { key: "attendance", label: "الحضور" },
              { key: "coach", label: "المدرب" },
            ]}
            rows={trainingSessions}
          />
        </ModuleSection>
      )}

      {tab === "reports" && (
        <ModuleSection title="تقارير التدريب" icon={FileText} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "session", label: "الحصة" },
              { key: "date", label: "التاريخ" },
              { key: "coach", label: "المدرب" },
              { key: "attendance", label: "نسبة الحضور" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={trainingReports}
          />
        </ModuleSection>
      )}

      {tab === "facilities" && (
        <ModuleEmptyState
          icon={MapPin}
          title="المرافق والقاعات"
          description="حجز ملاعب وقاعات التدريب."
        />
      )}

      {tab === "camps" && (
        <ModuleEmptyState
          icon={Tent}
          title="المعسكرات التدريبية"
          description="تخطيط وإدارة المعسكرات الصيفية والتحضيرية."
        />
      )}
    </ClubShell>
  );
}
