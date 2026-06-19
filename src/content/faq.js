import { PRODUCT_NAME } from '@/config.js'

export const FAQ_ITEMS = [
  {
    q: 'Do we have to send evidence to the cloud?',
    a: `No. ${PRODUCT_NAME} runs entirely on infrastructure you control — your servers, your network, your rules. Nothing is uploaded to a third-party cloud for core workflows.`,
  },
  {
    q: 'How long does a demo take?',
    a: 'Most agencies choose a focused 10-minute tour or a full 20-minute platform reveal. We tailor scenarios to your priorities — face ID, document search, or the complete story.',
  },
  {
    q: 'Is this only for large agencies?',
    a: `Teams of all sizes use ${PRODUCT_NAME} — from field units with a single server to national labs with dedicated data centers. Setup scales to your environment.`,
  },
  {
    q: 'What about legal and audit requirements?',
    a: 'Every search, match, and ingest is logged. Document answers include page citations. Lens runs read-only queries — it can look, not alter, your records.',
  },
  {
    q: 'How is this different from tools we already have?',
    a: `Most agencies stitch together separate vendors for disk, mobile, biometrics, and documents. ${PRODUCT_NAME} is a full forensic OS — acquire, extract, correlate, and query in one platform with hash-first chain of custody.`,
  },
  {
    q: 'What do we need to get started?',
    a: 'Book a live demo first. We\'ll walk your team through a tailored environment and discuss deployment options for your agency\'s infrastructure and security requirements.',
  },
]
