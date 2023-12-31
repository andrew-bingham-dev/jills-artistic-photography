import AboutMeSection from '../components/about-me-section/AboutMeSection'
import AttributesSection from '../components/about-me-section/AttributesSection'
import CtaSection from '../components/cta-section/CtaSection'
import Footer from '../components/footer-section/Footer'
import Navbar from '../components/navbar/Navbar'

export default function Home() {
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
