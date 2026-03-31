import { useState } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Appraisals from "./pages/Appraisals";
import Employees from "./pages/Employees";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function Layout() {
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  const pageMap = {
    Dashboard: <Dashboard />,
    Appraisals: <Appraisals />,
    Employees: <Employees />,
    Reports: <Reports />,
    Settings: <Settings />,
  };

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{
        backgroundColor: theme.background,
        transition: "background-color 0.3s ease",
      }}
    >
      <Sidebar
        activePage={activePage}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={setActivePage}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar onMenuToggle={() => setSidebarOpen(true)} />
        <main key={activePage} className="flex-1 overflow-y-auto page-enter">
          {pageMap[activePage]}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}
