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
         bgColor="my-about-gradient"
         sectionClasses="overflow-y-clip max-h-[800px]"
      >
         {/* Hero text and image */}
         <div className="bg-my-about-gradient grid auto-rows-auto pt-[88px] 600:grid-cols-2 800:min-h-[450px] 1000:min-h-[500px]">
            {/* Hero text */}
            <motion.div
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.3, delay: 0.4 }}
               className="z-10 order-2 flex flex-col justify-center gap-16x4x32 px-[4vw] py-[8vw] 600:order-1 600:pl-[4vw] 600:pr-0 1450:pl-0"
            >
               <h1 className="title-text-mark text-h1 leading-none text-my-dark-blue">
                  Hi, I&apos;m Jill
               </h1>
               <motion.p
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                  className="text-h1-para font-light leading-tight text-my-dark-blue"
               >
                  I’m not just a photographer; I’m a storyteller with a lens. My
                  mission? To capture those irreplaceable moments and turn them
                  into memories you&apos;ll cherish. With an artistic eye and
                  meticulous attention to detail, I’ll craft the photographs to
                  tell your story.
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
            <div className="relative z-[2] order-1 600:order-2">
               <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
               >
                  <div className="h-[60vw] min-h-[250px] w-full overflow-clip 600:absolute 600:-top-[4vw] 600:aspect-square 600:h-[70vw] 600:min-h-[520px] 600:w-[70vw] 600:min-w-[520px] 600:rounded-full 1000:max-h-[700px] 1000:max-w-[700px] min-[1390px]:max-h-[850px] min-[1390px]:max-w-[850px]">
                     <Image
                        src={'/jpg/profile/profile_02.jpg'}
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
