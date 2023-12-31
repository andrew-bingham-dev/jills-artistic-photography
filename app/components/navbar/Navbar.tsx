'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import NavLink from './NavLink'
import { Button } from '@/components/ui/button'
import Logo from '../logo/Logo'
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import '../../../styles/burger.css'
import Link from 'next/link'

const mobileMenuVariants = {
   hidden: { opacity: 0, height: 0 },
   visible: { opacity: 1, height: 250 },
}

const mobileMenuLinkVariants = {
   hidden: { opacity: 0, y: -100 },
   visible: { opacity: 1, y: 0 },
}

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
         className={`fixed top-0 z-[100] w-full bg-${bgColor} px-[4vw] 1450:px-0`}
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
                  <NavLink label="About Me" path="/about-me" />
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
               <Button className="btn select-none bg-my-dark-blue text-button text-my-light-beige shadow-xl hover:bg-my-light-beige hover:text-my-dark-blue">
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
               className="justify-self-center"
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

            {/* Mobile Menu */}
            {isMenuOpen && (
               <motion.div
                  layout
                  variants={mobileMenuVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3, staggerChildren: 0.3 }}
                  className={`absolute left-0 right-0 top-[88px] flex h-[250px] w-full flex-col bg-${bgColor} gap-y-8 p-12 shadow-xl`}
               >
                  <motion.div
                     variants={mobileMenuLinkVariants}
                     className="w-full"
                  >
                     <Link
                        className="p-4 text-2xl transition duration-300 hover:text-my-light-beige active:text-my-light-beige"
                        href="/"
                     >
                        Home
                     </Link>
                  </motion.div>

                  <motion.div variants={mobileMenuLinkVariants}>
                     <Link
                        className="p-4 text-2xl transition duration-300 hover:text-my-light-beige active:text-my-light-beige"
                        href="/portfolio"
                     >
                        Portfolio
                     </Link>
                  </motion.div>
                  <motion.div variants={mobileMenuLinkVariants}>
                     <Link
                        className="p-4 text-2xl transition duration-300 hover:text-my-light-beige active:text-my-light-beige"
                        href="/about-me"
                     >
                        About Me
                     </Link>
                  </motion.div>
               </motion.div>
            )}
         </nav>
      </motion.div>
   )
}

export default Navbar
