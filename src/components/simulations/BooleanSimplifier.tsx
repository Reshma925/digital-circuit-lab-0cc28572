import { useState } from "react";
import { cn } from "@/lib/utils";
import { KaTeX } from "@/components/ui/KaTeX";

interface SimplificationExample {
  expression: string;
  latex: string;
  steps: { rule: string; result: string; latex: string }[];
  simplified: string;
  simplifiedLatex: string;
}

const examples: SimplificationExample[] = [
  {
    expression: "A + A'B",
    latex: "A + A'B",
    steps: [
      { rule: "Absorption Law", result: "A + B", latex: "A + B" },
    ],
    simplified: "A + B",
    simplifiedLatex: "A + B",
  },
  {
    expression: "AB + A'B",
    latex: "AB + A'B",
    steps: [
      { rule: "Factor out B", result: "B(A + A')", latex: "B(A + A')" },
      { rule: "Complement Law: A + A' = 1", result: "B(1)", latex: "B \\cdot 1" },
      { rule: "Identity Law: B·1 = B", result: "B", latex: "B" },
    ],
    simplified: "B",
    simplifiedLatex: "B",
  },
  {
    expression: "A(A + B)",
    latex: "A(A + B)",
    steps: [
      { rule: "Absorption Law", result: "A", latex: "A" },
    ],
    simplified: "A",
    simplifiedLatex: "A",
  },
  {
    expression: "(A + B)(A + B')",
    latex: "(A + B)(A + B')",
    steps: [
      { rule: "Expand using distribution", result: "AA + AB' + BA + BB'", latex: "AA + AB' + BA + BB'" },
      { rule: "Idempotent: AA = A, Complement: BB' = 0", result: "A + AB' + AB", latex: "A + AB' + AB" },
      { rule: "Factor out A", result: "A(1 + B' + B)", latex: "A(1 + B' + B)" },
      { rule: "Simplify: 1 + X = 1", result: "A", latex: "A" },
    ],
    simplified: "A",
    simplifiedLatex: "A",
  },
  {
    expression: "(A'B')' ",
    latex: "(A'B')'",
    steps: [
      { rule: "De Morgan's Law", result: "A'' + B''", latex: "(A')' + (B')'" },
      { rule: "Double Complement: (A')' = A", result: "A + B", latex: "A + B" },
    ],
    simplified: "A + B",
    simplifiedLatex: "A + B",
  },
  {
    expression: "A + AB",
    latex: "A + AB",
    steps: [
      { rule: "Factor out A", result: "A(1 + B)", latex: "A(1 + B)" },
      { rule: "Annulment: 1 + B = 1", result: "A(1)", latex: "A \\cdot 1" },
      { rule: "Identity: A·1 = A", result: "A", latex: "A" },
    ],
    simplified: "A",
    simplifiedLatex: "A",
  },
];

export function BooleanSimplifier() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showSteps, setShowSteps] = useState(false);

  const current = examples[selectedIndex];

  return (
    <div className="simulation-card space-y-8">
      <div className="text-center">
        <h3 className="font-display text-2xl neon-text-cyan mb-4">Boolean Simplifier</h3>
        <p className="text-muted-foreground">Select an expression to see step-by-step simplification</p>
      </div>

      {/* Expression Selector */}
      <div className="flex flex-wrap justify-center gap-2">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              setShowSteps(false);
            }}
            className={cn(
              "px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300",
              selectedIndex === index
                ? "bg-neon-magenta/20 text-neon-magenta border border-neon-magenta/50"
                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
            )}
          >
            {example.expression}
          </button>
        ))}
      </div>

      {/* Expression Display */}
      <div className="bg-muted/30 rounded-xl p-6 text-center">
        <div className="text-sm text-muted-foreground mb-2">Original Expression</div>
        <div className="text-2xl">
          <KaTeX math={current.latex} />
        </div>
      </div>

      {/* Simplify Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowSteps(true)}
          className={cn(
            "px-8 py-3 rounded-xl font-display text-lg transition-all duration-300",
            showSteps
              ? "bg-neon-green/20 text-neon-green border border-neon-green/50"
              : "bg-neon-cyan/20 text-neon-cyan neon-border hover:bg-neon-cyan/30"
          )}
        >
          {showSteps ? "Simplified!" : "Simplify"}
        </button>
      </div>

      {/* Simplification Steps */}
      {showSteps && (
        <div className="space-y-4 animate-in fade-in duration-500">
          <div className="text-center text-sm text-muted-foreground mb-4">
            Simplification Steps
          </div>
          
          {current.steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-muted/20 rounded-lg p-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neon-purple/20 text-neon-purple flex items-center justify-center font-display">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="text-sm text-neon-yellow mb-1">{step.rule}</div>
                <div className="text-lg">
                  <KaTeX math={step.latex} />
                </div>
              </div>
            </div>
          ))}

          {/* Final Result */}
          <div className="bg-neon-green/10 border border-neon-green/30 rounded-xl p-6 text-center mt-6">
            <div className="text-sm text-neon-green mb-2">Simplified Expression</div>
            <div className="text-3xl font-display">
              <KaTeX math={current.simplifiedLatex} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
