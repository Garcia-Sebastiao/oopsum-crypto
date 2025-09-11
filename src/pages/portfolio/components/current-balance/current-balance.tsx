import { SushiSwapIcon } from "@/assets/icons/brands/sushi-swap-icon";
import { ThetaFuelIcon } from "@/assets/icons/brands/theta-fuel-icon";
import { Button } from "@/components/shared/button/button";
import { usePortfolioTranslations } from "@/locales/hooks/use-portfolio.translations";
import { ChevronUpIcon, Edit2Icon, EyeIcon, PlusIcon } from "lucide-react";

export function CurrentBalance() {
  const { translate } = usePortfolioTranslations();

  return (
    <div className="w-full flex flex-col gap-y-8">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <span className="text-xs text-neutral-primary italic font-light">
              {translate("portfolio.current-balance.label")}
            </span>
            <EyeIcon className="w-3 h-3 text-neutral-primary" />
          </div>

          <span className="text-3xl font-bold text-white">$2,77,308.00</span>

          <div className="flex items-center gap-x-2">
            <span className="text-red-500 text-sm">-$1200.78 (-1.89%)</span>
            <span className="py-[2px] px-2 text-xs rounded-full bg-bg-gray-shade text-white font-medium">
              24H
            </span>
          </div>
        </div>

        <div className="flex items-center gap-x-2 ">
          <Button className="px-6 flex items-center gap-x-2 !text-white font-medium !rounded-full">
            <Edit2Icon className="w-4 h-4 text-white" />
            {translate("portfolio.current-balance.options.edit")}
          </Button>

          <Button className="flex text-nowrap !px-6 !font-semibold !bg-green-primary !text-bg-primary items-center gap-x-2 !rounded-full">
            <PlusIcon className="w-4 h-4 text-bg-primary" />
            {translate("portfolio.current-balance.options.add-transactions")}
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-x-12">
        <div className="flex flex-col">
          <span className="text-xs text-neutral-primary italic font-light">
            {translate("portfolio.current-balance.stats.all-time-profit")}
          </span>

          <div className="flex items-center mt-1 gap-x-2">
            <ChevronUpIcon className="w-4 h-4 text-green-500" />
            <span className="text-green-500">2.52% (+$324.82)</span>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <ThetaFuelIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-neutral-primary italic font-light">
              {translate("portfolio.current-balance.stats.best-performer")}
            </span>

            <div className="flex items-center mt-1 gap-x-2">
              <ChevronUpIcon className="w-4 h-4 text-green-500" />
              <span className="text-green-500">10.52% (+$627.82)</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <SushiSwapIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-neutral-primary italic font-light">
              {translate("portfolio.current-balance.stats.best-performer")}
            </span>

            <div className="flex items-center mt-1 gap-x-2">
              <ChevronUpIcon className="w-4 h-4 text-red-500" />
              <span className="text-red-500">1.23% (-$87.32)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
