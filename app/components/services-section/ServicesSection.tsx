'use client'

import Spacer from '../Spacer'
import BrowHeadingParagraph from '../brow-heading-paragraph/BrowHeadingParagraph'
import Section from '../section/Section'
import ServicesCardContainer from './ServicesCardContainer'
import PhotoSpread from './PhotoSpread'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ServicesSection = () => {
   const ref = useRef(null)
   const isInView = useInView(ref, {
      margin: '0px 0px -100px 0px',
      amount: 'all',
      once: true,
   })

   const variants = {
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      hidden: { opacity: 0, y: 50, transition: { duration: 0.5 } },
   }

   return (
      <Section name="ServicesSection" bgColor="my-medium-blue">
         <div className="pt-[8vw]">
            <div className="px-[4vw] 1450:px-0">
               <motion.div
                  ref={ref}
                  variants={variants}
                  animate={isInView ? 'visible' : 'hidden'}
               >
                  <BrowHeadingParagraph
                     color="my-light-beige"
                     brow="Capture"
                     heading="Preserve Your Precious Moments"
                     paragraph="Professional photography services for weddings, portraits, and more."
                  />
               </motion.div>
               <Spacer size="large" />
               <ServicesCardContainer />
            </div>
            <PhotoSpread />
         </div>
      </Section>
   )
}

export default ServicesSection
