import { riseAndAppear } from '@/animations/variants'
import { motion } from 'framer-motion'

interface RiseAndAppearProps {
   children: React.ReactNode
   animDelay?: number
}

const RiseAndAppear: React.FC<RiseAndAppearProps> = ({
   children,
   animDelay,
}) => {
   return (
      <motion.div
         variants={riseAndAppear}
         initial="hidden"
         transition={{ delay: animDelay ? animDelay : 0 }}
         whileInView="show"
         viewport={{ amount: 'some', margin: '0px 0px -20% 0px', once: true }}
      >
         {children}
      </motion.div>
   )
}

export default RiseAndAppear
