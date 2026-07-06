import { NationalShell } from "@/components/national/NationalShell";
import { DashboardWidgets } from "@/components/national/DashboardWidgets";
import { NationalFooter } from "@/components/national/NationalFooter";
import { WelcomeBanner } from "@/components/national/WelcomeBanner";

export default function NationalDashboardPage() {
  return (
    <NationalShell activeNav="dashboard">
      <WelcomeBanner />
      <DashboardWidgets />
      <NationalFooter />
    </NationalShell>
  );
}
