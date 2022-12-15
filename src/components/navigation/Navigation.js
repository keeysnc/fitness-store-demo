import React from "react";
import HorizontalRule from "../horizontalRule/HorizontalRule";
import Menu from "../navigation/Menu";

const Navigation = () => {
	return (
		<nav>
			<wrapper className="container bg-white flex flex-row justify-between pt-6  mx-auto text-base">
				<div className="flex flex-row">
					<span>Demo Storefront</span>
				</div>
				<Menu />
			</wrapper>
			<HorizontalRule />
		</nav>
	);
};

export default Navigation;
