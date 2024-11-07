import React, { useEffect, useState } from "react";
import ProductCard from "../components/Products/ProductCard";
import { getProducts } from "../utils/utils";
import ThreeForthLayout from "../components/Layouts/ThreeForthLayout";
import Cover from "../components/Cover/Cover";
import Modal from "src/components/Modal/Modal";
import LookBookCard from "../components/Products/LookBookCard";
import Video from "../components/Video/Video";
const coverImg =
	"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2980&q=80";

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
		if (category === item.category || category === null || category === "All" || item.sizes.includes(attribute)) {
			return <LookBookCard key={item.id} item={item} />;
		}
	});

	useEffect(() => {
		console.log(products);
	}, [products, mapProductsCards, handleAttributeSort, handleCategorySort, attribute]);

	return (
		<div className="gridLines">
			<Cover coverImg={coverImg} />
			<div className="container pt-12 mx-auto flex flex-col">
				<div className="relative">
					<svg className="fixed top-0 right-[-100px]" width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
						{/* Inner Circle */}
						<circle cx="100" cy="100" r="70" stroke="black" strokeDasharray={150} strokeWidth="3" fill="none" />

						{/* Text Path Definition */}
						<defs>
							<path id="textPath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
						</defs>

						{/* Rotating Text */}
						<text fontSize="30" fontFamily="Bebas" fill="black">
							<textPath
								href="#textPath"
								startOffset="0%"
								style={{
									animation: "rotateText 8s linear infinite",
								}}
							>
								ONE DAY AT A TIME
							</textPath>
						</text>

						<style>
							{`
        text {
          transform-origin: 100px 100px; /* Center the rotation */
          animation: rotateText 8s linear infinite;
        }

        @keyframes rotateText {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
						</style>
					</svg>
				</div>
				<ThreeForthLayout>
					<Modal />
					<div className="mt-20 mb-20">
						<h1>"Embodying Wellness: A Lookbook"</h1>
						<p className="pt-2 w-[50%]">
							Welcome to our curated lookbook, where fitness meets wellness in every thread. Designed for movement, mindfulness, and empowerment, our
							collection transcends traditional activewear to inspire a lifestyle of balance and self-care. Each piece blends innovative performance
							fabrics with calming, earth-toned hues and modern silhouettes that support both body and mind. Whether you’re flowing through yoga,
							challenging yourself in the gym, or finding stillness in meditation, this collection is crafted to empower every aspect of your wellness
							journey. Explore a wardrobe that not only moves with you but moves you—toward your best, healthiest self.
						</p>
					</div>
					<br />
					<div className="grid xl:grid-cols-3 gap-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">{mapProductsCards}</div>
				</ThreeForthLayout>
			</div>
			<Video src="./lookbookVideo.mp4" />
			<div className="mx-auto flex flex-col ">
				<ThreeForthLayout>
					<div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mb-24">
						<div className="borderLines"></div>
						<div className="col-span-2 px-20">
							<h1>"Empower Your Wellness: Discover Balance, Strength, and a Healthier You"</h1>
							<p className="pt-2 ">
								Elevate Your Wellness Journey: Our apparel is designed to support your every move, empowering you to live a healthy, balanced, and
								active lifestyle. Feel confident, comfortable, and motivated as you embrace wellness in style—because feeling good is the first step
								to living well.
							</p>
						</div>
						<div className="borderLines"></div>
						<div></div>
					</div>
				</ThreeForthLayout>
			</div>
		</div>
	);
};

export default Home;
