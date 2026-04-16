import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "a-propos", Component: About },
      { path: "services", Component: Services },
      { path: "services/:slug", Component: ServiceDetail },
      { path: "contact", Component: Contact },
      { path: "*", Component: Home },
    ],
  },
]);
