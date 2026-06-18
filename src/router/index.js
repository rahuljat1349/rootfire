import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import HomeView from '@/views/HomeView.vue'
import CapabilitiesView from '@/views/CapabilitiesView.vue'
import ArchitectureView from '@/views/ArchitectureView.vue'
import SecurityView from '@/views/SecurityView.vue'
import DemoView from '@/views/DemoView.vue'
import FeatureDetailView from '@/views/FeatureDetailView.vue'
import FeaturesBrowseView from '@/views/FeaturesBrowseView.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      { path: '', name: 'home', component: HomeView },
      { path: 'capabilities', name: 'capabilities', component: CapabilitiesView },
      { path: 'features', name: 'features-browse', component: FeaturesBrowseView },
      { path: 'features/ask-ai', redirect: '/features/lens' },
      { path: 'features/face-recognize', redirect: '/features/prism' },
      { path: 'features/face-register', redirect: '/features/prism' },
      { path: 'features/face-verify', redirect: '/features/prism' },
      { path: 'features/social-graph', redirect: '/features/molecules' },
      { path: 'features/:id', name: 'feature-detail', component: FeatureDetailView },
      { path: 'architecture', name: 'architecture', component: ArchitectureView },
      { path: 'security', name: 'security', component: SecurityView },
      { path: 'demo', name: 'demo', component: DemoView },
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
