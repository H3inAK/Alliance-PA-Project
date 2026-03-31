import { useTheme } from "../context/ThemeContext";

const reviewTypeColors = {
  "Quarterly Review": { bg: "#dbeafe", text: "#1e3a8a" },
  "Mid-Year Review": { bg: "#fef3c7", text: "#92400e" },
  "Annual Review": { bg: "#d1fae5", text: "#065f46" },
};

export default function ScheduleCard({ schedule }) {
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
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{ borderBottom: `1px solid ${theme.border}` }}
      >
        <div>
          <h2 className="font-semibold text-base" style={{ color: theme.text }}>
            Upcoming Reviews
          </h2>
          <p className="text-xs mt-0.5" style={{ color: theme.muted }}>
            Scheduled review sessions
          </p>
        </div>
        <button
          className="text-xs font-medium px-3 py-1.5 rounded-xl transition-all duration-200 hover:scale-[1.03]"
          style={{ backgroundColor: theme.accent, color: theme.primary }}
        >
          Calendar
        </button>
      </div>

      <div className="p-4 space-y-2">
        {schedule.map((item) => {
          const typeStyle = reviewTypeColors[item.type] || { bg: "#f3f4f6", text: "#374151" };
          return (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 rounded-xl transition-all duration-150 cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.highlight || `${theme.accent}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex flex-col items-center justify-center flex-shrink-0 text-center"
                style={{ backgroundColor: theme.accent }}
              >
                <span className="text-[10px] font-semibold uppercase" style={{ color: theme.muted }}>
                  {item.date.split(" ")[0]}
                </span>
                <span className="text-base font-bold leading-tight" style={{ color: theme.primary }}>
                  {item.date.split(" ")[1]?.replace(",", "")}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate" style={{ color: theme.text }}>
                  {item.employee}
                </p>
                <p className="text-xs truncate" style={{ color: theme.muted }}>
                  {item.position}
                </p>
              </div>

              <span
                className="text-[11px] font-semibold px-2 py-1 rounded-lg flex-shrink-0"
                style={{ backgroundColor: typeStyle.bg, color: typeStyle.text }}
              >
                {item.type.split(" ")[0]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
