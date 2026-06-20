<template>
  <section id="demo" class="demo section">
    <div class="container">
      <div class="demo__header reveal">
        <h2 class="section-title">See it live — pick your tour</h2>
        <p class="section-subtitle">
          We built three guided walkthroughs for different audiences. Each one ends with a moment
          that makes people sit forward in their chair.
        </p>
      </div>

      <div class="demo__scripts">
        <article
          v-for="(tour, i) in DEMO_TOURS"
          :key="tour.id"
          class="tour-card reveal hover-lift"
          :class="{ 'tour-card--featured': i === 1 }"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <div class="tour-card__header">
            <span class="tour-card__tagline">{{ tour.tagline }}</span>
            <span class="tour-card__duration">{{ tour.duration }}</span>
          </div>
          <h3 class="tour-card__title">{{ tour.title }}</h3>
          <p class="tour-card__desc">{{ tour.description }}</p>
          <ul class="tour-card__highlights">
            <li v-for="h in tour.highlights" :key="h">{{ h }}</li>
          </ul>
          <p class="tour-card__outcome">{{ tour.outcome }}</p>
        </article>
      </div>

      <div class="demo__cta reveal reveal-scale">
        <CtaButton href="/demo?intent=demo" variant="primary">Request demo</CtaButton>
        <p class="demo__note">
          Live environment available on request. We'll tailor the tour to your agency's priorities.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import CtaButton from './CtaButton.vue'
import { DEMO_TOURS } from '@/content/demoScripts.js'
import { DEMO_URL } from '@/config.js'
</script>

<style scoped>
.demo {
  background: var(--surface-container-low);
}

.demo__scripts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.tour-card {
  padding: 1.75rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  display: flex;
  flex-direction: column;
}

.tour-card--featured {
  border-color: rgba(61, 90, 254, 0.4);
  box-shadow: 0 16px 48px rgba(61, 90, 254, 0.12);
  position: relative;
}

.tour-card--featured::before {
  content: 'Most popular';
  position: absolute;
  top: -10px;
  left: 1.5rem;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.25rem 0.625rem;
  border-radius: 4px;
  background: var(--primary-container);
  color: white;
}

.tour-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.tour-card__tagline {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-warm);
}

.tour-card__duration {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--on-surface-variant);
}

.tour-card__title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.625rem;
  letter-spacing: -0.02em;
}

.tour-card__desc {
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

.tour-card__highlights {
  list-style: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.tour-card__highlights li {
  position: relative;
  padding-left: 1.25rem;
  font-size: 0.8125rem;
  color: var(--on-surface);
}

.tour-card__highlights li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-container);
  font-weight: 700;
}

.tour-card__outcome {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--primary-container);
  padding-top: 1rem;
  border-top: 1px solid var(--outline-variant);
  font-style: italic;
}

.demo__cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.875rem;
  padding: 2.5rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
}

.demo__note {
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  max-width: 420px;
}
</style>
