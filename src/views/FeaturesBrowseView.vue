<template>
  <div class="features-browse">
    <div class="container">
      <CapabilitiesLayout>
        <header class="features-browse__header reveal">
          <h1 class="features-browse__title">Six flagship products</h1>
          <p class="features-browse__subtitle">
            Obsedian is a forensic operating system — not thirty disconnected tools. Browse each
            flagship product and its capabilities below.
          </p>
        </header>

        <article
          v-for="product in FLAGSHIP_PRODUCTS"
          :key="product.id"
          :id="product.id"
          class="features-browse__section reveal"
        >
          <FeatureDetailContent
            v-if="flagshipFeature(product.id)"
            :feature="flagshipFeature(product.id)"
            :details="getFeatureDetails(product.id)"
            show-full-page-link
            :show-related="false"
            :show-cta="false"
          />

          <div
            v-for="feature in getFeaturesForProduct(product.id)"
            :key="feature.id"
            :id="feature.id"
            class="features-browse__sub reveal"
          >
            <FeatureDetailContent
              :feature="feature"
              :details="getFeatureDetails(feature.id)"
              show-full-page-link
              :show-related="false"
              :show-cta="false"
            />
          </div>
        </article>

        <div class="features-browse__cta reveal reveal-scale">
          <h2>See the full platform in action</h2>
          <p>We'll walk your team through Volume, Prism, Spectra, Molecules, and Lens with scenarios relevant to your agency.</p>
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
import { FLAGSHIP_PRODUCTS } from '@/content/flagshipProducts.js'
import { getFeatureById, getFeaturesForProduct } from '@/content/scanTypes.js'
import { getFeatureDetails } from '@/content/featureDetails.js'
import { DEMO_URL } from '@/config.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'
import { useFeatureScrollSpy } from '@/composables/useFeatureScrollSpy.js'

useScrollReveal()

const browseIds = FLAGSHIP_PRODUCTS.flatMap((product) => [
  product.id,
  ...getFeaturesForProduct(product.id).map((f) => f.id),
])

const { activeFeatureId } = useFeatureScrollSpy(browseIds)
provide('activeFeatureId', activeFeatureId)

function flagshipFeature(id) {
  return getFeatureById(id)
}
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
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--outline-variant);
}

.features-browse__section:last-of-type {
  border-bottom: none;
}

.features-browse__sub {
  scroll-margin-top: calc(var(--header-height) + 1.5rem);
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px dashed var(--outline-variant);
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
