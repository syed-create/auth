import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import "antd/dist/antd.min.css";

import Login from "./features/auth/pages/login";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path={"/login"} element={<Login />} />
					<Route path={"/"} element={<ProtectedRoutes />}></Route>
					<Route path={"*"} element={<Navigate to={"/login"} />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
