<template>
  <section class="product-caps">
    <h3 class="product-caps__title">Capabilities in this product</h3>
    <p class="product-caps__intro">
      {{ intro }}
    </p>

    <div
      v-for="group in groups"
      :key="group.key"
      class="product-caps__group"
    >
      <h4 v-if="group.title" class="product-caps__group-title">{{ group.title }}</h4>
      <p v-else-if="group.layerId" class="product-caps__group-title">
        {{ layerTitle(group.layerId) }}
      </p>

      <ul class="product-caps__list">
        <li v-for="cap in group.items" :key="cap.id">
          <router-link
            v-if="linkFor(cap)"
            :to="linkFor(cap)"
            class="product-caps__item product-caps__item--linked"
          >
            {{ cap.label }}
          </router-link>
          <span v-else class="product-caps__item">{{ cap.label }}</span>
        </li>
      </ul>
    </div>

    <div v-if="deepDives.length" class="product-caps__deep">
      <h4 class="product-caps__group-title">Deep-dive modules</h4>
      <div class="product-caps__deep-grid">
        <ScanTypeCard
          v-for="feature in deepDives"
          :key="feature.id"
          :scan="feature"
          compact
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ScanTypeCard from './ScanTypeCard.vue'
import { getProductCapabilityGroups, PRODUCT_FEATURE_IDS } from '@/content/flagshipProducts.js'
import { PLATFORM_LAYERS } from '@/content/platformLayers.js'
import { getFeaturesForProduct, getFeatureById } from '@/content/scanTypes.js'

const props = defineProps({
  productId: { type: String, required: true },
  intro: {
    type: String,
    default: 'Everything below is included in this flagship product — not a separate vendor or add-on.',
  },
})

const groups = computed(() => {
  const raw = getProductCapabilityGroups(props.productId)
  return raw.map((g, i) => ({
    ...g,
    key: g.title ?? g.layerId ?? `group-${i}`,
  }))
})

const deepDives = computed(() => {
  const ids = PRODUCT_FEATURE_IDS[props.productId] ?? []
  return ids
    .map((id) => getFeatureById(id))
    .filter((f) => f && !f.flagship)
})

function layerTitle(layerId) {
  return PLATFORM_LAYERS[layerId]?.title ?? layerId
}

function linkFor(cap) {
  if (cap.featureId === 'coverage') return '/coverage'
  if (!cap.featureId) return null
  const feature = getFeatureById(cap.featureId)
  if (!feature || feature.id === props.productId) return null
  return `/features/${feature.id}`
}
</script>

<style scoped>
.product-caps {
  margin-bottom: 2.5rem;
  padding: 1.75rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container-low);
  border: 1px solid var(--outline-variant);
}

.product-caps__title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.product-caps__intro {
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
  margin-bottom: 1.5rem;
  max-width: 640px;
}

.product-caps__group {
  margin-bottom: 1.25rem;
}

.product-caps__group-title {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--primary-container);
  margin-bottom: 0.5rem;
}

.product-caps__list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.product-caps__item {
  display: inline-block;
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  padding: 0.3rem 0.625rem;
  border-radius: 999px;
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
}

.product-caps__item--linked {
  color: var(--on-surface);
  transition: border-color 0.15s ease, background 0.15s ease;
}

.product-caps__item--linked:hover {
  border-color: rgba(61, 90, 254, 0.4);
  background: rgba(61, 90, 254, 0.08);
}

.product-caps__deep {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--outline-variant);
}

.product-caps__deep-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.75rem;
}
</style>
