import { Outlet } from "react-router-dom";
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";

export function DashboardLayout() {
  return (
    <div className="w-full flex h-screen">
      <Sidebar />

      <main className="flex-1 flex relatve flex-col h-full overflow-y-auto">
        <Header />

        <div className="w-full px-[30px] mt-[1rem] pb-12 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
