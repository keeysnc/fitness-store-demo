import React from "react";
import CartIcon from "./cartIcon";

const Menu = () => {
	return (
		<div className="flex flex-row justify-between w-96">
			<ul className="flex flex-row space-x-4">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/shop">Shop</a>
				</li>
				<li>
					<a href="/blog">Community</a>
				</li>
			</ul>
			<ul className="flex flex-row">
				<CartIcon />
			</ul>
		</div>
	);
};

export default Menu;
