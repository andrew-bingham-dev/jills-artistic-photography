"use client";

import { useState } from "react";
import NavLink from "./NavLink";
import { Button } from "@/components/ui/button";
import Logo from "../logo/Logo";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import "../../../styles/burger.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      id="NavbarSection"
      className="bg-my-light-blue sticky z-nav top-0 px-0 max-[1440px]:px-[4vw]"
    >
      {/* Desktop Navbar */}
      <nav className="bg-transparent md:flex items-center justify-between py-6 max-w-7xl mx-auto hidden">
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
      <nav className="bg-transparent md:hidden grid grid-cols-3 items-center py-6 max-w-7xl mx-auto">
        <div className="justify-self-start">
          <Logo type="dark" />
        </div>
        <Button className="btn bg-my-dark-blue text-my-light-beige hover:bg-my-light-beige hover:text-my-dark-blue shadow-xl justify-self-center">
          Contact Me
        </Button>
        <div className="justify-self-end">
          <Burger onClick={toggleMenu} isOpen={isMenuOpen} />
        </div>
      </nav>
    </div>
  );
}
