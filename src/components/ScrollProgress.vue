<template>
  <div class="scroll-progress" :style="{ transform: `scaleX(${progress / 100})` }" aria-hidden="true" />
</template>

<script setup>
import { useScrollProgress } from '@/composables/useScrollProgress.js'

const progress = useScrollProgress()
</script>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 200;
  background: linear-gradient(90deg, var(--primary-container), var(--secondary), #34d399);
  transform-origin: left center;
  transition: transform 0.08s linear;
  pointer-events: none;
}
</style>
