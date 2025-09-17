import { Button } from "@/components/shared/button/button";
import { CustomDropdown } from "@/components/shared/dropdown";
import { useWatchlistTranslations } from "@/locales/hooks/use-watchlist-traslations";
import { ChevronDown, Edit2Icon, PlusIcon } from "lucide-react";
import WatchlistTable from "./components/watchlist-table/watchlist-table";

export function WatchlistPage() {
  const { translate } = useWatchlistTranslations();

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start gap-y-2">
          <span className="py-1 text-xs font-medium text-bg-primary px-2 rounded-full bg-green-primary">
            {translate("watchlist.my-coins.span")}
          </span>

          <CustomDropdown
            trigger={
              <div className="flex items-center gap-x-2">
                <span className="text-2xl font-medium">
                  {translate("watchlist.my-coins.label")}
                </span>

                <ChevronDown className="w-4 h-4 text-white" />
              </div>
            }
          >
            <div></div>
          </CustomDropdown>
        </div>

        <div className="flex items-center gap-x-2 ">
          <Button className="px-6 flex items-center gap-x-2 !text-white font-medium !rounded-full">
            <Edit2Icon className="w-4 h-4 text-white" />
            {translate("watchlist.my-coins.options.edit")}
          </Button>

          <Button className="flex text-nowrap !px-6 !font-semibold !bg-green-primary !text-bg-primary items-center gap-x-2 !rounded-full">
            <PlusIcon className="w-4 h-4 text-bg-primary" />
            {translate("watchlist.my-coins.options.new-watchlist")}
          </Button>
        </div>
      </div>

      <WatchlistTable />
    </div>
  );
}
