<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <SiteLogo size="sm" />
        <p class="footer__tagline">
          The investigation platform that never lets your data leave the building.
        </p>
      </div>

      <nav class="footer__nav" aria-label="Footer">
        <router-link to="/capabilities">What it does</router-link>
        <router-link to="/architecture">How it works</router-link>
        <router-link to="/security">Trust</router-link>
        <router-link to="/demo">Live demo</router-link>
      </nav>

      <div class="footer__actions">
        <CtaButton :href="DEMO_URL" variant="primary">Book a demo</CtaButton>
      </div>
    </div>

    <div class="container footer__bottom">
      <p class="footer__copy">
        &copy; {{ year }} {{ PRODUCT_NAME }} &middot; Built for agencies who need speed and control
      </p>
    </div>
  </footer>
</template>

<script setup>
import CtaButton from './CtaButton.vue'
import SiteLogo from './SiteLogo.vue'
import { DEMO_URL, PRODUCT_NAME } from '@/config.js'

const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--outline-variant);
  background: var(--surface-container-low);
  padding: 3rem 0 1.5rem;
  margin-top: 0;
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 2rem;
  align-items: start;
  margin-bottom: 2rem;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer__tagline {
  color: var(--on-surface-variant);
  font-size: 0.875rem;
  max-width: 280px;
  line-height: 1.55;
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.footer__nav a {
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  transition: color 0.15s ease;
}

.footer__nav a:hover {
  color: var(--on-surface);
}

.footer__bottom {
  padding-top: 1.5rem;
  border-top: 1px solid var(--outline-variant);
}

.footer__copy {
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
}

@media (max-width: 640px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
