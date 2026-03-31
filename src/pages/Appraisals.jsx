import { useTheme } from "../context/ThemeContext";
import StatusBadge from "../components/StatusBadge";
import { appraisalPipeline, employees, reviewCycles } from "../data/mockData";

function AppraisalCard({ title, value, note }) {
  const { theme } = useTheme();

  return (
    <div
      className="rounded-2xl p-5"
      style={{
        backgroundColor: theme.card,
        border: `1px solid ${theme.border}`,
        boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
      }}
    >
      <p className="text-xs uppercase tracking-[0.18em]" style={{ color: theme.muted }}>
        {title}
      </p>
      <p className="mt-3 text-3xl font-bold" style={{ color: theme.text }}>
        {value}
      </p>
      <p className="mt-1 text-sm" style={{ color: theme.muted }}>
        {note}
      </p>
    </div>
  );
}

export default function Appraisals() {
  const { theme } = useTheme();

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1600px] mx-auto">
      <div>
        <h1 className="text-xl lg:text-2xl font-bold" style={{ color: theme.text }}>
          Appraisals
        </h1>
        <p className="text-sm mt-0.5" style={{ color: theme.muted }}>
          Active review cycles across finance, HR, IT, marketing, operations, and branch teams
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {appraisalPipeline.map((item) => (
          <AppraisalCard key={item.id} title={item.label} value={item.value} note={item.note} />
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
            Current Review Cycles
          </h2>
          <p className="text-xs mt-0.5" style={{ color: theme.muted }}>
            Branch and head-office appraisal windows
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
          {reviewCycles.map((cycle) => (
            <div
              key={cycle.id}
              className="rounded-2xl p-4"
              style={{ backgroundColor: theme.highlight, border: `1px solid ${theme.border}` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold" style={{ color: theme.text }}>
                    {cycle.name}
                  </p>
                  <p className="text-xs mt-1" style={{ color: theme.muted }}>
                    {cycle.owner}
                  </p>
                </div>
                <StatusBadge status={cycle.status} />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span style={{ color: theme.muted }}>Participants</span>
                <span className="font-semibold" style={{ color: theme.text }}>
                  {cycle.participants}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span style={{ color: theme.muted }}>Deadline</span>
                <span className="font-semibold" style={{ color: theme.text }}>
                  {cycle.deadline}
                </span>
              </div>
            </div>
          ))}
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
            Priority Reviews
          </h2>
        </div>
        <div className="divide-y" style={{ borderColor: theme.border }}>
          {employees.slice(0, 6).map((employee) => (
            <div key={employee.id} className="px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold" style={{ color: theme.text }}>
                  {employee.name}
                </p>
                <p className="text-xs mt-1" style={{ color: theme.muted }}>
                  {employee.position} &middot; {employee.department}
                </p>
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
