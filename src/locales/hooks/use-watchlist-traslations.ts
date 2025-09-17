import { useTranslation } from "react-i18next";
import watchlist from "../en/watchlist.json";
import type { TranslationParams } from "../utils";

type WatchlistTranslations = TranslationParams<typeof watchlist>;

type TranslationKeys = WatchlistTranslations["key"];

type ParamsFor<K extends TranslationKeys> = Extract<
  WatchlistTranslations,
  { key: K }
>["params"];



export function useWatchlistTranslations() {
  const { t, i18n } = useTranslation("watchlist");

  return {
    translate: <K extends TranslationKeys>(key: K, params?: ParamsFor<K>) =>
      t(key, params),
    i18n,
  };
}
