<template>
  <div v-if="product" class="page">
    <div class="container">
      <nav class="breadcrumb reveal">
        <router-link to="/products">Products</router-link>
        <span aria-hidden="true">/</span>
        <span>{{ product.shortName }}</span>
      </nav>
      <ProductDetailContent :product="product" />
    </div>
  </div>
  <div v-else class="page page--missing">
    <div class="container">
      <h1>Product not found</h1>
      <router-link to="/products">← Back to products</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductDetailContent from '@/components/ProductDetailContent.vue'
import { getProductBySlug } from '@/content/productEcosystem.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

const route = useRoute()
useScrollReveal()

const product = computed(() => getProductBySlug(route.params.slug))
</script>

<style scoped>
.page {
  padding: 1.5rem 0 var(--section-padding);
}

.page--missing {
  padding: 4rem 0;
  text-align: center;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  margin-bottom: 2rem;
}

.breadcrumb a {
  color: var(--primary-container);
}
</style>
