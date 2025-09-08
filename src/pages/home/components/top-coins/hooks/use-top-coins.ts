import { CompoundIcon } from "@/assets/icons/brands/compound-icon";
import { ShibainuIcon } from "@/assets/icons/brands/shibainu-icon";
import { ThetaFuelIcon } from "@/assets/icons/brands/theta-fuel-icon";

export function useTopCoins() {
  const topCoins = [
    {
      icon: CompoundIcon,
      id: "compound",
      value: "27,308.00",
      percentage: 8250,
    },
    {
      icon: ShibainuIcon,
      id: "shibainu",
      value: "0.0008827",
      percentage: 660910,
    },
    {
      icon: ThetaFuelIcon,
      id: "thetafuel",
      value: "0.04276",
      percentage: -151,
    },
  ];

  return { topCoins };
}
