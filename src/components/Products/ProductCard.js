import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const ProductCard = (props) => {
	const item = props.item;

	// References for each element
	const containerRef = useRef(null);
	const imageRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		// Fade in the container, image, and text elements
		gsap.fromTo(containerRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
		gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.2, delay: 0.2 });
		gsap.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.4 });
	}, []);

	return (
		<Link to={`/product/${item.id}`} relative="path">
			<div ref={containerRef} className="bg-white">
				{/* Image container */}
				<div className="ripple-effect" ref={imageRef}>
					<div ref={imageRef} className="relative overflow-hidden">
						<img
							className="grayscale w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover object-top transition-transform transform hover:scale-105"
							alt={item.product_name}
							src={item.url}
						/>
					</div>
				</div>
				{/* Text container */}
				<div ref={textRef} className="flex flex-col justify-center items-start p-4 space-y-2">
					<p className="text-lg font-semibold text-gray-800">{item.product_name}</p>
					<p className="text-xl font-semibold text-gray-900">{item.price}</p>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
