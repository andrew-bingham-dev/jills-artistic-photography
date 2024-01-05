import CtaSection from '../components/cta-section/CtaSection'
import Footer from '../components/footer-section/Footer'
import GalleriesSection from './GalleriesSection'
import Navbar from '../components/navbar/Navbar'

export default function Portfolio() {
   return (
      <>
         <main className="relative z-10">
            <Navbar bgColor="my-medium-beige" />
            <GalleriesSection />
            <CtaSection />
         </main>
         <Footer />
      </>
   )
}
