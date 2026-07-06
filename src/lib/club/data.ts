import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Calendar,
  CreditCard,
  Dumbbell,
  FileText,
  FolderOpen,
  Gavel,
  GraduationCap,
  Image,
  LayoutDashboard,
  Medal,
  Network,
  PieChart,
  Receipt,
  Settings,
  TrendingUp,
  Trophy,
  User,
  Users,
  Volleyball,
} from "lucide-react";

export type ClubNavKey =
  | "dashboard"
  | "executive"
  | "assembly"
  | "branchOfficials"
  | "teamSports"
  | "individualSports"
  | "athletes"
  | "digitalCards"
  | "coaches"
  | "referees"
  | "trainings"
  | "championships"
  | "meetings"
  | "literaryReport"
  | "financialReport"
  | "investments"
  | "photoAlbum"
  | "documents"
  | "statistics"
  | "settings";

export type ClubNavItem = {
  key: ClubNavKey;
  icon: LucideIcon;
  href: string;
  highlight?: boolean;
};

export const clubNavItems: ClubNavItem[] = [
  { key: "dashboard", icon: LayoutDashboard, href: "/club/dashboard" },
  { key: "executive", icon: Briefcase, href: "/club/executive" },
  { key: "assembly", icon: Users, href: "/club/assembly" },
  { key: "branchOfficials", icon: Network, href: "/club/branches" },
  { key: "teamSports", icon: Users, href: "/club/team-sports" },
  { key: "individualSports", icon: Medal, href: "/club/individual-sports" },
  { key: "athletes", icon: User, href: "/club/athletes" },
  { key: "digitalCards", icon: CreditCard, href: "/club/digital-cards" },
  { key: "coaches", icon: GraduationCap, href: "/club/coaches" },
  { key: "referees", icon: Gavel, href: "/club/referees" },
  { key: "trainings", icon: Dumbbell, href: "/club/trainings" },
  { key: "championships", icon: Trophy, href: "/club/championships" },
  { key: "meetings", icon: Calendar, href: "/club/meetings" },
  { key: "literaryReport", icon: FileText, href: "/club/literary-report" },
  { key: "financialReport", icon: Receipt, href: "/club/financial-report" },
  { key: "investments", icon: TrendingUp, href: "/club/investments" },
  { key: "photoAlbum", icon: Image, href: "/club/album" },
  { key: "documents", icon: FolderOpen, href: "/club/documents" },
  {
    key: "statistics",
    icon: PieChart,
    href: "/club/statistics",
    highlight: true,
  },
  { key: "settings", icon: Settings, href: "/club/settings" },
];

export const quickStatsData = [
  { key: "coaches" as const, value: 18, icon: GraduationCap },
  { key: "athletes" as const, value: 248, icon: User },
  { key: "sports" as const, value: 12, icon: Volleyball },
  { key: "championships" as const, value: 15, icon: Trophy },
  { key: "meetings" as const, value: 8, icon: Users },
  { key: "branches" as const, value: 7, icon: Network },
];

export const trendStatsData = [
  { key: "medals" as const, value: 87, change: "+15%", color: "orange" as const },
  { key: "championships" as const, value: 15, change: "+8%", color: "blue" as const },
  { key: "activeSports" as const, value: 12, change: "+12%", color: "orange" as const },
  { key: "totalAthletes" as const, value: 248, change: "+7%", color: "blue" as const },
];

export const ageData = [
  { name: "under15", value: 17, color: "#1a6fd4" },
  { name: "age15to19", value: 28, color: "#f37021" },
  { name: "age19to25", value: 38, color: "#0a2540" },
];

export const sportsBarData = [
  { key: "football" as const, value: 112 },
  { key: "basketball" as const, value: 45 },
  { key: "handball" as const, value: 38 },
  { key: "athletics" as const, value: 25 },
  { key: "swimming" as const, value: 18 },
];

export const individualSports = [
  { key: "boxing" as const, image: "/images/sports/boxing.png" },
  { key: "tennis" as const, image: "/images/sports/tennis.png" },
  { key: "swimming" as const, image: "/images/sports/swimming.png" },
  { key: "athletics" as const, image: "/images/sports/athletics-jumper.png" },
  {
    key: "weightlifting" as const,
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=80",
  },
  { key: "tableTennis" as const, image: "/images/sports/table-tennis.png" },
  { key: "karate" as const, image: "/images/sports/karate.png" },
  { key: "judo" as const, image: "/images/sports/judo.png" },
  { key: "chess" as const, image: "/images/sports/chess.png" },
  { key: "wrestling" as const, image: "/images/sports/wrestling.png" },
  { key: "shooting" as const, image: "/images/sports/shooting.png" },
  { key: "cycling" as const, image: "/images/sports/cycling.png" },
];

export const sparklineData = {
  orange: [20, 35, 28, 45, 38, 55, 48, 62],
  blue: [30, 25, 40, 35, 50, 45, 58, 52],
};
