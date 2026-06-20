/** Feature pages and capability cards — grouped under six flagship products. */

export const SCAN_CATEGORIES = {
  acquisition: 'Layer 1 — Acquisition & Preservation',
  extraction: 'Layer 2 — Artifact Extraction',
  analysis: 'Layer 3 — Analysis Engines',
  dfir: 'Layer 4 — DFIR & Cyber',
  intelligence: 'Layer 5 — Intelligence & Correlation',
}

export const SCAN_CATEGORY_ORDER = ['acquisition', 'extraction', 'analysis', 'dfir', 'intelligence']

export const SCAN_CATEGORY_TAGLINES = {
  acquisition:
    'Forensic copy, hash verification, and acquisition — before a single byte is analyzed.',
  extraction:
    'Parse everything — file system, registry, browser, mobile, cloud, database, and IoT artifacts.',
  analysis:
    'Branded engines for face, iris, media, and documents — powered by Prism, Iris, and Spectra.',
  dfir:
    'Endpoint, memory, malware, network, and timeline forensics for threat hunters and IR teams.',
  intelligence:
    'Correlate everything. Ask anything. See networks spreadsheets cannot show.',
}

export const VOLUME_HUB_TOOLS = ['coc', 'ram-dump', 'raw-organizer']

export const SCAN_TYPES = [
  // Flagship — Obsedian Volume
  {
    id: 'volume',
    label: 'Obsedian Volume',
    description:
      'The acquisition and evidence hub — chain of custody, disk and mobile imaging, artifact extraction, DFIR, documents, and platform capabilities.',
    icon: 'disk',
    animation: 'disk',
    category: 'acquisition',
    productId: 'volume',
    flagship: true,
    outcome: 'Acquisition & evidence hub',
  },
  // Volume capabilities
  {
    id: 'coc',
    label: 'Chain of Custody',
    description:
      'Forensic copy and cryptographic hashing first — prove evidence was never altered before analysis begins.',
    icon: 'coc',
    animation: 'coc',
    category: 'acquisition',
    productId: 'volume',
    outcome: 'Hash-verified copies',
  },
  {
    id: 'ram-dump',
    label: 'RAM Dumper',
    description:
      'Capture volatile memory — running processes, injected code, network sessions, encryption keys, and malware indicators.',
    icon: 'ram',
    animation: 'ram',
    category: 'acquisition',
    productId: 'volume',
    beta: true,
    outcome: 'Volatile memory capture',
  },
  {
    id: 'raw-organizer',
    label: 'Raw Organizer',
    description:
      'Structure unstructured raw dumps into parsed entities — then link findings into Obsedian Molecules.',
    icon: 'raw',
    animation: 'raw',
    category: 'acquisition',
    productId: 'volume',
    outcome: 'Structure raw evidence',
  },
  {
    id: 'documents',
    label: 'Documents',
    description:
      'Upload Word, PDF, Excel, PowerPoint, and text files — search by meaning with author metadata and page citations.',
    icon: 'document',
    animation: 'document',
    category: 'analysis',
    productId: 'volume',
    beta: true,
    outcome: 'Search by meaning',
  },
  {
    id: 'id-card',
    label: 'ID card analysis',
    description: 'Read identity documents automatically and cross-check the photo against your subject database.',
    icon: 'idcard',
    animation: 'idcard',
    category: 'analysis',
    productId: 'volume',
    beta: true,
    outcome: 'Instant ID verification',
  },
  {
    id: 'edr',
    label: 'EDR forensics',
    description:
      'Endpoint detection and response artifacts — process creation, execution traces, and threat indicators from endpoints.',
    icon: 'edr',
    animation: 'edr',
    category: 'dfir',
    productId: 'volume',
    beta: true,
    outcome: 'Endpoint threat intel',
  },
  {
    id: 'ipdr',
    label: 'IPDR forensics',
    description:
      'IP detail records and network session analysis — DNS, connections, VPN usage, and communication patterns.',
    icon: 'ipdr',
    animation: 'ipdr',
    category: 'dfir',
    productId: 'volume',
    beta: true,
    outcome: 'Network forensics',
  },
  {
    id: 'rootkit',
    label: 'Rootkit and fileless',
    description:
      'Detect hidden processes, injected code, and fileless malware — correlating memory and disk indicators for DFIR teams.',
    icon: 'rootkit',
    animation: 'rootkit',
    category: 'dfir',
    productId: 'volume',
    beta: true,
    outcome: 'Stealth threat detection',
  },
  // Flagship — Obsedian Prism
  {
    id: 'prism',
    label: 'Obsedian Prism',
    description:
      'Enroll, verify, and search faces — plus index moles, scars, and landmarks on every subject record.',
    icon: 'prism',
    animation: 'prism',
    category: 'analysis',
    productId: 'prism',
    flagship: true,
    outcome: 'Face intelligence',
  },
  // Flagship — Obsedian Iris
  {
    id: 'iris',
    label: 'Obsedian Iris',
    description:
      'Enroll, verify, and search iris scans in one workflow — enrollment, 1:1 checks, and 1:N identification on the same subject record.',
    icon: 'iris',
    animation: 'iris',
    category: 'analysis',
    productId: 'iris',
    flagship: true,
    outcome: 'Iris intelligence',
  },
  // Flagship — Obsedian Spectra
  {
    id: 'spectra',
    label: 'Obsedian Spectra',
    description:
      'Unified media intelligence — image artifacts, video and CCTV analytics, voice diarization, fingerprint matching, and batch processing.',
    icon: 'spectra',
    animation: 'spectra',
    category: 'analysis',
    productId: 'spectra',
    flagship: true,
    outcome: 'Media intelligence',
  },
  // Spectra capabilities
  {
    id: 'face-analyze',
    label: 'Photo analysis',
    description:
      'EXIF, GPS, PRNU sensor fingerprint, editing traces, OCR, embeddings, and deepfake indicators from any image.',
    icon: 'analyze',
    animation: 'analyze',
    category: 'analysis',
    productId: 'spectra',
    outcome: 'Full image artifacts',
  },
  {
    id: 'video',
    label: 'Video processing',
    description:
      'Detect every face and object in footage — match against your database and build a searchable timeline.',
    icon: 'video',
    animation: 'video',
    category: 'analysis',
    productId: 'spectra',
    outcome: 'Faces and objects',
  },
  {
    id: 'voice',
    label: 'Voice analysis',
    description:
      'Diarize multiple speakers, group voices, match to enrolled subjects, and surface relations through Molecules.',
    icon: 'audio',
    animation: 'audio',
    category: 'analysis',
    productId: 'spectra',
    beta: true,
    outcome: 'Multi-speaker intelligence',
  },
  {
    id: 'live-id',
    label: 'Live identification',
    description:
      'Connect any CCTV or remote camera — detect and match faces, objects, and entities in every frame in real time.',
    icon: 'live',
    animation: 'live',
    category: 'analysis',
    productId: 'spectra',
    outcome: 'Live multi-object matching',
  },
  {
    id: 'fingerprint',
    label: 'Fingerprints',
    description: 'Enroll and match fingerprint scans alongside face records — one subject, every modality.',
    icon: 'fingerprint',
    animation: 'fingerprint',
    category: 'analysis',
    productId: 'spectra',
    outcome: 'Second biometric layer',
  },
  {
    id: 'batch-detection',
    label: 'Batch ingestion',
    description:
      'Upload mixed evidence types in bulk — images, documents, dumps, and more — and let the platform triage automatically.',
    icon: 'batch',
    animation: 'batch',
    category: 'analysis',
    productId: 'spectra',
    outcome: 'Multi-type bulk pipeline',
  },
  // Flagship — Obsedian Molecules
  {
    id: 'molecules',
    label: 'Obsedian Molecules',
    description:
      'The correlation engine — entity, communication, timeline, device, and movement graphs from every evidence source.',
    icon: 'graph',
    animation: 'graph',
    category: 'intelligence',
    productId: 'molecules',
    flagship: true,
    outcome: 'Correlation engine',
  },
  // Flagship — Obsedian Lens
  {
    id: 'lens',
    label: 'Obsedian Lens',
    description:
      'Ask across photos, video, audio, documents, subjects, and detected objects — in plain English, with cited answers you can verify.',
    icon: 'lens',
    animation: 'lens',
    category: 'intelligence',
    productId: 'lens',
    flagship: true,
    beta: true,
    outcome: 'Investigation copilot',
  },
]

export function getFeatureById(id) {
  return SCAN_TYPES.find((f) => f.id === id) ?? null
}

export function getFlagshipFeatures() {
  return SCAN_TYPES.filter((f) => f.flagship)
}

export function getFeaturesForProduct(productId) {
  return SCAN_TYPES.filter((f) => f.productId === productId && !f.flagship)
}

export function getRelatedFeatures(id, limit = 3) {
  const feature = getFeatureById(id)
  if (!feature) return []

  if (feature.flagship) {
    return getFeaturesForProduct(feature.productId).slice(0, limit)
  }

  const flagship = getFeatureById(feature.productId)
  const siblings = getFeaturesForProduct(feature.productId).filter((f) => f.id !== id)
  const related = flagship ? [flagship, ...siblings] : siblings
  return related.slice(0, limit)
}
