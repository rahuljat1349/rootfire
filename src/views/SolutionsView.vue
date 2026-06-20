<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <header class="page-header reveal">
          <h1 class="page-header__title">Solutions</h1>
          <p class="page-header__subtitle">
            How Obsedian supports law enforcement, government, DFIR teams, and intelligence
            organizations — mapped to the products that matter for your workflow.
          </p>
        </header>
        <div class="solutions-grid reveal reveal-stagger">
          <SolutionPersonaCard
            v-for="solution in SOLUTIONS"
            :key="solution.id"
            :solution="solution"
          />
        </div>
      </div>
    </section>
    <FinalCtaSection />
  </div>
</template>

<script setup>
import SolutionPersonaCard from '@/components/SolutionPersonaCard.vue'
import FinalCtaSection from '@/components/FinalCtaSection.vue'
import { SOLUTIONS } from '@/content/solutions.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

useScrollReveal()
</script>

<style scoped>
.page-header {
  margin-bottom: 2.5rem;
}

.page-header__title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
}

.page-header__subtitle {
  font-size: 1.0625rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
  max-width: 640px;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
}
</style>
