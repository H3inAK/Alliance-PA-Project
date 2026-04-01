export const employees = [
  {
    id: 1,
    name: "Aye Aye Moe",
    position: "Branch Operations Manager",
    department: "Operations",
    status: "Completed",
    score: 93,
    reviewDate: "2026-03-12",
    reviewer: "Thant Zin Oo",
    avatar: "AM",
  },
  {
    id: 2,
    name: "Kyaw Min Htet",
    position: "Finance Officer",
    department: "Finance",
    status: "Pending",
    score: 88,
    reviewDate: "2026-03-28",
    reviewer: "Thant Zin Oo",
    avatar: "KH",
  },
  {
    id: 3,
    name: "May Thu Zar",
    position: "HR Business Partner",
    department: "HR",
    status: "In Review",
    score: 90,
    reviewDate: "2026-03-20",
    reviewer: "Thant Zin Oo",
    avatar: "MZ",
  },
  {
    id: 4,
    name: "Nyein Chan",
    position: "IT Support Lead",
    department: "IT",
    status: "Completed",
    score: 85,
    reviewDate: "2026-03-18",
    reviewer: "Thant Zin Oo",
    avatar: "NC",
  },
  {
    id: 5,
    name: "Su Mon Phyu",
    position: "Marketing Executive",
    department: "Marketing",
    status: "Pending",
    score: 82,
    reviewDate: "2026-04-03",
    reviewer: "Thant Zin Oo",
    avatar: "SP",
  },
  {
    id: 6,
    name: "Ko Zaw Lin",
    position: "Credit Risk Analyst",
    department: "Risk",
    status: "In Review",
    score: 91,
    reviewDate: "2026-03-26",
    reviewer: "Thant Zin Oo",
    avatar: "KL",
  },
  {
    id: 7,
    name: "Ei Shwe Sin",
    position: "Loan Officer",
    department: "Retail Lending",
    status: "Completed",
    score: 89,
    reviewDate: "2026-03-14",
    reviewer: "Thant Zin Oo",
    avatar: "ES",
  },
  // {
  //   id: 8,
  //   name: "Thet Hnin Pwint",
  //   position: "Customer Service Supervisor",
  //   department: "Customer Service",
  //   status: "Pending",
  //   score: 84,
  //   reviewDate: "2026-04-05",
  //   reviewer: "Thant Zin Oo",
  //   avatar: "TP",
  // },
];

export const recentActivities = [
  {
    id: 1,
    action: "Branch Review Submitted",
    subject: "Aye Aye Moe",
    detail: "Mandalay branch Q1 scorecard submitted for final calibration",
    time: "2 hours ago",
    type: "submit",
  },
  {
    id: 2,
    action: "Finance Review Completed",
    subject: "Kyaw Min Htet",
    detail: "Treasury controls review completed with score 88%",
    time: "5 hours ago",
    type: "complete",
  },
  {
    id: 3,
    action: "Risk Score Updated",
    subject: "Ko Zaw Lin",
    detail: "Compliance score updated after branch audit follow-up",
    time: "Yesterday",
    type: "update",
  },
  {
    id: 4,
    action: "New Reviewer Added",
    subject: "Customer Service Unit",
    detail: "Regional manager added to the April appraisal workflow",
    time: "2 days ago",
    type: "add",
  },
  {
    id: 5,
    action: "Marketing Appraisal Submitted",
    subject: "Su Mon Phyu",
    detail: "Campaign performance review submitted for leadership approval",
    time: "3 days ago",
    type: "submit",
  },
];

export const upcomingSchedule = [
  {
    id: 1,
    employee: "May Thu Zar",
    position: "HR Business Partner",
    date: "Apr 03, 2026",
    type: "Quarterly Review",
  },
  {
    id: 2,
    employee: "Ko Zaw Lin",
    position: "Credit Risk Analyst",
    date: "Apr 05, 2026",
    type: "Mid-Year Review",
  },
  {
    id: 3,
    employee: "Su Mon Phyu",
    position: "Marketing Executive",
    date: "Apr 08, 2026",
    type: "Annual Review",
  },
  {
    id: 4,
    employee: "Thet Hnin Pwint",
    position: "Customer Service Supervisor",
    date: "Apr 11, 2026",
    type: "Quarterly Review",
  },
];

export const trendData = [
  { month: "Oct", score: 79 },
  { month: "Nov", score: 83 },
  { month: "Dec", score: 81 },
  { month: "Jan", score: 86 },
  { month: "Feb", score: 88 },
  { month: "Mar", score: 90 },
];

export const overviewStats = [
  {
    id: 1,
    label: "Total Employees",
    value: "126",
    change: "+8 this quarter",
    trend: "up",
    icon: "users",
  },
  {
    id: 2,
    label: "Completed Appraisals",
    value: "78",
    change: "62% completion rate",
    trend: "up",
    icon: "check-circle",
  },
  {
    id: 3,
    label: "Pending Reviews",
    value: "18",
    change: "7 due this week",
    trend: "neutral",
    icon: "clock",
  },
  {
    id: 4,
    label: "Average Score",
    value: "89.2%",
    change: "+1.8% vs last cycle",
    trend: "up",
    icon: "trending-up",
  },
];

export const appraisalPipeline = [
  { id: 1, label: "Cycles Open", value: "6", note: "Head office plus branch operations" },
  { id: 2, label: "Calibrations Pending", value: "11", note: "Cross-functional sign-off required" },
  { id: 3, label: "Overdue Reviews", value: "4", note: "Escalated to department heads" },
  { id: 4, label: "Reviewers Active", value: "23", note: "Managers currently scoring" },
];

export const reviewCycles = [
  {
    id: 1,
    name: "Branch Operations Q1",
    owner: "Operations Director",
    participants: "32 employees",
    deadline: "Apr 08, 2026",
    status: "In Review",
  },
  {
    id: 2,
    name: "Finance and Treasury Q1",
    owner: "Head of Finance",
    participants: "18 employees",
    deadline: "Apr 05, 2026",
    status: "Pending",
  },
  {
    id: 3,
    name: "IT and Digital Systems",
    owner: "Technology Manager",
    participants: "14 employees",
    deadline: "Apr 12, 2026",
    status: "Completed",
  },
];

export const departmentSummary = [
  { id: 1, name: "Finance", headcount: 18, avgScore: 88, lead: "Daw Hla Hla" },
  { id: 2, name: "Human Resources", headcount: 11, avgScore: 90, lead: "May Thu Zar" },
  { id: 3, name: "IT", headcount: 14, avgScore: 86, lead: "Nyein Chan" },
  { id: 4, name: "Marketing", headcount: 9, avgScore: 84, lead: "Su Mon Phyu" },
  { id: 5, name: "Operations", headcount: 32, avgScore: 91, lead: "Aye Aye Moe" },
  { id: 6, name: "Risk & Compliance", headcount: 12, avgScore: 89, lead: "Ko Zaw Lin" },
  { id: 7, name: "Retail Lending", headcount: 20, avgScore: 88, lead: "Ei Shwe Sin" },
  { id: 8, name: "Customer Service", headcount: 10, avgScore: 85, lead: "Thet Hnin Pwint" },
];

export const reportHighlights = [
  { id: 1, label: "Top Performing Dept.", value: "Operations", note: "91% average performance score" },
  { id: 2, label: "At-Risk Reviews", value: "4", note: "Require escalation this week" },
  { id: 3, label: "Branches Covered", value: "12", note: "Across urban and rural lending hubs" },
  { id: 4, label: "Policy Compliance", value: "96%", note: "Aligned with review governance checklist" },
];

export const reportTrends = [
  { id: 1, department: "Operations", score: 91, trend: "Up 3%" },
  { id: 2, department: "Finance", score: 88, trend: "Up 1%" },
  { id: 3, department: "Human Resources", score: 90, trend: "Stable" },
  { id: 4, department: "IT", score: 86, trend: "Up 2%" },
  { id: 5, department: "Marketing", score: 84, trend: "Down 1%" },
  { id: 6, department: "Risk & Compliance", score: 89, trend: "Stable" },
];

export const reportMonthlyPerformance = [
  { month: "Oct", score: 82 },
  { month: "Nov", score: 84 },
  { month: "Dec", score: 83 },
  { month: "Jan", score: 87 },
  { month: "Feb", score: 88 },
  { month: "Mar", score: 89 },
];

export const settingsSections = [
  {
    id: 1,
    title: "Review Workflow",
    description: "Control approval stages for departmental and branch reviews.",
    status: "Active",
    items: ["Self review window: 7 days", "Manager review window: 10 days", "Calibration required for scores above 95%"],
  },
  {
    id: 2,
    title: "Notification Rules",
    description: "Alerts sent to department heads and branch managers.",
    status: "Configured",
    items: ["Remind pending reviewers every 48 hours", "Escalate overdue appraisals after 3 days", "Send completion digest every Friday"],
  },
  {
    id: 3,
    title: "Access Controls",
    description: "Permissions for HR, finance leadership, and IT admins.",
    status: "Restricted",
    items: ["HR admins can edit templates", "Department heads can approve direct reports", "Branch managers can view branch-only records"],
  },
  {
    id: 4,
    title: "Scoring Model",
    description: "Prototype weights for operational and support functions.",
    status: "Draft",
    items: ["Productivity weight: 40%", "Compliance weight: 35%", "Leadership and teamwork: 25%"],
  },
];
