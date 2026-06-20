import { PRODUCTS, FAMILY_ORDER, PRODUCT_FAMILIES } from '@/content/productEcosystem.js'
import { SOLUTIONS } from '@/content/solutions.js'
import { INDUSTRIES } from '@/content/industries.js'

export const PRIMARY_NAV = [
  { id: 'products', label: 'Products', type: 'mega', megaKey: 'products' },
  { id: 'solutions', label: 'Solutions', type: 'mega', megaKey: 'solutions' },
  { id: 'industries', label: 'Industries', type: 'mega', megaKey: 'industries' },
  { id: 'platform', label: 'Platform', to: '/platform' },
  { id: 'trust', label: 'Trust', to: '/trust' },
  { id: 'about', label: 'About', to: '/about' },
]

export const MEGA_MENUS = {
  products: {
    title: 'Products',
    hubLink: { label: 'View full ecosystem', to: '/products' },
    columns: FAMILY_ORDER.map((familyId) => ({
      id: familyId,
      label: PRODUCT_FAMILIES[familyId].label,
      links: PRODUCTS.filter((p) => p.family === familyId).map((p) => ({
        id: p.id,
        label: p.shortName,
        to: `/products/${p.slug}`,
      })),
    })),
  },
  solutions: {
    title: 'Solutions',
    hubLink: { label: 'View all solutions', to: '/solutions' },
    links: SOLUTIONS.map((s) => ({
      id: s.id,
      label: s.label,
      to: `/solutions/${s.slug}`,
    })),
  },
  industries: {
    title: 'Industries',
    hubLink: { label: 'View all industries', to: '/industries' },
    links: INDUSTRIES.map((i) => ({
      id: i.id,
      label: i.label,
      to: `/industries/${i.slug}`,
    })),
  },
}

export const FOOTER_COLUMNS = [
  {
    title: 'Foundation',
    links: PRODUCTS.filter((p) => p.family === 'foundation').map((p) => ({
      label: p.shortName,
      to: `/products/${p.slug}`,
    })),
  },
  {
    title: 'Analysis',
    links: PRODUCTS.filter((p) => p.family === 'analysis').map((p) => ({
      label: p.shortName,
      to: `/products/${p.slug}`,
    })),
  },
  {
    title: 'DFIR & Intelligence',
    links: PRODUCTS.filter((p) => ['dfir', 'intelligence'].includes(p.family)).map((p) => ({
      label: p.shortName,
      to: `/products/${p.slug}`,
    })),
  },
  {
    title: 'Company',
    links: [
      { label: 'Platform', to: '/platform' },
      { label: 'Solutions', to: '/solutions' },
      { label: 'Industries', to: '/industries' },
      { label: 'Trust', to: '/trust' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Request Demo', to: '/demo' },
    ],
  },
]
