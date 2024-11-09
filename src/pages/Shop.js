import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ProductCard from "../components/Products/ProductCard";
import { getProducts } from "../utils/utils";
import OneForthLayout from "../components/Layouts/OneForthLayout";
import ThreeForthLayout from "../components/Layouts/ThreeForthLayout";
import CategoryFilter from "../components/Filters/CategoryFilter";

const Shop = () => {
	const [category, setCategory] = useState(null);
	const [attribute, setAttribute] = useState(null);
	const products = getProducts();

	const titleRef = useRef(null);
	const filterRef = useRef(null);
	const productRefs = useRef([]);
	productRefs.current = [];

	const handleCategorySort = (e) => {
		const selectedCategory = e.target.innerHTML;
		setCategory(selectedCategory);
	};

	const handleAttributeSort = (e) => {
		const selectedAttribute = e.target.value;
		setAttribute(selectedAttribute);
	};

	const mapProductsCards = products.map((item) => {
		if (category === item.category || category === null || category === "All" || item.sizes.includes(attribute)) {
			return <ProductCard key={item.id} item={item} ref={(el) => productRefs.current.push(el)} />;
		}
	});

	useEffect(() => {
		// Fade in title
		gsap.fromTo(titleRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });

		// Fade in category filter
		gsap.fromTo(filterRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });

		// Staggered fade-in for product cards
		gsap.fromTo(productRefs.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.6 });
	}, [products]);

	return (
		<div>
			<div className="container min-h-screen px-4 pt-8 mx-auto flex flex-col md:flex-row">
				<OneForthLayout>
					<h2 ref={titleRef} className="sidebar-title text-h1 text-2xl lg:text-3xl text-center md:text-left">
						SHOP
					</h2>
					<div ref={filterRef} className="mt-4 md:mt-0">
						<CategoryFilter handleCategorySort={handleCategorySort} />
					</div>
				</OneForthLayout>
				<ThreeForthLayout>
					<div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">{mapProductsCards}</div>
				</ThreeForthLayout>
			</div>
		</div>
	);
};

export default Shop;
