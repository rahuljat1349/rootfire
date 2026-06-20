<template>
  <span class="iris-logo" :class="[`iris-logo--${size}`, { 'iris-logo--icon-only': iconOnly, 'iris-logo--animated': animated }]">
    <span class="iris-logo__icon" aria-hidden="true">
      <svg :width="iconSize" :height="iconSize" viewBox="0 0 28 28" fill="none">
        <ellipse cx="14" cy="14" rx="10" ry="7" class="iris-logo__ring iris-logo__ring--outer" :stroke="`url(#${ringGradId})`" stroke-width="1.5" />
        <circle cx="14" cy="14" r="5" class="iris-logo__ring iris-logo__ring--mid" :stroke="`url(#${ringGradId})`" stroke-width="1.25" stroke-opacity="0.75" />
        <circle cx="14" cy="14" r="2.25" class="iris-logo__pupil" :fill="`url(#${pupilGradId})`" />
        <line x1="14" y1="7" x2="14" y2="8.5" class="iris-logo__cross" stroke="rgba(34,211,238,0.55)" stroke-width="1.25" stroke-linecap="round" />
        <line x1="14" y1="19.5" x2="14" y2="21" class="iris-logo__cross" stroke="rgba(34,211,238,0.55)" stroke-width="1.25" stroke-linecap="round" />
        <line x1="8.5" y1="14" x2="7" y2="14" class="iris-logo__cross" stroke="rgba(34,211,238,0.55)" stroke-width="1.25" stroke-linecap="round" />
        <line x1="21" y1="14" x2="19.5" y2="14" class="iris-logo__cross" stroke="rgba(34,211,238,0.55)" stroke-width="1.25" stroke-linecap="round" />
        <line x1="6" y1="14" x2="22" y2="14" class="iris-logo__scan" stroke="#22d3ee" stroke-width="1" stroke-opacity="0.7" />
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
  animated: { type: Boolean, default: true },
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

.iris-logo--animated .iris-logo__ring--outer {
  animation: iris-logo-ring 3s ease-in-out infinite;
}

.iris-logo--animated .iris-logo__ring--mid {
  animation: iris-logo-ring 3s ease-in-out infinite 0.2s;
}

.iris-logo--animated .iris-logo__pupil {
  animation: iris-logo-pupil 2.5s ease-in-out infinite;
}

.iris-logo--animated .iris-logo__scan {
  animation: iris-logo-scan 2.2s ease-in-out infinite;
}

.iris-logo--animated .iris-logo__cross {
  animation: iris-logo-cross 2.5s ease-in-out infinite;
}

@keyframes iris-logo-ring {
  0%, 100% { opacity: 0.65; }
  50% { opacity: 1; }
}

@keyframes iris-logo-pupil {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
}

@keyframes iris-logo-scan {
  0%, 100% { transform: translateY(-5px); opacity: 0.35; }
  50% { transform: translateY(5px); opacity: 0.9; }
}

@keyframes iris-logo-cross {
  0%, 100% { opacity: 0.45; }
  50% { opacity: 0.85; }
}
</style>
