"use client";

import { useLanguage } from "@/contexts/LanguageContext";

type BarItem = {
  name: string;
  value: number;
};

type SportsBarChartProps = {
  data: BarItem[];
};

export function SportsBarChart({ data }: SportsBarChartProps) {
  const { dir } = useLanguage();
  const max = Math.max(...data.map((d) => d.value));
  const isRtl = dir === "rtl";

  return (
    <div className="space-y-4 pt-1">
      {data.map((item, i) => {
        const pct = Math.round((item.value / max) * 100);
        const color = i % 2 === 0 ? "#1a6fd4" : "#f37021";

        return (
          <div key={item.name} className="space-y-1.5">
            <div
              className={`flex items-center gap-3 ${isRtl ? "flex-row" : "flex-row-reverse"}`}
            >
              <span
                className={`w-[88px] shrink-0 text-xs font-bold leading-tight text-asl-navy md:text-sm ${
                  isRtl ? "text-start" : "text-end"
                }`}
              >
                {item.name}
              </span>

              <div className="relative h-4 min-w-0 flex-1 overflow-hidden rounded-full bg-gray-100 md:h-5">
                <div
                  className={`absolute inset-y-0 rounded-full bg-gradient-to-b shadow-sm ${isRtl ? "end-0" : "start-0"}`}
                  style={{
                    width: `${pct}%`,
                    backgroundImage:
                      color === "#1a6fd4"
                        ? "linear-gradient(to bottom, #2580e8, #1a6fd4)"
                        : "linear-gradient(to bottom, #f38035, #f37021)",
                  }}
                />
              </div>

              <span className="w-8 shrink-0 text-end text-xs font-bold text-asl-navy">
                {item.value}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
