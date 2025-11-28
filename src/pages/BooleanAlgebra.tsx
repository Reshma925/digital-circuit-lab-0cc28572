import { KaTeX } from "@/components/ui/KaTeX";
import { BooleanSimplifier } from "@/components/simulations/BooleanSimplifier";
import { TopicNavigation } from "@/components/layout/TopicNavigation";

export default function BooleanAlgebra() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold neon-text-yellow">
            Boolean Algebra & Simplification
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Boolean algebra provides the mathematical foundation for digital circuit design. 
            Simplifying Boolean expressions leads to more efficient circuits with fewer gates.
          </p>
        </div>

        {/* Definition */}
        <section className="simulation-card">
          <h2 className="font-display text-xl text-neon-cyan mb-4">What is Boolean Algebra?</h2>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground">Boolean algebra</span> is a branch of algebra where variables can only have 
            two values: <span className="text-neon-green">1 (TRUE)</span> or <span className="text-neon-red">0 (FALSE)</span>. 
            It uses three basic operations: <span className="text-neon-cyan">AND (·)</span>, 
            <span className="text-neon-magenta"> OR (+)</span>, and 
            <span className="text-neon-yellow"> NOT (')</span>.
          </p>
        </section>

        {/* Laws */}
        <section className="simulation-card">
          <h2 className="font-display text-xl text-neon-cyan mb-6">Fundamental Laws</h2>
          
          <div className="space-y-4">
            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-neon-yellow mb-3">Identity Laws</div>
              <div className="flex flex-wrap gap-8 justify-center">
                <KaTeX math="A + 0 = A" />
                <KaTeX math="A \cdot 1 = A" />
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-neon-yellow mb-3">Null Laws</div>
              <div className="flex flex-wrap gap-8 justify-center">
                <KaTeX math="A + 1 = 1" />
                <KaTeX math="A \cdot 0 = 0" />
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-neon-yellow mb-3">Idempotent Laws</div>
              <div className="flex flex-wrap gap-8 justify-center">
                <KaTeX math="A + A = A" />
                <KaTeX math="A \cdot A = A" />
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-neon-yellow mb-3">Complement Laws</div>
              <div className="flex flex-wrap gap-8 justify-center">
                <KaTeX math="A + A' = 1" />
                <KaTeX math="A \cdot A' = 0" />
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-neon-magenta mb-3">De Morgan's Theorems</div>
              <div className="flex flex-wrap gap-8 justify-center">
                <KaTeX math="\overline{A + B} = \overline{A} \cdot \overline{B}" />
                <KaTeX math="\overline{A \cdot B} = \overline{A} + \overline{B}" />
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-neon-purple mb-3">Absorption Laws</div>
              <div className="flex flex-wrap gap-8 justify-center">
                <KaTeX math="A + AB = A" />
                <KaTeX math="A(A + B) = A" />
                <KaTeX math="A + A'B = A + B" />
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-neon-cyan mb-3">Distributive Laws</div>
              <div className="flex flex-wrap gap-8 justify-center">
                <KaTeX math="A(B + C) = AB + AC" />
                <KaTeX math="A + BC = (A + B)(A + C)" />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Simulation */}
        <section>
          <h2 className="font-display text-xl text-neon-magenta mb-6 text-center">
            Interactive Simplifier
          </h2>
          <BooleanSimplifier />
        </section>

        {/* Navigation */}
        <TopicNavigation
          prevTopic={{ path: "/logic-gates", label: "Logic Gates" }}
          nextTopic={{ path: "/combinational-circuits", label: "Combinational Circuits" }}
        />
      </div>
    </div>
  );
}
