<template>
  <router-link :to="`/features/${product.id}`" class="flagship-card-link">
    <article class="flagship-card hover-lift">
      <FeatureAnimation v-if="product.animation" :type="product.animation" />

      <div class="flagship-card__header">
        <div class="flagship-card__icon" aria-hidden="true">
          <ScanTypeIcon :name="product.icon" />
        </div>
        <span class="flagship-card__layer">Layer {{ product.layers.join(' · ') }}</span>
      </div>

      <p class="flagship-card__role">{{ product.role }}</p>
      <h3 class="flagship-card__title">
        <VolumeLogo v-if="product.id === 'volume'" size="md" />
        <LensLogo v-else-if="product.id === 'lens'" size="md" />
        <MoleculesLogo v-else-if="product.id === 'molecules'" size="md" />
        <PrismLogo v-else-if="product.id === 'prism'" size="md" />
        <IrisLogo v-else-if="product.id === 'iris'" size="md" />
        <SpectraLogo v-else-if="product.id === 'spectra'" size="md" />
        <template v-else>{{ product.label }}</template>
      </h3>
      <p class="flagship-card__desc">{{ product.description }}</p>
      <span class="flagship-card__more">Explore capabilities &rarr;</span>
    </article>
  </router-link>
</template>

<script setup>
import FeatureAnimation from './FeatureAnimation.vue'
import ScanTypeIcon from './ScanTypeIcon.vue'
import LensLogo from './LensLogo.vue'
import MoleculesLogo from './MoleculesLogo.vue'
import PrismLogo from './PrismLogo.vue'
import IrisLogo from './IrisLogo.vue'
import SpectraLogo from './SpectraLogo.vue'
import VolumeLogo from './VolumeLogo.vue'

defineProps({
  product: { type: Object, required: true },
})
</script>

<style scoped>
.flagship-card-link {
  display: block;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.flagship-card {
  padding: 1.5rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition:
    border-color 0.3s ease,
    transform 0.35s cubic-bezier(0.34, 1.2, 0.64, 1),
    box-shadow 0.35s ease;
}

.flagship-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-container), var(--secondary));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}

.flagship-card-link:hover .flagship-card {
  border-color: rgba(61, 90, 254, 0.45);
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.35);
}

.flagship-card-link:hover .flagship-card::after {
  transform: scaleX(1);
}

.flagship-card-link:hover .flagship-card__more {
  color: var(--primary-container);
  transform: translateX(4px);
}

.flagship-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.flagship-card__icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--primary-container-dim);
  color: var(--primary-container);
}

.flagship-card__layer {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent-warm);
}

.flagship-card__role {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary-container);
  margin-bottom: 0.375rem;
}

.flagship-card__title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.flagship-card__desc {
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
  flex: 1;
}

.flagship-card__more {
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--on-surface-variant);
  transition: color 0.15s ease, transform 0.15s ease;
}
</style>
