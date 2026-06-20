<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <header class="page-header reveal">
          <h1>About Obsedian</h1>
          <p class="page-header__subtitle lead">
            Building the unified forensic intelligence ecosystem for organizations that cannot
            compromise on evidence integrity, investigative speed, or data sovereignty.
          </p>
        </header>

        <section class="about-block reveal">
          <h2>Vision</h2>
          <p>
            Obsedian Forensics exists to replace fragmented forensic toolchains with a single,
            intelligence-driven ecosystem — where every artifact, relationship, and timeline connects
            from acquisition through court-ready reporting.
          </p>
        </section>

        <section class="about-block reveal">
          <h2>Mission</h2>
          <p>
            Empower investigators, analysts, and security teams to acquire, preserve, analyze,
            correlate, and report on digital evidence — faster, with full auditability, entirely on
            infrastructure they control.
          </p>
        </section>

        <section class="about-block reveal">
          <h2>Innovation focus</h2>
          <ul>
            <li>AI-assisted investigation with cited, verifiable answers — not black-box automation</li>
            <li>Cross-modal correlation graphs that surface what spreadsheets cannot</li>
            <li>Hash-first integrity and chain of custody built into every workflow</li>
            <li>Enterprise-scale deployment for agencies, labs, and global organizations</li>
          </ul>
        </section>

        <section class="about-block reveal">
          <h2>Research & development</h2>
          <p>
            Obsedian invests in biometric intelligence, media forensics, DFIR correlation, and
            natural-language investigation — advancing the state of digital forensics while keeping
            every capability deployable on-premise and air-gap capable.
          </p>
        </section>

        <div class="about-cta reveal">
          <CtaButton href="/demo?intent=demo" variant="primary">Request a demo</CtaButton>
          <CtaButton href="/contact?intent=sales" variant="secondary">Contact sales</CtaButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import CtaButton from '@/components/CtaButton.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

useScrollReveal()
</script>

<style scoped>
.page {
  padding: 1.5rem 0 var(--section-padding);
}

.page-header {
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.lead {
  font-size: 1.125rem;
  color: var(--on-surface-variant);
  line-height: 1.75;
  max-width: 640px;
}

.about-block {
  margin-bottom: 2.5rem;
  max-width: 720px;
}

.about-block h2 {
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.about-block p,
.about-block li {
  font-size: 1rem;
  color: var(--on-surface-variant);
  line-height: 1.75;
}

.about-block ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.about-block li {
  padding-left: 1.25rem;
  position: relative;
}

.about-block li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-container);
}

.about-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
