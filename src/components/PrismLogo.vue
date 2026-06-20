<template>
  <span class="prism-logo" :class="[`prism-logo--${size}`, { 'prism-logo--icon-only': iconOnly, 'prism-logo--animated': animated }]">
    <span class="prism-logo__icon" aria-hidden="true">
      <svg :width="iconSize" :height="iconSize" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4L24 22H4L14 4Z"
          class="prism-logo__frame"
          :stroke="`url(#${strokeGradId})`"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path d="M14 4v18M4 22h20" class="prism-logo__grid" :stroke="`url(#${strokeGradId})`" stroke-width="1" stroke-opacity="0.45" />
        <path
          d="M14 10l4 8M14 10l-4 8"
          class="prism-logo__beam prism-logo__beam--1"
          :stroke="`url(#${beamGradId})`"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-opacity="0.85"
        />
        <path
          d="M10 18l8-4M18 18l-8-4"
          class="prism-logo__beam prism-logo__beam--2"
          :stroke="`url(#${beamGradId})`"
          stroke-width="1"
          stroke-linecap="round"
          stroke-opacity="0.55"
        />
        <defs>
          <linearGradient :id="strokeGradId" x1="4" y1="4" x2="24" y2="22">
            <stop stop-color="#3d5afe" />
            <stop offset="0.5" stop-color="#7c4dff" />
            <stop offset="1" stop-color="#22d3ee" />
          </linearGradient>
          <linearGradient :id="beamGradId" x1="10" y1="10" x2="18" y2="18">
            <stop stop-color="#f472b6" />
            <stop offset="1" stop-color="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span v-if="!iconOnly" class="prism-logo__text">
      <span class="prism-logo__brand">{{ PRODUCT_SHORT }}</span>
      <span class="prism-logo__name">Prism</span>
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

const strokeGradId = useId()
const beamGradId = useId()

const iconOnly = computed(() => props.size === 'icon')

const iconSize = computed(() => {
  if (props.size === 'icon') return 20
  if (props.size === 'sm') return 22
  if (props.size === 'lg') return 32
  return 26
})
</script>

<style scoped>
.prism-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
  color: var(--on-surface);
}

.prism-logo__icon {
  display: flex;
  flex-shrink: 0;
  line-height: 0;
}

.prism-logo__icon svg {
  display: block;
}

.prism-logo__text {
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  white-space: nowrap;
}

.prism-logo__brand {
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--on-surface-variant);
}

.prism-logo__name {
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #6b8aff 0%, #a78bfa 45%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.prism-logo--icon {
  gap: 0;
}

.prism-logo--sm .prism-logo__brand,
.prism-logo--sm .prism-logo__name {
  font-size: 0.6875rem;
}

.prism-logo--md .prism-logo__brand {
  font-size: 0.75rem;
}

.prism-logo--md .prism-logo__name {
  font-size: 0.875rem;
}

.prism-logo--lg .prism-logo__brand {
  font-size: 0.875rem;
}

.prism-logo--lg .prism-logo__name {
  font-size: 1.125rem;
}

.prism-logo--animated .prism-logo__beam--1 {
  animation: prism-beam 2.4s ease-in-out infinite;
}

.prism-logo--animated .prism-logo__beam--2 {
  animation: prism-beam 2.4s ease-in-out infinite 0.6s;
}

.prism-logo--animated .prism-logo__frame {
  animation: prism-glow 3s ease-in-out infinite;
}

@keyframes prism-beam {
  0%, 100% { opacity: 0.45; }
  50% { opacity: 1; }
}

@keyframes prism-glow {
  0%, 100% { filter: drop-shadow(0 0 0 transparent); }
  50% { filter: drop-shadow(0 0 4px rgba(124, 77, 255, 0.45)); }
}
</style>
