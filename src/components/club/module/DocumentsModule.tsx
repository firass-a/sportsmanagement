"use client";

import { useState } from "react";
import {
  Archive,
  BookOpen,
  FileText,
  FolderOpen,
  Search,
  Upload,
} from "lucide-react";
import { ClubShell } from "@/components/club/ClubShell";
import {
  DocumentList,
  FolderGrid,
} from "@/components/club/module/DocumentsUI";
import {
  ModuleAlerts,
  ModuleDataTable,
  ModuleEmptyState,
  ModulePageHeader,
  ModuleSection,
  ModuleStatGrid,
  ModuleTabs,
  StatusBadge,
} from "@/components/club/module/ModuleUI";
import {
  documentFolders,
  documentsAlerts,
  documentsList,
  documentsStats,
} from "@/lib/club/modules/extended-mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "all", label: "جميع الملفات" },
  { id: "laws", label: "القوانين" },
  { id: "reports", label: "التقارير" },
  { id: "pending", label: "في انتظار المراجعة" },
  { id: "archive", label: "الأرشيف" },
  { id: "search", label: "البحث" },
];

const dashboardStats = documentsStats.slice(0, 4);

export function DocumentsModule() {
  const [tab, setTab] = useState("dashboard");

  const pendingDocs = documentsList.filter((d) => d.status.includes("انتظار"));
  const lawDocs = documentsList.filter((d) =>
    ["قانون", "نظام داخلي"].includes(d.type),
  );
  const reportDocs = documentsList.filter((d) => d.type.includes("تقرير"));

  return (
    <ClubShell activeNav="documents">
      <ModulePageHeader
        title="الملفات والوثائق والقوانين — نادي نجوم شباب الكيشين"
        subtitle="المكتبة الرقمية الرسمية للقوانين والمحاضر والتقارير وملفات PDF"
        actions={[
          { label: "رفع ملف PDF", icon: Upload, primary: true },
          { label: "مجلد جديد", icon: FolderOpen },
          { label: "إضافة قانون", icon: BookOpen },
          { label: "بحث", icon: Search },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleAlerts alerts={documentsAlerts} />
          <ModuleStatGrid stats={dashboardStats} />

          <ModuleSection
            title="المجلدات الرئيسية"
            icon={FolderOpen}
            iconColor="orange"
            className="!mt-5"
          >
            <FolderGrid folders={documentFolders} onSelect={() => setTab("all")} />
          </ModuleSection>

          <ModuleSection
            title="آخر الملفات"
            icon={FileText}
            iconColor="blue"
            className="!mt-5"
          >
            <DocumentList documents={documentsList.slice(0, 4)} />
            <button
              type="button"
              onClick={() => setTab("all")}
              className="mt-4 text-sm font-semibold text-asl-blue hover:underline"
            >
              عرض كل الملفات ←
            </button>
          </ModuleSection>

          {pendingDocs.length > 0 && (
            <ModuleSection
              title="في انتظار المراجعة"
              icon={FileText}
              iconColor="orange"
              className="!mt-5"
            >
              <DocumentList documents={pendingDocs} />
            </ModuleSection>
          )}
        </>
      )}

      {tab === "all" && (
        <ModuleSection title="جميع الوثائق" icon={FileText} iconColor="blue">
          <DocumentList documents={documentsList} />
        </ModuleSection>
      )}

      {tab === "laws" && (
        <ModuleSection title="القوانين والأنظمة" icon={BookOpen} iconColor="blue">
          <DocumentList documents={lawDocs.length > 0 ? lawDocs : documentsList.slice(0, 2)} />
        </ModuleSection>
      )}

      {tab === "reports" && (
        <ModuleSection title="التقارير الأدبية والمالية" icon={FileText} iconColor="orange">
          <DocumentList documents={reportDocs.length > 0 ? reportDocs : documentsList.slice(2, 4)} />
        </ModuleSection>
      )}

      {tab === "pending" && (
        <ModuleSection title="وثائق في انتظار المراجعة" icon={FileText} iconColor="orange">
          {pendingDocs.length > 0 ? (
            <DocumentList documents={pendingDocs} />
          ) : (
            <ModuleEmptyState
              icon={FileText}
              title="لا توجد وثائق معلقة"
              description="كل الملفات مراجَعة ومعتمدة."
            />
          )}
        </ModuleSection>
      )}

      {tab === "archive" && (
        <ModuleEmptyState
          icon={Archive}
          title="أرشيف الوثائق"
          description="الوثائق المؤرشفة من المواسم والعهود السابقة."
        />
      )}

      {tab === "search" && (
        <ModuleSection title="البحث في الملفات" icon={Search} iconColor="blue">
          <div className="mb-5">
            <input
              type="search"
              placeholder="ابحث بالاسم، النوع، المجلد أو التاريخ..."
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-asl-navy shadow-sm outline-none focus:border-asl-blue/40 focus:ring-2 focus:ring-asl-blue/10"
            />
          </div>
          <ModuleDataTable
            columns={[
              { key: "title", label: "العنوان" },
              { key: "type", label: "النوع" },
              { key: "folder", label: "المجلد" },
              { key: "date", label: "التاريخ" },
              {
                key: "status",
                label: "الحالة",
                render: (r) => <StatusBadge status={String(r.status)} />,
              },
            ]}
            rows={documentsList}
            searchPlaceholder="بحث..."
          />
        </ModuleSection>
      )}
    </ClubShell>
  );
}
