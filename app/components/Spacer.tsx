import React from 'react'

interface SpacerProps {
   direction?: 'horizontal' | 'vertical'
   size?: 'small' | 'medium' | 'large' | 'x-large' | 'nav'
}

const Spacer: React.FC<SpacerProps> = ({
   direction = 'vertical',
   size = 'medium',
}) => {
   const horizontalPadding = () => {
      switch (size) {
         case 'small':
            return 'px-2'
         case 'medium':
            return 'px-4'
         case 'large':
            return 'px-8'
         case 'x-large':
            return 'px-16'
         default:
            return ''
      }
   }

   const verticalPadding = () => {
      switch (size) {
         case 'small':
            return 'py-2'
         case 'medium':
            return 'py-4'
         case 'large':
            return 'py-8'
         case 'x-large':
            return 'py-16'
         case 'nav':
            return 'pt-[88px]'
         default:
            return ''
      }
   }

   const spacerClassName =
      direction === 'horizontal' ? horizontalPadding() : verticalPadding()

   return <div className={spacerClassName} />
}

export default Spacer
