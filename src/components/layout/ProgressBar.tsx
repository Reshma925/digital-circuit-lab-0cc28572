import { useLocation } from "react-router-dom";

const topics = [
  "/number-systems",
  "/logic-gates",
  "/boolean-algebra",
  "/combinational-circuits",
];

export function ProgressBar() {
  const location = useLocation();
  
  const currentIndex = topics.indexOf(location.pathname);
  const progress = currentIndex >= 0 ? ((currentIndex + 1) / topics.length) * 100 : 0;

  if (location.pathname === "/") return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-muted">
      <div
        className="h-full bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
