<template>
  <section :id="sectionId" class="capabilities section" :class="{ 'capabilities--bare': bare }">
    <div v-if="!bare" class="container">
      <div class="capabilities__header reveal reveal-blur">
        <h2 class="section-title">{{ title }}</h2>
        <p class="section-subtitle">{{ subtitle }}</p>
      </div>

      <div
        v-for="(category, catIndex) in SCAN_CATEGORY_ORDER"
        :key="category"
        class="capabilities__category reveal"
        :style="{ transitionDelay: `${catIndex * 60}ms` }"
      >
        <div class="capabilities__category-header">
          <h3 class="capabilities__category-title">{{ SCAN_CATEGORIES[category] }}</h3>
          <p class="capabilities__category-tagline">{{ SCAN_CATEGORY_TAGLINES[category] }}</p>
        </div>
        <div class="capabilities__grid">
          <ScanTypeCard
            v-for="scan in typesByCategory[category]"
            :key="scan.id"
            :scan="scan"
          />
        </div>
      </div>
    </div>
    <template v-else>
      <div class="capabilities__header reveal reveal-blur">
        <h2 class="section-title">{{ title }}</h2>
        <p class="section-subtitle">{{ subtitle }}</p>
      </div>

      <div
        v-for="(category, catIndex) in SCAN_CATEGORY_ORDER"
        :key="category"
        class="capabilities__category reveal"
        :style="{ transitionDelay: `${catIndex * 60}ms` }"
      >
        <div class="capabilities__category-header">
          <h3 class="capabilities__category-title">{{ SCAN_CATEGORIES[category] }}</h3>
          <p class="capabilities__category-tagline">{{ SCAN_CATEGORY_TAGLINES[category] }}</p>
        </div>
        <div class="capabilities__grid">
          <ScanTypeCard
            v-for="scan in typesByCategory[category]"
            :key="scan.id"
            :scan="scan"
          />
        </div>
      </div>
    </template>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ScanTypeCard from './ScanTypeCard.vue'
import {
  SCAN_TYPES,
  SCAN_CATEGORIES,
  SCAN_CATEGORY_ORDER,
  SCAN_CATEGORY_TAGLINES,
} from '@/content/scanTypes.js'
import { PRODUCT_NAME } from '@/config.js'

defineProps({
  sectionId: { type: String, default: 'capabilities' },
  bare: { type: Boolean, default: false },
  title: { type: String, default: 'Everything your team needs — in one place' },
  subtitle: {
    type: String,
    default: `No more switching between six different tools. ${PRODUCT_NAME} covers identification, footage analysis, document search, and intelligence — unified under one roof. Each feature below shows how it works in three simple steps.`,
  },
})

const typesByCategory = computed(() => {
  const map = {}
  for (const cat of SCAN_CATEGORY_ORDER) {
    map[cat] = SCAN_TYPES.filter((t) => t.category === cat)
  }
  return map
})
</script>

<style scoped>
.capabilities--bare {
  padding-top: 0;
}

.capabilities__category {
  margin-bottom: 3rem;
}

.capabilities__category:last-child {
  margin-bottom: 0;
}

.capabilities__category-header {
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--outline-variant);
}

.capabilities__category-title {
  font-size: 1.375rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.375rem;
}

.capabilities__category-tagline {
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
}

.capabilities__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
