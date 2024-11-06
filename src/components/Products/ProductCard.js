import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
	let item = props.item;

	return (
		<Link to={`/product/${item.id}`} relative="path">
			<div>
				<img className="h-96 w-full object-cover object-top" alt={item.product_name} src={item.url}></img>
				<div className="flex flex-row justify-between pt-2">
					<p>{item.product_name}</p>
					<p>{item.price}</p>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
