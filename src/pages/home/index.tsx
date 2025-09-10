import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import { TrendingCard } from "./components/trending-card/trending-card";
import { RecentlyAddedCard } from "./components/recently-added-card/recently-added-card";
import { TopCoins } from "./components/top-coins/top-coins";
import { QuickTrade } from "./components/quick-trade/quick-trade";
import { HistoryCard } from "./components/history-card/history-card";

export function HomePage() {
  const { translate } = useDashboardTranslations();
  return (
    <div className="w-full flex-1">
      <span className="text-sm italic text-neutral-secondary">
        {translate("dashboard.span")}
      </span>

      <div className="w-full grid grid-cols-2 gap-x-4 mt-5">
        <TrendingCard />
        <RecentlyAddedCard />
      </div>

      <TopCoins />

      <div className="w-full grid grid-cols-2 gap-x-4 mt-10">
        <QuickTrade />
        <HistoryCard />
      </div>
    </div>
  );
}
