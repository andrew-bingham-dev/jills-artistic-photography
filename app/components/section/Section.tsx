import React from 'react'

interface SectionWrapperProps {
   name: string
   children: React.ReactNode
   bgColor: string
   sectionClasses?: string
   containerClasses?: string
   zIndex?: number
}

const Section: React.FC<SectionWrapperProps> = ({
   name,
   children,
   bgColor,
   sectionClasses = '',
   containerClasses = '',
   zIndex = 1,
}) => {
   return (
      <section
         id={name}
         className={`relative z-[${zIndex}] overflow-x-clip bg-${bgColor} ${sectionClasses}`}
      >
         <div className={`mx-auto max-w-7xl ${containerClasses}`}>
            {children}
         </div>
      </section>
   )
}

export default Section
