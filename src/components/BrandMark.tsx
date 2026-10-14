import { Link } from 'react-router-dom'

export function BrandMark({ light = false }: { light?: boolean }) {
  return <Link to="/" className={`brand-mark ${light ? 'brand-mark--light' : ''}`} aria-label="Zayden home">
    <span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span>
    <span>ZAYDEN</span>
  </Link>
}
