import { DashboardCard } from "@/components/shared/dashboard-card/dashboard-card";
import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import { useHistoryItems } from "./hooks/use-history-items";
import { HistoryItem } from "./components/history-item";

export function HistoryCard() {
  const { items } = useHistoryItems();
  const { translate } = useDashboardTranslations();

  return (
    <DashboardCard
      rightElement={
        <button className="text-[#77ED91] text-sm font-semibold">
          {translate("dashboard.see-all")}
        </button>
      }
      title={translate("dashboard.history.title")}
    >
      <div className="w-full flex flex-col gap-y-6">
        {items?.map(({ icon: Icon, ...itemProps }) => (
          <HistoryItem icon={<Icon />} {...itemProps} />
        ))}
      </div>
    </DashboardCard>
  );
}
