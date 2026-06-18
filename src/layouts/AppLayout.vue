<template>
  <div class="layout">
    <ScrollProgress />
    <SiteHeader />
    <main class="main">
      <router-view :key="route.fullPath" />
    </main>
    <SiteFooter />
    <StickyDemoBar />
  </div>
</template>

<script setup>
import { watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import ScrollProgress from '@/components/ScrollProgress.vue'
import StickyDemoBar from '@/components/StickyDemoBar.vue'
import { initScrollReveal } from '@/composables/useScrollReveal.js'

const route = useRoute()
let cleanup = () => {}

async function runReveal() {
  cleanup()
  await nextTick()
  requestAnimationFrame(() => {
    cleanup = initScrollReveal()
  })
}

watch(() => route.fullPath, runReveal)

onMounted(runReveal)

onUnmounted(() => {
  cleanup()
})
</script>

<style scoped>
.layout {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  padding-top: var(--header-height);
}
</style>
