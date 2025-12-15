import { type RouteObject } from "react-router-dom";
import { HomePage } from "../pages/home";
import { SignUpPage } from "../pages/auth";
import { NotFoundPage } from "../pages/not-found";
import { RootLayout } from "../components/layout/root-layout";
import { PrivateRoutes } from "./private-routes";
import { PublicRoutes } from "./public-routes";
import { SignInPage } from "../pages/auth/sign-in";
import { DashboardLayout } from "@/components/layout/dashboard/dashboard-layout";
import { PortfolioPage } from "@/pages/portfolio";

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              { path: "/", element: <HomePage /> },
              {
                path: "/dashboard",
                element: <HomePage />,
              },
            ],
          },
          {
            element: <DashboardLayout />,
            children: [{ path: "/portfolio", element: <PortfolioPage /> }],
          },
        ],
      },
      {
        element: <PublicRoutes />,
        children: [
          { path: "auth/sign-in", element: <SignInPage /> },
          { path: "auth/sign-up", element: <SignUpPage /> },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
];
