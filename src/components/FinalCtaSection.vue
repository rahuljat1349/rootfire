<template>
  <section class="final-cta section">
    <div class="container final-cta__inner reveal reveal-scale">
      <div class="final-cta__glow" aria-hidden="true" />
      <h2 class="final-cta__title">
        Ready to show your leadership<br />what modern investigation looks like?
      </h2>
      <p class="final-cta__subtitle">
        Book a 20-minute live demo. We'll use scenarios relevant to your agency —
        and you'll leave knowing exactly what {{ PRODUCT_NAME }} can do for your team.
      </p>
      <div class="final-cta__actions">
        <CtaButton :href="DEMO_URL" variant="primary">Book a live demo</CtaButton>
        <CtaButton :href="REQUEST_ACCESS_URL" variant="secondary">Request access</CtaButton>
      </div>
      <div class="final-cta__stats">
        <div v-for="stat in OUTCOME_STATS" :key="stat.label" class="final-cta__stat">
          <span class="final-cta__stat-value">
            <AnimatedStat :value="stat.value" :suffix="stat.suffix" />
          </span>
          <span class="final-cta__stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CtaButton from './CtaButton.vue'
import AnimatedStat from './AnimatedStat.vue'
import { DEMO_URL, REQUEST_ACCESS_URL, PRODUCT_NAME } from '@/config.js'
import { OUTCOME_STATS } from '@/content/comparison.js'
</script>

<style scoped>
.final-cta {
  padding: var(--section-padding) 0;
}

.final-cta__inner {
  position: relative;
  text-align: center;
  padding: clamp(2.5rem, 5vw, 4rem);
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid rgba(61, 90, 254, 0.25);
  overflow: hidden;
}

.final-cta__glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(61, 90, 254, 0.18), transparent);
  pointer-events: none;
  animation: glow-pulse 4s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

.final-cta__title {
  position: relative;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin-bottom: 1rem;
}

.final-cta__subtitle {
  position: relative;
  font-size: 1.0625rem;
  color: var(--on-surface-variant);
  max-width: 520px;
  margin: 0 auto 2rem;
  line-height: 1.7;
}

.final-cta__actions {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.875rem;
  margin-bottom: 2.5rem;
}

.final-cta__stats {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--outline-variant);
}

.final-cta__stat-value {
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-container);
  letter-spacing: -0.02em;
}

.final-cta__stat-label {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
}
</style>
