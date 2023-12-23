import BrowHeadingParagraph from '../brow-heading-paragraph/BrowHeadingParagraph'
import Image, { StaticImageData } from 'next/image'

interface ServicesCardProps {
   brow: string
   heading: string
   paragraph: string
   image: StaticImageData
   altImageDescription: string
   imagePosition?: string
}

const ServicesCard: React.FC<ServicesCardProps> = ({
   brow,
   heading,
   paragraph,
   image,
   altImageDescription,
   imagePosition = 'center center',
}) => {
   return (
      <div className="flex h-full flex-col overflow-clip rounded-4xl bg-my-dark-blue shadow-lg shadow-my-dark-blue">
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
      </div>
   )
}

export default ServicesCard
