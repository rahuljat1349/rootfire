<template>
  <Transition name="sticky-bar">
    <aside v-if="visible" class="sticky-bar" role="complementary" aria-label="Book a demo">
      <div class="sticky-bar__inner container">
        <div class="sticky-bar__copy">
          <span class="sticky-bar__pulse" />
          <p class="sticky-bar__text">
            <strong>Live demos available this week</strong>
            <span class="sticky-bar__sub">See {{ PRODUCT_NAME }} on your terms — 20 min, no commitment</span>
          </p>
        </div>
        <CtaButton :href="DEMO_URL" variant="primary" class="sticky-bar__cta">
          Book a demo
        </CtaButton>
        <button class="sticky-bar__close" aria-label="Dismiss" @click="dismissed = true">&times;</button>
      </div>
    </aside>
  </Transition>
</template>

<script setup>
import { ref, computed } from 'vue'
import CtaButton from './CtaButton.vue'
import { DEMO_URL, PRODUCT_NAME } from '@/config.js'
import { useStickyBar } from '@/composables/useScrollProgress.js'

const dismissed = ref(false)
const scrolled = useStickyBar(520)
const visible = computed(() => scrolled.value && !dismissed.value)
</script>

<style scoped>
.sticky-bar {
  position: fixed;
  bottom: 1.25rem;
  left: 1rem;
  right: 1rem;
  z-index: 90;
  max-width: 720px;
  margin: 0 auto;
}

.sticky-bar__inner {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1rem 0.875rem 1.25rem;
  border-radius: 14px;
  background: rgba(26, 29, 39, 0.92);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(61, 90, 254, 0.35);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.04) inset;
}

.sticky-bar__copy {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
  min-width: 0;
}

.sticky-bar__pulse {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #34d399;
  flex-shrink: 0;
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5);
  animation: ping 2s ease infinite;
}

@keyframes ping {
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5); }
  70% { box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
}

.sticky-bar__text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  font-size: 0.8125rem;
  min-width: 0;
}

.sticky-bar__text strong {
  color: var(--on-surface);
}

.sticky-bar__sub {
  color: var(--on-surface-variant);
  font-size: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sticky-bar__cta {
  flex-shrink: 0;
  padding: 0.625rem 1.125rem !important;
  font-size: 0.8125rem !important;
}

.sticky-bar__close {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  color: var(--on-surface-variant);
  font-size: 1.25rem;
  line-height: 1;
  transition: background 0.15s ease, color 0.15s ease;
}

.sticky-bar__close:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--on-surface);
}

.sticky-bar-enter-active,
.sticky-bar-leave-active {
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.sticky-bar-enter-from,
.sticky-bar-leave-to {
  opacity: 0;
  transform: translateY(100%) scale(0.95);
}

@media (max-width: 560px) {
  .sticky-bar__sub {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sticky-bar__pulse {
    animation: none;
  }
}
</style>
