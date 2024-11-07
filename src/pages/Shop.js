import React, { useEffect, useState } from "react";
import ProductCard from "../components/Products/ProductCard";
import { getProducts } from "../utils/utils";
import OneForthLayout from "../components/Layouts/OneForthLayout";
import ThreeForthLayout from "../components/Layouts/ThreeForthLayout";
import CategoryFilter from "../components/Filters/CategoryFilter";

const Home = () => {
	const [category, setCategory] = useState(null);
	const [attribute, setAttribute] = useState(null);
	const products = getProducts();

	const handleCategorySort = (e) => {
		const selectedCategory = e.target.innerHTML;
		setCategory(selectedCategory);
	};

	const handleAttributeSort = (e) => {
		const selectedAttribute = e.target.value;
		console.log(selectedAttribute);
		setAttribute(selectedAttribute);
	};

	const mapProductsCards = products.map((item) => {
		if (category === item.category) {
			return <ProductCard key={item.id} item={item} />;
		}

		if (category === null || category === "All") {
			return <ProductCard key={item.id} item={item} />;
		}

		if (item.sizes.includes(attribute)) {
			return <ProductCard key={item.id} item={item} />;
		}
	});

	useEffect(() => {
		console.log(products);
	}, [products, mapProductsCards, handleAttributeSort, handleCategorySort, attribute]);

	return (
		<div>
			<div className="container h-screen px-4 pt-12 mx-auto left-sidebar-layout flex flex-col md:flex-row">
				<OneForthLayout>
					<h2 className="sidebar-title text-h1 ">SHOP</h2>
					<CategoryFilter handleCategorySort={handleCategorySort} />
				</OneForthLayout>
				<ThreeForthLayout>
					<div className="grid pb-15 gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 ">{mapProductsCards}</div>
				</ThreeForthLayout>
			</div>
		</div>
	);
};

export default Home;
