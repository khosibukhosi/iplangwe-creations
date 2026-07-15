import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import WoodWellness from './components/WoodWellness'

function App() {
  const [woodWellnessOpen, setWoodWellnessOpen] = useState(false)

  return (
    <div className="relative">
      <Navbar onWoodWellness={() => setWoodWellnessOpen(true)} />
      <main>
        <Hero />
        <About />
        <Services onWoodWellness={() => setWoodWellnessOpen(true)} />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Process />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <WoodWellness isOpen={woodWellnessOpen} onClose={() => setWoodWellnessOpen(false)} />
    </div>
  )
}

export default App
