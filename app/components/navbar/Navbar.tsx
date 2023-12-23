'use client'

import { useState } from 'react'
import NavLink from './NavLink'
import { Button } from '@/components/ui/button'
import Logo from '../logo/Logo'
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import '../../../styles/burger.css'

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }

   return (
      <div
         id="NavbarSection"
         className="1450:px-0 sticky top-0 z-nav bg-my-light-blue px-[4vw]"
      >
         {/* Desktop Navbar */}
         <nav className="700:flex mx-auto hidden max-w-7xl items-center justify-between bg-transparent py-6">
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
            <Button className="btn bg-my-dark-blue text-my-light-beige shadow-xl hover:bg-my-light-beige hover:text-my-dark-blue">
               Contact Me
            </Button>
         </nav>

         {/* Mobile Navbar */}
         <nav className="700:hidden mx-auto grid max-w-7xl grid-cols-3 items-center bg-transparent py-6">
            <div className="justify-self-start">
               <Logo type="dark" />
            </div>
            <Button className="btn justify-self-center bg-my-dark-blue text-my-light-beige shadow-xl hover:bg-my-light-beige hover:text-my-dark-blue">
               Contact Me
            </Button>
            <div className="justify-self-end">
               <Burger onClick={toggleMenu} isOpen={isMenuOpen} />
            </div>
         </nav>
      </div>
   )
}
