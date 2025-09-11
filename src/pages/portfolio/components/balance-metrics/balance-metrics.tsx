import { Button } from "@/components/shared/button/button";
import { usePortfolioTranslations } from "@/locales/hooks/use-portfolio.translations";
import clsx from "clsx";
import { useState } from "react";
import CryptoAllocationChart from "./metrics-graphic";

export function BalanceMetrics() {
  const { translate } = usePortfolioTranslations();

  const options = [
    {
      id: "chart",
      label: translate("portfolio.current-balance.filter.chart"),
    },
    {
      id: "allocation",
      label: translate("portfolio.current-balance.filter.allocation"),
    },
    {
      id: "statistics",
      label: translate("portfolio.current-balance.filter.statistics"),
    },
  ];

  const [currentOption, setCurrentOption] = useState<string>(options[0]?.id);

  return (
    <div className="w-full flex flex-col gap-y-8 items-start">
      <div className="flex items-center gap-x-2">
        {options?.map((item) => (
          <Button
            onClick={() => setCurrentOption(item?.id)}
            key={item?.id}
            className={clsx(
              "!h-8 border !py-2 border-white text-white !bg-transparent",
              currentOption == item?.id && "!bg-white !font-bold !text-black"
            )}
          >
            {item?.label}
          </Button>
        ))}
      </div>

      <CryptoAllocationChart />
    </div>
  );
}
