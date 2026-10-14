import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Eyebrow, Reveal } from '../components/Reveal'
import { PageHero } from '../components/PageHero'
import { ProjectImage } from '../components/ProjectImage'
import { SEO } from '../components/SEO'
import { projectCategories, projects, type ProjectCategory, type ProjectStatus } from '../data/projects'

export function ProjectsPage() {
  const [category, setCategory] = useState<'All' | ProjectCategory>('All')
  const [status, setStatus] = useState<'All' | ProjectStatus>('All')
  const filtered = useMemo(() => projects.filter(project => (category === 'All' || project.category === category) && (status === 'All' || project.status === status)), [category, status])
  return <><SEO title="Projects | Zayden" description="Explore Zayden's illustrative portfolio system." /><PageHero eyebrow="The work" title={<>A portfolio of <em>possibility.</em></>} text="A flexible, data-driven project library—built to grow without rebuilding the experience." image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=85" />
    <section className="section projects-page"><div className="site-shell"><Reveal><div className="filters"><div><span className="filter-label">Sector</span>{projectCategories.map(option => <button key={option} className={category === option ? 'is-active' : ''} onClick={() => setCategory(option)}>{option}</button>)}</div><div><span className="filter-label">Status</span>{(['All', 'Completed', 'Ongoing'] as const).map(option => <button key={option} className={status === option ? 'is-active' : ''} onClick={() => setStatus(option)}>{option}</button>)}</div></div></Reveal><p className="results-count">{filtered.length} sample projects</p><motion.div layout className="project-grid"><AnimatePresence mode="popLayout">{filtered.map((project, index) => <motion.article layout key={project.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} transition={{ duration: .35 }} className={index === 0 ? 'project-card project-card--large' : 'project-card'}><Link to={`/projects/${project.slug}`}><ProjectImage src={project.coverImage} alt={project.title} /><div className="project-card__meta"><span>{project.category} · {project.status}</span><h2>{project.title}</h2><p>{project.location}</p><ArrowUpRight className="project-card__arrow" size={19} /></div></Link></motion.article>)}</AnimatePresence></motion.div>{filtered.length === 0 && <div className="empty-state"><Eyebrow>No matching work</Eyebrow><h2>Try a different filter.</h2><button className="button button--dark" onClick={() => { setCategory('All'); setStatus('All') }}>Reset filters</button></div>}</div></section>
  </>
}
