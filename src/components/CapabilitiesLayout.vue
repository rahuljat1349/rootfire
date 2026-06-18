<template>
  <div class="cap-layout">
    <aside class="cap-layout__sidebar">
      <CapabilitiesMenu />
    </aside>
    <div class="cap-layout__main">
      <slot />
    </div>
  </div>
</template>

<script setup>
import CapabilitiesMenu from './CapabilitiesMenu.vue'
</script>

<style scoped>
.cap-layout {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 2.5rem;
  align-items: start;
}

.cap-layout__sidebar {
  position: sticky;
  top: calc(var(--header-height) + 1.25rem);
  max-height: calc(100dvh - var(--header-height) - 2.5rem);
  overflow-y: auto;
  padding-bottom: 1rem;
}

.cap-layout__sidebar::-webkit-scrollbar {
  width: 4px;
}

.cap-layout__sidebar::-webkit-scrollbar-thumb {
  background: var(--outline-variant);
  border-radius: 2px;
}

@media (max-width: 960px) {
  .cap-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .cap-layout__sidebar {
    position: static;
    max-height: none;
    padding: 1rem;
    border-radius: var(--radius-lg);
    background: var(--surface-container);
    border: 1px solid var(--outline-variant);
  }
}
</style>
