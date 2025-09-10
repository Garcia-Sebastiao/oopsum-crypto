import { formatDate } from "@/utils/date/format-date";
import clsx from "clsx";
import type { JSX } from "react";
import type React from "react";

type HistoryItemProps = {
  icon: React.ReactNode | JSX.Element;
  label: string;
  value: number;
  date: Date | string;
  description: string;
};

export function HistoryItem({
  icon,
  label,
  value,
  date,
  description,
}: HistoryItemProps) {
  return (
    <div className="w-full flex items-start justify-between gap-x-2">
      <div className="flex items-start gap-x-2">
        <div className="w-12 h-12">{icon}</div>

        <div className="flex flex-col">
          <span className="text-xl text-white font-medium">
            {label}
            <span
              className={clsx(
                "text-sm pl-1 text-green-500",
                value < 0 && "!text-red-500"
              )}
            >
              {value > 0 ? `+$${value}` : `${value}`.replace("-", "-$")}
            </span>
          </span>

          <span className="text-neutral-secondary text-sm pt-2 max-w-sm">{description}</span>
        </div>
      </div>

      <span className="text-xs text-neutral-secondary">{formatDate(date)}</span>
    </div>
  );
}
