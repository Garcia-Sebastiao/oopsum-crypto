interface WatchlistItem {
  starts: number;
  id: string;
  name: string;
  symbol: string;
  icon: string;
  iconColor: string;
  price: number;
  change24h: number;
  balance: number;
  avgBuy: number;
  profitLoss: number;
}

const rawWatchlist: Omit<WatchlistItem, "starts">[] = [
  {
    id: "1",
    name: "Tether",
    symbol: "USDT",
    icon: "⬢",
    iconColor: "text-emerald-500",
    price: 1.0,
    change24h: 0.22,
    balance: 3560000,
    avgBuy: 0.98,
    profitLoss: 234,
  },
  {
    id: "2",
    name: "Bitcoin",
    symbol: "BTC",
    icon: "₿",
    iconColor: "text-orange-500",
    price: 26735.59,
    change24h: -5.12,
    balance: 233,
    avgBuy: 22456,
    profitLoss: -234.8,
  },
  {
    id: "3",
    name: "SushiSwap",
    symbol: "SUSHI",
    icon: "🍣",
    iconColor: "text-purple-500",
    price: 0.8802,
    change24h: 0.6,
    balance: 10456.88,
    avgBuy: 0.8189,
    profitLoss: 34.7,
  },
  {
    id: "4",
    name: "SushiSwap",
    symbol: "SUSHI",
    icon: "🍣",
    iconColor: "text-purple-500",
    price: 0.8802,
    change24h: 0.6,
    balance: 10456.88,
    avgBuy: 0.8189,
    profitLoss: 34.7,
  },
  {
    id: "5",
    name: "SushiSwap",
    symbol: "SUSHI",
    icon: "🍣",
    iconColor: "text-purple-500",
    price: 0.8802,
    change24h: 0.6,
    balance: 10456.88,
    avgBuy: 0.8189,
    profitLoss: 34.7,
  },
  {
    id: "6",
    name: "SushiSwap",
    symbol: "SUSHI",
    icon: "🍣",
    iconColor: "text-purple-500",
    price: 0.8802,
    change24h: 0.6,
    balance: 10456.88,
    avgBuy: 0.8189,
    profitLoss: 34.7,
  },
  {
    id: "7",
    name: "SushiSwap",
    symbol: "SUSHI",
    icon: "🍣",
    iconColor: "text-purple-500",
    price: 0.8802,
    change24h: 0.6,
    balance: 10456.88,
    avgBuy: 0.8189,
    profitLoss: 34.7,
  },
];

export const watchlist: WatchlistItem[] = rawWatchlist.map(item => ({
  ...item,
  starts: Math.floor(Math.random() * 5) + 1,
}));
