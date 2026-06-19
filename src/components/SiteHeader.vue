<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="container header__inner">
      <SiteLogo @click="onLogoClick" />

      <nav class="nav" :class="{ 'nav--open': menuOpen }" aria-label="Main">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.to"
          class="nav__link"
          @click="onNavClick(item, $event)"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <div class="header__actions">
        <CtaButton :href="DEMO_URL" variant="primary" class="header__cta">
          Book demo
        </CtaButton>
        <button
          class="menu-toggle"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="menu-toggle__bar" />
          <span class="menu-toggle__bar" />
          <span class="menu-toggle__bar" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CtaButton from './CtaButton.vue'
import SiteLogo from './SiteLogo.vue'
import { DEMO_URL } from '@/config.js'
import { revealInContainer } from '@/composables/useScrollReveal.js'

const route = useRoute()
const router = useRouter()
const scrolled = ref(false)
const menuOpen = ref(false)

const navItems = [
  { name: 'home', label: 'Home', to: '/', hash: '#hero' },
  { name: 'capabilities', label: 'What it does', to: '/capabilities', hash: '#capabilities' },
  { name: 'features', label: 'Features', to: '/features' },
  { name: 'coverage', label: 'Coverage', to: '/coverage' },
  { name: 'architecture', label: 'How it works', to: '/architecture', hash: '#architecture' },
  { name: 'security', label: 'Trust', to: '/security', hash: '#security' },
  { name: 'demo', label: 'Live demo', to: '/demo', hash: '#demo' },
]

const isHome = computed(() => route.name === 'home')

function onScroll() {
  scrolled.value = window.scrollY > 8
}

function onLogoClick(e) {
  if (isHome.value) {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  menuOpen.value = false
}

function onNavClick(item, e) {
  menuOpen.value = false

  if (isHome.value && item.hash) {
    e.preventDefault()
    const el = document.querySelector(item.hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      router.replace({ hash: item.hash })
      revealInContainer(el)
      setTimeout(() => revealInContainer(el), 450)
    } else if (item.name === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      router.replace({ hash: '' })
    } else {
      router.push(item.to)
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-height);
  background: rgba(15, 17, 23, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.header--scrolled {
  border-bottom-color: var(--outline-variant);
  background: rgba(15, 17, 23, 0.95);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 1.5rem;
}

.logo {
  flex-shrink: 0;
}

.nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav__link {
  padding: 0.5rem 0.875rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--on-surface-variant);
  transition: color 0.15s ease;
}

.nav__link:hover {
  color: var(--on-surface);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header__cta {
  padding: 0.5rem 1rem;
  font-size: 0.8125rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 6px;
}

.menu-toggle__bar {
  display: block;
  height: 2px;
  background: var(--on-surface);
  border-radius: 1px;
  transition: transform 0.2s ease;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .header__cta {
    display: none;
  }

  .nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
    background: var(--surface-container);
    border-bottom: 1px solid var(--outline-variant);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  .nav--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav__link {
    padding: 0.875rem 1rem;
  }
}
</style>
