<template>
  <section id="hero" class="hero section">
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__grid" />
      <div class="hero__orb hero__orb--1" />
      <div class="hero__orb hero__orb--2" />
      <div class="hero__orb hero__orb--3" />
      <div class="hero__glow hero__glow--1" />
      <div class="hero__glow hero__glow--2" />
    </div>

    <div class="container hero__layout">
      <div class="hero__copy">
        <p class="hero__eyebrow hero-animate" style="--d: 0">{{ PRODUCT_TAGLINE }}</p>
        <h1 class="hero__title hero-animate" style="--d: 1">
          The forensic operating system for
          <span class="hero__highlight">end-to-end investigations</span>
          — acquire, analyze, correlate.
        </h1>
        <p class="hero__subtitle hero-animate" style="--d: 2">
          {{ PRODUCT_NAME }} preserves evidence with hash-first chain of custody, extracts artifacts
          from disk, mobile, memory, and network — then builds the evidence graph through Molecules and Lens.
        </p>

        <div class="hero__actions hero-animate" style="--d: 3">
          <CtaButton :href="DEMO_URL" variant="primary">Book a live demo</CtaButton>
          <router-link to="/capabilities" class="hero__secondary-link">
            See what it does <span class="hero__arrow">&rarr;</span>
          </router-link>
        </div>

        <div class="hero__proof hero-animate" style="--d: 4">
          <span class="hero__proof-dot" />
          Trusted by investigation teams who need speed <em>and</em> control
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
import { DEMO_URL, PRODUCT_NAME, PRODUCT_TAGLINE } from '@/config.js'
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
  animation: grid-drift 20s linear infinite;
}

@keyframes grid-drift {
  to { background-position: 56px 56px; }
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
  animation: float-orb 12s ease-in-out infinite;
}

.hero__orb--2 {
  width: 200px;
  height: 200px;
  bottom: 20%;
  left: 10%;
  background: rgba(124, 77, 255, 0.25);
  animation: float-orb 15s ease-in-out infinite reverse;
}

.hero__orb--3 {
  width: 120px;
  height: 120px;
  top: 40%;
  left: 40%;
  background: rgba(52, 211, 153, 0.15);
  animation: float-orb 10s ease-in-out infinite 2s;
}

@keyframes float-orb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -20px) scale(1.05); }
  66% { transform: translate(-20px, 15px) scale(0.95); }
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
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hero-enter-scale {
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.hero__arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}

.hero__secondary-link:hover .hero__arrow {
  transform: translateX(4px);
}

.hero__glow--1 {
  position: absolute;
  top: -10%;
  right: 10%;
  width: 500px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(61, 90, 254, 0.18), transparent 70%);
}

.hero__glow--2 {
  position: absolute;
  bottom: 0;
  left: -10%;
  width: 400px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(124, 77, 255, 0.12), transparent 70%);
}

.hero__layout {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero__eyebrow {
  display: inline-block;
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
  animation: shimmer 6s linear infinite;
}

@keyframes shimmer {
  to { background-position: 200% center; }
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
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.hero__secondary-link {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--on-surface-variant);
  transition: color 0.15s ease;
}

.hero__secondary-link:hover {
  color: var(--on-surface);
}

.hero__proof {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
}

.hero__proof em {
  font-style: normal;
  color: var(--on-surface);
}

.hero__proof-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 12px rgba(52, 211, 153, 0.6);
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-animate {
    opacity: 1;
    transform: none;
    animation: none;
  }

  .hero__grid,
  .hero__orb {
    animation: none;
  }
}

@media (max-width: 900px) {
  .hero__layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .hero__visual {
    order: -1;
  }
}
</style>
