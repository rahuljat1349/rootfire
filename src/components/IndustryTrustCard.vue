<template>
  <router-link :to="`/industries/${industry.slug}`" class="industry-card-link">
    <article class="industry-card hover-lift">
      <h3 class="industry-card__title">{{ industry.label }}</h3>
      <p class="industry-card__headline">{{ industry.headline }}</p>
      <p class="industry-card__reg">{{ industry.regulatory.slice(0, 80) }}…</p>
      <span class="industry-card__more">Learn more &rarr;</span>
    </article>
  </router-link>
</template>

<script setup>
defineProps({
  industry: { type: Object, required: true },
})
</script>

<style scoped>
.industry-card-link {
  display: block;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.industry-card {
  padding: 1.5rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.industry-card-link:hover .industry-card {
  border-color: rgba(61, 90, 254, 0.45);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
}

.industry-card__title {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-warm);
  margin-bottom: 0.5rem;
}

.industry-card__headline {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  flex: 1;
}

.industry-card__reg {
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
  margin-bottom: 1rem;
}

.industry-card__more {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--on-surface-variant);
}
</style>
