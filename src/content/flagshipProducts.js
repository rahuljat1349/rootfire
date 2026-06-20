/** Six flagship products — the OS surface area vs AXIOM, Cellebrite, Belkasoft, Nuix. */

import { getCapabilitiesForProduct } from '@/content/platformLayers.js'

export const FLAGSHIP_PRODUCTS = [
  {
    id: 'volume',
    label: 'Obsedian Volume',
    shortName: 'Volume',
    role: 'Acquisition & Evidence Hub',
    description:
      'The foundation of the forensic OS — chain of custody, disk and mobile acquisition, artifact extraction, DFIR tooling, documents, and enterprise platform capabilities. Everything investigators touch first lives here.',
    icon: 'disk',
    animation: 'disk',
    layers: [1, 2, 4],
    competitorNote: 'Replaces the acquisition + parsing + DFIR stack from point tools.',
  },
  {
    id: 'prism',
    label: 'Obsedian Prism',
    shortName: 'Prism',
    role: 'Face Intelligence',
    description:
      'Complete face biometrics — enrollment, verification, 1:N search, facial landmark analysis, and facial feature indexing on every subject record.',
    icon: 'prism',
    animation: 'prism',
    layers: [3],
    competitorNote: 'Face intelligence beyond basic 1:N matching.',
  },
  {
    id: 'iris',
    label: 'Obsedian Iris',
    shortName: 'Iris',
    role: 'Iris Intelligence',
    description:
      'Iris enrollment, 1:1 verification, and 1:N search — a dedicated iris engine linked to the same subject records as Prism.',
    icon: 'iris',
    animation: 'iris',
    layers: [3],
    competitorNote: 'Dedicated iris modality, not an afterthought.',
  },
  {
    id: 'spectra',
    label: 'Obsedian Spectra',
    shortName: 'Spectra',
    role: 'Media Intelligence',
    description:
      'Image, video, audio, and fingerprint analysis — EXIF to PRNU, multi-speaker diarization, CCTV analytics, object tracking, and batch media processing in one engine.',
    icon: 'spectra',
    animation: 'spectra',
    layers: [3],
    competitorNote: 'Unified media analysis — image, video, and audio together.',
  },
  {
    id: 'molecules',
    label: 'Obsedian Molecules',
    shortName: 'Molecules',
    role: 'Correlation Engine',
    description:
      'The investigative differentiator — entity, communication, timeline, device, location, and movement graphs built automatically from every evidence source.',
    icon: 'graph',
    animation: 'graph',
    layers: [5],
    competitorNote: 'Where modern forensic platforms derive most investigative value.',
  },
  {
    id: 'lens',
    label: 'Obsedian Lens',
    shortName: 'Lens',
    role: 'Investigation Copilot',
    description:
      'Natural-language investigation across the full OS — cross-evidence search, narrative building, hypothesis testing, and court-ready report generation.',
    icon: 'lens',
    animation: 'lens',
    layers: [5],
    competitorNote: 'Plain-English queries with cited answers — not another search box.',
  },
]

/** Deep-dive feature pages grouped under each flagship product */
export const PRODUCT_FEATURE_IDS = {
  volume: ['coc', 'volume', 'ram-dump', 'raw-organizer', 'documents', 'id-card', 'edr', 'ipdr', 'rootkit'],
  prism: ['prism'],
  iris: ['iris'],
  spectra: ['face-analyze', 'video', 'voice', 'live-id', 'fingerprint', 'batch-detection'],
  molecules: ['molecules'],
  lens: ['lens'],
}

export function getFlagshipById(id) {
  return FLAGSHIP_PRODUCTS.find((p) => p.id === id) ?? null
}

export function getFlagshipForFeature(featureId) {
  for (const [productId, featureIds] of Object.entries(PRODUCT_FEATURE_IDS)) {
    if (featureIds.includes(featureId)) return getFlagshipById(productId)
  }
  return null
}

export function getProductCapabilityGroups(productId) {
  const caps = getCapabilitiesForProduct(productId)
  const groups = new Map()

  for (const cap of caps) {
    const key = cap.group ?? cap.layerId
    if (!groups.has(key)) {
      groups.set(key, { title: cap.group ?? null, layerId: cap.layerId, items: [] })
    }
    groups.get(key).items.push(cap)
  }

  return [...groups.values()]
}
