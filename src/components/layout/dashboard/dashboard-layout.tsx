import { Outlet } from "react-router-dom";
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";

export function DashboardLayout() {
  return (
    <div className="w-full flex h-screen">
      <Sidebar />

      <main className="flex-1 h-full px-[30px] py-[20px]">
        <Header />

        <div className="w-full ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
