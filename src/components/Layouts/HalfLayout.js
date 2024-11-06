import React from "react";

const HalfLayout = ({ children }) => {
	return <div className="md:basis-1/3 sm:basis-full">{children}</div>;
};

export default HalfLayout;
