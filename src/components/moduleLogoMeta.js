/** Branded module logos — metadata for products without standalone logo components. */

export const MODULE_LOGO_IDS = [
  'chain',
  'vault',
  'pulse',
  'scout',
  'echo',
  'motion',
  'live',
  'ridge',
  'folio',
  'sentinel',
  'nexus',
  'phantom',
  'chronos',
  'flow',
  'review',
  'brief',
  'command',
]

export function isModuleLogo(productId) {
  return MODULE_LOGO_IDS.includes(productId)
}

/** @type {Record<string, { name: string, colors: [string, string, string?] }>} */
export const MODULE_LOGO_META = {
  chain: { name: 'Chain', colors: ['#34d399', '#3d5afe', '#22d3ee'] },
  vault: { name: 'Vault', colors: ['#34d399', '#22d3ee'] },
  pulse: { name: 'Pulse', colors: ['#34d399', '#6b8aff', '#22d3ee'] },
  scout: { name: 'Scout', colors: ['#34d399', '#fbbf24', '#22d3ee'] },
  echo: { name: 'Echo', colors: ['#a78bfa', '#22d3ee'] },
  motion: { name: 'Motion', colors: ['#f472b6', '#a78bfa', '#22d3ee'] },
  live: { name: 'Live', colors: ['#ef4444', '#a78bfa'] },
  ridge: { name: 'Ridge', colors: ['#6b8aff', '#a78bfa', '#22d3ee'] },
  folio: { name: 'Folio', colors: ['#fbbf24', '#a78bfa'] },
  sentinel: { name: 'Sentinel', colors: ['#fb923c', '#ef4444'] },
  nexus: { name: 'Nexus', colors: ['#fb923c', '#3d5afe', '#22d3ee'] },
  phantom: { name: 'Phantom', colors: ['#fb923c', '#7c4dff'] },
  chronos: { name: 'Chronos', colors: ['#7c4dff', '#fbbf24', '#22d3ee'] },
  flow: { name: 'Flow', colors: ['#22d3ee', '#3d5afe', '#7c4dff'] },
  review: { name: 'Review', colors: ['#34d399', '#6b8aff', '#a78bfa'] },
  brief: { name: 'Brief', colors: ['#fbbf24', '#f97316', '#fb923c'] },
  command: { name: 'Command', colors: ['#818cf8', '#7c4dff', '#3d5afe'] },
}
