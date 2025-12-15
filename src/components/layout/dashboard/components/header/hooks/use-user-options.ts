import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import { LogOut, Settings, UserIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function useUserOptions() {
  const navigate = useNavigate();
  const { translate } = useDashboardTranslations();
  const userOptions = [
    {
      id: "profile",
      icon: UserIcon,
      label: translate("dashboard.user-options.profile"),
      onclick: () => {
        navigate("/profile");
      },
    },
    {
      id: "settings",
      icon: Settings,
      label: translate("dashboard.user-options.settings"),
      onclick: () => {
        navigate("/settings");
      },
    },
    {
      id: "logout",
      icon: LogOut,
      label: translate("dashboard.user-options.logout"),
      href: "/logout",
      onclick: () => {
        localStorage.clear();
        navigate("/auth/sign-in");
      },
    },
  ];

  return { userOptions };
}
