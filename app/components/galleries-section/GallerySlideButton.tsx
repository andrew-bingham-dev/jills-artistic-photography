'use client'
// TODO: Ensure slide buttons snap to set positions
import { motion } from 'framer-motion'

interface GallerySlideButtonProps {
   direction: 'left' | 'right'
   onClick: () => void
}

const GallerySlideButton: React.FC<GallerySlideButtonProps> = ({
   direction,
   onClick,
}) => {
   return (
      <motion.button
         className="border-1 aspect-square rounded-full border border-my-dark-blue p-3 text-my-dark-blue transition duration-300 700:hover:border-my-light-beige 700:hover:text-my-light-beige"
         onClick={() => onClick()}
      >
         {direction === 'left' && (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="currentColor"
               className="h-6 w-6"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
               />
            </svg>
         )}
         {direction === 'right' && (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="currentColor"
               className="h-6 w-6"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
               />
            </svg>
         )}
      </motion.button>
   )
}

export default GallerySlideButton
