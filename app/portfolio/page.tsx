import CtaSection from '../components/cta-section/CtaSection'
import Footer from '../components/footer-section/Footer'
import GalleriesSection from '../components/galleries-section/GalleriesSection'
import Navbar from '../components/navbar/Navbar'

export default function Home() {
   return (
      <main>
         <Navbar />
         <GalleriesSection />
         <CtaSection />
         <Footer />
      </main>
   )
}
