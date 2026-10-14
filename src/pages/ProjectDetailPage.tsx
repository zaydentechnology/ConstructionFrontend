import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLink } from '../components/ArrowLink'
import { Eyebrow, Reveal } from '../components/Reveal'
import { ProjectImage } from '../components/ProjectImage'
import { SEO } from '../components/SEO'
import { getProject, projects } from '../data/projects'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined
  if (!project) return <Navigate to="/projects" replace />
  const related = projects.filter(item => item.slug !== project.slug && (item.category === project.category || item.featured)).slice(0, 2)
  return <><SEO title={project.seo.title} description={project.seo.description} /><article className="project-detail"><section className="project-detail__hero"><ProjectImage src={project.coverImage} alt={project.title} eager /><div className="project-detail__hero-veil" /><div className="site-shell project-detail__hero-content"><Link to="/projects" className="back-link"><ArrowLeft size={16} /> All projects</Link><div><Eyebrow>{project.category} · {project.status}</Eyebrow><h1>{project.title}</h1><p>{project.location} · {project.year}</p></div></div></section><section className="section"><div className="site-shell detail-intro"><Reveal><Eyebrow>Project overview</Eyebrow><h2>{project.shortDescription}</h2></Reveal><Reveal delay={.1}><p>{project.overview}</p><div className="detail-scope">{project.scope.map(item => <span key={item}>{item}</span>)}</div></Reveal></div></section><section className="detail-gallery site-shell">{project.gallery.map((image, index) => <Reveal key={image} delay={index * .06} className={`detail-gallery__image detail-gallery__image--${index + 1}`}><ProjectImage src={image} alt={`${project.title} project detail ${index + 1}`} /></Reveal>)}</section><section className="section section--warm"><div className="site-shell challenge-grid"><Reveal><Eyebrow>The brief</Eyebrow><h2>{project.challenge}</h2></Reveal><Reveal delay={.08}><Eyebrow>Our response</Eyebrow><p>{project.solution}</p><div className="highlight-list">{project.highlights.map((highlight, index) => <div key={highlight}><span>0{index + 1}</span>{highlight}</div>)}</div></Reveal></div></section><section className="section related-projects"><div className="site-shell"><Reveal className="section-heading"><div><Eyebrow>Continue exploring</Eyebrow><h2>Related <em>work.</em></h2></div><ArrowLink to="/projects">View all projects</ArrowLink></Reveal><div className="related-grid">{related.map(item => <Link key={item.id} to={`/projects/${item.slug}`}><ProjectImage src={item.coverImage} alt={item.title} /><span>{item.category}</span><h3>{item.title}</h3></Link>)}</div></div></section><section className="detail-cta"><div className="site-shell"><p>Have a project in mind?</p><Link to="/contact">Start a conversation <ArrowUpRight size={17} /></Link></div></section></article></>
}
