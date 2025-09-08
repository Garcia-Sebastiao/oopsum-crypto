import { Logo } from "@/assets/common/logo";
import { useSidebarItems } from "./hooks/use-sidebar-items";
import { SidebarItem } from "./components/sidebar-item";

export function Sidebar() {
  const { sidebarItems } = useSidebarItems();
  return (
    <aside className="flex-1 py-6 px-8 max-w-[260px] bg-[#15161766] h-full">
      <div>
        <Logo />
      </div>

      <nav className="w-full flex flex-col gap-4 mt-[4.25rem]">
        {sidebarItems?.map((item) => (
          <SidebarItem item={item} />
        ))}
      </nav>
    </aside>
  );
}
