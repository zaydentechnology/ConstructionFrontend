export type ProjectCategory = 'Residential' | 'Commercial' | 'Industrial' | 'Infrastructure'
export type ProjectStatus = 'Completed' | 'Ongoing'

export type Project = {
  id: string
  slug: string
  title: string
  category: ProjectCategory
  location: string
  status: ProjectStatus
  year: string
  coverImage: string
  gallery: string[]
  shortDescription: string
  overview: string
  challenge: string
  solution: string
  scope: string[]
  highlights: string[]
  featured: boolean
  seo: { title: string; description: string }
}

const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=85`

export const projects: Project[] = [
  {
    id: '01', slug: 'the-verdant-courtyard', title: 'The Verdant Courtyard', category: 'Residential', location: 'Sample location · India', status: 'Completed', year: '2025', featured: true,
    coverImage: image('photo-1600607687920-4e2a09cf159d'),
    gallery: [image('photo-1600585154340-be6161a56a0c'), image('photo-1600566753190-17f0baa2a6c3'), image('photo-1600607688969-a5bfcd646154')],
    shortDescription: 'A quiet residential setting where stone, shade and landscape establish the pace.',
    overview: 'A sample portfolio concept for a family residence organized around a planted inner court. Thresholds, deep overhangs and tactile materials make the house feel composed in every season.',
    challenge: 'Create a generous, light-filled home on a compact site while keeping a sense of privacy from the street.',
    solution: 'A sequence of shaded volumes wraps a garden court, bringing daylight and air into the plan without opening the home to its neighbours.',
    scope: ['Pre-construction coordination', 'Main build delivery', 'Landscape and joinery integration'], highlights: ['Courtyard-led living', 'Locally resonant material palette', 'Passive shade strategy'], seo: { title: 'The Verdant Courtyard | Zayden', description: 'Illustrative residential portfolio concept by Zayden.' },
  },
  {
    id: '02', slug: 'arc-house', title: 'Arc House', category: 'Commercial', location: 'Sample location · Dubai', status: 'Ongoing', year: '2026', featured: true,
    coverImage: image('photo-1486406146926-c627a92ad1ab'),
    gallery: [image('photo-1497366754035-f200968a6e72'), image('photo-1497366811353-6870744d04b2'), image('photo-1524758631624-e2822e304c36')],
    shortDescription: 'A flexible civic workplace built around a dramatic, daylit spine.',
    overview: 'This illustrative commercial concept proposes a layered workplace and social hub. Its simple structural rhythm gives teams a flexible framework for change over time.',
    challenge: 'Balance a strong public identity with focused, adaptable working environments.',
    solution: 'A central shared gallery creates orientation, while quieter work settings collect at the perimeter behind a high-performance facade.',
    scope: ['Delivery strategy', 'Commercial construction', 'Interior coordination'], highlights: ['Daylit circulation spine', 'Flexible floorplate', 'Low-maintenance exterior'], seo: { title: 'Arc House | Zayden', description: 'Illustrative commercial portfolio concept by Zayden.' },
  },
  {
    id: '03', slug: 'meridian-works', title: 'Meridian Works', category: 'Industrial', location: 'Sample location · Maharashtra', status: 'Completed', year: '2024', featured: true,
    coverImage: image('photo-1503387762-592deb58ef4e'),
    gallery: [image('photo-1518005020951-eccb494ad742'), image('photo-1531835551805-16d864c8d311'), image('photo-1504917595217-d4dc5ebe6122')],
    shortDescription: 'An industrial campus conceived as a calm, legible workplace for making.',
    overview: 'A sample industrial project shaped by logical movement and robust details. Employee spaces, service routes and production zones are brought together by a clear site framework.',
    challenge: 'Bring clarity to a technically dense site with demanding operational interfaces.',
    solution: 'Separated movement loops and an intentionally simple structural grid make the environment easier to operate and adapt.',
    scope: ['Industrial delivery', 'Technical coordination', 'Phased handover'], highlights: ['Clear people and logistics routes', 'Scalable structural strategy', 'Durable finish selection'], seo: { title: 'Meridian Works | Zayden', description: 'Illustrative industrial portfolio concept by Zayden.' },
  },
  {
    id: '04', slug: 'riverline-commons', title: 'Riverline Commons', category: 'Infrastructure', location: 'Sample location · Karnataka', status: 'Ongoing', year: '2026', featured: false,
    coverImage: image('photo-1494526585095-c41746248156'),
    gallery: [image('photo-1471039497385-b6d6ba609f9c'), image('photo-1482938289607-e9573fc25ebb'), image('photo-1511497584788-876760111969')],
    shortDescription: 'A green mobility and public-realm corridor designed around people and water.',
    overview: 'This conceptual infrastructure project brings walking, cycling, planting and essential service infrastructure into a coherent public route.',
    challenge: 'Make a necessary infrastructure upgrade feel like an asset for the people who move through it every day.',
    solution: 'A resilient planting strategy and carefully spaced civic moments turn a linear route into a sequence of usable places.',
    scope: ['Infrastructure coordination', 'Public-realm delivery', 'Landscape integration'], highlights: ['Human-scale civic spaces', 'Water-aware landscape', 'Phased public access plan'], seo: { title: 'Riverline Commons | Zayden', description: 'Illustrative infrastructure portfolio concept by Zayden.' },
  },
  {
    id: '05', slug: 'kora-atelier', title: 'Kora Atelier', category: 'Commercial', location: 'Sample location · Bengaluru', status: 'Completed', year: '2025', featured: false,
    coverImage: image('photo-1600210492486-724fe5c67fb0'),
    gallery: [image('photo-1618221195710-dd6b41faaea6'), image('photo-1600566753190-17f0baa2a6c3'), image('photo-1616486338812-3dadae4b4ace')],
    shortDescription: 'A considered fit-out for a creative practice that works with material and light.',
    overview: 'A placeholder studio project with generous communal tables, quiet focus rooms and a restrained natural palette.',
    challenge: 'Create a flexible workplace that retains a sense of warmth and individual concentration.',
    solution: 'A series of adaptable rooms loops around a shared worktable, allowing the plan to change as the team does.',
    scope: ['Fit-out delivery', 'Custom joinery', 'Furniture coordination'], highlights: ['Layered lighting plan', 'Adaptable studio zones', 'Low-VOC finish palette'], seo: { title: 'Kora Atelier | Zayden', description: 'Illustrative commercial portfolio concept by Zayden.' },
  },
  {
    id: '06', slug: 'stonehouse-retreat', title: 'Stonehouse Retreat', category: 'Residential', location: 'Sample location · Goa', status: 'Ongoing', year: '2026', featured: false,
    coverImage: image('photo-1511818966892-d7d671e672a2'),
    gallery: [image('photo-1510798831971-661eb04b3739'), image('photo-1523217582562-09d0def993a6'), image('photo-1600607688969-a5bfcd646154')],
    shortDescription: 'A retreat that lets landscape, texture and shade take the lead.',
    overview: 'An illustrative coastal residence pairing deeply shaded rooms with simple material gestures and framed garden views.',
    challenge: 'Hold privacy, weather protection and a close relationship to the landscape in a single, calm composition.',
    solution: 'Masonry planes create shelter while open courts and carefully positioned views keep the landscape present throughout.',
    scope: ['Design-to-build coordination', 'Residential build', 'Interior finishing'], highlights: ['Weathered stone palette', 'Outdoor rooms', 'Landscape-first planning'], seo: { title: 'Stonehouse Retreat | Zayden', description: 'Illustrative residential portfolio concept by Zayden.' },
  },
]

export const getProject = (slug: string) => projects.find((project) => project.slug === slug)

export const projectCategories = ['All', 'Residential', 'Commercial', 'Industrial', 'Infrastructure'] as const
