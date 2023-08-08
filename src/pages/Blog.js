import React, { useEffect } from "react";
import { getPosts } from "../utils/utils";
import BlogCard from "../components/Blog/BlogCard";

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
	return <div className="px-4 container m-auto py-15">{mapPostsCards}</div>;
};

export default Blog;
