import Image from "next/image";
import Section from "../section/Section";

export default function Navbar() {
	return (
		<Section>
			<nav className="bg-red-500 flex items-center justify-between">
				<Image src="/svg/logo.svg" alt="Logo" width={136} height={37} />
				<ul className="flex gap-8">
					<li>Home</li>
					<li>Portfolio</li>
					<li>About Me</li>
					<li>Blog</li>
				</ul>
			</nav>
		</Section>
	);
}
