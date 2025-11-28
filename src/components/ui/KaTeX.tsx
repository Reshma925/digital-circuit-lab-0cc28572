import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface KaTeXProps {
  math: string;
  display?: boolean;
  className?: string;
}

export function KaTeX({ math, display = false, className = "" }: KaTeXProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      katex.render(math, containerRef.current, {
        displayMode: display,
        throwOnError: false,
        output: "html",
      });
    }
  }, [math, display]);

  return (
    <span
      ref={containerRef}
      className={`${display ? "block text-center my-4" : "inline"} ${className}`}
    />
  );
}
