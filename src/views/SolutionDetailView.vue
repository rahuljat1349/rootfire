<template>
  <div v-if="solution" class="page">
    <div class="container">
      <nav class="breadcrumb reveal">
        <router-link to="/solutions">Solutions</router-link>
        <span aria-hidden="true">/</span>
        <span>{{ solution.label }}</span>
      </nav>

      <header class="detail-hero reveal">
        <h1>{{ solution.headline }}</h1>
        <p class="detail-hero__pain">{{ solution.pain }}</p>
      </header>

      <section class="detail-block reveal">
        <h2>Challenges</h2>
        <ul class="detail-list">
          <li v-for="c in solution.challenges" :key="c">{{ c }}</li>
        </ul>
      </section>

      <section class="detail-block reveal">
        <h2>How Obsedian helps</h2>
        <div class="journey-map">
          <article v-for="row in solution.journeyProducts" :key="row.step" class="journey-row">
            <span class="journey-row__step">{{ row.step }}</span>
            <div class="journey-row__products">
              <router-link
                v-for="pid in row.products"
                :key="pid"
                :to="`/products/${pid}`"
                class="journey-row__link"
              >
                {{ productName(pid) }}
              </router-link>
            </div>
          </article>
        </div>
      </section>

      <section class="detail-block reveal">
        <h2>Recommended products</h2>
        <div class="products-row">
          <ProductFamilyCard
            v-for="pid in solution.recommendedProducts"
            :key="pid"
            :product="getProductBySlug(pid)"
            compact
          />
        </div>
      </section>

      <section class="detail-block reveal">
        <h2>Outcomes</h2>
        <div class="outcomes">
          <div v-for="o in solution.outcomes" :key="o.label" class="outcome">
            <span class="outcome__stat">{{ o.stat }}</span>
            <span class="outcome__label">{{ o.label }}</span>
          </div>
        </div>
      </section>

      <section class="detail-block detail-block--quote reveal">
        <h2>Typical workflow</h2>
        <p>{{ solution.casePattern }}</p>
      </section>

      <div class="detail-cta reveal">
        <CtaButton :href="`/demo?solution=${solution.slug}&intent=demo`" variant="primary">
          Request demo for {{ solution.label }}
        </CtaButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductFamilyCard from '@/components/ProductFamilyCard.vue'
import CtaButton from '@/components/CtaButton.vue'
import { getSolutionBySlug } from '@/content/solutions.js'
import { getProductBySlug } from '@/content/productEcosystem.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

const route = useRoute()
useScrollReveal()

const solution = computed(() => getSolutionBySlug(route.params.slug))

function productName(slug) {
  return getProductBySlug(slug)?.shortName ?? slug
}
</script>

<style scoped>
.page {
  padding: 1.5rem 0 var(--section-padding);
}

.breadcrumb {
  display: flex;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  margin-bottom: 2rem;
}

.breadcrumb a {
  color: var(--primary-container);
}

.detail-hero h1 {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
}

.detail-hero__pain {
  font-size: 1.0625rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
  max-width: 720px;
}

.detail-block {
  margin: 2.5rem 0;
}

.detail-block h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.detail-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.detail-list li {
  padding-left: 1.25rem;
  position: relative;
  color: var(--on-surface-variant);
  line-height: 1.55;
}

.detail-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-container);
}

.journey-map {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.journey-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1rem;
  border-radius: var(--radius-lg);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
}

.journey-row__step {
  flex-shrink: 0;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--accent-warm);
  min-width: 80px;
}

.journey-row__products {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.journey-row__link {
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 0.25rem 0.625rem;
  border-radius: 999px;
  background: rgba(61, 90, 254, 0.1);
  color: var(--primary-container);
}

.products-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.75rem;
}

.outcomes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.outcome {
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  text-align: center;
}

.outcome__stat {
  display: block;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary-container);
}

.outcome__label {
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
}

.detail-block--quote p {
  font-size: 1rem;
  color: var(--on-surface-variant);
  line-height: 1.75;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  background: var(--surface-container-low);
  border-left: 3px solid var(--primary-container);
}

.detail-cta {
  margin-top: 2.5rem;
  text-align: center;
}
</style>
