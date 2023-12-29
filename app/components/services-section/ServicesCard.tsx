'use client'

import BrowHeadingParagraph from '../brow-heading-paragraph/BrowHeadingParagraph'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ServicesCardProps {
   brow: string
   heading: string
   paragraph: string[]
   image: StaticImageData
   altImageDescription: string
   imagePosition?: string
   url: string
}

const ServicesCard: React.FC<ServicesCardProps> = ({
   brow,
   heading,
   paragraph,
   image,
   altImageDescription,
   imagePosition = 'center center',
   url,
}) => {
   return (
      <motion.div
         whileHover={{ scale: 1.05 }}
         className="flex h-full flex-col overflow-clip rounded-4xl bg-my-dark-blue shadow-lg shadow-my-dark-blue"
      >
         <Link href={url}>
            <div className="relative h-60 overflow-clip">
               <Image
                  src={image}
                  alt={altImageDescription}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={imagePosition}
               />
            </div>
            <div className="p-16x8x32">
               <BrowHeadingParagraph
                  headingType="h4"
                  color="my-light-beige"
                  brow={brow}
                  heading={heading}
                  paragraph={paragraph}
               />
            </div>
         </Link>
      </motion.div>
   )
}

export default ServicesCard
