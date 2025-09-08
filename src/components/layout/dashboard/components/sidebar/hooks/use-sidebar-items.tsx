import { OpenBookIcon } from "@/assets/icons/open-book-icon";
import { PortfolioIcon } from "@/assets/icons/portfolio-icon";
import { TradingIcon } from "@/assets/icons/trading-icon";
import { WalletIcon } from "@/assets/icons/wallet-icon";
import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import { Eye, LayoutDashboard } from "lucide-react";

export function useSidebarItems() {
  const { translate } = useDashboardTranslations();
  const sidebarItems = [
    {
      icon: LayoutDashboard,
      href: "/dashboard",
      label: translate("dashboard.sidebar.dashboard"),
    },
    {
      icon: PortfolioIcon,
      href: "/dashboard/portfolio",
      label: translate("dashboard.sidebar.portfolio"),
    },
    {
      icon: TradingIcon,
      href: "/dashboard/trading",
      label: translate("dashboard.sidebar.trading"),
    },
    {
      icon: Eye,
      href: "/dashboard/watchlist",
      label: translate("dashboard.sidebar.watchlist"),
    },
    {
      icon: OpenBookIcon,
      href: "/dashboard/academy",
      label: translate("dashboard.sidebar.academy"),
    },
    {
      icon: WalletIcon,
      href: "/dashboard/wallet",
      label: translate("dashboard.sidebar.wallet"),
    },
  ];

  return { sidebarItems };
}
