"use client";

import { useState } from "react";
import {
  Bell,
  Building2,
  CreditCard,
  Settings,
  Shield,
  Users,
} from "lucide-react";
import { ClubShell } from "@/components/club/ClubShell";
import {
  ModuleAlerts,
  ModuleDataTable,
  ModulePageHeader,
  ModuleSection,
  ModuleStatGrid,
  ModuleTabs,
  StatusBadge,
} from "@/components/club/module/ModuleUI";
import { clubInfo } from "@/lib/club/modules/types";
import {
  settingsActivation,
  settingsAlerts,
  settingsAuditLog,
  settingsBranches,
  settingsNotifications,
  settingsRoles,
  settingsStats,
  settingsUsers,
} from "@/lib/club/modules/extended-mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة الإعدادات" },
  { id: "club", label: "بيانات النادي" },
  { id: "branches", label: "الفروع" },
  { id: "users", label: "المستخدمون" },
  { id: "permissions", label: "الصلاحيات" },
  { id: "cards", label: "البطاقات" },
  { id: "notifications", label: "الإشعارات" },
  { id: "audit", label: "سجل التعديلات" },
];

const dashboardStats = settingsStats.slice(0, 4);

const quickActions = [
  { label: "بيانات النادي", icon: Building2, tab: "club" as const },
  { label: "الفروع", icon: Building2, tab: "branches" as const },
  { label: "المستخدمون", icon: Users, tab: "users" as const },
  { label: "الصلاحيات", icon: Shield, tab: "permissions" as const },
  { label: "البطاقات", icon: CreditCard, tab: "cards" as const },
  { label: "الإشعارات", icon: Bell, tab: "notifications" as const },
];

const ROLE_RING: Record<string, string> = {
  navy: "bg-asl-navy/10 ring-asl-navy/20 text-asl-navy",
  blue: "bg-asl-blue/10 ring-asl-blue/20 text-asl-blue",
  orange: "bg-asl-orange/10 ring-asl-orange/20 text-asl-orange",
  green: "bg-emerald-100 ring-emerald-200 text-emerald-700",
  purple: "bg-purple-100 ring-purple-200 text-purple-700",
};

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function ProfileCompletionCard() {
  const pct = 92;
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-asl-navy">اكتمال ملف النادي</p>
          <p className="mt-1 text-xs text-slate-500">
            {clubInfo.name} · {clubInfo.registration}
          </p>
        </div>
        <span className="text-2xl font-bold text-asl-blue">{pct}%</span>
      </div>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-asl-blue" style={{ width: `${pct}%` }} />
      </div>
      <ul className="mt-4 space-y-2 text-xs text-slate-600">
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          البيانات الأساسية — مكتمل
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          الفروع والمدربون — مكتمل
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          وثيقة الاعتماد — ناقصة
        </li>
      </ul>
    </div>
  );
}

function ClubInfoPanel() {
  const fields = [
    { label: "اسم النادي", value: clubInfo.name },
    { label: "رقم الاعتماد", value: clubInfo.registration },
    { label: "الولاية", value: clubInfo.wilaya },
    { label: "البلدية", value: clubInfo.commune },
    { label: "بداية العهدة", value: clubInfo.mandateStart },
    { label: "نهاية العهدة", value: clubInfo.mandateEnd },
    { label: "الحالة", value: clubInfo.status },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {fields.map((field) => (
        <div
          key={field.label}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <p className="text-xs font-semibold text-slate-500">{field.label}</p>
          <p className="mt-1.5 text-sm font-bold text-asl-navy">{field.value}</p>
        </div>
      ))}
    </div>
  );
}

export function SettingsModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <ClubShell activeNav="settings">
      <ModulePageHeader
        title="إعدادات نادي: نجوم شباب الكيشين"
        subtitle="تهيئة بيانات النادي، الصلاحيات، الفروع، البطاقات الرقمية والإشعارات"
        actions={[{ label: "حفظ التعديلات", icon: Settings, primary: true }]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleStatGrid stats={dashboardStats} />
          <ModuleAlerts alerts={settingsAlerts} />

          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {quickActions.map(({ label, icon: Icon, tab: targetTab }) => (
              <button
                key={label}
                type="button"
                onClick={() => setTab(targetTab)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-xs font-semibold text-asl-navy shadow-sm transition hover:border-asl-blue/30 hover:shadow-md md:text-sm"
              >
                <Icon className="h-4 w-4 shrink-0 text-asl-orange" strokeWidth={2.5} />
                {label}
              </button>
            ))}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <ProfileCompletionCard />

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-asl-navy">التفعيل السنوي 2026-2027</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-asl-blue/5 p-3 text-center">
                  <p className="text-xl font-bold text-asl-blue">{settingsActivation.cardsActivated}</p>
                  <p className="text-[11px] text-slate-500">بطاقات مفعلة</p>
                </div>
                <div className="rounded-lg bg-amber-50 p-3 text-center">
                  <p className="text-xl font-bold text-asl-orange">{settingsActivation.cardsPending}</p>
                  <p className="text-[11px] text-slate-500">في الانتظار</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                الموسم: {settingsActivation.season} · من {settingsActivation.start} إلى{" "}
                {settingsActivation.end}
              </p>
              <button
                type="button"
                onClick={() => setTab("cards")}
                className="mt-3 text-sm font-semibold text-asl-blue hover:underline"
              >
                إعدادات البطاقات ←
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <ModuleSection title="المستخدمون النشطون" icon={Users} iconColor="blue" className="!mt-0">
              <ul className="space-y-3">
                {settingsUsers.map((user) => (
                  <li
                    key={user.name}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-asl-navy text-sm font-bold text-white">
                      {initials(user.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-asl-navy">{user.name}</p>
                      <p className="text-xs text-slate-500">
                        {user.role} · {user.branch}
                      </p>
                    </div>
                    <StatusBadge status={user.status} />
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setTab("users")}
                className="mt-3 text-sm font-semibold text-asl-blue hover:underline"
              >
                إدارة المستخدمين ←
              </button>
            </ModuleSection>

            <ModuleSection title="الفروع الرياضية" icon={Building2} iconColor="orange" className="!mt-0">
              <ul className="space-y-3">
                {settingsBranches.map((branch) => (
                  <li
                    key={branch.name}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <p className="text-sm font-bold text-asl-navy">{branch.name}</p>
                      <StatusBadge status={branch.status} />
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      {branch.type} · {branch.manager}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs">
                      <span>
                        <span className="text-slate-500">الرياضيون: </span>
                        <span className="font-bold text-asl-navy">{branch.athletes}</span>
                      </span>
                      <span>
                        <span className="text-slate-500">المدرب: </span>
                        <span className="font-bold text-asl-orange">{branch.coach}</span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setTab("branches")}
                className="mt-3 text-sm font-semibold text-asl-orange hover:underline"
              >
                إعدادات الفروع ←
              </button>
            </ModuleSection>
          </div>
        </>
      )}

      {tab === "club" && (
        <ModuleSection title="بيانات النادي الأساسية" icon={Building2} iconColor="blue">
          <ClubInfoPanel />
        </ModuleSection>
      )}

      {tab === "branches" && (
        <ModuleSection title="إعدادات الفروع الرياضية" icon={Building2} iconColor="orange">
          <div className="mb-5 grid gap-4 sm:grid-cols-3">
            {settingsBranches.map((branch) => (
              <div
                key={branch.name}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-base font-bold text-asl-navy">{branch.name}</p>
                  <StatusBadge status={branch.status} />
                </div>
                <p className="mt-1 text-xs text-slate-500">{branch.type}</p>
                <dl className="mt-4 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <dt className="text-slate-500">المسؤول</dt>
                    <dd className="font-semibold text-asl-navy">{branch.manager}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">المدرب</dt>
                    <dd className="font-semibold text-asl-orange">{branch.coach}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">الرياضيون</dt>
                    <dd className="font-bold text-asl-blue">{branch.athletes}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <ModuleDataTable
            columns={[
              { key: "name", label: "الفرع" },
              { key: "type", label: "النوع" },
              { key: "manager", label: "المسؤول" },
              { key: "coach", label: "المدرب" },
              { key: "athletes", label: "الرياضيون" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={settingsBranches}
          />
        </ModuleSection>
      )}

      {tab === "users" && (
        <ModuleSection title="المستخدمون والحسابات" icon={Users} iconColor="blue">
          <ul className="mb-5 space-y-3">
            {settingsUsers.map((user) => (
              <li
                key={user.name}
                className="flex flex-wrap items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-asl-navy text-sm font-bold text-white">
                  {initials(user.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-asl-navy">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.role} · {user.branch}</p>
                  <p className="mt-1 text-[11px] text-slate-400">آخر دخول: {user.lastLogin}</p>
                </div>
                <StatusBadge status={user.status} />
              </li>
            ))}
          </ul>
          <ModuleDataTable
            columns={[
              { key: "name", label: "الاسم" },
              { key: "role", label: "الصفة" },
              { key: "branch", label: "الفرع" },
              { key: "lastLogin", label: "آخر دخول" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={settingsUsers}
          />
        </ModuleSection>
      )}

      {tab === "permissions" && (
        <ModuleSection title="الصلاحيات والأدوار" icon={Shield} iconColor="blue">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {settingsRoles.map((role) => (
              <div
                key={role.role}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-2 ${ROLE_RING[role.color] ?? ROLE_RING.blue}`}
                  >
                    <Shield className="h-4 w-4" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-asl-navy">{role.role}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{role.users} مستخدم</p>
                  </div>
                </div>
                <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
                  {role.permissions}
                </p>
              </div>
            ))}
          </div>
        </ModuleSection>
      )}

      {tab === "cards" && (
        <ModuleSection title="البطاقات والتفعيل السنوي" icon={CreditCard} iconColor="orange">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-asl-navy">الموسم الرياضي</p>
              <p className="mt-2 text-2xl font-bold text-asl-orange">{settingsActivation.season}</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-slate-500">تاريخ البداية</dt>
                  <dd className="font-semibold">{settingsActivation.start}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">تاريخ النهاية</dt>
                  <dd className="font-semibold">{settingsActivation.end}</dd>
                </div>
              </dl>
              <StatusBadge status={settingsActivation.status} />
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-asl-navy">حالة البطاقات</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-green-50 p-4 text-center">
                  <p className="text-2xl font-bold text-green-700">{settingsActivation.cardsActivated}</p>
                  <p className="text-xs text-green-800">مفعلة</p>
                </div>
                <div className="rounded-lg bg-amber-50 p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">{settingsActivation.cardsPending}</p>
                  <p className="text-xs text-amber-800">في الانتظار</p>
                </div>
              </div>
            </div>
          </div>
        </ModuleSection>
      )}

      {tab === "notifications" && (
        <ModuleSection title="الإشعارات والرسائل" icon={Bell} iconColor="blue">
          <ul className="space-y-3">
            {settingsNotifications.map((item) => (
              <li
                key={item.label}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div>
                  <p className="text-sm font-bold text-asl-navy">{item.label}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.channel}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    item.enabled
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {item.enabled ? "مفعّل" : "معطّل"}
                </span>
              </li>
            ))}
          </ul>
        </ModuleSection>
      )}

      {tab === "audit" && (
        <ModuleSection title="سجل تعديلات الإعدادات" icon={Settings} iconColor="blue">
          <ul className="space-y-3">
            {settingsAuditLog.map((entry) => (
              <li
                key={`${entry.date}-${entry.action}`}
                className="flex flex-wrap items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-asl-blue/10">
                  <Settings className="h-4 w-4 text-asl-blue" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-asl-navy">{entry.action}</p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {entry.user} · {entry.section}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">{entry.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </ModuleSection>
      )}
    </ClubShell>
  );
}
