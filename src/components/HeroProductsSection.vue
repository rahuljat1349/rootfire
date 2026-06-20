<template>
  <section :id="sectionId" class="hero-products section">
    <div class="container">
      <div class="hero-products__header reveal reveal-blur">
        <p class="hero-products__eyebrow">Six flagship products</p>
        <h2 class="section-title">{{ title }}</h2>
        <p class="section-subtitle">{{ subtitle }}</p>
      </div>

      <div class="hero-products__grid reveal reveal-stagger">
        <ProductFamilyCard
          v-for="product in heroProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <p v-if="showFootnote" class="hero-products__footnote reveal">
        {{ footnote }}
        <router-link to="/products" class="hero-products__link">
          Explore the full Obsedian ecosystem →
        </router-link>
      </p>
    </div>
  </section>
</template>

<script setup>
import ProductFamilyCard from './ProductFamilyCard.vue'
import { getHeroProducts } from '@/content/productEcosystem.js'
import { PRODUCT_NAME } from '@/config.js'

defineProps({
  sectionId: { type: String, default: 'products' },
  title: { type: String, default: 'One forensic OS — not a toolbox' },
  subtitle: {
    type: String,
    default: `${PRODUCT_NAME} positions against fragmented toolchains with six commercial entry points. Every other capability lives underneath.`,
  },
  showFootnote: { type: Boolean, default: true },
  footnote: {
    type: String,
    default: 'Integrity preservation, artifact extraction, analysis engines, DFIR, and intelligence — five layers beneath the surface.',
  },
})

const heroProducts = getHeroProducts()
</script>

<style scoped>
.hero-products__header {
  margin-bottom: 2.5rem;
}

.hero-products__eyebrow {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent-warm);
  margin-bottom: 0.75rem;
}

.hero-products__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
}

.hero-products__footnote {
  margin-top: 2rem;
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
}

.hero-products__link {
  display: inline-block;
  margin-left: 0.25rem;
  font-weight: 600;
  color: var(--primary-container);
}
</style>
