/** Detailed feature page content — keyed by scan id. */

export const FEATURE_DETAILS = {
  prism: {
    tagline: 'Enroll, verify, and search — all face operations in Prism.',
    overview:
      'Obsedian Prism is your complete face biometrics module. Enroll subjects from a single photo, verify whether two images show the same person with a documented score, or search an unknown face against your entire database — one engine, one subject index, every mode.',
    steps: [
      {
        title: 'Enroll face templates',
        body: 'Upload a clear portrait from evidence, CCTV, or an enrollment session. Prism maps facial features into a secure template linked to a subject record on your local server.',
      },
      {
        title: 'Verify two faces',
        body: 'Compare a reference photo against a probe image — 1:1 matching returns match or no-match with a confidence score your legal team can document.',
      },
      {
        title: 'Search and match',
        body: 'Submit an unknown face and Prism ranks candidates from your enrolled population — sub-second 1:N search with subject codes and links to full records.',
      },
    ],
    benefits: [
      'One module for enrollment, verification, and identification',
      'Same templates power every face operation on a subject record',
      'All processing local with full audit trail and chain of custody',
    ],
    idealFor: [
      'Unknown suspect identification',
      'Court-ready 1:1 identity confirmation',
      'Watchlist building and multi-agency index searches',
    ],
  },
  'live-id': {
    tagline: 'Real-time face matching from cameras and streams.',
    overview:
      'Live identification connects to webcams, IP cameras, or video streams and continuously scans for known subjects. When a enrolled face appears, your team gets an instant alert with subject details.',
    steps: [
      {
        title: 'Connect a camera or stream',
        body: 'Use a field laptop webcam, checkpoint camera, or RTSP feed — configured entirely on your local network.',
      },
      {
        title: 'Faces are detected continuously',
        body: 'Each frame is analyzed for faces. Known subjects are matched against your enrolled database in real time.',
      },
      {
        title: 'Alerts fire on a match',
        body: 'When confidence exceeds your threshold, the subject code and identity details appear on screen immediately.',
      },
    ],
    benefits: [
      'Field-ready — works at checkpoints and events',
      'No cloud latency — matching happens locally',
      'Configurable alert thresholds for your operational needs',
    ],
    idealFor: ['Border and checkpoint screening', 'Event security monitoring', 'Controlled facility access'],
  },
  'face-analyze': {
    tagline: 'Extract useful attributes from any evidence photo.',
    overview:
      'Photo analysis reads demographic and appearance attributes from a face image — age range, gender estimate, and more — to help investigators narrow searches when identity is unknown.',
    steps: [
      {
        title: 'Upload an evidence photo',
        body: 'Any image containing a visible face can be analyzed — surveillance stills, social media, or witness photos.',
      },
      {
        title: 'Attributes are extracted',
        body: 'The system estimates age range, gender, and other visible characteristics from facial analysis.',
      },
      {
        title: 'Use results to narrow your search',
        body: 'Attribute data helps filter candidates and enrich case reports even before a positive ID is made.',
      },
    ],
    benefits: [
      'Quick profiling when you have a photo but no name',
      'Supplements recognition — not a replacement for it',
      'Results exportable for case documentation',
    ],
    idealFor: ['Witness description validation', 'Unknown subject profiling', 'Initial case triage'],
  },
  fingerprint: {
    tagline: 'Add fingerprint matching alongside face records.',
    overview:
      'Fingerprint enrollment captures ridge patterns from scans or photos and links them to subject records. Match unknown prints against your enrolled database with the same local-first security as face biometrics.',
    steps: [
      {
        title: 'Capture or upload a print',
        body: 'Use a fingerprint scanner, high-resolution photo, or imported scan file linked to a subject.',
      },
      {
        title: 'Unique minutiae are encoded',
        body: 'Ridge endings and bifurcations become a searchable template stored on your server.',
      },
      {
        title: 'Match against enrolled prints',
        body: 'Unknown prints are compared to your database with ranked results and confidence scores.',
      },
    ],
    benefits: [
      'Second biometric layer on the same subject record',
      'Works alongside face enrollment — one identity, multiple modalities',
      'All templates stored locally with full audit trail',
    ],
    idealFor: ['Crime scene latent print comparison', 'Border enrollment', 'Multi-modal identity confirmation'],
  },
  iris: {
    tagline: 'Enroll, verify, and search — all in Obsedian Iris.',
    overview:
      'Obsedian Iris captures the unique pattern of each eye and links it to your subject records. Enroll subjects once, run 1:1 verification between two scans, or search an unknown iris against your entire database — the same templates power every mode.',
    steps: [
      {
        title: 'Enroll iris templates',
        body: 'Capture both eyes with an iris scanner or high-resolution photo. Templates are stored locally on the subject record alongside face and fingerprint data.',
      },
      {
        title: 'Verify two irises',
        body: 'Compare a live or uploaded scan against a reference — 1:1 matching returns match or no-match with a confidence score your team can document.',
      },
      {
        title: 'Search the database',
        body: 'Submit an unknown iris probe and get ranked candidates from your enrolled population — the same engine that handles verification runs 1:N search at scale.',
      },
    ],
    benefits: [
      'One modality — enrollment, verification, and search in a single workflow',
      'Highly distinctive biometric layer on the same subject record',
      'All iris templates stored locally with full audit trail',
    ],
    idealFor: ['Border and immigration screening', 'High-security facility access', 'Multi-modal identity confirmation'],
  },
  voice: {
    tagline: 'Identify speakers in audio evidence.',
    overview:
      'Voice analysis extracts unique vocal characteristics from recordings and matches them to enrolled speakers. Search call intercepts, interview tapes, and surveillance audio against your speaker database.',
    steps: [
      {
        title: 'Upload audio evidence',
        body: 'WAV, MP3, and common formats are supported. Longer clips produce more reliable voice profiles.',
      },
      {
        title: 'Voice signature is extracted',
        body: 'Speaker embeddings capture vocal patterns — pitch, tone, and rhythm — as a searchable template.',
      },
      {
        title: 'Match or enroll the speaker',
        body: 'Compare against known speakers or enroll a new voice profile linked to a subject record.',
      },
    ],
    benefits: [
      'Link voice evidence to known identities',
      'Diarization segments show who spoke when',
      'Complements face and document intelligence',
    ],
    idealFor: ['Wiretap speaker identification', 'Interview audio analysis', 'Multi-speaker recording review'],
  },
  video: {
    tagline: 'Turn hours of footage into a searchable face timeline.',
    overview:
      'Video processing ingests surveillance, bodycam, or interview footage and scans every frame for faces. Results appear on a timeline so investigators can jump directly to moments when specific individuals appear.',
    steps: [
      {
        title: 'Upload video files',
        body: 'Drop MP4, AVI, or other common formats. Processing runs as a background job on your local worker.',
      },
      {
        title: 'Every frame is scanned',
        body: 'Face detection runs across the full timeline. Each detection is timestamped to the exact moment in the video.',
      },
      {
        title: 'Review the timeline',
        body: 'See who appeared when, match faces to enrolled subjects, and export findings for case reports.',
      },
    ],
    benefits: [
      'Automate what would take analysts days of manual review',
      'Timestamped detections — jump to exact moments',
      'Link video appearances to subject records automatically',
    ],
    idealFor: ['CCTV review', 'Bodycam footage analysis', 'Event reconstruction'],
  },
  'batch-detection': {
    tagline: 'Screen dozens of images in one operation.',
    overview:
      'Batch detection processes multiple image files simultaneously, counting faces in each and flagging files that need deeper review. Ideal for large evidence drops from raids, seizures, or digital forensics.',
    steps: [
      {
        title: 'Select multiple images',
        body: 'Upload a batch of photos from a device seizure, social media export, or evidence folder.',
      },
      {
        title: 'Each file is scanned automatically',
        body: 'Face detection runs on every image in the batch as a single background job.',
      },
      {
        title: 'Review per-file results',
        body: 'A summary table shows how many faces were found in each file — click through for individual analysis.',
      },
    ],
    benefits: [
      'Process large evidence drops in one job',
      'Quick triage — find the files worth investigating first',
      'Consistent results across the entire batch',
    ],
    idealFor: ['Device seizure triage', 'Social media evidence dumps', 'Raid photo screening'],
  },
  'disk-analysis': {
    tagline: 'Turn a seized drive into a searchable evidence catalog.',
    overview:
      'Disk analysis ingests hard drives, USB sticks, and forensic disk images — E01, raw, and common formats — then builds a searchable file index on your local server. Investigators filter by type, date, and keywords to find photos, documents, databases, and chat exports without leaving the building.',
    steps: [
      {
        title: 'Load a drive or disk image',
        body: 'Attach seized media or import a forensic image. Processing stays entirely on infrastructure you control.',
      },
      {
        title: 'Files are cataloged and indexed',
        body: 'The platform walks the volume, extracts metadata, and indexes filenames, paths, and content signatures for fast search.',
      },
      {
        title: 'Review flagged evidence',
        body: 'Filter by file type, size, or date. Open images, PDFs, and archives directly — or push findings into face, document, and Lens workflows.',
      },
    ],
    benefits: [
      'One place to triage entire seized devices',
      'Search paths and filenames across terabytes locally',
      'Hand off hits to biometrics, documents, and Lens',
    ],
    idealFor: ['Laptop and phone seizure triage', 'Raid storage analysis', 'Cold-case drive review'],
  },
  chargesheet: {
    tagline: 'Search investigation documents by meaning, not keywords.',
    overview:
      'Chargesheet ingest reads PDF case files, indexes every page, and enables semantic search. Ask natural questions and get answers with exact page citations — so your team never has to read hundreds of pages manually.',
    steps: [
      {
        title: 'Upload case PDFs',
        body: 'Drop chargesheets, FIR documents, or investigation reports into the ingest pipeline.',
      },
      {
        title: 'Text is read and indexed',
        body: 'OCR extracts text from every page. Content is chunked and indexed for meaning-based search on your local server.',
      },
      {
        title: 'Search with citations',
        body: 'Type a question or phrase. Results show the relevant passage with the exact page number for verification.',
      },
    ],
    benefits: [
      'Find passages by meaning — not exact keyword matches',
      'Every answer cites page and source document',
      'Fully local — sensitive case files never leave your building',
    ],
    idealFor: ['Chargesheet review', 'Cross-case document search', 'Briefing preparation with cited sources'],
  },
  'id-card': {
    tagline: 'Read ID documents and verify identity in one step.',
    overview:
      'ID card analysis uses OCR to extract name, ID number, address, and other fields from identity documents — then optionally matches the document photo against your face database for instant verification.',
    steps: [
      {
        title: 'Photograph the document',
        body: 'Capture Aadhaar cards, passports, driver licenses, or other government IDs with a camera or scanner.',
      },
      {
        title: 'Fields are extracted automatically',
        body: 'Name, date of birth, ID number, and address populate a structured table for review and export.',
      },
      {
        title: 'Face is cross-checked',
        body: 'The photo on the document is compared against enrolled subjects to confirm or flag identity matches.',
      },
    ],
    benefits: [
      'Eliminate manual data entry from ID documents',
      'Instant cross-check against your subject database',
      'Structured output ready for case records',
    ],
    idealFor: ['Checkpoint ID verification', 'Document fraud detection', 'Rapid subject intake'],
  },
  lens: {
    tagline: 'Your query layer for the whole platform.',
    overview:
      'Obsedian Lens is the natural-language query layer for your entire platform. Ask complex questions that span photos, video frames, audio, disk images, documents, enrolled subjects, and detected objects — and get unified answers with media hits, row matches, and page citations.',
    steps: [
      {
        title: 'Ask Obsedian Lens a question',
        body: '"Find every photo, video frame, and case file linking subject SUBJ-0847 to a white SUV — including faces, object detections, and text mentions." No syntax, filters, or SQL required.',
      },
      {
        title: 'Lens searches across all evidence',
        body: 'The module queries biometrics, media, disk indexes, and document text simultaneously — matching subjects, objects, and keywords in one pass.',
      },
      {
        title: 'Get an answer with proof',
        body: 'Responses include the data rows, cited document passages, and source references your team can verify.',
      },
    ],
    benefits: [
      'No SQL training required for investigators',
      'Read-only queries — safe for production data',
      'Combines structured data search with document RAG',
    ],
    idealFor: ['Ad-hoc case questions', 'Leadership briefings', 'Cross-referencing subjects and documents'],
  },
  'molecules': {
    tagline: 'See hidden connections between people and cases.',
    overview:
      'Obsedian Molecules automatically builds a visual network from your data — linking subjects who appear together in captures, share document mentions, or connect through case records. Reveal networks that spreadsheets cannot show.',
    steps: [
      {
        title: 'Load your case data',
        body: 'Subjects, captures, documents, and matches already in Obsedian Forensics become nodes in Molecules.',
      },
      {
        title: 'Connections are discovered',
        body: 'Co-captures, shared document references, and case links generate edges between related identities.',
      },
      {
        title: 'Explore the map interactively',
        body: 'Click nodes to inspect subjects, filter edge types, and rebuild Molecules as new evidence arrives.',
      },
    ],
    benefits: [
      'Visualize networks impossible to see in tables',
      'Multiple edge types — co-capture, co-document, case links',
      'Rebuild on demand as your database grows',
    ],
    idealFor: ['Organized crime mapping', 'Co-conspirator discovery', 'Stakeholder network briefings'],
  },
}

export function getFeatureDetails(id) {
  return FEATURE_DETAILS[id] ?? null
}
