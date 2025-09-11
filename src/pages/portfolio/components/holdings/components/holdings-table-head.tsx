import { usePortfolioTranslations } from "@/locales/hooks/use-portfolio.translations";

export function HoldingsTableHead() {
  const { translate } = usePortfolioTranslations();

  return (
    <div className="grid bg-[#1A1D1E]/40 grid-cols-7 gap-4 px-6 py-4 border-b border-t border-[#212325]">
      <div className="text-white text-sm font-medium">
        {translate("portfolio.your-holdings.table.thead.assets")}
      </div>
      <div className="text-white text-sm font-medium">
        {translate("portfolio.your-holdings.table.thead.price")}
      </div>
      <div className="text-white text-sm font-medium">
        {translate("portfolio.your-holdings.table.thead.24h")}
      </div>
      <div className="text-white text-sm font-medium">
        {translate("portfolio.your-holdings.table.thead.balance")}
      </div>
      <div className="text-white text-sm font-medium">
        {translate("portfolio.your-holdings.table.thead.avg-buy")}
      </div>
      <div className="text-white text-sm font-medium">
        {translate("portfolio.your-holdings.table.thead.profit-loss")}
      </div>
      <div className="text-white text-sm font-medium">
        {translate("portfolio.your-holdings.table.thead.actions")}
      </div>
    </div>
  );
}
