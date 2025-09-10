import { AkashiIcon } from "@/assets/icons/brands/akashi-icon";
import { CreamIcon } from "@/assets/icons/brands/cream-icon";
import { QuorumIcon } from "@/assets/icons/brands/quorum-icon";
import { SushiSwapIcon } from "@/assets/icons/brands/sushi-swap-icon";

export function useHistoryItems() {
  const items = [
    {
      icon: SushiSwapIcon,
      id: "sushiswap",
      label: "SushiSwap",
      date: "2024/04/27",
      value: 345.9,
      description:
        "Bitcoins Evolution™. 234000 Satisfied Customers From 107 Countries.",
    },
    {
      icon: AkashiIcon,
      id: "akash",
      value: -29.8,
      date: "2024/04/27",
      label: "Akash",
      description:
        "Akash is a decentralized, blockchain with smart contract functionality",
    },
    {
      icon: QuorumIcon,
      id: "Quorum",
      date: new Date(),
      value: 2567.8,
      label: "Quorum",
      description:
        "Quorum is a peer-to-peer cryptocurrency and open-source software",
    },
    {
      icon: CreamIcon,
      id: "Cream",
      value: 7.8,
      date: new Date(),
      label: "Cream",
      description:
        "Cream Evolution™. 234000 Satisfied Customers From 107 Countries.",
    },
  ];

  return { items };
}
