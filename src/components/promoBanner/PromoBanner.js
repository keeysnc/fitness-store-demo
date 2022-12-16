import React from "react";
import HorizontalRule from "../HorizontalRule/HorizontalRule";

const PromoBanner = () => {
	return (
		<div>
			<wrapper className="container bg-white flex flex-row justify-between pt-6  mx-auto text-base">
				<div className="flex flex-row">
					<p>
						<span className="font-bold">BLACK FRIDAY SALE!</span> GET 10% OFF ALL PRODUCTS.{" "}
						<span className="underline underline-offset-8 font-bold">SHOP NOW</span>
					</p>
				</div>
			</wrapper>
			<HorizontalRule />
		</div>
	);
};

export default PromoBanner;
