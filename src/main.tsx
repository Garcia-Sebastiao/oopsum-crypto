import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, useNavigate, useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import "./i18n";

export function AppRoutes() {
  const pathname = window.location.pathname;
  const token = localStorage.getItem("user-token");
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      if (token) {
        navigate("/dashboard");
      } else {
        navigate("/auth/sign-in");
      }
    }
  }, [pathname, token, navigate]);
  return useRoutes(routes);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
