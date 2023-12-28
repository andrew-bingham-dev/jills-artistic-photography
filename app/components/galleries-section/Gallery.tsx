'use client'

import Image from 'next/image'
import GallerySlideButton from './GallerySlideButton'
import { useRef } from 'react'

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
         <h4 className="text-h4">{heading}</h4>
         <div
            ref={scrollContainer}
            className="no-scrollbar flex gap-[24px] overflow-x-auto scroll-smooth"
         >
            {images.map((image, index) => (
               <div
                  key={index}
                  className="relative h-[300px] w-[300px] flex-shrink-0 cursor-pointer"
               >
                  <Image
                     src={image.url}
                     alt={image.altText}
                     layout="fill"
                     objectFit="cover"
                     objectPosition={image.position || 'center center'}
                  />
               </div>
            ))}
         </div>
         <div className="flex justify-end gap-4">
            <GallerySlideButton
               direction="left"
               onClick={() => scroll('left')}
            />
            <GallerySlideButton
               direction="right"
               onClick={() => scroll('right')}
            />
         </div>
      </div>
   )
}

export default Gallery
