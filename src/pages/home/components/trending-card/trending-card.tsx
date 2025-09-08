import { DashboardCard } from "@/components/shared/dashboard-card/dashboard-card";
import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import { useTrendingItems } from "./use-trending-items";
import { DashboardCardItem } from "@/components/shared/dashboard-card/dashboard-card-item";

export function TrendingCard() {
  const { translate } = useDashboardTranslations();
  const { trendingItems } = useTrendingItems();

  return (
    <DashboardCard
      rightElement={
        <button className="text-[#77ED91] text-sm font-semibold">
          {translate("dashboard.see-all")}
        </button>
      }
      icon={<h4 className="text-3xl">🔥</h4>}
      title={translate("dashboard.trending.title")}
    >
      <div className="w-full gap-y-2 flex flex-col">
        {trendingItems?.map((item, index) => (
          <DashboardCardItem
            percentage={item?.percentage}
            index={index + 1}
            icon={<item.icon />}
            label={item?.id}
            span={item?.span}
          />
        ))}
      </div>
    </DashboardCard>
  );
}
