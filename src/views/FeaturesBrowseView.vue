<template>
  <div class="features-browse">
    <div class="container">
      <CapabilitiesLayout>
        <header class="features-browse__header reveal">
          <h1 class="features-browse__title">All capabilities</h1>
          <p class="features-browse__subtitle">
            Every feature in one scrollable guide. Use the menu to jump between capabilities,
            or open any feature on its own page.
          </p>
        </header>

        <article
          v-for="feature in SCAN_TYPES"
          :key="feature.id"
          :id="feature.id"
          class="features-browse__section reveal"
        >
          <FeatureDetailContent
            :feature="feature"
            :details="getFeatureDetails(feature.id)"
            show-full-page-link
            :show-related="false"
            :show-cta="false"
          />
        </article>

        <div class="features-browse__cta reveal reveal-scale">
          <h2>See the full platform in action</h2>
          <p>We'll walk your team through these capabilities with scenarios relevant to your agency.</p>
          <CtaButton :href="DEMO_URL" variant="primary">Book a live demo</CtaButton>
        </div>
      </CapabilitiesLayout>
    </div>
  </div>
</template>

<script setup>
import { provide } from 'vue'
import CapabilitiesLayout from '@/components/CapabilitiesLayout.vue'
import FeatureDetailContent from '@/components/FeatureDetailContent.vue'
import CtaButton from '@/components/CtaButton.vue'
import { SCAN_TYPES } from '@/content/scanTypes.js'
import { getFeatureDetails } from '@/content/featureDetails.js'
import { DEMO_URL } from '@/config.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'
import { useFeatureScrollSpy } from '@/composables/useFeatureScrollSpy.js'

useScrollReveal()

const featureIds = SCAN_TYPES.map((f) => f.id)
const { activeFeatureId } = useFeatureScrollSpy(featureIds)
provide('activeFeatureId', activeFeatureId)
</script>

<style scoped>
.features-browse {
  padding: 1.5rem 0 var(--section-padding);
}

.features-browse__header {
  margin-bottom: 3rem;
}

.features-browse__title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
}

.features-browse__subtitle {
  font-size: 1.0625rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
  max-width: 560px;
}

.features-browse__section {
  scroll-margin-top: calc(var(--header-height) + 1.5rem);
  padding-bottom: 3.5rem;
  margin-bottom: 3.5rem;
  border-bottom: 1px solid var(--outline-variant);
}

.features-browse__section:last-of-type {
  border-bottom: none;
  margin-bottom: 2rem;
}

.features-browse__cta {
  text-align: center;
  padding: 2.5rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid rgba(61, 90, 254, 0.25);
}

.features-browse__cta h2 {
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.features-browse__cta p {
  color: var(--on-surface-variant);
  margin-bottom: 1.25rem;
}
</style>
