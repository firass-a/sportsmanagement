"use client";

import { useState } from "react";
import { Calendar, MapPin, Network, Plus, Trophy, Users } from "lucide-react";
import { ClubShell } from "@/components/club/ClubShell";
import {
  BranchPanel,
  ModuleAlerts,
  ModuleListCard,
  ModulePageHeader,
  ModulePanel,
  ModuleSection,
  ModuleSplitGrid,
  ModuleStatGrid,
  ModuleTabs,
} from "@/components/club/module/ModuleUI";
import {
  branchAlerts,
  branchStats,
  individualBranches,
  teamBranches,
} from "@/lib/club/modules/mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "trainings", label: "التدريبات" },
  { id: "competitions", label: "البطولات" },
];

const trainingItems = [
  {
    title: "تدريب فريق الأشبال – كرة القدم",
    subtitle: "الثلاثاء 18:00",
    meta: "ملعب البلدية · مدرب الأشبال",
    badge: "أسبوعي",
    icon: Calendar,
  },
  {
    title: "حصة جودو – فئة الأصاغر",
    subtitle: "السبت 09:00",
    meta: "القاعة متعددة الرياضات · مدرب الجودو",
    badge: "أسبوعي",
    icon: Calendar,
  },
  {
    title: "تدريب كرة السلة – فئة الناشئين",
    subtitle: "الخميس 17:00",
    meta: "قاعة مغطاة · مدرب كرة السلة",
    badge: "أسبوعي",
    icon: Calendar,
  },
];

const competitionItems = [
  {
    title: "بطولة ولائية – كرة القدم",
    subtitle: "كرة القدم",
    badge: "2026-07-12",
    icon: Trophy,
  },
  {
    title: "بطولة وطنية – الجودو",
    subtitle: "الجودو",
    badge: "2026-08-05",
    icon: Trophy,
  },
  {
    title: "دوري كرة اليد – الجولة 4",
    subtitle: "كرة اليد",
    badge: "2026-07-20",
    icon: Trophy,
  },
];

export function BranchesModule() {
  const [tab, setTab] = useState("dashboard");

  return (
    <ClubShell activeNav="branchOfficials">
      <ModulePageHeader
        title="الفروع الرياضية لنادي: نجوم شباب الكيشين"
        subtitle="إدارة الفروع الجماعية والفردية، الرياضيين، الفرق، المنافسات والتدريبات"
        actions={[
          { label: "إضافة فرع رياضي", icon: Plus, primary: true },
          { label: "الرياضيون", icon: Users },
          { label: "البطولات", icon: Trophy },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleAlerts alerts={branchAlerts} />
          <ModuleStatGrid stats={branchStats} />
          <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-start">
            <BranchPanel
              title="الرياضات الجماعية"
              count={teamBranches.length}
              items={teamBranches}
              variant="team"
              icon={Network}
              iconColor="orange"
            />
            <BranchPanel
              title="الرياضات الفردية"
              count={individualBranches.length}
              items={individualBranches}
              variant="individual"
              icon={Trophy}
              iconColor="blue"
            />
          </div>

          <ModuleSplitGrid>
            <ModuleSection title="التدريبات القادمة" icon={Calendar} iconColor="blue" className="mt-0">
              <ModuleListCard items={trainingItems.slice(0, 3)} />
            </ModuleSection>
            <ModuleSection title="المنافسات القادمة" icon={Trophy} className="mt-0">
              <ModuleListCard items={competitionItems.slice(0, 3)} />
            </ModuleSection>
          </ModuleSplitGrid>
        </>
      )}

      {tab === "trainings" && (
        <ModuleSection title="برنامج التدريبات" icon={MapPin} iconColor="blue">
          <ModulePanel className="mb-4">
            <p className="text-sm text-asl-navy/70">
              <span className="font-bold text-asl-blue">64</span> تدريب مبرمج
              خلال هذا الشهر عبر جميع الفروع.
            </p>
          </ModulePanel>
          <ModuleListCard items={trainingItems} />
        </ModuleSection>
      )}

      {tab === "competitions" && (
        <ModuleSection title="المنافسات القادمة" icon={Trophy}>
          <ModulePanel className="mb-4">
            <p className="text-sm text-asl-navy/70">
              <span className="font-bold text-asl-orange">15</span> منافسة
              قادمة في مختلف الفروع الرياضية.
            </p>
          </ModulePanel>
          <ModuleListCard items={competitionItems} />
        </ModuleSection>
      )}
    </ClubShell>
  );
}
