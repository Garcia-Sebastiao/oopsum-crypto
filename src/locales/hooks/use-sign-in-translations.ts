import { useTranslation } from "react-i18next";
import signInJson from "../en/sign-in.json";
import type { TranslationParams } from "../utils";

type SignInTranslations = TranslationParams<typeof signInJson>;

type SignInKeys = SignInTranslations["key"];

type ParamsFor<K extends SignInKeys> = Extract<
  SignInTranslations,
  { key: K }
>["params"];

export function useSignInTranslation() {
  const { t, i18n } = useTranslation("sign-in");

  return {
    translate: <K extends SignInKeys>(key: K, params?: ParamsFor<K>) => t(key, params),
    i18n,
  };
}
