import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export function NumberConverter() {
  const [value, setValue] = useState(42);
  const [showGrayCode, setShowGrayCode] = useState(false);

  const binary = value.toString(2).padStart(10, "0");
  const octal = value.toString(8);
  const hex = value.toString(16).toUpperCase();
  
  // Gray code conversion
  const toGrayCode = (n: number): string => {
    const gray = n ^ (n >> 1);
    return gray.toString(2).padStart(10, "0");
  };
  
  const grayCode = toGrayCode(value);
  const displayBinary = showGrayCode ? grayCode : binary;

  return (
    <div className="simulation-card space-y-8">
      <div className="text-center">
        <h3 className="font-display text-2xl neon-text-cyan mb-4">Number Converter</h3>
        <p className="text-muted-foreground">Move the slider to convert between number systems</p>
      </div>

      {/* Slider */}
      <div className="px-4">
        <Slider
          value={[value]}
          onValueChange={(v) => setValue(v[0])}
          max={1023}
          min={0}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-muted-foreground mt-2">
          <span>0</span>
          <span className="text-3xl font-display neon-text-yellow">{value}</span>
          <span>1023</span>
        </div>
      </div>

      {/* Binary/Gray Code Toggle */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setShowGrayCode(false)}
          className={cn(
            "px-4 py-2 rounded-lg font-medium transition-all",
            !showGrayCode
              ? "bg-neon-cyan/20 text-neon-cyan neon-border"
              : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          Binary
        </button>
        <button
          onClick={() => setShowGrayCode(true)}
          className={cn(
            "px-4 py-2 rounded-lg font-medium transition-all",
            showGrayCode
              ? "bg-neon-magenta/20 text-neon-magenta border border-neon-magenta/50"
              : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          Gray Code
        </button>
      </div>

      {/* Bit Display */}
      <div className="flex justify-center gap-1 flex-wrap">
        {displayBinary.split("").map((bit, index) => (
          <div
            key={index}
            className={cn(
              "bit-box",
              bit === "1" ? "bit-on" : "bit-off"
            )}
          >
            {bit}
          </div>
        ))}
      </div>

      {/* Number System Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-muted/50 rounded-xl p-4 text-center">
          <div className="text-sm text-muted-foreground mb-1">Decimal</div>
          <div className="font-display text-2xl text-neon-cyan">{value}</div>
        </div>
        <div className="bg-muted/50 rounded-xl p-4 text-center">
          <div className="text-sm text-muted-foreground mb-1">Binary</div>
          <div className="font-display text-xl text-neon-yellow break-all">{binary}</div>
        </div>
        <div className="bg-muted/50 rounded-xl p-4 text-center">
          <div className="text-sm text-muted-foreground mb-1">Octal</div>
          <div className="font-display text-2xl text-neon-magenta">{octal}</div>
        </div>
        <div className="bg-muted/50 rounded-xl p-4 text-center">
          <div className="text-sm text-muted-foreground mb-1">Hexadecimal</div>
          <div className="font-display text-2xl text-neon-purple">{hex}</div>
        </div>
      </div>

      {showGrayCode && (
        <div className="bg-muted/30 rounded-xl p-4 text-center">
          <div className="text-sm text-muted-foreground mb-1">Gray Code</div>
          <div className="font-display text-xl text-neon-magenta break-all">{grayCode}</div>
        </div>
      )}
    </div>
  );
}
