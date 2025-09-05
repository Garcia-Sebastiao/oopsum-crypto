import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignInTranslation } from "@/locales/hooks/use-sign-in-translations";
import { useNavigate } from "react-router-dom";

export function SignInForm() {
  const navigate = useNavigate();
  const { translate } = useSignInTranslation();
  return (
    <form className="space-y-6 flex flex-col">
      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-sm font-medium text-neutral-primary"
        >
          {translate("sign-in.form.email")}
        </Label>

        <Input
          id="email"
          type="email"
          placeholder={translate("sign-in.form.email-placeholder")}
          className="h-12 bg-bg-secondary rounded-xl border-none placeholder:text-neutral-shade-300 text-neutral-secondary outline-1"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label
            htmlFor="password"
            className="text-sm font-medium text-neutral-primary"
          >
            {translate("sign-in.form.password")}
          </Label>
        </div>

        <Input
          id="password"
          type="password"
          placeholder={translate("sign-in.form.password-placeholder")}
          className="h-12 placeholder:text-neutral-shade-300 rounded-xl bg-bg-secondary border-none text-neutral-secondary outline-1"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" className="checked:bg-green-primary" />

        <Label htmlFor="terms" className="text-sm text-neutral-secondary">
          {translate("sign-in.form.terms")}
        </Label>
      </div>

      <Button
        onClick={() => navigate("/")}
        className="w-full cursor-pointer h-12  bg-[#4ace66] hover:bg-[#4ace66] hover:brightness-75 text-white font-medium rounded-xl"
      >
        {translate("sign-in.form.sign-in-button")}
      </Button>

      <span
        className="text-sm text-white pt-2"
        dangerouslySetInnerHTML={{
          __html: translate("sign-in.form.no-account"),
        }}
      />
    </form>
  );
}
