import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";

type CustomDropdownProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function CustomDropdown({
  trigger,
  children,
  className,
}: CustomDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={clsx("min-w-64 flex flex-col rounded-xl shadow-lg mt-3 bg-bg-gray-shade border-none p-2", className)}
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
