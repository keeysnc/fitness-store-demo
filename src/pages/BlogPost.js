import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogPost = () => {
	// Refs for elements to animate
	const titleRef = useRef(null);
	const metadataRef = useRef(null);
	const imageRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		// GSAP fade-in animations
		gsap.fromTo(
			titleRef.current,
			{ opacity: 0, y: 30 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: titleRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			}
		);

		gsap.fromTo(
			metadataRef.current,
			{ opacity: 0, y: 30 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: metadataRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			}
		);

		gsap.fromTo(
			imageRef.current,
			{ opacity: 0, y: 30 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: imageRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			}
		);

		gsap.fromTo(
			contentRef.current,
			{ opacity: 0, y: 30 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				stagger: 0.3,
				scrollTrigger: {
					trigger: contentRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			}
		);
	}, []);

	return (
		<div className="bg-gray-100">
			{/* Main Content Wrapper */}
			<div className="max-w-2xl mx-auto py-10 px-4">
				{/* Title */}
				<h1 ref={titleRef} className="text-4xl font-extrabold text-gray-900 leading-tight mb-4 underline underline-offset-4">
					Blog Post or Publication Goes Here
				</h1>

				{/* Blog Metadata */}
				<div ref={metadataRef} className="flex justify-between text-sm text-gray-500 mb-6">
					<p className="font-semibold">Category</p>
					<p>5 Min Read</p>
				</div>

				{/* Feature Image */}
				<img
					ref={imageRef}
					className="object-cover w-full h-96  mb-8"
					src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80"
					alt="Featured Blog Post"
				/>

				{/* Blog Content */}
				<section ref={contentRef}>
					{/* Introduction */}
					<h2 className="text-2xl font-semibold text-gray-900 mb-4">This is a blog post</h2>
					<p className="text-lg text-gray-700 leading-relaxed mb-6">
						Libero pharetra, odio elementum Libero pharetra, odio elementum lobortis proin. Turpis scelerisque ipsum, volutpat, urna arcu. Dis
						placerat magna non nibh sed lobortis risus lacus. Massa eu laoreet nunc arcu. Id pretium fermentum turpis nec, natoque dapibus in. Eu
						tincidunt non sapien commodo. Enim sed vitae hac nibh quis consequat vitae. Mi mattis ultrices sagittis eu. Vel lectus hendrerit malesuada
						viverra neque. Blandit fames amet mauris praesent cras faucibus elementum donec. Etiam proin blandit ullamcorper lorem. Arcu nunc diam
						quisque posuere semper mi. Ultrices senectus varius laoreet porttitor consequat. Massa faucibus cursus scelerisque nullam enim, viverra.
						At nec malesuada molestie viverra eu lobortis. Risus eu, odio feugiat adipiscing ac pellentesque nunc nec arcu.
					</p>

					{/* Blog Image */}
					<img
						className="object-cover w-full h-96  mb-8"
						src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80"
						alt="Blog Post Image"
					/>

					{/* Additional Content */}
					<p className="text-lg text-gray-700 leading-relaxed mb-6">
						Libero pharetra, odio elementum Libero pharetra, odio elementum lobortis proin. Turpis scelerisque ipsum, volutpat, urna arcu. Dis
						placerat magna non nibh sed lobortis risus lacus. Massa eu laoreet nunc arcu. Id pretium fermentum turpis nec, natoque dapibus in. Eu
						tincidunt non sapien commodo. Enim sed vitae hac nibh quis consequat vitae. Mi mattis ultrices sagittis eu. Vel lectus hendrerit malesuada
						viverra neque. Blandit fames amet mauris praesent cras faucibus elementum donec. Etiam proin blandit ullamcorper lorem. Arcu nunc diam
						quisque posuere semper mi. Ultrices senectus varius laoreet porttitor consequat. Massa faucibus cursus scelerisque nullam enim, viverra.
						At nec malesuada molestie viverra eu lobortis. Risus eu, odio feugiat adipiscing ac pellentesque nunc nec arcu.
					</p>
				</section>
			</div>
		</div>
	);
};

export default BlogPost;
