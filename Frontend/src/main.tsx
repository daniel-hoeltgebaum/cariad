import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import SensorSetup from "./pages/sensorSetup";
import Dataset from "./pages/dataset";
import Download from "./pages/download";
import { ThemeProvider } from "./components/theme/theme-provider";
import Team from "./pages/team";
import Visualization from "./pages/visualization";
import License from "./pages/license";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/sensor-setup",
        element: <SensorSetup />,
      },
      {
        path: "/dataset",
        element: <Dataset />,
      },
      {
        path: "/visualization",
        element: <Visualization />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/download",
        element: <Download />,
      },
      {
        path: "/license",
        element: <License />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
