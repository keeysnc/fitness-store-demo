import React from "react";
import Navigation from "components/Navigation/Navigation";
import PromoBanner from "components/PromoBanner/PromoBanner";
import Footer from "components/Footer/Footer";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Navigation />
			<PromoBanner />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
