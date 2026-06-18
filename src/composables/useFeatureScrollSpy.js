import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

function getScrollOffset() {
  const headerHeight = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--header-height')
  )
  return (Number.isFinite(headerHeight) ? headerHeight : 64) + 32
}

export function useFeatureScrollSpy(featureIds) {
  const route = useRoute()
  const activeFeatureId = ref(featureIds[0] ?? null)
  let ticking = false

  function syncHash(id) {
    const hash = `#${id}`
    if (window.location.hash !== hash) {
      history.replaceState(history.state, '', `${route.path}${hash}`)
    }
  }

  function updateActiveFromScroll() {
    const offset = getScrollOffset()
    let current = featureIds[0]

    for (const id of featureIds) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= offset) {
        current = id
      }
    }

    if (current && current !== activeFeatureId.value) {
      activeFeatureId.value = current
      syncHash(current)
    }
  }

  function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      updateActiveFromScroll()
      ticking = false
    })
  }

  onMounted(() => {
    if (route.hash) {
      const id = route.hash.replace(/^#/, '')
      if (featureIds.includes(id)) {
        activeFeatureId.value = id
      }
    }

    updateActiveFromScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  })

  return { activeFeatureId }
}
