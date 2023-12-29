'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import RiseAndAppear from '../motions/RiseAndAppear'

interface AttributeProps {
   iconUrl: string
   heading: string
   description: string[]
   animDelay?: number
}

const Attribute: React.FC<AttributeProps> = ({
   iconUrl,
   heading,
   description,
   animDelay,
}) => {
   return (
      <div className="flex flex-col gap-4">
         <motion.div
            className="h-[64px] w-[64px]"
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 180 }}
            transition={{
               ease: 'linear',
               duration: 1,
               delay: animDelay ? animDelay : 0,
            }}
            viewport={{ once: true }}
         >
            <Image src={iconUrl} alt="background icon" width={64} height={64} />
         </motion.div>
         <RiseAndAppear animDelay={animDelay}>
            <h3 className="font-semibold">{heading}</h3>
         </RiseAndAppear>
         <RiseAndAppear animDelay={animDelay}>
            <p>
               {description.map((desc, index) => (
                  <span key={index}>{desc}</span>
               ))}
            </p>
         </RiseAndAppear>
      </div>
   )
}

export default Attribute
