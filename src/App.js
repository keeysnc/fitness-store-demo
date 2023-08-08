import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Demo from "./pages/Demo";
import BlogPost from "./pages/BlogPost";
import Blog from "./pages/Blog";
import PaymentMethods from "./pages/PaymentMethods";
import Returns from "./pages/Returns";
import Shipping from "./pages/Shipping";

function App() {
	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/product/:id" element={<ProductDetails />} />
					<Route path="/demo" element={<Demo />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/:id" element={<BlogPost />} />
					<Route path="/bag" element={<Checkout />} />
					<Route path="/returns" element={<Returns />} />
					<Route path="/payment-methods" element={<PaymentMethods />} />
					<Route path="/shipping" element={<Shipping />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	);
}

export default App;
