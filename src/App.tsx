import { FeatureGrid } from './components/FeatureGrid'
import { FeaturePanels } from './components/FeaturePanels'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { IndustryMarquee } from './components/IndustryMarquee'
import { Nav } from './components/Nav'
import { Pricing } from './components/Pricing'
import { Quotes } from './components/Quotes'
import { Stats } from './components/Stats'

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink" style={{ backgroundColor: '#fbfbfe' }}>
      <Nav />
      <main>
        <Hero />
        <IndustryMarquee />
        <Stats />
        <Gallery />
        <FeaturePanels />
        <FeatureGrid />
        <Quotes />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
