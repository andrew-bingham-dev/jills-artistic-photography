import Image from "next/image";
import Section from "../section/Section";
import { Button } from "@/components/ui/button";

export default function Navbar() {
	return (
		<Section>
			<nav className="bg-my-light-blue flex items-center justify-between py-6">
				<Image src="/svg/logo.svg" alt="Logo" width={136} height={37} />
				<ul className="flex gap-8">
					<li>Home</li>
					<li>Portfolio</li>
					<li>About Me</li>
					<li>Blog</li>
				</ul>
				<Button className="px-4 py-2 bg-my-dark-blue text-my-light-beige rounded-2xl">
					Contact Me
				</Button>
			</nav>
		</Section>
	);
}
