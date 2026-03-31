import { useState, useRef, useEffect } from "react";
import { useTheme, themes } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, activeTheme, setActiveTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="h-11 flex items-center gap-2 px-3.5 rounded-xl text-xs font-medium transition-all duration-200 hover:scale-[1.02]"
        style={{ backgroundColor: theme.accent, color: theme.text }}
        title="Switch theme"
      >
        <div className="w-3.5 h-3.5 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primary }} />
        <span className="hidden md:inline">{theme.name}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          style={{ color: theme.muted }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-48 rounded-2xl py-1.5 shadow-xl z-50 overflow-hidden"
          style={{
            backgroundColor: theme.card,
            border: `1px solid ${theme.border}`,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
        >
          {Object.entries(themes).map(([key, t]) => (
            <button
              key={key}
              onClick={() => {
                setActiveTheme(key);
                setOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-150 hover:scale-[1.01]"
              style={{
                backgroundColor: activeTheme === key ? theme.accent : "transparent",
                color: theme.text,
              }}
            >
              <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: t.primary }} />
              <span className="font-medium">{t.name}</span>
              {activeTheme === key && (
                <svg
                  className="ml-auto"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  style={{ color: theme.primary }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
