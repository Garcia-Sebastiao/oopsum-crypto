import { DisabledCard, EnabledCard } from "@/assets/common";
import { useDashboardTranslations } from "@/locales/hooks/use-dashboard-translations";
import clsx from "clsx";
import { ExpandIcon } from "lucide-react";
import { motion } from "framer-motion";

type CryptoCardProps = {
  isActive?: boolean;
  name: string;
  value?: string;
  percentage: number;
  icon: React.ReactNode;
  onClick: () => void;
};

export function CryptoCard({
  isActive,
  name,
  value,
  percentage,
  icon,
  onClick,
}: CryptoCardProps) {
  const { translate } = useDashboardTranslations();
  return (
    <div
      onClick={onClick}
      className="flex-1 relative cursor-pointer h-[18.625rem] rounded-4xl overflow-hidden"
    >
      <motion.img
        key={isActive ? "enabled" : "disabled"}
        src={isActive ? EnabledCard : DisabledCard}
        className="absolute top-0 left-0 object-cover w-full h-full"
        alt="crypto card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      />

      <div className="w-full relative flex flex-col justify-between z-10 h-full p-4">
        <div className="space-y-4">
          <div className="w-full flex items-center justify-between">
            {icon}

            <button>
              <ExpandIcon
                className={clsx(
                  isActive ? "text-bg-primary" : "text-neutral-secondary",
                  "w-4 h-4"
                )}
              />
            </button>
          </div>

          <div className="flex flex-col gap-y-2">
            <span
              className={clsx(
                "capitalize",
                !isActive
                  ? "text-neutral-secondary"
                  : "text-bg-primary font-medium"
              )}
            >
              {name}
            </span>

            <span
              className={clsx(
                "text-3xl font-semibold",
                !isActive ? "text-white" : " text-bg-primary !font-bold"
              )}
            >
              ${value}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <span
            className={clsx(
              !isActive
                ? percentage > 0
                  ? "text-green-500"
                  : "text-red-500"
                : "text-bg-primary",
              "text-xl"
            )}
          >
            {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
          </span>

          <span
            className={clsx(
              isActive ? "text-bg-primary" : "text-neutral-secondary",
              "text-sm "
            )}
          >
            {translate("dashboard.all-time")}
          </span>
        </div>
      </div>
    </div>
  );
}
