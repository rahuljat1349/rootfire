/** Buyer persona solutions — mapped to Obsedian products. */

export const SOLUTIONS = [
  {
    id: 'law-enforcement',
    slug: 'law-enforcement',
    label: 'Law Enforcement',
    headline: 'From seizure to conviction — one platform for your investigators',
    pain: 'Agencies stitch together separate tools for biometrics, documents, and case files — losing time and chain-of-custody continuity.',
    challenges: [
      'Evidence scattered across multiple vendor tools',
      'Slow suspect identification and document review',
      'Chain-of-custody gaps between acquisition and court',
      'Leadership briefings require manual report assembly',
    ],
    journeyProducts: [
      { step: 'Acquire', products: ['chain', 'volume'] },
      { step: 'Analyze', products: ['prism', 'folio', 'spectra'] },
      { step: 'Correlate', products: ['molecules'] },
      { step: 'Report', products: ['brief', 'lens'] },
    ],
    recommendedProducts: ['volume', 'prism', 'persona', 'molecules', 'folio', 'brief'],
    outcomes: [
      { stat: 'Hours', label: 'not days for suspect ID' },
      { stat: '100%', label: 'on-premise evidence control' },
      { stat: 'Cited', label: 'answers for court and leadership' },
    ],
    casePattern:
      'A major case arrives with phones, laptops, and surveillance footage. Chain verifies integrity, Volume catalogs everything, Prism IDs a suspect in minutes, Folio surfaces the chargesheet passage, and Molecules maps the network — Brief delivers a cited report for prosecution.',
    icon: 'shield',
  },
  {
    id: 'government',
    slug: 'government',
    label: 'Government Agencies',
    headline: 'Sovereign forensic intelligence on infrastructure you control',
    pain: 'National agencies need court-ready integrity, data sovereignty, and multi-agency coordination without cloud dependency.',
    challenges: [
      'Strict data residency and sovereignty requirements',
      'Multi-agency case handoffs with audit requirements',
      'Legacy tool sprawl across departments',
      'Executive reporting without exposing sensitive methods',
    ],
    journeyProducts: [
      { step: 'Preserve', products: ['chain', 'vault'] },
      { step: 'Manage', products: ['command'] },
      { step: 'Investigate', products: ['lens', 'molecules'] },
    ],
    recommendedProducts: ['chain', 'vault', 'command', 'lens'],
    outcomes: [
      { stat: 'Zero', label: 'mandatory cloud uploads' },
      { stat: 'Full', label: 'audit trail on every action' },
      { stat: 'Air-gap', label: 'capable deployment' },
    ],
    casePattern:
      'A cross-department investigation requires shared evidence with strict access controls. Vault stores artifacts, Command tracks assignments, Chain documents every handoff, and Lens answers leadership questions with cited, read-only queries.',
    icon: 'audit',
  },
  {
    id: 'digital-forensics-labs',
    slug: 'digital-forensics-labs',
    label: 'Digital Forensics Labs',
    headline: 'The complete lab workflow — acquisition through artifact extraction',
    pain: 'Labs process high volumes of mixed evidence types and need fast triage without sacrificing forensic rigor.',
    challenges: [
      'Backlog of mixed evidence from multiple case types',
      'Manual routing between acquisition and analysis tools',
      'Supporting diverse media formats and legacy exports',
      'Documenting methodology for peer and court review',
    ],
    journeyProducts: [
      { step: 'Acquire', products: ['volume', 'pulse'] },
      { step: 'Triage', products: ['scout'] },
      { step: 'Analyze', products: ['folio', 'spectra'] },
    ],
    recommendedProducts: ['volume', 'scout', 'pulse', 'folio'],
    outcomes: [
      { stat: 'Multi-type', label: 'bulk triage in one job' },
      { stat: 'Hash-first', label: 'integrity on every image' },
      { stat: 'All', label: 'document types indexed' },
    ],
    casePattern:
      'A lab receives a raid folder with drives, phones, and documents. Scout triages the batch, Volume processes images, Pulse captures volatile data from live systems, and Folio indexes every document with semantic search.',
    icon: 'speed',
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    label: 'Cybersecurity Teams',
    headline: 'DFIR and forensics unified — from endpoint to network to memory',
    pain: 'SOC and DFIR teams juggle EDR consoles, memory tools, and network analyzers that do not share context.',
    challenges: [
      'Endpoint, memory, and network data in separate silos',
      'Fileless malware invisible to disk-only forensics',
      'Slow attack timeline reconstruction',
      'Handoff friction between SOC and forensic analysts',
    ],
    journeyProducts: [
      { step: 'Respond', products: ['pulse', 'sentinel'] },
      { step: 'Hunt', products: ['phantom', 'nexus'] },
      { step: 'Reconstruct', products: ['chronos', 'molecules'] },
    ],
    recommendedProducts: ['sentinel', 'nexus', 'phantom', 'pulse', 'chronos'],
    outcomes: [
      { stat: 'Cross-source', label: 'attack timeline' },
      { stat: 'Memory', label: 'and disk correlation' },
      { stat: 'Threat', label: 'hunting workflows' },
    ],
    casePattern:
      'An APT alert triggers incident response. Pulse captures memory, Sentinel maps execution, Phantom flags fileless indicators, Nexus reconstructs C2 sessions, and Chronos builds the unified attack timeline in Molecules.',
    icon: 'shield',
  },
  {
    id: 'corporate-investigations',
    slug: 'corporate-investigations',
    label: 'Corporate Investigations',
    headline: 'Internal investigations with audit trails and executive-ready reporting',
    pain: 'Corporate IR teams need defensible investigations without exposing sensitive data to third-party clouds.',
    challenges: [
      'HR, legal, and IT need shared visibility with access control',
      'Document-heavy cases with sensitive employee data',
      'Executive summaries without technical jargon',
      'Regulatory and litigation hold requirements',
    ],
    journeyProducts: [
      { step: 'Preserve', products: ['vault', 'chain'] },
      { step: 'Review', products: ['folio', 'review'] },
      { step: 'Report', products: ['lens', 'brief'] },
    ],
    recommendedProducts: ['folio', 'lens', 'review', 'command'],
    outcomes: [
      { stat: 'RBAC', label: 'and access control' },
      { stat: 'Legal', label: 'hold support' },
      { stat: 'Executive', label: 'briefings via Lens' },
    ],
    casePattern:
      'An insider threat investigation spans email, documents, and endpoint logs. Command tracks the case, Folio indexes communications, Review enables legal team annotations, and Lens generates an executive summary with cited evidence.',
    icon: 'audit',
  },
  {
    id: 'intelligence',
    slug: 'intelligence',
    label: 'Intelligence Organizations',
    headline: 'Connect the dots across biometrics, communications, and surveillance',
    pain: 'Intelligence analysts need relationship mapping and cross-source correlation that point tools cannot provide.',
    challenges: [
      'Fragmented biometrics, comms, and surveillance data',
      'Manual relationship mapping in spreadsheets',
      'Real-time monitoring alongside historical analysis',
      'Scale across large subject populations',
    ],
    journeyProducts: [
      { step: 'Monitor', products: ['live', 'nexus'] },
      { step: 'Correlate', products: ['molecules'] },
      { step: 'Query', products: ['lens'] },
    ],
    recommendedProducts: ['molecules', 'nexus', 'live', 'lens', 'insight'],
    outcomes: [
      { stat: 'Entity', label: 'and comms graphs' },
      { stat: 'Live', label: 'multi-camera matching' },
      { stat: 'Cross-modal', label: 'NL queries' },
    ],
    casePattern:
      'An intelligence cell tracks a network across wiretaps, surveillance, and financial records. Nexus maps communications, Live monitors checkpoints, Molecules builds the entity graph, and Lens answers ad-hoc questions across all sources.',
    icon: 'speed',
  },
  {
    id: 'financial-crime',
    slug: 'financial-crime',
    label: 'Financial Crime Investigations',
    headline: 'Follow the money — documents, communications, and timelines unified',
    pain: 'Financial crime investigators drown in documents, transaction records, and communication logs across disconnected systems.',
    challenges: [
      'Massive document volumes with hidden connections',
      'Cross-referencing comms, accounts, and entities manually',
      'Timeline reconstruction across jurisdictions',
      'Regulatory reporting with cited evidence',
    ],
    journeyProducts: [
      { step: 'Analyze', products: ['folio', 'nexus'] },
      { step: 'Correlate', products: ['molecules', 'chronos'] },
      { step: 'Report', products: ['brief'] },
    ],
    recommendedProducts: ['folio', 'molecules', 'nexus', 'chronos'],
    outcomes: [
      { stat: 'Semantic', label: 'document search' },
      { stat: 'Unified', label: 'financial timelines' },
      { stat: 'Cited', label: 'regulatory reports' },
    ],
    casePattern:
      'A fraud investigation spans thousands of documents and bank records. Folio indexes contracts and statements, Nexus maps transaction sessions, Molecules links entities and accounts, and Chronos orders events for the regulatory filing.',
    icon: 'audit',
  },
]

export function getSolutionBySlug(slug) {
  return SOLUTIONS.find((s) => s.slug === slug) ?? null
}

export const SOLUTIONS_PREVIEW_IDS = [
  'law-enforcement',
  'cybersecurity',
  'digital-forensics-labs',
  'intelligence',
]
