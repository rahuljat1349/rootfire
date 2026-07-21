<template>
  <span
    class="firewolf-logo"
    :class="[`firewolf-logo--${size}`, { 'firewolf-logo--icon-only': iconOnly, 'firewolf-logo--animated': animated }]"
  >
    <span class="firewolf-logo__icon" aria-hidden="true">
      <svg :width="iconSize" :height="iconSize" viewBox="0 0 28 28" fill="none">
        <!-- Fraud scan arc -->
        <path
          d="M4 18 A12 12 0 0 1 24 18"
          class="firewolf-logo__scan"
          :stroke="`url(#${scanGradId})`"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-dasharray="3 4"
        />
        <!-- Flames -->
        <path
          d="M10 22 C10 18 12 16 13 12 C13.5 15 15 16 15 19 C15.5 16 17 14 17.5 10 C18.5 14 20 17 20 22 Z"
          class="firewolf-logo__flame firewolf-logo__flame--1"
          :fill="`url(#${flameGradId})`"
        />
        <path
          d="M7 22 C7.5 19 9 17 9.5 14 C10 17 11 18 11 22 Z"
          class="firewolf-logo__flame firewolf-logo__flame--2"
          :fill="`url(#${flameGradId})`"
          opacity="0.75"
        />
        <path
          d="M19 22 C18.5 19 17 17 16.5 14 C16 17 15 18 15 22 Z"
          class="firewolf-logo__flame firewolf-logo__flame--3"
          :fill="`url(#${flameGradId})`"
          opacity="0.75"
        />
        <!-- Wolf head -->
        <path
          d="M8 20 L9 14 L11 11 L14 10 L17 11 L19 14 L20 20 Z"
          class="firewolf-logo__head"
          :fill="`url(#${headGradId})`"
        />
        <path d="M11 11 L10 7 L13 10 Z" class="firewolf-logo__ear" :fill="`url(#${headGradId})`" />
        <path d="M17 11 L18 7 L15 10 Z" class="firewolf-logo__ear" :fill="`url(#${headGradId})`" />
        <path d="M12 14 L14 16 L16 14" class="firewolf-logo__snout" stroke="#1a1a2e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="11.5" cy="13" r="1.1" class="firewolf-logo__eye firewolf-logo__eye--l" fill="#ef4444" />
        <circle cx="16.5" cy="13" r="1.1" class="firewolf-logo__eye firewolf-logo__eye--r" fill="#ef4444" />
        <defs>
          <linearGradient :id="flameGradId" x1="10" y1="10" x2="20" y2="22">
            <stop stop-color="#ef4444" />
            <stop offset="0.5" stop-color="#f97316" />
            <stop offset="1" stop-color="#fb923c" />
          </linearGradient>
          <linearGradient :id="headGradId" x1="8" y1="10" x2="20" y2="20">
            <stop stop-color="#475569" />
            <stop offset="1" stop-color="#1e293b" />
          </linearGradient>
          <linearGradient :id="scanGradId" x1="4" y1="18" x2="24" y2="18">
            <stop stop-color="#ef4444" stop-opacity="0" />
            <stop offset="0.5" stop-color="#f97316" />
            <stop offset="1" stop-color="#ef4444" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span v-if="!iconOnly" class="firewolf-logo__text">
      <span class="firewolf-logo__brand">{{ PRODUCT_SHORT }}</span>
      <span class="firewolf-logo__name">Firewolf</span>
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

const flameGradId = useId()
const headGradId = useId()
const scanGradId = useId()

const iconOnly = computed(() => props.size === 'icon')

const iconSize = computed(() => {
  if (props.size === 'icon') return 20
  if (props.size === 'sm') return 22
  if (props.size === 'lg') return 32
  return 26
})
</script>

<style scoped>
.firewolf-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
  color: var(--on-surface);
}

.firewolf-logo__icon {
  display: flex;
  flex-shrink: 0;
  line-height: 0;
}

.firewolf-logo__icon svg {
  display: block;
}

.firewolf-logo__text {
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  white-space: nowrap;
}

.firewolf-logo__brand {
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--on-surface-variant);
}

.firewolf-logo__name {
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ef4444 0%, #f97316 55%, #fb923c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.firewolf-logo--icon {
  gap: 0;
}

.firewolf-logo--sm .firewolf-logo__brand,
.firewolf-logo--sm .firewolf-logo__name {
  font-size: 0.6875rem;
}

.firewolf-logo--md .firewolf-logo__brand {
  font-size: 0.75rem;
}

.firewolf-logo--md .firewolf-logo__name {
  font-size: 0.875rem;
}

.firewolf-logo--lg .firewolf-logo__brand {
  font-size: 0.875rem;
}

.firewolf-logo--lg .firewolf-logo__name {
  font-size: 1.125rem;
}

.firewolf-logo--animated .firewolf-logo__flame--1 {
  animation: firewolf-flame 1.8s ease-in-out infinite;
  transform-origin: center bottom;
}

.firewolf-logo--animated .firewolf-logo__flame--2 {
  animation: firewolf-flame 1.8s ease-in-out infinite 0.2s;
  transform-origin: center bottom;
}

.firewolf-logo--animated .firewolf-logo__flame--3 {
  animation: firewolf-flame 1.8s ease-in-out infinite 0.35s;
  transform-origin: center bottom;
}

.firewolf-logo--animated .firewolf-logo__eye {
  animation: firewolf-eye 2.2s ease-in-out infinite;
}

.firewolf-logo--animated .firewolf-logo__eye--r {
  animation-delay: 0.15s;
}

.firewolf-logo--animated .firewolf-logo__scan {
  animation: firewolf-scan 3s linear infinite;
  transform-origin: 14px 18px;
}

@keyframes firewolf-flame {
  0%, 100% { transform: scaleY(0.92); opacity: 0.85; }
  50% { transform: scaleY(1.08); opacity: 1; }
}

@keyframes firewolf-eye {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; filter: drop-shadow(0 0 3px #ef4444); }
}

@keyframes firewolf-scan {
  0% { transform: rotate(-8deg); opacity: 0.4; }
  50% { transform: rotate(8deg); opacity: 1; }
  100% { transform: rotate(-8deg); opacity: 0.4; }
}
</style>
