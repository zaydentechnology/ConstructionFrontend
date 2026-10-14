import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { company, navItems } from '../data/company'
import { BrandMark } from './BrandMark'

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  useEffect(() => { setOpen(false) }, [location.pathname, location.hash])
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 28); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  return <>
    <header className={`navigation ${scrolled || location.pathname !== '/' ? 'navigation--solid' : ''}`}>
      <div className="site-shell navigation__inner"><BrandMark light={!scrolled && location.pathname === '/'} /><nav aria-label="Primary navigation">{navItems.map(item => <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? 'active' : ''}>{item.label}</NavLink>)}</nav><Link to="/contact" className="nav-contact">Start a project <ArrowUpRight size={15} /></Link><button className="menu-button" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu /></button></div>
    </header>
    <AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><div className="site-shell"><div className="mobile-menu__top"><BrandMark light /><button className="menu-button" onClick={() => setOpen(false)} aria-label="Close navigation"><X /></button></div><nav>{navItems.map((item, index) => <motion.div key={item.to} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .12 + index * .06 }}><NavLink to={item.to}>{item.label}</NavLink></motion.div>)}<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}><Link to="/contact" className="button button--sand">Start a project <ArrowUpRight size={17} /></Link><a href={`mailto:${company.email}`} className="mobile-menu__email">{company.email}</a></motion.div></nav></div></motion.div>}</AnimatePresence>
  </>
}
