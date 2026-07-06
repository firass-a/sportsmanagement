"use client";

import { useState } from "react";
import {
  Archive,
  Camera,
  FolderOpen,
  ImagePlus,
  Upload,
  Video,
} from "lucide-react";
import { ClubShell } from "@/components/club/ClubShell";
import {
  AlbumGrid,
  PhotoGrid,
  VideoGrid,
} from "@/components/club/module/MediaGalleryUI";
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
  albumAlerts,
  albumGalleryItems,
  albums,
  albumStats,
  albumVideoItems,
} from "@/lib/club/modules/extended-mock-data";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "albums", label: "الألبومات" },
  { id: "photos", label: "الصور" },
  { id: "videos", label: "الفيديوهات" },
  { id: "pending", label: "قيد المراجعة" },
  { id: "archive", label: "الأرشيف" },
];

const dashboardStats = albumStats.slice(0, 4);

export function PhotoAlbumModule() {
  const [tab, setTab] = useState("dashboard");

  const pendingAlbums = albums.filter((a) => a.status === "قيد المراجعة");

  return (
    <ClubShell activeNav="photoAlbum">
      <ModulePageHeader
        title="ألبوم الصور والفيديو — نادي نجوم شباب الكيشين"
        subtitle="توثيق النشاطات والتدريبات والبطولات بالصور والفيديو"
        actions={[
          { label: "رفع صور", icon: ImagePlus, primary: true },
          { label: "رفع فيديو", icon: Upload },
          { label: "ألبوم جديد", icon: FolderOpen },
        ]}
      />

      <ModuleTabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === "dashboard" && (
        <>
          <ModuleAlerts alerts={albumAlerts} />
          <ModuleStatGrid stats={dashboardStats} />

          <ModuleSection
            title="آخر الألبومات"
            icon={FolderOpen}
            iconColor="blue"
            className="!mt-5"
          >
            <AlbumGrid albums={albums.slice(0, 3)} onSelect={() => setTab("albums")} />
            <button
              type="button"
              onClick={() => setTab("albums")}
              className="mt-4 text-sm font-semibold text-asl-blue hover:underline"
            >
              عرض كل الألبومات ({albums.length}) ←
            </button>
          </ModuleSection>

          <ModuleSection
            title="معرض الصور الأخيرة"
            icon={Camera}
            iconColor="orange"
            className="!mt-5"
          >
            <PhotoGrid items={albumGalleryItems.slice(0, 8)} />
            <button
              type="button"
              onClick={() => setTab("photos")}
              className="mt-4 text-sm font-semibold text-asl-orange hover:underline"
            >
              عرض كل الصور ←
            </button>
          </ModuleSection>

          {pendingAlbums.length > 0 && (
            <ModuleSection
              title="في انتظار المراجعة"
              icon={Camera}
              iconColor="orange"
              className="!mt-5"
            >
              <AlbumGrid albums={pendingAlbums} onSelect={() => setTab("pending")} />
            </ModuleSection>
          )}
        </>
      )}

      {tab === "albums" && (
        <ModuleSection title="جميع الألبومات" icon={FolderOpen} iconColor="blue">
          <AlbumGrid albums={albums} />
        </ModuleSection>
      )}

      {tab === "photos" && (
        <ModuleSection title="معرض الصور" icon={Camera} iconColor="orange">
          <p className="mb-4 text-sm text-slate-500">
            {albumGalleryItems.length} صورة موزعة على {albums.length} ألبوم
          </p>
          <PhotoGrid items={albumGalleryItems} />
        </ModuleSection>
      )}

      {tab === "videos" && (
        <ModuleSection title="معرض الفيديو" icon={Video} iconColor="blue">
          <p className="mb-4 text-sm text-slate-500">
            {albumVideoItems.length} فيديو موثق للتدريبات والبطولات والمناسبات
          </p>
          <VideoGrid items={albumVideoItems} />
        </ModuleSection>
      )}

      {tab === "pending" && (
        <ModuleSection title="محتوى قيد المراجعة" icon={Camera} iconColor="orange">
          {pendingAlbums.length > 0 ? (
            <>
              <AlbumGrid albums={pendingAlbums} />
              <div className="mt-5">
                <ModuleDataTable
                  columns={[
                    { key: "name", label: "الألبوم" },
                    { key: "photos", label: "الصور" },
                    { key: "videos", label: "الفيديو" },
                    { key: "date", label: "التاريخ" },
                    {
                      key: "status",
                      label: "الحالة",
                      render: () => <StatusBadge status="قيد المراجعة" />,
                    },
                  ]}
                  rows={pendingAlbums}
                />
              </div>
            </>
          ) : (
            <ModuleEmptyState
              icon={Camera}
              title="لا يوجد محتوى معلق"
              description="كل الصور والفيديوهات معتمدة ومنشورة."
            />
          )}
        </ModuleSection>
      )}

      {tab === "archive" && (
        <ModuleEmptyState
          icon={Archive}
          title="أرشيف الوسائط"
          description="الألبومات والصور والفيديوهات المعتمدة والمؤرشفة من المواسم السابقة."
        />
      )}
    </ClubShell>
  );
}
