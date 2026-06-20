<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <header class="page-header reveal">
          <h1 class="page-header__title">Industries</h1>
          <p class="page-header__subtitle">
            Obsedian serves public safety, defense, cybersecurity, financial services, and critical
            infrastructure — with deployment models built for regulatory and sovereignty requirements.
          </p>
        </header>
        <div class="industries-grid reveal reveal-stagger">
          <IndustryTrustCard
            v-for="industry in INDUSTRIES"
            :key="industry.id"
            :industry="industry"
          />
        </div>
      </div>
    </section>
    <FinalCtaSection />
  </div>
</template>

<script setup>
import IndustryTrustCard from '@/components/IndustryTrustCard.vue'
import FinalCtaSection from '@/components/FinalCtaSection.vue'
import { INDUSTRIES } from '@/content/industries.js'
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
  margin-bottom: 0.75rem;
}

.page-header__subtitle {
  font-size: 1.0625rem;
  color: var(--on-surface-variant);
  line-height: 1.65;
  max-width: 640px;
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
}
</style>
