export const SCAN_CATEGORIES = {
  foundation: 'Preserve and acquire',
  biometric: 'Identify people',
  media: 'Analyze footage and images',
  dfir: 'Threat and DFIR',
  document: 'Search case files',
  intelligence: 'Connect the dots',
}

export const SCAN_CATEGORY_ORDER = [
  'foundation',
  'biometric',
  'media',
  'dfir',
  'document',
  'intelligence',
]

export const SCAN_CATEGORY_TAGLINES = {
  foundation:
    'Forensic copy, hash verification, and acquisition — before a single byte is analyzed.',
  biometric:
    'From a single photo to a positive ID — enroll, verify, search, and profile.',
  media:
    'Turn hours of video and bulk evidence into timelines and searchable artifacts.',
  dfir:
    'Endpoint, network, and memory forensics for threat hunters and DFIR teams.',
  document:
    'Every document type indexed — search by meaning with page citations.',
  intelligence:
    'Correlate everything. Ask anything. See networks spreadsheets cannot show.',
}

/** Volume hub — related foundation tools shown on detail page */
export const VOLUME_HUB_TOOLS = ['coc', 'ram-dump', 'raw-organizer']

export const SCAN_TYPES = [
  // Layer 1 — Forensic OS foundation
  {
    id: 'coc',
    label: 'Chain of Custody',
    description:
      'Forensic copy and cryptographic hashing first — prove evidence was never altered before analysis begins.',
    icon: 'coc',
    animation: 'coc',
    category: 'foundation',
    outcome: 'Hash-verified copies',
  },
  {
    id: 'volume',
    label: 'Obsedian Volume',
    description:
      'Disk and mobile acquisition hub — mount images, catalog files, extract calls, apps, and artifacts. Copy + hash before analysis.',
    icon: 'disk',
    animation: 'disk',
    category: 'foundation',
    beta: true,
    outcome: 'Full media forensics',
  },
  {
    id: 'ram-dump',
    label: 'RAM Dumper',
    description:
      'Capture volatile memory — running processes, injected code, network sessions, encryption keys, and malware indicators.',
    icon: 'ram',
    animation: 'ram',
    category: 'foundation',
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
    category: 'foundation',
    outcome: 'Structure raw evidence',
  },
  // Layer 2 — Analysis engines
  {
    id: 'prism',
    label: 'Obsedian Prism',
    description:
      'Enroll, verify, and search faces — plus index moles, scars, and landmarks on every subject record.',
    icon: 'prism',
    animation: 'prism',
    category: 'biometric',
    outcome: 'Enroll · verify · search',
  },
  {
    id: 'iris',
    label: 'Obsedian Iris',
    description:
      'Enroll, verify, and search iris scans in one workflow — enrollment, 1:1 checks, and 1:N identification on the same subject record.',
    icon: 'iris',
    animation: 'iris',
    category: 'biometric',
    outcome: 'Enroll · verify · search',
  },
  {
    id: 'fingerprint',
    label: 'Fingerprints',
    description: 'Enroll and match fingerprint scans alongside face records — one subject, every modality.',
    icon: 'fingerprint',
    animation: 'fingerprint',
    category: 'biometric',
    outcome: 'Second biometric layer',
  },
  {
    id: 'voice',
    label: 'Voice analysis',
    description:
      'Diarize multiple speakers, group voices, match to enrolled subjects, and surface relations through Molecules.',
    icon: 'audio',
    animation: 'audio',
    category: 'biometric',
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
    category: 'biometric',
    outcome: 'Live multi-object matching',
  },
  {
    id: 'face-analyze',
    label: 'Photo analysis',
    description:
      'EXIF, GPS, PRNU sensor fingerprint, editing traces, OCR, embeddings, and deepfake indicators from any image.',
    icon: 'analyze',
    animation: 'analyze',
    category: 'biometric',
    outcome: 'Full image artifacts',
  },
  {
    id: 'video',
    label: 'Video processing',
    description:
      'Detect every face and object in footage — match against your database and build a searchable timeline.',
    icon: 'video',
    animation: 'video',
    category: 'media',
    outcome: 'Faces and objects',
  },
  {
    id: 'batch-detection',
    label: 'Batch ingestion',
    description:
      'Upload mixed evidence types in bulk — images, documents, dumps, and more — and let the platform triage automatically.',
    icon: 'batch',
    animation: 'batch',
    category: 'media',
    outcome: 'Multi-type bulk pipeline',
  },
  // Layer 3 — DFIR
  {
    id: 'edr',
    label: 'EDR forensics',
    description:
      'Endpoint detection and response artifacts — process creation, execution traces, and threat indicators from endpoints.',
    icon: 'edr',
    animation: 'edr',
    category: 'dfir',
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
    beta: true,
    outcome: 'Stealth threat detection',
  },
  // Layer 4 — Documents
  {
    id: 'documents',
    label: 'Documents',
    description:
      'Upload Word, PDF, Excel, PowerPoint, and text files — search by meaning with author metadata and page citations.',
    icon: 'document',
    animation: 'document',
    category: 'document',
    beta: true,
    outcome: 'Search by meaning',
  },
  {
    id: 'id-card',
    label: 'ID card analysis',
    description: 'Read identity documents automatically and cross-check the photo against your subject database.',
    icon: 'idcard',
    animation: 'idcard',
    category: 'document',
    beta: true,
    outcome: 'Instant ID verification',
  },
  // Layer 5 — Intelligence
  {
    id: 'lens',
    label: 'Obsedian Lens',
    description:
      'Ask across photos, video, audio, documents, subjects, and detected objects — in plain English, with cited answers you can verify.',
    icon: 'lens',
    animation: 'lens',
    category: 'intelligence',
    beta: true,
    outcome: 'Plain-English answers',
  },
  {
    id: 'molecules',
    label: 'Obsedian Molecules',
    description:
      'The correlation engine — entity, communication, timeline, device, and movement graphs from every evidence source.',
    icon: 'graph',
    animation: 'graph',
    category: 'intelligence',
    beta: true,
    outcome: 'Evidence graph',
  },
]

export function getFeatureById(id) {
  return SCAN_TYPES.find((f) => f.id === id) ?? null
}

export function getRelatedFeatures(id, limit = 3) {
  const feature = getFeatureById(id)
  if (!feature) return []

  if (id === 'volume') {
    return VOLUME_HUB_TOOLS.map((hubId) => getFeatureById(hubId)).filter(Boolean)
  }

  return SCAN_TYPES.filter((f) => f.category === feature.category && f.id !== id).slice(0, limit)
}
