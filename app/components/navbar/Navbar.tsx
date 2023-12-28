'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import NavLink from './NavLink'
import { Button } from '@/components/ui/button'
import Logo from '../logo/Logo'
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import '../../../styles/burger.css'

interface NavbarProps {
   bgColor?: string
}

const Navbar: React.FC<NavbarProps> = ({ bgColor = 'my-light-blue' }) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [isNavVisible, setIsNavVisible] = useState(true)
   const { scrollY } = useScroll()

   useMotionValueEvent(scrollY, 'change', (latest) => {
      if (latest < scrollY.getPrevious()) {
         setIsNavVisible(true)
      } else if (latest > scrollY.getPrevious()) {
         setIsNavVisible(false)
      }
   })

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }

   const navbar = { hidden: { y: -88 }, visible: { y: 0 } }

   return (
      <motion.div
         layout
         id="NavbarSection"
         className={`fixed top-0 z-nav w-full bg-${bgColor} px-[4vw] 1450:px-0`}
         initial={{ y: -88 }}
         animate={isNavVisible ? 'visible' : 'hidden'}
         transition={{ duration: 0.3, ease: 'easeInOut' }}
         variants={navbar}
      >
         {/* Desktop Navbar */}
         <nav className="mx-auto hidden max-w-7xl items-center justify-between bg-transparent py-6 700:flex">
            <motion.div
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.3, delay: 0.2 }}
            >
               <Logo type="dark" />
            </motion.div>
            <motion.ul
               initial={{ y: -88, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.3, delay: 0.2 }}
               className="flex "
            >
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
            </motion.ul>
            <motion.div
               initial={{ x: 100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.3, delay: 0.2 }}
            >
               <Button className="btn bg-my-dark-blue text-button text-my-light-beige shadow-xl hover:bg-my-light-beige hover:text-my-dark-blue">
                  Contact Me
               </Button>
            </motion.div>
         </nav>

         {/* Mobile Navbar */}
         <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center bg-transparent py-6 700:hidden">
            <motion.div
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.3, delay: 0.2 }}
               className="justify-self-start"
            >
               <Logo type="dark" />
            </motion.div>
            <motion.div
               initial={{ y: -100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.3, delay: 0.2 }}
            >
               <Button className="btn justify-self-center bg-my-dark-blue text-my-light-beige shadow-xl hover:bg-my-light-beige hover:text-my-dark-blue">
                  Contact Me
               </Button>
            </motion.div>
            <motion.div
               initial={{ x: 100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.3, delay: 0.2 }}
               className="justify-self-end"
            >
               <Burger onClick={toggleMenu} isOpen={isMenuOpen} />
            </motion.div>
         </nav>
      </motion.div>
   )
}

export default Navbar
