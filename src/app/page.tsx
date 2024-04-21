import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LandingPage from "./LandingPage";

export default function Home() {
	return (
		<>
			<Header />
			<main className="min-h-screen">
				<LandingPage />
			</main>
			<Footer />
		</>
	);
}
