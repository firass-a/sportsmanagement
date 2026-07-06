import type { LucideIcon } from "lucide-react";

export type ModuleStat = {
  label: string;
  value: string | number;
  change?: string;
};

export type ModuleAlert = {
  id: string;
  message: string;
  type: "info" | "warning" | "success";
};

export type ModuleAction = {
  id: string;
  label: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary";
};

export type TableColumn<T> = {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
};

export type ModuleTab = {
  id: string;
  label: string;
};

export const clubInfo = {
  name: "نجوم شباب الكيشين",
  registration: "2026/CL-048",
  wilaya: "الجزائر",
  commune: "الدار البيضاء",
  mandateStart: "2024-01-15",
  mandateEnd: "2028-01-14",
  status: "فعال",
};
