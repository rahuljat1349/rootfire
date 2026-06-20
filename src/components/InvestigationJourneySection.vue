<template>
  <section :id="sectionId" class="journey section">
    <div class="container">
      <div class="journey__header reveal">
        <h2 class="section-title">The investigation journey</h2>
        <p class="section-subtitle">
          Obsedian unifies every stage — from evidence acquisition through court-ready reporting.
        </p>
      </div>

      <div class="journey__steps reveal reveal-stagger">
        <article
          v-for="step in steps"
          :key="step.id"
          class="journey-step"
        >
          <span class="journey-step__num">{{ step.order }}</span>
          <h3 class="journey-step__title">{{ step.label }}</h3>
          <p class="journey-step__desc">{{ stepDescriptions[step.id] }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { JOURNEY_STEPS } from '@/content/productEcosystem.js'

defineProps({
  sectionId: { type: String, default: 'journey' },
})

const steps = Object.values(JOURNEY_STEPS).sort((a, b) => a.order - b.order)

const stepDescriptions = {
  acquire: 'Collect evidence from disk, mobile, cloud, memory, and live systems.',
  preserve: 'Hash, verify, and store with chain of custody and legal hold.',
  analyze: 'Run biometric, media, document, and DFIR engines on your infrastructure.',
  correlate: 'Build entity graphs and unified timelines across every source.',
  investigate: 'Query across evidence with Lens and collaborative review workflows.',
  report: 'Generate court-ready reports and executive briefings with cited evidence.',
}
</script>

<style scoped>
.journey__header {
  margin-bottom: 2.5rem;
}

.journey__steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
}

.journey-step {
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  position: relative;
}

.journey-step__num {
  display: inline-flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--primary-container);
  color: white;
  font-size: 0.8125rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.journey-step__title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.375rem;
}

.journey-step__desc {
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
  line-height: 1.55;
}
</style>
