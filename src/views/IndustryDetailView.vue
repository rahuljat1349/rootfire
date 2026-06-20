<template>
  <div v-if="industry" class="page">
    <div class="container">
      <nav class="breadcrumb reveal">
        <router-link to="/industries">Industries</router-link>
        <span aria-hidden="true">/</span>
        <span>{{ industry.label }}</span>
      </nav>

      <header class="detail-hero reveal">
        <h1>{{ industry.headline }}</h1>
      </header>

      <section class="detail-block reveal">
        <h2>Regulatory context</h2>
        <p>{{ industry.regulatory }}</p>
      </section>

      <section class="detail-block reveal">
        <h2>Use cases</h2>
        <ul class="detail-list">
          <li v-for="u in industry.useCases" :key="u">{{ u }}</li>
        </ul>
      </section>

      <section class="detail-block reveal">
        <h2>Key products</h2>
        <div class="products-row">
          <ProductFamilyCard
            v-for="pid in industry.productEmphasis"
            :key="pid"
            :product="getProductBySlug(pid)"
            compact
          />
        </div>
      </section>

      <section class="detail-block reveal">
        <h2>Deployment</h2>
        <p class="deployment">{{ industry.deployment }}</p>
      </section>

      <div class="detail-cta reveal">
        <CtaButton :href="`/contact?industry=${industry.slug}&intent=sales`" variant="primary">
          Contact sales — {{ industry.label }}
        </CtaButton>
        <CtaButton :href="`/demo?industry=${industry.slug}&intent=demo`" variant="secondary" class="detail-cta__secondary">
          Request demo
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
import { getIndustryBySlug } from '@/content/industries.js'
import { getProductBySlug } from '@/content/productEcosystem.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

const route = useRoute()
useScrollReveal()

const industry = computed(() => getIndustryBySlug(route.params.slug))
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

.detail-block {
  margin: 2.5rem 0;
}

.detail-block h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.detail-block p,
.deployment {
  font-size: 1rem;
  color: var(--on-surface-variant);
  line-height: 1.75;
  max-width: 720px;
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
}

.detail-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-container);
}

.products-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.75rem;
}

.detail-cta {
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.detail-cta__secondary {
  margin-left: 0;
}
</style>
