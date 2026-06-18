<template>
  <svg v-if="type === 'upload'" viewBox="0 0 72 72" fill="none">
    <rect x="12" y="20" width="48" height="36" rx="4" stroke="currentColor" stroke-width="2"/>
    <path d="M36 32v16M28 40l8-8 8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <svg v-else-if="type === 'connect'" viewBox="0 0 72 72" fill="none">
    <circle cx="20" cy="36" r="8" stroke="currentColor" stroke-width="2"/>
    <circle cx="52" cy="20" r="8" stroke="currentColor" stroke-width="2"/>
    <circle cx="52" cy="52" r="8" stroke="currentColor" stroke-width="2"/>
    <path d="M28 34l16-10M28 38l16 10" stroke="currentColor" stroke-width="2"/>
  </svg>
  <svg v-else viewBox="0 0 72 72" fill="none">
    <path d="M16 52l14-18 10 8 16-22" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="16" cy="52" r="3" fill="currentColor"/>
    <circle cx="54" cy="20" r="3" fill="currentColor"/>
  </svg>
</template>

<script setup>
defineProps({
  type: { type: String, required: true },
})
</script>
