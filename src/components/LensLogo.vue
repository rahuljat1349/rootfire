<template>
  <span class="lens-logo" :class="[`lens-logo--${size}`, { 'lens-logo--icon-only': iconOnly }]">
    <span class="lens-logo__icon" aria-hidden="true">
      <svg :width="iconSize" :height="iconSize" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" :stroke="`url(#${ringGradId})`" stroke-width="1.5" />
        <circle cx="14" cy="14" r="7" stroke="rgba(167,139,250,0.45)" stroke-width="1" />
        <circle cx="14" cy="14" r="3.5" :fill="`url(#${coreGradId})`" />
        <path
          d="M14 3v2M14 23v2M3 14h2M23 14h2"
          stroke="rgba(61,90,254,0.5)"
          stroke-width="1.25"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient :id="ringGradId" x1="3" y1="3" x2="25" y2="25">
            <stop stop-color="#3d5afe" />
            <stop offset="1" stop-color="#7c4dff" />
          </linearGradient>
          <radialGradient :id="coreGradId" cx="0.35" cy="0.35" r="0.75">
            <stop stop-color="#1a1d27" />
            <stop offset="1" stop-color="#3d5afe" />
          </radialGradient>
        </defs>
      </svg>
    </span>
    <span v-if="!iconOnly" class="lens-logo__text">
      <span class="lens-logo__brand">{{ PRODUCT_SHORT }}</span>
      <span class="lens-logo__name">Lens</span>
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
})

const ringGradId = useId()
const coreGradId = useId()

const iconOnly = computed(() => props.size === 'icon')

const iconSize = computed(() => {
  if (props.size === 'icon') return 20
  if (props.size === 'sm') return 22
  if (props.size === 'lg') return 32
  return 26
})
</script>

<style scoped>
.lens-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
  color: var(--on-surface);
}

.lens-logo__icon {
  display: flex;
  flex-shrink: 0;
  line-height: 0;
}

.lens-logo__icon svg {
  display: block;
}

.lens-logo__text {
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  white-space: nowrap;
}

.lens-logo__brand {
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--on-surface-variant);
}

.lens-logo__name {
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #6b8aff 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lens-logo--icon {
  gap: 0;
}

.lens-logo--sm .lens-logo__brand,
.lens-logo--sm .lens-logo__name {
  font-size: 0.6875rem;
}

.lens-logo--md .lens-logo__brand {
  font-size: 0.75rem;
}

.lens-logo--md .lens-logo__name {
  font-size: 0.875rem;
}

.lens-logo--lg .lens-logo__brand {
  font-size: 0.875rem;
}

.lens-logo--lg .lens-logo__name {
  font-size: 1.125rem;
}
</style>
