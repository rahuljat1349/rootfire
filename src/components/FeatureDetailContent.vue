<template>
  <div class="feature-content">
    <header class="feature-content__hero reveal">
      <div class="feature-content__hero-copy">
        <span class="feature-content__category">{{ categoryLabel }}</span>
        <span v-if="feature.beta" class="feature-content__badge">New</span>
        <h1 v-if="isPageTitle" class="feature-content__title">
          <ProductTitle :product-id="feature.id" :label="feature.label" size="lg" />
        </h1>
        <h2 v-else class="feature-content__title">
          <ProductTitle :product-id="feature.id" :label="feature.label" size="lg" />
        </h2>
        <p class="feature-content__tagline">{{ details.tagline }}</p>
        <p class="feature-content__outcome">{{ feature.outcome }}</p>
        <router-link
          v-if="showFullPageLink"
          :to="`/features/${feature.id}`"
          class="feature-content__full-link"
        >
          Open full page →
        </router-link>
      </div>
      <div class="feature-content__hero-anim reveal reveal-scale">
        <FeatureAnimation :type="feature.animation" size="large" />
      </div>
    </header>

    <ProductCapabilityList
      v-if="feature.flagship"
      :product-id="feature.productId ?? feature.id"
      class="reveal"
    />

    <section class="feature-content__overview reveal">
      <h3 class="feature-content__section-title">What it does</h3>
      <p class="feature-content__overview-text">{{ details.overview }}</p>
    </section>

    <section class="feature-content__steps reveal">
      <h3 class="feature-content__section-title">How it works</h3>
      <div class="feature-content__steps-grid">
        <article
          v-for="(step, i) in details.steps"
          :key="i"
          class="step-card reveal"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <div class="step-card__anim">
            <FeatureAnimation :type="feature.animation" :phase="i + 1" size="medium" />
          </div>
          <div class="step-card__num">{{ i + 1 }}</div>
          <h4 class="step-card__title">{{ step.title }}</h4>
          <p class="step-card__body">{{ step.body }}</p>
        </article>
      </div>
    </section>

    <section class="feature-content__benefits reveal">
      <div class="benefits-col">
        <h3 class="feature-content__section-title">Key benefits</h3>
        <ul class="benefits-list">
          <li v-for="b in details.benefits" :key="b">{{ b }}</li>
        </ul>
      </div>
      <div class="benefits-col">
        <h3 class="feature-content__section-title">Ideal for</h3>
        <ul class="ideal-list">
          <li v-for="use in details.idealFor" :key="use">{{ use }}</li>
        </ul>
      </div>
    </section>

    <section v-if="showRelated && related.length" class="feature-content__related reveal">
      <h3 class="feature-content__section-title">Related capabilities</h3>
      <div class="feature-content__related-grid">
        <ScanTypeCard v-for="rel in related" :key="rel.id" :scan="rel" compact />
      </div>
    </section>

    <div v-if="showCta" class="feature-content__cta reveal reveal-scale">
      <h3>See {{ feature.label }} in a live demo</h3>
      <p>We'll walk your team through this capability with scenarios relevant to your agency.</p>
      <CtaButton :href="DEMO_URL" variant="primary">Book a live demo</CtaButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import FeatureAnimation from '@/components/FeatureAnimation.vue'
import ScanTypeCard from '@/components/ScanTypeCard.vue'
import CtaButton from '@/components/CtaButton.vue'
import ProductCapabilityList from '@/components/ProductCapabilityList.vue'
import ProductTitle from '@/components/ProductTitle.vue'
import { SCAN_CATEGORIES } from '@/content/scanTypes.js'
import { getFlagshipById } from '@/content/flagshipProducts.js'
import { DEMO_URL } from '@/config.js'

const props = defineProps({
  feature: { type: Object, required: true },
  details: { type: Object, required: true },
  related: { type: Array, default: () => [] },
  showRelated: { type: Boolean, default: true },
  showCta: { type: Boolean, default: true },
  showFullPageLink: { type: Boolean, default: false },
  isPageTitle: { type: Boolean, default: false },
})

const categoryLabel = computed(() => {
  if (props.feature.flagship) {
    const flagship = getFlagshipById(props.feature.productId ?? props.feature.id)
    return flagship?.role ?? SCAN_CATEGORIES[props.feature.category]
  }
  return SCAN_CATEGORIES[props.feature.category]
})
</script>

<style scoped>
.feature-content__hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  margin-bottom: 3rem;
}

.feature-content__category {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-warm);
  margin-bottom: 0.5rem;
}

.feature-content__badge {
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: rgba(124, 77, 255, 0.15);
  color: var(--secondary);
  vertical-align: middle;
}

.feature-content__title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 0.75rem;
}

.feature-content__tagline {
  font-size: 1.0625rem;
  color: var(--on-surface);
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.feature-content__outcome {
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary-container);
}

.feature-content__full-link {
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary-container);
}

.feature-content__full-link:hover {
  opacity: 0.85;
}

.feature-content__section-title {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
}

.feature-content__overview {
  margin-bottom: 2.5rem;
  padding: 1.75rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
}

.feature-content__overview-text {
  font-size: 1rem;
  color: var(--on-surface-variant);
  line-height: 1.75;
  max-width: 720px;
}

.feature-content__steps {
  margin-bottom: 2.5rem;
}

.feature-content__steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

.step-card {
  position: relative;
  padding: 1.5rem;
  padding-top: 1rem;
  border-radius: var(--radius-lg);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
}

.step-card__anim {
  margin-bottom: 0.75rem;
  overflow: hidden;
}

.step-card__anim :deep(.feature-anim) {
  margin-bottom: 0;
}

.step-card__num {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--primary-container);
  color: white;
  font-size: 0.8125rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-card__title {
  font-size: 1.0625rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.step-card__body {
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
}

.feature-content__benefits {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2.5rem;
  padding: 1.75rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container-low);
  border: 1px solid var(--outline-variant);
}

.benefits-list,
.ideal-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.benefits-list li,
.ideal-list li {
  position: relative;
  padding-left: 1.25rem;
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
  line-height: 1.55;
}

.benefits-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #34d399;
  font-weight: 700;
}

.ideal-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-container);
  font-weight: 700;
}

.feature-content__related {
  margin-bottom: 2.5rem;
}

.feature-content__related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.feature-content__cta {
  text-align: center;
  padding: 2rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid rgba(61, 90, 254, 0.25);
}

.feature-content__cta h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.feature-content__cta p {
  color: var(--on-surface-variant);
  margin-bottom: 1.25rem;
}

.feature-content__hero-anim {
  min-width: 0;
  overflow: hidden;
}

.feature-content__hero-anim :deep(.feature-anim) {
  width: 100%;
  max-width: 100%;
}

@media (max-width: 768px) {
  .feature-content__hero {
    grid-template-columns: 1fr;
  }

  .feature-content__hero-anim {
    order: -1;
  }

  .feature-content__benefits {
    grid-template-columns: 1fr;
  }
}
</style>
