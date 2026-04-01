import { useTheme } from "../context/ThemeContext";

const icons = {
  users: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8.5" cy="8.5" r="3.25" />
      <path d="M3.5 18.25c0-2.55 2.35-4.5 5-4.5s5 1.95 5 4.5" />
      <circle cx="17.5" cy="9.25" r="2.5" />
      <path d="M15.5 18.25c.32-1.82 1.92-3.2 4-3.5" />
    </svg>
  ),
  "check-circle": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5v.55A9.05 9.05 0 1 1 15.6 3.8" />
      <path d="m8.8 12.3 2.2 2.3 4.9-5.2" />
    </svg>
  ),
  clock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3.5 2" />
      <path d="M12 3v1.5" />
    </svg>
  ),
  "trending-up": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16.5 9 11.5l3.25 3.25L20 7" />
      <path d="M14.5 7H20v5.5" />
      <path d="M4 20h16" opacity="0.35" />
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
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{
            backgroundColor: theme.accent,
            color: theme.primary,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45)",
          }}
        >
          {icons[icon]}
        </div>
        {trend === "up" && (
          <span
            className="text-[11px] font-semibold px-2 py-1 rounded-lg"
            style={{ backgroundColor: "#d1fae5", color: "#065f46" }}
          >
            Up
          </span>
        )}
        {trend === "neutral" && (
          <span
            className="text-[11px] font-semibold px-2 py-1 rounded-lg"
            style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
          >
            Stable
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
