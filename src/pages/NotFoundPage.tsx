import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

export function NotFoundPage() {
  return <main className="not-found"><SEO title="Page not found | Zayden" description="The requested Zayden page could not be found." /><p>404</p><h1>This page isn't part<br />of the <em>plan.</em></h1><Link to="/" className="button button--dark">Return home</Link></main>
}
