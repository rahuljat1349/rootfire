/** Industry verticals — regulatory and trust context. */

export const INDUSTRIES = [
  {
    id: 'public-safety',
    slug: 'public-safety',
    label: 'Public Safety',
    headline: 'Forensic intelligence for the agencies that protect communities',
    regulatory:
      'Court admissibility, chain-of-custody documentation, and audit trails are non-negotiable for public safety agencies.',
    useCases: [
      'Major crime investigation with multi-device seizures',
      'Border and checkpoint biometric screening',
      'Gang and organized crime network mapping',
      'Cold-case review with legacy evidence migration',
    ],
    productEmphasis: ['prism', 'persona', 'molecules', 'brief'],
    deployment: 'On-premise deployment in agency data centers with air-gap capability for sensitive operations.',
    relatedSolutions: ['law-enforcement'],
    icon: 'shield',
  },
  {
    id: 'defense',
    slug: 'defense',
    label: 'Defense',
    headline: 'Sovereign forensic capabilities for defense and national security',
    regulatory:
      'Classified environments require full data sovereignty, no cloud dependency, and comprehensive access control.',
    useCases: [
      'Counter-intelligence investigations',
      'Device exploitation in operational environments',
      'Multi-source intelligence correlation',
      'Secure multi-agency collaboration',
    ],
    productEmphasis: ['vault', 'chain', 'command', 'molecules', 'lens'],
    deployment: 'Air-gapped, on-premise deployment with RBAC and full audit logging.',
    relatedSolutions: ['government', 'intelligence'],
    icon: 'shield',
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    label: 'Cybersecurity',
    headline: 'Unified DFIR for security operations and forensic teams',
    regulatory:
      'Incident response requires documented methodology, evidence preservation, and regulatory breach notification support.',
    useCases: [
      'Ransomware and APT incident response',
      'Insider threat endpoint investigation',
      'Network intrusion reconstruction',
      'Threat hunting across endpoint and network data',
    ],
    productEmphasis: ['sentinel', 'phantom', 'nexus', 'pulse', 'chronos'],
    deployment: 'Integrated with SOC workflows — on-premise or private cloud with strict network isolation.',
    relatedSolutions: ['cybersecurity'],
    icon: 'audit',
  },
  {
    id: 'financial-services',
    slug: 'financial-services',
    label: 'Financial Services',
    headline: 'Investigate fraud and financial crime with defensible evidence',
    regulatory:
      'Financial institutions face AML, KYC, and regulatory reporting requirements with strict data handling rules.',
    useCases: [
      'Internal fraud and embezzlement investigations',
      'AML transaction pattern analysis',
      'Regulatory examination support',
      'Third-party vendor due diligence',
    ],
    productEmphasis: ['folio', 'molecules', 'nexus', 'chronos', 'brief'],
    deployment: 'Private cloud or on-premise with encryption at rest and role-based access.',
    relatedSolutions: ['financial-crime', 'corporate-investigations'],
    icon: 'audit',
  },
  {
    id: 'telecommunications',
    slug: 'telecommunications',
    label: 'Telecommunications',
    headline: 'Lawful intercept and network forensics at carrier scale',
    regulatory:
      'Telecom providers operate under lawful intercept regulations with strict session logging and data retention rules.',
    useCases: [
      'IPDR and lawful intercept analysis',
      'Subscriber communication mapping',
      'Network session reconstruction',
      'Cross-carrier investigation support',
    ],
    productEmphasis: ['nexus', 'molecules', 'chronos', 'echo'],
    deployment: 'High-throughput on-premise processing for large session volumes.',
    relatedSolutions: ['intelligence', 'law-enforcement'],
    icon: 'speed',
  },
  {
    id: 'transportation',
    slug: 'transportation',
    label: 'Transportation',
    headline: 'Vehicle, IoT, and surveillance forensics for transport security',
    regulatory:
      'Transportation agencies require incident documentation for safety investigations and regulatory compliance.',
    useCases: [
      'Vehicle system data extraction and analysis',
      'CCTV and checkpoint monitoring',
      'Incident timeline reconstruction',
      'IoT device forensics from connected systems',
    ],
    productEmphasis: ['volume', 'live', 'motion', 'chronos'],
    deployment: 'Edge and data-center deployment for distributed checkpoint and fleet operations.',
    relatedSolutions: ['law-enforcement'],
    icon: 'speed',
  },
  {
    id: 'critical-infrastructure',
    slug: 'critical-infrastructure',
    label: 'Critical Infrastructure',
    headline: 'Protect essential systems with integrated cyber and forensic capabilities',
    regulatory:
      'Critical infrastructure operators face NIS2, sector-specific regulations, and national security reporting requirements.',
    useCases: [
      'OT/IT incident response and forensics',
      'Insider threat detection in control systems',
      'Supply chain compromise investigation',
      'Regulatory incident reporting',
    ],
    productEmphasis: ['sentinel', 'phantom', 'pulse', 'nexus', 'command'],
    deployment: 'Isolated network segments with air-gap capability for OT environments.',
    relatedSolutions: ['cybersecurity', 'government'],
    icon: 'shield',
  },
]

export function getIndustryBySlug(slug) {
  return INDUSTRIES.find((i) => i.slug === slug) ?? null
}
