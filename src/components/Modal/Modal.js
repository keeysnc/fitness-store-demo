"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import Pagination from "../Pagination/Pagination";
import HalfLayout from "../Layouts/HalfLayout";
import { Link } from "react-router-dom";
import { exitBtn } from "../../assets/Icons";

export default function Modal({ item }) {
	const [open, setOpen] = useState(true);

	const returnToHome = () => {
		console.log("test");
	};

	return (
		<>
			<Dialog open={open} onClose={setOpen} className="relative z-10">
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
				/>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<DialogPanel
							transition
							className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
						>
							<Pagination category={"test category"} name={"test product"} />
							<div className="lg:flex lg:flex-row pb-15">
								<HalfLayout>
									<div className="product-details-img">
										<img className="object-cover object-center w-full h-full" alt="detail-img" src={"#"} />
									</div>
								</HalfLayout>
								<HalfLayout>
									<div className="product-details px-25">
										<Link to="/" onClick={returnToHome} className="cursor-pointer">
											{exitBtn()}
										</Link>
										<h4 className="text-h4">{"test product"}</h4>
										<h4 className="text-h4">{"test price"}</h4>

										<p className="pt-4">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu tempus quam, id commodo neque. Phasellus justo quam, tempus
											vitae ligula a, consequat blandit turpis. Vivamus placerat dolor nulla, sit amet malesuada neque dignissim sit amet. Proin
											ultricies, velit non condimentum elementum
										</p>
										<br />
										<form>
											<p className="pt-4">
												<span className="font-bold pr-2">Quantity:</span>
												<input type="number" pattern="\d*" maxlength="4" placeholder="0"></input>
											</p>
											<button className="px-8 mt-4 py-4">Add to Bag</button>
										</form>
									</div>
								</HalfLayout>
							</div>
							<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
								<button
									type="button"
									onClick={() => setOpen(false)}
									className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
								>
									Deactivate
								</button>
								<button
									type="button"
									data-autofocus
									onClick={() => setOpen(false)}
									className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
								>
									Cancel
								</button>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</>
	);
}
