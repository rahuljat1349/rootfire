<template>
  <nav class="cap-menu" aria-label="Flagship products">
    <router-link to="/capabilities" class="cap-menu__overview">
      Platform overview
    </router-link>

    <div v-for="product in FLAGSHIP_PRODUCTS" :key="product.id" class="cap-menu__group">
      <router-link
        :to="{ name: 'features-browse', hash: `#${product.id}` }"
        class="cap-menu__product"
        :class="{ 'cap-menu__product--active': activeId === product.id }"
      >
        <span class="cap-menu__icon" aria-hidden="true">
          <ScanTypeIcon :name="product.icon" />
        </span>
        <span class="cap-menu__label">
          <ProductTitle :product-id="product.id" :label="product.label" size="sm" />
        </span>
      </router-link>

      <ul v-if="featuresForProduct(product.id).length" class="cap-menu__list">
        <li v-for="feature in featuresForProduct(product.id)" :key="feature.id">
          <router-link
            :to="{ name: 'features-browse', hash: `#${feature.id}` }"
            class="cap-menu__link"
            :class="{ 'cap-menu__link--active': activeId === feature.id }"
          >
            {{ feature.label }}
            <span v-if="feature.beta" class="cap-menu__beta">New</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed, inject, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import ScanTypeIcon from './ScanTypeIcon.vue'
import ProductTitle from './ProductTitle.vue'
import { FLAGSHIP_PRODUCTS } from '@/content/flagshipProducts.js'
import { getFeaturesForProduct } from '@/content/scanTypes.js'

const route = useRoute()
const activeFeatureId = inject('activeFeatureId', null)

const activeId = computed(() => {
  if (activeFeatureId?.value) return activeFeatureId.value
  if (route.name === 'features-browse' && route.hash) {
    return route.hash.replace(/^#/, '')
  }
  return null
})

function featuresForProduct(productId) {
  return getFeaturesForProduct(productId)
}

watch(activeId, () => {
  nextTick(() => {
    document
      .querySelector('.cap-menu__product--active, .cap-menu__link--active')
      ?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  })
})
</script>

<style scoped>
.cap-menu {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.cap-menu__overview {
  display: block;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--on-surface-variant);
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--outline-variant);
  background: var(--surface-container);
  transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;
}

.cap-menu__overview:hover {
  color: var(--on-surface);
  border-color: rgba(61, 90, 254, 0.35);
}

.cap-menu__product {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--on-surface-variant);
  transition: color 0.15s ease, background 0.15s ease;
}

.cap-menu__product:hover {
  color: var(--on-surface);
  background: rgba(255, 255, 255, 0.04);
}

.cap-menu__product--active {
  color: var(--on-surface);
  background: rgba(61, 90, 254, 0.1);
  box-shadow: inset 2px 0 0 var(--primary-container);
}

.cap-menu__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.0625rem;
  margin-top: 0.25rem;
  padding-left: 0.5rem;
  border-left: 1px solid var(--outline-variant);
  margin-left: 1.25rem;
}

.cap-menu__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.375rem 0.625rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--on-surface-variant);
  transition: color 0.15s ease, background 0.15s ease;
}

.cap-menu__link:hover {
  color: var(--on-surface);
  background: rgba(255, 255, 255, 0.03);
}

.cap-menu__link--active {
  color: var(--on-surface);
  background: rgba(61, 90, 254, 0.08);
}

.cap-menu__icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-container);
}

.cap-menu__icon :deep(svg) {
  width: 16px;
  height: 16px;
}

.cap-menu__label {
  flex: 1;
  min-width: 0;
  line-height: 1.3;
}

.cap-menu__beta {
  flex-shrink: 0;
  font-size: 0.5625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.15rem 0.35rem;
  border-radius: 4px;
  background: rgba(124, 77, 255, 0.15);
  color: var(--secondary);
}
</style>
