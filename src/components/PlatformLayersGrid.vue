<template>
  <section class="platform-layers section">
    <div class="container">
      <div class="platform-layers__header reveal">
        <h2 class="section-title">Five layers of the forensic OS</h2>
        <p class="section-subtitle">
          Every capability maps to a layer and a flagship product. This is how Obsedian feels like
          an operating system — not thirty disconnected cards.
        </p>
      </div>

      <div
        v-for="layerId in displayLayers"
        :key="layerId"
        class="platform-layers__layer reveal"
      >
        <div class="platform-layers__layer-header">
          <span v-if="PLATFORM_LAYERS[layerId].number" class="platform-layers__num">
            Layer {{ PLATFORM_LAYERS[layerId].number }}
          </span>
          <h3 class="platform-layers__layer-title">{{ PLATFORM_LAYERS[layerId].title }}</h3>
          <p class="platform-layers__layer-tagline">{{ PLATFORM_LAYERS[layerId].tagline }}</p>
        </div>

        <div class="platform-layers__caps">
          <template v-for="group in getGroupedCapabilities(layerId)" :key="group.key">
            <div v-if="group.title" class="platform-layers__group-label">{{ group.title }}</div>
            <ul class="platform-layers__list">
              <li v-for="cap in group.items" :key="cap.id">
                <router-link
                  v-if="capLink(cap)"
                  :to="capLink(cap)"
                  class="platform-layers__cap platform-layers__cap--linked"
                >
                  {{ cap.label }}
                  <span class="platform-layers__product">{{ productLabel(cap.productId) }}</span>
                </router-link>
                <span v-else class="platform-layers__cap">
                  {{ cap.label }}
                  <span class="platform-layers__product">{{ productLabel(cap.productId) }}</span>
                </span>
              </li>
            </ul>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  PLATFORM_LAYERS,
  LAYER_ORDER,
  LAYER_CAPABILITIES,
} from '@/content/platformLayers.js'
import {
  getProductBySlug,
  LEGACY_FEATURE_REDIRECTS,
} from '@/content/productEcosystem.js'

const displayLayers = LAYER_ORDER.filter((id) => id !== 'platform')

function getGroupedCapabilities(layerId) {
  const caps = LAYER_CAPABILITIES[layerId] ?? []
  const groups = []
  let current = null

  for (const cap of caps) {
    const key = cap.group ?? '_default'
    if (!current || current.key !== key) {
      current = { key, title: cap.group ?? null, items: [] }
      groups.push(current)
    }
    current.items.push(cap)
  }

  return groups
}

function productLabel(productId) {
  return getProductBySlug(productId)?.shortName ?? productId
}

function capLink(cap) {
  if (cap.featureId === 'coverage') return '/coverage'
  if (cap.productId && getProductBySlug(cap.productId)) {
    return `/products/${cap.productId}`
  }
  if (cap.featureId && LEGACY_FEATURE_REDIRECTS[cap.featureId]) {
    return `/products/${LEGACY_FEATURE_REDIRECTS[cap.featureId]}`
  }
  return null
}
</script>

<style scoped>
.platform-layers__header {
  margin-bottom: 3rem;
}

.platform-layers__layer {
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--outline-variant);
}

.platform-layers__layer:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.platform-layers__num {
  display: inline-block;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-warm);
  margin-bottom: 0.375rem;
}

.platform-layers__layer-title {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.375rem;
}

.platform-layers__layer-tagline {
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
  max-width: 640px;
  margin-bottom: 1.25rem;
}

.platform-layers__group-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary-container);
  margin: 1rem 0 0.5rem;
}

.platform-layers__group-label:first-child {
  margin-top: 0;
}

.platform-layers__list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.375rem 1rem;
  margin-bottom: 0.5rem;
}

.platform-layers__cap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
  padding: 0.375rem 0.5rem;
  border-radius: 6px;
}

.platform-layers__cap--linked {
  color: var(--on-surface);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid transparent;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.platform-layers__cap--linked:hover {
  border-color: rgba(61, 90, 254, 0.35);
  background: rgba(61, 90, 254, 0.06);
}

.platform-layers__product {
  flex-shrink: 0;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--accent-warm);
  opacity: 0.85;
}
</style>
