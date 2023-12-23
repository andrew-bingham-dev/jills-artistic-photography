import ServicesCard from './ServicesCard'
import weddingImage04 from '../../../public/jpg/wedding/wedding_04.jpg'
import portraitImage01 from '../../../public/jpg/portrait/portrait_01.jpg'
import natureImage04 from '../../../public/jpg/nature/nature_04.jpg'

const ServicesCardContainer = () => {
   return (
      <div className="gap-16x4x32 grid auto-rows-fr 600:auto-rows-auto 600:grid-cols-2 900:auto-rows-max 900:grid-cols-3">
         <div className="600:col-span-2 900:col-span-1">
            <ServicesCard
               brow="Moments"
               heading="Wedding Photography"
               paragraph="Capture the beauty and magic of your special day."
               image={weddingImage04}
               altImageDescription="Wedding photo"
               imagePosition="center 65%"
            />
         </div>
         <ServicesCard
            brow="Expressions"
            heading="Portrait Photography"
            paragraph="Preserve your unique personality in stunning portraits."
            image={portraitImage01}
            altImageDescription="Portrait photo"
         />
         <ServicesCard
            brow="Life"
            heading="Nature Photography"
            paragraph="Discover the beauty of the natural world through captivating photographs."
            image={natureImage04}
            altImageDescription="Nature photo"
         />
      </div>
   )
}

export default ServicesCardContainer
