<template>
  <span
    class="generic-logo"
    :class="[`generic-logo--${size}`, `generic-logo--${family}`, { 'generic-logo--animated': animated }]"
  >
    <span class="generic-logo__icon" aria-hidden="true">
      <svg :width="iconSize" :height="iconSize" viewBox="0 0 28 28" fill="none">
        <rect
          x="4"
          y="4"
          width="20"
          height="20"
          rx="5"
          class="generic-logo__frame"
          :stroke="accent"
          stroke-width="1.5"
        />
        <text
          x="14"
          y="17"
          text-anchor="middle"
          :fill="accent"
          font-size="10"
          font-weight="700"
        >
          {{ initial }}
        </text>
      </svg>
    </span>
    <span v-if="size !== 'icon'" class="generic-logo__text">
      <span class="generic-logo__brand">{{ PRODUCT_SHORT }}</span>
      <span class="generic-logo__name" :style="{ backgroundImage: gradient }">{{ shortName }}</span>
    </span>
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { PRODUCT_SHORT } from '@/config.js'
import { PRODUCT_FAMILIES } from '@/content/productEcosystem.js'

const props = defineProps({
  shortName: { type: String, required: true },
  family: { type: String, default: 'foundation' },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['icon', 'sm', 'md', 'lg'].includes(v),
  },
  animated: { type: Boolean, default: true },
})

const initial = computed(() => props.shortName.charAt(0).toUpperCase())

const accent = computed(() => PRODUCT_FAMILIES[props.family]?.accent ?? '#6b8aff')

const gradient = computed(() => {
  const c = accent.value
  return `linear-gradient(135deg, ${c} 0%, #a78bfa 100%)`
})

const iconSize = computed(() => {
  if (props.size === 'icon') return 20
  if (props.size === 'sm') return 22
  if (props.size === 'lg') return 32
  return 26
})
</script>

<style scoped>
.generic-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
}

.generic-logo__icon {
  display: flex;
  flex-shrink: 0;
  line-height: 0;
}

.generic-logo__text {
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  white-space: nowrap;
}

.generic-logo__brand {
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--on-surface-variant);
}

.generic-logo__name {
  font-weight: 800;
  letter-spacing: -0.03em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.generic-logo--sm .generic-logo__brand,
.generic-logo--sm .generic-logo__name {
  font-size: 0.6875rem;
}

.generic-logo--md .generic-logo__brand {
  font-size: 0.75rem;
}

.generic-logo--md .generic-logo__name {
  font-size: 0.875rem;
}

.generic-logo--lg .generic-logo__brand {
  font-size: 0.875rem;
}

.generic-logo--lg .generic-logo__name {
  font-size: 1.125rem;
}

.generic-logo--animated .generic-logo__frame {
  animation: generic-glow 3s ease-in-out infinite;
}

@keyframes generic-glow {
  0%, 100% { opacity: 0.65; }
  50% { opacity: 1; }
}
</style>
