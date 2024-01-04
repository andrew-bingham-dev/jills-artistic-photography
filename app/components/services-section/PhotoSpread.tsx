'use client'

import Image from 'next/image'
import { motion, useAnimate, useInView } from 'framer-motion'

import RadialGradient from '../radial-gradient/RadialGradient'
import { useEffect } from 'react'

const photoVariants = {
   hover: { scale: 1.1, rotate: '0deg', zIndex: 2 },
}

const PhotoSpread = () => {
   const [scope, animate] = useAnimate()
   const isInView = useInView(scope, {
      amount: 'some',
      margin: '0px 0px -20% 0px',
      once: true,
   })

   useEffect(() => {
      if (isInView) {
         animatePhotos()
      }

      async function animatePhotos() {
         await animate(
            '#photo1',
            {
               y: 0,
               opacity: 1,
               scale: 1,
               rotate: '12deg',
            },
            { duration: 0.1 },
         )
         await animate(
            '#photo2',
            {
               y: 0,
               opacity: 1,
               scale: 1,
               rotate: '-2deg',
            },
            { duration: 0.1 },
         )
         await animate(
            '#photo3',
            {
               y: 0,
               opacity: 1,
               scale: 1,
               rotate: '6deg',
            },
            { duration: 0.1 },
         )
         await animate(
            '#photo4',
            {
               y: 0,
               opacity: 1,
               scale: 1,
               rotate: '12deg',
            },
            { duration: 0.1 },
         )
         await animate(
            '#photo5',
            {
               y: 0,
               opacity: 1,
               scale: 1,
               rotate: '25deg',
            },
            { duration: 0.1 },
         )
         await animate(
            '#photo6',
            {
               y: 0,
               opacity: 1,
               scale: 1,
               rotate: '-6deg',
            },
            { duration: 0.1 },
         )
         await animate(
            '#photo7',
            {
               y: 0,
               opacity: 1,
               scale: 1,
               rotate: '9deg',
            },
            { duration: 0.1 },
         )
      }
   }, [isInView, animate])

   return (
      <div className="relative z-[2] mt-[12vw] aspect-[5/3.5] w-photo-spread">
         {/* gradient circle */}

         <RadialGradient left="1" top="40" />
         <RadialGradient left="90" top="170" />
         {/* w:416px h:234px - w:29% */}
         <motion.div ref={scope}>
            <motion.div
               id="photo1"
               variants={photoVariants}
               initial={{ rotate: '12deg', opacity: 0, y: -100, scale: 1 }}
               whileHover="hover"
               className="absolute left-[4%] top-[2%] aspect-[3/2] w-[29%] rotate-[12deg] overflow-clip shadow-md hover:shadow-2xl"
            >
               <Image
                  src={'/jpg/portrait/portrait_01.jpg'}
                  alt="photo example 1"
                  objectFit="cover"
                  layout="fill"
                  objectPosition="center 20%"
               />
            </motion.div>

            {/* w:416px h:415px - w:29% */}
            <motion.div
               id="photo2"
               variants={photoVariants}
               initial={{ rotate: '-2deg', opacity: 0, y: -100, scale: 1 }}
               whileHover="hover"
               className="absolute left-[24%] top-[5%] aspect-square w-[29%] rotate-[-2deg] shadow-md hover:shadow-2xl"
            >
               <Image
                  src={'/jpg/portrait/portrait_05.jpg'}
                  alt="photo example 2"
                  objectFit="cover"
                  layout="fill"
                  objectPosition="center 80%"
               />
            </motion.div>

            {/* w:416px h:234px - w:29% */}
            <motion.div
               id="photo3"
               variants={photoVariants}
               initial={{ rotate: '6deg', opacity: 0, y: -100, scale: 1 }}
               whileHover="hover"
               className="absolute right-[6%] top-[9%] aspect-[2/1] w-[29%] rotate-[6deg] shadow-md hover:shadow-2xl"
            >
               <Image
                  src={'/jpg/portrait/portrait_02.jpg'}
                  alt="photo example 3"
                  objectFit="cover"
                  layout="fill"
                  objectPosition="center 55%"
               />
            </motion.div>

            {/* w:416px h:416px - w:29% */}
            <motion.div
               id="photo4"
               variants={photoVariants}
               initial={{ rotate: '12deg', opacity: 0, y: -100, scale: 1 }}
               whileHover="hover"
               className="absolute left-[5%] top-[24%] aspect-square w-[29%] rotate-[12deg] shadow-md hover:shadow-2xl"
            >
               <Image
                  src={'/jpg/nature/nature_01.jpg'}
                  alt="photo example 4"
                  objectFit="cover"
                  layout="fill"
                  objectPosition="center 20%"
               />
            </motion.div>

            {/* w:416px h:416px - w:29% */}
            <motion.div
               id="photo5"
               variants={photoVariants}
               initial={{ rotate: '25deg', opacity: 0, y: -100, scale: 1 }}
               whileHover="hover"
               className="absolute left-[43%] top-[23%] aspect-square w-[29%] rotate-[25deg] shadow-md hover:shadow-2xl"
            >
               <Image
                  src={'/jpg/nature/nature_05.jpg'}
                  alt="photo example 5"
                  objectFit="cover"
                  layout="fill"
                  objectPosition="center 20%"
               />
            </motion.div>

            {/* w:515px h:515px - w40% */}
            <motion.div
               id="photo6"
               variants={photoVariants}
               initial={{ rotate: '-6deg', opacity: 0, y: -100, scale: 1 }}
               whileHover="hover"
               className="absolute left-[15%] top-[42%] aspect-square w-[35%] rotate-[-6deg] shadow-md hover:shadow-2xl"
            >
               <Image
                  src={'/jpg/wedding/wedding_02.jpg'}
                  alt="photo example 6"
                  objectFit="cover"
                  layout="fill"
                  objectPosition="center 20%"
               />
            </motion.div>

            {/* w:712px h:712px - w:29% */}

            <motion.div
               id="photo7"
               variants={photoVariants}
               initial={{ rotate: '9deg', opacity: 0, y: -100, scale: 1 }}
               whileHover="hover"
               className="absolute left-[50%] top-[45%] aspect-square w-[49%] rotate-[9deg] shadow-md hover:shadow-2xl"
            >
               <Image
                  src={'/jpg/wedding/wedding_01.jpg'}
                  alt="photo example 7"
                  objectFit="cover"
                  layout="fill"
                  objectPosition="center 20%"
               />
            </motion.div>
         </motion.div>
      </div>
   )
}

export default PhotoSpread
