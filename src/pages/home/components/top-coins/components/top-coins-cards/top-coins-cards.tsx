import { useState } from "react";
import { useTopCoins } from "../../hooks/use-top-coins";
import { CryptoCard } from "../crypto-card/crypto-card";

export function TopCoinsCards() {
  const { topCoins } = useTopCoins();
  const [current, setCurrentState] = useState<string | undefined>(
    topCoins[0]?.id
  );

  return (
    <div className="w-full flex gap-x-6 mt-5">
      {topCoins?.map((item) => (
        <CryptoCard
          onClick={() => setCurrentState(item?.id)}
          isActive={current == item?.id}
          icon={<item.icon />}
          percentage={item?.percentage}
          value={item?.value}
          name={item?.id}
        />
      ))}
    </div>
  );
}
