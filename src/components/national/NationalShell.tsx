"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sidebar } from "./Sidebar";
import { TopHeader } from "./TopHeader";
import type { NationalNavKey } from "@/lib/national/data";

type NationalShellProps = {
  children: React.ReactNode;
  activeNav?: NationalNavKey;
};

export function NationalShell({
  children,
  activeNav = "dashboard",
}: NationalShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { dir } = useLanguage();

  return (
    <div className="flex h-screen overflow-hidden bg-asl-gray" dir="ltr">
      <div
        className={`fixed inset-0 z-40 bg-black/50 lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden
      />
      <div
        className={`fixed inset-y-0 start-0 z-50 lg:static lg:z-auto ${
          sidebarOpen ? "block" : "hidden lg:block"
        }`}
      >
        <Sidebar activeNav={activeNav} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden" dir={dir}>
        <TopHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-5">{children}</main>
      </div>
    </div>
  );
}
