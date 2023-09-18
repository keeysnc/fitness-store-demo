import React from "react";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<PromoBanner />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
