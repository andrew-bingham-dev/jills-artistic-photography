'use client'

import Section from '../section/Section'
import Image from 'next/image'
import CtaButton from '../cta-button/CtaButton'
import { motion } from 'framer-motion'

const containerVariant = {
   hidden: { opacity: 0 },
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2,
      },
   },
}

const itemVariant = {
   hidden: { scale: 0.5, opacity: 0 },
   show: {
      scale: 1,
      opacity: 1,
      transition: {
         duration: 0.2,
         ease: 'easeInOut',
      },
   },
}

const HeroSection = () => {
   return (
      <Section
         name="HeroSection"
         bgColor="my-light-blue"
         sectionClasses="overflow-y-clip max-h-[800px]"
         zIndex={2}
      >
         {/* Background circles */}
         <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="show"
         >
            <motion.div
               variants={itemVariant}
               className="absolute -right-[500px] -top-[200px] h-[1500px] w-[1500px] rounded-full bg-black/5"
            />
            <motion.div
               variants={itemVariant}
               className="absolute -left-[300px] -top-[200px] h-[800px] w-[800px] rounded-full bg-black/5"
            />
            <motion.div
               variants={itemVariant}
               className="absolute -bottom-[200px] -left-[300px] h-[640px] w-[640px] rounded-full bg-black/5"
            />
         </motion.div>

         {/* Hero text and image */}
         <div className="grid auto-rows-auto bg-my-light-blue pt-[88px] 600:grid-cols-2 800:min-h-[450px] 1000:min-h-[500px]">
            {/* Hero text */}
            <motion.div
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.3, delay: 0.4 }}
               className="order-2 flex flex-col justify-center gap-16x4x32 px-[4vw] py-[8vw] 600:order-1 600:pl-[4vw] 600:pr-0 1450:pl-0"
            >
               <h1 className="title-text-mark text-h1 leading-none text-my-dark-blue">
                  Capturing Moments That Last a Lifetime
               </h1>
               <motion.p
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                  className="text-h1-para font-light leading-tight text-my-dark-blue"
               >
                  Welcome to Jill&apos;s Artistic Photography Where Your
                  Treasured Moments Become Timeless Masterpieces You&apos;ll
                  Cherish Forever.
               </motion.p>
               <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
               >
                  <CtaButton />
               </motion.div>
            </motion.div>

            {/* Hero image */}
            <div className="relative order-1 600:order-2">
               <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
               >
                  <div className="h-[60vw] min-h-[250px] w-full overflow-clip 600:absolute 600:-top-[4vw] 600:aspect-square 600:h-[70vw] 600:min-h-[520px] 600:w-[70vw] 600:min-w-[520px] 600:rounded-full 1000:max-h-[700px] 1000:max-w-[700px] min-[1390px]:max-h-[850px] min-[1390px]:max-w-[850px]">
                     <Image
                        src={'/jpg/profile/profile_01.jpg'}
                        alt="Hero Image"
                        fill
                        style={{ objectFit: 'cover' }}
                        objectPosition="30% 10%"
                     />
                  </div>
               </motion.div>
            </div>
         </div>
      </Section>
   )
}

export default HeroSection
