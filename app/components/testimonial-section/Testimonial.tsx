import starSvg from '../../../public/svg/Star.svg'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

interface Testimonial {
   quote: string
   avatar: StaticImageData
   name: string
}

const containerVariants = {
   hidden: { opacity: 0 },
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
         delayChildren: 1,
      },
   },
}

const Testimonial: React.FC<Testimonial> = ({ quote, avatar, name }) => {
   return (
      <div className="flex flex-col gap-16x4x24 text-my-light-beige">
         <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 'all', once: true }}
            className="flex flex-row gap-1"
         >
            <motion.div variants={containerVariants}>
               <Image src={starSvg} alt="Star" />
            </motion.div>
            <motion.div variants={containerVariants}>
               <Image src={starSvg} alt="Star" />
            </motion.div>
            <motion.div variants={containerVariants}>
               <Image src={starSvg} alt="Star" />
            </motion.div>
            <motion.div variants={containerVariants}>
               <Image src={starSvg} alt="Star" />
            </motion.div>
            <motion.div variants={containerVariants}>
               <Image src={starSvg} alt="Star" />
            </motion.div>
         </motion.div>
         <p className="text-para italic">&quot;{quote}&quot;</p>
         <div className="flex items-center gap-4">
            <Image src={avatar} alt="Avatar" />
            <p className="font-semibold">{name}</p>
         </div>
      </div>
   )
}

export default Testimonial
