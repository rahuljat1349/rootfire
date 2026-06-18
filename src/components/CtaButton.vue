<template>
  <a
    :href="href"
    class="cta"
    :class="[`cta--${variant}`, { 'cta--block': block, 'cta--shine': variant === 'primary' }]"
  >
    <span class="cta__label"><slot /></span>
  </a>
</template>

<script setup>
defineProps({
  href: { type: String, default: '#' },
  variant: { type: String, default: 'primary' },
  block: { type: Boolean, default: false },
})
</script>

<style scoped>
.cta {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9375rem;
  overflow: hidden;
  transition: transform 0.25s cubic-bezier(0.34, 1.2, 0.64, 1), box-shadow 0.25s ease;
}

.cta__label {
  position: relative;
  z-index: 1;
}

.cta--block {
  width: 100%;
}

.cta--primary {
  background: var(--primary-container);
  color: var(--on-primary-container);
  box-shadow: 0 4px 24px rgba(61, 90, 254, 0.35);
}

.cta--primary:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 36px rgba(61, 90, 254, 0.5);
}

.cta--primary:active {
  transform: translateY(0) scale(0.98);
}

.cta--shine::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
  animation: shine 3.5s ease-in-out infinite;
}

@keyframes shine {
  0%, 100% { left: -100%; }
  50% { left: 150%; }
}

.cta--secondary {
  background: var(--surface-container-high);
  color: var(--on-surface);
  border: 1px solid var(--outline-variant);
}

.cta--secondary:hover {
  background: var(--surface-container);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.cta--ghost {
  color: var(--on-surface-variant);
  padding: 0.5rem 1rem;
}

.cta--ghost:hover {
  color: var(--on-surface);
}

@media (prefers-reduced-motion: reduce) {
  .cta--shine::after {
    animation: none;
  }
}
</style>
