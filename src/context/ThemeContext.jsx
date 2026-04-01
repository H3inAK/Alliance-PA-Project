import { createContext, useContext, useState, useEffect } from "react";

export const themes = {
  capitalLedger: {
    name: "Capital Ledger",
    primary: "#0F766E",
    primaryHover: "#115E59",
    background: "#F4F7F8",
    text: "#132A33",
    card: "#FFFFFF",
    muted: "#667985",
    border: "#D9E2E7",
    accent: "#DDEDEA",
    sidebarBg: "#12313B",
    sidebarText: "#E7F2F0",
    sidebarActive: "#1A4A57",
    navbarBg: "#FFFFFF",
    highlight: "#EEF5F5",
  },
  mossVelvet: {
    name: "Moss Velvet",
    primary: "#385144",
    primaryHover: "#2d4238",
    background: "#F8F5F2",
    text: "#1C352D",
    card: "#FFFFFF",
    muted: "#6B7280",
    border: "#E5E7EB",
    accent: "#DDE6E1",
    sidebarBg: "#2d4238",
    sidebarText: "#e8ede9",
    sidebarActive: "#4a6b5c",
    navbarBg: "#FFFFFF",
    highlight: "#f0f4f2",
  },
  cyprus: {
    name: "Cyprus",
    primary: "#004643",
    primaryHover: "#003532",
    background: "#FAFAFA",
    text: "#12372A",
    card: "#FFFFFF",
    muted: "#6B7280",
    border: "#E5E7EB",
    accent: "#D9ECEA",
    sidebarBg: "#003532",
    sidebarText: "#d9ecea",
    sidebarActive: "#005a56",
    navbarBg: "#FFFFFF",
    highlight: "#edf6f5",
  },
  timberGreen: {
    name: "Timber Green",
    primary: "#2E4235",
    primaryHover: "#243629",
    background: "#EAE4D3",
    text: "#1C352D",
    card: "#FDFCF8",
    muted: "#6B7280",
    border: "#D6D0C2",
    accent: "#D7DFD8",
    sidebarBg: "#243629",
    sidebarText: "#d7dfd8",
    sidebarActive: "#3d5947",
    navbarBg: "#FDFCF8",
    highlight: "#e8e2d0",
  },
  cloudWhite: {
    name: "Cloud White",
    primary: "#004643",
    primaryHover: "#003532",
    background: "#FAFAFA",
    text: "#004643",
    card: "#FFFFFF",
    muted: "#6B7280",
    border: "#E5E7EB",
    accent: "#F0F4F3",
    sidebarBg: "#004643",
    sidebarText: "#f0f4f3",
    sidebarActive: "#005a56",
    navbarBg: "#FFFFFF",
    highlight: "#f5f9f8",
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState("capitalLedger");

  const theme = themes[activeTheme];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-primary-hover", theme.primaryHover);
    root.style.setProperty("--color-background", theme.background);
    root.style.setProperty("--color-text", theme.text);
    root.style.setProperty("--color-card", theme.card);
    root.style.setProperty("--color-muted", theme.muted);
    root.style.setProperty("--color-border", theme.border);
    root.style.setProperty("--color-accent", theme.accent);
    root.style.setProperty("--color-sidebar-bg", theme.sidebarBg);
    root.style.setProperty("--color-sidebar-text", theme.sidebarText);
    root.style.setProperty("--color-sidebar-active", theme.sidebarActive);
    root.style.setProperty("--color-navbar-bg", theme.navbarBg);
    root.style.setProperty("--color-highlight", theme.highlight);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, activeTheme, setActiveTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
