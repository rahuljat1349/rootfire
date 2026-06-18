<template>
  <span class="iris-logo" :class="[`iris-logo--${size}`, { 'iris-logo--icon-only': iconOnly }]">
    <span class="iris-logo__icon" aria-hidden="true">
      <svg :width="iconSize" :height="iconSize" viewBox="0 0 28 28" fill="none">
        <ellipse cx="14" cy="14" rx="10" ry="7" :stroke="`url(#${ringGradId})`" stroke-width="1.5" />
        <circle cx="14" cy="14" r="5" :stroke="`url(#${ringGradId})`" stroke-width="1.25" stroke-opacity="0.75" />
        <circle cx="14" cy="14" r="2.25" :fill="`url(#${pupilGradId})`" />
        <path
          d="M14 7v1.5M14 19.5V21M8.5 14H7M21 14h-1.5"
          stroke="rgba(34,211,238,0.55)"
          stroke-width="1.25"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient :id="ringGradId" x1="4" y1="7" x2="24" y2="21">
            <stop stop-color="#22d3ee" />
            <stop offset="1" stop-color="#0891b2" />
          </linearGradient>
          <radialGradient :id="pupilGradId" cx="0.35" cy="0.35" r="0.75">
            <stop stop-color="#0f1117" />
            <stop offset="1" stop-color="#164e63" />
          </radialGradient>
        </defs>
      </svg>
    </span>
    <span v-if="!iconOnly" class="iris-logo__text">
      <span class="iris-logo__brand">{{ PRODUCT_SHORT }}</span>
      <span class="iris-logo__name">Iris</span>
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
const pupilGradId = useId()

const iconOnly = computed(() => props.size === 'icon')

const iconSize = computed(() => {
  if (props.size === 'icon') return 20
  if (props.size === 'sm') return 22
  if (props.size === 'lg') return 32
  return 26
})
</script>

<style scoped>
.iris-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
  color: var(--on-surface);
}

.iris-logo__icon {
  display: flex;
  flex-shrink: 0;
  line-height: 0;
}

.iris-logo__icon svg {
  display: block;
}

.iris-logo__text {
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  white-space: nowrap;
}

.iris-logo__brand {
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--on-surface-variant);
}

.iris-logo__name {
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #67e8f9 0%, #0891b2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.iris-logo--icon {
  gap: 0;
}

.iris-logo--sm .iris-logo__brand,
.iris-logo--sm .iris-logo__name {
  font-size: 0.6875rem;
}

.iris-logo--md .iris-logo__brand {
  font-size: 0.75rem;
}

.iris-logo--md .iris-logo__name {
  font-size: 0.875rem;
}

.iris-logo--lg .iris-logo__brand {
  font-size: 0.875rem;
}

.iris-logo--lg .iris-logo__name {
  font-size: 1.125rem;
}
</style>
