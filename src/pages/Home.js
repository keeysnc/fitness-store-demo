// Home.js
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getProducts } from "../utils/utils";
import ThreeForthLayout from "../components/Layouts/ThreeForthLayout";
import Cover from "../components/Cover/Cover";
import Modal from "src/components/Modal/Modal";
import LookBookCard from "../components/Products/LookBookCard";
import Video from "../components/Video/Video";

gsap.registerPlugin(ScrollTrigger);

const coverImg =
	"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2980&q=80";

const Home = () => {
	const [category, setCategory] = useState(null);
	const [attribute, setAttribute] = useState(null);
	const [productInfo, setProductInfo] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const products = getProducts();

	const videoRef = useRef(null); // Ref for the video element
	const fadeInRefs = useRef([]);
	fadeInRefs.current = [];

	// Function to add refs to fade-in elements
	const addToRefs = (el) => {
		if (el && !fadeInRefs.current.includes(el)) {
			fadeInRefs.current.push(el);
		}
	};

	const handleCategorySort = (e) => {
		const selectedCategory = e.target.innerHTML;
		setCategory(selectedCategory);
	};

	const handleAttributeSort = (e) => {
		const selectedAttribute = e.target.value;
		setAttribute(selectedAttribute);
	};

	const handleLookbookModalProducts = (item) => {
		setProductInfo(item);
	};

	const mapProductsCards = products.map((item) => {
		if (category === item.category || category === null || category === "All" || item.sizes.includes(attribute)) {
			return (
				<div
					ref={addToRefs} // Add ref to each product card for GSAP targeting
					className="opacity-0" // Set initial opacity to 0
					key={item.id}
					onClick={() => setIsModalOpen(true)}
				>
					<LookBookCard handleLookbookModalProducts={handleLookbookModalProducts} item={item} />
				</div>
			);
		}
	});

	// GSAP ScrollTrigger animation for fade-in staggered effect
	useEffect(() => {
		if (fadeInRefs.current.length > 0) {
			gsap.fromTo(
				fadeInRefs.current, // Target all the elements
				{
					opacity: 0,
					y: 30, // Start with elements 30px down
				},
				{
					opacity: 1,
					y: 0, // End with elements in their original position
					duration: 1,
					stagger: 0.2, // Apply staggered effect with a 0.2s delay between each element
					ease: "power3.out",
					scrollTrigger: {
						trigger: fadeInRefs.current[0], // Set the first element as the trigger for scroll
						start: "top 80%", // Trigger the animation when the top of the element reaches 80% of the viewport height
						end: "bottom 20%", // Optional: End the animation when the bottom of the element reaches 20% of the viewport
						toggleActions: "play none none none", // Play animation only once when in view
					},
				}
			);
		}

		// GSAP animation for zoom effect on video
		if (videoRef.current) {
			gsap.fromTo(
				videoRef.current,
				{
					scale: 1, // Start with the normal scale
				},
				{
					scale: 1.05, // Slight zoom-in effect
					duration: 1.5, // Duration of the zoom effect
					ease: "power3.out",
					scrollTrigger: {
						trigger: videoRef.current, // Target the video element
						start: "top 80%", // Start animation when the top of the video reaches 80% of the viewport height
						end: "bottom 20%", // Optional: End the animation when the bottom of the video reaches 20% of the viewport height
						toggleActions: "play none none none", // Trigger only once when in view
					},
				}
			);
		}
	}, []);

	return (
		<div className="gridLines ">
			<Cover coverImg={coverImg} />
			<svg className="fixed top-0 right-[-150px]" width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				{/* Inner Circle */}
				<circle cx="100" cy="100" r="70" stroke="#a6a6a6" strokeWidth="1" fill="none" />

				{/* Text Path Definition */}
				<defs>
					<path id="textPath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
				</defs>

				{/* Rotating Text */}
				<text fontSize="10" fontFamily="Bebas" fill="#a6a6a6">
					<textPath
						href="#textPath"
						startOffset="0%"
						style={{
							animation: "rotateText 8s linear infinite",
						}}
					>
						ONE DAY AT A TIME | ONE REP AT A TIME | ONE DAY AT A TIME | ONE REP AT A TIME | ONE DAY AT A TIME
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
			<div className="container pt-12 mx-auto flex flex-col">
				<ThreeForthLayout>
					<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
						<img src={productInfo?.product_url}></img>
						<h2 className="text-lg pt-2 font-semibold">{productInfo?.product_name}</h2>
						<p className="mt-2 text-gray-600">{productInfo?.product_price}</p>
						<button className="border-black border-2 text-black hover:bg-black hover:text-white px-8 mt-4 py-4">Add to Bag</button>
					</Modal>
					{/* Products grid */}
					<div className="grid xl:grid-cols-3 gap-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 pb-20">{mapProductsCards}</div>
				</ThreeForthLayout>
			</div>
			{/* Video element with ref */}
			<Video ref={videoRef} src="./lookbookVideo.mp4" />
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
