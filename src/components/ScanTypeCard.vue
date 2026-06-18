<template>
  <router-link :to="`/features/${scan.id}`" class="scan-card-link">
    <article class="scan-card hover-lift" :class="{ 'scan-card--compact': compact }">
      <FeatureAnimation v-if="scan.animation && !compact" :type="scan.animation" />

      <ol v-if="steps.length && !compact" class="scan-card__steps" aria-label="How it works">
        <li v-for="(step, i) in steps" :key="i">
          <span class="scan-card__step-num">{{ i + 1 }}</span>
          {{ step }}
        </li>
      </ol>

      <div class="scan-card__header">
        <div class="scan-card__icon" aria-hidden="true">
          <ScanTypeIcon :name="scan.icon" />
        </div>
        <span v-if="scan.beta" class="scan-card__beta">New</span>
      </div>
      <p v-if="scan.outcome" class="scan-card__outcome">{{ scan.outcome }}</p>
      <h3 class="scan-card__title">
        <LensLogo v-if="scan.id === 'lens'" size="md" />
        <MoleculesLogo v-else-if="scan.id === 'molecules'" size="md" />
        <PrismLogo v-else-if="scan.id === 'prism'" size="md" />
        <IrisLogo v-else-if="scan.id === 'iris'" size="md" />
        <template v-else>{{ scan.label }}</template>
      </h3>
      <p class="scan-card__desc">{{ scan.description }}</p>
      <span class="scan-card__more">Learn more &rarr;</span>
    </article>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import ScanTypeIcon from './ScanTypeIcon.vue'
import LensLogo from './LensLogo.vue'
import MoleculesLogo from './MoleculesLogo.vue'
import PrismLogo from './PrismLogo.vue'
import IrisLogo from './IrisLogo.vue'
import FeatureAnimation from './FeatureAnimation.vue'
import { FEATURE_EXPLAINERS } from '@/content/featureExplainers.js'

const props = defineProps({
  scan: { type: Object, required: true },
  compact: { type: Boolean, default: false },
})

const steps = computed(() => {
  const key = props.scan.animation
  return FEATURE_EXPLAINERS[key]?.steps ?? []
})
</script>

<style scoped>
.scan-card-link {
  display: block;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.scan-card {
  padding: 1.25rem;
  border-radius: var(--radius-lg);
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

.scan-card--compact {
  padding: 1rem;
}

.scan-card--compact .scan-card__desc {
  font-size: 0.75rem;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.scan-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-container), var(--secondary));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}

.scan-card-link:hover .scan-card {
  border-color: rgba(61, 90, 254, 0.45);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
}

.scan-card-link:hover .scan-card::after {
  transform: scaleX(1);
}

.scan-card-link:hover .scan-card__more {
  color: var(--primary-container);
  transform: translateX(4px);
}

.scan-card__steps {
  list-style: none;
  margin-bottom: 1rem;
  padding: 0.625rem 0.75rem;
  border-radius: 8px;
  background: rgba(61, 90, 254, 0.06);
  border: 1px solid rgba(61, 90, 254, 0.12);
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.scan-card__steps li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  line-height: 1.45;
}

.scan-card__step-num {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary-container);
  color: white;
  font-size: 0.5625rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}

.scan-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.scan-card__icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: var(--primary-container-dim);
  color: var(--primary-container);
}

.scan-card__beta {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: rgba(124, 77, 255, 0.15);
  color: var(--secondary);
}

.scan-card__outcome {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent-warm);
  margin-bottom: 0.25rem;
}

.scan-card__title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.375rem;
  letter-spacing: -0.01em;
}

.scan-card__desc {
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
  line-height: 1.6;
  flex: 1;
}

.scan-card__more {
  display: inline-block;
  margin-top: 0.875rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--on-surface-variant);
  transition: color 0.15s ease, transform 0.15s ease;
}
</style>
