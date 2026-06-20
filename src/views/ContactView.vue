<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <header class="page-header reveal">
          <h1>Contact Obsedian</h1>
          <p class="page-header__subtitle">
            Demo requests, sales inquiries, partnership opportunities, and support — we respond
            within one business day.
          </p>
        </header>

        <div class="contact-grid reveal">
          <div class="contact-info">
            <article class="contact-card">
              <h2>Sales</h2>
              <p>Enterprise and government procurement, licensing, and deployment planning.</p>
              <router-link to="/contact?intent=sales" class="contact-link">Contact sales →</router-link>
            </article>
            <article class="contact-card">
              <h2>Partnerships</h2>
              <p>Technology integrations, AFIS, SIEM, and channel partner programs.</p>
              <a href="mailto:partners@obsedian.io" class="contact-link">partners@obsedian.io</a>
            </article>
            <article class="contact-card">
              <h2>Support</h2>
              <p>Existing customers — technical support and account management.</p>
              <a href="mailto:support@obsedian.io" class="contact-link">support@obsedian.io</a>
            </article>
          </div>
          <InquiryForm :default-intent="defaultIntent" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import InquiryForm from '@/components/InquiryForm.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

const route = useRoute()
useScrollReveal()

const defaultIntent = computed(() => route.query.intent ?? 'sales')
</script>

<style scoped>
.page {
  padding: 1.5rem 0 var(--section-padding);
}

.page-header {
  margin-bottom: 2.5rem;
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-card {
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
}

.contact-card h2 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.375rem;
}

.contact-card p {
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  margin-bottom: 0.75rem;
}

.contact-link {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--primary-container);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
