<template>
  <div class="page">
    <FlagshipProductsSection
      section-id="capabilities"
      :show-footnote="false"
      title="Six flagship products"
      subtitle="Every capability in Obsedian maps to one of six products and five OS layers — the same positioning model as AXIOM, Cellebrite, Belkasoft, and Nuix, but as a unified forensic operating system."
    />
    <PlatformLayersGrid />
    <FinalCtaSection />
  </div>
</template>

<script setup>
import FlagshipProductsSection from '@/components/FlagshipProductsSection.vue'
import PlatformLayersGrid from '@/components/PlatformLayersGrid.vue'
import FinalCtaSection from '@/components/FinalCtaSection.vue'
</script>

<style scoped>
.page {
  padding-top: 1rem;
}
</style>
