/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";

export function useGetHeaderTitle() {
  const { translate } = useDashboardTranslations();
  const pathname = window.location.pathname;

  const title = translate(
    `dashboard.header-titles.${pathname.replace("/", "")}` as any
  );

  return { title };
}
