"use client";

import { Medal, Plus, Trophy, Users } from "lucide-react";
import { ClubShell } from "@/components/club/ClubShell";
import {
  BranchCards,
  ModulePageHeader,
  ModuleSection,
} from "@/components/club/module/ModuleUI";
import { individualBranches } from "@/lib/club/modules/mock-data";

export function IndividualSportsModule() {
  return (
    <ClubShell activeNav="individualSports">
      <ModulePageHeader
        title="الرياضات الفردية — نادي نجوم شباب الكيشين"
        subtitle="إدارة الرياضيين، المدربين والمنافسات في الرياضات الفردية"
        actions={[
          { label: "إضافة فرع فردي", icon: Plus, primary: true },
          { label: "الرياضيون", icon: Users },
          { label: "البطولات", icon: Trophy },
        ]}
      />

      <ModuleSection title="الرياضات الفردية" icon={Medal} iconColor="blue">
        <BranchCards items={individualBranches} variant="individual" layout="grid" />
      </ModuleSection>
    </ClubShell>
  );
}
