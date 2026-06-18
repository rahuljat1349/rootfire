<template>
  <section class="social-proof section--compact">
    <div class="container social-proof__inner reveal reveal-scale">
      <div class="social-proof__avatars" aria-hidden="true">
        <span v-for="(initials, i) in avatars" :key="i" class="social-proof__avatar" :style="{ '--i': i + 1 }">
          {{ initials }}
        </span>
      </div>
      <p class="social-proof__text">
        <strong><AnimatedStat :value="47" suffix="+" /> agency evaluators</strong>
        have toured {{ PRODUCT_NAME }} this quarter
      </p>
      <div class="social-proof__badges">
        <span v-for="badge in badges" :key="badge" class="social-proof__badge">{{ badge }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedStat from './AnimatedStat.vue'
import { PRODUCT_NAME } from '@/config.js'

const avatars = ['AK', 'RV', 'MS', 'JP', 'LT']
const badges = ['SOC-ready', 'Air-gap capable', 'On-prem deploy']
</script>

<style scoped>
.section--compact {
  padding: 2.5rem 0;
}

.social-proof__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem 2rem;
  padding: 1.5rem 2rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
}

.social-proof__avatars {
  display: flex;
}

.social-proof__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid var(--surface-container);
  margin-left: calc(var(--i) * -10px);
  background: linear-gradient(
    135deg,
    hsl(calc(var(--i) * 50 + 220), 70%, 55%),
    hsl(calc(var(--i) * 40 + 260), 60%, 45%)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
  font-weight: 700;
  color: white;
  animation: pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) calc(var(--i) * 0.08s) both;
}

.social-proof__avatar:first-child {
  margin-left: 0;
}

@keyframes pop-in {
  from {
    opacity: 0;
    transform: scale(0.5) translateY(8px);
  }
}

.social-proof__text {
  font-size: 0.9375rem;
  color: var(--on-surface-variant);
}

.social-proof__text strong {
  color: var(--on-surface);
}

.social-proof__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.social-proof__badge {
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
  background: var(--surface-container-high);
  color: var(--on-surface-variant);
  border: 1px solid var(--outline-variant);
}
</style>
