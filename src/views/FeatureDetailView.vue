<template>
  <div v-if="feature && details" class="feature-page">
    <div class="container">
      <nav class="feature-page__breadcrumb reveal">
        <router-link to="/capabilities">Capabilities</router-link>
        <span aria-hidden="true">/</span>
        <span>{{ feature.label }}</span>
      </nav>

      <FeatureDetailContent
        :feature="feature"
        :details="details"
        :related="related"
        is-page-title
      />
    </div>
  </div>

  <div v-else class="feature-page feature-page--missing">
    <div class="container">
      <h1>Feature not found</h1>
      <router-link to="/capabilities">← Back to capabilities</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import FeatureDetailContent from '@/components/FeatureDetailContent.vue'
import { getFeatureById, getRelatedFeatures } from '@/content/scanTypes.js'
import { getFeatureDetails } from '@/content/featureDetails.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

const route = useRoute()
useScrollReveal()

const feature = computed(() => getFeatureById(route.params.id))
const details = computed(() => (feature.value ? getFeatureDetails(feature.value.id) : null))
const related = computed(() => (feature.value ? getRelatedFeatures(feature.value.id) : []))
</script>

<style scoped>
.feature-page {
  padding: 1.5rem 0 var(--section-padding);
}

.feature-page--missing {
  padding: 4rem 0;
  text-align: center;
}

.feature-page__breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  margin-bottom: 2rem;
}

.feature-page__breadcrumb a {
  color: var(--primary-container);
  transition: opacity 0.15s ease;
}

.feature-page__breadcrumb a:hover {
  opacity: 0.85;
}
</style>
