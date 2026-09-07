import { FeaturesBento } from './components/FeaturesBento'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { IndustryMarquee } from './components/IndustryMarquee'
import { Nav } from './components/Nav'
import { Pricing } from './components/Pricing'
import { ProblemSolution } from './components/ProblemSolution'
import { ProductShowcase } from './components/ProductShowcase'
import { Quotes } from './components/Quotes'
import { Security } from './components/Security'

function App() {
  return (
    <div className="min-h-screen bg-ink text-fg" style={{ backgroundColor: '#05050a' }}>
      <Nav />
      <main>
        <Hero />
        <IndustryMarquee />
        <ProblemSolution />
        <HowItWorks />
        <FeaturesBento />
        <ProductShowcase />
        <Quotes />
        <Security />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
