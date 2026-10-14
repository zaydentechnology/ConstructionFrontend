import { MessageCircle } from 'lucide-react'
import { company } from '../data/company'

export function WhatsAppFloat() {
  const message = encodeURIComponent('Hello Zayden, I would like to discuss a construction project.')
  return <a className="whatsapp-float" href={`https://wa.me/${company.whatsapp}?text=${message}`} target="_blank" rel="noreferrer" aria-label="Contact Zayden on WhatsApp">
    <MessageCircle size={22} strokeWidth={2} />
    <span>WhatsApp</span>
  </a>
}
