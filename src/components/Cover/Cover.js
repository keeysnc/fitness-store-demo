import React from "react";
import { coverStyles } from "./coverStyles";
import Scene from "../Scenes/Scene";
import ThreeGridLogos from "../Scenes/ThreeGridLogos";

const Cover = () => {
	const heroContent = [
		{
			id: 1,
			text: (
				<p>
					<b>
						<i>Movement </i>
					</b>
					is the key to unlocking your potential.{" "}
					<b>
						<i>Embrace it</i>{" "}
					</b>
					and watch yourself grow!
				</p>
			),
		},
		{ id: 2, text: "", label: "logo" },
		{ id: 3, text: "", class: "col-span-2" },
		{ id: 4, text: "", label: "logo" },
		{
			id: 5,
			text: (
				<>
					<h1>
						<b>
							Progress is built <i>one step, one rep, and one day</i> at a time.
						</b>
					</h1>
					<br />
					<br />
					<p className="textUnderline text-[16px]">Digital Lookbook Curation [2024]</p>
				</>
			),
		},
		{ id: 6, text: "", class: "col-span-3" },
		{
			id: 7,
			text: (
				<p>
					Every day you push yourself is a step closer to the{" "}
					<b>
						<i>stronger, healthier</i>
					</b>{" "}
					version of you. Embrace the challenge, enjoy the journey, and trust in the process—because the effort you put in today is shaping the
					<b>
						<i> champion you’ll be tomorrow</i>
					</b>
					.
				</p>
			),
		},
	];

	const heroGrid = heroContent.map((i) => {
		return (
			<div className={`p-10 text-white smallGridLines ${i.class && i.class}`}>
				{i.id === 1 && <p>{i.text}</p>}
				{i.id === 5 && i.text}
				{i.id === 7 && <p>{i.text}</p>}
			</div>
		);
	});

	return (
		<div className="gridCircle w-full h-screen relative">
			<div className={`${coverStyles.gridContainer} pt-[130px] gridLines relative grid-flow-* `}>{heroGrid}</div>
			<Scene />
		</div>
	);
};

export default Cover;
