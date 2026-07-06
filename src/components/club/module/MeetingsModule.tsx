"use client";

import { useMemo, useState } from "react";
import {
  Archive,
  Calendar,
  CheckSquare,
  ClipboardList,
  Clock,
  FileText,
  MapPin,
  Plus,
  Send,
  UserCheck,
  Users,
} from "lucide-react";
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
  clubMeetingsList,
  meetingDecisions,
  meetingInvitations,
  meetingMinutes,
  meetingTasks,
  meetingTypes,
  meetingsAlerts,
  meetingsStats,
} from "@/lib/club/modules/meetings-mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "all", label: "جميع الاجتماعات" },
  { id: "calendar", label: "الرزنامة" },
  { id: "invitations", label: "الدعوات" },
  { id: "attendance", label: "الحضور" },
  { id: "minutes", label: "المحاضر" },
  { id: "decisions", label: "القرارات" },
  { id: "tasks", label: "المهام" },
  { id: "reports", label: "التقارير" },
  { id: "archive", label: "الأرشيف" },
];

const quickActions = [
  { label: "إنشاء اجتماع", icon: Plus, tab: "all" as const, primary: true },
  { label: "الرزنامة", icon: Calendar, tab: "calendar" as const },
  { label: "إرسال دعوة", icon: Send, tab: "invitations" as const },
  { label: "تسجيل الحضور", icon: UserCheck, tab: "attendance" as const },
  { label: "إعداد محضر", icon: FileText, tab: "minutes" as const },
  { label: "متابعة القرارات", icon: ClipboardList, tab: "decisions" as const },
];

export function MeetingsModule() {
  const [tab, setTab] = useState("dashboard");

  const upcomingMeetings = useMemo(
    () =>
      [...clubMeetingsList]
        .filter((m) => !["معتمد", "منتهٍ", "مؤرشف"].includes(m.status))
        .sort((a, b) => a.date.localeCompare(b.date)),
    [],
  );

  const lateTasks = useMemo(
    () => meetingTasks.filter((t) => t.status === "متأخر"),
    [],
  );

  const openDecisions = useMemo(
    () =>
      meetingDecisions.filter((d) =>
        ["قيد التنفيذ", "متأخر", "يحتاج متابعة"].includes(d.status),
      ),
    [],
  );

  return (
    <ClubShell activeNav="meetings">
      <ModulePageHeader
        title="الاجتماعات الداخلية — نادي نجوم شباب الكيشين"
        subtitle="تنظيم الاجتماعات، الدعوات، الحضور، المحاضر، القرارات والمهام"
        actions={[
          { label: "إنشاء اجتماع", icon: Plus, primary: true },
          { label: "الرزنامة", icon: Calendar },
          { label: "إعداد محضر", icon: FileText },
          { label: "الأرشيف", icon: Archive },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleAlerts alerts={meetingsAlerts} />
          <ModuleStatGrid stats={meetingsStats} />

          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {quickActions.map(({ label, icon: Icon, tab: targetTab, primary }) => (
              <button
                key={label}
                type="button"
                onClick={() => setTab(targetTab)}
                className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-xs font-semibold transition hover:shadow-md md:text-sm ${
                  primary
                    ? "border-asl-orange/30 bg-asl-orange text-white hover:bg-asl-orange-dark"
                    : "border-slate-200 bg-white text-asl-navy hover:border-asl-blue/30"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                {label}
              </button>
            ))}
          </div>

          <ModuleSection
            title="الاجتماعات القادمة"
            icon={Calendar}
            iconColor="blue"
            className="!mt-5"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-asl-blue/20 bg-asl-blue/5 px-4 py-3">
              <p className="text-sm font-semibold text-asl-navy">
                {upcomingMeetings.length} اجتماعات قادمة ·{" "}
                {upcomingMeetings.filter((m) => m.status === "جاري").length} جارية الآن
              </p>
              <button
                type="button"
                onClick={() => setTab("calendar")}
                className="text-sm font-semibold text-asl-blue hover:underline"
              >
                فتح الرزنامة ←
              </button>
            </div>

            <ol className="space-y-0">
              {upcomingMeetings.slice(0, 4).map((meeting, index) => {
                const live = meeting.status === "جاري";
                const confirmRate =
                  meeting.invited > 0
                    ? Math.round((meeting.confirmed / meeting.invited) * 100)
                    : 0;

                return (
                  <li key={meeting.id} className="flex gap-4">
                    <div className="flex w-[76px] shrink-0 flex-col items-center">
                      <span
                        className={`rounded-xl px-2 py-2 text-center text-xs font-bold tabular-nums leading-tight ${
                          live
                            ? "bg-green-100 text-green-700"
                            : "bg-asl-navy text-white"
                        }`}
                      >
                        {meeting.startTime}
                      </span>
                      {index < Math.min(upcomingMeetings.length, 4) - 1 && (
                        <div className="my-1 min-h-[24px] w-0.5 flex-1 bg-asl-blue/20" />
                      )}
                    </div>

                    <div
                      className={`mb-4 min-w-0 flex-1 rounded-xl border p-4 shadow-sm transition hover:shadow-md ${
                        live
                          ? "border-green-200 bg-green-50/50"
                          : "border-asl-blue/25 bg-white hover:border-asl-blue/40"
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <p className="text-base font-bold text-asl-navy">{meeting.title}</p>
                        <StatusBadge status={meeting.status} />
                      </div>

                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-md bg-asl-orange/10 px-2 py-0.5 text-xs font-semibold text-asl-orange">
                          {meeting.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                          <MapPin className="h-3.5 w-3.5" />
                          {meeting.place}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                          <Clock className="h-3.5 w-3.5" />
                          {meeting.date} · {meeting.startTime}–{meeting.endTime}
                        </span>
                      </div>

                      <div className="mt-3">
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="font-medium text-asl-navy">تأكيد الدعوات</span>
                          <span className="font-bold text-asl-blue">
                            {meeting.confirmed}/{meeting.invited} ({confirmRate}%)
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-asl-blue transition-all"
                            style={{ width: `${confirmRate}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <button
              type="button"
              onClick={() => setTab("all")}
              className="mt-2 text-sm font-semibold text-asl-blue hover:underline"
            >
              عرض كل الاجتماعات ←
            </button>
          </ModuleSection>

          <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-stretch">
            <ModuleSection
              title="قرارات تحتاج متابعة"
              icon={ClipboardList}
              iconColor="orange"
              className="!mt-0 flex flex-col"
            >
              <ul className="flex flex-1 flex-col gap-3">
                {openDecisions.map((decision) => {
                  const urgent = decision.status === "متأخر";
                  return (
                    <li
                      key={decision.number}
                      className={`rounded-xl border p-4 shadow-sm transition hover:shadow-md ${
                        urgent
                          ? "border-red-200 bg-red-50/60"
                          : "border-slate-200 bg-white hover:border-asl-orange/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-asl-orange/15 ring-2 ring-asl-orange/20">
                          <ClipboardList className="h-4 w-4 text-asl-orange" strokeWidth={2.5} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <span className="rounded-md bg-asl-navy/5 px-2 py-0.5 text-[11px] font-bold text-asl-navy">
                              {decision.number}
                            </span>
                            <StatusBadge status={decision.status} />
                          </div>
                          <p className="mt-2 text-sm font-bold text-asl-navy">{decision.title}</p>
                          <p className="mt-1 text-xs text-slate-500">
                            {decision.meeting} · {decision.type}
                          </p>
                          <p className="mt-1 text-xs font-medium text-asl-orange">
                            المسؤول: {decision.responsible} · الأجل: {decision.deadline}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <button
                type="button"
                onClick={() => setTab("decisions")}
                className="mt-3 text-sm font-semibold text-asl-orange hover:underline"
              >
                عرض كل القرارات ←
              </button>
            </ModuleSection>

            <ModuleSection
              title="مهام متأخرة"
              icon={CheckSquare}
              iconColor="blue"
              className="!mt-0 flex flex-col"
            >
              <ul className="flex flex-1 flex-col gap-3">
                {lateTasks.length > 0 ? (
                  lateTasks.map((task) => (
                    <li
                      key={task.task}
                      className="rounded-xl border border-red-200 bg-red-50/60 p-4 shadow-sm transition hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 ring-2 ring-red-200">
                          <CheckSquare className="h-4 w-4 text-red-600" strokeWidth={2.5} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <p className="text-sm font-bold text-asl-navy">{task.task}</p>
                            <StatusBadge status={task.status} />
                          </div>
                          <p className="mt-1 text-xs text-slate-500">
                            المسؤول: {task.responsible} · الأجل: {task.deadline}
                          </p>
                          <div className="mt-2">
                            <div className="mb-1 flex justify-between text-xs">
                              <span className="text-slate-500">الإنجاز</span>
                              <span className="font-bold text-red-600">{task.progress}</span>
                            </div>
                            <div className="h-1.5 overflow-hidden rounded-full bg-red-100">
                              <div
                                className="h-full rounded-full bg-red-500"
                                style={{ width: task.progress }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="rounded-xl border border-green-200 bg-green-50/50 p-4 text-sm text-green-700">
                    لا توجد مهام متأخرة حالياً
                  </li>
                )}
                {meetingTasks
                  .filter((t) => t.status !== "متأخر")
                  .slice(0, 2)
                  .map((task) => (
                    <li
                      key={task.task}
                      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-semibold text-asl-navy">{task.task}</p>
                        <StatusBadge status={task.status} />
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        {task.responsible} · {task.deadline} · {task.progress}
                      </p>
                    </li>
                  ))}
              </ul>
              <button
                type="button"
                onClick={() => setTab("tasks")}
                className="mt-3 text-sm font-semibold text-asl-blue hover:underline"
              >
                عرض كل المهام ←
              </button>
            </ModuleSection>
          </div>
        </>
      )}

      {tab === "all" && (
        <ModuleSection title="جميع الاجتماعات" icon={Users} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "title", label: "العنوان" },
              { key: "type", label: "النوع" },
              { key: "branch", label: "الفرع" },
              { key: "date", label: "التاريخ" },
              { key: "startTime", label: "البداية" },
              { key: "place", label: "المكان" },
              { key: "mode", label: "الطريقة" },
              {
                key: "priority",
                label: "الأولوية",
                render: (r) => <StatusBadge status={String(r.priority)} />,
              },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={clubMeetingsList}
            searchPlaceholder="بحث في الاجتماعات..."
          />
        </ModuleSection>
      )}

      {tab === "calendar" && (
        <ModuleSection title="رزنامة الاجتماعات" icon={Calendar} iconColor="blue">
          <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "عرض يومي", count: 2 },
              { label: "عرض أسبوعي", count: 5 },
              { label: "عرض شهري", count: 9 },
              { label: "قادمة فقط", count: 4 },
            ].map((view) => (
              <button
                key={view.label}
                type="button"
                className="rounded-xl border border-slate-200 bg-white p-3 text-right shadow-sm transition hover:border-asl-blue/30 hover:shadow-md"
              >
                <p className="text-xs font-semibold text-slate-500">{view.label}</p>
                <p className="mt-1 text-2xl font-bold text-asl-navy">{view.count}</p>
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {clubMeetingsList.map((meeting) => (
              <div
                key={meeting.id}
                className="flex flex-wrap items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-asl-navy text-white">
                  <span className="text-[10px] font-medium opacity-80">
                    {meeting.date.slice(5).replace("-", "/")}
                  </span>
                  <span className="text-sm font-bold">{meeting.startTime}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-asl-navy">{meeting.title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {meeting.type} · {meeting.place} · {meeting.organizer}
                  </p>
                </div>
                <StatusBadge status={meeting.status} />
                <span className="text-xs text-slate-500">
                  {meeting.confirmed}/{meeting.invited} مؤكد
                </span>
              </div>
            ))}
          </div>
        </ModuleSection>
      )}

      {tab === "invitations" && (
        <ModuleSection title="الدعوات والتأكيدات" icon={Send} iconColor="orange">
          <ModuleDataTable
            columns={[
              { key: "meeting", label: "الاجتماع" },
              { key: "invitee", label: "المدعو" },
              { key: "sent", label: "تاريخ الإرسال" },
              { key: "response", label: "الرد" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={meetingInvitations}
            searchPlaceholder="بحث في الدعوات..."
          />
        </ModuleSection>
      )}

      {tab === "attendance" && (
        <ModuleSection title="الحضور والغيابات" icon={UserCheck} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "title", label: "الاجتماع" },
              { key: "date", label: "التاريخ" },
              { key: "invited", label: "المدعوون" },
              { key: "confirmed", label: "المؤكدون" },
              { key: "attendance", label: "الحضور" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={clubMeetingsList.filter((m) => m.attendance !== "—")}
            searchPlaceholder="بحث في سجل الحضور..."
          />
        </ModuleSection>
      )}

      {tab === "minutes" && (
        <ModuleSection title="محاضر الاجتماعات" icon={FileText} iconColor="blue">
          <ul className="mb-4 space-y-3">
            {meetingMinutes.map((minute) => (
              <li
                key={minute.number}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-asl-blue/15">
                  <FileText className="h-4 w-4 text-asl-blue" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <span className="text-xs font-bold text-asl-navy">{minute.number}</span>
                    <StatusBadge status={minute.status} />
                  </div>
                  <p className="mt-1 text-sm font-bold text-asl-navy">{minute.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {minute.date} · كاتب المحضر: {minute.author}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <ModuleDataTable
            columns={[
              { key: "number", label: "رقم المحضر" },
              { key: "title", label: "العنوان" },
              { key: "date", label: "التاريخ" },
              { key: "author", label: "الكاتب" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={meetingMinutes}
          />
        </ModuleSection>
      )}

      {tab === "decisions" && (
        <ModuleSection title="القرارات الداخلية" icon={ClipboardList} iconColor="orange">
          <ModuleDataTable
            columns={[
              { key: "number", label: "رقم القرار" },
              { key: "meeting", label: "الاجتماع" },
              { key: "title", label: "العنوان" },
              { key: "type", label: "النوع" },
              { key: "responsible", label: "المسؤول" },
              { key: "deadline", label: "الأجل" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={meetingDecisions}
            searchPlaceholder="بحث في القرارات..."
          />
        </ModuleSection>
      )}

      {tab === "tasks" && (
        <ModuleSection title="المهام والمتابعة" icon={CheckSquare} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "task", label: "المهمة" },
              { key: "responsible", label: "المسؤول" },
              { key: "deadline", label: "الأجل" },
              { key: "progress", label: "الإنجاز" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={meetingTasks}
            searchPlaceholder="بحث في المهام..."
          />
        </ModuleSection>
      )}

      {tab === "reports" && (
        <ModuleSection title="تقارير وإحصائيات الاجتماعات" icon={ClipboardList} iconColor="blue">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "اجتماعات هذا الشهر", value: 9 },
              { label: "متوسط الحضور", value: "82%" },
              { label: "قرارات منجزة", value: 18 },
              { label: "قرارات متأخرة", value: 3 },
              { label: "محاضر بلا اعتماد", value: 2 },
              { label: "اجتماعات حسب الفرع", value: 6 },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-xs font-semibold text-slate-500">{stat.label}</p>
                <p className="mt-2 text-2xl font-bold text-asl-navy">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <p className="mb-3 text-sm font-bold text-asl-navy">أنواع الاجتماعات</p>
            <ModuleDataTable
              columns={[
                { key: "type", label: "النوع" },
                { key: "goal", label: "الهدف" },
              ]}
              rows={meetingTypes}
            />
          </div>
        </ModuleSection>
      )}

      {tab === "archive" && (
        <ModuleSection title="أرشيف الاجتماعات" icon={Archive} iconColor="blue">
          <ModuleEmptyState
            icon={Archive}
            title="أرشيف الاجتماعات الداخلية"
            description="محاضر معتمدة، قرارات مغلقة، دعوات، حضور، ملفات مرفقة وسجل العمليات"
            actionLabel="تصفح الأرشيف"
          />
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-asl-navy">32 اجتماعاً مؤرشفاً</p>
            <p className="mt-1 text-xs text-slate-500">
              آخر أرشفة: اجتماع تحضيري — بطولة داخلية (10/07/2026)
            </p>
          </div>
        </ModuleSection>
      )}
    </ClubShell>
  );
}
