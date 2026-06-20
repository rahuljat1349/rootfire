/** Five-layer Forensic OS architecture — capabilities map to flagship products. */

export const PLATFORM_LAYERS = {
  acquisition: {
    id: 'acquisition',
    number: 1,
    title: 'Acquisition & Preservation',
    tagline: 'The first things investigators touch — integrity preservation and chain-of-custody are foundational.',
    productId: 'volume',
  },
  extraction: {
    id: 'extraction',
    number: 2,
    title: 'Artifact Extraction',
    tagline: 'The parse-everything layer — computer, mobile, cloud, database, network, and IoT evidence sources.',
    productId: 'volume',
  },
  analysis: {
    id: 'analysis',
    number: 3,
    title: 'Analysis Engines',
    tagline: 'Branded engines for biometrics, media, and documents — powered by Prism, Iris, and Spectra.',
    productId: null,
  },
  dfir: {
    id: 'dfir',
    number: 4,
    title: 'DFIR & Cyber',
    tagline: 'Endpoint, memory, malware, network, and forensic workflows for threat hunters and IR teams.',
    productId: 'volume',
  },
  intelligence: {
    id: 'intelligence',
    number: 5,
    title: 'Intelligence & Correlation',
    tagline: 'Where investigations become actionable — graphs, queries, and narrative from every evidence source.',
    productId: null,
  },
  platform: {
    id: 'platform',
    number: null,
    title: 'Cross-Cutting Platform',
    tagline: 'Enterprise capabilities that span every layer — audit, export, automation, and governance.',
    productId: 'volume',
  },
}

export const LAYER_ORDER = [
  'acquisition',
  'extraction',
  'analysis',
  'dfir',
  'intelligence',
  'platform',
]

/** @typedef {{ id: string, label: string, productId: string, featureId?: string, group?: string }} Capability */

export const LAYER_CAPABILITIES = {
  acquisition: [
    { id: 'coc', label: 'Chain of Custody (CoC)', productId: 'volume', featureId: 'coc' },
    { id: 'evidence-acquisition', label: 'Evidence Acquisition', productId: 'volume', featureId: 'volume' },
    { id: 'disk-imaging', label: 'Disk Imaging', productId: 'volume', featureId: 'volume' },
    { id: 'mobile-acquisition', label: 'Mobile Acquisition', productId: 'volume', featureId: 'volume' },
    { id: 'ram-dump', label: 'RAM Dumper', productId: 'volume', featureId: 'ram-dump' },
    { id: 'live-response', label: 'Live Response Collector', productId: 'volume' },
    { id: 'hash-verification', label: 'Hash Verification Engine', productId: 'volume', featureId: 'coc' },
    { id: 'raw-organizer', label: 'Raw Evidence Organizer', productId: 'volume', featureId: 'raw-organizer' },
    { id: 'evidence-vault', label: 'Evidence Vault', productId: 'volume' },
    { id: 'case-management', label: 'Case Management', productId: 'volume' },
  ],
  extraction: [
    { id: 'filesystem', label: 'File System Analysis', productId: 'volume', featureId: 'volume' },
    { id: 'registry', label: 'Registry Analysis', productId: 'volume', featureId: 'volume' },
    { id: 'browser', label: 'Browser Analysis', productId: 'volume', featureId: 'volume' },
    { id: 'email', label: 'Email Analysis', productId: 'volume', featureId: 'volume' },
    { id: 'chat', label: 'Chat Analysis', productId: 'volume', featureId: 'volume' },
    { id: 'call-log', label: 'Call Log Analysis', productId: 'volume', featureId: 'volume' },
    { id: 'application', label: 'Application Analysis', productId: 'volume', featureId: 'volume' },
    { id: 'cloud-artifact', label: 'Cloud Artifact Analysis', productId: 'volume', featureId: 'volume' },
    { id: 'mobile-artifact', label: 'Mobile Artifact Analysis', productId: 'volume', featureId: 'volume' },
    { id: 'database', label: 'Database Analysis', productId: 'volume', featureId: 'volume' },
    { id: 'cryptocurrency', label: 'Cryptocurrency Analysis', productId: 'volume', featureId: 'volume' },
    { id: 'vehicle', label: 'Vehicle Forensics', productId: 'volume', featureId: 'volume' },
    { id: 'iot', label: 'IoT Forensics', productId: 'volume', featureId: 'volume' },
  ],
  analysis: [
    { id: 'face-recognition', label: 'Face Recognition', productId: 'prism', group: 'Obsedian Prism', featureId: 'prism' },
    { id: 'facial-landmarks', label: 'Facial Landmark Analysis', productId: 'prism', group: 'Obsedian Prism', featureId: 'prism' },
    { id: 'facial-features', label: 'Facial Feature Indexing', productId: 'prism', group: 'Obsedian Prism', featureId: 'prism' },
    { id: 'subject-enrollment', label: 'Subject Enrollment', productId: 'prism', group: 'Obsedian Prism', featureId: 'prism' },
    { id: 'subject-search', label: 'Subject Search', productId: 'prism', group: 'Obsedian Prism', featureId: 'prism' },
    { id: 'iris-recognition', label: 'Iris Recognition', productId: 'iris', group: 'Obsedian Iris', featureId: 'iris' },
    { id: 'iris-enrollment', label: 'Iris Enrollment', productId: 'iris', group: 'Obsedian Iris', featureId: 'iris' },
    { id: 'iris-search', label: 'Iris Search', productId: 'iris', group: 'Obsedian Iris', featureId: 'iris' },
    { id: 'speaker-recognition', label: 'Speaker Recognition', productId: 'spectra', group: 'Voice Engine', featureId: 'voice' },
    { id: 'speaker-clustering', label: 'Speaker Clustering', productId: 'spectra', group: 'Voice Engine', featureId: 'voice' },
    { id: 'speaker-diarization', label: 'Speaker Diarization', productId: 'spectra', group: 'Voice Engine', featureId: 'voice' },
    { id: 'voice-matching', label: 'Voice Matching', productId: 'spectra', group: 'Voice Engine', featureId: 'voice' },
    { id: 'exif', label: 'EXIF Analysis', productId: 'spectra', group: 'Image Engine', featureId: 'face-analyze' },
    { id: 'gps', label: 'GPS Extraction', productId: 'spectra', group: 'Image Engine', featureId: 'face-analyze' },
    { id: 'prnu', label: 'PRNU Analysis', productId: 'spectra', group: 'Image Engine', featureId: 'face-analyze' },
    { id: 'sensor-fingerprint', label: 'Sensor Fingerprinting', productId: 'spectra', group: 'Image Engine', featureId: 'face-analyze' },
    { id: 'manipulation', label: 'Manipulation Detection', productId: 'spectra', group: 'Image Engine', featureId: 'face-analyze' },
    { id: 'deepfake', label: 'Deepfake Detection', productId: 'spectra', group: 'Image Engine', featureId: 'face-analyze' },
    { id: 'image-ocr', label: 'OCR', productId: 'spectra', group: 'Image Engine', featureId: 'face-analyze' },
    { id: 'object-detection', label: 'Object Detection', productId: 'spectra', group: 'Image Engine', featureId: 'face-analyze' },
    { id: 'face-tracking', label: 'Face Tracking', productId: 'spectra', group: 'Video Engine', featureId: 'video' },
    { id: 'object-tracking', label: 'Object Tracking', productId: 'spectra', group: 'Video Engine', featureId: 'video' },
    { id: 'vehicle-detection', label: 'Vehicle Detection', productId: 'spectra', group: 'Video Engine', featureId: 'video' },
    { id: 'person-reid', label: 'Person Re-identification', productId: 'spectra', group: 'Video Engine', featureId: 'video' },
    { id: 'multi-camera', label: 'Multi-Camera Tracking', productId: 'spectra', group: 'Video Engine', featureId: 'live-id' },
    { id: 'cctv-analytics', label: 'CCTV Analytics', productId: 'spectra', group: 'Video Engine', featureId: 'live-id' },
    { id: 'fp-enrollment', label: 'Fingerprint Enrollment', productId: 'spectra', group: 'Fingerprint Engine', featureId: 'fingerprint' },
    { id: 'fp-matching', label: 'Fingerprint Matching', productId: 'spectra', group: 'Fingerprint Engine', featureId: 'fingerprint' },
    { id: 'latent-enhancement', label: 'Latent Print Enhancement', productId: 'spectra', group: 'Fingerprint Engine', featureId: 'fingerprint' },
    { id: 'pdf-analysis', label: 'PDF Analysis', productId: 'volume', group: 'Document Engine', featureId: 'documents' },
    { id: 'word-analysis', label: 'Word Analysis', productId: 'volume', group: 'Document Engine', featureId: 'documents' },
    { id: 'spreadsheet', label: 'Spreadsheet Analysis', productId: 'volume', group: 'Document Engine', featureId: 'documents' },
    { id: 'presentation', label: 'Presentation Analysis', productId: 'volume', group: 'Document Engine', featureId: 'documents' },
    { id: 'metadata-extraction', label: 'Metadata Extraction', productId: 'volume', group: 'Document Engine', featureId: 'documents' },
    { id: 'doc-ocr', label: 'OCR', productId: 'volume', group: 'Document Engine', featureId: 'documents' },
    { id: 'semantic-search', label: 'Semantic Search', productId: 'volume', group: 'Document Engine', featureId: 'documents' },
    { id: 'signature-detection', label: 'Signature Detection', productId: 'volume', group: 'Document Engine', featureId: 'documents' },
    { id: 'batch-processing', label: 'Batch Processing', productId: 'spectra', group: 'Media Pipeline', featureId: 'batch-detection' },
  ],
  dfir: [
    { id: 'edr', label: 'EDR', productId: 'volume', featureId: 'edr' },
    { id: 'threat-hunting', label: 'Threat Hunting', productId: 'volume', featureId: 'edr' },
    { id: 'malware-analysis', label: 'Malware Analysis', productId: 'volume' },
    { id: 'rootkit-detection', label: 'Rootkit Detection', productId: 'volume', featureId: 'rootkit' },
    { id: 'fileless-malware', label: 'Fileless Malware Detection', productId: 'volume', featureId: 'rootkit' },
    { id: 'network-forensics', label: 'Network Forensics', productId: 'volume', featureId: 'ipdr' },
    { id: 'ipdr-analysis', label: 'IPDR Analysis', productId: 'volume', featureId: 'ipdr' },
    { id: 'memory-forensics', label: 'Memory Forensics', productId: 'volume', featureId: 'ram-dump' },
    { id: 'process-analysis', label: 'Process Analysis', productId: 'volume', featureId: 'ram-dump' },
    { id: 'persistence', label: 'Persistence Detection', productId: 'volume', featureId: 'edr' },
    { id: 'lateral-movement', label: 'Lateral Movement Detection', productId: 'volume', featureId: 'edr' },
    { id: 'timeline-reconstruction', label: 'Timeline Reconstruction', productId: 'molecules', featureId: 'molecules' },
  ],
  intelligence: [
    { id: 'entity-graph', label: 'Entity Graph', productId: 'molecules', group: 'Obsedian Molecules', featureId: 'molecules' },
    { id: 'relationship-graph', label: 'Relationship Graph', productId: 'molecules', group: 'Obsedian Molecules', featureId: 'molecules' },
    { id: 'communication-graph', label: 'Communication Graph', productId: 'molecules', group: 'Obsedian Molecules', featureId: 'molecules' },
    { id: 'device-graph', label: 'Device Graph', productId: 'molecules', group: 'Obsedian Molecules', featureId: 'molecules' },
    { id: 'account-graph', label: 'Account Graph', productId: 'molecules', group: 'Obsedian Molecules', featureId: 'molecules' },
    { id: 'timeline-graph', label: 'Timeline Graph', productId: 'molecules', group: 'Obsedian Molecules', featureId: 'molecules' },
    { id: 'location-graph', label: 'Location Graph', productId: 'molecules', group: 'Obsedian Molecules', featureId: 'molecules' },
    { id: 'movement-graph', label: 'Movement Graph', productId: 'molecules', group: 'Obsedian Molecules', featureId: 'molecules' },
    { id: 'social-network', label: 'Social Network Graph', productId: 'molecules', group: 'Obsedian Molecules', featureId: 'molecules' },
    { id: 'evidence-correlation', label: 'Evidence Correlation', productId: 'molecules', group: 'Obsedian Molecules', featureId: 'molecules' },
    { id: 'nl-investigation', label: 'Natural Language Investigation', productId: 'lens', group: 'Obsedian Lens', featureId: 'lens' },
    { id: 'cross-evidence-search', label: 'Cross-Evidence Search', productId: 'lens', group: 'Obsedian Lens', featureId: 'lens' },
    { id: 'investigative-copilot', label: 'Investigative Copilot', productId: 'lens', group: 'Obsedian Lens', featureId: 'lens' },
    { id: 'report-generation', label: 'Report Generation', productId: 'lens', group: 'Obsedian Lens', featureId: 'lens' },
    { id: 'narrative-building', label: 'Narrative Building', productId: 'lens', group: 'Obsedian Lens', featureId: 'lens' },
    { id: 'hypothesis-testing', label: 'Hypothesis Testing', productId: 'lens', group: 'Obsedian Lens', featureId: 'lens' },
  ],
  platform: [
    { id: 'distributed-processing', label: 'Distributed Processing', productId: 'volume' },
    { id: 'multi-tenant', label: 'Multi-Tenant', productId: 'volume' },
    { id: 'audit-logs', label: 'Audit Logs', productId: 'volume' },
    { id: 'court-reporting', label: 'Court-Ready Reporting', productId: 'volume' },
    { id: 'evidence-export', label: 'Evidence Export', productId: 'volume' },
    { id: 'api-platform', label: 'API Platform', productId: 'volume' },
    { id: 'rbac', label: 'RBAC', productId: 'volume' },
    { id: 'workflow-automation', label: 'Workflow Automation', productId: 'volume' },
    { id: 'alerting', label: 'Alerting', productId: 'volume' },
    { id: 'data-retention', label: 'Data Retention', productId: 'volume' },
    { id: 'coverage-dashboard', label: 'Evidence Coverage Dashboard', productId: 'volume', featureId: 'coverage' },
  ],
}

export function getCapabilitiesForLayer(layerId) {
  return LAYER_CAPABILITIES[layerId] ?? []
}

export function getCapabilitiesForProduct(productId) {
  const caps = []
  for (const layerId of LAYER_ORDER) {
    for (const cap of LAYER_CAPABILITIES[layerId]) {
      if (cap.productId === productId) caps.push({ ...cap, layerId })
    }
  }
  return caps
}

export function getLayerLabel(layerId) {
  return PLATFORM_LAYERS[layerId]?.title ?? layerId
}
