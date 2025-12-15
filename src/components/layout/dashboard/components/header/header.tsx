import { Avatar } from "@/components/shared/avatar";
import { Button } from "@/components/shared/button/button";
import { CustomDropdown } from "@/components/shared/dropdown";
import { Input } from "@/components/ui/input";
import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import { BellDot, ChevronDown, Search } from "lucide-react";
import { useUserOptions } from "./hooks/use-user-options";
import { formatDate } from "@/utils/date/format-date";
import { useGetHeaderTitle } from "./hooks/use-get-header-title";

export function Header() {
  const { translate } = useDashboardTranslations();
  const { userOptions } = useUserOptions();
  const { title } = useGetHeaderTitle();

  return (
    <header className="w-full z-40 sticky px-[30px] py-6 bg-bg-primary top-0 flex items-center justify-between">
      <div className="space-y-1">
        <h4 className="text-3xl text-white">{title}</h4>
        <span className="text-xs italic text-[#909093]">
          {translate("dashboard.updated-on", { date: formatDate(new Date()) })}
        </span>
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
          <button className="cursor-pointer hover:brightness-75 w-[3.125rem] h-[3.125rem] rounded-full bg-[#212325] flex items-center justify-center">
            <BellDot className="w-6 h-6 text-white" />
          </button>

          <CustomDropdown
            className="shadow-lg"
            trigger={
              <div className="flex items-center gap-x-2">
                <Avatar
                  src="https://github.com/shadcn.png"
                  className="w-[3.125rem] h-[3.125rem]"
                />

                <span className="text-sm text-white font-medium">
                  Garcia Pedro
                </span>
                <ChevronDown className="w-4 h-4 text-white" />
              </div>
            }
          >
            {userOptions?.map((option) => (
              <Button
                key={option?.id}
                onClick={option?.onclick}
                className="flex w-full text-white !bg-transparent hover:!bg-bg-secondary items-center justify-start gap-x-2"
              >
                {<option.icon className="w-4 h-4 text-white" />}
                <span>{option?.label}</span>
              </Button>
            ))}
          </CustomDropdown>
        </div>
      </div>
    </header>
  );
}
