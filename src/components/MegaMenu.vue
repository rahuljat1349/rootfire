<template>
  <div
    class="mega-menu"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <button
      class="mega-menu__trigger"
      :class="{ 'mega-menu__trigger--open': open }"
      :aria-expanded="open"
      @click="open = !open"
    >
      {{ label }}
      <span class="mega-menu__chevron" aria-hidden="true">▾</span>
    </button>

    <div v-show="open" class="mega-menu__panel">
      <div v-if="menu.columns" class="mega-menu__columns">
        <div v-for="col in menu.columns" :key="col.id" class="mega-menu__col">
          <p class="mega-menu__col-label">{{ col.label }}</p>
          <ul class="mega-menu__list">
            <li v-for="link in col.links" :key="link.id">
              <router-link :to="link.to" class="mega-menu__link" @click="close">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <ul v-else class="mega-menu__simple">
        <li v-for="link in menu.links" :key="link.id">
          <router-link :to="link.to" class="mega-menu__link" @click="close">
            {{ link.label }}
          </router-link>
        </li>
      </ul>
      <router-link
        v-if="menu.hubLink"
        :to="menu.hubLink.to"
        class="mega-menu__hub"
        @click="close"
      >
        {{ menu.hubLink.label }} →
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  label: { type: String, required: true },
  menu: { type: Object, required: true },
})

const open = ref(false)

function close() {
  open.value = false
}
</script>

<style scoped>
.mega-menu {
  position: relative;
}

.mega-menu__trigger {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.875rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--on-surface-variant);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.15s ease, background 0.15s ease;
}

.mega-menu__trigger:hover,
.mega-menu__trigger--open {
  color: var(--on-surface);
  background: rgba(255, 255, 255, 0.04);
}

.mega-menu__chevron {
  font-size: 0.625rem;
  opacity: 0.7;
}

.mega-menu__panel {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  min-width: 520px;
  max-width: 90vw;
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
  z-index: 200;
}

.mega-menu__columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.mega-menu__col-label {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-warm);
  margin-bottom: 0.5rem;
}

.mega-menu__list,
.mega-menu__simple {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.mega-menu__simple {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem 1rem;
}

.mega-menu__link {
  display: block;
  padding: 0.375rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
  transition: color 0.15s ease, background 0.15s ease;
}

.mega-menu__link:hover {
  color: var(--on-surface);
  background: rgba(61, 90, 254, 0.1);
}

.mega-menu__hub {
  display: block;
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--outline-variant);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--primary-container);
}
</style>
