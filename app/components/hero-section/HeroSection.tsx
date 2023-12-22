import Section from '../section/Section'
import Image from 'next/image'
import CtaButton from '../cta-button/CtaButton'

const HeroSection = () => {
   return (
      <Section
         name="HeroSection"
         bgColor="my-light-blue"
         sectionClasses="overflow-y-clip"
      >
         {/* Background circles */}
         <div>
            <div className="z-decor-1 absolute -right-[500px] -top-[200px] h-[1500px] w-[1500px] rounded-full bg-black/5" />
            <div className="z-decor-2 absolute -left-[300px] -top-[200px] h-[800px] w-[800px] rounded-full bg-black/5" />
            <div className="z-decor-3 absolute -bottom-[200px] -left-[300px] h-[640px] w-[640px] rounded-full bg-black/5" />
         </div>

         {/* Hero text and image */}
         <div className="600:grid-cols-2 800:min-h-[450px] 1000:min-h-[500px] grid auto-rows-auto bg-my-light-blue">
            {/* Hero text */}
            <div className="600:order-1 600:pl-[4vw] 600:pr-0 1450:pl-0 z-10 order-2 flex flex-col justify-center gap-6 px-[4vw] py-[8vw]">
               <h1 className="title-text-mark 900:text-[56px] 1450:text-[64px] text-[40px] leading-none text-my-dark-blue">
                  Capturing Moments That Last a Lifetime
               </h1>
               <p className="1450:text-[32px] text-[18px] font-light leading-tight  text-my-dark-blue">
                  Welcome to Jill&apos;s Artistic Photography Where Your
                  Treasured Moments Become Timeless Masterpieces You&apos;ll
                  Cherish Forever.
               </p>
               <CtaButton />
            </div>

            {/* Hero image */}
            <div className="600:order-2 relative z-[2] order-1">
               <div className="600:absolute 600:-top-[4vw] 600:aspect-square 1000:max-h-[700px] 1000:max-w-[700px] 600:h-[70vw] 600:min-h-[520px] 600:w-[70vw] 600:min-w-[520px] 600:rounded-full 1450:max-h-[850px] 1450:max-w-[850px] h-[60vw] w-full overflow-clip">
                  <Image
                     src={'/jpg/profile/profile_01.jpg'}
                     alt="Hero Image"
                     fill
                     style={{ objectFit: 'cover' }}
                     objectPosition="30% 10%"
                  />
               </div>
            </div>
         </div>
      </Section>
   )
}

export default HeroSection
