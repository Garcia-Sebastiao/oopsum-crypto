import clsx from "clsx";

type DashboardCardProps = {
  rightElement?: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
};

export function DashboardCard({
  rightElement,
  title,
  icon,
  children,
  className,
  contentClassName,
  headerClassName,
}: DashboardCardProps) {
  return (
    <div
      className={clsx(
        "col-span-1 p-4 rounded-4xl space-y-6 bg-bg-secondary",
        className
      )}
    >
      <div
        className={clsx(
          "w-full flex items-center justify-between",
          headerClassName
        )}
      >
        <div className="flex items-center">
          {icon ? icon : null}
          {title && <h4 className="text-white text-2xl">{title}</h4>}
        </div>

        {rightElement}
      </div>

      <div className={clsx("w-full", contentClassName)}> {children}</div>
    </div>
  );
}
