import { DashboardCard } from "@/components/shared/dashboard-card/dashboard-card";
import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import { QuickTradeOptions } from "./components/quick-trade-options";
import { Button } from "@/components/shared/button/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { InfoIcon } from "lucide-react";
import { TradeSlider } from "./components/trade-slider";

export function QuickTrade() {
  const { translate } = useDashboardTranslations();
  return (
    <DashboardCard
      headerClassName="!px-4"
      className="!px-0 overflow-hidden"
      rightElement={<QuickTradeOptions />}
      title={translate("dashboard.quick-trade.title")}
    >
      <div className="w-full flex flex-col gap-y-7 px-4">
        <div className="flex items-center  gap-x-2">
          <Button className="h-8 w-auto flex-none !text-sm font-semibold bg-white text-bg-primary !rounded-full px-4 py-2">
            {translate("dashboard.quick-trade.tabs.limit")}
          </Button>

          <Button className="h-8 w-auto flex-none !text-sm border border-white bg-transparent text-white !rounded-full px-4 py-2">
            {translate("dashboard.quick-trade.tabs.market")}
          </Button>

          <Button className="h-8 w-auto flex-none !text-sm border border-white bg-transparent text-white !rounded-full px-4 py-2">
            {translate("dashboard.quick-trade.tabs.stop-limit")}
          </Button>
        </div>

        <div className="w-full flex flex-col gap-y-[10px]">
          <div className="flex items-center px-[14px] py-4 rounded-full w-full bg-bg-gray-shade justify-between">
            <span className="text-sm font-medium text-white">
              {translate("dashboard.quick-trade.limit-price")}
            </span>

            <span className="text-sm font-medium text-neutral-secondary">
              $23,126.71
            </span>
          </div>

          <div className="flex items-center px-[14px] py-4 rounded-full w-full bg-bg-gray-shade justify-between">
            <span className="text-sm font-medium text-white">
              {translate("dashboard.quick-trade.limit-price")}
            </span>

            <span className="text-sm font-medium text-white">234 BTC</span>
          </div>
        </div>

        <TradeSlider />
      </div>

      <Separator className="bg-bg-gray-shade mt-5 h-[1px] w-full" />

      <div className="w-full flex flex-col gap-y-6 mt-5 px-4">
        <div className="flex items-center px-[14px] py-4 rounded-full w-full bg-bg-gray-shade justify-between">
          <div className="flex items-center gap-x-2">
            <span className="text-sm font-medium text-white">
              {translate("dashboard.quick-trade.total")}
            </span>

            <InfoIcon className="w-3 h-3 text-neutral-secondary" />
          </div>

          <span className="text-sm font-medium text-white">$12,34,245 </span>
        </div>

        <Button className="bg-green-primary font-semibold text-bg-primary px-32 self-center !rounded-full">
          {translate("dashboard.quick-trade.buy-now")}
        </Button>
      </div>
    </DashboardCard>
  );
}
