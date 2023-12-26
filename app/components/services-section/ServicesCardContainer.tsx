'use client'

import ServicesCard from './ServicesCard'
import weddingImage04 from '../../../public/jpg/wedding/wedding_04.jpg'
import portraitImage01 from '../../../public/jpg/portrait/portrait_01.jpg'
import natureImage04 from '../../../public/jpg/nature/nature_04.jpg'
import { motion } from 'framer-motion'

const ServicesCardContainer = () => {
   return (
      <div className="grid auto-rows-fr gap-16x4x32 600:auto-rows-auto 600:grid-cols-2 900:auto-rows-max 900:grid-cols-3">
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
               opacity: 1,
               y: 0,
               transition: { duration: 0.5, delay: 0.2 },
            }}
            viewport={{ once: true }}
            className="600:col-span-2 900:col-span-1"
         >
            <ServicesCard
               brow="Moments"
               heading="Wedding Photography"
               paragraph="Capture the beauty and magic of your special day."
               image={weddingImage04}
               altImageDescription="Wedding photo"
               imagePosition="center 65%"
            />
         </motion.div>
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
               opacity: 1,
               y: 0,
               transition: { duration: 0.5, delay: 0.4 },
            }}
            viewport={{ once: true }}
         >
            <ServicesCard
               brow="Expressions"
               heading="Portrait Photography"
               paragraph="Preserve your unique personality in stunning portraits."
               image={portraitImage01}
               altImageDescription="Portrait photo"
            />
         </motion.div>
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
               opacity: 1,
               y: 0,
               transition: { duration: 0.5, delay: 0.6 },
            }}
            viewport={{ once: true }}
         >
            <ServicesCard
               brow="Life"
               heading="Nature Photography"
               paragraph="Discover the beauty of the natural world through captivating photographs."
               image={natureImage04}
               altImageDescription="Nature photo"
            />
         </motion.div>
      </div>
   )
}

export default ServicesCardContainer
