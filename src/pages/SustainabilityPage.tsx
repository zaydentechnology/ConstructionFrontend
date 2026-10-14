import { ArrowUpRight, Droplets, Layers3, Sun, Trees } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Eyebrow, Reveal } from '../components/Reveal'
import { ProjectImage } from '../components/ProjectImage'
import { SEO } from '../components/SEO'

const principles = [
  { icon: Sun, title: 'Work with climate', text: 'Explore orientation, shade, natural light and passive comfort from the earliest practical stage.' },
  { icon: Layers3, title: 'Choose with care', text: 'Consider material longevity, maintenance, sourcing and reuse as part of the design conversation.' },
  { icon: Droplets, title: 'Value resources', text: 'Look for practical opportunities to reduce water, energy and material waste across the project journey.' },
  { icon: Trees, title: 'Leave room to adapt', text: 'Create durable places that can change gracefully as needs and technologies evolve.' },
]

export function SustainabilityPage() {
  return <><SEO title="Responsibility | Zayden" description="A practical, project-specific approach to responsible building." /><PageHero eyebrow="Responsibility in practice" title={<>Every choice<br />leaves a <em>trace.</em></>} text="A project-specific, practical framework for creating places that are better for the people who use them and the systems they rely on." image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2200&q=85" />
    <section className="section sustainability-intro"><div className="site-shell"><Reveal><Eyebrow>Our approach</Eyebrow><h2>Thoughtful building is less about <em>claims</em> and more about better choices.</h2></Reveal><Reveal delay={.1}><p>Zayden's sustainability content is intentionally framed as editable sample messaging, not a claim of certification or performance. Replace it with your real targets, methods, data and completed outcomes before launch.</p><p>We focus our conversations on the decisions that change a project's long-term impact: passive response, useful material life, resilience, operational clarity and the capacity to evolve.</p></Reveal></div></section>
    <section className="principles section section--ink"><div className="site-shell"><Reveal className="section-heading"><div><Eyebrow>Four working principles</Eyebrow><h2>Make the right things <em>easier.</em></h2></div><p>Responsibility becomes credible when it is part of the delivery system—not a finishing layer.</p></Reveal><div className="principles__grid">{principles.map((principle, index) => { const Icon = principle.icon; return <Reveal key={principle.title} delay={index * .06}><article><Icon size={27} strokeWidth={1.2} /><span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.text}</p></article></Reveal> })}</div></div></section>
    <section className="material-story"><div className="material-story__content"><Reveal><Eyebrow>Material intelligence</Eyebrow><h2>Consider the whole <em>life</em> of a choice.</h2><p>From what's already on site to what can be repaired, reused or adapted later, good material decisions are as much about timing and care as they are about specification.</p></Reveal></div><ProjectImage src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1800&q=85" alt="Architecture immersed in a green landscape" /></section>
    <section className="detail-cta"><div className="site-shell"><p>Bring responsibility into the brief from the beginning.</p><Link to="/contact">Talk to us <ArrowUpRight size={17} /></Link></div></section>
  </>
}
