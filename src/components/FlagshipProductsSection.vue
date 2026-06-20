<template>
  <section :id="sectionId" class="flagships section">
    <div class="container">
      <div class="flagships__header reveal reveal-blur">
        <p class="flagships__eyebrow">Six flagship products</p>
        <h2 class="section-title">{{ title }}</h2>
        <p class="section-subtitle">{{ subtitle }}</p>
      </div>

      <div class="flagships__grid reveal reveal-stagger">
        <FlagshipProductCard
          v-for="product in FLAGSHIP_PRODUCTS"
          :key="product.id"
          :product="product"
        />
      </div>

      <p v-if="showFootnote" class="flagships__footnote reveal">
        {{ footnote }}
        <router-link to="/capabilities" class="flagships__link">See all five OS layers →</router-link>
      </p>
    </div>
  </section>
</template>

<script setup>
import FlagshipProductCard from './FlagshipProductCard.vue'
import { FLAGSHIP_PRODUCTS } from '@/content/flagshipProducts.js'
import { PRODUCT_NAME } from '@/config.js'

defineProps({
  sectionId: { type: String, default: 'flagships' },
  title: { type: String, default: 'One forensic OS — not a toolbox' },
  subtitle: {
    type: String,
    default: `${PRODUCT_NAME} positions against AXIOM, Cellebrite, Belkasoft, and Nuix with six flagship products. Every other capability lives underneath — acquisition, parsing, analysis, DFIR, and correlation as one operating system.`,
  },
  showFootnote: { type: Boolean, default: true },
  footnote: {
    type: String,
    default: 'Integrity preservation, artifact extraction, analysis engines, DFIR, and intelligence — five layers beneath the surface.',
  },
})
</script>

<style scoped>
.flagships__header {
  margin-bottom: 2.5rem;
}

.flagships__eyebrow {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent-warm);
  margin-bottom: 0.75rem;
}

.flagships__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
}

.flagships__footnote {
  margin-top: 2rem;
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
  max-width: 640px;
}

.flagships__link {
  display: inline-block;
  margin-left: 0.25rem;
  font-weight: 600;
  color: var(--primary-container);
}
</style>
