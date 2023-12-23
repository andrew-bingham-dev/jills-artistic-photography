import Spacer from '../Spacer'
import BrowHeadingParagraph from '../brow-heading-paragraph/BrowHeadingParagraph'
import Section from '../section/Section'
import FaqAccordion from './FaqAccordion'

const FaqSection: React.FC = () => {
   return (
      <Section name="FAQSection" bgColor="my-light-blue">
         <div className="gap-y-40x6x80 flex flex-col px-[4vw] py-[8vw] 1450:px-0">
            <BrowHeadingParagraph
               color="my-dark-blue"
               heading="FAQs"
               paragraph="Find answers to common questions about my services and process."
            />
            <FaqAccordion />
            <BrowHeadingParagraph
               headingType="h4"
               color="my-dark-blue"
               heading="Still Have Questions?"
               paragraph="Contact me directly to discuss your photography needs."
            />
         </div>
      </Section>
   )
}

export default FaqSection
