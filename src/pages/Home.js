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

	const videoRef = useRef(null);
	const fadeInRefs = useRef([]);
	fadeInRefs.current = [];

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
				<div ref={addToRefs} className="opacity-0" key={item.id} onClick={() => setIsModalOpen(true)}>
					<LookBookCard handleLookbookModalProducts={handleLookbookModalProducts} item={item} />
				</div>
			);
		}
	});

	useEffect(() => {
		if (fadeInRefs.current.length > 0) {
			gsap.fromTo(
				fadeInRefs.current,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					stagger: 0.2,
					ease: "power3.out",
					scrollTrigger: {
						trigger: fadeInRefs.current[0],
						start: "top 80%",
						end: "bottom 20%",
						toggleActions: "play none none none",
					},
				}
			);
		}

		if (videoRef.current) {
			gsap.fromTo(
				videoRef.current,
				{ scale: 1 },
				{
					scale: 1.05,
					duration: 1.5,
					ease: "power3.out",
					scrollTrigger: {
						trigger: videoRef.current,
						start: "top 80%",
						end: "bottom 20%",
						toggleActions: "play none none none",
					},
				}
			);
		}
	}, []);

	return (
		<div className="gridLines ">
			<Cover coverImg={coverImg} />

			<svg className="fixed top-0 right-[-150px] w-48 h-48 md:w-72 md:h-72" viewBox="0 0 200 200">
				<circle cx="100" cy="100" r="70" stroke="#a6a6a6" strokeWidth="1" fill="none" />
				<defs>
					<path id="textPath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
				</defs>
				<text fontSize="8" fontFamily="Bebas" fill="#a6a6a6">
					<textPath href="#textPath" startOffset="0%" style={{ animation: "rotateText 8s linear infinite" }}>
						ONE DAY AT A TIME | ONE REP AT A TIME | ONE DAY AT A TIME | ONE REP AT A TIME | ONE DAY AT A TIME
					</textPath>
				</text>
				<style>{`
          text {
            transform-origin: 100px 100px;
            animation: rotateText 8s linear infinite;
          }
          @keyframes rotateText {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
			</svg>

			<div className="container pt-10 md:pt-20 px-4 mx-auto flex flex-col">
				<ThreeForthLayout>
					<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
						<img src={productInfo?.product_url} alt={productInfo?.product_name} className="w-full h-full object-cover" />
					</Modal>

					<div className="grid gap-10 md:gap-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-10 md:pb-20">{mapProductsCards}</div>
				</ThreeForthLayout>
			</div>

			<Video ref={videoRef} src="./lookbookVideo.mp4" className="w-full" />

			<div className="mx-auto flex flex-col">
				<ThreeForthLayout>
					<div className="grid gap-6 md:gap-10 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mb-12 md:mb-24">
						<div className="borderLines hidden md:block"></div>
						<div className="col-span-2 px-4 md:px-20 text-center md:text-left">
							<h1 className="text-xl md:text-3xl font-semibold">"Empower Your Wellness: Discover Balance, Strength, and a Healthier You"</h1>
							<p className="pt-2 text-sm md:text-base">
								Elevate Your Wellness Journey: Our apparel is designed to support your every move, empowering you to live a healthy, balanced, and
								active lifestyle. Feel confident, comfortable, and motivated as you embrace wellness in style—because feeling good is the first step
								to living well.
							</p>
						</div>
						<div className="borderLines hidden md:block"></div>
					</div>
				</ThreeForthLayout>
			</div>
		</div>
	);
};

export default Home;
