import { ref, onMounted, onUnmounted } from 'vue'

export function useCountUp(target, { duration = 1800, suffix = '' } = {}) {
  const display = ref('0' + suffix)
  let observer = null
  let raf = null

  onMounted(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const end = typeof target === 'number' ? target : Number(target)

    if (reduced || Number.isNaN(end)) {
      display.value = end + suffix
      return
    }

    const el = document.createElement('span')
    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          display.value = Math.round(eased * end) + suffix
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )

    const mount = document.querySelector('[data-count-up-root]')
    if (mount) observer.observe(mount)
  })

  onUnmounted(() => {
    observer?.disconnect()
    if (raf) cancelAnimationFrame(raf)
  })

  return display
}

/** Per-element count-up — pass a template ref element */
export function animateCount(elRef, end, { duration = 1600, suffix = '', decimals = 0 } = {}) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!elRef.value) return () => {}

  if (reduced) {
    elRef.value.textContent = end + suffix
    return () => {}
  }

  let raf = null
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()

      const start = performance.now()
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        const val = decimals ? (eased * end).toFixed(decimals) : Math.round(eased * end)
        elRef.value.textContent = val + suffix
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    },
    { threshold: 0.35 }
  )

  observer.observe(elRef.value)

  return () => {
    observer.disconnect()
    if (raf) cancelAnimationFrame(raf)
  }
}
