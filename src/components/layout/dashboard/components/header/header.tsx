import { Avatar } from "@/components/shared/avatar";
import { Input } from "@/components/ui/input";
import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import { BellDot, Search } from "lucide-react";

export function Header() {
  const { translate } = useDashboardTranslations();

  return (
    <header className="w-full flex items-center justify-between h-[60px]">
      <div className="space-y-2">
        <h4 className="text-3xl text-white">{translate("dashboard.title")}</h4>
      </div>

      <div className="flex items-center gap-x-5">
        <div className="relative">
          <div className="w-11 h-11 absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-[#212325] flex items-center justify-center">
            <Search className="w-6 h-6 text-white" />
          </div>

          <Input
            placeholder={translate("dashboard.search")}
            className="bg-[#151718]  rounded-full border-none h-[50px] pl-14 text-xs text-neutral-shade-300"
          />
        </div>

        <div className="space-x-[10px] flex">
          <div className="w-[3.125rem] h-[3.125rem] rounded-full bg-[#212325] flex items-center justify-center">
            <BellDot className="w-6 h-6 text-white" />
          </div>

          <Avatar
            src="https://github.com/shadcn.png"
            className="w-[3.125rem] h-[3.125rem]"
          />
        </div>
      </div>
    </header>
  );
}
