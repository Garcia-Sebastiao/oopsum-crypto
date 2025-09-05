import { Helmet } from "react-helmet";
import { useSignInTranslation } from "../../../locales/hooks/use-sign-in-translations";
import { Logo } from "../../../assets/common/logo";
import { SimpleLogo } from "../../../assets/common/simple-logo";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../../../components/shared/button/button";
import { Separator } from "@/components/ui/separator";
import { SignInForm } from "./components/sign-in-form";

export function SignInPage() {
  const { translate } = useSignInTranslation();

  return (
    <>
      <Helmet>
        <title>Oopsum | Sign in</title>
      </Helmet>

      <div className="w-full h-screen grid grid-cols-2">
        <div className="col-span-1 gap-y-24 flex flex-col p-6 items-start">
          <div>
            <Logo />
          </div>

          <div className="p-10 max-w-[620px] w-full space-y-6 mx-auto">
            <div className="space-y-2">
              <h4 className="text-2xl font-semibold text-white">
                {translate("sign-in.title")}
              </h4>

              <span className="text-sm">{translate("sign-in.label")}</span>
            </div>

            <div className="flex items-center mt-2 gap-x-4">
              <Button leftIcon={<FcGoogle />}>
                {translate("sign-in.google")}
              </Button>

              <Button leftIcon={<FaGithub />}>
                {translate("sign-in.github")}
              </Button>
            </div>

            <div className="flex space-x-3 items-center">
              <Separator className="flex-1 bg-[#212325]" />
              <span className="text-sm capitalize text-[#A1A1A1]">
                {translate("sign-in.or")}
              </span>
              <Separator className="flex-1 bg-[#212325]" />
            </div>

            <SignInForm />
          </div>
        </div>

        <div className="col-span-1 h-full p-6">
          <div className="w-full h-full flex items-center justify-center rounded-2xl bg-bg-secondary">
            <div className="flex space-x-10">
              <div className="scale-[2.5]">
                <SimpleLogo />
              </div>
              <h4 className="text-xl font-semibold">
                {translate("sign-in.sidebar.span")}{" "}
                <span className="font-bold text-green-primary">
                  {translate("sign-in.sidebar.highlight")}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
