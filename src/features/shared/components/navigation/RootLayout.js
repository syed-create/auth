import React, { Suspense } from "react";
import ProtectedRoutes from "../../../../routes/ProtectedRoutes";

function RootLayout() {
	return (
		<div>
			<Suspense fallback={<div>loading...</div>}>
				<ProtectedRoutes />
			</Suspense>
		</div>
	);
}

export default RootLayout;
