import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("create", "routes/create/create.tsx"),
    route("join", "routes/join/join.tsx"),
    route("game", "routes/game/game.tsx"),

] satisfies RouteConfig;
