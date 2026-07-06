"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SERIES = [
  { key: "licenses", name: "الإجازات", color: "#2D5CFE" },
  { key: "athletes", name: "الرياضيون", color: "#27AE60" },
  { key: "coaches", name: "المدربون", color: "#F2994A" },
  { key: "referees", name: "الحكام", color: "#9B51E0" },
] as const;

type TrendPoint = Record<string, string | number>;

function formatYAxis(value: number) {
  if (value >= 1000) return `${Math.round(value / 1000)}k`;
  return String(value);
}

function ChartTooltipContent({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-slate-200/80 bg-white/95 px-3 py-2.5 shadow-lg backdrop-blur-sm">
      <p className="mb-2 text-xs font-bold text-asl-navy">{label}</p>
      <ul className="space-y-1">
        {payload.map((entry) => (
          <li key={entry.name} className="flex items-center justify-between gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-slate-600">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              {entry.name}
            </span>
            <span className="font-bold text-asl-navy">
              {entry.value.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SeasonTrendLineChart({
  data,
  height = 220,
}: {
  data: TrendPoint[];
  height?: number;
}) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 12, right: 12, left: -4, bottom: 0 }}>
          <CartesianGrid strokeDasharray="4 6" stroke="#eef1f5" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 10, fill: "#94a3b8" }}
            axisLine={false}
            tickLine={false}
            interval="preserveStartEnd"
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#94a3b8" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={formatYAxis}
            domain={[0, 50000]}
            ticks={[0, 10000, 20000, 30000, 40000, 50000]}
            width={40}
          />
          <Tooltip content={<ChartTooltipContent />} />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 11, paddingTop: 6 }}
          />
          {SERIES.map(({ key, name, color }) => (
            <Line
              key={key}
              type="natural"
              dataKey={key}
              name={name}
              stroke={color}
              strokeWidth={2.5}
              dot={{ r: 3, strokeWidth: 0, fill: color }}
              activeDot={{ r: 5, strokeWidth: 2, stroke: "#fff", fill: color }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SeasonTrendAreaChart({
  data,
  height = 256,
}: {
  data: TrendPoint[];
  height?: number;
}) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 8, right: 8, left: -8, bottom: 0 }}
        >
          <defs>
            {SERIES.map(({ color, key }) => (
              <linearGradient key={key} id={`grad-${key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.35} />
                <stop offset="95%" stopColor={color} stopOpacity={0.02} />
              </linearGradient>
            ))}
          </defs>

          <CartesianGrid
            strokeDasharray="4 6"
            stroke="#e2e8f0"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
            dy={8}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={formatYAxis}
            width={36}
          />
          <Tooltip content={<ChartTooltipContent />} />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 11, paddingTop: 12 }}
          />

          {SERIES.map(({ key, name, color }) => (
            <Area
              key={key}
              type="natural"
              dataKey={key}
              name={name}
              stroke={color}
              strokeWidth={2.5}
              fill={`url(#grad-${key})`}
              dot={false}
              activeDot={{
                r: 5,
                strokeWidth: 2,
                stroke: "#fff",
                fill: color,
              }}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

type DistributionItem = { name: string; value: number; color: string; count?: number };

export function DistributionDonutChart({
  data,
  total,
  totalLabel = "إجمالي",
  height = 200,
  compact = false,
  centered = false,
}: {
  data: DistributionItem[];
  total: string;
  totalLabel?: string;
  height?: number;
  compact?: boolean;
  centered?: boolean;
}) {
  return (
    <div
      className={`flex w-full items-center gap-4 ${centered ? "justify-center" : ""} ${compact ? "flex-col sm:flex-row" : "flex-row"}`}
    >
      <div className="relative shrink-0" style={{ width: height, height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="62%"
              outerRadius="88%"
              paddingAngle={2}
              cornerRadius={4}
              stroke="#fff"
              strokeWidth={2}
              animationDuration={700}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-asl-navy">{total}</span>
          <span className="text-[10px] text-slate-500">{totalLabel}</span>
        </div>
      </div>

      <ul className="min-w-0 flex-1 space-y-2">
        {data.map((item) => (
          <li key={item.name} className="flex items-center gap-2 text-xs">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="flex-1 text-asl-navy">{item.name}</span>
            {item.count !== undefined && (
              <span className="font-semibold text-asl-navy/80">
                {item.count.toLocaleString()} ({item.value}%)
              </span>
            )}
            {item.count === undefined && (
              <span className="font-semibold text-asl-navy/80">{item.value}%</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SeasonTrendBarChart({
  data,
  height = 256,
}: {
  data: TrendPoint[];
  height?: number;
}) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
          <defs>
            <linearGradient id="barGradOrange" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f37021" stopOpacity={1} />
              <stop offset="100%" stopColor="#f37021" stopOpacity={0.55} />
            </linearGradient>
            <linearGradient id="barGradBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a6fd4" stopOpacity={1} />
              <stop offset="100%" stopColor="#1a6fd4" stopOpacity={0.55} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 6" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={formatYAxis}
            width={36}
          />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="licenses"
            name="الإجازات"
            fill="url(#barGradOrange)"
            radius={[8, 8, 0, 0]}
            maxBarSize={40}
          />
          <Bar
            dataKey="athletes"
            name="الرياضيون"
            fill="url(#barGradBlue)"
            radius={[8, 8, 0, 0]}
            maxBarSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SparklineArea({
  data,
  color,
  height = 32,
}: {
  data: number[];
  color: string;
  height?: number;
}) {
  const points = data.map((v, i) => ({ i, v }));
  const gradId = `spark-${color.replace("#", "")}`;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={points} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.4} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="natural"
          dataKey="v"
          stroke={color}
          strokeWidth={2}
          fill={`url(#${gradId})`}
          dot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function formatCurrencyAxis(value: number) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${Math.round(value / 1000)}K`;
  return String(value);
}

export function SimpleBarChart({
  data,
  xKey,
  yKey,
  name,
  color = "#f37021",
  height = 220,
}: {
  data: TrendPoint[];
  xKey: string;
  yKey: string;
  name: string;
  color?: string;
  height?: number;
}) {
  const gradId = `simpleBar-${color.replace("#", "")}`;

  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={1} />
              <stop offset="100%" stopColor={color} stopOpacity={0.55} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 6" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey={xKey}
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
            width={36}
          />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey={yKey}
            name={name}
            fill={`url(#${gradId})`}
            radius={[8, 8, 0, 0]}
            maxBarSize={48}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ComparisonBarChart({
  data,
  xKey,
  series,
  height = 240,
  currency = false,
}: {
  data: TrendPoint[];
  xKey: string;
  series: { key: string; name: string; color: string }[];
  height?: number;
  currency?: boolean;
}) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: currency ? 4 : -8, bottom: 0 }}>
          <defs>
            {series.map(({ key, color }) => (
              <linearGradient key={key} id={`cmp-${key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={1} />
                <stop offset="100%" stopColor={color} stopOpacity={0.55} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="4 6" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey={xKey}
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={currency ? formatCurrencyAxis : formatYAxis}
            width={currency ? 44 : 36}
          />
          <Tooltip content={<ChartTooltipContent />} />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 11, paddingTop: 8 }}
          />
          {series.map(({ key, name, color }) => (
            <Bar
              key={key}
              dataKey={key}
              name={name}
              fill={`url(#cmp-${key})`}
              radius={[6, 6, 0, 0]}
              maxBarSize={36}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
