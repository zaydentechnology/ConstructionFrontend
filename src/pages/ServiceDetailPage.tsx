import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLink } from '../components/ArrowLink'
import { PageHero } from '../components/PageHero'
import { Eyebrow, Reveal } from '../components/Reveal'
import { SEO } from '../components/SEO'
import { services } from '../data/services'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find(item => item.slug === slug)
  if (!service) return <Navigate to="/services" replace />
  const Icon = service.icon
  return <><SEO title={`${service.title} | Zayden`} description={service.summary} /><PageHero eyebrow={service.eyebrow} title={<>{service.title.split(' & ')[0]}<br /><em>{service.title.includes(' & ') ? `& ${service.title.split(' & ')[1]}` : ''}</em></>} text={service.summary} image={service.image}><Link to="/services" className="back-link page-hero__back"><ArrowLeft size={16} /> All expertise</Link></PageHero>
    <section className="section service-detail"><div className="site-shell"><Reveal><Icon size={38} strokeWidth={1.1} /><Eyebrow>A considered service</Eyebrow><h2>{service.detail}</h2></Reveal><Reveal delay={.1}><div className="service-detail__lists"><div><h3>What this can include</h3>{service.inclusions.map(item => <p key={item}><Check size={16} />{item}</p>)}</div><div><h3>What it is designed to create</h3>{service.outcomes.map(item => <p key={item}><Check size={16} />{item}</p>)}</div></div><ArrowLink to="/contact">Talk to Zayden about your project</ArrowLink></Reveal></div></section>
    <section className="detail-cta"><div className="site-shell"><p>A strong project starts with the right questions.</p><Link to="/contact">Start a conversation <ArrowUpRight size={17} /></Link></div></section>
  </>
}
