import AboutMeSection from '../components/about-me-section/AboutMeSection'
import CtaSection from '../components/cta-section/CtaSection'
import Footer from '../components/footer-section/Footer'
import Navbar from '../components/navbar/Navbar'

export default function Home() {
   return (
      <main>
         <Navbar bgColor="my-pale-beige" />
         <AboutMeSection />
         <CtaSection />
         <Footer />
      </main>
   )
}
