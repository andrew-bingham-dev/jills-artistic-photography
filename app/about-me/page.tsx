import AboutMeSection from './AboutMeSection'
import AttributesSection from './AttributesSection'
import CtaSection from '../components/cta-section/CtaSection'
import Footer from '../components/footer-section/Footer'
import Navbar from '../components/navbar/Navbar'

export default function AboutMe() {
   return (
      <>
         <main className="relative z-10">
            <Navbar bgColor="my-pale-beige" />
            <AboutMeSection />
            <AttributesSection />
            <CtaSection />
         </main>
         <Footer />
      </>
   )
}
