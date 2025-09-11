import { MoreHorizontal, Plus, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { holdings } from "../utils";
import { formatBalance, formatCurrency } from "@/utils/string/format-currency";

export function HoldingsTableBody() {
  return (
    <div>
      {holdings.map((holding) => (
        <div
          key={holding.id}
          className="grid grid-cols-7 gap-4 px-6 py-4 border-b border-[#212325] hover:bg-gray-800/30 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${holding.iconColor}`}
            >
              {holding.icon}
            </div>
            <div>
              <div className="text-white font-medium">{holding.name}</div>
              <div className="text-gray-400 text-sm">{holding.symbol}</div>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-white">{formatCurrency(holding.price)}</span>
          </div>

          <div className="flex items-center gap-1">
            {holding.change24h >= 0 ? (
              <>
                <TrendingUp className="w-3 h-3 text-emerald-500" />
                <span className="text-emerald-500 text-sm">
                  {holding.change24h.toFixed(2)}%
                </span>
              </>
            ) : (
              <>
                <TrendingDown className="w-3 h-3 text-red-500" />
                <span className="text-red-500 text-sm">
                  {Math.abs(holding.change24h).toFixed(2)}%
                </span>
              </>
            )}
          </div>

          <div className="flex items-center">
            <span className="text-white">{formatBalance(holding.balance)}</span>
          </div>

          <div className="flex items-center">
            <span className="text-white">{formatCurrency(holding.avgBuy)}</span>
          </div>

          <div className="flex items-center">
            <span
              className={
                holding.profitLoss >= 0 ? "text-emerald-500" : "text-red-500"
              }
            >
              {holding.profitLoss >= 0 ? "+" : ""}
              {formatCurrency(Math.abs(holding.profitLoss))}
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
