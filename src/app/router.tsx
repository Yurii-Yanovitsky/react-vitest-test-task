import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";

const rootRoute = createRootRoute({});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => <AuthPage />,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);
const router = createRouter({ routeTree });

export default router;
