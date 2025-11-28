import { useState } from "react";
import { cn } from "@/lib/utils";

type GateType = "AND" | "OR" | "NOT" | "NAND" | "NOR" | "XOR" | "XNOR";

const gates: { type: GateType; formula: string; twoInputs: boolean }[] = [
  { type: "AND", formula: "Y = A · B", twoInputs: true },
  { type: "OR", formula: "Y = A + B", twoInputs: true },
  { type: "NOT", formula: "Y = A'", twoInputs: false },
  { type: "NAND", formula: "Y = (A · B)'", twoInputs: true },
  { type: "NOR", formula: "Y = (A + B)'", twoInputs: true },
  { type: "XOR", formula: "Y = A ⊕ B", twoInputs: true },
  { type: "XNOR", formula: "Y = (A ⊕ B)'", twoInputs: true },
];

const calculateOutput = (gate: GateType, a: boolean, b: boolean): boolean => {
  switch (gate) {
    case "AND": return a && b;
    case "OR": return a || b;
    case "NOT": return !a;
    case "NAND": return !(a && b);
    case "NOR": return !(a || b);
    case "XOR": return a !== b;
    case "XNOR": return a === b;
    default: return false;
  }
};

const getTruthTable = (gate: GateType, twoInputs: boolean) => {
  if (!twoInputs) {
    return [
      { a: false, b: false, out: calculateOutput(gate, false, false) },
      { a: true, b: false, out: calculateOutput(gate, true, false) },
    ];
  }
  return [
    { a: false, b: false, out: calculateOutput(gate, false, false) },
    { a: false, b: true, out: calculateOutput(gate, false, true) },
    { a: true, b: false, out: calculateOutput(gate, true, false) },
    { a: true, b: true, out: calculateOutput(gate, true, true) },
  ];
};

export function LogicGateSimulator() {
  const [selectedGate, setSelectedGate] = useState<GateType>("AND");
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);

  const currentGate = gates.find((g) => g.type === selectedGate)!;
  const output = calculateOutput(selectedGate, inputA, inputB);
  const truthTable = getTruthTable(selectedGate, currentGate.twoInputs);

  return (
    <div className="simulation-card space-y-8">
      <div className="text-center">
        <h3 className="font-display text-2xl neon-text-cyan mb-4">Logic Gate Simulator</h3>
        <p className="text-muted-foreground">Select a gate and toggle inputs to see the output</p>
      </div>

      {/* Gate Selector */}
      <div className="flex flex-wrap justify-center gap-2">
        {gates.map((gate) => (
          <button
            key={gate.type}
            onClick={() => setSelectedGate(gate.type)}
            className={cn(
              "px-4 py-2 rounded-lg font-display text-sm transition-all duration-300",
              selectedGate === gate.type
                ? "bg-neon-cyan/20 text-neon-cyan neon-border"
                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
            )}
          >
            {gate.type}
          </button>
        ))}
      </div>

      {/* Gate Visualization */}
      <div className="flex items-center justify-center gap-8">
        {/* Inputs */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground w-8">A:</span>
            <button
              onClick={() => setInputA(!inputA)}
              className={cn(
                "toggle-switch",
                inputA ? "on" : "off"
              )}
            >
              <div
                className={cn(
                  "absolute top-1 w-6 h-6 rounded-full transition-all duration-300",
                  inputA
                    ? "left-9 bg-neon-green"
                    : "left-1 bg-muted-foreground"
                )}
              />
            </button>
            <span className={cn(
              "font-display text-xl w-8",
              inputA ? "text-neon-green" : "text-muted-foreground"
            )}>
              {inputA ? "1" : "0"}
            </span>
          </div>
          
          {currentGate.twoInputs && (
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground w-8">B:</span>
              <button
                onClick={() => setInputB(!inputB)}
                className={cn(
                  "toggle-switch",
                  inputB ? "on" : "off"
                )}
              >
                <div
                  className={cn(
                    "absolute top-1 w-6 h-6 rounded-full transition-all duration-300",
                    inputB
                      ? "left-9 bg-neon-green"
                      : "left-1 bg-muted-foreground"
                  )}
                />
              </button>
              <span className={cn(
                "font-display text-xl w-8",
                inputB ? "text-neon-green" : "text-muted-foreground"
              )}>
                {inputB ? "1" : "0"}
              </span>
            </div>
          )}
        </div>

        {/* Gate Symbol */}
        <div className="flex flex-col items-center gap-2">
          <div className={cn(
            "w-24 h-16 rounded-lg border-2 flex items-center justify-center font-display text-xl transition-all duration-300",
            output
              ? "border-neon-green text-neon-green neon-glow-green"
              : "border-neon-red/50 text-neon-red"
          )}>
            {selectedGate}
          </div>
          <div className="text-sm text-neon-purple">{currentGate.formula}</div>
        </div>

        {/* Output */}
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground">Y:</span>
          <div className={cn("output-indicator", output ? "output-high" : "output-low")} />
          <span className={cn(
            "font-display text-2xl",
            output ? "text-neon-green" : "text-neon-red"
          )}>
            {output ? "1" : "0"}
          </span>
        </div>
      </div>

      {/* Truth Table */}
      <div className="overflow-x-auto">
        <table className="w-full max-w-md mx-auto">
          <thead>
            <tr className="border-b border-border">
              <th className="py-2 px-4 text-neon-cyan">A</th>
              {currentGate.twoInputs && <th className="py-2 px-4 text-neon-cyan">B</th>}
              <th className="py-2 px-4 text-neon-magenta">Y</th>
            </tr>
          </thead>
          <tbody>
            {truthTable.map((row, index) => {
              const isActive = currentGate.twoInputs
                ? row.a === inputA && row.b === inputB
                : row.a === inputA;
              return (
                <tr
                  key={index}
                  className={cn(
                    "transition-all duration-300",
                    isActive
                      ? "bg-neon-cyan/20 text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <td className="py-2 px-4 text-center font-mono">{row.a ? "1" : "0"}</td>
                  {currentGate.twoInputs && (
                    <td className="py-2 px-4 text-center font-mono">{row.b ? "1" : "0"}</td>
                  )}
                  <td className={cn(
                    "py-2 px-4 text-center font-mono font-bold",
                    isActive && (row.out ? "text-neon-green" : "text-neon-red")
                  )}>
                    {row.out ? "1" : "0"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
