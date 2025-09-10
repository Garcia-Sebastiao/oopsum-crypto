import { NotFoundIllustration } from "@/assets/illustrations/not-found-illustration";
import { Button } from "@/components/shared/button/button";
import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
  const navigate = useNavigate();
  const { translate } = useDashboardTranslations();

  return (
    <div className="w-full flex h-screen items-center justify-center flex-col">
      <div className="flex flex-col -mt-10 items-center">
        <div className="w-[28rem] flex">
          <NotFoundIllustration />
        </div>

        <div className="flex flex-col -mt-6 items-center gap-y-6">
          <h4 className="font-semibold text-white text-[3rem]">
            {translate("dashboard.not-found.label")}
          </h4>

          <Button
            onClick={() => navigate("/dashboard")}
            className="bg-green-primary text-bg-primary font-semibold px-20"
          >
            {translate("dashboard.not-found.button")}
          </Button>
        </div>
      </div>
    </div>
  );
}
