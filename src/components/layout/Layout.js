import React from "react";
import Navigation from "../Navigation/Navigation";
import PromoBanner from "../PromoBanner/PromoBanner";
import Home from "../../pages/Home";

const Layout = () => {
	return (
		<>
			<Navigation />
			<PromoBanner />
			<Home />
		</>
	);
};

export default Layout;
