<template>
  <span class="persona-logo" :class="[`persona-logo--${size}`, { 'persona-logo--animated': animated }]">
    <span class="persona-logo__icon" aria-hidden="true">
      <svg :width="iconSize" :height="iconSize" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" class="persona-logo__head" :stroke="`url(#${gradId})`" stroke-width="1.5" />
        <path
          d="M6 24c0-4.5 3.5-8 8-8s8 3.5 8 8"
          class="persona-logo__body"
          :stroke="`url(#${gradId})`"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <circle cx="20" cy="8" r="2" class="persona-logo__sat persona-logo__sat--1" :fill="`url(#${gradId})`" opacity="0.6" />
        <circle cx="8" cy="18" r="1.5" class="persona-logo__sat persona-logo__sat--2" :fill="`url(#${gradId})`" opacity="0.45" />
        <defs>
          <linearGradient :id="gradId" x1="6" y1="6" x2="22" y2="24">
            <stop stop-color="#c084fc" />
            <stop offset="0.5" stop-color="#7c4dff" />
            <stop offset="1" stop-color="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span v-if="size !== 'icon'" class="persona-logo__text">
      <span class="persona-logo__brand">{{ PRODUCT_SHORT }}</span>
      <span class="persona-logo__name">Persona</span>
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
.persona-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
}

.persona-logo__icon {
  display: flex;
  flex-shrink: 0;
  line-height: 0;
}

.persona-logo__text {
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  white-space: nowrap;
}

.persona-logo__brand {
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--on-surface-variant);
}

.persona-logo__name {
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #c084fc 0%, #7c4dff 45%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.persona-logo--sm .persona-logo__brand,
.persona-logo--sm .persona-logo__name {
  font-size: 0.6875rem;
}

.persona-logo--md .persona-logo__brand {
  font-size: 0.75rem;
}

.persona-logo--md .persona-logo__name {
  font-size: 0.875rem;
}

.persona-logo--lg .persona-logo__brand {
  font-size: 0.875rem;
}

.persona-logo--lg .persona-logo__name {
  font-size: 1.125rem;
}

.persona-logo--animated .persona-logo__head {
  animation: persona-head 3s ease-in-out infinite;
  transform-origin: center;
}

.persona-logo--animated .persona-logo__sat--1 {
  animation: persona-satellite 3s ease-in-out infinite;
  transform-origin: 14px 14px;
}

.persona-logo--animated .persona-logo__sat--2 {
  animation: persona-satellite 3s ease-in-out infinite 0.6s;
  transform-origin: 14px 14px;
}

@keyframes persona-head {
  0%, 100% { opacity: 0.85; }
  50% { opacity: 1; filter: drop-shadow(0 0 3px rgba(124, 77, 255, 0.4)); }
}

@keyframes persona-satellite {
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50% { opacity: 0.9; transform: scale(1.15); }
}
</style>
