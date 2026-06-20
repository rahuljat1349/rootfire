<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <header class="page-header reveal">
          <h1 class="page-header__title">The Obsedian product ecosystem</h1>
          <p class="page-header__subtitle">
            The full Obsedian product ecosystem — from acquisition through active intelligence.
          </p>
        </header>

        <div class="reveal">
          <EcosystemDiagram />
        </div>
      </div>
    </section>

    <section
      v-for="familyId in FAMILY_ORDER"
      :key="familyId"
      class="section products-family"
    >
      <div class="container">
        <div class="products-family__header reveal">
          <h2 class="products-family__title" :style="{ color: accent(familyId) }">
            {{ PRODUCT_FAMILIES[familyId].label }}
          </h2>
          <p class="products-family__tagline">{{ PRODUCT_FAMILIES[familyId].tagline }}</p>
        </div>
        <div class="products-family__grid reveal reveal-stagger">
          <ProductFamilyCard
            v-for="product in getProductsByFamily(familyId)"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>

    <FinalCtaSection />
  </div>
</template>

<script setup>
import EcosystemDiagram from '@/components/EcosystemDiagram.vue'
import ProductFamilyCard from '@/components/ProductFamilyCard.vue'
import FinalCtaSection from '@/components/FinalCtaSection.vue'
import {
  FAMILY_ORDER,
  PRODUCT_FAMILIES,
  getProductsByFamily,
} from '@/content/productEcosystem.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

useScrollReveal()

function accent(familyId) {
  return PRODUCT_FAMILIES[familyId]?.accent
}
</script>

<style scoped>
.page-header {
  margin-bottom: 2.5rem;
}

.page-header__title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
}

.page-header__subtitle {
  font-size: 1.0625rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
  max-width: 640px;
}

.products-family {
  padding-top: 0;
}

.products-family__header {
  margin-bottom: 1.5rem;
}

.products-family__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.375rem;
}

.products-family__tagline {
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
}

.products-family__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
