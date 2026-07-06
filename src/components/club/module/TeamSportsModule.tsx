"use client";

import { Network, Plus, Trophy, Users } from "lucide-react";
import { ClubShell } from "@/components/club/ClubShell";
import {
  BranchCards,
  ModulePageHeader,
  ModuleSection,
} from "@/components/club/module/ModuleUI";
import { teamBranches } from "@/lib/club/modules/mock-data";

export function TeamSportsModule() {
  return (
    <ClubShell activeNav="teamSports">
      <ModulePageHeader
        title="الرياضات الجماعية — نادي نجوم شباب الكيشين"
        subtitle="إدارة الفرق، اللاعبين، المدربين والمنافسات في الرياضات الجماعية"
        actions={[
          { label: "إضافة فرع جماعي", icon: Plus, primary: true },
          { label: "الرياضيون", icon: Users },
          { label: "البطولات", icon: Trophy },
        ]}
      />

      <ModuleSection title="الرياضات الجماعية" icon={Network}>
        <BranchCards items={teamBranches} variant="team" layout="grid" />
      </ModuleSection>
    </ClubShell>
  );
}
