import React from "react";

const Navigation = () => {
	return (
		<nav className="bg-white flex flex-row justify-between pt-6 container mx-auto text-base">
			<div className="flex flex-row">
				<span>Demo Storefront</span>
			</div>
			<div className="flex flex-row justify-between w-96">
				<ul className="flex flex-row space-x-4">
					<li>
						<a href="#">Shop</a>
					</li>
					<li>
						<a href="#">Blog</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
				</ul>

				<ul className="flex flex-row space-x-4">
					<li>
						<a href="#">EN</a>
					</li>
					<span>|</span>
					<li>
						<a href="#">USD</a>
					</li>
				</ul>

				<ul className="flex flex-row">
					<li>
						<a href="#">Cart</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
