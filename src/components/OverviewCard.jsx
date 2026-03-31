import { useTheme } from "../context/ThemeContext";

const icons = {
  users: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  "check-circle": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  clock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  "trending-up": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
};

export default function OverviewCard({ label, value, change, trend, icon }) {
  const { theme } = useTheme();

  return (
    <div
      className="rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-default"
      style={{
        backgroundColor: theme.card,
        border: `1px solid ${theme.border}`,
        boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: theme.accent, color: theme.primary }}
        >
          {icons[icon]}
        </div>
        {trend === "up" && (
          <span
            className="text-[11px] font-semibold px-2 py-1 rounded-lg"
            style={{ backgroundColor: "#d1fae5", color: "#065f46" }}
          >
            ↑ Up
          </span>
        )}
        {trend === "neutral" && (
          <span
            className="text-[11px] font-semibold px-2 py-1 rounded-lg"
            style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
          >
            — Stable
          </span>
        )}
      </div>

      <p className="text-3xl font-bold tracking-tight mb-1" style={{ color: theme.text }}>
        {value}
      </p>
      <p className="text-sm font-medium mb-1" style={{ color: theme.text, opacity: 0.75 }}>
        {label}
      </p>
      <p className="text-xs" style={{ color: theme.muted }}>
        {change}
      </p>
    </div>
  );
}
