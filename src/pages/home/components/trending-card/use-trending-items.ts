import { TetherIcon } from "@/assets/icons/brands/tether-icon";
import { UniswapIcon } from "@/assets/icons/brands/uniswap-icon";
import { WazirxIcon } from "@/assets/icons/brands/wazirx-icon";

export function useTrendingItems() {
  const trendingItems = [
    {
      id: "tether",
      icon: TetherIcon,
      span: "USDT",
      percentage: 0.4,
    },
    {
      id: "uniswap",
      icon: UniswapIcon,
      span: "UNI",
      percentage: 2.3,
    },
    {
      id: "wazirx",
      icon: WazirxIcon,
      span: "WRX",
      percentage: -0.06,
    },
  ];

  return { trendingItems };
}
