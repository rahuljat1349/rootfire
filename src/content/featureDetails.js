/** Detailed feature page content — keyed by scan id. */

export const FEATURE_DETAILS = {
  coc: {
    tagline: 'Prove evidence integrity before analysis begins.',
    overview:
      'Chain of Custody is the first step in every Obsedian workflow. The platform creates a forensic copy of seized media, computes cryptographic hashes, and logs every action — so your team can demonstrate evidence was never altered.',
    steps: [
      {
        title: 'Create a forensic copy',
        body: 'Seized drives, mobile images, and disk dumps are duplicated using write-blocked acquisition — the original is never modified.',
      },
      {
        title: 'Hash and verify',
        body: 'SHA-256 and other hash algorithms fingerprint every image. Hashes are stored in the audit log for court-ready chain of custody.',
      },
      {
        title: 'Proceed to analysis',
        body: 'Only after integrity is proven does Volume, RAM Dumper, or other modules mount and process the evidence.',
      },
    ],
    benefits: [
      'Court-ready chain of custody from the first byte',
      'Hash verification at every stage of the investigation',
      'Integrated audit trail across the full forensic OS',
    ],
    idealFor: ['Seizure documentation', 'Court admissibility', 'Multi-analyst case handoffs'],
  },
  volume: {
    tagline: 'The acquisition hub for disk, mobile, and every artifact type.',
    overview:
      'Obsedian Volume ingests hard drives, USB sticks, mobile extractions, and forensic images — E01, raw, and common formats. Every acquisition starts with a hash-verified copy, then catalogs files, calls, app usage, messages, and filesystem metadata. Findings feed Prism, Documents, Lens, and Molecules.',
    steps: [
      {
        title: 'Acquire with integrity',
        body: 'Chain of Custody creates a forensic copy and hash first. Volume then mounts the verified image — disk, mobile backup, or vehicle system.',
      },
      {
        title: 'Catalog every artifact',
        body: 'Files, calls, app databases, browser history, registry keys, and mobile notifications are indexed with paths, timestamps, and hashes.',
      },
      {
        title: 'Surface and correlate',
        body: 'Filter by type, date, or keyword. Push hits to biometrics, Documents, or Molecules for relationship mapping.',
      },
    ],
    benefits: [
      'One hub for computer, mobile, and vehicle evidence',
      'Hash-first workflow integrated with Chain of Custody',
      'Hand off to every analysis engine in the OS',
    ],
    idealFor: ['Laptop and phone seizure triage', 'Mobile call and app analysis', 'Raid storage and cold-case review'],
  },
  'ram-dump': {
    tagline: 'Capture what disappears when the power goes off.',
    overview:
      'RAM Dumper acquires volatile memory from live systems — running processes, injected DLLs, network connections, browser sessions, encryption keys, and malware indicators. Essential for rootkit detection and fileless malware investigation.',
    steps: [
      {
        title: 'Capture volatile memory',
        body: 'Acquire a full or targeted RAM dump from a live endpoint while preserving integrity metadata.',
      },
      {
        title: 'Parse memory artifacts',
        body: 'Extract processes, loaded modules, network sockets, decrypted strings, and suspicious injections.',
      },
      {
        title: 'Correlate with disk and network',
        body: 'Link memory findings to Volume artifacts, EDR events, and Molecules for full attack reconstruction.',
      },
    ],
    benefits: [
      'Recover evidence that never touches disk',
      'Critical for fileless malware and rootkit cases',
      'Feeds directly into threat and correlation modules',
    ],
    idealFor: ['Live incident response', 'Rootkit and fileless malware hunts', 'Encryption key recovery'],
  },
  'raw-organizer': {
    tagline: 'Turn unstructured dumps into investigatable evidence.',
    overview:
      'Raw Organizer structures unstructured forensic output — hex dumps, tool exports, and mixed artifact bundles — into normalized entities. Parsed subjects, files, and events link directly into Obsedian Molecules.',
    steps: [
      {
        title: 'Import raw dump data',
        body: 'Bring in exports from third-party tools, manual extractions, or legacy case archives.',
      },
      {
        title: 'Structure and normalize',
        body: 'The organizer maps entities — people, files, communications, timestamps — into Obsedian\'s evidence model.',
      },
      {
        title: 'Link to Molecules',
        body: 'Structured entities become nodes and edges in the correlation graph — ready for timeline and network analysis.',
      },
    ],
    benefits: [
      'No evidence left in unstructured limbo',
      'Bridge legacy tool output into the Obsedian graph',
      'Accelerate cold-case data migration',
    ],
    idealFor: ['Legacy case imports', 'Multi-tool investigation merges', 'Building the Molecules graph'],
  },
  prism: {
    tagline: 'Face intelligence — enroll, verify, search, and index every facial feature.',
    overview:
      'Obsedian Prism is the face intelligence engine for the forensic OS. Enroll subjects, verify 1:1, search 1:N — and index moles, scars, landmarks, and distinguishing features on every subject record for richer matching than point solutions.',
    steps: [
      {
        title: 'Enroll face templates',
        body: 'Upload a clear portrait. Prism maps facial geometry and indexes distinguishing features — moles, scars, and landmarks — on the subject record.',
      },
      {
        title: 'Verify two faces',
        body: 'Compare reference and probe images — 1:1 matching with a documented confidence score for court and leadership briefings.',
      },
      {
        title: 'Search and match',
        body: 'Submit an unknown face for ranked 1:N search — sub-second results with subject codes and links to full records.',
      },
    ],
    benefits: [
      'Facial feature index beyond basic recognition',
      'One engine for enrollment, verification, and identification',
      'All templates local with full audit trail',
    ],
    idealFor: [
      'Unknown suspect identification',
      'Court-ready identity confirmation',
      'Watchlist building with feature-level detail',
    ],
  },
  'live-id': {
    tagline: 'Any camera. Every object. Real-time matching.',
    overview:
      'Live identification connects to any CCTV, IP camera, checkpoint feed, or remote stream. The platform detects faces, objects, and entities in every frame — matching against your enrolled database in real time.',
    steps: [
      {
        title: 'Connect any camera or stream',
        body: 'Field laptop webcams, checkpoint cameras, RTSP feeds, and remote CCTV — all configured on your local network.',
      },
      {
        title: 'Detect everything in frame',
        body: 'Faces, objects, plates, and entities are detected continuously — not just people.',
      },
      {
        title: 'Alerts on a match',
        body: 'When confidence exceeds your threshold, subject details and object matches appear on screen immediately.',
      },
    ],
    benefits: [
      'Multi-object live matching — not face-only',
      'Works with any standard camera or stream',
      'No cloud latency — matching happens locally',
    ],
    idealFor: ['Border and checkpoint screening', 'Event security monitoring', 'Multi-entity surveillance'],
  },
  'face-analyze': {
    tagline: 'Every image artifact — from EXIF to PRNU.',
    overview:
      'Photo analysis extracts the full artifact stack from evidence images — EXIF metadata, GPS coordinates, camera and lens info, PRNU sensor fingerprints, editing software traces, compression artifacts, OCR text, face embeddings, and deepfake indicators.',
    steps: [
      {
        title: 'Upload an evidence image',
        body: 'Surveillance stills, social media photos, witness images, or camera originals — any format.',
      },
      {
        title: 'Artifacts are extracted',
        body: 'EXIF, GPS, PRNU, sensor fingerprint, editing traces, demographics, and OCR run in one pass.',
      },
      {
        title: 'Use results across the OS',
        body: 'Link camera fingerprints across cases, narrow searches, and enrich Molecules with image provenance.',
      },
    ],
    benefits: [
      'PRNU and sensor fingerprinting for camera attribution',
      'Deepfake and editing detection signals',
      'Feeds Prism, Lens, and Molecules',
    ],
    idealFor: ['Camera attribution', 'Image authenticity verification', 'Unknown subject profiling'],
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
      'Works alongside Prism and Iris — one identity, multiple modalities',
      'All templates stored locally with full audit trail',
    ],
    idealFor: ['Crime scene latent print comparison', 'Border enrollment', 'Multi-modal identity confirmation'],
  },
  iris: {
    tagline: 'Enroll, verify, and search — all in Obsedian Iris.',
    overview:
      'Obsedian Iris captures the unique pattern of each eye and links it to your subject records. Enroll subjects once, run 1:1 verification between two scans, or search an unknown iris against your entire database.',
    steps: [
      {
        title: 'Enroll iris templates',
        body: 'Capture both eyes with an iris scanner or high-resolution photo. Templates stored locally on the subject record.',
      },
      {
        title: 'Verify two irises',
        body: 'Compare a live or uploaded scan against a reference — 1:1 with a documented confidence score.',
      },
      {
        title: 'Search the database',
        body: 'Submit an unknown iris probe for ranked 1:N candidates from your enrolled population.',
      },
    ],
    benefits: [
      'One modality — enrollment, verification, and search',
      'Highly distinctive biometric on the same subject record',
      'All iris templates stored locally with full audit trail',
    ],
    idealFor: ['Border and immigration screening', 'High-security facility access', 'Multi-modal identity confirmation'],
  },
  voice: {
    tagline: 'Multiple speakers. Grouped. Connected through Molecules.',
    overview:
      'Voice analysis diarizes multiple speakers in a single recording, groups voice clusters, matches speakers to enrolled subjects, and surfaces communication relationships through Obsedian Molecules.',
    steps: [
      {
        title: 'Upload audio evidence',
        body: 'Wiretaps, interviews, surveillance audio — WAV, MP3, and common formats supported.',
      },
      {
        title: 'Speakers are separated and grouped',
        body: 'Diarization segments who spoke when. Voice embeddings cluster unknown speakers for review.',
      },
      {
        title: 'Match and correlate',
        body: 'Speakers matched to enrolled subjects. Communication patterns link into Molecules.',
      },
    ],
    benefits: [
      'Multi-speaker diarization in one recording',
      'Speaker grouping for unknown voices',
      'Communication graphs via Molecules',
    ],
    idealFor: ['Wiretap analysis', 'Multi-speaker interview review', 'Communication network mapping'],
  },
  video: {
    tagline: 'Every face and object — matched against your database.',
    overview:
      'Video processing ingests surveillance, bodycam, or interview footage and scans every frame for faces and objects. Detections are matched against your enrolled database and appear on a searchable timeline.',
    steps: [
      {
        title: 'Upload video files',
        body: 'MP4, AVI, and common formats. Processing runs as a background job on your local worker.',
      },
      {
        title: 'Faces and objects detected',
        body: 'Every frame is scanned for people, vehicles, objects, and entities — each timestamped.',
      },
      {
        title: 'Review matches on the timeline',
        body: 'Jump to exact moments. Match faces and objects to enrolled subjects and known entities.',
      },
    ],
    benefits: [
      'Object detection plus face recognition',
      'Database matching for people and entities',
      'Timestamped timeline for case reports',
    ],
    idealFor: ['CCTV review', 'Bodycam footage analysis', 'Event reconstruction'],
  },
  'batch-detection': {
    tagline: 'Mixed evidence types. One bulk pipeline.',
    overview:
      'Batch ingestion accepts multiple file types in one operation — images, documents, disk exports, and more. The platform triages each file automatically and routes findings to the right analysis engine.',
    steps: [
      {
        title: 'Upload mixed evidence',
        body: 'Drop images, PDFs, exports, and dumps from a seizure folder — all types in one batch.',
      },
      {
        title: 'Each file is routed automatically',
        body: 'Faces, documents, and artifacts are detected and sent to Prism, Documents, or Volume as appropriate.',
      },
      {
        title: 'Review the triage summary',
        body: 'A unified dashboard shows what was found in each file — click through for deep analysis.',
      },
    ],
    benefits: [
      'No manual sorting of mixed evidence drops',
      'Multi-type processing in one job',
      'Fast triage after raids and seizures',
    ],
    idealFor: ['Raid evidence triage', 'Mixed seizure folders', 'Large evidence drops'],
  },
  edr: {
    tagline: 'Endpoint artifacts for threat investigation.',
    overview:
      'EDR forensics ingests endpoint detection and response data — process creation, termination, command history, PowerShell logs, scheduled tasks, and services — correlating endpoint activity with Volume and Molecules.',
    steps: [
      {
        title: 'Ingest endpoint telemetry',
        body: 'Import EDR exports, Windows event logs, and execution artifacts from seized endpoints.',
      },
      {
        title: 'Map execution and persistence',
        body: 'Process trees, command history, and scheduled tasks reveal attacker behavior and persistence.',
      },
      {
        title: 'Correlate across the case',
        body: 'Link endpoint events to network (IPDR), memory (RAM Dumper), and the Molecules graph.',
      },
    ],
    benefits: [
      'Full endpoint execution timeline',
      'Persistence and lateral movement visibility',
      'Integrated with network and memory forensics',
    ],
    idealFor: ['Incident response', 'APT investigation', 'Insider threat analysis'],
  },
  ipdr: {
    tagline: 'Network sessions and communication forensics.',
    overview:
      'IPDR forensics analyzes IP detail records, DNS requests, MAC addresses, VPN usage, browser connections, and network sessions — building communication timelines that feed Obsedian Molecules.',
    steps: [
      {
        title: 'Import network records',
        body: 'IPDR exports, firewall logs, DNS caches, and session data from carriers or internal infrastructure.',
      },
      {
        title: 'Reconstruct communication patterns',
        body: 'Map who connected to whom, when, and through which services — VPN and proxy aware.',
      },
      {
        title: 'Link to identities and cases',
        body: 'Network nodes connect to subjects, devices, and cases in the Molecules correlation graph.',
      },
    ],
    benefits: [
      'Communication timeline reconstruction',
      'VPN and proxy usage visibility',
      'Feeds Molecules communication graphs',
    ],
    idealFor: ['Telecom investigations', 'Network intrusion analysis', 'Communication mapping'],
  },
  rootkit: {
    tagline: 'Find what hides — fileless malware and rootkits.',
    overview:
      'Rootkit and fileless detection correlates memory artifacts from RAM Dumper with disk and EDR indicators — surfacing hidden processes, injected code, kernel hooks, and stealth malware that evades traditional scans.',
    steps: [
      {
        title: 'Acquire memory and disk',
        body: 'RAM Dumper captures volatile state. Volume provides the disk baseline. EDR adds execution context.',
      },
      {
        title: 'Cross-reference indicators',
        body: 'Hidden processes, injected DLLs, and anomalous kernel activity are flagged across sources.',
      },
      {
        title: 'Build the attack timeline',
        body: 'Findings link into Molecules — revealing persistence, lateral movement, and command infrastructure.',
      },
    ],
    benefits: [
      'Memory + disk + endpoint correlation',
      'Fileless and kernel-level threat detection',
      'Built for DFIR and threat hunting teams',
    ],
    idealFor: ['Rootkit investigation', 'Fileless malware hunts', 'Advanced persistent threat cases'],
  },
  documents: {
    tagline: 'Every document type — search by meaning, not keywords.',
    overview:
      'Documents ingests Word, PDF, Excel, PowerPoint, and text files. OCR and metadata extraction index every page — author, revision history, embedded comments, hidden text — with semantic search and exact page citations.',
    steps: [
      {
        title: 'Upload any document type',
        body: 'Chargesheets, FIRs, spreadsheets, presentations, and plain text — all supported.',
      },
      {
        title: 'Text and metadata indexed',
        body: 'OCR, author, creation software, revision count, and embedded metadata extracted and indexed locally.',
      },
      {
        title: 'Search with citations',
        body: 'Ask by meaning. Results show the relevant passage with exact page numbers for verification.',
      },
    ],
    benefits: [
      'All document types — not just PDFs',
      'Rich metadata extraction for provenance',
      'Semantic search with page citations',
    ],
    idealFor: ['Chargesheet and FIR review', 'Cross-case document search', 'Briefing with cited sources'],
  },
  'id-card': {
    tagline: 'Read ID documents and verify identity in one step.',
    overview:
      'ID card analysis uses OCR to extract name, ID number, address, and other fields from identity documents — then matches the document photo against Prism for instant verification.',
    steps: [
      {
        title: 'Photograph the document',
        body: 'Capture government IDs, passports, driver licenses, or other identity documents.',
      },
      {
        title: 'Fields are extracted automatically',
        body: 'Name, date of birth, ID number, and address populate a structured table for review.',
      },
      {
        title: 'Face is cross-checked',
        body: 'The photo on the document is compared against enrolled subjects via Obsedian Prism.',
      },
    ],
    benefits: [
      'Eliminate manual data entry from ID documents',
      'Instant Prism cross-check against your database',
      'Structured output ready for case records',
    ],
    idealFor: ['Checkpoint ID verification', 'Document fraud detection', 'Rapid subject intake'],
  },
  lens: {
    tagline: 'Your query layer for the full forensic OS.',
    overview:
      'Obsedian Lens is the natural-language query layer across the entire platform. Ask questions spanning photos, video, audio, Volume artifacts, documents, subjects, and detected objects — with cited answers you can verify.',
    steps: [
      {
        title: 'Ask Obsedian Lens a question',
        body: 'Plain English — no SQL, filters, or syntax. Cross-modal questions spanning every evidence type.',
      },
      {
        title: 'Lens searches all evidence',
        body: 'Biometrics, media, disk indexes, network records, and document text queried in one pass.',
      },
      {
        title: 'Get an answer with proof',
        body: 'Responses include data rows, cited passages, and source references your team can verify.',
      },
    ],
    benefits: [
      'No SQL training required for investigators',
      'Read-only queries — safe for production data',
      'Spans every module in the forensic OS',
    ],
    idealFor: ['Ad-hoc case questions', 'Leadership briefings', 'Cross-referencing all evidence types'],
  },
  molecules: {
    tagline: 'The correlation engine for your entire investigation.',
    overview:
      'Obsedian Molecules builds entity, communication, timeline, device, and movement graphs from every evidence source — subjects, documents, calls, network sessions, and captures. This is where modern forensic platforms derive most of their investigative value.',
    steps: [
      {
        title: 'Evidence becomes nodes',
        body: 'Subjects, devices, documents, communications, and locations from Volume, IPDR, voice, and more.',
      },
      {
        title: 'Connections are discovered',
        body: 'Co-captures, shared documents, call patterns, network sessions, and case links generate edges.',
      },
      {
        title: 'Explore and rebuild',
        body: 'Filter edge types, inspect nodes, and rebuild the graph as new evidence arrives from any module.',
      },
    ],
    benefits: [
      'Entity, comms, timeline, device, and movement graphs',
      'Correlates every module in the forensic OS',
      'The investigative differentiator — not just extraction',
    ],
    idealFor: ['Organized crime mapping', 'Communication network analysis', 'Stakeholder network briefings'],
  },
  spectra: {
    tagline: 'Unified media intelligence — image, video, audio, and fingerprints.',
    overview:
      'Obsedian Spectra is the media analysis engine for the forensic OS. Image artifacts from EXIF to PRNU, video and CCTV analytics with object tracking, multi-speaker voice diarization, fingerprint matching, and batch media processing — all feeding Obsedian Molecules and Lens.',
    steps: [
      {
        title: 'Ingest any media evidence',
        body: 'Images, surveillance video, wiretap audio, latent prints, and mixed media batches — one engine, one subject record.',
      },
      {
        title: 'Extract artifacts and biometrics',
        body: 'EXIF, GPS, PRNU, deepfake signals, face and object tracks, speaker clusters, and ridge patterns — in parallel.',
      },
      {
        title: 'Correlate across the OS',
        body: 'Media findings link to Prism subjects, Volume artifacts, and the Molecules correlation graph automatically.',
      },
    ],
    benefits: [
      'Image, video, audio, and fingerprint — not four separate vendors',
      'CCTV analytics and multi-camera tracking built in',
      'Every media artifact feeds Molecules and Lens',
    ],
    idealFor: ['Surveillance and CCTV review', 'Wiretap and interview audio', 'Camera attribution and image authenticity'],
  },
}

export function getFeatureDetails(id) {
  return FEATURE_DETAILS[id] ?? null
}
