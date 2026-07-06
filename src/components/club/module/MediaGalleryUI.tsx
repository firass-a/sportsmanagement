"use client";

import Image from "next/image";
import { Camera, Play, Video } from "lucide-react";
import { StatusBadge } from "@/components/club/module/ModuleUI";

function MediaCover({
  src,
  alt,
  aspectClass,
  objectPosition = "center",
  children,
  zoomOnHover = true,
}: {
  src: string;
  alt: string;
  aspectClass: string;
  objectPosition?: string;
  children?: React.ReactNode;
  zoomOnHover?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${aspectClass}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className={`object-cover ${zoomOnHover ? "transition duration-300 group-hover:scale-105" : ""}`}
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/5" />
      {children}
    </div>
  );
}

export function AlbumCoverCard({
  name,
  type,
  branch,
  photos,
  videos,
  date,
  status,
  image,
  imagePosition = "center",
  onClick,
}: {
  name: string;
  type: string;
  branch?: string;
  photos: number;
  videos: number;
  date: string;
  status: string;
  image: string;
  imagePosition?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-right shadow-sm transition hover:border-asl-blue/30 hover:shadow-md"
    >
      <MediaCover
        src={image}
        alt={name}
        aspectClass="h-40"
        objectPosition={imagePosition}
      >
        <div className="absolute inset-x-0 bottom-0 px-3 pb-3 pt-6">
          <StatusBadge status={status} />
        </div>
        <div className="absolute start-3 top-3 flex gap-1.5">
          <span className="flex items-center gap-1 rounded-full bg-black/45 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
            <Camera className="h-3 w-3" />
            {photos}
          </span>
          {videos > 0 && (
            <span className="flex items-center gap-1 rounded-full bg-black/45 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
              <Video className="h-3 w-3" />
              {videos}
            </span>
          )}
        </div>
        <span className="absolute end-3 top-3 rounded-full bg-black/45 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
          {type}
        </span>
      </MediaCover>
      <div className="p-3">
        <p className="line-clamp-2 text-sm font-bold text-asl-navy">{name}</p>
        <p className="mt-1 text-xs text-slate-500">
          {branch ? `${branch} · ` : ""}
          {date}
        </p>
      </div>
    </button>
  );
}

export function PhotoGrid({
  items,
}: {
  items: {
    id: string;
    title: string;
    album: string;
    date: string;
    category: string;
    image: string;
  }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className="group overflow-hidden rounded-xl border border-slate-200 bg-white text-right shadow-sm transition hover:border-asl-orange/30 hover:shadow-md"
        >
          <MediaCover src={item.image} alt={item.title} aspectClass="aspect-square">
            <span className="absolute end-2 top-2 rounded-full bg-black/45 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
              {item.category}
            </span>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-asl-navy shadow">
                عرض
              </span>
            </div>
          </MediaCover>
          <div className="p-2.5">
            <p className="truncate text-xs font-bold text-asl-navy">{item.title}</p>
            <p className="mt-0.5 truncate text-[10px] text-slate-500">{item.date}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export function VideoGrid({
  items,
}: {
  items: {
    id: string;
    title: string;
    album: string;
    date: string;
    duration: string;
    image: string;
  }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className="group overflow-hidden rounded-xl border border-slate-200 bg-white text-right shadow-sm transition hover:border-asl-blue/30 hover:shadow-md"
        >
          <MediaCover src={item.image} alt={item.title} aspectClass="aspect-video" zoomOnHover={false}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 ring-2 ring-white/40 backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-white/30">
                <Play className="h-6 w-6 fill-white text-white" />
              </div>
            </div>
            <span className="absolute bottom-2 end-2 rounded-md bg-black/60 px-2 py-0.5 text-xs font-bold text-white">
              {item.duration}
            </span>
          </MediaCover>
          <div className="p-3">
            <p className="text-sm font-bold text-asl-navy">{item.title}</p>
            <p className="mt-0.5 text-xs text-slate-500">
              {item.album} · {item.date}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}

export function AlbumGrid({
  albums,
  onSelect,
}: {
  albums: {
    id: string;
    name: string;
    type: string;
    branch: string;
    photos: number;
    videos: number;
    date: string;
    status: string;
    image: string;
    imagePosition?: string;
  }[];
  onSelect?: (id: string) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {albums.map((album) => (
        <AlbumCoverCard
          key={album.id}
          {...album}
          onClick={() => onSelect?.(album.id)}
        />
      ))}
    </div>
  );
}
