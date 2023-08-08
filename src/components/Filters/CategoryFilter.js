import React from "react";
import { Link } from "react-router-dom";

const CategoryFilter = ({ handleCategorySort }) => {
	const categoryList = [
		{ name: "All", path: "/" },
		{ name: "Tops", path: "/?category=tops" },
		{ name: "Bottoms", path: "/?category=bottoms" },
		{ name: "Outfit", path: "/?category=outfits" },
		{ name: "Shoes", path: "/?category=shoes" },
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
