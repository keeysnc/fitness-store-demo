import React, { useEffect, useRef } from "react";
import { getPosts } from "../utils/utils";
import BlogCard from "../components/Blog/BlogCard";
import Video2 from "../components/Video/Video2";
import gsap from "gsap";

const Blog = () => {
	const posts = getPosts();

	const videoRefs = useRef([]);
	const textRefs = useRef([]);
	const blogCardRefs = useRef([]);

	const addToRefs = (el, refArray) => {
		if (el && !refArray.current.includes(el)) {
			refArray.current.push(el);
		}
	};

	useEffect(() => {
		// Animate videos
		gsap.fromTo(videoRefs.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" });

		// Animate text sections
		gsap.fromTo(textRefs.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" });

		// Animate blog cards
		gsap.fromTo(blogCardRefs.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" });
	}, []);

	const mapPostsCards = posts.map((post) => (
		<BlogCard
			ref={(el) => addToRefs(el, blogCardRefs)}
			key={post.id}
			imgUrl={post.imgUrl}
			path={post.id}
			category={post.category}
			caption={post.caption}
			feature={post.figure}
			title={post.title}
		/>
	));

	return (
		<>
			<div className="gridLines grid pb-15 gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
				<div className="col-span-1 hidden lg:block"></div>
				<div ref={(el) => addToRefs(el, videoRefs)} className="lg:col-span-1 col-span-full">
					<Video2 src="./lookbookVideo2.mp4" />
				</div>
				<div className="col-span-full lg:col-span-1 text-center pt-12 lg:pt-48" ref={(el) => addToRefs(el, textRefs)}>
					<h1 className="text-2xl lg:text-4xl">Community</h1>
				</div>
				<div className="col-span-2 hidden lg:block"></div>
				<div className="col-span-1" ref={(el) => addToRefs(el, videoRefs)}>
					<Video2 src="./lookbookVideo2.mp4" />
				</div>
				<div className="col-span-1" ref={(el) => addToRefs(el, videoRefs)}>
					<Video2 src="./lookbookVideo2.mp4" />
				</div>
				<div className="px-4 lg:px-20 col-span-full lg:col-span-2" ref={(el) => addToRefs(el, textRefs)}>
					<h1 className="text-xl lg:text-3xl font-bold">"Strength in Unity: The Power of the Fitness Community"</h1>
					<p className="p-2 text-sm lg:text-base">
						The fitness community is a vibrant, diverse group united by a shared commitment to health, well-being, and self-improvement. This
						community includes people of all fitness levels and backgrounds, from beginners just starting their journey to seasoned athletes who
						inspire others with their dedication.
					</p>
				</div>
				<div className="col-span-3 hidden lg:block"></div>
			</div>
			<div className="m-auto px-4">
				<div className="gridLines grid pb-15 gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">{mapPostsCards}</div>
			</div>
		</>
	);
};

export default Blog;
