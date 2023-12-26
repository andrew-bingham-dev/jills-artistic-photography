'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import RadialGradient from '../radial-gradient/RadialGradient'

const staggerContainerVariants = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2,
         when: 'beforeChildren',
      },
   },
}

const staggerItemVariants = {
   initial: {
      opacity: 0,
      scale: 0.8,
   },
   animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
      viewport: {
         once: true,
      },
   },
}

const PhotoSpread = () => {
   return (
      // TODO: Fix the gradient circle so that it's centered on the image
      <div className="relative mt-[12vw] aspect-[5/3.5] w-photo-spread">
         {/* gradient circle */}

         <RadialGradient left="1" top="40" />
         <RadialGradient left="90" top="170" />
         {/* w:416px h:234px - w:29% */}
         <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
         >
            <motion.div variants={staggerItemVariants}>
               <motion.div
                  initial={{ rotate: '0deg' }}
                  animate={{ rotate: '12deg', top: '2%', left: '4%' }}
                  whileHover={{
                     scale: 1.1,
                     rotate: '0deg',
                     zIndex: 6,
                  }}
                  className="absolute left-[4%] top-[2%] z-image aspect-[3/2] w-[29%] overflow-clip shadow-md"
               >
                  <Image
                     src={'/jpg/portrait/portrait_01.jpg'}
                     alt="photo example 1"
                     objectFit="cover"
                     layout="fill"
                     objectPosition="center 20%"
                  />
               </motion.div>
            </motion.div>

            {/* w:416px h:415px - w:29% */}
            <motion.div variants={staggerItemVariants}>
               <motion.div
                  initial={{ rotate: '0deg' }}
                  animate={{ rotate: '-2deg' }}
                  whileHover={{
                     scale: 1.1,
                     rotate: '0deg',
                     zIndex: 6,
                  }}
                  className="absolute left-[24%] top-[5%] z-image aspect-square w-[29%] shadow-md"
               >
                  <Image
                     src={'/jpg/portrait/portrait_05.jpg'}
                     alt="photo example 2"
                     objectFit="cover"
                     layout="fill"
                     objectPosition="center 80%"
                  />
               </motion.div>
            </motion.div>

            {/* w:416px h:234px - w:29% */}
            <motion.div variants={staggerItemVariants}>
               <motion.div
                  initial={{ rotate: '0deg' }}
                  animate={{ rotate: '6deg' }}
                  whileHover={{
                     scale: 1.1,
                     rotate: '0deg',
                     zIndex: 6,
                  }}
                  className="absolute right-[6%] top-[9%] z-image aspect-[2/1] w-[29%] shadow-md"
               >
                  <Image
                     src={'/jpg/portrait/portrait_02.jpg'}
                     alt="photo example 3"
                     objectFit="cover"
                     layout="fill"
                     objectPosition="center 55%"
                  />
               </motion.div>
            </motion.div>

            {/* w:416px h:416px - w:29% */}
            <motion.div variants={staggerItemVariants}>
               <motion.div
                  initial={{ rotate: '0deg' }}
                  animate={{ rotate: '12deg' }}
                  whileHover={{
                     scale: 1.1,
                     rotate: '0deg',
                     zIndex: 6,
                  }}
                  className="absolute left-[5%] top-[24%] z-image aspect-square w-[29%] shadow-md"
               >
                  <Image
                     src={'/jpg/nature/nature_01.jpg'}
                     alt="photo example 4"
                     objectFit="cover"
                     layout="fill"
                     objectPosition="center 20%"
                  />
               </motion.div>
            </motion.div>

            {/* w:416px h:416px - w:29% */}
            <motion.div variants={staggerItemVariants}>
               <motion.div
                  initial={{ rotate: '0deg' }}
                  animate={{ rotate: '25deg' }}
                  whileHover={{
                     scale: 1.1,
                     rotate: '0deg',
                     zIndex: 6,
                  }}
                  className="absolute left-[43%] top-[23%] z-image aspect-square w-[29%] shadow-md"
               >
                  <Image
                     src={'/jpg/nature/nature_05.jpg'}
                     alt="photo example 5"
                     objectFit="cover"
                     layout="fill"
                     objectPosition="center 20%"
                  />
               </motion.div>
            </motion.div>

            {/* w:515px h:515px - w40% */}
            <motion.div variants={staggerItemVariants}>
               <motion.div
                  initial={{ rotate: '0deg' }}
                  animate={{ rotate: '-6deg' }}
                  whileHover={{
                     scale: 1.1,
                     rotate: '0deg',
                     zIndex: 6,
                  }}
                  className="absolute left-[15%] top-[42%] z-image aspect-square w-[35%] shadow-md"
               >
                  <Image
                     src={'/jpg/wedding/wedding_02.jpg'}
                     alt="photo example 6"
                     objectFit="cover"
                     layout="fill"
                     objectPosition="center 20%"
                  />
               </motion.div>
            </motion.div>

            {/* w:712px h:712px - w:29% */}

            <motion.div variants={staggerItemVariants}>
               <motion.div
                  initial={{ rotate: '0deg' }}
                  animate={{
                     rotate: '9deg',
                  }}
                  whileHover={{
                     scale: 1.1,
                     rotate: '0deg',
                     zIndex: 6,
                  }}
                  className="absolute left-[50%] top-[45%] z-image aspect-square w-[49%] shadow-md"
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
         </motion.div>
      </div>
   )
}

export default PhotoSpread
