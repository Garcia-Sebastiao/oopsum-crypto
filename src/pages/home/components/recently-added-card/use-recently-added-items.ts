import { PinoxaIcon } from "@/assets/icons/brands/pinoxa-icon";
import { StacksIcon } from "@/assets/icons/brands/stacks-icon";
import { SymbolIcon } from "@/assets/icons/brands/symbol-icon";

export function useRecentlyAddedItems() {
  const recentlyAddedItems = [
    {
      id: "pinoxa",
      icon: PinoxaIcon,
      span: "PINO",
      value: "0.000314",
    },
    {
      id: "stacks",
      icon: StacksIcon,
      span: "STK",
      value: "0.0008765",
    },
    {
      id: "symbol",
      icon: SymbolIcon,
      span: "SYB",
      value: "0.00000001239",
    },
  ];

  return { recentlyAddedItems };
}
