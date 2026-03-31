import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { overviewStats } from "../data/mockData";

const navItems = [
  {
    label: "Dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Appraisals",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    label: "Employees",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Reports",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    label: "Settings",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M12 2v2m0 18v2M2 12h2m18 0h2" />
      </svg>
    ),
  },
];

export default function Sidebar({ activePage, isOpen, onClose, onNavigate }) {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(null);
  const pendingStat = overviewStats.find((item) => item.label === "Pending Reviews");

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm" onClick={onClose} />}

      <aside
        className={`
          fixed top-0 left-0 h-full z-50 w-64 flex flex-col transition-transform duration-300
          lg:translate-x-0 lg:static lg:z-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ backgroundColor: theme.sidebarBg }}
      >
        <div
          className="h-16 flex items-center px-6 gap-3 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div
            className="w-8 h-8 flex-shrink-0"
            style={{
              backgroundColor: theme.sidebarText,
              maskImage: "url('/favicon.svg')",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
              WebkitMaskImage: "url('/favicon.svg')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
            }}
            aria-label="Alliance PA"
          >
          </div>
          <div>
            <p className="font-bold text-base leading-tight tracking-[-0.01em]" style={{ color: theme.sidebarText }}>
              Alliance PA
            </p>
            <p className="text-[11px] leading-tight" style={{ color: "rgba(255,255,255,0.45)" }}>
              Performance Appraisal
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-auto lg:hidden p-1 rounded-lg transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="px-6 pt-6 pb-2">
          <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
            Main Menu
          </p>
        </div>

        <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activePage === item.label;
            return (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate(item.label);
                  onClose();
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[11px] font-medium transition-all duration-200 group"
                style={{
                  backgroundColor:
                    isActive || hovered === item.label ? theme.sidebarActive : "transparent",
                  color: isActive ? theme.sidebarText : "rgba(255,255,255,0.55)",
                  transform: isActive ? "translateX(0)" : hovered === item.label ? "translateX(2px)" : "translateX(0)",
                }}
                onMouseEnter={() => {
                  setHovered(item.label);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                }}
              >
                <span
                  className="flex-shrink-0 transition-colors duration-200"
                  style={{ color: isActive ? theme.sidebarText : "rgba(255,255,255,0.45)" }}
                >
                  {item.icon}
                </span>
                <span className="tracking-[-0.01em]">{item.label}</span>
                {item.label === "Appraisals" && pendingStat?.value && (
                  <span
                    className="ml-auto text-[9px] font-semibold px-1.5 py-0.5 rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)", color: theme.sidebarText }}
                  >
                    {pendingStat.value}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-4 flex-shrink-0" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.2)", color: theme.sidebarText }}
            >
              TZ
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate" style={{ color: theme.sidebarText }}>
                Thant Zin Oo
              </p>
              <p className="text-[11px] truncate" style={{ color: "rgba(255,255,255,0.45)" }}>
                HR Admin
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
