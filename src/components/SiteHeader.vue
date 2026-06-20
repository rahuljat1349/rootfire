<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="container header__inner">
      <SiteLogo @click="onLogoClick" />

      <nav class="nav" :class="{ 'nav--open': menuOpen }" aria-label="Main">
        <MegaMenu
          v-for="item in megaNavItems"
          :key="item.id"
          :label="item.label"
          :menu="MEGA_MENUS[item.megaKey]"
        />
        <router-link
          v-for="item in linkNavItems"
          :key="item.id"
          :to="item.to"
          class="nav__link"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <div class="header__actions">
        <CtaButton href="/demo?intent=demo" variant="primary" class="header__cta">
          Request demo
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

    <div v-if="menuOpen" class="mobile-nav">
      <div v-for="item in megaNavItems" :key="item.id" class="mobile-nav__group">
        <p class="mobile-nav__label">{{ item.label }}</p>
        <router-link
          v-for="link in flatMegaLinks(item.megaKey)"
          :key="link.to"
          :to="link.to"
          class="mobile-nav__link"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </router-link>
      </div>
      <router-link
        v-for="item in linkNavItems"
        :key="item.id"
        :to="item.to"
        class="mobile-nav__link"
        @click="menuOpen = false"
      >
        {{ item.label }}
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CtaButton from './CtaButton.vue'
import SiteLogo from './SiteLogo.vue'
import MegaMenu from './MegaMenu.vue'
import { PRIMARY_NAV, MEGA_MENUS } from '@/content/navigation.js'

const route = useRoute()
const router = useRouter()
const scrolled = ref(false)
const menuOpen = ref(false)

const megaNavItems = PRIMARY_NAV.filter((i) => i.type === 'mega')
const linkNavItems = PRIMARY_NAV.filter((i) => i.to)

const isHome = computed(() => route.name === 'home')

function flatMegaLinks(megaKey) {
  const menu = MEGA_MENUS[megaKey]
  if (menu.columns) {
    return menu.columns.flatMap((col) => col.links)
  }
  return menu.links ?? []
}

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
  gap: 1rem;
}

.nav {
  display: flex;
  align-items: center;
  gap: 0.125rem;
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
}

.mobile-nav {
  display: none;
}

@media (max-width: 1024px) {
  .nav :deep(.mega-menu) {
    display: none;
  }

  .nav__link {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .header__cta {
    display: none;
  }

  .mobile-nav {
    display: block;
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    max-height: calc(100vh - var(--header-height));
    overflow-y: auto;
    padding: 1rem;
    background: var(--surface-container);
    border-bottom: 1px solid var(--outline-variant);
  }

  .mobile-nav__group {
    margin-bottom: 1rem;
  }

  .mobile-nav__label {
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--accent-warm);
    margin-bottom: 0.375rem;
  }

  .mobile-nav__link {
    display: block;
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
    color: var(--on-surface-variant);
  }
}
</style>
