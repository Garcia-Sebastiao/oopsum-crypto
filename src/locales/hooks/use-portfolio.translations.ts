import { useTranslation } from "react-i18next";
import dashboard from "../en/portfolio.json";
import type { TranslationParams } from "../utils";

type DashboardTranslations = TranslationParams<typeof dashboard>;

type SignInKeys = DashboardTranslations["key"];

type ParamsFor<K extends SignInKeys> = Extract<
  DashboardTranslations,
  { key: K }
>["params"];

export function usePortfolioTranslations() {
  const { t, i18n } = useTranslation("portfolio");

  return {
    translate: <K extends SignInKeys>(key: K, params?: ParamsFor<K>) =>
      t(key, params),
    i18n,
  };
}
