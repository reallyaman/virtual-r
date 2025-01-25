import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { HeroSection } from './components/HeroSection'
import { FeatureSection } from './components/FeatureSection'
import { WorkflowSection } from './components/WorkflowSection'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className=" max-w-7xl mx-auto pt-2 px-6">
        <HeroSection />
        <FeatureSection/>
        <WorkflowSection/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  );
}

export default App;