import clsx from "clsx";

type DashboardCardItemProps = {
  icon?: React.ReactNode;
  label?: string;
  span?: string;
  index: number;
  percentage?: number;
  value?: string;
};

export function DashboardCardItem({
  icon,
  label,
  span,
  index,
  percentage,
  value,
}: DashboardCardItemProps) {
  return (
    <div className="w-full rounded-full bg-bg-gray-shade px-[14px] py-4 flex items-center justify-between">
      <div className="flex items-center gap-x-[0.625rem]">
        <span className="text-sm font-medium text-white">{index}</span>

        {icon}

        <span className="capitalize text-white">
          {label} <span className="text-xs text-neutral-secondary">{span}</span>
        </span>
      </div>

      {percentage && (
        <span
          className={clsx(
            "text-sm",
            percentage < 0 ? "text-red-500" : "text-green-500"
          )}
        >
          {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
        </span>
      )}

      {value && (
        <span className="text-sm text-white font-medium">${value}</span>
      )}
    </div>
  );
}
