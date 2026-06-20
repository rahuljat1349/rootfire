<template>
  <div class="ecosystem-diagram">
    <div class="ecosystem-diagram__tabs" role="tablist">
      <button
        v-for="familyId in FAMILY_ORDER"
        :key="familyId"
        class="ecosystem-diagram__tab"
        :class="{ 'ecosystem-diagram__tab--active': activeFamily === familyId }"
        :style="activeFamily === familyId ? { borderColor: accent(familyId) } : {}"
        @click="activeFamily = familyId"
      >
        {{ PRODUCT_FAMILIES[familyId].label }}
      </button>
    </div>

    <div class="ecosystem-diagram__flow" aria-hidden="true">
      <div
        v-for="(familyId, i) in FAMILY_ORDER"
        :key="familyId"
        class="ecosystem-diagram__node"
        :class="{ 'ecosystem-diagram__node--active': activeFamily === familyId }"
        :style="{ '--accent': accent(familyId) }"
        @click="activeFamily = familyId"
      >
        <span class="ecosystem-diagram__node-num">{{ i + 1 }}</span>
        <span class="ecosystem-diagram__node-label">{{ PRODUCT_FAMILIES[familyId].label }}</span>
        <span v-if="i < FAMILY_ORDER.length - 1" class="ecosystem-diagram__arrow">→</span>
      </div>
    </div>

    <div class="ecosystem-diagram__panel">
      <p class="ecosystem-diagram__tagline">{{ PRODUCT_FAMILIES[activeFamily].tagline }}</p>
      <div class="ecosystem-diagram__products">
        <router-link
          v-for="product in activeProducts"
          :key="product.id"
          :to="`/products/${product.slug}`"
          class="ecosystem-diagram__product"
          :style="{ '--accent': accent(activeFamily) }"
        >
          {{ product.shortName }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  FAMILY_ORDER,
  PRODUCT_FAMILIES,
  getProductsByFamily,
} from '@/content/productEcosystem.js'

const activeFamily = ref(FAMILY_ORDER[0])

const activeProducts = computed(() => getProductsByFamily(activeFamily.value))

function accent(familyId) {
  return PRODUCT_FAMILIES[familyId]?.accent ?? '#6b8aff'
}
</script>

<style scoped>
.ecosystem-diagram {
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  overflow: hidden;
}

.ecosystem-diagram__tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  padding: 1rem 1rem 0;
}

.ecosystem-diagram__tab {
  padding: 0.375rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--on-surface-variant);
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.15s ease;
}

.ecosystem-diagram__tab--active {
  color: var(--on-surface);
  background: rgba(255, 255, 255, 0.06);
  border-color: var(--accent, rgba(61, 90, 254, 0.4));
}

.ecosystem-diagram__flow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--outline-variant);
}

.ecosystem-diagram__node {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.55;
  transition: opacity 0.15s ease, background 0.15s ease;
}

.ecosystem-diagram__node--active {
  opacity: 1;
  background: color-mix(in srgb, var(--accent) 12%, transparent);
}

.ecosystem-diagram__node-num {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent);
  color: #0f1117;
  font-size: 0.625rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ecosystem-diagram__node-label {
  font-size: 0.75rem;
  font-weight: 600;
}

.ecosystem-diagram__arrow {
  margin-left: 0.25rem;
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  opacity: 0.5;
}

.ecosystem-diagram__panel {
  padding: 1.5rem;
}

.ecosystem-diagram__tagline {
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
  margin-bottom: 1rem;
}

.ecosystem-diagram__products {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.ecosystem-diagram__product {
  padding: 0.5rem 0.875rem;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--on-surface);
  background: color-mix(in srgb, var(--accent) 10%, var(--surface-container-low));
  border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
  transition: background 0.15s ease, border-color 0.15s ease;
}

.ecosystem-diagram__product:hover {
  border-color: var(--accent);
  background: color-mix(in srgb, var(--accent) 18%, transparent);
}
</style>
