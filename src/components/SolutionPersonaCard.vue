<template>
  <router-link :to="`/solutions/${solution.slug}`" class="persona-card-link">
    <article class="persona-card hover-lift">
      <h3 class="persona-card__title">{{ solution.label }}</h3>
      <p class="persona-card__headline">{{ solution.headline }}</p>
      <p class="persona-card__outcome">{{ solution.outcomes[0]?.label }}</p>
      <span class="persona-card__more">Explore solution &rarr;</span>
    </article>
  </router-link>
</template>

<script setup>
defineProps({
  solution: { type: Object, required: true },
})
</script>

<style scoped>
.persona-card-link {
  display: block;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.persona-card {
  padding: 1.5rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease, box-shadow 0.35s ease;
}

.persona-card-link:hover .persona-card {
  border-color: rgba(61, 90, 254, 0.45);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
}

.persona-card-link:hover .persona-card__more {
  color: var(--primary-container);
}

.persona-card__title {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-warm);
  margin-bottom: 0.5rem;
}

.persona-card__headline {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 0.75rem;
  flex: 1;
}

.persona-card__outcome {
  font-size: 0.8125rem;
  color: var(--primary-container);
  font-weight: 600;
  margin-bottom: 1rem;
}

.persona-card__more {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--on-surface-variant);
}
</style>
