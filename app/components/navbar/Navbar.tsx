"use client";

import NavLink from "./NavLink";
import { Button } from "@/components/ui/button";
import Logo from "../logo/Logo";

export default function Navbar() {
	return (
		<div id="NavbarSection" className="bg-my-light-blue sticky z-nav top-0">
			<nav className="bg-transparent flex items-center justify-between py-6 max-w-7xl mx-auto">
				<Logo type="dark" />
				<ul className="flex">
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
		</div>
	);
}
