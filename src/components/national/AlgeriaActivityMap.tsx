"use client";

import { useEffect, useRef, useState } from "react";
import {
  ACTIVITY_COLORS,
  ACTIVITY_LABELS,
  getActivityForRegion,
  LEGEND_ITEMS,
  type ActivityLevel,
} from "@/lib/national/algeria-map-activity";

export function AlgeriaActivityMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{ level: ActivityLevel } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    fetch("/images/algeria-map.svg")
      .then((res) => res.text())
      .then((svgText) => {
        if (cancelled || !container) return;

        container.innerHTML = svgText;
        const svg = container.querySelector("svg");
        if (!svg) return;

        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.setAttribute("class", "h-full w-full");
        svg.style.display = "block";

        // Remove the default grey fill stylesheet that overrides our colors
        svg.querySelector("style")?.remove();

        svg.querySelectorAll("path").forEach((path) => {
          path.classList.remove("cls-1");
          path.removeAttribute("class");

          const id = path.getAttribute("id") ?? "";
          const level = getActivityForRegion(id);
          const color = ACTIVITY_COLORS[level];

          path.style.fill = color;
          path.style.stroke = "#ffffff";
          path.style.strokeWidth = "10px";
          path.style.transition = "filter 0.15s ease";

          if (level !== "none") {
            path.style.cursor = "pointer";
            path.addEventListener("mouseenter", () => {
              path.style.filter = "brightness(1.15)";
              setTooltip({ level });
            });
            path.addEventListener("mouseleave", () => {
              path.style.filter = "";
              setTooltip(null);
            });
          }
        });
      })
      .catch(() => {
        /* silent */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <div className="relative w-full flex-1">
        <div
          ref={containerRef}
          className="mx-auto flex h-full min-h-[200px] w-full items-center justify-center"
          aria-label="خريطة نشاط الرابطات في الجزائر"
        />
        {tooltip && (
          <div className="pointer-events-none absolute bottom-1 left-1/2 z-10 -translate-x-1/2 rounded-lg bg-asl-navy px-3 py-1.5 text-center shadow-lg">
            <p className="text-xs font-bold text-white">
              {ACTIVITY_LABELS[tooltip.level]}
            </p>
          </div>
        )}
      </div>

      <div className="grid w-full shrink-0 grid-cols-2 gap-x-3 gap-y-2">
        {LEGEND_ITEMS.map((item) => (
          <div key={item.level} className="flex items-center justify-center gap-2">
            <span
              className="h-3.5 w-3.5 shrink-0 rounded-full ring-1 ring-black/10"
              style={{ backgroundColor: ACTIVITY_COLORS[item.level] }}
            />
            <span className="text-xs font-medium text-slate-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
