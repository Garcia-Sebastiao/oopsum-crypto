import { DashboardCard } from "@/components/shared/dashboard-card/dashboard-card";
import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import { DashboardCardItem } from "@/components/shared/dashboard-card/dashboard-card-item";
import { useRecentlyAddedItems } from "./use-recently-added-items";

export function RecentlyAddedCard() {
  const { translate } = useDashboardTranslations();
  const { recentlyAddedItems } = useRecentlyAddedItems();

  return (
    <DashboardCard
      rightElement={
        <button className="text-[#77ED91] text-sm font-semibold">
          {translate("dashboard.see-all")}
        </button>
      }
      icon={<h4 className="text-3xl">⌛</h4>}
      title={translate("dashboard.recently-added")}
    >
      <div className="w-full gap-y-2 flex flex-col">
        {recentlyAddedItems?.map((item, index) => (
          <DashboardCardItem
            value={item?.value}
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
