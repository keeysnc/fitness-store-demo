import React from "react";
import Menu from "./Menu";
import { logo } from "../../assets/Icons";
import ThreeGridLogos from "../Scenes/ThreeGridLogos";

const Navigation = () => {
	return (
		<nav className="z-20 absolute w-full text-white">
			<div className="container flex flex-row items-center align-center justify-between pt-6 pb-6 mx-auto text-base">
				<div className="flex flex-row">
					<svg width="75" height="75" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
						{/* Inner Circle */}
						<circle cx="100" cy="100" r="70" stroke="white" strokeWidth="6" fill="none" />

						{/* Text Path Definition */}
						<defs>
							<path id="textPath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
						</defs>

						{/* Rotating Text */}
						<text fontSize="30" fontFamily="Bebas" fill="white">
							<textPath
								href="#textPath"
								startOffset="0%"
								style={{
									animation: "rotateText 8s linear infinite",
								}}
							>
								FORWARD MOTION
							</textPath>
						</text>

						<style>
							{`
        text {
          transform-origin: 100px 100px; /* Center the rotation */
          animation: rotateText 8s linear infinite;
        }

        @keyframes rotateText {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
						</style>
					</svg>
				</div>
				<Menu />
			</div>
		</nav>
	);
};

export default Navigation;
