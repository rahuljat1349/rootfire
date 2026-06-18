<template>
  <div class="hub" aria-label="How Obsedian Forensics works">
    <div class="hub__glow" aria-hidden="true" />

    <header class="hub__header">
      <div class="hub__brand">
        <span class="hub__brand-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 3L24 10v8L14 25 4 18V10L14 3z"
              fill="url(#hub-grad)"
              stroke="rgba(167,139,250,0.6)"
              stroke-width="1"
            />
            <defs>
              <linearGradient id="hub-grad" x1="4" y1="3" x2="24" y2="25">
                <stop stop-color="#3d5afe" />
                <stop offset="1" stop-color="#7c4dff" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span class="hub__brand-name">{{ PRODUCT_NAME }}</span>
      </div>
      <span class="hub__badge">
        <span class="hub__badge-dot" />
        Runs on your hardware
      </span>
    </header>

    <div class="hub__stage">
      <Transition name="hub-scene" mode="out-in">
        <div :key="activeScene.id" class="hub__scene">
          <p class="hub__scene-label">{{ activeScene.label }}</p>
          <h3 class="hub__scene-title">{{ activeScene.title }}</h3>

          <!-- Scene 1: All evidence converges -->
          <div v-if="activeScene.id === 'ingest'" class="hub__orbit" aria-hidden="true">
            <div class="hub__core">
              <span class="hub__core-ring hub__core-ring--1" />
              <span class="hub__core-ring hub__core-ring--2" />
              <span class="hub__core-icon">
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                  <path d="M14 8l5 3.5v5L14 20l-5-3.5v-5L14 8z" fill="rgba(255,255,255,0.15)" />
                </svg>
              </span>
            </div>
            <div
              v-for="(node, i) in evidenceNodes"
              :key="node.label"
              class="hub__node"
              :style="nodePosition(i, evidenceNodes.length)"
              :title="node.label"
            >
              <span class="hub__node-icon">
                <ScanTypeIcon :name="node.icon" />
              </span>
            </div>
          </div>

          <!-- Scene 2: Local processing -->
          <div v-else-if="activeScene.id === 'local'" class="hub__local" aria-hidden="true">
            <div class="hub__server">
              <div class="hub__server-rack">
                <span v-for="n in 4" :key="n" class="hub__server-slot" :style="{ '--i': n }" />
              </div>
              <div class="hub__server-shield" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l7 4v5c0 4-3 7.5-7 8-4-.5-7-4-7-8V7l7-4z" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
            <div class="hub__local-flow">
              <div class="hub__flow-item">
                <span class="hub__flow-dot hub__flow-dot--in" />
                Evidence in
              </div>
              <div class="hub__flow-line" />
              <div class="hub__flow-item hub__flow-item--highlight">
                <span class="hub__flow-dot hub__flow-dot--core" />
                Processed locally
              </div>
              <div class="hub__flow-line" />
              <div class="hub__flow-item">
                <span class="hub__flow-dot hub__flow-dot--out" />
                Zero cloud uploads
              </div>
            </div>
          </div>

          <!-- Scene 3: Intelligence out -->
          <div v-else class="hub__outputs" aria-hidden="true">
            <article class="hub__output hub__output--match">
              <span class="hub__output-tag">Biometrics</span>
              <p class="hub__output-headline">Match · 97.2%</p>
              <p class="hub__output-detail">Subject SUBJ-0847 identified</p>
            </article>
            <article class="hub__output hub__output--doc">
              <span class="hub__output-tag">Documents</span>
              <p class="hub__output-headline">"Named on p. 12"</p>
              <p class="hub__output-detail">Chargesheet FIR-4821 cited</p>
            </article>
            <article class="hub__output hub__output--graph">
              <span class="hub__output-tag">Intelligence</span>
              <div class="hub__mini-graph">
                <span /><span /><span />
                <svg viewBox="0 0 60 36">
                  <line x1="10" y1="24" x2="30" y2="10" />
                  <line x1="10" y1="24" x2="50" y2="28" />
                  <line x1="30" y1="10" x2="50" y2="28" />
                </svg>
              </div>
              <p class="hub__output-detail">6 linked identities found</p>
            </article>
          </div>
        </div>
      </Transition>
    </div>

    <footer class="hub__footer">
      <div class="hub__dots" role="tablist" aria-label="Product highlights">
        <button
          v-for="(scene, i) in scenes"
          :key="scene.id"
          type="button"
          class="hub__dot"
          :class="{ 'hub__dot--active': i === sceneIndex }"
          :aria-selected="i === sceneIndex"
          :aria-label="scene.label"
          @click="goToScene(i)"
        />
      </div>
      <p class="hub__tagline">{{ activeScene.tagline }}</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ScanTypeIcon from './ScanTypeIcon.vue'
import { PRODUCT_NAME } from '@/config.js'

const scenes = [
  {
    id: 'ingest',
    label: 'Step 1',
    title: 'Every evidence type, one intake',
    tagline: 'Face, prints, video, disk images, chargesheets — no tool switching.',
  },
  {
    id: 'local',
    label: 'Step 2',
    title: 'Analysis stays inside your building',
    tagline: 'Biometrics, search, and Lens run on infrastructure you control.',
  },
  {
    id: 'intel',
    label: 'Step 3',
    title: 'Intelligence your team can act on',
    tagline: 'Matches, cited document answers, and Molecules networks — with proof.',
  },
]

const evidenceNodes = [
  { icon: 'recognize', label: 'Face' },
  { icon: 'fingerprint', label: 'Prints' },
  { icon: 'audio', label: 'Voice' },
  { icon: 'document', label: 'Documents' },
  { icon: 'video', label: 'Video' },
  { icon: 'disk', label: 'Disk' },
]

const sceneIndex = ref(0)
const activeScene = computed(() => scenes[sceneIndex.value])

let interval = null

function nodePosition(i, total) {
  const angle = (i / total) * 360 - 90
  const rad = (angle * Math.PI) / 180
  const radius = 40
  const x = 50 + Math.cos(rad) * radius
  const y = 50 + Math.sin(rad) * radius
  return {
    '--x': `${x}%`,
    '--y': `${y}%`,
    '--delay': `${i * 0.15}s`,
  }
}

function goToScene(i) {
  sceneIndex.value = i
  resetInterval()
}

function nextScene() {
  sceneIndex.value = (sceneIndex.value + 1) % scenes.length
}

function resetInterval() {
  clearInterval(interval)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    interval = setInterval(nextScene, 4500)
  }
}

onMounted(resetInterval)
onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.hub {
  position: relative;
  border-radius: var(--radius-xl);
  background: linear-gradient(165deg, var(--surface-container) 0%, rgba(26, 29, 39, 0.95) 100%);
  border: 1px solid rgba(61, 90, 254, 0.22);
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset;
  overflow: hidden;
}

.hub__glow {
  position: absolute;
  top: -40%;
  right: -20%;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(124, 77, 255, 0.2), transparent 70%);
  pointer-events: none;
}

.hub__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--outline-variant);
  background: rgba(255, 255, 255, 0.02);
}

.hub__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.hub__brand-icon {
  display: flex;
  line-height: 0;
}

.hub__brand-name {
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.hub__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.6875rem;
  font-weight: 600;
  color: #34d399;
  padding: 0.25rem 0.625rem;
  border-radius: 999px;
  background: rgba(52, 211, 153, 0.1);
  border: 1px solid rgba(52, 211, 153, 0.25);
  white-space: nowrap;
}

.hub__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #34d399;
  animation: hub-pulse 2s ease infinite;
}

.hub__stage {
  padding: 1rem 1.25rem 0.75rem;
  min-height: 248px;
  overflow: hidden;
}

.hub__scene-label {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent-warm);
  margin-bottom: 0.25rem;
}

.hub__scene-title {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.875rem;
  line-height: 1.3;
}

/* Orbit scene */
.hub__orbit {
  position: relative;
  width: 156px;
  height: 156px;
  margin: 0 auto;
  flex-shrink: 0;
}

.hub__core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
}

.hub__core-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(61, 90, 254, 0.35);
  animation: hub-ring 3s ease-in-out infinite;
}

.hub__core-ring--2 {
  inset: -3px;
  animation-delay: 0.5s;
  border-color: rgba(124, 77, 255, 0.25);
}

.hub__core-icon {
  font-size: 1.125rem;
  color: var(--primary-container);
  z-index: 1;
  line-height: 0;
}

.hub__core-icon svg {
  width: 16px;
  height: 16px;
}

.hub__node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  transform: translate(-50%, -50%);
  animation: hub-node-in 0.6s ease both;
  animation-delay: var(--delay);
  z-index: 1;
}

.hub__node-icon {
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: var(--surface-container-high);
  border: 1px solid var(--outline-variant);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-container);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.hub__node-icon :deep(svg) {
  display: block;
  width: 15px;
  height: 15px;
}

/* Local scene */
.hub__local {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.5rem 0;
}

.hub__server {
  position: relative;
  flex-shrink: 0;
}

.hub__server-rack {
  width: 64px;
  padding: 8px;
  border-radius: 8px;
  background: var(--surface-container-high);
  border: 1px solid var(--outline-variant);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hub__server-slot {
  height: 6px;
  border-radius: 2px;
  background: rgba(61, 90, 254, 0.25);
  animation: hub-slot 1.5s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}

.hub__server-shield {
  position: absolute;
  bottom: -6px;
  right: -6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(52, 211, 153, 0.15);
  border: 1px solid rgba(52, 211, 153, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #34d399;
}

.hub__local-flow {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.hub__flow-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--on-surface-variant);
}

.hub__flow-item--highlight {
  color: var(--on-surface);
}

.hub__flow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.hub__flow-dot--in { background: var(--primary-container); }
.hub__flow-dot--core {
  background: #34d399;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.5);
  animation: hub-pulse 2s ease infinite;
}
.hub__flow-dot--out { background: var(--secondary); }

.hub__flow-line {
  width: 2px;
  height: 10px;
  margin-left: 3px;
  background: linear-gradient(to bottom, rgba(61, 90, 254, 0.4), rgba(52, 211, 153, 0.4));
}

/* Outputs scene */
.hub__outputs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.625rem;
}

.hub__output {
  padding: 0.75rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--outline-variant);
  animation: hub-output-in 0.5s ease both;
}

.hub__output:nth-child(2) { animation-delay: 0.1s; }
.hub__output:nth-child(3) { animation-delay: 0.2s; }

.hub__output--match {
  border-color: rgba(52, 211, 153, 0.3);
  background: rgba(52, 211, 153, 0.06);
}

.hub__output--doc {
  border-color: rgba(251, 191, 36, 0.25);
  background: rgba(251, 191, 36, 0.05);
}

.hub__output--graph {
  border-color: rgba(124, 77, 255, 0.25);
  background: rgba(124, 77, 255, 0.05);
}

.hub__output-tag {
  display: block;
  font-size: 0.5625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--on-surface-variant);
  margin-bottom: 0.375rem;
}

.hub__output-headline {
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.hub__output-detail {
  font-size: 0.625rem;
  color: var(--on-surface-variant);
  line-height: 1.4;
}

.hub__mini-graph {
  position: relative;
  height: 36px;
  margin-bottom: 0.375rem;
}

.hub__mini-graph span {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary-container);
}

.hub__mini-graph span:nth-child(1) { left: 4px; top: 18px; }
.hub__mini-graph span:nth-child(2) { left: 50%; top: 4px; transform: translateX(-50%); }
.hub__mini-graph span:nth-child(3) { right: 4px; top: 22px; }

.hub__mini-graph svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hub__mini-graph line {
  stroke: rgba(61, 90, 254, 0.45);
  stroke-width: 1.5;
}

.hub__footer {
  padding: 0.75rem 1.25rem 1.25rem;
  border-top: 1px solid var(--outline-variant);
  background: rgba(61, 90, 254, 0.04);
}

.hub__dots {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.625rem;
}

.hub__dot {
  width: 24px;
  height: 4px;
  border-radius: 2px;
  border: none;
  padding: 0;
  background: rgba(255, 255, 255, 0.12);
  cursor: pointer;
  transition: background 0.25s ease, width 0.25s ease;
}

.hub__dot--active {
  width: 32px;
  background: var(--primary-container);
}

.hub__tagline {
  font-size: 0.8125rem;
  color: var(--on-surface-variant);
  line-height: 1.5;
}

/* Transitions */
.hub-scene-enter-active,
.hub-scene-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.hub-scene-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.hub-scene-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@keyframes hub-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
}

@keyframes hub-ring {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.08); opacity: 1; }
}

@keyframes hub-node-in {
  from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}

@keyframes hub-slot {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; background: rgba(61, 90, 254, 0.6); }
}

@keyframes hub-output-in {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 480px) {
  .hub__orbit {
    width: 136px;
    height: 136px;
  }

  .hub__core {
    width: 32px;
    height: 32px;
  }

  .hub__node-icon {
    width: 24px;
    height: 24px;
  }

  .hub__node-icon :deep(svg) {
    width: 12px;
    height: 12px;
  }

  .hub__outputs {
    grid-template-columns: 1fr;
  }

  .hub__local {
    flex-direction: column;
    align-items: flex-start;
  }

  .hub__badge {
    font-size: 0.625rem;
    padding: 0.2rem 0.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hub__core-ring,
  .hub__server-slot,
  .hub__badge-dot,
  .hub__flow-dot--core {
    animation: none;
  }

  .hub-scene-enter-active,
  .hub-scene-leave-active {
    transition: none;
  }
}
</style>
