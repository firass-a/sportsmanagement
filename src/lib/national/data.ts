import {
  Award,
  Building2,
  Camera,
  ClipboardList,
  GraduationCap,
  IdCard,
  LayoutDashboard,
  Medal,
  Network,
  Settings,
  Shield,
  Sparkles,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

export type NationalNavKey =
  | "dashboard"
  | "federation"
  | "leagues"
  | "officialClubs"
  | "licenses"
  | "transfers"
  | "tournaments"
  | "trainingCamps"
  | "rankExams"
  | "nationalTeam"
  | "statistics"
  | "album"
  | "settings";

export type NationalNavItem = {
  key: NationalNavKey;
  icon: LucideIcon;
  href: string;
  highlight?: boolean;
};

export const nationalNavItems: NationalNavItem[] = [
  { key: "dashboard", icon: LayoutDashboard, href: "/national/dashboard" },
  { key: "federation", icon: Shield, href: "/national/federation" },
  { key: "leagues", icon: Network, href: "/national/leagues" },
  { key: "officialClubs", icon: Building2, href: "/national/clubs" },
  { key: "licenses", icon: IdCard, href: "/national/licenses" },
  { key: "transfers", icon: Users, href: "/national/transfers" },
  { key: "tournaments", icon: Trophy, href: "/national/tournaments" },
  { key: "trainingCamps", icon: GraduationCap, href: "/national/training-camps" },
  { key: "rankExams", icon: Award, href: "/national/rank-exams" },
  { key: "nationalTeam", icon: Medal, href: "/national/national-team" },
  { key: "statistics", icon: Sparkles, href: "/national/statistics", highlight: true },
  { key: "album", icon: Camera, href: "/national/album" },
  { key: "settings", icon: Settings, href: "/national/settings" },
];

export const nationalQuickStats = [
  { key: "totalLicenses" as const, value: "45,782", trend: "-12%", icon: IdCard },
  { key: "athletes" as const, value: "32,146", trend: "+8%", icon: Users },
  { key: "coaches" as const, value: "3,245", trend: "-10%", icon: GraduationCap },
  { key: "referees" as const, value: "1,892", trend: "+7%", icon: ClipboardList },
  { key: "tournaments" as const, value: "58", trend: "", icon: Trophy },
  { key: "pendingRequests" as const, value: "312", trend: "", icon: Award },
];

export const nationalFooterStats = [
  { key: "federations" as const, value: "1", icon: Shield },
  { key: "leagues" as const, value: "48", icon: Network },
  { key: "clubs" as const, value: "1,248", icon: Building2 },
  { key: "sports" as const, value: "26", icon: Trophy },
  { key: "ageGroups" as const, value: "7", icon: Users },
  { key: "seasons" as const, value: "3", icon: Award },
];

export const seasonTrendData = [
  { month: "سبتمبر", licenses: 38000, athletes: 26000, coaches: 2800, referees: 1500 },
  { month: "أكتوبر", licenses: 39500, athletes: 27200, coaches: 2900, referees: 1580 },
  { month: "نوفمبر", licenses: 41000, athletes: 28400, coaches: 2980, referees: 1650 },
  { month: "ديسمبر", licenses: 42200, athletes: 29300, coaches: 3050, referees: 1700 },
  { month: "يناير", licenses: 43500, athletes: 30200, coaches: 3120, referees: 1750 },
  { month: "فبراير", licenses: 44200, athletes: 30800, coaches: 3160, referees: 1780 },
  { month: "مارس", licenses: 44800, athletes: 31200, coaches: 3190, referees: 1820 },
  { month: "أبريل", licenses: 45200, athletes: 31600, coaches: 3210, referees: 1850 },
  { month: "مايو", licenses: 45500, athletes: 31900, coaches: 3225, referees: 1875 },
  { month: "يونيو", licenses: 45782, athletes: 32146, coaches: 3245, referees: 1892 },
];

export const licenseDistribution = [
  { name: "رياضيون", value: 70, count: 32146, color: "#2D5CFE" },
  { name: "مدربون", value: 17, count: 7783, color: "#27AE60" },
  { name: "حكام", value: 10, count: 4578, color: "#F2994A" },
  { name: "إداريون", value: 3, count: 1375, color: "#9B51E0" },
];
