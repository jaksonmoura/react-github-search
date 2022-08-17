import "./App.css";
import Home from "./pages/Home";
import History from "./pages/History";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="container">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Home />} />
					<Route path="/history" element={<History />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
