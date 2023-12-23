import Spacer from '../Spacer'
import BrowHeadingParagraph from '../brow-heading-paragraph/BrowHeadingParagraph'
import Section from '../section/Section'
import ServicesCardContainer from './ServicesCardContainer'
import PhotoSpread from './PhotoSpread'

const ServicesSection = () => {
   return (
      <Section name="ServicesSection" bgColor="my-medium-blue">
         <div className="pt-[8vw]">
            <div className="px-[4vw] 1450:px-0">
               <BrowHeadingParagraph
                  color="my-light-beige"
                  brow="Capture"
                  heading="Preserve Your Precious Moments"
                  paragraph="Professional photography services for weddings, portraits, and more."
               />
               <Spacer size="large" />
               <ServicesCardContainer />
            </div>
            <PhotoSpread />
         </div>
      </Section>
   )
}

export default ServicesSection
