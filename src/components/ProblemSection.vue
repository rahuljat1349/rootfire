<template>
  <section id="problem" class="problem section">
    <div class="container">
      <div class="problem__header reveal">
        <h2 class="section-title">Sound familiar?</h2>
        <p class="section-subtitle">
          If your team juggles too many tools, too much manual reading, and too many cloud-risk conversations —
          you're not alone.
        </p>
      </div>

      <div class="problem__cards reveal reveal-stagger">
        <blockquote
          v-for="(item, i) in PROBLEM_STATEMENTS"
          :key="i"
          class="problem-card hover-lift"
        >
          <p class="problem-card__quote">&ldquo;{{ item.quote }}&rdquo;</p>
          <footer class="problem-card__role">{{ item.role }}</footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PROBLEM_STATEMENTS } from '@/content/problemStatements.js'
</script>

<style scoped>
.problem__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.problem-card {
  padding: 1.75rem;
  border-radius: var(--radius-lg);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  border-left: 3px solid var(--accent-warm);
}

.problem-card__quote {
  font-size: 1.0625rem;
  line-height: 1.65;
  font-style: italic;
  color: var(--on-surface);
  margin-bottom: 1rem;
}

.problem-card__role {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--on-surface-variant);
}
</style>
