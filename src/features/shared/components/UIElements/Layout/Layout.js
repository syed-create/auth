import React from "react";

function Layout({ children }) {
	return (
		<div className="h-[calc(100%_-_48px)] overflow-auto">{children}</div>
	);
}

export default Layout;
