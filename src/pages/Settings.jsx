import { useTheme } from "../context/ThemeContext";
import { settingsSections } from "../data/mockData";

export default function Settings() {
  const { theme } = useTheme();

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1600px] mx-auto">
      <div>
        <h1 className="text-xl lg:text-2xl font-bold" style={{ color: theme.text }}>
          Settings
        </h1>
        <p className="text-sm mt-0.5" style={{ color: theme.muted }}>
          Prototype controls for review cycles, approvals, and branch governance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {settingsSections.map((section) => (
          <div
            key={section.id}
            className="rounded-2xl p-5"
            style={{
              backgroundColor: theme.card,
              border: `1px solid ${theme.border}`,
              boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-base font-semibold" style={{ color: theme.text }}>
                  {section.title}
                </h2>
                <p className="text-sm mt-1" style={{ color: theme.muted }}>
                  {section.description}
                </p>
              </div>
              <span
                className="text-[11px] font-semibold px-2 py-1 rounded-full"
                style={{ backgroundColor: theme.accent, color: theme.primary }}
              >
                {section.status}
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="text-sm rounded-xl px-3 py-2"
                  style={{ backgroundColor: theme.highlight, color: theme.text }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
