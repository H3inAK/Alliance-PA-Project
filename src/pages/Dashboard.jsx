import { useTheme } from "../context/ThemeContext";
import OverviewCard from "../components/OverviewCard";
import EmployeeTable from "../components/EmployeeTable";
import ActivityFeed from "../components/ActivityFeed";
import TrendCard from "../components/TrendCard";
import ScheduleCard from "../components/ScheduleCard";
import {
  overviewStats,
  employees,
  recentActivities,
  trendData,
  upcomingSchedule,
} from "../data/mockData";

export default function Dashboard() {
  const { theme } = useTheme();

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1600px] mx-auto">
      <div>
        <h1 className="text-xl lg:text-2xl font-bold" style={{ color: theme.text }}>
          Dashboard
        </h1>
        <p className="text-sm mt-0.5" style={{ color: theme.muted }}>
          Q1 2026 Performance Appraisal Overview
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {overviewStats.map((stat) => (
          <OverviewCard key={stat.id} {...stat} />
        ))}
      </div>

      <EmployeeTable employees={employees} />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <TrendCard data={trendData} />
        <ActivityFeed activities={recentActivities} />
        <ScheduleCard schedule={upcomingSchedule} />
      </div>
    </div>
  );
}
