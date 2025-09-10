import { Button } from "@/components/shared/button/button";
import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import { useQuickTradeStore } from "../store/quick-trade.store";
import clsx from "clsx";

type OptionProps = {
  id: "buy" | "sell";
  label: string;
};

export function QuickTradeOptions() {
  const { option, setOption } = useQuickTradeStore();
  const { translate } = useDashboardTranslations();

  const options: OptionProps[] = [
    {
      id: "buy",
      label: translate("dashboard.quick-trade.options.buy"),
    },

    {
      id: "sell",
      label: translate("dashboard.quick-trade.options.sell"),
    },
  ];

  return (
    <div className="flex items-center h-12 p-1 rounded-full bg-bg-gray-shade">
      {options?.map((item) => (
        <Button
          key={item?.id}
          onClick={() => setOption(item?.id)}
          className={clsx(
            "transition-all !bg-transparent !rounded-full h-full px-10 text-white",
            option == item?.id && "!bg-white !text-bg-primary font-semibold"
          )}
        >
          {item?.label}
        </Button>
      ))}
    </div>
  );
}
