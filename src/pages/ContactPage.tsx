import { ArrowUpRight, CheckCircle2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { company } from '../data/company'
import { Eyebrow, Reveal } from '../components/Reveal'
import { SEO } from '../components/SEO'

type FormState = { name: string; email: string; phone: string; project: string; message: string }
const initial: FormState = { name: '', email: '', phone: '', project: '', message: '' }

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initial)
  const [error, setError] = useState('')
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) { setError('Please add your name, email and a short project note.'); return }
    setError('')
    const body = [
      '*New project enquiry — Zayden*',
      '',
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone || 'Not provided'}`,
      `*Project type:* ${form.project || 'Not provided'}`,
      '',
      '*Project note:*',
      form.message,
    ].join('\n')
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer')
  }
  return <><SEO title="Contact | Zayden" description="Start a conversation with Zayden about your project." /><section className="contact-hero"><div className="site-shell"><Reveal><Eyebrow>Start a conversation</Eyebrow><h1>Bring us the<br /><em>big picture.</em></h1><p>Tell us what you're trying to make. Your enquiry is shaped into a clear, ready-to-send WhatsApp message—without any data being stored by the site.</p></Reveal></div></section>
    <section className="contact-section"><div className="site-shell contact-grid"><Reveal><div className="contact-details"><p className="contact-details__intro">Whether you have a defined brief or an early idea, the first conversation is a useful place to start.</p><a href={`mailto:${company.email}`}><Mail size={18} /><span><small>Email</small>{company.email}</span></a><a href={`tel:${company.phone.replace(/\s/g, '')}`}><Phone size={18} /><span><small>Phone</small>{company.phone}</span></a><a href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello Zayden, I would like to discuss a construction project.')}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WhatsApp</small>{company.phone}</span></a><div><MapPin size={18} /><span><small>Studio</small>{company.address}</span></div><p className="availability"><CheckCircle2 size={15} />{company.availability}</p></div></Reveal><Reveal delay={.1}><form onSubmit={onSubmit} noValidate><div className="form-label-row"><p className="eyebrow"><span />Project enquiry</p><span>Replies via WhatsApp</span></div><div className="form-row"><label>Name<input value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} autoComplete="name" required /></label><label>Email<input type="email" value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} autoComplete="email" required /></label></div><div className="form-row"><label>Phone <span>(optional)</span><input type="tel" value={form.phone} onChange={event => setForm({ ...form, phone: event.target.value })} autoComplete="tel" /></label><label>Project type <span>(optional)</span><select value={form.project} onChange={event => setForm({ ...form, project: event.target.value })}><option value="">Select one</option><option>Residential</option><option>Commercial</option><option>Industrial / Infrastructure</option><option>Renovation / Fit-out</option><option>Something else</option></select></label></div><label>Tell us a little about it<textarea rows={6} value={form.message} onChange={event => setForm({ ...form, message: event.target.value })} required /></label>{error && <p className="form-error">{error}</p>}<button className="button button--whatsapp" type="submit"><MessageCircle size={18} />Continue in WhatsApp <ArrowUpRight size={17} /></button><p className="form-note">WhatsApp opens with all completed details ready to send. To add drawings or other files, attach them in WhatsApp after it opens.</p></form></Reveal></div></section>
    <section className="map-placeholder"><div className="site-shell"><span>Location placeholder</span><p>Replace this area with your approved map embed or a branded location graphic before launch.</p></div></section>
  </>
}
