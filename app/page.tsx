import CtaSection from './components/cta-section/CtaSection'
import FaqSection from './components/faq-section/FaqSection'
import Footer from './components/footer-section/Footer'
import HeroSection from './components/hero-section/HeroSection'
import Navbar from './components/navbar/Navbar'
import ServicesSection from './components/services-section/ServicesSection'
import TestimonialSection from './components/testimonial-section/TestimonialSection'

export default function Home() {
   return (
      <>
         <main className="relative z-10">
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <TestimonialSection />
            <FaqSection />
            <CtaSection />
         </main>
         <Footer />
      </>
   )
}
