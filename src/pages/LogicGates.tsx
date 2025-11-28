import { KaTeX } from "@/components/ui/KaTeX";
import { LogicGateSimulator } from "@/components/simulations/LogicGateSimulator";
import { TopicNavigation } from "@/components/layout/TopicNavigation";

export default function LogicGates() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold neon-text-magenta">
            Logic Gates
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Logic gates are the fundamental building blocks of digital circuits. They perform 
            basic logical operations on binary inputs to produce a single binary output.
          </p>
        </div>

        {/* Definition */}
        <section className="simulation-card">
          <h2 className="font-display text-xl text-neon-yellow mb-4">What are Logic Gates?</h2>
          <p className="text-muted-foreground leading-relaxed">
            A <span className="text-foreground">logic gate</span> is an electronic device that implements a Boolean function, 
            performing a logical operation on one or more binary inputs and producing a single binary output. 
            The basic gates are <span className="text-neon-cyan">AND</span>, 
            <span className="text-neon-magenta"> OR</span>, and 
            <span className="text-neon-yellow"> NOT</span>. 
            From these, we derive <span className="text-neon-purple">NAND, NOR, XOR, and XNOR</span> gates.
          </p>
        </section>

        {/* Formulas */}
        <section className="simulation-card">
          <h2 className="font-display text-xl text-neon-yellow mb-6">Gate Equations</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-neon-cyan mb-2">AND Gate</div>
              <KaTeX math="Y = A \cdot B" display />
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-neon-cyan mb-2">OR Gate</div>
              <KaTeX math="Y = A + B" display />
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-neon-cyan mb-2">NOT Gate</div>
              <KaTeX math="Y = \overline{A} = A'" display />
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-neon-magenta mb-2">NAND Gate</div>
              <KaTeX math="Y = \overline{A \cdot B}" display />
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-neon-magenta mb-2">NOR Gate</div>
              <KaTeX math="Y = \overline{A + B}" display />
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-sm text-neon-purple mb-2">XOR Gate</div>
              <KaTeX math="Y = A \oplus B = A\overline{B} + \overline{A}B" display />
            </div>

            <div className="bg-muted/30 rounded-xl p-4 md:col-span-2">
              <div className="text-sm text-neon-purple mb-2">XNOR Gate</div>
              <KaTeX math="Y = \overline{A \oplus B} = AB + \overline{A}\,\overline{B}" display />
            </div>
          </div>
        </section>

        {/* Key Properties */}
        <section className="simulation-card">
          <h2 className="font-display text-xl text-neon-yellow mb-4">Key Properties</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-foreground">• <span className="text-neon-cyan">NAND</span> and <span className="text-neon-cyan">NOR</span> are universal gates</p>
              <p className="text-foreground">• Any logic circuit can be built using only NAND gates</p>
            </div>
            <div className="space-y-2">
              <p className="text-foreground">• <span className="text-neon-purple">XOR</span> outputs 1 when inputs are different</p>
              <p className="text-foreground">• <span className="text-neon-purple">XNOR</span> outputs 1 when inputs are same</p>
            </div>
          </div>
        </section>

        {/* Interactive Simulation */}
        <section>
          <h2 className="font-display text-xl text-neon-cyan mb-6 text-center">
            Interactive Simulation
          </h2>
          <LogicGateSimulator />
        </section>

        {/* Navigation */}
        <TopicNavigation
          prevTopic={{ path: "/number-systems", label: "Number Systems" }}
          nextTopic={{ path: "/boolean-algebra", label: "Boolean Algebra" }}
        />
      </div>
    </div>
  );
}
