import { MoreHorizontal, Plus, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatBalance, formatCurrency } from "@/utils/string/format-currency";
import { watchlist } from "./utils";

export function WatchlistTBody() {
  return (
    <div>
      {watchlist.map((watchlist) => (
        <div
          key={watchlist.id}
          className="grid grid-cols-8  gap-4 px-6 py-4 border-b border-[#212325] hover:bg-gray-800/30 transition-colors"
        >
          <div className="flex items-center gap-3">
    

            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${watchlist.iconColor}`}
              >
                {watchlist.icon}
              </div>
              <div>
                <div className="text-white font-medium">{watchlist.name}</div>
                <div className="text-gray-400 text-sm">{watchlist.symbol}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-white">
              {formatCurrency(watchlist.price)}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {watchlist.change24h >= 0 ? (
              <>
                <TrendingUp className="w-3 h-3 text-emerald-500" />
                <span className="text-emerald-500 text-sm">
                  {watchlist.change24h.toFixed(2)}%
                </span>
              </>
            ) : (
              <>
                <TrendingDown className="w-3 h-3 text-red-500" />
                <span className="text-red-500 text-sm">
                  {Math.abs(watchlist.change24h).toFixed(2)}%
                </span>
              </>
            )}
          </div>

          <div className="flex items-center">
            <span className="text-white">
              {formatBalance(watchlist.balance)}
            </span>
          </div>

          <div className="flex items-center">
            <span className="text-white">
              {formatCurrency(watchlist.avgBuy)}
            </span>
          </div>

          <div className="flex items-center">
            <span
              className={
                watchlist.profitLoss >= 0 ? "text-emerald-500" : "text-red-500"
              }
            >
              {watchlist.profitLoss >= 0 ? "+" : ""}
              {formatCurrency(Math.abs(watchlist.profitLoss))}
            </span>
          </div>

          <div className="flex items-center">
            <span
              className={
                watchlist.profitLoss >= 0 ? "text-emerald-500" : "text-red-500"
              }
            >
              {watchlist.profitLoss >= 0 ? "+" : ""}
              {formatCurrency(Math.abs(watchlist.profitLoss))}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 border border-bg-gray-shade rounded-full text-white hover:bg-gray-700"
            >
              <Plus className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 border border-bg-gray-shade rounded-full text-gray-400 hover:bg-gray-700"
            >
              <MoreHorizontal className="w-4 rotate-90 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
