import { PRODUCT_NAME } from '@/config.js'

export const COMPARISON = {
  before: {
    title: `Without ${PRODUCT_NAME}`,
    items: [
      'Evidence scattered across a dozen disconnected tools',
      'Analysts manually reading hundreds of pages',
      'Biometric searches sent to external cloud services',
      'No single view of who is connected to whom',
      'Weeks to brief leadership on a complex case',
    ],
  },
  after: {
    title: `With ${PRODUCT_NAME}`,
    items: [
      'One dashboard for every evidence type you handle',
      'Ask questions — get cited answers in seconds',
      'Everything runs on hardware in your building',
      'Obsedian Molecules built automatically from your data',
      'Stakeholder-ready briefings in a single session',
    ],
  },
}

export const OUTCOME_STATS = [
  { value: 14, suffix: '+', label: 'Evidence types in one platform' },
  { value: 0, suffix: '', label: 'Cloud uploads required' },
  { value: 1, suffix: '', label: 'Dashboard for your whole team' },
  { value: 100, suffix: '%', label: 'On infrastructure you control' },
]
