<template>
  <router-link :to="`/products/${product.slug}`" class="family-card-link">
    <article class="family-card hover-lift" :class="{ 'family-card--compact': compact }">
      <FeatureAnimation v-if="product.animation && !compact" :type="product.animation" />

      <div class="family-card__header">
        <span class="family-card__family" :style="{ color: familyAccent }">
          {{ familyLabel }}
        </span>
        <span v-if="product.comingSoon" class="family-card__badge">Coming soon</span>
      </div>

      <h3 class="family-card__title">
        <ProductTitle
          :product-id="product.id"
          :short-name="product.shortName"
          :family="product.family"
          size="md"
        />
      </h3>
      <p class="family-card__role">{{ product.role }}</p>
      <p class="family-card__desc">{{ product.description }}</p>
      <span class="family-card__more">Learn more &rarr;</span>
    </article>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import FeatureAnimation from './FeatureAnimation.vue'
import ProductTitle from './ProductTitle.vue'
import { PRODUCT_FAMILIES } from '@/content/productEcosystem.js'

const props = defineProps({
  product: { type: Object, required: true },
  compact: { type: Boolean, default: false },
})

const familyLabel = computed(() => PRODUCT_FAMILIES[props.product.family]?.label ?? '')
const familyAccent = computed(() => PRODUCT_FAMILIES[props.product.family]?.accent ?? '')
</script>

<style scoped>
.family-card-link {
  display: block;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.family-card {
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease, box-shadow 0.35s ease;
}

.family-card--compact {
  padding: 1rem;
}

.family-card--compact .family-card__desc {
  font-size: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.family-card-link:hover .family-card {
  border-color: rgba(61, 90, 254, 0.45);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
}

.family-card-link:hover .family-card__more {
  color: var(--primary-container);
  transform: translateX(4px);
}

.family-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.family-card__family {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.family-card__badge {
  font-size: 0.5625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  background: rgba(124, 77, 255, 0.15);
  color: var(--secondary);
}

.family-card__title {
  font-size: 1rem;
  font-weight: 700;
  margin: 0.5rem 0 0.25rem;
}

.family-card__role {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--primary-container);
  margin-bottom: 0.375rem;
}

.family-card__desc {
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
  line-height: 1.6;
  flex: 1;
}

.family-card__more {
  display: inline-block;
  margin-top: 0.875rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--on-surface-variant);
  transition: color 0.15s ease, transform 0.15s ease;
}
</style>
