import { BalanceMetrics } from "./components/balance-metrics/balance-metrics";
import { CurrentBalance } from "./components/current-balance/current-balance";
import CryptoHoldingsTable from "./components/holdings/holdings-table";

export function PortfolioPage() {
  return (
    <div className="w-full flex flex-col gap-y-8">
      <CurrentBalance />
      <BalanceMetrics />
      <CryptoHoldingsTable />
    </div>
  );
}
