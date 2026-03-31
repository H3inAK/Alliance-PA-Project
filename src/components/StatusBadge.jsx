export default function StatusBadge({ status }) {
  const styles = {
    Completed: {
      bg: "#d1fae5",
      text: "#065f46",
      dot: "#10b981",
    },
    Pending: {
      bg: "#fef3c7",
      text: "#92400e",
      dot: "#f59e0b",
    },
    "In Review": {
      bg: "#dbeafe",
      text: "#1e3a8a",
      dot: "#3b82f6",
    },
  };

  const style = styles[status] || { bg: "#f3f4f6", text: "#374151", dot: "#9ca3af" };

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: style.dot }} />
      {status}
    </span>
  );
}
