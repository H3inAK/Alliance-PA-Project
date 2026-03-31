import { useTheme } from "../context/ThemeContext";
import StatusBadge from "../components/StatusBadge";
import { departmentSummary, employees } from "../data/mockData";

export default function Employees() {
  const { theme } = useTheme();

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1600px] mx-auto">
      <div>
        <h1 className="text-xl lg:text-2xl font-bold" style={{ color: theme.text }}>
          Employees
        </h1>
        <p className="text-sm mt-0.5" style={{ color: theme.muted }}>
          People directory across head office and branch operations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {departmentSummary.map((department) => (
          <div
            key={department.id}
            className="rounded-2xl p-5"
            style={{
              backgroundColor: theme.card,
              border: `1px solid ${theme.border}`,
              boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
            }}
          >
            <p className="text-sm font-semibold" style={{ color: theme.text }}>
              {department.name}
            </p>
            <p className="mt-3 text-3xl font-bold" style={{ color: theme.primary }}>
              {department.headcount}
            </p>
            <p className="mt-1 text-xs" style={{ color: theme.muted }}>
              Avg. score {department.avgScore}% · Lead {department.lead}
            </p>
          </div>
        ))}
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
            Team Directory
          </h2>
        </div>
        <div className="divide-y" style={{ borderColor: theme.border }}>
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="px-6 py-4 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_auto] gap-3 items-center"
            >
              <div>
                <p className="text-sm font-semibold" style={{ color: theme.text }}>
                  {employee.name}
                </p>
                <p className="text-xs mt-1" style={{ color: theme.muted }}>
                  {employee.position}
                </p>
              </div>
              <div className="text-sm" style={{ color: theme.text }}>
                {employee.department}
              </div>
              <div className="text-xs" style={{ color: theme.muted }}>
                Reviewer: {employee.reviewer}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold" style={{ color: theme.text }}>
                  {employee.score}%
                </span>
                <StatusBadge status={employee.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
