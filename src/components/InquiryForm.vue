<template>
  <form class="inquiry-form" @submit.prevent="onSubmit">
    <p v-if="contextLabel" class="inquiry-form__context">
      {{ contextLabel }}
    </p>

    <div class="inquiry-form__grid">
      <label class="inquiry-form__field">
        <span>Name</span>
        <input v-model="form.name" type="text" required placeholder="Your name" />
      </label>
      <label class="inquiry-form__field">
        <span>Work email</span>
        <input v-model="form.email" type="email" required placeholder="you@agency.gov" />
      </label>
      <label class="inquiry-form__field">
        <span>Organization</span>
        <input v-model="form.org" type="text" required placeholder="Agency or company" />
      </label>
      <label class="inquiry-form__field">
        <span>Role</span>
        <input v-model="form.role" type="text" placeholder="Investigator, CISO, etc." />
      </label>
    </div>

    <label class="inquiry-form__field inquiry-form__field--full">
      <span>Message</span>
      <textarea
        v-model="form.message"
        rows="4"
        :placeholder="messagePlaceholder"
      />
    </label>

    <input v-if="product" type="hidden" name="product" :value="product" />
    <input v-if="solution" type="hidden" name="solution" :value="solution" />
    <input v-if="industry" type="hidden" name="industry" :value="industry" />
    <input type="hidden" name="intent" :value="intent" />

    <button type="submit" class="inquiry-form__submit">
      {{ submitLabel }}
    </button>

    <p v-if="submitted" class="inquiry-form__success">
      Thank you — we'll be in touch shortly.
    </p>
  </form>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProductBySlug } from '@/content/productEcosystem.js'
import { getSolutionBySlug } from '@/content/solutions.js'
import { getIndustryBySlug } from '@/content/industries.js'

const props = defineProps({
  defaultIntent: { type: String, default: 'demo' },
  messagePlaceholder: {
    type: String,
    default: 'Tell us about your investigation priorities or deployment requirements.',
  },
})

const route = useRoute()
const submitted = ref(false)

const product = computed(() => route.query.product ?? '')
const solution = computed(() => route.query.solution ?? '')
const industry = computed(() => route.query.industry ?? '')
const intent = computed(() => route.query.intent ?? props.defaultIntent)

const contextLabel = computed(() => {
  const parts = []
  if (product.value) {
    parts.push(`Product: ${getProductBySlug(product.value)?.label ?? product.value}`)
  }
  if (solution.value) {
    parts.push(`Solution: ${getSolutionBySlug(solution.value)?.label ?? solution.value}`)
  }
  if (industry.value) {
    parts.push(`Industry: ${getIndustryBySlug(industry.value)?.label ?? industry.value}`)
  }
  return parts.length ? parts.join(' · ') : null
})

const submitLabel = computed(() =>
  intent.value === 'sales' ? 'Contact sales' : 'Request demo'
)

const form = reactive({
  name: '',
  email: '',
  org: '',
  role: '',
  message: '',
})

function onSubmit() {
  submitted.value = true
}
</script>

<style scoped>
.inquiry-form {
  max-width: 640px;
}

.inquiry-form__context {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary-container);
  margin-bottom: 1.25rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(61, 90, 254, 0.1);
}

.inquiry-form__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.inquiry-form__field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.inquiry-form__field--full {
  margin-bottom: 1.25rem;
}

.inquiry-form__field span {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--on-surface-variant);
}

.inquiry-form__field input,
.inquiry-form__field textarea {
  padding: 0.625rem 0.875rem;
  border-radius: 8px;
  border: 1px solid var(--outline-variant);
  background: var(--surface-container);
  color: var(--on-surface);
  font-size: 0.9375rem;
  font-family: inherit;
}

.inquiry-form__field input:focus,
.inquiry-form__field textarea:focus {
  outline: none;
  border-color: var(--primary-container);
}

.inquiry-form__submit {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: var(--primary-container);
  color: white;
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
}

.inquiry-form__success {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #34d399;
  font-weight: 600;
}

@media (max-width: 640px) {
  .inquiry-form__grid {
    grid-template-columns: 1fr;
  }
}
</style>
