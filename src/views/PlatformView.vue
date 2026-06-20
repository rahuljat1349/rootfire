<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <header class="page-header reveal">
          <h1>The Obsedian platform</h1>
          <p class="page-header__subtitle">
            Five layers, one investigation journey — from acquisition through court-ready
            report and the INsight learning loop.
          </p>
        </header>
        <InvestigationJourneySection section-id="platform-journey" />
      </div>
    </section>
    <PlatformOverviewSection />
    <section class="section">
      <div class="container reveal">
        <EcosystemDiagram />
      </div>
    </section>
    <PlatformLayersGrid />
    <LearningLoopSection section-id="platform-learning-loop" />
    <FinalCtaSection />
  </div>
</template>

<script setup>
import InvestigationJourneySection from '@/components/InvestigationJourneySection.vue'
import PlatformOverviewSection from '@/components/PlatformOverviewSection.vue'
import EcosystemDiagram from '@/components/EcosystemDiagram.vue'
import PlatformLayersGrid from '@/components/PlatformLayersGrid.vue'
import LearningLoopSection from '@/components/LearningLoopSection.vue'
import FinalCtaSection from '@/components/FinalCtaSection.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

useScrollReveal()
</script>

<style scoped>
.page {
  padding-top: 1rem;
}

.page-header {
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.page-header__subtitle {
  font-size: 1.0625rem;
  color: var(--on-surface-variant);
  max-width: 640px;
}
</style>
