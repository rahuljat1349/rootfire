<template>
  <nav class="cap-menu" aria-label="All capabilities">
    <router-link to="/capabilities" class="cap-menu__overview">
      Capability overview
    </router-link>

    <div v-for="category in SCAN_CATEGORY_ORDER" :key="category" class="cap-menu__group">
      <p class="cap-menu__group-label">{{ SCAN_CATEGORIES[category] }}</p>
      <ul class="cap-menu__list">
        <li v-for="feature in typesByCategory[category]" :key="feature.id">
          <router-link
            :to="{ name: 'features-browse', hash: `#${feature.id}` }"
            class="cap-menu__link"
            :class="{ 'cap-menu__link--active': activeId === feature.id }"
          >
            <span class="cap-menu__icon" aria-hidden="true">
              <ScanTypeIcon :name="feature.icon" />
            </span>
            <span class="cap-menu__label">
              <LensLogo v-if="feature.id === 'lens'" size="sm" />
              <MoleculesLogo v-else-if="feature.id === 'molecules'" size="sm" />
              <PrismLogo v-else-if="feature.id === 'prism'" size="sm" />
              <IrisLogo v-else-if="feature.id === 'iris'" size="sm" />
              <template v-else>{{ feature.label }}</template>
            </span>
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
import LensLogo from './LensLogo.vue'
import MoleculesLogo from './MoleculesLogo.vue'
import PrismLogo from './PrismLogo.vue'
import IrisLogo from './IrisLogo.vue'
import {
  SCAN_TYPES,
  SCAN_CATEGORIES,
  SCAN_CATEGORY_ORDER,
} from '@/content/scanTypes.js'

const route = useRoute()
const activeFeatureId = inject('activeFeatureId', null)

const typesByCategory = computed(() => {
  const map = {}
  for (const cat of SCAN_CATEGORY_ORDER) {
    map[cat] = SCAN_TYPES.filter((t) => t.category === cat)
  }
  return map
})

const activeId = computed(() => {
  if (activeFeatureId?.value) return activeFeatureId.value
  if (route.name === 'features-browse' && route.hash) {
    return route.hash.replace(/^#/, '')
  }
  return null
})

watch(activeId, () => {
  nextTick(() => {
    document
      .querySelector('.cap-menu__link--active')
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

.cap-menu__overview--active {
  color: var(--on-surface);
  border-color: rgba(61, 90, 254, 0.45);
  background: rgba(61, 90, 254, 0.08);
}

.cap-menu__group-label {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-warm);
  margin-bottom: 0.375rem;
  padding: 0 0.75rem;
}

.cap-menu__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.cap-menu__link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--on-surface-variant);
  transition: color 0.15s ease, background 0.15s ease;
}

.cap-menu__link:hover {
  color: var(--on-surface);
  background: rgba(255, 255, 255, 0.04);
}

.cap-menu__link--active {
  color: var(--on-surface);
  background: rgba(61, 90, 254, 0.12);
  box-shadow: inset 2px 0 0 var(--primary-container);
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
