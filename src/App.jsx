import { useTheme } from "./hooks/useTheme"
import { useScrollAnimations } from "./hooks/useScrollAnimations"
import { useSmoothScroll } from "./hooks/useSmoothScroll"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Testimonials from "./components/Testimonials"
import Stats from "./components/Stats"
import PracticeLogos from "./components/PracticeLogos"
import TransformationSection from "./components/TransformationSection"
import WhyChoose from "./components/WhyChoose"
import CTA from "./components/CTA"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

import "./styles/global.css"
import GoogleReviews from "./components/GoogleReviews"

function App() {
  // Initialize custom hooks
  useTheme()
  useScrollAnimations()
  useSmoothScroll()

  return (
    <>
      <Header />
      <Hero />
      <PracticeLogos />
      <Stats />
      <Testimonials />
      <TransformationSection />
      <WhyChoose />
      <GoogleReviews />
      <CTA />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
