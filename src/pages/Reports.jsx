import { useTheme } from "../context/ThemeContext";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { reportHighlights, reportMonthlyPerformance, reportTrends } from "../data/mockData";

function TrendTooltip({ active, payload, label, theme }) {
  if (!active || !payload?.length) return null;

  return (
    <div
      className="px-3 py-2 rounded-xl text-sm shadow-lg"
      style={{
        backgroundColor: theme.card,
        border: `1px solid ${theme.border}`,
        color: theme.text,
      }}
    >
      <p className="font-semibold">{label}</p>
      <p style={{ color: theme.primary }}>Average score: {payload[0].value}%</p>
    </div>
  );
}

export default function Reports() {
  const { theme } = useTheme();

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1600px] mx-auto">
      <div>
        <h1 className="text-xl lg:text-2xl font-bold" style={{ color: theme.text }}>
          Reports
        </h1>
        <p className="text-sm mt-0.5" style={{ color: theme.muted }}>
          Department performance signals for the microfinance operating model
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {reportHighlights.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl p-5"
            style={{
              backgroundColor: theme.card,
              border: `1px solid ${theme.border}`,
              boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
            }}
          >
            <p className="text-xs uppercase tracking-[0.18em]" style={{ color: theme.muted }}>
              {item.label}
            </p>
            <p className="mt-3 text-3xl font-bold" style={{ color: theme.text }}>
              {item.value}
            </p>
            <p className="mt-1 text-sm" style={{ color: theme.muted }}>
              {item.note}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_0.95fr] gap-4">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: theme.card,
            border: `1px solid ${theme.border}`,
            boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
          }}
        >
          <div className="px-6 py-4" style={{ borderBottom: `1px solid ${theme.border}` }}>
            <h2 className="font-semibold text-base" style={{ color: theme.text }}>
              Monthly Performance Trend
            </h2>
            <p className="text-xs mt-0.5" style={{ color: theme.muted }}>
              Average appraisal score across core business functions
            </p>
          </div>
          <div className="p-4 pt-5">
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={reportMonthlyPerformance} margin={{ top: 4, right: 12, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="reports-score" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={theme.primary} stopOpacity={0.22} />
                    <stop offset="95%" stopColor={theme.primary} stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={theme.border} vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: theme.muted }} axisLine={false} tickLine={false} />
                <YAxis domain={[78, 95]} tick={{ fontSize: 11, fill: theme.muted }} axisLine={false} tickLine={false} />
                <Tooltip content={<TrendTooltip theme={theme} />} />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke={theme.primary}
                  strokeWidth={2.5}
                  fill="url(#reports-score)"
                  dot={{ fill: theme.primary, r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: theme.card,
            border: `1px solid ${theme.border}`,
            boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
          }}
        >
          <div className="px-6 py-4" style={{ borderBottom: `1px solid ${theme.border}` }}>
            <h2 className="font-semibold text-base" style={{ color: theme.text }}>
              Department Benchmark
            </h2>
            <p className="text-xs mt-0.5" style={{ color: theme.muted }}>
              Ranked by latest review cycle average
            </p>
          </div>
          <div className="p-4 space-y-3">
            {reportTrends.map((item, index) => (
              <div
                key={item.id}
                className="rounded-2xl p-4"
                style={{ backgroundColor: theme.highlight, border: `1px solid ${theme.border}` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-semibold"
                      style={{ backgroundColor: theme.accent, color: theme.primary }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: theme.text }}>
                        {item.department}
                      </p>
                      <p className="text-xs mt-1" style={{ color: theme.muted }}>
                        {item.trend}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold" style={{ color: theme.text }}>
                      {item.score}%
                    </p>
                    <span
                      className="text-[11px] font-semibold px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: item.trend.includes("Down") ? "#fff1dd" : theme.accent,
                        color: item.trend.includes("Down") ? "#b45309" : theme.primary,
                      }}
                    >
                      {item.trend}
                    </span>
                  </div>
                </div>
                <div className="mt-4 h-1.5 rounded-full" style={{ backgroundColor: theme.border }}>
                  <div
                    className="h-1.5 rounded-full"
                    style={{ width: `${item.score}%`, backgroundColor: theme.primary, opacity: 0.82 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
