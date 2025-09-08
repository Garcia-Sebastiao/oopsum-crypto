import clsx from "clsx";
import { useNavigate } from "react-router-dom";

type SidebarItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
  isActive?: boolean;
};

export function SidebarItem({ item }: { item: SidebarItemProps }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(item?.href)}
      className={clsx(
        "bg-gradient-to-r w-full from-green-primary transition-all cursor-pointer h-12 rounded-full p-[3px] to-[#77EDB4] ",
        !item?.isActive && "!from-transparent !to-transparent",
        !item?.isActive && "hover:bg-[#212325]"
      )}
    >
      <div
        className={clsx(
          "w-full flex items-center gap-x-2 bg-white px-1 rounded-full h-full",
          !item?.isActive && "!bg-transparent"
        )}
      >
        <div className="w-[2.375rem] h-[2.375rem] rounded-full bg-bg-primary flex items-center justify-center">
          <item.icon className="w-5 h-5 text-[#E1E1E1]" />
        </div>

        <span
          className={clsx(
            "text-sm font-medium text-white",
            item?.isActive && "!font-semibold !text-bg-primary"
          )}
        >
          {item?.label}
        </span>
      </div>
    </button>
  );
}
