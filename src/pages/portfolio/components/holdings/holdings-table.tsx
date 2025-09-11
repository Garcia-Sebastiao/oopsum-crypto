"use client";

import { usePortfolioTranslations } from "@/locales/hooks/use-portfolio.translations";
import { HoldingsTableHead } from "./components/holdings-table-head";
import { HoldingsTableBody } from "./components/holdings-table-body";

export default function CryptoHoldingsTable() {
  const { translate } = usePortfolioTranslations();

  return (
    <div className="w-full">
      <h2 className="text-white text-2xl font-medium mb-6">
        {translate("portfolio.your-holdings.title")}
      </h2>

      <div className="overflow-hidden">
        <HoldingsTableHead />
        <HoldingsTableBody />
      </div>
    </div>
  );
}
