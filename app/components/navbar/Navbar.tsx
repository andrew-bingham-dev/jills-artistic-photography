"use client";

import { useState } from "react";
import NavLink from "./NavLink";
import { Button } from "@/components/ui/button";
import Logo from "../logo/Logo";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import "../../../styles/custom.css";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div id="NavbarSection" className="bg-my-light-blue sticky z-nav top-0">
			{/* Desktop Navbar */}
			<nav className="bg-transparent md:flex items-center justify-between py-6 max-w-7xl mx-auto responsive-content-padding hidden">
				<Logo type="dark" />
				<ul className="flex ">
					<li>
						<NavLink label="Home" path="/" />
					</li>
					<li>
						<NavLink label="Portfolio" path="/portfolio" />
					</li>
					<li>
						<NavLink label="About Me" path="/about" />
					</li>
					<li>
						<NavLink label="Blog" path="/blog" />
					</li>
				</ul>
				<Button className="btn bg-my-dark-blue text-my-light-beige hover:bg-my-light-beige hover:text-my-dark-blue shadow-xl">
					Contact Me
				</Button>
			</nav>

			{/* Mobile Navbar */}
			<nav className="bg-transparent md:hidden flex items-center justify-between py-6 max-w-7xl mx-auto responsive-content-padding">
				<Logo type="dark" />
				<Button className="btn bg-my-dark-blue text-my-light-beige hover:bg-my-light-beige hover:text-my-dark-blue shadow-xl">
					Contact Me
				</Button>
				<Burger onClick={toggleMenu} isOpen={isMenuOpen} />
			</nav>
		</div>
	);
}
