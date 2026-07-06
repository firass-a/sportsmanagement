"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";
import { SparklineArea } from "@/components/charts/ChartStyles";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ageData,
  sparklineData,
  sportsBarData,
  trendStatsData,
} from "@/lib/club/data";
import { IndividualSportsGrid } from "./IndividualSportsGrid";
import { SportsBarChart } from "./SportsBarChart";

function MiniSparkline({ color }: { color: "orange" | "blue" }) {
  const stroke = color === "orange" ? "#f37021" : "#1a6fd4";
  return <SparklineArea data={sparklineData[color]} color={stroke} height={40} />;
}

export function StatisticsSection({
  embedded = false,
  showTrendStats = true,
}: {
  embedded?: boolean;
  showTrendStats?: boolean;
}) {
  const { t } = useLanguage();
  const s = t.club.stats;
  const sp = t.club.sports;

  const ageChartData = ageData.map((d) => ({
    ...d,
    label: s[d.name as keyof typeof s],
  }));

  const barChartData = sportsBarData.map((d) => ({
    name: sp[d.key],
    value: d.value,
  }));

  return (
    <div className={`space-y-6 ${embedded ? "mt-6" : "mt-4"}`}>
      {!embedded && (
        <h2 className="text-lg font-bold text-asl-navy">{t.club.statistics}</h2>
      )}

      {showTrendStats && (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {trendStatsData.map(({ key, value, change, color }) => (
            <div
              key={key}
              className="flex min-h-[130px] flex-col rounded-xl bg-white p-4 shadow-sm md:min-h-[148px] md:p-5"
            >
              <p className="mb-2 text-xs font-semibold leading-snug text-asl-navy/70 md:text-sm">
                {s[key]}
              </p>
              <div className="flex items-center justify-between gap-2">
                <p className="text-2xl font-bold text-asl-navy md:text-3xl">{value}</p>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                    color === "orange"
                      ? "bg-asl-orange/10 text-asl-orange"
                      : "bg-asl-blue/10 text-asl-blue"
                  }`}
                >
                  {change}
                </span>
              </div>
              <div className="mt-auto pt-3">
                <MiniSparkline color={color} />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
        <div className="rounded-xl bg-white p-5 shadow-sm md:p-6">
          <p className="mb-4 text-sm font-bold text-asl-navy">{s.ageDistribution}</p>
          <div className="relative mx-auto h-48 max-w-[220px] md:h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ageChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={52}
                  outerRadius={78}
                  paddingAngle={4}
                  cornerRadius={5}
                  stroke="#fff"
                  strokeWidth={2}
                  dataKey="value"
                  animationDuration={700}
                >
                  {ageChartData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-asl-navy">248</span>
              <span className="text-xs font-medium text-asl-navy/60">
                {t.club.athletesCount}
              </span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {ageChartData.map((d) => (
              <div
                key={d.name}
                className="flex items-center justify-between gap-2 text-sm"
              >
                <span className="flex min-w-0 items-center gap-2">
                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{ background: d.color }}
                  />
                  <span className="truncate font-medium">{d.label}</span>
                </span>
                <span className="shrink-0 font-bold text-asl-navy">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm md:p-6">
          <p className="mb-4 text-sm font-bold text-asl-navy">{s.genderDistribution}</p>
          <div className="space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm font-semibold">
                <span className="flex items-center gap-2 text-asl-blue">
                  <span className="text-lg">♂</span> {s.male}
                </span>
                <span className="font-bold">178 (72%)</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-[72%] rounded-full bg-asl-blue" />
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm font-semibold">
                <span className="flex items-center gap-2 text-asl-orange">
                  <span className="text-lg">♀</span> {s.female}
                </span>
                <span className="font-bold">70 (28%)</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-[28%] rounded-full bg-asl-orange" />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <ResponsiveContainer width={100} height={100}>
              <PieChart>
                <Pie
                  data={[
                    { value: 72, color: "#1a6fd4" },
                    { value: 28, color: "#f37021" },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={28}
                  outerRadius={46}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  <Cell fill="#1a6fd4" />
                  <Cell fill="#f37021" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm md:p-6 lg:col-span-1">
          <p className="mb-4 text-sm font-bold text-asl-navy">{s.mostPracticed}</p>
          <SportsBarChart data={barChartData} />
        </div>
      </div>

      <IndividualSportsGrid variant="large" />
    </div>
  );
}
