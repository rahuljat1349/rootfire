<template>
  <span class="insight-logo" :class="[`insight-logo--${size}`, { 'insight-logo--animated': animated }]">
    <span class="insight-logo__icon" aria-hidden="true">
      <svg :width="iconSize" :height="iconSize" viewBox="0 0 28 28" fill="none">
        <g class="insight-logo__orbit">
          <circle cx="14" cy="14" r="9" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-dasharray="3 2" />
        </g>
        <path
          d="M14 5v4M14 19v4M5 14h4M19 14h4"
          class="insight-logo__spokes"
          :stroke="`url(#${gradId})`"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-opacity="0.6"
        />
        <circle cx="14" cy="14" r="3" class="insight-logo__core" :fill="`url(#${gradId})`" />
        <path
          d="M14 11v6M11 14h6"
          stroke="#0f1117"
          stroke-width="1.25"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient :id="gradId" x1="5" y1="5" x2="23" y2="23">
            <stop stop-color="#fbbf24" />
            <stop offset="0.5" stop-color="#7c4dff" />
            <stop offset="1" stop-color="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span v-if="size !== 'icon'" class="insight-logo__text">
      <span class="insight-logo__brand">{{ PRODUCT_SHORT }}</span>
      <span class="insight-logo__name"><span class="insight-logo__in">IN</span>sight</span>
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

const gradId = useId()

const iconSize = computed(() => {
  if (props.size === 'icon') return 20
  if (props.size === 'sm') return 22
  if (props.size === 'lg') return 32
  return 26
})
</script>

<style scoped>
.insight-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
}

.insight-logo__icon {
  display: flex;
  flex-shrink: 0;
  line-height: 0;
}

.insight-logo__text {
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  white-space: nowrap;
}

.insight-logo__brand {
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--on-surface-variant);
}

.insight-logo__name {
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #fbbf24 0%, #a78bfa 45%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.insight-logo__in {
  font-weight: 900;
  letter-spacing: -0.04em;
}

.insight-logo--sm .insight-logo__brand,
.insight-logo--sm .insight-logo__name {
  font-size: 0.6875rem;
}

.insight-logo--md .insight-logo__brand {
  font-size: 0.75rem;
}

.insight-logo--md .insight-logo__name {
  font-size: 0.875rem;
}

.insight-logo--lg .insight-logo__brand {
  font-size: 0.875rem;
}

.insight-logo--lg .insight-logo__name {
  font-size: 1.125rem;
}

.insight-logo--animated .insight-logo__orbit {
  animation: insight-orbit 8s linear infinite;
  transform-origin: 14px 14px;
}

.insight-logo--animated .insight-logo__core {
  animation: insight-core 2.5s ease-in-out infinite;
  transform-origin: center;
}

.insight-logo--animated .insight-logo__spokes {
  animation: insight-spokes 3s ease-in-out infinite;
}

@keyframes insight-orbit {
  to { transform: rotate(360deg); }
}

@keyframes insight-core {
  0%, 100% { opacity: 0.85; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

@keyframes insight-spokes {
  0%, 100% { opacity: 0.45; }
  50% { opacity: 0.85; }
}
</style>
