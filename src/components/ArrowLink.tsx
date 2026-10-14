import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ArrowLink({ to, children, dark = false }: { to: string; children: ReactNode; dark?: boolean }) {
  return <Link to={to} className={`arrow-link ${dark ? 'arrow-link--dark' : ''}`}><span>{children}</span><ArrowUpRight size={16} strokeWidth={1.8} /></Link>
}
