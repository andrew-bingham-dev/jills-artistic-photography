import Spacer from '../Spacer'
import BrowHeadingParagraph from '../brow-heading-paragraph/BrowHeadingParagraph'
import Section from '../section/Section'
import ServicesCardContainer from './ServicesCardContainer'
import PhotoSpread from './PhotoSpread'

const ServicesSection = () => {
   return (
      <Section name="ServicesSection" bgColor="my-medium-blue">
         <div className="1450:px-0 px-[4vw] py-[8vw]">
            <BrowHeadingParagraph
               color="my-light-beige"
               brow="Capture"
               heading="Preserve Your Precious Moments"
               paragraph="Professional photography services for weddings, portraits, and more."
            />
            <Spacer size="large" />
            <ServicesCardContainer />

            <PhotoSpread />
         </div>
      </Section>
   )
}

export default ServicesSection
