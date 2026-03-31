import { useTheme } from "../context/ThemeContext";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function CustomTooltip({ active, payload, label, theme }) {
  if (active && payload && payload.length) {
    return (
      <div
        className="px-3 py-2 rounded-xl shadow-lg text-sm"
        style={{
          backgroundColor: theme.card,
          border: `1px solid ${theme.border}`,
          color: theme.text,
        }}
      >
        <p className="font-semibold">{label}</p>
        <p style={{ color: theme.primary }}>Score: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
}

export default function TrendCard({ data }) {
  const { theme } = useTheme();

  const latestScore = data[data.length - 1]?.score || 0;
  const prevScore = data[data.length - 2]?.score || 0;
  const delta = latestScore - prevScore;

  return (
    <div
      className="rounded-2xl"
      style={{
        backgroundColor: theme.card,
        border: `1px solid ${theme.border}`,
        boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{ borderBottom: `1px solid ${theme.border}` }}
      >
        <div>
          <h2 className="font-semibold text-base" style={{ color: theme.text }}>
            Performance Trend
          </h2>
          <p className="text-xs mt-0.5" style={{ color: theme.muted }}>
            Average team score - last 6 months
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold" style={{ color: theme.text }}>
            {latestScore}%
          </p>
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: delta >= 0 ? "#d1fae5" : "#fee2e2",
              color: delta >= 0 ? "#065f46" : "#991b1b",
            }}
          >
            {delta >= 0 ? "+" : ""}
            {delta}% this month
          </span>
        </div>
      </div>

      <div className="p-4 pt-5">
        <ResponsiveContainer width="100%" height={160}>
          <AreaChart data={data} margin={{ top: 4, right: 8, left: -24, bottom: 0 }}>
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={theme.primary} stopOpacity={0.25} />
                <stop offset="95%" stopColor={theme.primary} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.border} vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: theme.muted }} axisLine={false} tickLine={false} />
            <YAxis domain={[70, 100]} tick={{ fontSize: 11, fill: theme.muted }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip theme={theme} />} />
            <Area
              type="monotone"
              dataKey="score"
              stroke={theme.primary}
              strokeWidth={2.5}
              fill="url(#colorScore)"
              dot={{ fill: theme.primary, r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
