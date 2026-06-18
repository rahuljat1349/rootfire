<template>
  <svg v-if="name === 'building'" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <svg v-else-if="name === 'lock'" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/>
    <path d="M8 11V8a4 4 0 118 0v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'log'" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" stroke-width="1.5"/>
    <path d="M8 13h8M8 17h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else-if="name === 'offline'" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 20h.01M8.5 16.429a5 5 0 017 0M5 12.859a10 10 0 0114 0M2 8.714a15 15 0 0120 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M2 2l20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" stroke="currentColor" stroke-width="1.5"/>
  </svg>
</template>

<script setup>
defineProps({ name: { type: String, required: true } })
</script>
