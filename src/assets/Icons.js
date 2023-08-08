export const exitBtn = () => {
	return (
		<svg className="absolute right-32" width="72px" height="72px" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
			<path d="m215.8 131.86-13.918 13.953 134.19 134.19-125.54 125.54-6.9453 6.9727 13.918 13.918 6.9453-6.9727 125.54-125.52 134.21 134.21 13.918-13.918-134.21-134.21 125.55-125.54 6.9453-6.9805-13.918-13.918-6.9727 6.9805-125.54 125.54-127.25-127.25z" />
		</svg>
	);
};

export const bannerExitBtn = () => {
	return (
		<svg className="absolute right-32" width="32px" height="32px" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
			<path d="m215.8 131.86-13.918 13.953 134.19 134.19-125.54 125.54-6.9453 6.9727 13.918 13.918 6.9453-6.9727 125.54-125.52 134.21 134.21 13.918-13.918-134.21-134.21 125.55-125.54 6.9453-6.9805-13.918-13.918-6.9727 6.9805-125.54 125.54-127.25-127.25z" />
		</svg>
	);
};

export const menuArrow = () => {
	return (
		<svg width="20" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.1726 15.1816L29.4461 0.900628C29.6511 0.694776 29.6511 0.360481 29.4461 0.154444C29.2465 -0.0452137 28.9004 -0.0452137 28.7026 0.154444L14.7996 14.0627L0.899244 0.154444C0.799931 0.0559549 0.666134 0 0.526147 0C0.38616 0 0.252362 0.0559549 0.153049 0.154444C-0.0511538 0.360296 -0.0511538 0.694591 0.153875 0.900628L14.4264 15.1805C14.6281 15.3802 14.9731 15.3812 15.1728 15.1815L15.1726 15.1816Z"
				fill="black"
			/>
		</svg>
	);
};

export const dot = () => {
	return (
		<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="3.5" cy="3.5" r="3.5" fill="black" />
		</svg>
	);
};

export const productColor = (color) => {
	return (
		<svg className="mr-2 relative top-1 productColor" width="15" height="15" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="3.5" cy="3.5" r="3.5" fill={color} />
		</svg>
	);
};
