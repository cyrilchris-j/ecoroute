import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import ComparisonSection from '@/components/ComparisonSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main className="bg-eco-darker">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
