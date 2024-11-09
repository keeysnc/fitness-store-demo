import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
	let item = props.item;
	const handleLookbookModalProducts = props.handleLookbookModalProducts;
	const getProduct = () => {
		const product = {
			id: item.product_id,
			product_name: item.product_name,
			product_url: item.url,
			product_price: item.price,
		};
		handleLookbookModalProducts(product);
	};

	return (
		<Link onClick={getProduct} relative="path" className={`${item.id % 3 === 0 ? "col-span-2" : "col-span-1"}`}>
			<div>
				<div className="ripple-effect">
					<img className="grayscale h-full w-full object-cover object-top" alt={item.product_name} src={item.url}></img>
				</div>

				<div className=" rounded-lg flex flex-row justify-between pt-2">
					<p>{item.product_name}</p>
				</div>
				<div className="flex flex-row justify-between pt-2 ">
					<p>{item.price}</p>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
