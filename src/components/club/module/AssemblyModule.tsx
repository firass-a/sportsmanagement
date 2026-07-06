"use client";

import { useState } from "react";
import {
  Archive,
  Calendar,
  ClipboardList,
  FileText,
  Plus,
  UserPlus,
  Users,
  Vote,
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
  assemblyAlerts,
  assemblyDecisions,
  assemblyMeetings,
  assemblyMembers,
  assemblyStats,
} from "@/lib/club/modules/mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "members", label: "أعضاء الجمعية" },
  { id: "meetings", label: "الاجتماعات والمحاضر" },
  { id: "decisions", label: "القرارات والتصويت" },
  { id: "elections", label: "الانتخابات" },
  { id: "archive", label: "الأرشيف" },
];

export function AssemblyModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <ClubShell activeNav="assembly">
      <ModulePageHeader
        title="الجمعية العامة لنادي: نجوم شباب الكيشين"
        subtitle="إدارة الأعضاء، الاجتماعات، المحاضر، القرارات والانتخابات"
        actions={[
          { label: "إضافة عضو", icon: UserPlus, primary: true },
          { label: "برمجة اجتماع", icon: Calendar },
          { label: "إنشاء محضر", icon: FileText },
          { label: "تسجيل الحضور", icon: Plus },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleAlerts alerts={assemblyAlerts} />
          <ModuleStatGrid stats={assemblyStats} />
          <div className="mt-4 grid gap-5 lg:grid-cols-2 lg:items-start">
          <ModuleSection title="آخر الاجتماعات" icon={Calendar} iconColor="blue" className="!mt-0 flex flex-col">
            <ul className="flex flex-col gap-3">
              {assemblyMeetings.map((meeting) => {
                const scheduled = meeting.status === "مبرمج";
                return (
                  <li
                    key={meeting.number}
                    className={`flex items-start gap-4 rounded-xl border p-4 shadow-sm transition hover:shadow-md ${
                      scheduled
                        ? "border-asl-blue/30 bg-asl-blue/5"
                        : "border-slate-200 bg-white hover:border-asl-blue/30"
                    }`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-asl-blue/15 ring-2 ring-asl-blue/20">
                      <Calendar className="h-5 w-5 text-asl-blue" strokeWidth={2.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <p className="text-base font-bold text-asl-navy">{meeting.title}</p>
                        <StatusBadge status={meeting.status} />
                      </div>
                      <p className="mt-2 text-sm text-slate-500">
                        {meeting.date} · {meeting.time} · {meeting.place}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-md bg-asl-navy/5 px-2 py-0.5 text-xs font-semibold text-asl-navy">
                          {meeting.type}
                        </span>
                        <span className="rounded-md bg-asl-blue/10 px-2 py-0.5 text-xs font-semibold text-asl-blue">
                          النصاب: {meeting.quorum}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              onClick={() => setTab("meetings")}
              className="mt-4 text-sm font-semibold text-asl-blue hover:underline"
            >
              عرض كل الاجتماعات ←
            </button>
          </ModuleSection>

          <ModuleSection title="آخر القرارات" icon={ClipboardList} iconColor="orange" className="!mt-0 flex flex-col">
            <ul className="flex flex-col gap-3">
              {assemblyDecisions.map((decision) => {
                const pending = decision.result === "قيد التصويت";
                return (
                  <li
                    key={decision.number}
                    className={`rounded-xl border p-4 shadow-sm transition hover:shadow-md ${
                      pending
                        ? "border-amber-200 bg-amber-50/60"
                        : "border-slate-200 bg-white hover:border-asl-orange/30"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-asl-orange/15 ring-2 ring-asl-orange/20">
                        <ClipboardList className="h-5 w-5 text-asl-orange" strokeWidth={2.5} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <span className="rounded-md bg-asl-navy/5 px-2 py-0.5 text-xs font-bold text-asl-navy">
                            قرار {decision.number}
                          </span>
                          <StatusBadge status={decision.result} />
                        </div>
                        <p className="mt-2 text-base font-bold text-asl-navy">{decision.title}</p>
                        <p className="mt-2 text-sm text-slate-500">{decision.date}</p>
                        {!pending && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            <span className="rounded-lg bg-green-50 px-2.5 py-1 text-xs font-bold text-green-700">
                              مؤيد: {decision.yes}
                            </span>
                            <span className="rounded-lg bg-red-50 px-2.5 py-1 text-xs font-bold text-red-700">
                              معارض: {decision.no}
                            </span>
                            <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">
                              ممتنع: {decision.abstain}
                            </span>
                          </div>
                        )}
                        {pending && (
                          <p className="mt-2 text-sm font-medium text-amber-700">
                            في انتظار التصويت خلال الجمعية القادمة
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              onClick={() => setTab("decisions")}
              className="mt-4 text-sm font-semibold text-asl-orange hover:underline"
            >
              عرض كل القرارات ←
            </button>
          </ModuleSection>
        </div>
        </>
      )}

      {tab === "members" && (
        <ModuleSection title="أعضاء الجمعية العامة" icon={Users}>
          <ModuleDataTable
            columns={[
              { key: "number", label: "رقم الانخراط" },
              { key: "name", label: "الاسم واللقب" },
              { key: "joinDate", label: "تاريخ الانخراط" },
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
            rows={assemblyMembers}
            searchPlaceholder="بحث عن عضو..."
          />
        </ModuleSection>
      )}

      {tab === "meetings" && (
        <ModuleSection title="الاجتماعات والمحاضر" icon={Calendar} iconColor="blue">
          <ModuleDataTable
            columns={[
              { key: "number", label: "الرقم" },
              { key: "title", label: "العنوان" },
              { key: "type", label: "النوع" },
              { key: "date", label: "التاريخ" },
              { key: "quorum", label: "النصاب" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={assemblyMeetings}
            searchPlaceholder="بحث في الاجتماعات..."
          />
        </ModuleSection>
      )}

      {tab === "decisions" && (
        <ModuleSection title="القرارات والتصويت" icon={ClipboardList}>
          <ModuleDataTable
            columns={[
              { key: "number", label: "رقم القرار" },
              { key: "title", label: "القرار" },
              { key: "date", label: "التاريخ" },
              { key: "yes", label: "مؤيد" },
              { key: "no", label: "معارض" },
              {
                key: "result",
                label: "النتيجة",
                render: (r) => <StatusBadge status={String(r.result)} />,
              },
            ]}
            rows={assemblyDecisions}
            searchPlaceholder="بحث في القرارات..."
          />
        </ModuleSection>
      )}

      {tab === "elections" && (
        <ModuleSection title="الانتخابات" icon={Vote}>
          <ModuleEmptyState
            icon={Vote}
            title="وحدة الانتخابات"
            description="فتح العهدة الانتخابية، تسجيل المترشحين، إدارة التصويت واحتساب النتائج"
            actionLabel="فتح العهدة الانتخابية"
          />
        </ModuleSection>
      )}

      {tab === "archive" && (
        <ModuleSection title="الأرشيف" icon={Archive} iconColor="blue">
          <ModuleEmptyState
            icon={Archive}
            title="أرشيف الجمعية العامة"
            description="محاضر الجمعيات، قوائم الحضور، قرارات الجمعية، النتائج الانتخابية والتقارير"
            actionLabel="تصفح الأرشيف"
          />
        </ModuleSection>
      )}
    </ClubShell>
  );
}
