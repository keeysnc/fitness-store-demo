import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HalfLayout from "../components/Layouts/HalfLayout";
import Pagination from "../components/Pagination/Pagination";
import { exitBtn, productColor } from "../assets/Icons";
import { getProducts } from "../utils/utils";
import AttributeFilter from "../components/Filters/AttributeFilter";

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
							<div className="lg:flex lg:flex-row pb-15">
								<HalfLayout>
									<div className="product-details-img">
										<img className="object-cover object-center w-full h-full" alt="detail-img" src={item.url} />
									</div>
									{/* <div className="thumbnail pl-8 py-8 flex-row flex space-x-4 sm:px-25">
										<img
											className="h-24 w-24"
											alt="detail-img"
											src="https://plus.unsplash.com/premium_photo-1673458070037-8cc98a465c0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
										/>
										<img
											className="h-24 w-24"
											alt="detail-img"
											src="https://plus.unsplash.com/premium_photo-1673458070037-8cc98a465c0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
										/>
										<img
											className="h-24 w-24"
											alt="detail-img"
											src="https://plus.unsplash.com/premium_photo-1673458070037-8cc98a465c0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
										/>
									</div> */}
								</HalfLayout>
								<HalfLayout>
									<div className="product-details px-25">
										<Link to="/" onClick={returnToHome} className="cursor-pointer">
											{exitBtn()}
										</Link>
										<h4 className="text-h4">{item.product_name}</h4>
										<h4 className="text-h4">{item.price}</h4>
										<p className="pt-4  flex">
											<span className="font-bold pr-2">Color:</span>
											{item.colors.length < 1 ? productColor(item.colors) : item.colors.map((color) => productColor(color))}
										</p>
										<p className="pt-4">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu tempus quam, id commodo neque. Phasellus justo quam, tempus
											vitae ligula a, consequat blandit turpis. Vivamus placerat dolor nulla, sit amet malesuada neque dignissim sit amet. Proin
											ultricies, velit non condimentum elementum
										</p>
										<br />
										<form>
											<AttributeFilter color={item.colors} size={item.sizes} />
											<p className="pt-4">
												<span className="font-bold pr-2">Quantity:</span>
												<input type="number" pattern="\d*" maxlength="4" placeholder="0"></input>
											</p>
											<button className="px-8 mt-4 py-4">Add to Bag</button>
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
