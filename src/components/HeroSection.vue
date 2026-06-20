<template>
  <section id="hero" class="hero section">
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__grid" />
      <div class="hero__orb hero__orb--1" />
      <div class="hero__orb hero__orb--2" />
      <div class="hero__glow hero__glow--1" />
    </div>

    <div class="container hero__layout">
      <div class="hero__copy">
        <p class="hero__eyebrow hero-animate" style="--d: 0">{{ PRODUCT_TAGLINE }}</p>
        <h1 class="hero__title hero-animate" style="--d: 1">
          The future of digital forensics
          <span class="hero__highlight">and intelligence</span>
        </h1>
        <p class="hero__subtitle hero-animate" style="--d: 2">
          {{ PRODUCT_NAME }} brings together evidence acquisition, forensic analysis, biometric
          intelligence, cyber investigations, and reporting into a unified ecosystem.
        </p>

        <div class="hero__actions hero-animate" style="--d: 3">
          <CtaButton href="/demo?intent=demo" variant="primary">Request demo</CtaButton>
          <CtaButton href="/contact?intent=sales" variant="secondary">Contact sales</CtaButton>
        </div>

        <div class="hero__links hero-animate" style="--d: 4">
          <router-link to="/products" class="hero__secondary-link">
            Explore products <span class="hero__arrow">&rarr;</span>
          </router-link>
          <router-link to="/solutions" class="hero__secondary-link">
            View solutions <span class="hero__arrow">&rarr;</span>
          </router-link>
        </div>
      </div>

      <div class="hero__visual hero-animate hero-animate--scale" style="--d: 2">
        <ProductPreview />
      </div>
    </div>
  </section>
</template>

<script setup>
import CtaButton from './CtaButton.vue'
import ProductPreview from './ProductPreview.vue'
import { PRODUCT_NAME, PRODUCT_TAGLINE } from '@/config.js'
</script>

<style scoped>
.hero {
  position: relative;
  padding-top: calc(var(--section-padding) + 0.5rem);
  padding-bottom: var(--section-padding);
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(61, 90, 254, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(61, 90, 254, 0.05) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 90% 80% at 60% 20%, black, transparent);
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
}

.hero__orb--1 {
  width: 280px;
  height: 280px;
  top: 15%;
  right: 5%;
  background: rgba(61, 90, 254, 0.35);
}

.hero__orb--2 {
  width: 200px;
  height: 200px;
  bottom: 20%;
  left: 10%;
  background: rgba(124, 77, 255, 0.25);
}

.hero__glow--1 {
  position: absolute;
  top: -10%;
  right: 10%;
  width: 500px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(61, 90, 254, 0.18), transparent 70%);
}

.hero-animate {
  opacity: 0;
  transform: translateY(24px);
  animation: hero-enter 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(var(--d) * 0.12s + 0.1s);
}

.hero-animate--scale {
  transform: scale(0.92) translateY(24px);
  animation-name: hero-enter-scale;
}

@keyframes hero-enter {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes hero-enter-scale {
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.hero__layout {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero__eyebrow {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent-warm);
  margin-bottom: 1.25rem;
}

.hero__title {
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.12;
  margin-bottom: 1.25rem;
}

.hero__highlight {
  background: linear-gradient(135deg, #6b8aff 0%, #a78bfa 50%, #6b8aff 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subtitle {
  font-size: 1.125rem;
  color: var(--on-surface-variant);
  line-height: 1.75;
  margin-bottom: 2rem;
  max-width: 520px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.hero__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.hero__secondary-link {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--on-surface-variant);
}

.hero__secondary-link:hover {
  color: var(--on-surface);
}

.hero__arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}

.hero__secondary-link:hover .hero__arrow {
  transform: translateX(4px);
}

@media (max-width: 900px) {
  .hero__layout {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }
}
</style>
