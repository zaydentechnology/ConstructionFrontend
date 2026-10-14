import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { ScrollToTop } from './components/ScrollToTop'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { ServicesPage } from './pages/ServicesPage'
import { SustainabilityPage } from './pages/SustainabilityPage'
import { Route, Routes } from 'react-router-dom'

function RoutedContent() {
  const location = useLocation()
  const reduced = useReducedMotion()
  useLayoutEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }) }, [location.pathname])
  return <AnimatePresence mode="wait"><motion.main key={location.pathname} initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduced ? {} : { opacity: 0 }} transition={{ duration: .22 }}><Routes location={location}><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/services" element={<ServicesPage />} /><Route path="/services/:slug" element={<ServiceDetailPage />} /><Route path="/projects" element={<ProjectsPage />} /><Route path="/projects/:slug" element={<ProjectDetailPage />} /><Route path="/sustainability" element={<SustainabilityPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<NotFoundPage />} /></Routes></motion.main></AnimatePresence>
}

export default function App() { return <><Navigation /><RoutedContent /><Footer /><WhatsAppFloat /><ScrollToTop /></> }
