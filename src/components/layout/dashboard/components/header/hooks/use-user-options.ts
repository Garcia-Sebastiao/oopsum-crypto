import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import { LogOut, Settings, UserIcon } from "lucide-react";

export function useUserOptions() {
  const { translate } = useDashboardTranslations();
  const userOptions = [
    {
      id: "profile",
      icon: UserIcon,
      label: translate("dashboard.user-options.profile"),
      href: "/profile",
    },
    {
      id: "settings",
      icon: Settings,
      label: translate("dashboard.user-options.settings"),
      href: "/settings",
    },
    {
      id: "logout",
      icon: LogOut,
      label: translate("dashboard.user-options.logout"),
      href: "/logout",
    },
  ];

  return { userOptions };
}
