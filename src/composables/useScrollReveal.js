import { onMounted, onUnmounted, nextTick } from 'vue'

const REVEAL_SELECTORS = '.reveal, .fade-in'

function isInViewport(el) {
  const rect = el.getBoundingClientRect()
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  return rect.top < viewHeight * 0.92 && rect.bottom > 0
}

function revealElement(el) {
  el.classList.add('visible')
}

export function initScrollReveal(root = document) {
  const container = root instanceof Document ? document : root
  const elements = container.querySelectorAll(REVEAL_SELECTORS)
  if (!elements.length) return () => {}

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    elements.forEach(revealElement)
    return () => {}
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -2% 0px' }
  )

  elements.forEach((el) => {
    if (isInViewport(el)) {
      revealElement(el)
    } else {
      observer.observe(el)
    }
  })

  return () => observer.disconnect()
}

/** Reveal animated elements within a section (e.g. after hash scroll on home). */
export function revealInContainer(container) {
  if (!container) return
  if (container.classList.contains('reveal') || container.classList.contains('fade-in')) {
    revealElement(container)
  }
  container.querySelectorAll(REVEAL_SELECTORS).forEach(revealElement)
}

export function useScrollReveal() {
  let cleanup = () => {}

  onMounted(async () => {
    await nextTick()
    requestAnimationFrame(() => {
      cleanup = initScrollReveal()
    })
  })

  onUnmounted(() => {
    cleanup()
  })
}
