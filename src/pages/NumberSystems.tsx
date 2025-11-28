import { KaTeX } from "@/components/ui/KaTeX";
import { NumberConverter } from "@/components/simulations/NumberConverter";
import { TopicNavigation } from "@/components/layout/TopicNavigation";

export default function NumberSystems() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold neon-text-cyan">
            Number Systems & Codes
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Digital systems use various number systems to represent data. Understanding 
            conversions between Binary, Decimal, Octal, and Hexadecimal is fundamental 
            to digital electronics.
          </p>
        </div>

        {/* Definition */}
        <section className="simulation-card">
          <h2 className="font-display text-xl text-neon-yellow mb-4">What are Number Systems?</h2>
          <p className="text-muted-foreground leading-relaxed">
            A <span className="text-foreground">number system</span> is a way to represent numbers using a specific set of symbols (digits). 
            Digital electronics primarily uses the <span className="text-neon-cyan">Binary (base-2)</span> system, 
            but we also work with <span className="text-neon-magenta">Decimal (base-10)</span>, 
            <span className="text-neon-yellow"> Octal (base-8)</span>, and 
            <span className="text-neon-purple"> Hexadecimal (base-16)</span> for convenience.
          </p>
        </section>

        {/* Formulas */}
        <section className="simulation-card">
          <h2 className="font-display text-xl text-neon-yellow mb-6">Key Formulas</h2>
          
          <div className="space-y-6">
            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-muted-foreground mb-2">Binary to Decimal Conversion</div>
              <KaTeX math="D = \sum_{i=0}^{n-1} b_i \cdot 2^i" display />
              <p className="text-sm text-muted-foreground mt-2">
                Where b<sub>i</sub> is each bit and i is its position from right (starting at 0)
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-muted-foreground mb-2">Decimal to Binary</div>
              <p className="text-foreground">
                Repeatedly divide by 2 and collect remainders (read bottom to top)
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-muted-foreground mb-2">Binary ↔ Gray Code</div>
              <KaTeX math="G_n = B_n, \quad G_i = B_{i+1} \oplus B_i" display />
              <p className="text-sm text-muted-foreground mt-2">
                Gray code changes only one bit between consecutive values
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-2">Binary ↔ Octal</div>
                <p className="text-foreground text-sm">Group binary digits in sets of 3</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-2">Binary ↔ Hex</div>
                <p className="text-foreground text-sm">Group binary digits in sets of 4</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Simulation */}
        <section>
          <h2 className="font-display text-xl text-neon-magenta mb-6 text-center">
            Interactive Simulation
          </h2>
          <NumberConverter />
        </section>

        {/* Navigation */}
        <TopicNavigation
          prevTopic={{ path: "/", label: "Home" }}
          nextTopic={{ path: "/logic-gates", label: "Logic Gates" }}
        />
      </div>
    </div>
  );
}
