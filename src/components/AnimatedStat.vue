<template>
  <span ref="el" class="animated-stat">{{ display }}</span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  value: { type: Number, required: true },
  suffix: { type: String, default: '' },
  duration: { type: Number, default: 1800 },
})

const el = ref(null)
const display = ref('0' + props.suffix)

let observer = null
let raf = null

onMounted(() => {
  if (!el.value) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    display.value = props.value + props.suffix
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()

      const start = performance.now()
      const tick = (now) => {
        const t = Math.min((now - start) / props.duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        display.value = Math.round(eased * props.value) + props.suffix
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    },
    { threshold: 0.4 }
  )

  observer.observe(el.value)
})

onUnmounted(() => {
  observer?.disconnect()
  if (raf) cancelAnimationFrame(raf)
})
</script>
