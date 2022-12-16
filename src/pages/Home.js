import React from "react";

const Home = () => {
	return (
		<div>
			<div className="container pt-12 mx-auto left-sidebar-layout grid grid-cols-4">
				<div className="sidebar">
					<h2 className="sidebar-title text-h1 ">SHOP</h2>
					<p className="font-bold pb-6 pt-6">BROWSE BY:</p>
					<ul className="space-y-2">
						<li>
							<a href="#">All</a>
						</li>
						<li>
							<a href="#">Tops</a>
						</li>
						<li>
							<a href="#">Bottoms</a>
						</li>
						<li>
							<a href="#">Jackets</a>
						</li>
						<li>
							<a href="#">Hats</a>
						</li>
					</ul>
				</div>
				<div className="product-display grid grid-cols-12">
					<div>09</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
