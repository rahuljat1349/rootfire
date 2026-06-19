<template>
  <div class="coverage-page">
    <div class="container">
      <header class="coverage-page__header reveal">
        <h1 class="coverage-page__title">{{ COVERAGE_INTRO.title }}</h1>
        <p class="coverage-page__subtitle">{{ COVERAGE_INTRO.subtitle }}</p>
      </header>

      <div class="coverage-page__grid">
        <article
          v-for="(cat, i) in EVIDENCE_COVERAGE"
          :key="cat.id"
          class="coverage-card reveal"
          :style="{ transitionDelay: `${i * 40}ms` }"
        >
          <h2 class="coverage-card__title">{{ cat.title }}</h2>
          <p class="coverage-card__examples">{{ cat.examples }}</p>
          <div class="coverage-card__tools">
            <router-link
              v-for="toolId in cat.toolIds"
              :key="toolId"
              :to="`/features/${toolId}`"
              class="coverage-card__tool"
            >
              {{ getFeatureById(toolId)?.label ?? toolId }}
            </router-link>
          </div>
        </article>
      </div>

      <div class="coverage-page__cta reveal">
        <h2>See the full platform</h2>
        <p>Browse every module with step-by-step guides, or book a live demo.</p>
        <div class="coverage-page__cta-actions">
          <router-link to="/features" class="coverage-page__link">All features &rarr;</router-link>
          <CtaButton :href="DEMO_URL" variant="primary">Book a live demo</CtaButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CtaButton from '@/components/CtaButton.vue'
import { EVIDENCE_COVERAGE, COVERAGE_INTRO } from '@/content/evidenceCoverage.js'
import { getFeatureById } from '@/content/scanTypes.js'
import { DEMO_URL } from '@/config.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

useScrollReveal()
</script>

<style scoped>
.coverage-page {
  padding: 2rem 0 var(--section-padding);
}

.coverage-page__header {
  margin-bottom: 3rem;
  max-width: 640px;
}

.coverage-page__title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
}

.coverage-page__subtitle {
  font-size: 1.0625rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
}

.coverage-page__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 3rem;
}

.coverage-card {
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
}

.coverage-card__title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.coverage-card__examples {
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
  line-height: 1.55;
  margin-bottom: 0.875rem;
}

.coverage-card__tools {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.coverage-card__tool {
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: rgba(61, 90, 254, 0.1);
  border: 1px solid rgba(61, 90, 254, 0.2);
  color: var(--primary-container);
  transition: background 0.15s ease;
}

.coverage-card__tool:hover {
  background: rgba(61, 90, 254, 0.18);
}

.coverage-page__cta {
  text-align: center;
  padding: 2.5rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid rgba(61, 90, 254, 0.25);
}

.coverage-page__cta h2 {
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.coverage-page__cta p {
  color: var(--on-surface-variant);
  margin-bottom: 1.25rem;
}

.coverage-page__cta-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.coverage-page__link {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--primary-container);
}
</style>
