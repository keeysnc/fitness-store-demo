import React, { useEffect } from "react";
import { getPosts } from "../utils/utils";
import BlogCard from "../components/Blog/BlogCard";
import Video2 from "../components/Video/Video2";

const Blog = () => {
	const posts = getPosts();

	useEffect(() => {
		console.log("posts", posts);
	}, [posts]);

	const mapPostsCards = posts.map((post) => (
		<BlogCard
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
			<div className="gridLines grid pb-15 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 ">
				<div className="col-span-1"></div>
				<Video2 src="./lookbookVideo2.mp4" />
				<div className=" col-span-1 text-center pt-48">
					<h1 className="gridCircle">Community</h1>
				</div>
				<div className="col-span-2"></div>
				<div className="col-span-1">
					<Video2 src="./lookbookVideo2.mp4" />
				</div>
				<div className="col-span-1">
					<Video2 src="./lookbookVideo2.mp4" />
				</div>
				<div className="sm:px-8 md:px-20 col-span-2">
					<h1>"Strength in Unity: The Power of the Fitness Community"</h1>
					<p className="p-2">
						The fitness community is a vibrant, diverse group united by a shared commitment to health, well-being, and self-improvement. This
						community includes people of all fitness levels and backgrounds, from beginners just starting their journey to seasoned athletes who
						inspire others with their dedication.{" "}
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
