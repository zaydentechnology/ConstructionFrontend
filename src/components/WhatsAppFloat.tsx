import { company } from '../data/company'
import { WhatsAppIcon } from './WhatsAppIcon'

export function WhatsAppFloat() {
  const message = encodeURIComponent('Hello Zayden, I would like to discuss a construction project.')
  return <a className="whatsapp-float" href={`https://wa.me/${company.whatsapp}?text=${message}`} target="_blank" rel="noreferrer" aria-label="Contact Zayden on WhatsApp">
    <WhatsAppIcon size={21} />
    <span>WhatsApp</span>
  </a>
}
