import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { ProgressBar } from "@/components/layout/ProgressBar";
import Home from "./pages/Home";
import NumberSystems from "./pages/NumberSystems";
import LogicGates from "./pages/LogicGates";
import BooleanAlgebra from "./pages/BooleanAlgebra";
import CombinationalCircuits from "./pages/CombinationalCircuits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <ProgressBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/number-systems" element={<NumberSystems />} />
          <Route path="/logic-gates" element={<LogicGates />} />
          <Route path="/boolean-algebra" element={<BooleanAlgebra />} />
          <Route path="/combinational-circuits" element={<CombinationalCircuits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
