"use client";

import { useState } from "react";
import {
  Archive,
  Calendar,
  ClipboardList,
  FileText,
  Printer,
  UserPlus,
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
  executiveAlerts,
  executiveDecisions,
  executiveMeetings,
  executiveMembers,
  executiveStats,
} from "@/lib/club/modules/mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "members", label: "أعضاء المكتب التنفيذي" },
  { id: "meetings", label: "الاجتماعات والمحاضر" },
  { id: "decisions", label: "القرارات والمهام" },
  { id: "archive", label: "الأرشيف" },
];

export function ExecutiveModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <ClubShell activeNav="executive">
      <ModulePageHeader
        title="المكتب التنفيذي لنادي: نجوم شباب الكيشين"
        subtitle="إدارة أعضاء المكتب التنفيذي، الاجتماعات، المحاضر، القرارات والصلاحيات"
        actions={[
          { label: "إضافة عضو", icon: UserPlus, primary: true },
          { label: "دعوة لاجتماع", icon: Calendar },
          { label: "إنشاء محضر", icon: FileText },
          { label: "طباعة", icon: Printer },
          { label: "الأرشيف", icon: Archive },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleAlerts alerts={executiveAlerts} />
          <ModuleStatGrid stats={executiveStats} />
          <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-stretch">
          <ModuleSection title="آخر الاجتماعات" icon={Calendar} iconColor="blue" className="!mt-0 flex flex-col">
            <ul className="flex flex-1 flex-col gap-3">
              {executiveMeetings.map((meeting) => (
                <li
                  key={meeting.number}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-asl-blue/30 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-asl-blue/15 ring-2 ring-asl-blue/20">
                    <Calendar className="h-5 w-5 text-asl-blue" strokeWidth={2.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <p className="text-sm font-bold text-asl-navy">{meeting.title}</p>
                      <StatusBadge status={meeting.status} />
                    </div>
                    <p className="mt-1.5 text-xs text-slate-500">
                      {meeting.date} · {meeting.time} · {meeting.place}
                    </p>
                    <p className="mt-1 text-xs font-medium text-asl-blue">
                      الحضور: {meeting.attendees}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setTab("meetings")}
              className="mt-3 text-sm font-semibold text-asl-blue hover:underline"
            >
              عرض كل الاجتماعات ←
            </button>
          </ModuleSection>

          <ModuleSection title="القرارات الأخيرة" icon={ClipboardList} iconColor="orange" className="!mt-0 flex flex-col">
            <ul className="flex flex-1 flex-col gap-3">
              {executiveDecisions.map((decision) => {
                const active = decision.status === "قيد التنفيذ";
                return (
                  <li
                    key={decision.number}
                    className={`rounded-xl border p-4 shadow-sm transition hover:shadow-md ${
                      active
                        ? "border-amber-200 bg-amber-50/60"
                        : "border-slate-200 bg-white hover:border-asl-orange/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-asl-orange/15 ring-2 ring-asl-orange/20">
                        <ClipboardList className="h-5 w-5 text-asl-orange" strokeWidth={2.5} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <span className="rounded-md bg-asl-navy/5 px-2 py-0.5 text-[11px] font-bold text-asl-navy">
                            {decision.number}
                          </span>
                          <StatusBadge status={decision.status} />
                        </div>
                        <p className="mt-2 text-sm font-bold text-asl-navy">{decision.title}</p>
                        <p className="mt-1.5 text-xs text-slate-500">
                          {decision.date} · المسؤول: {decision.responsible}
                        </p>
                        <p className="mt-1 text-xs font-medium text-asl-orange">
                          آجال التنفيذ: {decision.deadline}
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
        </div>
        </>
      )}

      {tab === "members" && (
        <ModuleSection title="أعضاء المكتب التنفيذي" icon={UserPlus}>
          <ModuleDataTable
            columns={[
              { key: "name", label: "الاسم واللقب" },
              { key: "role", label: "المنصب" },
              { key: "phone", label: "الهاتف" },
              { key: "attendance", label: "نسبة الحضور" },
              {
                key: "docs",
                label: "الوثائق",
                render: (r) => <StatusBadge status={String(r.docs)} />,
              },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={executiveMembers}
            searchPlaceholder="بحث عن عضو..."
          />
        </ModuleSection>
      )}

      {tab === "meetings" && (
        <ModuleSection title="الاجتماعات والمحاضر" icon={Calendar} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "number", label: "رقم الاجتماع" },
              { key: "title", label: "العنوان" },
              { key: "date", label: "التاريخ" },
              { key: "time", label: "الساعة" },
              { key: "place", label: "المكان" },
              { key: "attendees", label: "الحضور" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={executiveMeetings}
            searchPlaceholder="بحث في الاجتماعات..."
          />
        </ModuleSection>
      )}

      {tab === "decisions" && (
        <ModuleSection title="القرارات والمهام" icon={ClipboardList}>
          <ModuleDataTable
            columns={[
              { key: "number", label: "رقم القرار" },
              { key: "title", label: "العنوان" },
              { key: "date", label: "التاريخ" },
              { key: "responsible", label: "المسؤول" },
              { key: "deadline", label: "آجال التنفيذ" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={executiveDecisions}
            searchPlaceholder="بحث في القرارات..."
          />
        </ModuleSection>
      )}

      {tab === "archive" && (
        <ModuleSection title="الأرشيف" icon={Archive} iconColor="blue">
          <ModuleEmptyState
            icon={Archive}
            title="أرشيف المكتب التنفيذي"
            description="محاضر الاجتماعات، قرارات المكتب، ملفات الانتخابات، القوانين الأساسية والتقارير"
            actionLabel="تصفح الأرشيف"
          />
        </ModuleSection>
      )}
    </ClubShell>
  );
}
