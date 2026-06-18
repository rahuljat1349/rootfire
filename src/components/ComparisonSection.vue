<template>
  <section id="comparison" class="comparison section">
    <div class="container">
      <div class="comparison__header reveal reveal-blur">
        <h2 class="section-title">The difference is immediate</h2>
        <p class="section-subtitle">
          Most agencies don't need more software. They need fewer handoffs.
        </p>
      </div>

      <div class="comparison__grid">
        <div class="comparison-col comparison-col--before reveal reveal-left hover-lift">
          <h3 class="comparison-col__title">{{ COMPARISON.before.title }}</h3>
          <ul>
            <li v-for="item in COMPARISON.before.items" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="comparison-col comparison-col--after reveal reveal-right hover-lift">
          <h3 class="comparison-col__title">{{ COMPARISON.after.title }}</h3>
          <ul>
            <li v-for="item in COMPARISON.after.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { COMPARISON } from '@/content/comparison.js'
</script>

<style scoped>
.comparison__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.comparison-col {
  padding: 2rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--outline-variant);
}

.comparison-col--before {
  background: rgba(239, 68, 68, 0.04);
  border-color: rgba(239, 68, 68, 0.2);
}

.comparison-col--after {
  background: rgba(52, 211, 153, 0.06);
  border-color: rgba(52, 211, 153, 0.25);
  box-shadow: 0 16px 48px rgba(52, 211, 153, 0.08);
}

.comparison-col__title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
}

.comparison-col--before .comparison-col__title {
  color: #f87171;
}

.comparison-col--after .comparison-col__title {
  color: #34d399;
}

.comparison-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.comparison-col li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
  line-height: 1.55;
}

.comparison-col--before li::before {
  content: '✕';
  position: absolute;
  left: 0;
  color: #f87171;
  font-weight: 700;
  font-size: 0.75rem;
}

.comparison-col--after li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #34d399;
  font-weight: 700;
}

@media (max-width: 640px) {
  .comparison__grid {
    grid-template-columns: 1fr;
  }
}
</style>
