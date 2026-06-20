<template>
  <span class="molecules-logo" :class="[`molecules-logo--${size}`, { 'molecules-logo--icon-only': iconOnly, 'molecules-logo--animated': animated }]">
    <span class="molecules-logo__icon" aria-hidden="true">
      <svg :width="iconSize" :height="iconSize" viewBox="0 0 28 28" fill="none">
        <line x1="8" y1="20" x2="14" y2="8" class="molecules-logo__line molecules-logo__line--1" :stroke="`url(#${lineGradId})`" stroke-width="1.5" stroke-linecap="round" />
        <line x1="14" y1="8" x2="20" y2="20" class="molecules-logo__line molecules-logo__line--2" :stroke="`url(#${lineGradId})`" stroke-width="1.5" stroke-linecap="round" />
        <line x1="8" y1="20" x2="20" y2="20" class="molecules-logo__line molecules-logo__line--3" :stroke="`url(#${lineGradId})`" stroke-width="1.5" stroke-linecap="round" />
        <circle cx="8" cy="20" r="3" class="molecules-logo__node molecules-logo__node--1" :fill="`url(#${nodeGradId})`" />
        <circle cx="14" cy="8" r="3" class="molecules-logo__node molecules-logo__node--2" :fill="`url(#${nodeGradId})`" />
        <circle cx="20" cy="20" r="3" class="molecules-logo__node molecules-logo__node--3" :fill="`url(#${nodeGradId})`" />
        <defs>
          <linearGradient :id="lineGradId" x1="8" y1="8" x2="20" y2="20">
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f97316" />
          </linearGradient>
          <radialGradient :id="nodeGradId" cx="0.35" cy="0.35" r="0.75">
            <stop stop-color="#fde68a" />
            <stop offset="1" stop-color="#f97316" />
          </radialGradient>
        </defs>
      </svg>
    </span>
    <span v-if="!iconOnly" class="molecules-logo__text">
      <span class="molecules-logo__brand">{{ PRODUCT_SHORT }}</span>
      <span class="molecules-logo__name">Molecules</span>
    </span>
  </span>
</template>

<script setup>
import { computed, useId } from 'vue'
import { PRODUCT_SHORT } from '@/config.js'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['icon', 'sm', 'md', 'lg'].includes(v),
  },
  animated: { type: Boolean, default: true },
})

const lineGradId = useId()
const nodeGradId = useId()

const iconOnly = computed(() => props.size === 'icon')

const iconSize = computed(() => {
  if (props.size === 'icon') return 20
  if (props.size === 'sm') return 22
  if (props.size === 'lg') return 32
  return 26
})
</script>

<style scoped>
.molecules-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
  color: var(--on-surface);
}

.molecules-logo__icon {
  display: flex;
  flex-shrink: 0;
  line-height: 0;
}

.molecules-logo__icon svg {
  display: block;
}

.molecules-logo__text {
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  white-space: nowrap;
}

.molecules-logo__brand {
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--on-surface-variant);
}

.molecules-logo__name {
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #fbbf24 0%, #f97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.molecules-logo--icon {
  gap: 0;
}

.molecules-logo--sm .molecules-logo__brand,
.molecules-logo--sm .molecules-logo__name {
  font-size: 0.6875rem;
}

.molecules-logo--md .molecules-logo__brand {
  font-size: 0.75rem;
}

.molecules-logo--md .molecules-logo__name {
  font-size: 0.875rem;
}

.molecules-logo--lg .molecules-logo__brand {
  font-size: 0.875rem;
}

.molecules-logo--lg .molecules-logo__name {
  font-size: 1.125rem;
}

.molecules-logo--animated .molecules-logo__node--1 {
  animation: molecules-node 2.2s ease-in-out infinite;
  transform-origin: center;
}

.molecules-logo--animated .molecules-logo__node--2 {
  animation: molecules-node 2.2s ease-in-out infinite 0.25s;
  transform-origin: center;
}

.molecules-logo--animated .molecules-logo__node--3 {
  animation: molecules-node 2.2s ease-in-out infinite 0.5s;
  transform-origin: center;
}

.molecules-logo--animated .molecules-logo__line {
  animation: molecules-line 2.5s ease-in-out infinite;
}

.molecules-logo--animated .molecules-logo__line--2 {
  animation-delay: 0.2s;
}

.molecules-logo--animated .molecules-logo__line--3 {
  animation-delay: 0.4s;
}

@keyframes molecules-node {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.15); opacity: 1; }
}

@keyframes molecules-line {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}
</style>
