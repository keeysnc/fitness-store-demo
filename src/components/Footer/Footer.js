import React from "react";
import { createPromoBanner } from "../../utils/utils";
import { footerStyles } from "./footerStyles";

const Footer = () => {
	const promoText = "FREE SHIPPING over $250";

	return (
		<>
			<div>
				<div>{createPromoBanner(promoText)}</div>
				<div className={footerStyles.footer_bg}>
					<div className={footerStyles.footer_container}>
						<ul>
							<li className="pb-2">Payment Methods</li>
							<li className="pb-2">Shipping and Delivery</li>
							<li className="pb-2">Return & Refund</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
