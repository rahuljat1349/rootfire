<template>
  <section :id="sectionId" class="learning-loop section">
    <div class="container">
      <div class="learning-loop__header reveal">
        <p class="learning-loop__eyebrow">Active intelligence</p>
        <h2 class="section-title">The INsight learning loop</h2>
        <p class="section-subtitle">
          Investigations do not end at answers. Obsedian INsight captures human feedback, reinforces
          the graph, and feeds knowledge back into future cases.
        </p>
      </div>

      <div class="learning-loop__track reveal">
        <template v-for="(step, i) in INSIGHT_LEARNING_LOOP" :key="step.id">
          <RouterLink
            v-if="step.productSlug"
            :to="`/products/${step.productSlug}`"
            class="learning-loop__step learning-loop__step--linked"
            :class="{ 'learning-loop__step--highlight': step.id === 'insight' }"
          >
            {{ step.label }}
          </RouterLink>
          <span
            v-else
            class="learning-loop__step"
            :class="{ 'learning-loop__step--highlight': step.id === 'insight' }"
          >
            {{ step.label }}
          </span>
          <span v-if="i < INSIGHT_LEARNING_LOOP.length - 1" class="learning-loop__arrow" aria-hidden="true">↓</span>
        </template>
      </div>

      <div class="learning-loop__detail reveal">
        <div class="learning-loop__product">
          <INsightLogo size="lg" />
          <p class="learning-loop__role">Active Intelligence & Learning Loop</p>
        </div>
        <ul class="learning-loop__caps">
          <li v-for="cap in insightProduct?.highlights ?? []" :key="cap">{{ cap }}</li>
        </ul>
        <p class="learning-loop__note">
          <strong>Obsedian Persona</strong> builds the subject layer upstream — a suspect is face,
          voice, phone, email, vehicle, locations, documents, and relationships. INsight learns from
          how investigators use those profiles and graphs.
        </p>
        <div class="learning-loop__actions">
          <CtaButton href="/products/insight" variant="secondary">Explore INsight</CtaButton>
          <CtaButton href="/products/persona" variant="ghost">Obsedian Persona →</CtaButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import INsightLogo from './INsightLogo.vue'
import CtaButton from './CtaButton.vue'
import { INSIGHT_LEARNING_LOOP, getProductBySlug } from '@/content/productEcosystem.js'

defineProps({
  sectionId: { type: String, default: 'learning-loop' },
})

const insightProduct = getProductBySlug('insight')
</script>

<style scoped>
.learning-loop {
  background: var(--surface-container-low);
}

.learning-loop__header {
  margin-bottom: 2rem;
}

.learning-loop__eyebrow {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent-warm);
  margin-bottom: 0.75rem;
}

.learning-loop__track {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
}

.learning-loop__step {
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0.875rem;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--on-surface-variant);
  background: rgba(255, 255, 255, 0.02);
}

.learning-loop__step--linked {
  color: var(--on-surface);
  border: 1px solid rgba(61, 90, 254, 0.25);
  transition: background 0.15s ease, border-color 0.15s ease;
}

.learning-loop__step--linked:hover {
  background: rgba(61, 90, 254, 0.1);
  border-color: rgba(61, 90, 254, 0.45);
}

.learning-loop__step--highlight {
  background: rgba(251, 191, 36, 0.12);
  border: 1px solid rgba(251, 191, 36, 0.35);
  color: var(--on-surface);
}

.learning-loop__arrow {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  opacity: 0.5;
}

.learning-loop__detail {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.learning-loop__product {
  margin-bottom: 1.25rem;
}

.learning-loop__role {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary-container);
}

.learning-loop__caps {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.375rem;
  margin-bottom: 1.25rem;
}

.learning-loop__caps li {
  font-size: 0.75rem;
  padding: 0.3rem 0.625rem;
  border-radius: 999px;
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  color: var(--on-surface-variant);
}

.learning-loop__note {
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

.learning-loop__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}
</style>
