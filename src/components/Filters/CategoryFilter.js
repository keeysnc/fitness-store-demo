import React from "react";
import { Link } from "react-router-dom";

const CategoryFilter = ({ handleCategorySort }) => {
	const categoryList = [
		{ name: "All", path: "/shop" },
		{ name: "Tops", path: "/shop?category=tops" },
		{ name: "Bottoms", path: "/shop?category=bottoms" },
		{ name: "Outfit", path: "/shop?category=outfits" },
		{ name: "Shoes", path: "/shop?category=shoes" },
	];

	const categories = categoryList.map((category) => {
		return (
			<Link to={category.path} onClick={handleCategorySort} className="hover:underline category flex relative cursor-pointer">
				<li>{category.name}</li>
			</Link>
		);
	});

	return (
		<div className="category-filter">
			<p className="font-bold pb-6 pt-6">BROWSE BY:</p>
			<ul className="inline-block space-y-2 md:flex-row md:pb-6">{categories}</ul>
		</div>
	);
};

export default CategoryFilter;
