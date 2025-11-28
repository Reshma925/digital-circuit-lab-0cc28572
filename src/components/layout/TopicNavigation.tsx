import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopicNavigationProps {
  prevTopic?: { path: string; label: string };
  nextTopic?: { path: string; label: string };
}

export function TopicNavigation({ prevTopic, nextTopic }: TopicNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
      {prevTopic ? (
        <Link to={prevTopic.path}>
          <Button
            variant="outline"
            className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            {prevTopic.label}
          </Button>
        </Link>
      ) : (
        <div />
      )}
      
      {nextTopic ? (
        <Link to={nextTopic.path}>
          <Button
            variant="outline"
            className="border-neon-magenta/50 text-neon-magenta hover:bg-neon-magenta/10 hover:border-neon-magenta"
          >
            {nextTopic.label}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
