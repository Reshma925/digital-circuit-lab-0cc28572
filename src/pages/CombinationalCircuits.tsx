import { KaTeX } from "@/components/ui/KaTeX";
import { CircuitSimulator } from "@/components/simulations/CircuitSimulator";
import { TopicNavigation } from "@/components/layout/TopicNavigation";

export default function CombinationalCircuits() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold neon-text-purple">
            Combinational Circuits
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combinational circuits produce outputs that depend only on the current inputs. 
            They include arithmetic circuits (adders, subtractors) and data selectors (MUX, DEMUX).
          </p>
        </div>

        {/* Definition */}
        <section className="simulation-card">
          <h2 className="font-display text-xl text-neon-cyan mb-4">What are Combinational Circuits?</h2>
          <p className="text-muted-foreground leading-relaxed">
            A <span className="text-foreground">combinational circuit</span> is a digital circuit where the output depends 
            solely on the present input values. Unlike sequential circuits, they have 
            <span className="text-neon-yellow"> no memory</span>. Common examples include 
            <span className="text-neon-cyan"> adders</span>, 
            <span className="text-neon-magenta"> subtractors</span>, 
            <span className="text-neon-green"> multiplexers</span>, and 
            <span className="text-neon-purple"> demultiplexers</span>.
          </p>
        </section>

        {/* Formulas */}
        <section className="simulation-card">
          <h2 className="font-display text-xl text-neon-cyan mb-6">Circuit Equations</h2>
          
          <div className="space-y-6">
            {/* Adders */}
            <div className="space-y-4">
              <h3 className="text-neon-yellow font-display">Adders</h3>
              
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-3">Half Adder</div>
                <div className="flex flex-wrap gap-6 justify-center">
                  <div>
                    <span className="text-neon-cyan mr-2">Sum:</span>
                    <KaTeX math="S = A \oplus B" />
                  </div>
                  <div>
                    <span className="text-neon-magenta mr-2">Carry:</span>
                    <KaTeX math="C = A \cdot B" />
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-3">Full Adder</div>
                <div className="space-y-2 text-center">
                  <div>
                    <span className="text-neon-cyan mr-2">Sum:</span>
                    <KaTeX math="S = A \oplus B \oplus C_{in}" />
                  </div>
                  <div>
                    <span className="text-neon-magenta mr-2">Carry:</span>
                    <KaTeX math="C_{out} = AB + C_{in}(A \oplus B)" />
                  </div>
                </div>
              </div>
            </div>

            {/* Subtractors */}
            <div className="space-y-4">
              <h3 className="text-neon-magenta font-display">Subtractors</h3>
              
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-3">Half Subtractor</div>
                <div className="flex flex-wrap gap-6 justify-center">
                  <div>
                    <span className="text-neon-cyan mr-2">Diff:</span>
                    <KaTeX math="D = A \oplus B" />
                  </div>
                  <div>
                    <span className="text-neon-red mr-2">Borrow:</span>
                    <KaTeX math="B_{out} = A' \cdot B" />
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-3">Full Subtractor</div>
                <div className="space-y-2 text-center">
                  <div>
                    <span className="text-neon-cyan mr-2">Diff:</span>
                    <KaTeX math="D = A \oplus B \oplus B_{in}" />
                  </div>
                  <div>
                    <span className="text-neon-red mr-2">Borrow:</span>
                    <KaTeX math="B_{out} = A'B + B_{in}(A \oplus B)'" />
                  </div>
                </div>
              </div>
            </div>

            {/* MUX/DEMUX */}
            <div className="space-y-4">
              <h3 className="text-neon-green font-display">Multiplexer & Demultiplexer</h3>
              
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-3">2×1 MUX</div>
                <KaTeX math="Y = S' \cdot I_0 + S \cdot I_1" display />
              </div>

              <div className="bg-muted/30 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-3">4×1 MUX</div>
                <KaTeX math="Y = S_1'S_0'I_0 + S_1'S_0 I_1 + S_1 S_0'I_2 + S_1 S_0 I_3" display />
              </div>

              <div className="bg-muted/30 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-3">1×4 DEMUX</div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <KaTeX math="Y_0 = D \cdot S_1' \cdot S_0'" />
                  <KaTeX math="Y_1 = D \cdot S_1' \cdot S_0" />
                  <KaTeX math="Y_2 = D \cdot S_1 \cdot S_0'" />
                  <KaTeX math="Y_3 = D \cdot S_1 \cdot S_0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Simulation */}
        <section>
          <h2 className="font-display text-xl text-neon-green mb-6 text-center">
            Interactive Simulation
          </h2>
          <CircuitSimulator />
        </section>

        {/* Navigation */}
        <TopicNavigation
          prevTopic={{ path: "/boolean-algebra", label: "Boolean Algebra" }}
        />
      </div>
    </div>
  );
}
