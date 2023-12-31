'use client'
// TODO: Add category tags to card

import BrowHeadingParagraph from '../brow-heading-paragraph/BrowHeadingParagraph'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ServicesCardProps {
   brow: string
   heading: string
   paragraph: string[]
   image: StaticImageData | string
   altImageDescription: string
   imagePosition?: string
   url: string
   newTab?: boolean
}

const ServicesCard: React.FC<ServicesCardProps> = ({
   brow,
   heading,
   paragraph,
   image,
   altImageDescription,
   imagePosition = 'center center',
   url,
   newTab = false,
}) => {
   return (
      <motion.div
         initial={{ scale: 1 }}
         whileHover={{ scale: 1.03 }}
         className="relative z-[5] flex h-full flex-col overflow-clip bg-my-dark-blue shadow-md shadow-my-dark-blue transition-shadow hover:shadow-2xl"
      >
         <Link
            href={url}
            target={newTab ? '_blank' : '_self'}
            rel={newTab ? 'noopener noreferrer' : undefined}
         >
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
