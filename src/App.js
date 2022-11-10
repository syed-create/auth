import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import "antd/dist/antd.min.css";

import { routes } from "./routes/routes";
import RootLayout from "./features/shared/components/navigation/RootLayout";
import { Suspense } from "react";
import Spinner from "./shared/spinner";

function App() {
	return (
		<>
			<Suspense fallback={<Spinner />}>
				<Router>
					<Routes>
						{routes.Public.map(route => (
							<Route
								key={route.path}
								path={route.path}
								element={<route.component />}
							/>
						))}

						<Route path={"/dashboard"} element={<RootLayout />}>
							{routes.Private.map(route => (
								<Route
									key={route.path}
									path={route.path}
									element={<route.component />}
								/>
							))}
							<Route
								path={"*"}
								element={<Navigate to={"/dashbord"} />}
							/>
						</Route>
						<Route
							path={"*"}
							element={<Navigate to={"/login"} />}
						/>
					</Routes>
				</Router>
			</Suspense>
		</>
	);
}

export default App;
