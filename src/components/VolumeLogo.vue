<template>
  <span class="volume-logo" :class="[`volume-logo--${size}`, { 'volume-logo--icon-only': iconOnly, 'volume-logo--animated': animated }]">
    <span class="volume-logo__icon" aria-hidden="true">
      <svg :width="iconSize" :height="iconSize" viewBox="0 0 28 28" fill="none">
        <rect
          x="5"
          y="5"
          width="18"
          height="18"
          rx="3"
          class="volume-logo__frame"
          :stroke="`url(#${strokeGradId})`"
          stroke-width="1.5"
        />
        <circle cx="14" cy="14" r="5" class="volume-logo__ring" :stroke="`url(#${strokeGradId})`" stroke-width="1.5" />
        <circle cx="14" cy="14" r="2" class="volume-logo__core" :fill="`url(#${beamGradId})`" />
        <path
          d="M14 9v2M14 17v2M9 14H7M21 14h-2"
          :stroke="`url(#${strokeGradId})`"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-opacity="0.5"
        />
        <defs>
          <linearGradient :id="strokeGradId" x1="5" y1="5" x2="23" y2="23">
            <stop stop-color="#34d399" />
            <stop offset="0.5" stop-color="#3d5afe" />
            <stop offset="1" stop-color="#22d3ee" />
          </linearGradient>
          <linearGradient :id="beamGradId" x1="12" y1="12" x2="16" y2="16">
            <stop stop-color="#34d399" />
            <stop offset="1" stop-color="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span v-if="!iconOnly" class="volume-logo__text">
      <span class="volume-logo__brand">{{ PRODUCT_SHORT }}</span>
      <span class="volume-logo__name">Volume</span>
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
.volume-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
  color: var(--on-surface);
}

.volume-logo__icon {
  display: flex;
  flex-shrink: 0;
  line-height: 0;
}

.volume-logo__icon svg {
  display: block;
}

.volume-logo__text {
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  white-space: nowrap;
}

.volume-logo__brand {
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--on-surface-variant);
}

.volume-logo__name {
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #34d399 0%, #6b8aff 45%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.volume-logo--icon {
  gap: 0;
}

.volume-logo--sm .volume-logo__brand,
.volume-logo--sm .volume-logo__name {
  font-size: 0.6875rem;
}

.volume-logo--md .volume-logo__brand {
  font-size: 0.75rem;
}

.volume-logo--md .volume-logo__name {
  font-size: 0.875rem;
}

.volume-logo--lg .volume-logo__brand {
  font-size: 0.875rem;
}

.volume-logo--lg .volume-logo__name {
  font-size: 1.125rem;
}

.volume-logo--animated .volume-logo__ring {
  animation: volume-spin 6s linear infinite;
  transform-origin: 14px 14px;
}

.volume-logo--animated .volume-logo__core {
  animation: volume-pulse 2s ease-in-out infinite;
  transform-origin: center;
}

.volume-logo--animated .volume-logo__frame {
  animation: volume-glow 3s ease-in-out infinite;
}

@keyframes volume-spin {
  to { transform: rotate(360deg); }
}

@keyframes volume-pulse {
  0%, 100% { opacity: 0.75; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

@keyframes volume-glow {
  0%, 100% { filter: drop-shadow(0 0 0 transparent); }
  50% { filter: drop-shadow(0 0 3px rgba(52, 211, 153, 0.35)); }
}
</style>
