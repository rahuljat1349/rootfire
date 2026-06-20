<template>
  <span
    class="module-logo"
    :class="[
      `module-logo--${size}`,
      `module-logo--${productId}`,
      { 'module-logo--icon-only': iconOnly, 'module-logo--animated': animated },
    ]"
  >
    <span class="module-logo__icon" aria-hidden="true">
      <svg :width="iconSize" :height="iconSize" viewBox="0 0 28 28" fill="none">
        <!-- Chain — custody link + hash -->
        <template v-if="productId === 'chain'">
          <rect x="5" y="10" width="8" height="10" rx="1.5" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <rect x="15" y="8" width="8" height="10" rx="1.5" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <path d="M13 14h2" class="module-logo__accent" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-linecap="round" />
          <path d="M9 18h2M17 16h2" class="module-logo__detail" :stroke="`url(#${gradId})`" stroke-width="1.25" stroke-linecap="round" stroke-opacity="0.65" />
        </template>

        <!-- Vault — shield + lock -->
        <template v-else-if="productId === 'vault'">
          <path
            d="M14 4l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V8l8-4z"
            class="module-logo__stroke"
            :stroke="`url(#${gradId})`"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <rect x="12" y="13" width="4" height="4" rx="0.5" class="module-logo__fill" :fill="`url(#${gradId})`" />
          <path d="M13 13v-1.5a1 1 0 012 0V13" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.25" />
        </template>

        <!-- Pulse — memory chip -->
        <template v-else-if="productId === 'pulse'">
          <rect x="6" y="9" width="16" height="10" rx="2" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <path d="M9 9V7M12 9V7M16 9V7M19 9V7" class="module-logo__detail" :stroke="`url(#${gradId})`" stroke-width="1.25" stroke-linecap="round" />
          <path d="M9 19v2M12 19v2M16 19v2M19 19v2" class="module-logo__detail" :stroke="`url(#${gradId})`" stroke-width="1.25" stroke-linecap="round" />
          <rect x="10" y="12" width="2.5" height="4" rx="0.5" class="module-logo__fill module-logo__pulse-bar" :fill="`url(#${gradId})`" opacity="0.85" />
          <rect x="13.25" y="11" width="2.5" height="5" rx="0.5" class="module-logo__fill module-logo__pulse-bar" :fill="`url(#${gradId})`" opacity="0.65" />
          <rect x="16.5" y="12" width="2.5" height="4" rx="0.5" class="module-logo__fill module-logo__pulse-bar" :fill="`url(#${gradId})`" opacity="0.85" />
        </template>

        <!-- Scout — radar sweep -->
        <template v-else-if="productId === 'scout'">
          <circle cx="14" cy="14" r="9" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <circle cx="14" cy="14" r="5.5" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1" stroke-opacity="0.45" />
          <path d="M14 14L20 8" class="module-logo__accent module-logo__sweep" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-linecap="round" />
          <circle cx="17" cy="11" r="1.5" class="module-logo__fill" :fill="`url(#${gradId})`" />
        </template>

        <!-- Echo — microphone + waveform -->
        <template v-else-if="productId === 'echo'">
          <rect x="11.5" y="5" width="5" height="9" rx="2.5" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <path d="M9 12a5 5 0 0010 0M14 17v3" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-linecap="round" />
          <path d="M10 21h8" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-linecap="round" />
          <path d="M20 10v6M22 8v10M24 11v4" class="module-logo__accent module-logo__wave" :stroke="`url(#${gradId})`" stroke-width="1.25" stroke-linecap="round" />
        </template>

        <!-- Motion — film strip -->
        <template v-else-if="productId === 'motion'">
          <rect x="5" y="8" width="18" height="12" rx="2" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <path d="M8 8v12M11 8v12M17 8v12M20 8v12" class="module-logo__detail" :stroke="`url(#${gradId})`" stroke-width="1" stroke-opacity="0.4" />
          <path d="M13 13l4 2.5-4 2.5V13z" class="module-logo__fill" :fill="`url(#${gradId})`" />
        </template>

        <!-- Live — camera + rec -->
        <template v-else-if="productId === 'live'">
          <rect x="5" y="9" width="13" height="10" rx="2" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <path d="M18 12l5-3v10l-5-3v-4z" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-linejoin="round" />
          <circle cx="9" cy="12" r="2" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.25" />
          <circle cx="21" cy="8" r="2" class="module-logo__rec module-logo__fill" fill="#ef4444" />
        </template>

        <!-- Ridge — fingerprint ridges -->
        <template v-else-if="productId === 'ridge'">
          <path d="M14 6c-3 0-5 2-5 4" class="module-logo__stroke module-logo__ridge" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-linecap="round" />
          <path d="M14 8c-4.5 0-7.5 2.5-7.5 5.5" class="module-logo__stroke module-logo__ridge" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-linecap="round" />
          <path d="M14 10c-6 0-10 3.5-10 7.5" class="module-logo__stroke module-logo__ridge" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-linecap="round" />
          <path d="M14 6c3 0 5 2 5 4" class="module-logo__stroke module-logo__ridge" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-linecap="round" />
          <path d="M14 8c4.5 0 7.5 2.5 7.5 5.5" class="module-logo__stroke module-logo__ridge" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-linecap="round" />
          <circle cx="14" cy="14" r="1.25" class="module-logo__fill" :fill="`url(#${gradId})`" />
        </template>

        <!-- Folio — document stack -->
        <template v-else-if="productId === 'folio'">
          <path d="M8 6h10l3 3v14H8V6z" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M18 6v3h3" class="module-logo__detail" :stroke="`url(#${gradId})`" stroke-width="1.25" stroke-linecap="round" />
          <path d="M11 13h8M11 16h6M11 19h8" class="module-logo__detail" :stroke="`url(#${gradId})`" stroke-width="1.25" stroke-linecap="round" stroke-opacity="0.55" />
          <rect x="6" y="8" width="10" height="13" rx="1" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1" stroke-opacity="0.35" />
        </template>

        <!-- Sentinel — endpoint + shield -->
        <template v-else-if="productId === 'sentinel'">
          <rect x="6" y="6" width="16" height="11" rx="2" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <path d="M10 20h8M14 17v3" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-linecap="round" />
          <path d="M18 9l2 1v2c0 1.5-1 2.8-2 3.2-.9-.4-2-1.7-2-3.2v-2l2-1z" class="module-logo__fill" :fill="`url(#${gradId})`" opacity="0.85" />
        </template>

        <!-- Nexus — network hub (star topology, not entity graph) -->
        <template v-else-if="productId === 'nexus'">
          <rect x="11" y="11" width="6" height="6" rx="1.5" class="module-logo__fill module-logo__nexus-hub" :fill="`url(#${gradId})`" opacity="0.45" />
          <rect x="11" y="11" width="6" height="6" rx="1.5" class="module-logo__stroke module-logo__nexus-hub" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <line x1="14" y1="11" x2="14" y2="6.5" class="module-logo__detail module-logo__nexus-spoke module-logo__nexus-spoke--1" :stroke="`url(#${gradId})`" stroke-width="1.25" stroke-linecap="round" />
          <line x1="17" y1="14" x2="21.5" y2="14" class="module-logo__detail module-logo__nexus-spoke module-logo__nexus-spoke--2" :stroke="`url(#${gradId})`" stroke-width="1.25" stroke-linecap="round" />
          <line x1="14" y1="17" x2="14" y2="21.5" class="module-logo__detail module-logo__nexus-spoke module-logo__nexus-spoke--3" :stroke="`url(#${gradId})`" stroke-width="1.25" stroke-linecap="round" />
          <line x1="11" y1="14" x2="6.5" y2="14" class="module-logo__detail module-logo__nexus-spoke module-logo__nexus-spoke--4" :stroke="`url(#${gradId})`" stroke-width="1.25" stroke-linecap="round" />
          <circle cx="14" cy="5" r="2" class="module-logo__fill module-logo__nexus-endpoint module-logo__nexus-endpoint--1" :fill="`url(#${gradId})`" />
          <circle cx="23" cy="14" r="2" class="module-logo__fill module-logo__nexus-endpoint module-logo__nexus-endpoint--2" :fill="`url(#${gradId})`" />
          <circle cx="14" cy="23" r="2" class="module-logo__fill module-logo__nexus-endpoint module-logo__nexus-endpoint--3" :fill="`url(#${gradId})`" />
          <circle cx="5" cy="14" r="2" class="module-logo__fill module-logo__nexus-endpoint module-logo__nexus-endpoint--4" :fill="`url(#${gradId})`" />
          <circle cx="17" cy="14" r="1" class="module-logo__fill module-logo__nexus-packet" :fill="meta.colors[0]" />
        </template>

        <!-- Phantom — hidden threat -->
        <template v-else-if="productId === 'phantom'">
          <path
            d="M14 5c-4 0-7 3-7 7 0 3 2 5.5 4 7.5 1-1.5 2-2.5 3-2.5s2 1 3 2.5c2-2 4-4.5 4-7.5 0-4-3-7-7-7z"
            class="module-logo__stroke"
            :stroke="`url(#${gradId})`"
            stroke-width="1.5"
            stroke-linejoin="round"
            stroke-dasharray="3 2"
          />
          <circle cx="11" cy="12" r="1.25" class="module-logo__fill" :fill="`url(#${gradId})`" />
          <circle cx="17" cy="12" r="1.25" class="module-logo__fill" :fill="`url(#${gradId})`" />
          <path d="M12 16c1 1 3 1 4 0" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.25" stroke-linecap="round" />
        </template>

        <!-- Chronos — timeline clock -->
        <template v-else-if="productId === 'chronos'">
          <circle cx="14" cy="14" r="9" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <path d="M14 14V8M14 14l4 3" class="module-logo__accent module-logo__hand" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-linecap="round" />
          <circle cx="14" cy="14" r="1.25" class="module-logo__fill" :fill="`url(#${gradId})`" />
          <path d="M5 14h2M21 14h-2" class="module-logo__detail" :stroke="`url(#${gradId})`" stroke-width="1.25" stroke-linecap="round" stroke-opacity="0.5" />
        </template>

        <!-- Flow — pipeline -->
        <template v-else-if="productId === 'flow'">
          <rect x="4" y="11" width="6" height="6" rx="1.5" class="module-logo__fill" :fill="`url(#${gradId})`" opacity="0.35" />
          <rect x="11" y="11" width="6" height="6" rx="1.5" class="module-logo__fill module-logo__flow-mid" :fill="`url(#${gradId})`" opacity="0.55" />
          <rect x="18" y="11" width="6" height="6" rx="1.5" class="module-logo__fill" :fill="`url(#${gradId})`" opacity="0.35" />
          <rect x="4" y="11" width="6" height="6" rx="1.5" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <rect x="11" y="11" width="6" height="6" rx="1.5" class="module-logo__stroke module-logo__flow-mid" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <rect x="18" y="11" width="6" height="6" rx="1.5" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <path d="M10 14h1M17 14h1" class="module-logo__accent module-logo__flow-arrow" :stroke="`url(#${gradId})`" stroke-width="1.5" stroke-linecap="round" />
          <circle cx="14" cy="14" r="1.5" class="module-logo__fill module-logo__flow-dot" :fill="`url(#${gradId})`" />
        </template>

        <!-- Review — annotate -->
        <template v-else-if="productId === 'review'">
          <rect x="6" y="5" width="12" height="16" rx="2" class="module-logo__fill" :fill="`url(#${gradId})`" opacity="0.2" />
          <rect x="6" y="5" width="12" height="16" rx="2" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <path d="M9 10h8M9 13h6" class="module-logo__detail" :stroke="`url(#${gradId})`" stroke-width="1.25" stroke-linecap="round" stroke-opacity="0.65" />
          <path d="M18 16l4 2v4l-4-2v-4z" class="module-logo__fill" :fill="`url(#${gradId})`" />
          <circle cx="20" cy="18" r="1" fill="#0f1117" />
        </template>

        <!-- Brief — report -->
        <template v-else-if="productId === 'brief'">
          <rect x="7" y="4" width="14" height="20" rx="2" class="module-logo__fill" :fill="`url(#${gradId})`" opacity="0.22" />
          <rect x="7" y="4" width="14" height="20" rx="2" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <path d="M10 9h8M10 12h8M10 15h5" class="module-logo__detail" :stroke="`url(#${gradId})`" stroke-width="1.25" stroke-linecap="round" stroke-opacity="0.65" />
          <path d="M10 18l2 2 4-4" class="module-logo__accent" :stroke="meta.colors[0]" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
        </template>

        <!-- Command — dashboard -->
        <template v-else-if="productId === 'command'">
          <rect x="5" y="5" width="8" height="8" rx="1.5" class="module-logo__fill" :fill="`url(#${gradId})`" opacity="0.4" />
          <rect x="15" y="5" width="8" height="8" rx="1.5" class="module-logo__fill" :fill="`url(#${gradId})`" opacity="0.55" />
          <rect x="5" y="15" width="18" height="8" rx="1.5" class="module-logo__fill module-logo__cmd-wide" :fill="`url(#${gradId})`" opacity="0.3" />
          <rect x="5" y="5" width="8" height="8" rx="1.5" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <rect x="15" y="5" width="8" height="8" rx="1.5" class="module-logo__stroke" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <rect x="5" y="15" width="18" height="8" rx="1.5" class="module-logo__stroke module-logo__cmd-wide" :stroke="`url(#${gradId})`" stroke-width="1.5" />
          <circle cx="9" cy="9" r="1.5" class="module-logo__fill" :fill="`url(#${gradId})`" />
          <circle cx="19" cy="9" r="1.5" class="module-logo__fill" :fill="`url(#${gradId})`" />
          <rect x="8" y="18" width="12" height="2" rx="1" class="module-logo__fill" :fill="`url(#${gradId})`" opacity="0.85" />
        </template>

        <defs>
          <linearGradient :id="gradId" x1="4" y1="4" x2="24" y2="24">
            <stop :stop-color="meta.colors[0]" />
            <stop offset="0.5" :stop-color="meta.colors[1]" />
            <stop v-if="meta.colors[2]" offset="1" :stop-color="meta.colors[2]" />
            <stop v-else offset="1" :stop-color="meta.colors[1]" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span v-if="!iconOnly" class="module-logo__text">
      <span class="module-logo__brand">{{ PRODUCT_SHORT }}</span>
      <span class="module-logo__name" :style="{ backgroundImage: gradient }">{{ meta.name }}</span>
    </span>
  </span>
</template>

<script setup>
import { computed, useId } from 'vue'
import { PRODUCT_SHORT } from '@/config.js'
import { MODULE_LOGO_META } from './moduleLogoMeta.js'

const props = defineProps({
  productId: { type: String, required: true },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['icon', 'sm', 'md', 'lg'].includes(v),
  },
  animated: { type: Boolean, default: true },
})

const gradId = useId()
const meta = computed(() => MODULE_LOGO_META[props.productId] ?? { name: props.productId, colors: ['#6b8aff', '#a78bfa'] })

const iconOnly = computed(() => props.size === 'icon')

const iconSize = computed(() => {
  if (props.size === 'icon') return 20
  if (props.size === 'sm') return 22
  if (props.size === 'lg') return 32
  return 26
})

const gradient = computed(() => {
  const c = meta.value.colors
  if (c.length >= 3) return `linear-gradient(135deg, ${c[0]} 0%, ${c[1]} 45%, ${c[2]} 100%)`
  return `linear-gradient(135deg, ${c[0]} 0%, ${c[1]} 100%)`
})
</script>

<style scoped>
.module-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
  color: var(--on-surface);
}

.module-logo__icon {
  display: flex;
  flex-shrink: 0;
  line-height: 0;
}

.module-logo__icon svg {
  display: block;
}

.module-logo__text {
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  white-space: nowrap;
}

.module-logo__brand {
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--on-surface-variant);
}

.module-logo__name {
  font-weight: 800;
  letter-spacing: -0.03em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.module-logo--icon {
  gap: 0;
}

.module-logo--sm .module-logo__brand,
.module-logo--sm .module-logo__name {
  font-size: 0.6875rem;
}

.module-logo--md .module-logo__brand {
  font-size: 0.75rem;
}

.module-logo--md .module-logo__name {
  font-size: 0.875rem;
}

.module-logo--lg .module-logo__brand {
  font-size: 0.875rem;
}

.module-logo--lg .module-logo__name {
  font-size: 1.125rem;
}

/* Shared motion */
.module-logo--animated .module-logo__stroke {
  animation: module-glow 3s ease-in-out infinite;
}

.module-logo--animated .module-logo__accent,
.module-logo--animated .module-logo__node {
  animation: module-pulse 2.5s ease-in-out infinite;
}

.module-logo--animated .module-logo__sweep {
  transform-origin: 14px 14px;
  animation: module-sweep 3s ease-in-out infinite;
}

.module-logo--animated .module-logo__wave {
  animation: module-wave 2s ease-in-out infinite;
}

.module-logo--animated .module-logo__rec {
  animation: module-rec 1.4s ease-in-out infinite;
}

.module-logo--animated .module-logo__ridge:nth-child(1) { animation: module-ridge 2.5s ease-in-out infinite; }
.module-logo--animated .module-logo__ridge:nth-child(2) { animation: module-ridge 2.5s ease-in-out infinite 0.15s; }
.module-logo--animated .module-logo__ridge:nth-child(3) { animation: module-ridge 2.5s ease-in-out infinite 0.3s; }

.module-logo--animated .module-logo__pulse-bar:nth-child(4) { animation: module-bar 1.8s ease-in-out infinite; }
.module-logo--animated .module-logo__pulse-bar:nth-child(5) { animation: module-bar 1.8s ease-in-out infinite 0.2s; }
.module-logo--animated .module-logo__pulse-bar:nth-child(6) { animation: module-bar 1.8s ease-in-out infinite 0.4s; }

.module-logo--animated .module-logo__hand {
  transform-origin: 14px 14px;
  animation: module-hand 4s ease-in-out infinite;
}

.module-logo--animated .module-logo__flow-dot {
  animation: module-flow-dot 2s ease-in-out infinite;
  transform-origin: center;
  transform-box: fill-box;
}

.module-logo--animated .module-logo__flow-mid {
  animation: module-glow 3s ease-in-out infinite 0.3s;
}

.module-logo--animated .module-logo__nexus-hub {
  animation: module-nexus-hub 3s ease-in-out infinite;
}

.module-logo--animated .module-logo__nexus-spoke--1 { animation: module-nexus-spoke 2.5s ease-in-out infinite; }
.module-logo--animated .module-logo__nexus-spoke--2 { animation: module-nexus-spoke 2.5s ease-in-out infinite 0.15s; }
.module-logo--animated .module-logo__nexus-spoke--3 { animation: module-nexus-spoke 2.5s ease-in-out infinite 0.3s; }
.module-logo--animated .module-logo__nexus-spoke--4 { animation: module-nexus-spoke 2.5s ease-in-out infinite 0.45s; }

.module-logo--animated .module-logo__nexus-endpoint--1 { animation: module-pulse 2.5s ease-in-out infinite; }
.module-logo--animated .module-logo__nexus-endpoint--2 { animation: module-pulse 2.5s ease-in-out infinite 0.2s; }
.module-logo--animated .module-logo__nexus-endpoint--3 { animation: module-pulse 2.5s ease-in-out infinite 0.4s; }
.module-logo--animated .module-logo__nexus-endpoint--4 { animation: module-pulse 2.5s ease-in-out infinite 0.6s; }

.module-logo--animated .module-logo__nexus-packet {
  animation: module-nexus-packet 2s ease-in-out infinite;
}

@keyframes module-nexus-hub {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.65; filter: drop-shadow(0 0 3px rgba(61, 90, 254, 0.45)); }
}

@keyframes module-nexus-spoke {
  0%, 100% { opacity: 0.45; }
  50% { opacity: 1; }
}

@keyframes module-nexus-packet {
  0% { transform: translate(0, 0); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translate(4px, 0); opacity: 0; }
}

@keyframes module-glow {
  0%, 100% { opacity: 0.75; }
  50% { opacity: 1; }
}

@keyframes module-pulse {
  0%, 100% { opacity: 0.65; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.12); }
}

@keyframes module-sweep {
  0%, 100% { transform: rotate(0deg); opacity: 0.7; }
  50% { transform: rotate(72deg); opacity: 1; }
}

@keyframes module-wave {
  0%, 100% { opacity: 0.45; }
  50% { opacity: 1; }
}

@keyframes module-rec {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}

@keyframes module-ridge {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}

@keyframes module-bar {
  0%, 100% { opacity: 0.5; transform: scaleY(0.85); transform-origin: center bottom; }
  50% { opacity: 1; transform: scaleY(1.1); transform-origin: center bottom; }
}

@keyframes module-hand {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(12deg); }
}

@keyframes module-flow-dot {
  0% { transform: translateX(-5px); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateX(5px); opacity: 0; }
}
</style>
