import React from "react";
import CartIcon from "./cartIcon";

const Menu = () => {
	return (
		<div className="flex flex-row justify-between w-96">
			<ul className="flex flex-row space-x-4">
				<li>
					<a href="/shop">Shop</a>
				</li>
				<li>
					<a href="/blog">Blog</a>
				</li>
				<li>
					<a href="/demo">Demo</a>
				</li>
			</ul>

			<ul className="flex flex-row space-x-4">
				<li>EN</li>
				<span>|</span>
				<li>USD</li>
			</ul>

			<ul className="flex flex-row">
				<CartIcon />
			</ul>
		</div>
	);
};

export default Menu;
