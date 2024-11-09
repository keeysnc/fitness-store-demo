// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
			<div className="bg-white p-6 w-128 max-w-full relative" onClick={(e) => e.stopPropagation()}>
				<button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={onClose}>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
