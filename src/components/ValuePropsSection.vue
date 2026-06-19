<template>
  <section id="value-props" class="value-props section">
    <div class="container">
      <div class="value-props__header reveal">
        <h2 class="section-title">Why teams switch to {{ PRODUCT_NAME }}</h2>
        <p class="section-subtitle">
          A full forensic operating system — hash-first chain of custody, every evidence type,
          and the Molecules correlation graph built in.
        </p>
      </div>

      <div class="value-props__grid reveal reveal-stagger">
        <article
          v-for="prop in VALUE_PROPS"
          :key="prop.id"
          class="value-card hover-lift value-card--glow"
        >
          <div class="value-card__top">
            <div class="value-card__icon" aria-hidden="true">
              <component :is="iconMap[prop.icon]" />
            </div>
            <div class="value-card__stat">
              <span class="value-card__stat-value">{{ prop.stat }}</span>
              <span class="value-card__stat-label">{{ prop.statLabel }}</span>
            </div>
          </div>
          <p class="value-card__headline">{{ prop.headline }}</p>
          <h3 class="value-card__title">{{ prop.title }}</h3>
          <p class="value-card__desc">{{ prop.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { VALUE_PROPS } from '@/content/valueProps.js'
import { PRODUCT_NAME } from '@/config.js'
import { h } from 'vue'

const iconMap = {
  speed: {
    render() {
      return h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' }, [
        h('path', { d: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linejoin': 'round' }),
      ])
    },
  },
  shield: {
    render() {
      return h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' }, [
        h('path', { d: 'M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z', stroke: 'currentColor', 'stroke-width': '1.5', fill: 'rgba(61,90,254,0.12)' }),
      ])
    },
  },
  audit: {
    render() {
      return h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' }, [
        h('path', { d: 'M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round' }),
      ])
    },
  },
}
</script>

<style scoped>
.value-props {
  background: var(--surface-container-low);
}

.value-props__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
}

.value-card {
  padding: 2rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  position: relative;
  overflow: hidden;
}

.value-card--glow::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, transparent, rgba(61, 90, 254, 0.4), transparent);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.value-card--glow:hover::before {
  opacity: 1;
}

.value-card__icon {
  transition: transform 0.35s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.value-card:hover .value-card__icon {
  transform: scale(1.1) rotate(-4deg);
}

.value-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.value-card__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--primary-container-dim);
  color: var(--primary-container);
}

.value-card__stat {
  text-align: right;
}

.value-card__stat-value {
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--primary-container);
  line-height: 1;
}

.value-card__stat-label {
  font-size: 0.6875rem;
  color: var(--on-surface-variant);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.value-card__headline {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-warm);
  margin-bottom: 0.375rem;
}

.value-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.625rem;
  letter-spacing: -0.02em;
}

.value-card__desc {
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
  line-height: 1.7;
}
</style>
