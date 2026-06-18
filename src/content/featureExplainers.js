/** Simple 3-step explainers + animation key per feature (for non-technical buyers). */

export const FEATURE_EXPLAINERS = {
  register: {
    steps: ['Upload a clear photo', 'The system learns the face', 'Person is saved to your database'],
  },
  verify: {
    steps: ['Add two photos', 'Both faces are compared', 'You get match or no-match with a score'],
  },
  recognize: {
    steps: ['Upload an unknown face', 'Prism searches your database', 'Best matches appear ranked by confidence'],
  },
  prism: {
    steps: ['Enroll a face to your index', 'Verify two photos with a score', 'Search unknown faces — ranked matches'],
  },
  live: {
    steps: ['Connect a camera or stream', 'Faces are detected in real time', 'Known people trigger instant alerts'],
  },
  analyze: {
    steps: ['Upload an evidence photo', 'Age and attributes are read', 'Results help narrow your search'],
  },
  fingerprint: {
    steps: ['Scan or upload a print', 'Unique points are captured', 'Print is matched to enrolled subjects'],
  },
  iris: {
    steps: ['Capture an iris scan', 'Verify or search with Iris', 'Get match scores or ranked candidates'],
  },
  audio: {
    steps: ['Upload a recording', 'Voice patterns are extracted', 'Speaker is matched or enrolled'],
  },
  video: {
    steps: ['Upload video footage', 'Every frame is scanned for faces', 'You get a searchable timeline'],
  },
  batch: {
    steps: ['Select many images at once', 'Each file is scanned automatically', 'See face counts per image'],
  },
  disk: {
    steps: ['Load a drive or disk image', 'Files are cataloged and indexed', 'Review flagged evidence by type'],
  },
  document: {
    steps: ['Upload a case PDF', 'Text is read and indexed', 'Search returns exact page quotes'],
  },
  idcard: {
    steps: ['Photograph an ID document', 'Name and fields are extracted', 'Photo is checked against your records'],
  },
  lens: {
    steps: [
      'Ask a cross-modal question in plain English',
      'Lens searches photos, video, docs & objects',
      'Answers arrive with media hits and citations',
    ],
  },
  graph: {
    steps: ['Your case data is loaded', 'Links between people are found', 'Molecules shows who connects to whom'],
  },
}
