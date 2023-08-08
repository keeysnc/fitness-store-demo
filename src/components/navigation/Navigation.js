import React from "react";
import Menu from "./Menu";

const Navigation = () => {
	return (
		<nav className="border-b-2 border-black">
			<div className="container bg-white flex flex-row justify-between pt-6 pb-6 mx-auto text-base">
				<div className="flex flex-row">
					<span>
						<a href="/">WELLNESS APPAREL</a>
					</span>
				</div>
				<Menu />
			</div>
		</nav>
	);
};

export default Navigation;
