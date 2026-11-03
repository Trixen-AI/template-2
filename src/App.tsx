import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import HttpsMoment from '@/components/sections/HttpsMoment'
import LiveProducts from '@/components/sections/LiveProducts'
import Industries from '@/components/sections/Industries'
import WhyConfidentiality from '@/components/sections/WhyConfidentiality'
import CaseStudies from '@/components/sections/CaseStudies'
import LogoMarquee from '@/components/sections/LogoMarquee'
import Developers from '@/components/sections/Developers'
import ContactCta from '@/components/sections/ContactCta'
import Footer from '@/components/sections/Footer'
import { useTextScramble } from '@/hooks/useTextScramble'
import { useTooltips } from '@/hooks/useTooltips'

export default function App() {
  // Flowbase boosters, applied page-wide by attribute like the source scripts
  useTextScramble()
  useTooltips()

  return (
    <div className="c-page-wrapper">
      <Navigation />
      <Hero />
      <HttpsMoment />
      <LiveProducts />
      <Industries />
      <WhyConfidentiality />
      <CaseStudies />
      <LogoMarquee />
      <Developers />
      <ContactCta />
      <Footer />
    </div>
  )
}
