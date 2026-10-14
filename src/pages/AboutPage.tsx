import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Eyebrow, Reveal } from '../components/Reveal'
import { ProjectImage } from '../components/ProjectImage'
import { SEO } from '../components/SEO'
import { values } from '../data/company'

export function AboutPage() {
  return <><SEO title="About | Zayden" description="The Zayden approach to construction, engineering and considered delivery." /><PageHero eyebrow="About Zayden" title={<>Built around <em>what matters.</em></>} text="A placeholder brand story for a construction company that believes precise thinking makes better places." image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=85" />
    <section className="section"><div className="site-shell about-intro"><Reveal><Eyebrow>Our point of view</Eyebrow><h2>We see construction as the art of making ambition <em>real.</em></h2></Reveal><Reveal delay={.1}><div><p>Good buildings do more than resolve a brief. They improve how people work, gather, recover, focus and grow. Zayden is a brand concept built around the teams, systems and attention needed to deliver that kind of lasting value.</p><p>This page uses editable sample copy. Replace it with the genuine history, leadership, locations and credentials that make Zayden distinct.</p></div></Reveal></div></section>
    <section className="image-statement"><ProjectImage src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=85" alt="Minimal residence in a natural setting" /><div className="image-statement__quote"><Reveal><p>“The future is not a style. It is the capacity to make better decisions now.”</p></Reveal></div></section>
    <section className="section section--ink"><div className="site-shell"><Reveal className="section-heading"><div><Eyebrow>What holds us to account</Eyebrow><h2>Values with <em>weight.</em></h2></div><p>Not broad declarations—working principles for the way a project is led and a client is kept close to the process.</p></Reveal><div className="values-grid">{values.map(([number, title, text], index) => <Reveal key={number} delay={index * .06}><div><span>{number}</span><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></div></section>
    <section className="section"><div className="site-shell philosophy-grid"><Reveal><div><Eyebrow>Engineering philosophy</Eyebrow><h2>Creative thinking,<br /><em>made accountable.</em></h2></div></Reveal><Reveal delay={.08}><div><p>We bring early decisions into view, coordinate the variables, then establish a delivery rhythm that gives everyone confidence. For us, quality means a project that can be understood as well as admired.</p><ul><li>Resolve the essential before the superficial</li><li>Make progress legible for every stakeholder</li><li>Protect the details that give a place character</li></ul></div></Reveal></div></section>
    <section className="leadership section--warm"><div className="site-shell leadership"><Reveal><Eyebrow>People & leadership</Eyebrow><h2>The right minds<br />around the <em>same table.</em></h2></Reveal><Reveal delay={.1}><div className="leadership__placeholder"><span>Future leadership portraits</span><p>Add your founder, leadership team and delivery leads here from a centralized people data file.</p></div></Reveal></div></section>
    <section className="detail-cta"><div className="site-shell"><p>Bring us a complex brief.</p><Link to="/contact">Start a conversation <ArrowUpRight size={17} /></Link></div></section>
  </>
}
