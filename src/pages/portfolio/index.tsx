import { BalanceMetrics } from "./components/balance-metrics/balance-metrics";
import { CurrentBalance } from "./components/current-balance/current-balance";
import CryptoHoldingsTable from "./components/holdings/holdings-table";
import { motion } from "framer-motion";

export function PortfolioPage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.05,
        duration: 1.3,
      }}
      className="w-full flex flex-col gap-y-8"
    >
      <CurrentBalance />
      <BalanceMetrics />
      <CryptoHoldingsTable />
    </motion.div>
  );
}
