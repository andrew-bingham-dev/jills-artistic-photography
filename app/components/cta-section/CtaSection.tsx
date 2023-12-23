import Spacer from '../Spacer'
import Section from '../section/Section'
import CtaButton from '../cta-button/CtaButton'

const CtaSection: React.FC = () => {
   return (
      <Section name="CtaSection" bgColor="my-medium-blue">
         <div className="gap-y-40x6x80 grid auto-rows-auto px-[4vw] py-[8vw] text-my-light-beige 800:grid-cols-2 800:grid-rows-1 1450:px-0">
            <h2 className="text-h2">Capture Your Special Moments</h2>
            <div className="gap-16x4x24 flex flex-col">
               <p className="text-para">
                  I&apos;m Jill Thompson, your go-to freelance photographer for
                  capturing life&apos;s most beautiful moments. From weddings
                  and portraits to nature scenes, I&apos;m committed to creating
                  images you&apos;ll treasure for a lifetime.
               </p>
               <CtaButton />
            </div>
         </div>
      </Section>
   )
}

export default CtaSection
