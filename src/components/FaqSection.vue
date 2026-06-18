<template>
  <section id="faq" class="faq section">
    <div class="container faq__layout">
      <div class="faq__intro reveal reveal-left">
        <p class="faq__eyebrow">Questions procurement asks us</p>
        <h2 class="section-title">Got concerns?<br />We've heard them all.</h2>
        <p class="faq__desc">
          The objections that slow deals down — answered upfront, in plain language.
        </p>
        <CtaButton :href="DEMO_URL" variant="primary" class="faq__cta">
          Still have questions? Book a demo
        </CtaButton>
      </div>

      <div class="faq__list reveal reveal-right">
        <div
          v-for="(item, i) in FAQ_ITEMS"
          :key="i"
          class="faq-item"
          :class="{ 'faq-item--open': openIndex === i }"
        >
          <button
            class="faq-item__trigger"
            :aria-expanded="openIndex === i"
            @click="toggle(i)"
          >
            <span>{{ item.q }}</span>
            <span class="faq-item__icon" aria-hidden="true">{{ openIndex === i ? '−' : '+' }}</span>
          </button>
          <div class="faq-item__panel" :style="panelStyle(i)">
            <p class="faq-item__answer">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CtaButton from './CtaButton.vue'
import { FAQ_ITEMS } from '@/content/faq.js'
import { DEMO_URL } from '@/config.js'

const openIndex = ref(0)

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}

function panelStyle(i) {
  const open = openIndex.value === i
  return {
    gridTemplateRows: open ? '1fr' : '0fr',
  }
}
</script>

<style scoped>
.faq__layout {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 3rem;
  align-items: start;
}

.faq__eyebrow {
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-warm);
  margin-bottom: 0.5rem;
}

.faq__desc {
  color: var(--on-surface-variant);
  font-size: 1rem;
  line-height: 1.65;
  margin-bottom: 1.5rem;
}

.faq__cta {
  margin-top: 0.5rem;
}

.faq-item {
  border-bottom: 1px solid var(--outline-variant);
}

.faq-item:first-child {
  border-top: 1px solid var(--outline-variant);
}

.faq-item__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.125rem 0;
  text-align: left;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--on-surface);
  transition: color 0.2s ease;
}

.faq-item__trigger:hover {
  color: var(--primary-container);
}

.faq-item__icon {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: var(--surface-container-high);
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--on-surface-variant);
  transition: transform 0.3s ease, background 0.2s ease, color 0.2s ease;
}

.faq-item--open .faq-item__icon {
  transform: rotate(180deg);
  background: var(--primary-container-dim);
  color: var(--primary-container);
}

.faq-item__panel {
  display: grid;
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.faq-item__answer {
  overflow: hidden;
  padding-bottom: 1.125rem;
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .faq__layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
