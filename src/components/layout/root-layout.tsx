import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="w-full h-screen bg-bg-primary">
      <Outlet />
    </div>
  );
}
