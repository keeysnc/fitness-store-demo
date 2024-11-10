import React, { useEffect, useRef } from "react";
import { getPosts } from "../utils/utils";
import BlogCard from "../components/Blog/BlogCard";
import Video2 from "../components/Video/Video2";
import gsap from "gsap";

const Blog = () => {
	const posts = getPosts();

	// Refs to target elements for animation
	const blogContentRef = useRef(null);
	const videoRefs = useRef([]);
	const titleRef = useRef(null);
	const paragraphRef = useRef(null);

	useEffect(() => {
		// Fade in everything with no stagger
		gsap.fromTo(
			blogContentRef.current.children,
			{ opacity: 0, y: 20 }, // Start with opacity 0 and slightly below
			{ opacity: 1, y: 0, duration: 1 } // Fade in with no delay or stagger
		);

		// Fade in the video elements
		gsap.fromTo(videoRefs.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });

		// Fade in title and paragraph
		gsap.fromTo([titleRef.current, paragraphRef.current], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
	}, [posts]);

	const mapPostsCards = posts.map((post) => (
		<BlogCard
			key={post.id}
			imgUrl={post.imgUrl}
			path={post.path}
			category={post.category}
			caption={post.caption}
			feature={post.figure}
			title={post.title}
		/>
	));

	return (
		<>
			<div className="gridLines grid pb-15 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 " ref={blogContentRef}>
				<div className="col-span-1"></div>
				<div ref={(el) => videoRefs.current.push(el)}>
					<Video2 src="./lookbookVideo2.mp4" />
				</div>
				<div className="col-span-1 text-center pt-48" ref={titleRef}>
					<h1 className="gridCircle">Community</h1>
				</div>
				<div className="col-span-2"></div>
				<div className="col-span-1" ref={(el) => videoRefs.current.push(el)}>
					<Video2 src="./lookbookVideo2.mp4" />
				</div>
				<div className="col-span-1" ref={(el) => videoRefs.current.push(el)}>
					<Video2 src="./lookbookVideo2.mp4" />
				</div>
				<div className="sm:px-8 md:px-20 col-span-2" ref={paragraphRef}>
					<h1>"Strength in Unity: The Power of the Fitness Community"</h1>
					<p className="p-2">
						The fitness community is a vibrant, diverse group united by a shared commitment to health, well-being, and self-improvement. This
						community includes people of all fitness levels and backgrounds, from beginners just starting their journey to seasoned athletes who
						inspire others with their dedication.
					</p>
				</div>
				<div className="col-span-3"></div>
			</div>

			<div className="m-auto">
				<div className="gridLines grid pb-15 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 ">{mapPostsCards}</div>
			</div>
		</>
	);
};

export default Blog;
