import { useTheme } from "../context/ThemeContext";
import StatusBadge from "./StatusBadge";

export default function EmployeeTable({ employees }) {
  const { theme } = useTheme();

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: theme.card,
        border: `1px solid ${theme.border}`,
        boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ borderBottom: `1px solid ${theme.border}` }}
      >
        <div>
          <h2 className="font-semibold text-base" style={{ color: theme.text }}>
            Employee Appraisals
          </h2>
          <p className="text-xs mt-0.5" style={{ color: theme.muted }}>
            Q1 2026 Performance Review Cycle
          </p>
        </div>
        <button
          className="inline-flex items-center gap-2 text-[11px] font-medium px-3 py-2 rounded-xl leading-none transition-all duration-200"
          style={{
            backgroundColor: theme.card,
            color: theme.text,
            border: `1px solid ${theme.border}`,
          }}
        >
          <span>View all</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: theme.muted }}
          >
            <path d="m9 6 6 6-6 6" />
          </svg>
        </button>
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: `1px solid ${theme.border}` }}>
              {["Employee", "Position", "Department", "Status", "Score", "Review Date", "Reviewer"].map((h) => (
                <th
                  key={h}
                  className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                  style={{ color: theme.muted, backgroundColor: theme.highlight || `${theme.accent}50` }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, idx) => (
              <tr
                key={emp.id}
                className="transition-colors duration-150 cursor-pointer"
                style={{
                  borderBottom: idx < employees.length - 1 ? `1px solid ${theme.border}` : "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.highlight || `${theme.accent}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: theme.accent, color: theme.primary }}
                    >
                      {emp.avatar}
                    </div>
                    <span className="text-sm font-semibold" style={{ color: theme.text }}>
                      {emp.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: theme.muted }}>
                  {emp.position}
                </td>
                <td className="px-6 py-4">
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-lg"
                    style={{ backgroundColor: theme.accent, color: theme.primary }}
                  >
                    {emp.department}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={emp.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden w-16" style={{ backgroundColor: theme.border }}>
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${emp.score}%`,
                          backgroundColor: emp.score >= 90 ? "#10b981" : emp.score >= 80 ? theme.primary : "#f59e0b",
                        }}
                      />
                    </div>
                    <span className="text-sm font-bold" style={{ color: theme.text }}>
                      {emp.score}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: theme.muted }}>
                  {new Date(emp.reviewDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 min-w-[170px]">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-[9px] font-bold"
                      style={{ backgroundColor: theme.primary, color: "#fff" }}
                    >
                      TZ
                    </div>
                    <span className="text-sm whitespace-nowrap" style={{ color: theme.muted }}>
                      {emp.reviewer}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden divide-y" style={{ borderColor: theme.border }}>
        {employees.map((emp) => (
          <div key={emp.id} className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: theme.accent, color: theme.primary }}
                >
                  {emp.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: theme.text }}>
                    {emp.name}
                  </p>
                  <p className="text-xs" style={{ color: theme.muted }}>
                    {emp.position}
                  </p>
                </div>
              </div>
              <StatusBadge status={emp.status} />
            </div>
            <div className="flex items-center gap-4 text-xs" style={{ color: theme.muted }}>
              <span>{emp.department}</span>
              <span>&middot;</span>
              <span>
                {new Date(emp.reviewDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span>&middot;</span>
              <span className="font-bold" style={{ color: theme.text }}>
                {emp.score}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
