<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <header class="page-header reveal">
          <h1>Request a demo</h1>
          <p class="page-header__subtitle">
            See the Obsedian ecosystem in action — tailored to your agency, lab, or security team.
          </p>
        </header>
        <InquiryForm default-intent="demo" class="reveal" />
      </div>
    </section>
    <DemoSection />
  </div>
</template>

<script setup>
import InquiryForm from '@/components/InquiryForm.vue'
import DemoSection from '@/components/DemoSection.vue'
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
  max-width: 560px;
}
</style>
