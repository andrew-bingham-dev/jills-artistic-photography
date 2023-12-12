import HeroSection from "./components/hero-section/HeroSection";
import Navbar from "./components/navbar/Navbar";
import ServicesSection from "./components/services-section/ServicesSection";

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<ServicesSection />
		</main>
	);
}
