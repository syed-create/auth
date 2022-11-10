import { lazy } from "react";

export const routes = {
	Public: [
		{
			path: "/login",
			component: lazy(() => import("../features/auth/pages/login")),
		},
	],

	Private: [
		{
			path: "/dashboard",
			component: lazy(() => import("../features/dashboard/pages/index")),
		},
	],
};
