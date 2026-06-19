/** Simple 3-step explainers + animation key per feature (for non-technical buyers). */

export const FEATURE_EXPLAINERS = {
  coc: {
    steps: ['Create a forensic copy', 'Hash and verify integrity', 'Proceed to analysis with proof'],
  },
  disk: {
    steps: ['Load a drive or disk image', 'Files are cataloged and indexed', 'Review flagged evidence by type'],
  },
  ram: {
    steps: ['Capture volatile memory', 'Parse processes and injections', 'Correlate with disk and network'],
  },
  raw: {
    steps: ['Import raw dump data', 'Structure into entities', 'Link findings to Molecules'],
  },
  prism: {
    steps: ['Enroll a face and features', 'Verify two photos with a score', 'Search unknown faces — ranked matches'],
  },
  recognize: {
    steps: ['Upload an unknown face', 'Prism searches your database', 'Best matches appear ranked by confidence'],
  },
  live: {
    steps: ['Connect any camera or stream', 'Faces and objects detected live', 'Matches trigger instant alerts'],
  },
  analyze: {
    steps: ['Upload an evidence image', 'EXIF, PRNU, and artifacts extracted', 'Results feed searches and Molecules'],
  },
  fingerprint: {
    steps: ['Scan or upload a print', 'Unique points are captured', 'Print is matched to enrolled subjects'],
  },
  iris: {
    steps: ['Capture an iris scan', 'Verify or search with Iris', 'Get match scores or ranked candidates'],
  },
  audio: {
    steps: ['Upload a recording', 'Speakers separated and grouped', 'Matches and relations via Molecules'],
  },
  video: {
    steps: ['Upload video footage', 'Faces and objects detected', 'Timeline with database matches'],
  },
  batch: {
    steps: ['Upload mixed evidence types', 'Each file routed automatically', 'Review triage summary'],
  },
  edr: {
    steps: ['Ingest endpoint telemetry', 'Map execution and persistence', 'Correlate with network and memory'],
  },
  ipdr: {
    steps: ['Import network records', 'Reconstruct communication patterns', 'Link to Molecules graph'],
  },
  rootkit: {
    steps: ['Acquire memory and disk', 'Cross-reference hidden indicators', 'Build attack timeline in Molecules'],
  },
  document: {
    steps: ['Upload any document type', 'Text and metadata indexed', 'Search returns exact page quotes'],
  },
  idcard: {
    steps: ['Photograph an ID document', 'Name and fields are extracted', 'Photo checked via Prism'],
  },
  lens: {
    steps: [
      'Ask a cross-modal question in plain English',
      'Lens searches all evidence types',
      'Answers arrive with media hits and citations',
    ],
  },
  graph: {
    steps: ['Evidence becomes graph nodes', 'Connections discovered automatically', 'Molecules shows the full picture'],
  },
}
