import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HalfLayout from "../components/Layouts/HalfLayout";
import Pagination from "../components/Pagination/Pagination";
import { exitBtn } from "../assets/Icons";
import { getProducts } from "../utils/utils";

const ProductDetails = () => {
	const location = useLocation();
	const products = getProducts();

	const pathname = location.pathname;

	const returnToHome = () => {
		console.log("test");
	};

	return (
		<>
			{products.map((item) => {
				if (pathname === `/product/${item.id}`) {
					return (
						<>
							<Pagination category={item.category} name={item.product_name} />
							<div className="container gap-10 px-4 pt-12 mx-auto flex flex-col md:flex-row">
								{/* Product Image */}
								<HalfLayout>
									<div className="product-details-img">
										<img
											className="object-cover object-center w-full h-64 sm:h-80 md:h-96 lg:h-full" // Adjust height for smaller screens
											alt="detail-img"
											src={item.url}
										/>
									</div>
								</HalfLayout>

								{/* Product Information */}
								<HalfLayout>
									<div className="product-details">
										{/* Back to Shop Button */}
										<Link to="/shop" onClick={returnToHome} className="cursor-pointer block mb-4">
											{exitBtn()}
										</Link>
										{/* Product Name */}
										<h4 className="text-h4 text-xl sm:text-2xl md:text-3xl font-semibold">{item.product_name}</h4>
										<p className="text-lg text-gray-700">{item.price}</p>

										{/* Product Description */}
										<p className="pt-4 text-sm sm:text-base md:text-lg text-gray-600">
											Crafted for performance and style, our fitness apparel blends comfort, durability, and flexibility to meet the demands of your
											active lifestyle. Designed with high-quality, breathable fabrics, each piece provides the perfect fit to keep you moving freely,
											whether you're at the gym, outdoors, or on the go. With modern designs and thoughtful details, our gear supports you through
											every workout, helping you look and feel your best.
										</p>

										{/* Add to Bag Button */}
										<form>
											<button className="border-black border-2 text-black hover:bg-black hover:text-white px-8 py-4 mt-6 w-full sm:w-auto">
												Add to Bag
											</button>
										</form>
									</div>
								</HalfLayout>
							</div>
						</>
					);
				}
			})}
		</>
	);
};

export default ProductDetails;
