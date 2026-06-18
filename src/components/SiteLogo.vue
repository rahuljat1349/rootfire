<template>
  <router-link to="/" class="site-logo" :class="`site-logo--${size}`" @click="onClick">
    <span class="site-logo__icon" aria-hidden="true">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          :d="'M14 3L24 10v8L14 25 4 18V10L14 3z'"
          :fill="`url(#${gradId})`"
          stroke="rgba(167,139,250,0.6)"
          stroke-width="1"
        />
        <path
          d="M14 8l5 3.5v5L14 20l-5-3.5v-5L14 8z"
          fill="rgba(255,255,255,0.12)"
        />
        <defs>
          <linearGradient :id="gradId" x1="4" y1="3" x2="24" y2="25">
            <stop stop-color="#1a1d27" />
            <stop offset="0.5" stop-color="#3d5afe" />
            <stop offset="1" stop-color="#7c4dff" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span class="site-logo__text">{{ PRODUCT_NAME }}</span>
  </router-link>
</template>

<script setup>
import { useId } from 'vue'
import { PRODUCT_NAME } from '@/config.js'

defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md'].includes(v),
  },
})

const emit = defineEmits(['click'])

const gradId = useId()

function onClick(e) {
  emit('click', e)
}
</script>

<style scoped>
.site-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--on-surface);
  line-height: 1;
  text-decoration: none;
}

.site-logo__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  line-height: 0;
}

.site-logo__icon svg {
  display: block;
  width: 28px;
  height: 28px;
}

.site-logo__text {
  line-height: 1;
  padding-top: 1px;
}

.site-logo--md .site-logo__text {
  font-size: 1.05rem;
}

.site-logo--sm .site-logo__text {
  font-size: 1.125rem;
}
</style>
