<template>
  <section id="platform-overview" class="platform-overview section">
    <div class="container">
      <div class="platform-overview__header reveal">
        <h2 class="section-title">A complete forensic intelligence ecosystem</h2>
        <p class="section-subtitle">
          {{ PRODUCT_NAME }} brings together acquisition, analysis, correlation, and reporting —
          on infrastructure you control.
        </p>
      </div>
      <div class="platform-overview__grid reveal reveal-stagger">
        <article v-for="pillar in PLATFORM_PILLARS" :key="pillar.id" class="pillar-card">
          <h3 class="pillar-card__title">{{ pillar.title }}</h3>
          <p class="pillar-card__desc">{{ pillar.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PLATFORM_PILLARS } from '@/content/productEcosystem.js'
import { PRODUCT_NAME } from '@/config.js'
</script>

<style scoped>
.platform-overview__header {
  margin-bottom: 2rem;
}

.platform-overview__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.pillar-card {
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
}

.pillar-card__title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.pillar-card__desc {
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  line-height: 1.6;
}
</style>
