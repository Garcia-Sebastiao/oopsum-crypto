type DashboardCardProps = {
  rightElement?: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export function DashboardCard({
  rightElement,
  title,
  icon,
  children,
}: DashboardCardProps) {
  return (
    <div className="col-span-1 p-4 rounded-4xl space-y-6 bg-bg-secondary">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          {icon}
          {title && (
            <h4 className="text-white text-2xl">{title}</h4>
          )}
        </div>

        {rightElement}
      </div>

      {children}
    </div>
  );
}
