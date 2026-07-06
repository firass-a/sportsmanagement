import { ClubShell } from "@/components/club/ClubShell";
import { DashboardExtras } from "@/components/club/DashboardExtras";
import { QuickStats } from "@/components/club/QuickStats";
import { WelcomeBanner } from "@/components/club/WelcomeBanner";

export default function ClubDashboardPage() {
  return (
    <ClubShell activeNav="dashboard">
      <WelcomeBanner />
      <QuickStats />
      <DashboardExtras />
    </ClubShell>
  );
}
