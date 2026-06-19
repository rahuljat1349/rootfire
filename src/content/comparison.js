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
      'One forensic OS — acquire, extract, correlate, and query',
      'Hash-first Chain of Custody on every acquisition',
      'Documents, Volume, Prism, and Lens — all local, all cited',
      'Molecules builds entity, comms, and timeline graphs automatically',
      'Stakeholder-ready briefings in a single session',
    ],
  },
}

export const OUTCOME_STATS = [
  { value: 21, suffix: '+', label: 'Evidence categories covered' },
  { value: 0, suffix: '', label: 'Cloud uploads required' },
  { value: 1, suffix: '', label: 'Forensic OS for your team' },
  { value: 100, suffix: '%', label: 'On infrastructure you control' },
]
