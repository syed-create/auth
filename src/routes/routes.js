import { lazy } from "react";

export const routes = {
	Public: [
		{
			path: "/login",
			component: lazy(() => import("../features/auth/pages/Login")),
		},
	],

	Private: [
		{
			path: "/dashboard",
			component: lazy(() =>
				import("../features/dashboard/pages/Dashboard")
			),
		},
	],
};
