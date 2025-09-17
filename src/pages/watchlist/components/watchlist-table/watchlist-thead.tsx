import { useWatchlistTranslations } from "@/locales/hooks/use-watchlist-traslations";

export function WatchlistTHead() {
  const { translate } = useWatchlistTranslations();

  return (
    <div className="grid bg-[#1A1D1E]/40 grid-cols-8 gap-4 px-6 py-4 border-b border-t border-[#212325]">
      <div className="flex items-center gap-3">
        <div className="text-white text-sm font-medium">
        #
      </div>
      
      <div className="text-white text-sm font-medium">
        {translate("watchlist.my-coins.table.thead.name")}
      </div>
      </div>
      <div className="text-white text-sm font-medium">
        {translate("watchlist.my-coins.table.thead.price")}
      </div>
      <div className="text-white text-sm font-medium">
        {translate("watchlist.my-coins.table.thead.24h")}
      </div>
      <div className="text-white text-sm font-medium">
        {translate("watchlist.my-coins.table.thead.7d")}
      </div>
      <div className="text-white text-sm font-medium">
        {translate("watchlist.my-coins.table.thead.market-cap")}
      </div>
      <div className="text-white text-sm font-medium">
        {translate("watchlist.my-coins.table.thead.volume")}
      </div>
      <div className="text-white text-sm font-medium">
        {translate("watchlist.my-coins.table.thead.last-seven-days")}
      </div>
      <div className="text-white text-sm font-medium">
        {translate("watchlist.my-coins.table.thead.actions")}
      </div>
    </div>
  );
}
