<template>
  <section id="security" class="security section">
    <div class="container">
      <div class="security__header reveal">
        <h2 class="section-title">Built for teams who can't afford a leak</h2>
        <p class="section-subtitle">
          Procurement asks hard questions. Legal asks harder ones. Here's why both say yes.
        </p>
      </div>

      <div class="security__grid">
        <article
          v-for="(point, i) in SECURITY_POINTS"
          :key="point.title"
          class="security-card reveal hover-lift"
          :style="{ transitionDelay: `${i * 60}ms` }"
        >
          <div class="security-card__icon" aria-hidden="true">
            <SecurityIcon :name="point.icon" />
          </div>
          <h3 class="security-card__title">{{ point.title }}</h3>
          <p class="security-card__desc">{{ point.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { SECURITY_POINTS } from '@/content/securityPoints.js'
import SecurityIcon from './SecurityIcon.vue'
</script>

<style scoped>
.security__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.security-card {
  padding: 1.75rem;
  border-radius: var(--radius-lg);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  transition: border-color 0.2s ease;
}

.security-card:hover {
  border-color: rgba(61, 90, 254, 0.3);
}

.security-card__icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--primary-container-dim);
  color: var(--primary-container);
  margin-bottom: 1rem;
}

.security-card__title {
  font-size: 1.0625rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.security-card__desc {
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
}
</style>
