import { Building2, Compass, Factory, Leaf, PenTool, Ruler, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Service = {
  slug: string
  title: string
  shortTitle: string
  eyebrow: string
  summary: string
  detail: string
  image: string
  icon: LucideIcon
  inclusions: string[]
  outcomes: string[]
}

const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=85`

export const services: Service[] = [
  {
    slug: 'residential-construction', title: 'Residential Construction', shortTitle: 'Residential', eyebrow: 'Homes with a long view',
    summary: 'Tailored homes and residential environments composed around daily life, durability and calm.',
    detail: 'From a finely detailed villa to a multi-residence development, our approach joins buildability with a clear architectural point of view.',
    image: image('photo-1600607687920-4e2a09cf159d'), icon: Building2,
    inclusions: ['Pre-construction coordination', 'Site delivery & quality controls', 'Interior fit-out integration'], outcomes: ['A clear path from concept to completion', 'Materials selected for place and longevity', 'One accountable delivery rhythm'],
  },
  {
    slug: 'commercial-construction', title: 'Commercial Construction', shortTitle: 'Commercial', eyebrow: 'Spaces that perform',
    summary: 'Workplaces, hospitality and mixed-use settings engineered for operational clarity and memorable arrival.',
    detail: 'We coordinate ambitious commercial environments with stakeholders, consultants and specialist trades around a shared delivery plan.',
    image: image('photo-1497366811353-6870744d04b2'), icon: Ruler,
    inclusions: ['Programme and package planning', 'Consultant coordination', 'Occupancy-ready handover'], outcomes: ['High-function spaces with a measured character', 'Clear reporting at every decision point', 'A refined experience for occupants and visitors'],
  },
  {
    slug: 'industrial-infrastructure', title: 'Industrial & Infrastructure', shortTitle: 'Infrastructure', eyebrow: 'Resilience by design',
    summary: 'Complex infrastructure and industrial environments delivered with rigorous technical sequencing.',
    detail: 'We bring planning discipline to the systems, scale and interface management that make critical environments work.',
    image: image('photo-1503387762-592deb58ef4e'), icon: Factory,
    inclusions: ['Technical planning', 'Phased delivery strategy', 'Specialist trade coordination'], outcomes: ['Safe, legible delivery systems', 'Operational priorities protected throughout', 'Practical documentation for long-term care'],
  },
  {
    slug: 'architectural-planning', title: 'Architectural Planning', shortTitle: 'Planning', eyebrow: 'An intelligent beginning',
    summary: 'Early-stage planning that turns an ambition into a well-resolved, achievable proposition.',
    detail: 'Our planning work connects spatial intent with cost, programme, approvals and the practical realities of making.',
    image: image('photo-1497366754035-f200968a6e72'), icon: Compass,
    inclusions: ['Feasibility studies', 'Brief development', 'Planning coordination'], outcomes: ['Better decisions earlier', 'A useful design brief', 'A confident basis for investment'],
  },
  {
    slug: 'fit-out-renovation', title: 'Renovation & Fit-Out', shortTitle: 'Fit-out', eyebrow: 'Renew with intention',
    summary: 'Sensitive transformations and interiors that make more of an existing place.',
    detail: 'We reframe existing spaces with a strong respect for what is worth keeping, upgrading performance without losing character.',
    image: image('photo-1600210492486-724fe5c67fb0'), icon: Wrench,
    inclusions: ['Existing-condition review', 'Phased renovation planning', 'Interior delivery'], outcomes: ['Minimum disruption, maximum effect', 'A coherent material palette', 'New life for valuable existing fabric'],
  },
  {
    slug: 'project-management', title: 'Project Management', shortTitle: 'Delivery', eyebrow: 'Alignment in motion',
    summary: 'A transparent, project-wide view of budget, time, quality and risk.',
    detail: 'We create the decision structures that keep complex projects aligned from first meeting to final close-out.',
    image: image('photo-1524758631624-e2822e304c36'), icon: PenTool,
    inclusions: ['Programme controls', 'Cost & risk visibility', 'Quality assurance systems'], outcomes: ['One readable source of truth', 'Issues resolved before they become delays', 'More confidence across every stakeholder'],
  },
  {
    slug: 'sustainable-building', title: 'Sustainable Building', shortTitle: 'Sustainability', eyebrow: 'A responsible legacy',
    summary: 'Practical, place-led choices for lower-impact buildings and more resource-aware delivery.',
    detail: 'We support early choices around materiality, passive design, resource use and future adaptability—always tailored to the project.',
    image: image('photo-1494526585095-c41746248156'), icon: Leaf,
    inclusions: ['Material thought-starters', 'Passive-design coordination', 'Responsible delivery practices'], outcomes: ['Environmental thinking woven into the brief', 'Practical, measurable opportunities', 'Longer-lived, more adaptable places'],
  },
]
