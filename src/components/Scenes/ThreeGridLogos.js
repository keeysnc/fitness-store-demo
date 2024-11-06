import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader, TextGeometry } from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js";

const ThreeGridLogos = ({ id }) => {
	const mountRef = useRef(null);

	useEffect(() => {
		// Basic setup
		let torus, textMesh;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, 100 / 75, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setClearColor(0x000000, 0);
		renderer.setSize(100, 75);
		mountRef.current.appendChild(renderer.domElement); // Append the renderer to the DOM

		// set lighting
		const light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
		scene.add(light);

		// Load font and create text
		const loader = new FontLoader();
		loader.load("https://cdn.rawgit.com/mrdoob/three.js/master/examples/fonts/gentilis_bold.typeface.json", (font) => {
			const textGeometry = new TextGeometry("F O C U S", {
				font: font,
				size: 0.8,
				height: 0.2,
				curveSegments: 12,
				bevelEnabled: true,
				bevelThickness: 0.1,
				bevelSize: 0.05,
				bevelOffset: 0,
				bevelSegments: 1,
			});
			textGeometry.center();
			const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
			textMesh = new THREE.Mesh(textGeometry, textMaterial);

			scene.add(textMesh);
			// Position and add text to the scene
			textMesh.position.set(0.05, -0.1, 0); // Center the text
		});

		const geometry = new THREE.TorusGeometry(3, 0.224, 6, 30);
		const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
		torus = new THREE.Mesh(geometry, material);
		geometry.center();

		scene.add(torus);

		// Set camera position
		camera.position.z = 5.5;

		// Animation loop
		const animate = () => {
			setTimeout(() => {
				torus.rotation.y += 0.03;
				textMesh.rotation.reorder("YXZ");
				textMesh.rotation.y += 0.03;
			}, 2000);
			requestAnimationFrame(animate);

			renderer.render(scene, camera);
		};
		animate();

		// Clean up on component unmount
		return () => {
			// mountRef.current.removeChild(renderer.domElement); // Clean up renderer
		};
	}, []);
	return <div ref={mountRef} />; // Render the ref container for the Three.js scene
};

export default ThreeGridLogos;
