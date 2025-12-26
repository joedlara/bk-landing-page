import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useTheme } from "./hooks/useTheme"
import { useScrollAnimations } from "./hooks/useScrollAnimations"
import { useSmoothScroll } from "./hooks/useSmoothScroll"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Testimonials from "./components/Testimonials"
import Stats from "./components/Stats"

import TransformationSection from "./components/TransformationSection"
import CTA from "./components/CTA"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import GoogleReviews from "./components/GoogleReviews"
import WhyBrandKlout from "./components/WhyBrandklout"

import "./styles/global.css"
import PracticeLogos from "./components/PracticeLogos"
import FinalCta from "./components/FinalCta"

function App() {
  // Initialize custom hooks
  useTheme()
  useScrollAnimations()
  useSmoothScroll()

  const navigate = useNavigate()
  const location = useLocation()
  const [modalState, setModalState] = useState({ isOpen: false, tab: "privacy" })

  // Handle route-based modal opening
  useEffect(() => {
    const path = location.pathname.toLowerCase()

    if (path === "/privacy") {
      setModalState({ isOpen: true, tab: "privacy" })
      navigate("/", { replace: true })
    } else if (path === "/terms") {
      setModalState({ isOpen: true, tab: "terms" })
      navigate("/", { replace: true })
    } else if (path === "/hipaa" || path === "/hippa") {
      setModalState({ isOpen: true, tab: "hipaa" })
      navigate("/", { replace: true })
    }
  }, [location.pathname, navigate])

  return (
    <>
      <Header />
      <Hero />
      <PracticeLogos />
      <Stats />
      <Testimonials />
      <TransformationSection />
      <WhyBrandKlout />
      <GoogleReviews />
      <CTA />
      <FAQ />
      <FinalCta />
      <Footer modalState={modalState} setModalState={setModalState} />
    </>
  )
}

export default App
