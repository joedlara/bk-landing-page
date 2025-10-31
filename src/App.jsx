import { useTheme } from "./hooks/useTheme"
import { useScrollAnimations } from "./hooks/useScrollAnimations"
import { useSmoothScroll } from "./hooks/useSmoothScroll"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import TransformationSection from "./components/TransformationSection"
import WhyChoose from "./components/WhyChoose"
import CTA from "./components/CTA"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

import "./styles/global.css"

function App() {
  // Initialize custom hooks
  useTheme()
  useScrollAnimations()
  useSmoothScroll()

  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <TransformationSection />
      <WhyChoose />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
}

export default App
