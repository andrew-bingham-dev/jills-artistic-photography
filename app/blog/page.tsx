import CtaSection from '../components/cta-section/CtaSection'
import Footer from '../components/footer-section/Footer'
import Navbar from '../components/navbar/Navbar'
import BlogSection from './BlogSection'

export default function Blog() {
   return (
      <>
         <main className="relative z-10">
            <Navbar bgColor="my-light-blue" />
            <BlogSection />
            <CtaSection />
         </main>
         <Footer />
      </>
   )
}
