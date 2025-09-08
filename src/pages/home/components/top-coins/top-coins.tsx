import { CustomDropdown } from "@/components/shared/dropdown";
import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import { ChevronDown } from "lucide-react";
import { TopCoinsCards } from "./components/top-coins-cards/top-coins-cards";

export function TopCoins() {
  const { translate } = useDashboardTranslations();

  return (
    <div className="w-full mt-8">
      <div className="flex items-center justify-between">
        <h4 className="text-2xl">{translate("dashboard.top-coins")}</h4>

        <CustomDropdown
          trigger={
            <button className="flex items-center text-sm gap-x-2 py-[14px] px-4 rounded-full border border-white">
              {translate("dashboard.all-time")}
              <ChevronDown className="text-white w-4 h-4" />
            </button>
          }
        >
          <div></div>
        </CustomDropdown>
      </div>

      <TopCoinsCards />
    </div>
  );
}
