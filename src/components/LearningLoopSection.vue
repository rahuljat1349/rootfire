<template>
  <section :id="sectionId" class="intelligence-layer section">
    <div class="container">
      <div class="intelligence-layer__header reveal">
        <p class="intelligence-layer__eyebrow">Active intelligence</p>
        <h2 class="section-title">The Intelligence layer</h2>
        <p class="section-subtitle">
          Five products turn analysis into investigation — unified subjects, correlation graphs,
          timelines, natural-language search, and a learning loop that makes every case smarter.
        </p>
      </div>

      <div class="intelligence-layer__layout reveal">
        <!-- Animated layer pipeline -->
        <div class="intelligence-layer__pipeline" aria-label="Intelligence layer products">
          <div class="intelligence-layer__track">
            <template v-for="(step, i) in INTELLIGENCE_LAYER" :key="step.id">
              <button
                type="button"
                class="intelligence-layer__node"
                :class="{
                  'intelligence-layer__node--active': activeIndex === i,
                  'intelligence-layer__node--soon': isComingSoon(step.slug),
                }"
                :aria-pressed="activeIndex === i"
                @click="goToStep(i)"
              >
                <span v-if="isComingSoon(step.slug)" class="intelligence-layer__soon">Soon</span>
                <ProductTitle :product-id="step.id" size="sm" />
                <span class="intelligence-layer__role">{{ step.shortRole }}</span>
              </button>
              <span
                v-if="i < INTELLIGENCE_LAYER.length - 1"
                class="intelligence-layer__connector"
                aria-hidden="true"
              >
                <span
                  class="intelligence-layer__connector-line"
                  :class="{ 'intelligence-layer__connector-line--active': activeIndex >= i }"
                />
                <span
                  class="intelligence-layer__connector-dot"
                  :class="{ 'intelligence-layer__connector-dot--active': activeIndex === i }"
                />
              </span>
            </template>
          </div>

          <!-- Return loop arc (INsight → future cases → Persona) -->
          <div class="intelligence-layer__return" aria-hidden="true">
            <svg class="intelligence-layer__return-svg" viewBox="0 0 320 48" fill="none">
              <path
                d="M8 8 C 8 40, 312 40, 312 8"
                class="intelligence-layer__return-path"
                :class="{ 'intelligence-layer__return-path--active': activeIndex === 4 }"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <polygon
                points="304,4 312,8 304,12"
                class="intelligence-layer__return-arrow"
                :class="{ 'intelligence-layer__return-arrow--active': activeIndex === 4 }"
              />
            </svg>
            <span class="intelligence-layer__return-label">INsight learning loop</span>
          </div>
        </div>

        <!-- Active product detail + animation -->
        <div class="intelligence-layer__detail">
          <Transition name="intel-panel" mode="out-in">
            <div :key="activeProduct.id" class="intelligence-layer__panel">
              <FeatureAnimation
                v-if="activeProduct.animation"
                :type="activeProduct.animation"
                size="medium"
              />
              <div class="intelligence-layer__panel-copy">
                <ProductTitle
                  :product-id="activeProduct.id"
                  :short-name="activeProduct.shortName"
                  :family="activeProduct.family"
                  size="lg"
                />
                <p class="intelligence-layer__panel-role">{{ activeProduct.role }}</p>
                <p class="intelligence-layer__panel-desc">{{ activeProduct.description }}</p>
                <ul class="intelligence-layer__caps">
                  <li v-for="cap in activeProduct.highlights.slice(0, 4)" :key="cap">{{ cap }}</li>
                </ul>
                <CtaButton :href="`/products/${activeProduct.slug}`" variant="secondary">
                  Explore {{ activeProduct.shortName }}
                </CtaButton>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Learning loop flywheel -->
      <div class="intelligence-layer__flywheel reveal">
        <p class="intelligence-layer__flywheel-title">How INsight closes the loop</p>
        <div class="intelligence-layer__flywheel-track">
          <template v-for="(step, i) in INSIGHT_LEARNING_LOOP" :key="step.id">
            <RouterLink
              v-if="step.productSlug"
              :to="`/products/${step.productSlug}`"
              class="intelligence-layer__flywheel-step intelligence-layer__flywheel-step--linked"
            >
              {{ step.label }}
            </RouterLink>
            <span v-else class="intelligence-layer__flywheel-step">{{ step.label }}</span>
            <span
              v-if="i < INSIGHT_LEARNING_LOOP.length - 1"
              class="intelligence-layer__flywheel-arrow"
              aria-hidden="true"
            >→</span>
          </template>
        </div>
      </div>

      <p class="intelligence-layer__footer reveal">
        <router-link to="/products" class="intelligence-layer__hub-link">
          See all {{ intelligenceCount }} Intelligence layer products →
        </router-link>
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ProductTitle from './ProductTitle.vue'
import FeatureAnimation from './FeatureAnimation.vue'
import CtaButton from './CtaButton.vue'
import {
  INTELLIGENCE_LAYER,
  INSIGHT_LEARNING_LOOP,
  getIntelligenceLayerProducts,
  getProductBySlug,
} from '@/content/productEcosystem.js'

defineProps({
  sectionId: { type: String, default: 'learning-loop' },
})

const activeIndex = ref(0)
const intelligenceProducts = getIntelligenceLayerProducts()
const intelligenceCount = intelligenceProducts.length

const activeProduct = computed(
  () => intelligenceProducts[activeIndex.value] ?? intelligenceProducts[0]
)

let interval = null

function isComingSoon(slug) {
  return getProductBySlug(slug)?.comingSoon ?? false
}

function goToStep(i) {
  activeIndex.value = i
  resetInterval()
}

function nextStep() {
  activeIndex.value = (activeIndex.value + 1) % INTELLIGENCE_LAYER.length
}

function resetInterval() {
  clearInterval(interval)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    interval = setInterval(nextStep, 4000)
  }
}

onMounted(resetInterval)
onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.intelligence-layer {
  background: var(--surface-container-low);
}

.intelligence-layer__header {
  margin-bottom: 2.5rem;
}

.intelligence-layer__eyebrow {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent-warm);
  margin-bottom: 0.75rem;
}

.intelligence-layer__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
  margin-bottom: 2.5rem;
}

/* Pipeline */
.intelligence-layer__pipeline {
  padding: 1.5rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid rgba(124, 77, 255, 0.22);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.03) inset;
}

.intelligence-layer__track {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
}

.intelligence-layer__node {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.02);
  cursor: pointer;
  text-align: left;
  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
}

.intelligence-layer__node:hover {
  background: rgba(124, 77, 255, 0.08);
  border-color: rgba(124, 77, 255, 0.25);
}

.intelligence-layer__node--active {
  background: rgba(124, 77, 255, 0.14);
  border-color: rgba(124, 77, 255, 0.45);
  box-shadow: 0 0 24px rgba(124, 77, 255, 0.15);
  transform: translateX(4px);
}

.intelligence-layer__node--soon {
  padding-top: 1.125rem;
}

.intelligence-layer__soon {
  position: absolute;
  top: 0.375rem;
  right: 0.625rem;
  font-size: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  background: rgba(124, 77, 255, 0.2);
  color: var(--secondary);
}

.intelligence-layer__role {
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--on-surface-variant);
  letter-spacing: 0.02em;
}

.intelligence-layer__connector {
  position: relative;
  display: flex;
  justify-content: center;
  height: 20px;
  margin-left: 1.5rem;
}

.intelligence-layer__connector-line {
  width: 2px;
  height: 100%;
  background: rgba(124, 77, 255, 0.2);
  border-radius: 1px;
  transition: background 0.4s ease;
}

.intelligence-layer__connector-line--active {
  background: linear-gradient(to bottom, rgba(124, 77, 255, 0.6), rgba(251, 191, 36, 0.5));
}

.intelligence-layer__connector-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -3px;
  border-radius: 50%;
  background: var(--secondary);
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.intelligence-layer__connector-dot--active {
  opacity: 1;
  transform: scale(1);
  animation: intel-dot-travel 0.6s ease forwards;
}

.intelligence-layer__return {
  margin-top: 0.75rem;
  padding-top: 0.5rem;
  text-align: center;
}

.intelligence-layer__return-svg {
  width: 100%;
  max-width: 280px;
  height: 32px;
  margin: 0 auto;
  display: block;
}

.intelligence-layer__return-path {
  stroke: rgba(124, 77, 255, 0.25);
  fill: none;
  stroke-dasharray: 4 3;
  transition: stroke 0.4s ease;
}

.intelligence-layer__return-path--active {
  stroke: rgba(251, 191, 36, 0.65);
  animation: intel-dash 1.2s linear infinite;
}

.intelligence-layer__return-arrow {
  fill: rgba(124, 77, 255, 0.35);
  transition: fill 0.4s ease;
}

.intelligence-layer__return-arrow--active {
  fill: rgba(251, 191, 36, 0.85);
}

.intelligence-layer__return-label {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--on-surface-variant);
}

/* Detail panel */
.intelligence-layer__detail {
  min-height: 320px;
}

.intelligence-layer__panel {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  height: 100%;
}

.intelligence-layer__panel-copy {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.intelligence-layer__panel-role {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--secondary);
}

.intelligence-layer__panel-desc {
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
}

.intelligence-layer__caps {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.intelligence-layer__caps li {
  font-size: 0.6875rem;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  background: rgba(124, 77, 255, 0.1);
  border: 1px solid rgba(124, 77, 255, 0.22);
  color: var(--on-surface-variant);
}

/* Flywheel */
.intelligence-layer__flywheel {
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-lg);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  margin-bottom: 1.5rem;
}

.intelligence-layer__flywheel-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--on-surface-variant);
  margin-bottom: 0.875rem;
  text-align: center;
}

.intelligence-layer__flywheel-track {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.375rem 0.25rem;
}

.intelligence-layer__flywheel-step {
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  color: var(--on-surface-variant);
  background: rgba(255, 255, 255, 0.03);
}

.intelligence-layer__flywheel-step--linked {
  color: var(--on-surface);
  border: 1px solid rgba(61, 90, 254, 0.25);
  transition: background 0.15s ease;
}

.intelligence-layer__flywheel-step--linked:hover {
  background: rgba(61, 90, 254, 0.1);
}

.intelligence-layer__flywheel-arrow {
  font-size: 0.625rem;
  color: var(--on-surface-variant);
  opacity: 0.45;
}

.intelligence-layer__footer {
  text-align: center;
}

.intelligence-layer__hub-link {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--primary-container);
}

/* Transitions */
.intel-panel-enter-active,
.intel-panel-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.intel-panel-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.intel-panel-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@keyframes intel-dot-travel {
  from { transform: scale(0.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes intel-dash {
  to { stroke-dashoffset: -14; }
}

@media (max-width: 900px) {
  .intelligence-layer__layout {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .intelligence-layer__return-path--active {
    animation: none;
  }

  .intel-panel-enter-active,
  .intel-panel-leave-active {
    transition: none;
  }
}
</style>
