import { PRODUCT_NAME } from '@/config.js'

export const COMPARISON = {
  before: {
    title: `Without ${PRODUCT_NAME}`,
    items: [
      'A dozen disconnected point tools for disk, mobile, biometrics, and docs',
      'No hash verification before analysis — chain of custody gaps',
      'Analysts manually reading hundreds of pages and spreadsheets',
      'No single evidence graph connecting people, devices, and communications',
      'Weeks to brief leadership on a complex case',
    ],
  },
  after: {
    title: `With ${PRODUCT_NAME}`,
    items: [
      'Six flagship products — Volume, Prism, Iris, Spectra, Molecules, Lens',
      'Five OS layers from acquisition through correlation — not a flat tool grid',
      'Hash-first Chain of Custody on every acquisition via Volume',
      'Molecules builds entity, comms, and timeline graphs automatically',
      'Stakeholder-ready briefings in a single session with Lens',
    ],
  },
}

export const OUTCOME_STATS = [
  { value: 6, suffix: '', label: 'Flagship products' },
  { value: 5, suffix: '', label: 'OS layers' },
  { value: 1, suffix: '', label: 'Forensic operating system' },
  { value: 100, suffix: '%', label: 'On infrastructure you control' },
]
