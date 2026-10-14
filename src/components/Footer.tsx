import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company, navItems } from '../data/company'
import { BrandMark } from './BrandMark'

export function Footer() {
  return <footer className="footer"><div className="site-shell"><div className="footer__callout"><p className="eyebrow"><span />Begin a conversation</p><h2>Make the next<br /><em>thing matter.</em></h2><Link to="/contact" className="round-link" aria-label="Start a project"><ArrowUpRight /></Link></div><div className="footer__grid"><div><BrandMark light /><p className="footer__copy">Construction, engineering and infrastructure for places with a considered future.</p></div><div><p className="footer__heading">Explore</p>{navItems.map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}<Link to="/contact">Contact</Link></div><div><p className="footer__heading">Contact</p><a href={`mailto:${company.email}`}>{company.email}</a><a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a><p>{company.address}</p></div><div><p className="footer__heading">Elsewhere</p><a href={company.instagram} target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a><a href={company.linkedIn} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a></div></div><div className="footer__lower"><span>© {new Date().getFullYear()} Zayden. Placeholder brand identity.</span><span>Designed for responsible growth.</span></div></div></footer>
}
