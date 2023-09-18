import React from "react";
import { Link } from "react-router-dom";
import HalfLayout from "../Layouts/HalfLayout";
import { blogCardStyles } from "./blogCardStyles";

const BlogCard = ({ ...props }) => {
	return (
		<div className={blogCardStyles.blogcard_container}>
			<HalfLayout>
				<p>{props.category}</p>
				<Link to={`/blog/${props.path}`}>
					<p className={blogCardStyles.blogcard_title}>{props.title}</p>
				</Link>
				<p>{props.caption}</p>
			</HalfLayout>
			<HalfLayout>
				<img alt={props.title} className={blogCardStyles.blogcard_img} src={props.imgUrl}></img>
			</HalfLayout>
		</div>
	);
};

export default BlogCard;
