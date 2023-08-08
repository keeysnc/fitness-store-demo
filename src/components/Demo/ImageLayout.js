import React from "react";
import { demoStyles } from "./demoStyles";

const images = [
	"https://plus.unsplash.com/premium_photo-1673458070037-8cc98a465c0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80",
	"https://plus.unsplash.com/premium_photo-1673458070037-8cc98a465c0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80",
	"https://plus.unsplash.com/premium_photo-1673458070037-8cc98a465c0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80",
	"https://plus.unsplash.com/premium_photo-1673458070037-8cc98a465c0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80",
];

const imageDimensionGenerator = (images) => {
	const mapImages = images.map((image, index) => {
		return <img key={index} alt="image" className="w-1/4" src={image} />;
	});
	return mapImages;
};

const ImageLayout = () => {
	return (
		<>
			<div className={demoStyles.img_layout.img_layout_container}>{imageDimensionGenerator(images)}</div>
		</>
	);
};

export default ImageLayout;
