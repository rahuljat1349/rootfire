<template>
  <section id="testimonials" class="testimonials section">
    <div class="container">
      <div class="testimonials__header reveal">
        <p class="testimonials__eyebrow">What buyers say after the demo</p>
        <h2 class="section-title">The moment the room gets quiet</h2>
      </div>

      <div class="testimonials__stage reveal reveal-scale">
        <Transition :name="transitionName" mode="out-in">
          <article :key="active" class="testimonial-card">
            <div class="testimonial-card__metric">{{ current.metric }}</div>
            <blockquote class="testimonial-card__quote">
              &ldquo;{{ current.quote }}&rdquo;
            </blockquote>
            <footer class="testimonial-card__footer">
              <div class="testimonial-card__avatar" aria-hidden="true">
                {{ initials }}
              </div>
              <div>
                <cite class="testimonial-card__name">{{ current.name }}</cite>
                <p class="testimonial-card__org">{{ current.org }}</p>
              </div>
            </footer>
          </article>
        </Transition>

        <div class="testimonials__dots" role="tablist" aria-label="Testimonials">
          <button
            v-for="(_, i) in TESTIMONIALS"
            :key="i"
            class="testimonials__dot"
            :class="{ 'testimonials__dot--active': i === active }"
            :aria-selected="i === active"
            role="tab"
            :aria-label="`Testimonial ${i + 1}`"
            @click="goTo(i)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { TESTIMONIALS } from '@/content/testimonials.js'

const active = ref(0)
const direction = ref(1)
let timer = null

const current = computed(() => TESTIMONIALS[active.value])
const transitionName = computed(() => (direction.value > 0 ? 'slide-left' : 'slide-right'))

const initials = computed(() =>
  current.value.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
)

function goTo(i) {
  direction.value = i > active.value ? 1 : -1
  active.value = i
  resetTimer()
}

function next() {
  direction.value = 1
  active.value = (active.value + 1) % TESTIMONIALS.length
}

function resetTimer() {
  clearInterval(timer)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    timer = setInterval(next, 5500)
  }
}

onMounted(resetTimer)
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.testimonials {
  background: var(--surface-container-low);
  overflow: hidden;
}

.testimonials__eyebrow {
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-warm);
  margin-bottom: 0.5rem;
}

.testimonials__stage {
  position: relative;
  max-width: 720px;
  margin: 0 auto;
}

.testimonial-card {
  padding: 2.5rem;
  border-radius: var(--radius-xl);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);
}

.testimonial-card__metric {
  display: inline-block;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
  background: var(--primary-container-dim);
  color: var(--primary-container);
  margin-bottom: 1.25rem;
}

.testimonial-card__quote {
  font-size: clamp(1.125rem, 2.5vw, 1.375rem);
  line-height: 1.65;
  font-style: italic;
  color: var(--on-surface);
  margin-bottom: 1.75rem;
}

.testimonial-card__footer {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-card__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-container), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.testimonial-card__name {
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9375rem;
}

.testimonial-card__org {
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
}

.testimonials__dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.testimonials__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--outline-variant);
  transition: width 0.3s ease, background 0.3s ease;
}

.testimonials__dot--active {
  width: 24px;
  border-radius: 4px;
  background: var(--primary-container);
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
