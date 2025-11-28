import { Link } from "react-router-dom";
import { Binary, CircuitBoard, Calculator, Cpu } from "lucide-react";

const topics = [
  {
    path: "/number-systems",
    title: "Number Systems & Codes",
    description: "Learn Binary, Decimal, Octal, Hexadecimal conversions and Gray Code",
    icon: Binary,
    color: "cyan",
  },
  {
    path: "/logic-gates",
    title: "Logic Gates",
    description: "Explore AND, OR, NOT, NAND, NOR, XOR, XNOR gates with interactive simulations",
    icon: CircuitBoard,
    color: "magenta",
  },
  {
    path: "/boolean-algebra",
    title: "Boolean Algebra",
    description: "Master Boolean laws and expression simplification techniques",
    icon: Calculator,
    color: "yellow",
  },
  {
    path: "/combinational-circuits",
    title: "Combinational Circuits",
    description: "Build Adders, Subtractors, Multiplexers, and Demultiplexers",
    icon: Cpu,
    color: "purple",
  },
];

const colorClasses = {
  cyan: "text-neon-cyan border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10",
  magenta: "text-neon-magenta border-neon-magenta/30 hover:border-neon-magenta hover:bg-neon-magenta/10",
  yellow: "text-neon-yellow border-neon-yellow/30 hover:border-neon-yellow hover:bg-neon-yellow/10",
  purple: "text-neon-purple border-neon-purple/30 hover:border-neon-purple hover:bg-neon-purple/10",
};

export default function Home() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center py-16 space-y-6">
          <h1 className="font-display text-4xl md:text-6xl font-bold">
            <span className="neon-text-cyan">Digital</span>{" "}
            <span className="neon-text-magenta">Electronics</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the fundamentals of digital electronics through interactive simulations 
            and visual learning. Perfect for 11th-12th grade students.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link
              to="/number-systems"
              className="px-8 py-3 rounded-xl font-display bg-neon-cyan/20 text-neon-cyan neon-border hover:bg-neon-cyan/30 transition-all duration-300"
            >
              Start Learning
            </Link>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Link
                key={topic.path}
                to={topic.path}
                className={`group block p-6 rounded-2xl border-2 transition-all duration-300 ${colorClasses[topic.color as keyof typeof colorClasses]}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-card`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-inherit transition-colors">
                      {topic.title}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Features */}
        <div className="mt-20 text-center">
          <h2 className="font-display text-2xl neon-text-yellow mb-8">Learning Features</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="font-display text-lg text-foreground mb-2">Interactive Simulations</h3>
              <p className="text-sm text-muted-foreground">
                Click, toggle, and experiment with real-time circuit behavior
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl mb-3">📐</div>
              <h3 className="font-display text-lg text-foreground mb-2">Visual Formulas</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful KaTeX-rendered equations for easy understanding
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl mb-3">🌙</div>
              <h3 className="font-display text-lg text-foreground mb-2">Dark Neon Theme</h3>
              <p className="text-sm text-muted-foreground">
                Eye-friendly dark mode with vibrant neon accents
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
