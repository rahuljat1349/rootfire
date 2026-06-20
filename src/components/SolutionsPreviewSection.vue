<template>
  <section id="solutions-preview" class="solutions-preview section">
    <div class="container">
      <div class="solutions-preview__header reveal">
        <h2 class="section-title">Built for your mission</h2>
        <p class="section-subtitle">
          Whether you run a forensic lab, SOC, or intelligence unit — Obsedian maps to your workflow.
        </p>
      </div>
      <div class="solutions-preview__grid reveal reveal-stagger">
        <SolutionPersonaCard
          v-for="id in previewIds"
          :key="id"
          :solution="getSolutionBySlug(id)"
        />
      </div>
      <p class="solutions-preview__link reveal">
        <router-link to="/solutions">View all solutions →</router-link>
      </p>
    </div>
  </section>
</template>

<script setup>
import SolutionPersonaCard from './SolutionPersonaCard.vue'
import { SOLUTIONS_PREVIEW_IDS, getSolutionBySlug } from '@/content/solutions.js'

const previewIds = SOLUTIONS_PREVIEW_IDS
</script>

<style scoped>
.solutions-preview__header {
  margin-bottom: 2rem;
}

.solutions-preview__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.solutions-preview__link {
  margin-top: 1.5rem;
  font-size: 0.9375rem;
  font-weight: 600;
}

.solutions-preview__link a {
  color: var(--primary-container);
}
</style>
