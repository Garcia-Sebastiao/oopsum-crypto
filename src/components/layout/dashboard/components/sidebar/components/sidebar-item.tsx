import clsx from "clsx";

type SidebarItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
  isActive?: boolean;
};

export function SidebarItem({ item }: { item: SidebarItemProps }) {
  return (
    <button className="bg-gradient-to-r w-full from-green-primary h-12 rounded-full p-1 to-[#77EDB4] ">
      <div
        className={clsx(
          "w-full flex items-center bg-white rounded-full h-full",
          !item?.isActive && "!bg-transparent"
        )}
      >
        <div className="w-[2.375rem] h-[2.375rem] rounded-full bg-bg-primary flex items-center justify-center">
          <item.icon className="w-5 h-5 text-[#E1E1E1]" />
        </div>

        <span
          className={clsx(
            "text-sm font-medium text-white",
            item?.isActive && "font-semibold text-bg-primary"
          )}
        >
          {item?.label}
        </span>
      </div>
    </button>
  );
}
