import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import SolutionsView from '@/views/SolutionsView.vue'
import SolutionDetailView from '@/views/SolutionDetailView.vue'
import IndustriesView from '@/views/IndustriesView.vue'
import IndustryDetailView from '@/views/IndustryDetailView.vue'
import PlatformView from '@/views/PlatformView.vue'
import TrustView from '@/views/TrustView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import DemoView from '@/views/DemoView.vue'
import { LEGACY_FEATURE_REDIRECTS } from '@/content/productEcosystem.js'

const legacyFeatureRedirects = Object.entries(LEGACY_FEATURE_REDIRECTS).map(([id, slug]) => ({
  path: `features/${id}`,
  redirect: `/products/${slug}`,
}))

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      { path: '', name: 'home', component: HomeView },
      { path: 'products', name: 'products', component: ProductsView },
      { path: 'products/:slug', name: 'product-detail', component: ProductDetailView },
      { path: 'solutions', name: 'solutions', component: SolutionsView },
      { path: 'solutions/:slug', name: 'solution-detail', component: SolutionDetailView },
      { path: 'industries', name: 'industries', component: IndustriesView },
      { path: 'industries/:slug', name: 'industry-detail', component: IndustryDetailView },
      { path: 'platform', name: 'platform', component: PlatformView },
      { path: 'trust', name: 'trust', component: TrustView },
      { path: 'about', name: 'about', component: AboutView },
      { path: 'contact', name: 'contact', component: ContactView },
      { path: 'demo', name: 'demo', component: DemoView },
      { path: 'coverage', name: 'coverage', component: () => import('@/views/CoverageView.vue') },
      // Legacy redirects
      { path: 'capabilities', redirect: '/platform' },
      { path: 'security', redirect: '/trust' },
      { path: 'architecture', redirect: '/platform' },
      { path: 'features', redirect: '/products' },
      { path: 'features/ask-ai', redirect: '/products/lens' },
      { path: 'features/face-recognize', redirect: '/products/prism' },
      { path: 'features/face-register', redirect: '/products/prism' },
      { path: 'features/face-verify', redirect: '/products/prism' },
      { path: 'features/social-graph', redirect: '/products/molecules' },
      { path: 'features/disk-analysis', redirect: '/products/volume' },
      { path: 'features/chargesheet', redirect: '/products/folio' },
      ...legacyFeatureRedirects,
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0 }
  },
})

export default router
