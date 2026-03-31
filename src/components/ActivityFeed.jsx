import { useTheme } from "../context/ThemeContext";

const activityIcons = {
  submit: {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    bg: "#dbeafe",
    color: "#1d4ed8",
  },
  complete: {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    bg: "#d1fae5",
    color: "#065f46",
  },
  update: {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
    bg: "#fef3c7",
    color: "#92400e",
  },
  add: {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
    bg: "#ede9fe",
    color: "#5b21b6",
  },
};

export default function ActivityFeed({ activities }) {
  const { theme } = useTheme();

  return (
    <div
      className="rounded-2xl"
      style={{
        backgroundColor: theme.card,
        border: `1px solid ${theme.border}`,
        boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div className="px-5 py-4" style={{ borderBottom: `1px solid ${theme.border}` }}>
        <h2 className="font-semibold text-base" style={{ color: theme.text }}>
          Recent Activity
        </h2>
        <p className="text-xs mt-0.5" style={{ color: theme.muted }}>
          Latest actions & updates
        </p>
      </div>

      <div className="p-4 space-y-1">
        {activities.map((activity) => {
          const iconDef = activityIcons[activity.type] || activityIcons.submit;
          return (
            <div
              key={activity.id}
              className="flex gap-3 p-3 rounded-xl transition-all duration-150 cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.highlight || `${theme.accent}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: iconDef.bg, color: iconDef.color }}
              >
                {iconDef.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold" style={{ color: theme.text }}>
                    {activity.action}
                  </p>
                  <span className="text-[11px] flex-shrink-0" style={{ color: theme.muted }}>
                    {activity.time}
                  </span>
                </div>
                <p className="text-xs mt-0.5 leading-relaxed" style={{ color: theme.muted }}>
                  <span className="font-medium" style={{ color: theme.primary }}>
                    {activity.subject}
                  </span>
                  {" — "}
                  {activity.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
