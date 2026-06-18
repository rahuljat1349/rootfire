<template>
  <section :id="sectionId" class="how-it-works section">
    <div class="container">
      <div class="how__header reveal">
        <h2 class="section-title">{{ title }}</h2>
        <p class="section-subtitle">{{ subtitle }}</p>
      </div>

      <div class="how__steps">
        <article
          v-for="(step, i) in HOW_IT_WORKS"
          :key="step.step"
          class="how-step reveal hover-lift"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <div class="how-step__number">{{ step.step }}</div>
          <div class="how-step__content">
            <h3 class="how-step__title">{{ step.title }}</h3>
            <p class="how-step__desc">{{ step.description }}</p>
          </div>
          <div class="how-step__visual" aria-hidden="true">
            <StepVisual :type="step.visual" />
          </div>
        </article>
      </div>

      <p class="how__footnote reveal">{{ HOW_IT_WORKS_FOOTNOTE }}</p>
    </div>
  </section>
</template>

<script setup>
import { HOW_IT_WORKS, HOW_IT_WORKS_FOOTNOTE } from '@/content/howItWorks.js'
import StepVisual from './StepVisual.vue'

defineProps({
  sectionId: { type: String, default: 'architecture' },
  title: { type: String, default: 'How it works' },
  subtitle: {
    type: String,
    default: 'Three steps. No computer science degree required. Your IT team handles setup once — your investigators use it every day.',
  },
})
</script>

<style scoped>
.how-it-works {
  background: var(--surface-container-low);
}

.how__steps {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.how-step {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.5rem;
  align-items: center;
  padding: 1.75rem 2rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  transition: border-color 0.2s ease;
}

.how-step:hover {
  border-color: rgba(61, 90, 254, 0.35);
}

.how-step__number {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--primary-container);
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  flex-shrink: 0;
}

.how-step__title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.375rem;
  letter-spacing: -0.02em;
}

.how-step__desc {
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
}

.how-step__visual {
  width: 72px;
  height: 72px;
  color: var(--primary-container);
  opacity: 0.85;
}

.how__footnote {
  text-align: center;
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
  max-width: 560px;
  margin: 0 auto;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-lg);
  background: var(--primary-container-dim);
  border: 1px solid rgba(61, 90, 254, 0.2);
}

@media (max-width: 640px) {
  .how-step {
    grid-template-columns: auto 1fr;
  }

  .how-step__visual {
    display: none;
  }
}
</style>
