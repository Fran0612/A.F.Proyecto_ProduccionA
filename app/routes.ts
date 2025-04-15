import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "api/calculate", file: "routes/api.calculate.tsx" }
] satisfies RouteConfig;
