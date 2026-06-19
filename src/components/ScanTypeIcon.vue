<template>
  <svg v-if="name === 'register'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.5"/>
  </svg>
  <svg v-else-if="name === 'verify'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12 3l7 4v5c0 4-3 7.5-7 8-4-.5-7-4-7-8V7l7-4z" stroke="currentColor" stroke-width="1.5"/>
  </svg>
  <svg v-else-if="name === 'recognize'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="10" r="4" stroke="currentColor" stroke-width="1.5"/>
    <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'prism'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 4l8 14H4L12 4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M12 9v5M10 12h4" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'live'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 3"/>
  </svg>
  <svg v-else-if="name === 'analyze'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M4 18V6M8 18V10M12 18V8M16 18V12M20 18V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'fingerprint'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 10a3 3 0 100 6M7 12a5 5 0 0110 0M5 12a7 7 0 0114 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'iris'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="12" rx="9" ry="6" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    <path d="M12 8v1M12 15v1M9 12H8M16 12h-1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'audio'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z" stroke="currentColor" stroke-width="1.5"/>
    <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'video'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="15" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
    <path d="M17 10l5-3v10l-5-3v-4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>
  <svg v-else-if="name === 'batch'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/>
    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/>
    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/>
    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/>
  </svg>
  <svg v-else-if="name === 'disk'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    <path d="M12 8v1M12 15v1M8 12H7M17 12h-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'coc'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="6" width="10" height="12" rx="1" stroke="currentColor" stroke-width="1.5"/>
    <path d="M16 10h4M18 8v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M7 14h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'ram'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/>
    <path d="M7 7V5M10 7V5M13 7V5M16 7V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M7 17v2M10 17v2M13 17v2M16 17v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'raw'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="6" cy="8" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="10" cy="14" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="14" cy="6" r="1.5" fill="currentColor" opacity="0.5"/>
    <path d="M16 16h5M18 14v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'edr'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
    <path d="M8 20h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12 16v4" stroke="currentColor" stroke-width="1.5"/>
  </svg>
  <svg v-else-if="name === 'ipdr'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="6" cy="12" r="2" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="18" cy="12" r="2" stroke="currentColor" stroke-width="1.5"/>
    <path d="M8 12h8" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>
  </svg>
  <svg v-else-if="name === 'rootkit'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
    <circle cx="12" cy="12" r="3" stroke="#ef4444" stroke-width="1.5"/>
    <path d="M12 2v3M12 19v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'document'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" stroke-width="1.5"/>
    <path d="M14 2v6h6M9 13h6M9 17h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'idcard'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="8" cy="12" r="2" stroke="currentColor" stroke-width="1.5"/>
    <path d="M14 10h5M14 14h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'lens'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
    <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'graph'" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="6" cy="18" r="2.5" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="18" cy="6" r="2.5" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="18" cy="18" r="2.5" stroke="currentColor" stroke-width="1.5"/>
    <path d="M8.2 16.5L15.8 7.5M8.2 16.5l8.3 1M15.8 7.5l2.2 10.5" stroke="currentColor" stroke-width="1.5"/>
  </svg>
  <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/>
  </svg>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
})
</script>
