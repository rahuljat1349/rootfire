<template>
  <div class="product-content">
    <header class="product-content__hero reveal">
      <div class="product-content__hero-copy">
        <span class="product-content__family" :style="{ color: familyAccent }">
          {{ familyLabel }}
        </span>
        <span v-if="product.comingSoon" class="product-content__badge">Coming soon</span>
        <h1 class="product-content__title">
          <ProductTitle
            :product-id="product.id"
            :short-name="product.shortName"
            :family="product.family"
            size="lg"
          />
        </h1>
        <p class="product-content__role">{{ product.role }}</p>
        <p class="product-content__tagline">{{ product.description }}</p>
        <div class="product-content__journey">
          <span
            v-for="step in product.journey"
            :key="step"
            class="product-content__journey-tag"
          >
            {{ journeyLabel(step) }}
          </span>
        </div>
      </div>
      <div class="product-content__hero-anim reveal reveal-scale">
        <FeatureAnimation :type="product.animation" size="large" />
      </div>
    </header>

    <section class="product-content__overview reveal">
      <h2 class="product-content__section-title">What it solves</h2>
      <p class="product-content__overview-text">{{ product.overview }}</p>
    </section>

    <section class="product-content__highlights reveal">
      <h2 class="product-content__section-title">Key capabilities</h2>
      <ul class="product-content__highlight-list">
        <li v-for="h in product.highlights" :key="h">{{ h }}</li>
      </ul>
    </section>

    <section v-if="product.idealFor?.length" class="product-content__ideal reveal">
      <h2 class="product-content__section-title">Ideal for</h2>
      <div class="product-content__tags">
        <span v-for="tag in product.idealFor" :key="tag" class="product-content__tag">{{ tag }}</span>
      </div>
    </section>

    <section v-if="related.length" class="product-content__related reveal">
      <h2 class="product-content__section-title">Works with</h2>
      <div class="product-content__related-grid">
        <ProductFamilyCard
          v-for="rel in related"
          :key="rel.id"
          :product="rel"
          compact
        />
      </div>
    </section>

    <div v-if="product.proof" class="product-content__proof reveal">
      <p class="product-content__proof-text">{{ product.proof }}</p>
    </div>

    <div v-if="showCta" class="product-content__cta reveal reveal-scale">
      <h2>See {{ product.shortName }} in a live demo</h2>
      <p>We'll walk your team through {{ product.label }} with scenarios relevant to your agency.</p>
      <CtaButton :href="demoUrl" variant="primary">Request demo</CtaButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import FeatureAnimation from '@/components/FeatureAnimation.vue'
import ProductTitle from '@/components/ProductTitle.vue'
import ProductFamilyCard from '@/components/ProductFamilyCard.vue'
import CtaButton from '@/components/CtaButton.vue'
import { PRODUCT_FAMILIES, JOURNEY_STEPS, getRelatedProducts } from '@/content/productEcosystem.js'

const props = defineProps({
  product: { type: Object, required: true },
  showCta: { type: Boolean, default: true },
})

const familyLabel = computed(() => PRODUCT_FAMILIES[props.product.family]?.label ?? '')
const familyAccent = computed(() => PRODUCT_FAMILIES[props.product.family]?.accent ?? '')
const related = computed(() => getRelatedProducts(props.product.slug))

const demoUrl = computed(
  () => `/demo?product=${props.product.slug}&intent=demo`
)

function journeyLabel(stepId) {
  return JOURNEY_STEPS[stepId]?.label ?? stepId
}
</script>

<style scoped>
.product-content__hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  margin-bottom: 3rem;
}

.product-content__family {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
}

.product-content__badge {
  display: inline-block;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: rgba(124, 77, 255, 0.15);
  color: var(--secondary);
  vertical-align: middle;
  margin-bottom: 0.5rem;
}

.product-content__title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 0.5rem;
}

.product-content__role {
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-container);
  margin-bottom: 0.75rem;
}

.product-content__tagline {
  font-size: 1.0625rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
  margin-bottom: 1rem;
}

.product-content__journey {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.product-content__journey-tag {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.25rem 0.625rem;
  border-radius: 999px;
  background: rgba(61, 90, 254, 0.12);
  color: var(--primary-container);
}

.product-content__section-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.product-content__overview {
  margin-bottom: 2rem;
  padding: 1.75rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
}

.product-content__overview-text {
  font-size: 1rem;
  color: var(--on-surface-variant);
  line-height: 1.75;
  max-width: 720px;
}

.product-content__highlights {
  margin-bottom: 2rem;
}

.product-content__highlight-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
}

.product-content__highlight-list li {
  padding: 0.875rem 1rem;
  border-radius: var(--radius-lg);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
}

.product-content__highlight-list li::before {
  content: '✓ ';
  color: #34d399;
  font-weight: 700;
}

.product-content__ideal {
  margin-bottom: 2rem;
}

.product-content__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.product-content__tag {
  font-size: 0.8125rem;
  padding: 0.375rem 0.75rem;
  border-radius: 999px;
  background: var(--surface-container-low);
  border: 1px solid var(--outline-variant);
  color: var(--on-surface-variant);
}

.product-content__related {
  margin-bottom: 2rem;
}

.product-content__related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.product-content__proof {
  margin-bottom: 2rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-lg);
  border-left: 3px solid var(--primary-container);
  background: rgba(61, 90, 254, 0.08);
}

.product-content__proof-text {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--on-surface);
}

.product-content__cta {
  text-align: center;
  padding: 2rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid rgba(61, 90, 254, 0.25);
}

.product-content__cta h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.product-content__cta p {
  color: var(--on-surface-variant);
  margin-bottom: 1.25rem;
}

@media (max-width: 768px) {
  .product-content__hero {
    grid-template-columns: 1fr;
  }

  .product-content__hero-anim {
    order: -1;
  }
}
</style>
