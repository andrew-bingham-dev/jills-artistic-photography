'use client'

import Section from '../section/Section'
import CtaButton from '../cta-button/CtaButton'
import RiseAndAppear from '../motions/RiseAndAppear'

const CtaSection: React.FC = () => {
   return (
      <Section name="CtaSection" bgColor="my-medium-blue">
         <div className="grid auto-rows-auto gap-y-40x6x80 px-[4vw] py-[8vw] text-my-light-beige 800:grid-cols-2 800:grid-rows-1 1450:px-0">
            <RiseAndAppear>
               <h2 className="text-h2">Capture Your Special Moments</h2>
            </RiseAndAppear>
            <RiseAndAppear>
               <div className="flex flex-col gap-16x4x24">
                  <p className="text-para">
                     I&apos;m Jill Thompson, your go-to freelance photographer
                     for capturing life&apos;s most beautiful moments. From
                     weddings and portraits to nature scenes, I&apos;m committed
                     to creating images you&apos;ll treasure for a lifetime.
                  </p>
                  <CtaButton />
               </div>
            </RiseAndAppear>
         </div>
      </Section>
   )
}

export default CtaSection
