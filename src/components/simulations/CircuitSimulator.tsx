import { useState } from "react";
import { cn } from "@/lib/utils";

type CircuitType = "half-adder" | "full-adder" | "half-subtractor" | "full-subtractor" | "mux-2x1" | "mux-4x1" | "demux-1x4";

interface CircuitConfig {
  type: CircuitType;
  label: string;
  inputs: string[];
  outputs: { name: string; calculate: (inputs: boolean[]) => boolean }[];
}

const circuits: CircuitConfig[] = [
  {
    type: "half-adder",
    label: "Half Adder",
    inputs: ["A", "B"],
    outputs: [
      { name: "Sum", calculate: ([a, b]) => a !== b },
      { name: "Carry", calculate: ([a, b]) => a && b },
    ],
  },
  {
    type: "full-adder",
    label: "Full Adder",
    inputs: ["A", "B", "Cin"],
    outputs: [
      { name: "Sum", calculate: ([a, b, cin]) => (a !== b) !== cin },
      { name: "Cout", calculate: ([a, b, cin]) => (a && b) || (cin && (a !== b)) },
    ],
  },
  {
    type: "half-subtractor",
    label: "Half Subtractor",
    inputs: ["A", "B"],
    outputs: [
      { name: "Diff", calculate: ([a, b]) => a !== b },
      { name: "Borrow", calculate: ([a, b]) => !a && b },
    ],
  },
  {
    type: "full-subtractor",
    label: "Full Subtractor",
    inputs: ["A", "B", "Bin"],
    outputs: [
      { name: "Diff", calculate: ([a, b, bin]) => (a !== b) !== bin },
      { name: "Bout", calculate: ([a, b, bin]) => (!a && b) || ((!a || b) && bin) },
    ],
  },
  {
    type: "mux-2x1",
    label: "2×1 MUX",
    inputs: ["I0", "I1", "S"],
    outputs: [
      { name: "Y", calculate: ([i0, i1, s]) => s ? i1 : i0 },
    ],
  },
  {
    type: "mux-4x1",
    label: "4×1 MUX",
    inputs: ["I0", "I1", "I2", "I3", "S0", "S1"],
    outputs: [
      { 
        name: "Y", 
        calculate: ([i0, i1, i2, i3, s0, s1]) => {
          const sel = (s1 ? 2 : 0) + (s0 ? 1 : 0);
          return [i0, i1, i2, i3][sel];
        }
      },
    ],
  },
  {
    type: "demux-1x4",
    label: "1×4 DEMUX",
    inputs: ["D", "S0", "S1"],
    outputs: [
      { name: "Y0", calculate: ([d, s0, s1]) => d && !s0 && !s1 },
      { name: "Y1", calculate: ([d, s0, s1]) => d && s0 && !s1 },
      { name: "Y2", calculate: ([d, s0, s1]) => d && !s0 && s1 },
      { name: "Y3", calculate: ([d, s0, s1]) => d && s0 && s1 },
    ],
  },
];

export function CircuitSimulator() {
  const [selectedCircuit, setSelectedCircuit] = useState<CircuitType>("half-adder");
  const [inputs, setInputs] = useState<boolean[]>([false, false, false, false, false, false]);

  const circuit = circuits.find((c) => c.type === selectedCircuit)!;
  const activeInputs = inputs.slice(0, circuit.inputs.length);
  const outputs = circuit.outputs.map((out) => ({
    name: out.name,
    value: out.calculate(activeInputs),
  }));

  const toggleInput = (index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = !newInputs[index];
    setInputs(newInputs);
  };

  return (
    <div className="simulation-card space-y-8">
      <div className="text-center">
        <h3 className="font-display text-2xl neon-text-cyan mb-4">Circuit Simulator</h3>
        <p className="text-muted-foreground">Select a circuit and toggle inputs</p>
      </div>

      {/* Circuit Selector */}
      <div className="flex flex-wrap justify-center gap-2">
        {circuits.map((c) => (
          <button
            key={c.type}
            onClick={() => {
              setSelectedCircuit(c.type);
              setInputs([false, false, false, false, false, false]);
            }}
            className={cn(
              "px-3 py-2 rounded-lg font-display text-xs sm:text-sm transition-all duration-300",
              selectedCircuit === c.type
                ? "bg-neon-purple/20 text-neon-purple border border-neon-purple/50"
                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Circuit Visualization */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Inputs */}
        <div className="space-y-3">
          <div className="text-sm text-muted-foreground text-center mb-2">Inputs</div>
          {circuit.inputs.map((name, index) => (
            <div key={name} className="flex items-center gap-3">
              <span className="text-muted-foreground w-8 text-right">{name}:</span>
              <button
                onClick={() => toggleInput(index)}
                className={cn(
                  "toggle-switch",
                  inputs[index] ? "on" : "off"
                )}
              >
                <div
                  className={cn(
                    "absolute top-1 w-6 h-6 rounded-full transition-all duration-300",
                    inputs[index]
                      ? "left-9 bg-neon-green"
                      : "left-1 bg-muted-foreground"
                  )}
                />
              </button>
              <span className={cn(
                "font-display text-lg w-6",
                inputs[index] ? "text-neon-green" : "text-muted-foreground"
              )}>
                {inputs[index] ? "1" : "0"}
              </span>
            </div>
          ))}
        </div>

        {/* Circuit Block */}
        <div className={cn(
          "w-32 h-24 rounded-xl border-2 flex items-center justify-center font-display text-center transition-all duration-300",
          outputs.some((o) => o.value)
            ? "border-neon-cyan text-neon-cyan neon-glow-cyan"
            : "border-muted text-muted-foreground"
        )}>
          <span className="text-sm px-2">{circuit.label}</span>
        </div>

        {/* Outputs */}
        <div className="space-y-3">
          <div className="text-sm text-muted-foreground text-center mb-2">Outputs</div>
          {outputs.map((out) => (
            <div key={out.name} className="flex items-center gap-3">
              <span className="text-muted-foreground w-12 text-right">{out.name}:</span>
              <div className={cn("output-indicator", out.value ? "output-high" : "output-low")} />
              <span className={cn(
                "font-display text-lg w-6",
                out.value ? "text-neon-green" : "text-neon-red"
              )}>
                {out.value ? "1" : "0"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Truth Table for selected circuit */}
      <TruthTable circuit={circuit} currentInputs={activeInputs} />
    </div>
  );
}

function TruthTable({ circuit, currentInputs }: { circuit: CircuitConfig; currentInputs: boolean[] }) {
  const generateRows = () => {
    const numInputs = circuit.inputs.length;
    const rows: { inputs: boolean[]; outputs: boolean[] }[] = [];
    
    for (let i = 0; i < Math.pow(2, numInputs); i++) {
      const inputValues = [];
      for (let j = numInputs - 1; j >= 0; j--) {
        inputValues.push(Boolean((i >> j) & 1));
      }
      const outputValues = circuit.outputs.map((out) => out.calculate(inputValues));
      rows.push({ inputs: inputValues, outputs: outputValues });
    }
    return rows;
  };

  const rows = generateRows();

  const isActiveRow = (rowInputs: boolean[]) => {
    return rowInputs.every((val, idx) => val === currentInputs[idx]);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full max-w-2xl mx-auto text-sm">
        <thead>
          <tr className="border-b border-border">
            {circuit.inputs.map((name) => (
              <th key={name} className="py-2 px-3 text-neon-cyan">{name}</th>
            ))}
            {circuit.outputs.map((out) => (
              <th key={out.name} className="py-2 px-3 text-neon-magenta">{out.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={cn(
                "transition-all duration-300",
                isActiveRow(row.inputs)
                  ? "bg-neon-cyan/20 text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {row.inputs.map((val, idx) => (
                <td key={idx} className="py-2 px-3 text-center font-mono">{val ? "1" : "0"}</td>
              ))}
              {row.outputs.map((val, idx) => (
                <td 
                  key={idx} 
                  className={cn(
                    "py-2 px-3 text-center font-mono font-bold",
                    isActiveRow(row.inputs) && (val ? "text-neon-green" : "text-neon-red")
                  )}
                >
                  {val ? "1" : "0"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
