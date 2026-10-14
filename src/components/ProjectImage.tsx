import { useState } from 'react'

export function ProjectImage({ src, alt, className = '', eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  const [loaded, setLoaded] = useState(false)
  return <div className={`image-frame ${loaded ? 'is-loaded' : ''} ${className}`}>
    <div className="image-skeleton" aria-hidden="true" />
    <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} onLoad={() => setLoaded(true)} onError={(event) => { event.currentTarget.style.opacity = '0' }} />
  </div>
}
