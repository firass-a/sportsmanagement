"use client";

import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Building2,
  FileText,
  FolderOpen,
  Landmark,
  ScrollText,
} from "lucide-react";
import { StatusBadge } from "@/components/club/module/ModuleUI";

type FolderColor = "blue" | "orange" | "navy" | "green" | "purple" | "amber" | string;

const FOLDER_BG: Record<string, string> = {
  blue: "bg-asl-blue/10 ring-asl-blue/20",
  orange: "bg-asl-orange/10 ring-asl-orange/20",
  navy: "bg-asl-navy/10 ring-asl-navy/20",
  green: "bg-emerald-100 ring-emerald-200",
  purple: "bg-purple-100 ring-purple-200",
  amber: "bg-amber-100 ring-amber-200",
};

const FOLDER_ICON: Record<string, string> = {
  blue: "text-asl-blue",
  orange: "text-asl-orange",
  navy: "text-asl-navy",
  green: "text-emerald-600",
  purple: "text-purple-600",
  amber: "text-amber-600",
};

const FOLDER_TYPE_ICON: Record<string, LucideIcon> = {
  law: BookOpen,
  executive: Building2,
  assembly: Landmark,
  branch: FolderOpen,
  report: ScrollText,
  finance: FileText,
};

export function FolderGrid({
  folders,
  onSelect,
}: {
  folders: {
    id: string;
    name: string;
    files: number;
    subfolders: number;
    color: FolderColor;
    icon: string;
  }[];
  onSelect?: (id: string) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {folders.map((folder) => {
        const Icon = FOLDER_TYPE_ICON[folder.icon] ?? FolderOpen;
        return (
          <button
            key={folder.id}
            type="button"
            onClick={() => onSelect?.(folder.id)}
            className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 text-right shadow-sm transition hover:border-asl-blue/30 hover:shadow-md"
          >
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ring-2 ${FOLDER_BG[folder.color] ?? FOLDER_BG.blue}`}
            >
              <Icon className={`h-6 w-6 ${FOLDER_ICON[folder.color] ?? FOLDER_ICON.blue}`} strokeWidth={2} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-asl-navy">{folder.name}</p>
              <p className="mt-1 text-xs text-slate-500">
                {folder.files} ملف · {folder.subfolders} مجلد فرعي
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export function DocumentCard({
  title,
  type,
  folder,
  version,
  date,
  size,
  status,
}: {
  title: string;
  type: string;
  folder: string;
  version: string;
  date: string;
  size: string;
  status: string;
}) {
  const pending = status.includes("انتظار");

  return (
    <div
      className={`flex items-start gap-3 rounded-xl border p-4 shadow-sm transition hover:shadow-md ${
        pending
          ? "border-amber-200 bg-amber-50/50"
          : "border-slate-200 bg-white hover:border-asl-blue/30"
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-red-50 ring-1 ring-red-100">
        <span className="text-[10px] font-black text-red-600">PDF</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <p className="text-sm font-bold text-asl-navy">{title}</p>
          <StatusBadge status={status} />
        </div>
        <p className="mt-1 text-xs text-slate-500">
          {type} · {folder}
        </p>
        <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-slate-400">
          <span>v{version}</span>
          <span>{date}</span>
          <span>{size}</span>
        </div>
      </div>
    </div>
  );
}

export function DocumentList({ documents }: { documents: Parameters<typeof DocumentCard>[0][] }) {
  return (
    <ul className="space-y-3">
      {documents.map((doc) => (
        <li key={doc.title}>
          <DocumentCard {...doc} />
        </li>
      ))}
    </ul>
  );
}
