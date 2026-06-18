export const SCAN_CATEGORIES = {
  biometric: 'Identify people',
  media: 'Analyze footage & images',
  document: 'Search case files',
  intelligence: 'Connect the dots',
}

export const SCAN_CATEGORY_ORDER = ['biometric', 'media', 'document', 'intelligence']

export const SCAN_CATEGORY_TAGLINES = {
  biometric: 'From a single photo to a positive ID — in seconds.',
  media: 'Turn hours of video into a timeline your team can actually use.',
  document: 'Find the needle in the PDF stack — with page citations.',
  intelligence: 'See who knows who, before your suspect disappears.',
}

export const SCAN_TYPES = [
  {
    id: 'prism',
    label: 'Obsedian Prism',
    description: 'Enroll, verify, and search faces in one workflow — build your index, run 1:1 checks, and 1:N identification on the same subject records.',
    icon: 'prism',
    animation: 'prism',
    category: 'biometric',
    outcome: 'Enroll · verify · search',
  },
  {
    id: 'live-id',
    label: 'Live identification',
    description: 'Point a camera at a crowd or checkpoint and get real-time alerts when a known subject appears.',
    icon: 'live',
    animation: 'live',
    category: 'biometric',
    outcome: 'Field-ready matching',
  },
  {
    id: 'face-analyze',
    label: 'Photo analysis',
    description: 'Extract age range, demographics, and attributes from evidence photos to narrow your search.',
    icon: 'analyze',
    animation: 'analyze',
    category: 'biometric',
    outcome: 'Profile from a photo',
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
    id: 'iris',
    label: 'Obsedian Iris',
    description: 'Enroll, verify, and search iris scans in one workflow — enrollment, 1:1 checks, and 1:N identification on the same subject record.',
    icon: 'iris',
    animation: 'iris',
    category: 'biometric',
    outcome: 'Enroll · verify · search',
  },
  {
    id: 'voice',
    label: 'Voice analysis',
    description: 'Identify speakers in recordings, match voices to enrolled subjects, and search audio evidence.',
    icon: 'audio',
    animation: 'audio',
    category: 'biometric',
    beta: true,
    outcome: 'Match by voice',
  },
  {
    id: 'video',
    label: 'Video processing',
    description: 'Upload footage and get a searchable timeline of every face detected — frame by frame.',
    icon: 'video',
    animation: 'video',
    category: 'media',
    outcome: 'Timeline from footage',
  },
  {
    id: 'batch-detection',
    label: 'Batch detection',
    description: 'Process dozens of images at once. Know exactly how many faces appear in each file.',
    icon: 'batch',
    animation: 'batch',
    category: 'media',
    outcome: 'Bulk image screening',
  },
  {
    id: 'disk-analysis',
    label: 'Disk analysis',
    description: 'Mount seized drives and disk images, catalog every file, and surface the evidence that matters — locally.',
    icon: 'disk',
    animation: 'disk',
    category: 'media',
    beta: true,
    outcome: 'Forensics from seized media',
  },
  {
    id: 'chargesheet',
    label: 'Chargesheets',
    description: 'Upload investigation PDFs and search them by meaning — not just keywords. Every answer cites the page.',
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
  {
    id: 'lens',
    label: 'Obsedian Lens',
    description: 'Ask across photos, video, audio, documents, subjects, and detected objects — in plain English, with cited answers you can verify.',
    icon: 'lens',
    animation: 'lens',
    category: 'intelligence',
    beta: true,
    outcome: 'Plain-English answers',
  },
  {
    id: 'molecules',
    label: 'Obsedian Molecules',
    description: 'See how subjects, documents, and captures link together — co-appearances, shared cases, hidden networks.',
    icon: 'graph',
    animation: 'graph',
    category: 'intelligence',
    beta: true,
    outcome: 'Visualize networks',
  },
]

export function getFeatureById(id) {
  return SCAN_TYPES.find((f) => f.id === id) ?? null
}

export function getRelatedFeatures(id, limit = 3) {
  const feature = getFeatureById(id)
  if (!feature) return []
  return SCAN_TYPES.filter((f) => f.category === feature.category && f.id !== id).slice(0, limit)
}
