import React from "react";
import { Link } from "react-router-dom";
import { productColor } from "../../assets/Icons";

const ProductCard = (props) => {
	let item = props.item;

	return (
		<Link to={`/product/${item.id}`} relative="path">
			<div>
				<img className="h-96 w-full object-cover object-top" alt={item.product_name} src={item.url}></img>
				<div className="flex flex-row justify-between pt-2 font-bold">
					<p>{item.product_name}</p>
					<p>{item.price}</p>
				</div>
				<div className="pt-4">
					<p>{item.category}</p>
					<div class="flex">
						{item.colors.map((color) => {
							return productColor(color);
						})}
						|{" "}
						{item.sizes.map((size) => {
							return <p className="px-2">{size}</p>;
						})}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
