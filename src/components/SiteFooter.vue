<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <SiteLogo size="sm" />
          <p class="footer__tagline">
            Unified forensic intelligence — acquire, preserve, analyze, correlate, investigate, and report.
          </p>
        </div>

        <div class="footer__columns">
          <nav v-for="col in FOOTER_COLUMNS" :key="col.title" class="footer__col" :aria-label="col.title">
            <p class="footer__col-title">{{ col.title }}</p>
            <router-link v-for="link in col.links" :key="link.to" :to="link.to" class="footer__link">
              {{ link.label }}
            </router-link>
          </nav>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copy">
          &copy; {{ year }} {{ PRODUCT_NAME }} &middot; Built for agencies who need speed and control
        </p>
        <div class="footer__bottom-links">
          <router-link to="/trust">Trust</router-link>
          <router-link to="/coverage">Coverage</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SiteLogo from './SiteLogo.vue'
import { FOOTER_COLUMNS } from '@/content/navigation.js'
import { PRODUCT_NAME } from '@/config.js'

const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--outline-variant);
  background: var(--surface-container-low);
  padding: 3rem 0 1.5rem;
}

.footer__top {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
  margin-bottom: 2.5rem;
}

.footer__tagline {
  margin-top: 0.75rem;
  color: var(--on-surface-variant);
  font-size: 0.875rem;
  line-height: 1.55;
}

.footer__columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
}

.footer__col-title {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-warm);
  margin-bottom: 0.625rem;
}

.footer__link {
  display: block;
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
  padding: 0.25rem 0;
  transition: color 0.15s ease;
}

.footer__link:hover {
  color: var(--on-surface);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--outline-variant);
}

.footer__copy {
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
}

.footer__bottom-links {
  display: flex;
  gap: 1.25rem;
}

.footer__bottom-links a {
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
}

@media (max-width: 768px) {
  .footer__top {
    grid-template-columns: 1fr;
  }
}
</style>
