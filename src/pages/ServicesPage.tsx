import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Eyebrow, Reveal } from '../components/Reveal'
import { ProjectImage } from '../components/ProjectImage'
import { SEO } from '../components/SEO'
import { services } from '../data/services'

export function ServicesPage() {
  return <><SEO title="Expertise | Zayden" description="Explore Zayden's construction and engineering expertise." /><PageHero eyebrow="What we do" title={<>The full picture, <em>held together.</em></>} text="Expertise designed to meet a project at every important moment—from the first feasibility question to the final handover." image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85" />
    <section className="section services-list"><div className="site-shell"><Reveal className="services-list__intro"><Eyebrow>Integrated expertise</Eyebrow><h2>Clear specialist knowledge. One coherent <em>delivery.</em></h2></Reveal>{services.map((service, index) => { const Icon = service.icon; return <Reveal key={service.slug} delay={index * .04}><article className="service-row"><div className="service-row__index">0{index + 1}</div><Link to={`/services/${service.slug}`} className="service-row__image"><ProjectImage src={service.image} alt={service.title} /></Link><div className="service-row__content"><Icon size={25} strokeWidth={1.25} /><p className="eyebrow"><span />{service.eyebrow}</p><h2>{service.title}</h2><p>{service.summary}</p><Link to={`/services/${service.slug}`} className="arrow-link"><span>Learn more</span><ArrowUpRight size={16} /></Link></div></article></Reveal> })}</div></section>
    <section className="section section--ink service-method"><div className="site-shell"><Reveal><Eyebrow>One shared language</Eyebrow><h2>The best project teams <em>anticipate.</em></h2></Reveal><Reveal delay={.1}><p>Whatever the starting point, Zayden's role is to make the route forward visible—establishing a stronger basis for decisions, progress and accountability.</p><Link to="/contact" className="button button--sand">Discuss your project <ArrowUpRight size={17} /></Link></Reveal></div></section>
  </>
}
