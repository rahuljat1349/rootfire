<template>
  <div class="trust-bar" aria-label="Industries served">
    <div class="trust-bar__track">
      <span v-for="(n, i) in doubled" :key="i" class="trust-bar__item">{{ n }}</span>
    </div>
  </div>
</template>

<script setup>
import { AUDIENCE_TYPES } from '@/content/problemStatements.js'

const doubled = [...AUDIENCE_TYPES, ...AUDIENCE_TYPES]
</script>

<style scoped>
.trust-bar {
  overflow: hidden;
  padding: 1rem 0;
  border-block: 1px solid var(--outline-variant);
  background: var(--surface-container-low);
  mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
}

.trust-bar__track {
  display: flex;
  gap: 3rem;
  width: max-content;
  animation: marquee 28s linear infinite;
}

.trust-bar__item {
  flex-shrink: 0;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--on-surface-variant);
  white-space: nowrap;
}

.trust-bar__item::before {
  content: '◆ ';
  color: var(--primary-container);
  font-size: 0.5rem;
  vertical-align: middle;
}

@keyframes marquee {
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .trust-bar__track {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 1rem 2rem;
    padding: 0 1.5rem;
  }
}
</style>
