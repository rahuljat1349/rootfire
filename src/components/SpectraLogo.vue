<template>
  <span class="spectra-logo" :class="[`spectra-logo--${size}`, { 'spectra-logo--icon-only': iconOnly, 'spectra-logo--animated': animated }]">
    <span class="spectra-logo__icon" aria-hidden="true">
      <svg :width="iconSize" :height="iconSize" viewBox="0 0 28 28" fill="none">
        <path
          d="M4 14c2-6 6-10 10-10s8 4 10 10c-2 6-6 10-10 10S6 20 4 14Z"
          class="spectra-logo__lens"
          :stroke="`url(#${strokeGradId})`"
          stroke-width="1.5"
        />
        <path
          d="M8 14h12M14 8v12"
          class="spectra-logo__cross"
          :stroke="`url(#${beamGradId})`"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-opacity="0.7"
        />
        <circle cx="10" cy="12" r="1.5" class="spectra-logo__dot spectra-logo__dot--1" :fill="`url(#${beamGradId})`" />
        <circle cx="18" cy="16" r="1.5" class="spectra-logo__dot spectra-logo__dot--2" :fill="`url(#${beamGradId})`" opacity="0.75" />
        <defs>
          <linearGradient :id="strokeGradId" x1="4" y1="4" x2="24" y2="24">
            <stop stop-color="#f472b6" />
            <stop offset="0.5" stop-color="#a78bfa" />
            <stop offset="1" stop-color="#22d3ee" />
          </linearGradient>
          <linearGradient :id="beamGradId" x1="8" y1="8" x2="20" y2="20">
            <stop stop-color="#fb923c" />
            <stop offset="1" stop-color="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span v-if="!iconOnly" class="spectra-logo__text">
      <span class="spectra-logo__brand">{{ PRODUCT_SHORT }}</span>
      <span class="spectra-logo__name">Spectra</span>
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
.spectra-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
  color: var(--on-surface);
}

.spectra-logo__icon {
  display: flex;
  flex-shrink: 0;
  line-height: 0;
}

.spectra-logo__icon svg {
  display: block;
}

.spectra-logo__text {
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  white-space: nowrap;
}

.spectra-logo__brand {
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--on-surface-variant);
}

.spectra-logo__name {
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #f472b6 0%, #a78bfa 45%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.spectra-logo--icon {
  gap: 0;
}

.spectra-logo--sm .spectra-logo__brand,
.spectra-logo--sm .spectra-logo__name {
  font-size: 0.6875rem;
}

.spectra-logo--md .spectra-logo__brand {
  font-size: 0.75rem;
}

.spectra-logo--md .spectra-logo__name {
  font-size: 0.875rem;
}

.spectra-logo--lg .spectra-logo__brand {
  font-size: 0.875rem;
}

.spectra-logo--lg .spectra-logo__name {
  font-size: 1.125rem;
}

.spectra-logo--animated .spectra-logo__lens {
  animation: spectra-breathe 3s ease-in-out infinite;
  transform-origin: center;
}

.spectra-logo--animated .spectra-logo__cross {
  animation: spectra-cross 2.5s ease-in-out infinite;
  transform-origin: center;
}

.spectra-logo--animated .spectra-logo__dot--1 {
  animation: spectra-dot 2s ease-in-out infinite;
}

.spectra-logo--animated .spectra-logo__dot--2 {
  animation: spectra-dot 2s ease-in-out infinite 0.5s;
}

@keyframes spectra-breathe {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.04); opacity: 1; }
}

@keyframes spectra-cross {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}

@keyframes spectra-dot {
  0%, 100% { opacity: 0.5; transform: scale(0.85); }
  50% { opacity: 1; transform: scale(1.15); }
}
</style>
