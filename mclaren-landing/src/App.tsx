import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { PerformanceSection } from './components/PerformanceSection'
import { ComparisonSection } from './components/ComparisonSection'
import { GallerySection } from './components/GallerySection'
import { DrivingSection } from './components/DrivingSection'
import { CTASection } from './components/CTASection'

export default function App() {
  return (
    <div className="min-h-screen bg-matte text-soft-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <PerformanceSection />
        <ComparisonSection />
        <GallerySection />
        <DrivingSection />
        <CTASection />
      </main>
    </div>
  )
}
