import { OpenBookIcon } from "@/assets/icons/open-book-icon";
import { PortfolioIcon } from "@/assets/icons/portfolio-icon";
import { TradingIcon } from "@/assets/icons/trading-icon";
import { WalletIcon } from "@/assets/icons/wallet-icon";
import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import { Eye, LayoutDashboard } from "lucide-react";

export function useSidebarItems() {
  const pathname = window.location.pathname;
  const { translate } = useDashboardTranslations();
  const sidebarItems = [
    {
      isActive: pathname.includes("/dashboard"),
      icon: LayoutDashboard,
      href: "/dashboard",
      label: translate("dashboard.sidebar.dashboard"),
    },
    {
      isActive: pathname.includes("/dashboard/portfolio"),
      icon: PortfolioIcon,
      href: "/portfolio",
      label: translate("dashboard.sidebar.portfolio"),
    },
    {
      isActive: pathname.includes("/dashboard/trading"),
      icon: TradingIcon,
      href: "/trading",
      label: translate("dashboard.sidebar.trading"),
    },
    {
      isActive: pathname.includes("/dashboard/watchlist"),
      icon: Eye,
      href: "/watchlist",
      label: translate("dashboard.sidebar.watchlist"),
    },
    {
      isActive: pathname.includes("/dashboard/academy"),
      icon: OpenBookIcon,
      href: "/academy",
      label: translate("dashboard.sidebar.academy"),
    },
    {
      isActive: pathname.includes("/dashboard/wallet"),
      icon: WalletIcon,
      href: "/wallet",
      label: translate("dashboard.sidebar.wallet"),
    },
  ];

  return { sidebarItems };
}
