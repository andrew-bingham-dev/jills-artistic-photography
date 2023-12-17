"use client";

import Image from "next/image";
import Section from "../section/Section";

import NavLink from "./NavLink";
import { Button } from "@/components/ui/button";

export default function Navbar() {
	return (
		<Section
			name="NavbarSection"
			bgColor="my-light-blue"
			sectionClasses="sticky z-nav top-0"
		>
			<nav className="bg-transparent flex items-center justify-between py-6 ">
				<Image src="/svg/logo.svg" alt="Logo" width={136} height={37} />
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
		</Section>
	);
}
