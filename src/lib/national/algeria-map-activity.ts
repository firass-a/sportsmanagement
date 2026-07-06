export type ActivityLevel = "veryActive" | "active" | "medium" | "weak" | "none";

export const ACTIVITY_COLORS: Record<ActivityLevel, string> = {
  veryActive: "#14532d",
  active: "#22c55e",
  medium: "#fbbf24",
  weak: "#f87171",
  none: "#d1d5db",
};

export const ACTIVITY_LABELS: Record<ActivityLevel, string> = {
  veryActive: "نشط جداً",
  active: "نشط",
  medium: "متوسط",
  weak: "ضعيف",
  none: "",
};

export const LEGEND_ITEMS: { level: ActivityLevel; label: string }[] = [
  { level: "veryActive", label: "نشط جداً" },
  { level: "active", label: "نشط" },
  { level: "medium", label: "متوسط" },
  { level: "weak", label: "ضعيف" },
];

/** Only highlight a handful of regions — everything else stays grey */
const HIGHLIGHTED: Record<string, ActivityLevel> = {
  // Dark green — capital hub
  "16": "veryActive", // Algiers
  "35": "veryActive", // Boumerdes
  // Green — active cities
  "31": "active", // Oran
  "25": "active", // Constantine
  "23": "active", // Annaba
  "21": "active", // Skikda
  // Yellow — moderate
  "19": "medium", // Setif
  "06": "medium", // Bejaia
  "05": "medium", // Batna
  // Red — low activity
  "01": "weak", // Adrar
  "11": "weak", // Tamanrasset
  "30": "weak", // Ouargla
  "33": "weak", // Illizi
};

export function getActivityForRegion(id: string): ActivityLevel {
  return HIGHLIGHTED[id] ?? "none";
}
