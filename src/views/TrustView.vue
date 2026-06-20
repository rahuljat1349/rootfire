<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <header class="page-header reveal">
          <h1>Trust & security</h1>
          <p class="page-header__subtitle">
            Court-ready integrity, full auditability, and deployment on infrastructure you control —
            built for law enforcement, government, and enterprise investigators.
          </p>
        </header>
      </div>
    </section>
    <SecuritySection />
    <section class="section">
      <div class="container">
        <div class="trust-extra reveal">
          <h2>Compliance-ready by design</h2>
          <ul>
            <li>Hash-first chain of custody with Obsedian Chain on every acquisition</li>
            <li>Role-based access control and full audit logging across the ecosystem</li>
            <li>On-premise, private cloud, and air-gap deployment options</li>
            <li>Legal hold and evidence lifecycle management via Obsedian Vault</li>
            <li>Read-only AI queries — Lens investigates without altering records</li>
          </ul>
          <router-link to="/coverage" class="trust-link">View evidence coverage →</router-link>
        </div>
      </div>
    </section>
    <FinalCtaSection />
  </div>
</template>

<script setup>
import SecuritySection from '@/components/SecuritySection.vue'
import FinalCtaSection from '@/components/FinalCtaSection.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

useScrollReveal()
</script>

<style scoped>
.page {
  padding-top: 1rem;
}

.page-header {
  margin-bottom: 1rem;
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

.trust-extra {
  padding: 2rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
}

.trust-extra h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.trust-extra ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-bottom: 1.25rem;
}

.trust-extra li {
  padding-left: 1.25rem;
  position: relative;
  color: var(--on-surface-variant);
  line-height: 1.55;
}

.trust-extra li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #34d399;
  font-weight: 700;
}

.trust-link {
  font-weight: 600;
  color: var(--primary-container);
}
</style>
