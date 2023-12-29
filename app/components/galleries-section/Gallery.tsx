'use client'

import Image from 'next/image'
import GallerySlideButton from './GallerySlideButton'
import { useRef } from 'react'
import RiseAndAppear from '../motions/RiseAndAppear'
import { motion } from 'framer-motion'

const imageVariants = {
   hidden: { x: -100, opacity: 0 },
   visible: { x: 0, opacity: 1 },
}

interface GalleryProps {
   images: { url: string; altText: string; position?: string }[]
   heading: string
}

const Gallery: React.FC<GalleryProps> = ({ images, heading }) => {
   const scrollContainer = useRef<HTMLDivElement>(null)

   const scroll = (direction: 'left' | 'right') => {
      if (scrollContainer.current) {
         const scrollAmount = 324 // Adjust as needed
         const currentScroll = scrollContainer.current.scrollLeft
         scrollContainer.current.scrollTo({
            left:
               direction === 'left'
                  ? currentScroll - scrollAmount
                  : currentScroll + scrollAmount,
            behavior: 'smooth',
         })
      }
   }

   return (
      <div className="flex w-full flex-col gap-[2vw]">
         <RiseAndAppear>
            <h4 className="text-h4">{heading}</h4>
         </RiseAndAppear>
         <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            ref={scrollContainer}
            className="no-scrollbar flex gap-[24px] overflow-x-auto scroll-smooth"
         >
            {images.map((image, index) => (
               <motion.div
                  variants={imageVariants}
                  key={index}
                  className="relative h-[300px] w-[300px] flex-shrink-0"
               >
                  <Image
                     src={image.url}
                     alt={image.altText}
                     layout="fill"
                     objectFit="cover"
                     objectPosition={image.position || 'center center'}
                  />
               </motion.div>
            ))}
         </motion.div>
         <div className="flex justify-end gap-4">
            <motion.div
               initial={{ y: -50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.6, duration: 0.5 }}
               viewport={{ once: true }}
            >
               <GallerySlideButton
                  direction="left"
                  onClick={() => scroll('left')}
               />
            </motion.div>
            <motion.div
               initial={{ y: -50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.8, duration: 0.5 }}
               viewport={{ once: true }}
            >
               <GallerySlideButton
                  direction="right"
                  onClick={() => scroll('right')}
               />
            </motion.div>
         </div>
      </div>
   )
}

export default Gallery
