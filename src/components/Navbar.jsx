import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar({ onMenuToggle }) {
  const { theme } = useTheme();
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header
      style={{
        backgroundColor: theme.navbarBg,
        borderBottom: `1px solid ${theme.border}`,
      }}
      className="h-16 flex items-center px-4 lg:px-6 gap-4 sticky top-0 z-30 transition-colors duration-300"
    >
      <button
        onClick={onMenuToggle}
        className="lg:hidden p-2 rounded-lg transition-colors duration-200"
        style={{ color: theme.muted }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <div className="flex items-center gap-2 lg:hidden">
        <div
          className="w-7 h-7 flex-shrink-0"
          style={{
            backgroundColor: theme.primary,
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
        <span className="font-semibold text-sm" style={{ color: theme.text }}>
          Alliance PA
        </span>
      </div>

      <div className="hidden md:flex flex-1 max-w-md">
        <div className="relative w-full">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors duration-200"
            style={{ color: searchFocused ? theme.primary : theme.muted }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search employees, appraisals..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl outline-none transition-all duration-200"
            style={{
              backgroundColor: theme.accent,
              border: `1.5px solid ${searchFocused ? theme.primary : "transparent"}`,
              color: theme.text,
            }}
          />
        </div>
      </div>

      <div className="flex-1" />

      <div className="flex items-center gap-2 lg:gap-3">
        <ThemeSwitcher />

        <button
          className="relative h-11 w-11 flex items-center justify-center rounded-xl transition-all duration-200 hover:scale-[1.03]"
          style={{ backgroundColor: theme.accent, color: theme.muted }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ backgroundColor: "#ef4444" }} />
        </button>

        <div
          className="h-11 flex items-center gap-2.5 pl-2 pr-3 rounded-xl cursor-pointer transition-all duration-200 hover:scale-[1.02]"
          style={{ backgroundColor: theme.accent }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{ backgroundColor: theme.primary, color: "#fff" }}
          >
            TZ
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold leading-tight" style={{ color: theme.text }}>
              Thant Zin Oo
            </p>
            <p className="text-[10px] leading-tight" style={{ color: theme.muted }}>
              HR Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
