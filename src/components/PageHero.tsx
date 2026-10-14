import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Eyebrow } from './Reveal'

export function PageHero({ eyebrow, title, text, image, children }: { eyebrow: string; title: ReactNode; text: string; image: string; children?: ReactNode }) {
  const reduced = useReducedMotion()
  return <section className="page-hero">
    <div className="page-hero__media"><motion.img src={image} alt="" initial={reduced ? false : { scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} /></div>
    <div className="page-hero__veil" />
    <div className="site-shell page-hero__content"><motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .15 }}><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{text}</p>{children}</motion.div></div>
  </section>
}
