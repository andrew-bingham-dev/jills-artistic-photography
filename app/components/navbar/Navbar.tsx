import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="bg-red-500 flex items-center">
			<Image src="/svg/logo.svg" alt="Logo" width={136} height={37} />
			<ul className="flex">
				<li>Home</li>
				<li>Portfolio</li>
				<li>About Me</li>
				<li>Blog</li>
			</ul>
		</nav>
	);
}
