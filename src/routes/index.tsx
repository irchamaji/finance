import { createFileRoute } from "@tanstack/react-router";
import { FinanceCalculator } from "@/components/finance-calculator";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return <FinanceCalculator />;
}