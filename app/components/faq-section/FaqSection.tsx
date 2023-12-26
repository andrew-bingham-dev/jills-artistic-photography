'use client'

import BrowHeadingParagraph from '../brow-heading-paragraph/BrowHeadingParagraph'
import RiseAndAppear from '../motions/rise-and-appear'
import Section from '../section/Section'
import FaqAccordion from './FaqAccordion'

const FaqSection: React.FC = () => {
   return (
      <Section name="FAQSection" bgColor="my-light-blue">
         <div className="flex flex-col gap-y-40x6x80 px-[4vw] py-[8vw] 1450:px-0">
            <RiseAndAppear>
               <BrowHeadingParagraph
                  color="my-dark-blue"
                  heading="FAQs"
                  paragraph="Find answers to common questions about my services and process."
               />
            </RiseAndAppear>
            <RiseAndAppear>
               <FaqAccordion />
            </RiseAndAppear>
            <RiseAndAppear>
               <BrowHeadingParagraph
                  headingType="h4"
                  color="my-dark-blue"
                  heading="Still Have Questions?"
                  paragraph="Contact me directly to discuss your photography needs."
               />
            </RiseAndAppear>
         </div>
      </Section>
   )
}

export default FaqSection
