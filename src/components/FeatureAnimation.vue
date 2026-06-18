<template>
  <div
    class="feature-anim"
    :class="[
      `feature-anim--${type}`,
      `feature-anim--${size}`,
      { 'feature-anim--step': phase },
    ]"
    aria-hidden="true"
  >
    <!-- Register -->
    <div v-if="type === 'register'" class="anim anim-register">
      <template v-if="phase === 1">
        <div class="anim-register__photo anim-register__photo--solo" />
        <span class="anim-step-label">Upload</span>
      </template>
      <template v-else-if="phase === 2">
        <div class="anim-register__mesh">
          <span v-for="n in 9" :key="n" />
        </div>
        <span class="anim-step-label">Mapping</span>
      </template>
      <template v-else-if="phase === 3">
        <div class="anim-register__card">Saved ✓</div>
        <span class="anim-step-label">Indexed</span>
      </template>
      <template v-else>
        <div class="anim-register__photo" />
        <div class="anim-register__arrow">↓</div>
        <div class="anim-register__card">Saved ✓</div>
      </template>
    </div>

    <!-- Verify -->
    <div v-else-if="type === 'verify'" class="anim anim-verify">
      <template v-if="phase === 1">
        <div class="anim-verify__photo" />
        <div class="anim-verify__photo" />
      </template>
      <template v-else-if="phase === 2">
        <div class="anim-verify__photo" />
        <div class="anim-verify__vs">⇄</div>
        <div class="anim-verify__photo" />
      </template>
      <template v-else-if="phase === 3">
        <div class="anim-verify__score">94%</div>
        <div class="anim-verify__badge">Match</div>
      </template>
      <template v-else>
        <div class="anim-verify__photo" />
        <div class="anim-verify__vs">⇄</div>
        <div class="anim-verify__photo" />
        <div class="anim-verify__badge">Match</div>
      </template>
    </div>

    <!-- Recognize -->
    <div v-else-if="type === 'recognize'" class="anim anim-recognize">
      <template v-if="phase === 1">
        <div class="anim-recognize__probe anim-recognize__probe--solo" />
        <span class="anim-step-label">Probe</span>
      </template>
      <template v-else-if="phase === 2">
        <div class="anim-recognize__search">
          <div class="anim-recognize__probe anim-recognize__probe--small" />
          <div class="anim-recognize__ring" />
        </div>
        <span class="anim-step-label">Searching</span>
      </template>
      <template v-else-if="phase === 3">
        <div class="anim-recognize__results">
          <span /><span /><span />
        </div>
        <span class="anim-step-label">Ranked</span>
      </template>
      <template v-else>
        <div class="anim-recognize__probe" />
        <div class="anim-recognize__results">
          <span /><span /><span />
        </div>
      </template>
    </div>

    <!-- Prism (enroll · verify · search) -->
    <div v-else-if="type === 'prism'" class="anim anim-prism">
      <template v-if="phase === 1">
        <div class="anim-register__photo anim-register__photo--solo" />
        <span class="anim-step-label">Enroll</span>
      </template>
      <template v-else-if="phase === 2">
        <div class="anim-verify__score">94%</div>
        <div class="anim-verify__badge">Match</div>
        <span class="anim-step-label">Verify</span>
      </template>
      <template v-else-if="phase === 3">
        <div class="anim-recognize__results">
          <span /><span /><span />
        </div>
        <span class="anim-step-label">Ranked</span>
      </template>
      <template v-else>
        <div class="anim-recognize__probe" />
        <div class="anim-recognize__results">
          <span /><span /><span />
        </div>
      </template>
    </div>

    <!-- Live ID -->
    <div v-else-if="type === 'live'" class="anim anim-live">
      <template v-if="phase === 1">
        <div class="anim-live__connect">
          <div class="anim-live__cam-unit">
            <div class="anim-live__cam-body">
              <div class="anim-live__cam-lens" />
            </div>
            <span class="anim-live__rec" aria-hidden="true" />
          </div>
          <div class="anim-live__bridge">
            <span class="anim-live__bridge-track" />
            <span class="anim-live__bridge-dot anim-live__bridge-dot--1" />
            <span class="anim-live__bridge-dot anim-live__bridge-dot--2" />
          </div>
          <div class="anim-live__hub">
            <div class="anim-live__hub-screen">
              <div class="anim-live__hub-static">
                <span v-for="n in 3" :key="n" />
              </div>
            </div>
            <span class="anim-live__hub-tag">RTSP</span>
          </div>
        </div>
        <span class="anim-step-label">Stream linked</span>
      </template>
      <template v-else-if="phase === 2">
        <div class="anim-live__frame">
          <div class="anim-live__face" />
          <div class="anim-live__scan" />
        </div>
        <span class="anim-step-label">Detecting</span>
      </template>
      <template v-else-if="phase === 3">
        <div class="anim-live__frame">
          <div class="anim-live__face" />
          <div class="anim-live__ping" />
          <div class="anim-live__alert">Known</div>
        </div>
        <span class="anim-step-label">Alert</span>
      </template>
      <template v-else>
        <div class="anim-live__frame">
          <div class="anim-live__face" />
          <div class="anim-live__scan" />
          <div class="anim-live__ping" />
        </div>
      </template>
    </div>

    <!-- Analyze -->
    <div v-else-if="type === 'analyze'" class="anim anim-analyze">
      <template v-if="phase === 1">
        <div class="anim-analyze__photo anim-analyze__photo--solo" />
      </template>
      <template v-else-if="phase === 2">
        <div class="anim-analyze__photo anim-analyze__photo--scan">
          <div class="anim-analyze__scanline" />
        </div>
      </template>
      <template v-else-if="phase === 3">
        <div class="anim-analyze__tags">
          <span>Age 28–34</span>
          <span>Male</span>
        </div>
      </template>
      <template v-else>
        <div class="anim-analyze__photo" />
        <div class="anim-analyze__tags">
          <span>Age 28–34</span>
          <span>Male</span>
        </div>
      </template>
    </div>

    <!-- Fingerprint -->
    <div v-else-if="type === 'fingerprint'" class="anim anim-fingerprint">
      <template v-if="phase === 1">
        <div class="anim-fp__upload">
          <div class="anim-fp__pad">
            <div class="anim-fp__ridges">
              <span v-for="n in 5" :key="n" class="anim-fp__ridge" />
            </div>
          </div>
          <span class="anim-step-label">Scan / Upload</span>
        </div>
      </template>
      <template v-else-if="phase === 2">
        <div class="anim-fp__extract">
          <div class="anim-fp__pad anim-fp__pad--compact">
            <div class="anim-fp__ridges">
              <span v-for="n in 5" :key="n" class="anim-fp__ridge anim-fp__ridge--scan" />
              <span class="anim-fp__minutia anim-fp__minutia--1" />
              <span class="anim-fp__minutia anim-fp__minutia--2" />
              <span class="anim-fp__minutia anim-fp__minutia--3" />
              <span class="anim-fp__minutia anim-fp__minutia--4" />
            </div>
          </div>
          <div class="anim-fp__extract-arrow">→</div>
          <div class="anim-fp__template">
            <span v-for="n in 8" :key="n" class="anim-fp__tpl-node" :style="{ '--d': n }" />
          </div>
        </div>
        <span class="anim-step-label">Encoding</span>
      </template>
      <template v-else-if="phase === 3">
        <div class="anim-fp__result">
          <div class="anim-fp__pad anim-fp__pad--compact anim-fp__pad--matched">
            <div class="anim-fp__ridges">
              <span v-for="n in 5" :key="n" class="anim-fp__ridge anim-fp__ridge--matched" />
            </div>
          </div>
          <div class="anim-fp__result-badge">Match · 96%</div>
          <div class="anim-fp__result-ranks">
            <span /><span /><span />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="anim-fp__pad anim-fp__pad--full">
          <div class="anim-fp__ridges">
            <span v-for="n in 5" :key="n" class="anim-fp__ridge anim-fp__ridge--scan" />
          </div>
          <div class="anim-fp__scanline" />
        </div>
      </template>
    </div>

    <!-- Iris -->
    <div v-else-if="type === 'iris'" class="anim anim-iris">
      <template v-if="phase === 1">
        <div class="anim-iris__capture">
          <div class="anim-iris__eye">
            <div class="anim-iris__sclera">
              <span class="anim-iris__ring anim-iris__ring--1" />
              <span class="anim-iris__ring anim-iris__ring--2" />
              <span class="anim-iris__ring anim-iris__ring--3" />
              <span class="anim-iris__pupil" />
              <span class="anim-iris__scanline" />
            </div>
          </div>
          <span class="anim-step-label">Enrolling</span>
        </div>
      </template>
      <template v-else-if="phase === 2">
        <div class="anim-iris__verify">
          <div class="anim-iris__eye anim-iris__eye--sm">
            <div class="anim-iris__sclera">
              <span class="anim-iris__ring anim-iris__ring--1" />
              <span class="anim-iris__ring anim-iris__ring--2" />
              <span class="anim-iris__pupil" />
            </div>
          </div>
          <span class="anim-iris__vs">⇄</span>
          <div class="anim-iris__eye anim-iris__eye--sm">
            <div class="anim-iris__sclera">
              <span class="anim-iris__ring anim-iris__ring--1" />
              <span class="anim-iris__ring anim-iris__ring--2" />
              <span class="anim-iris__pupil" />
            </div>
          </div>
          <span class="anim-iris__score">98%</span>
        </div>
        <span class="anim-step-label">Verified</span>
      </template>
      <template v-else-if="phase === 3">
        <div class="anim-iris__search">
          <div class="anim-iris__eye anim-iris__eye--sm anim-iris__eye--probe">
            <div class="anim-iris__sclera">
              <span class="anim-iris__ring anim-iris__ring--1" />
              <span class="anim-iris__ring anim-iris__ring--2" />
              <span class="anim-iris__pupil" />
            </div>
          </div>
          <div class="anim-iris__ranks">
            <span /><span /><span />
          </div>
        </div>
        <span class="anim-step-label">Ranked</span>
      </template>
      <template v-else>
        <div class="anim-iris__eye">
          <div class="anim-iris__sclera">
            <span class="anim-iris__ring anim-iris__ring--1" />
            <span class="anim-iris__ring anim-iris__ring--2" />
            <span class="anim-iris__ring anim-iris__ring--3" />
            <span class="anim-iris__pupil" />
            <span class="anim-iris__scanline" />
          </div>
        </div>
        <span class="anim-iris__saved">Enrolled ✓</span>
      </template>
    </div>

    <!-- Audio -->
    <div v-else-if="type === 'audio'" class="anim anim-audio">
      <template v-if="phase === 1">
        <div class="anim-audio__file">
          <div class="anim-audio__file-badge">MP3</div>
          <div class="anim-audio__file-body">
            <span class="anim-audio__file-name">evidence.mp3</span>
            <div class="anim-audio__file-wave">
              <span
                v-for="n in 10"
                :key="n"
                class="anim-audio__file-bar"
                :style="{ '--h': (n % 5) + 2 }"
              />
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="phase === 2">
        <div class="anim-audio__extract">
          <div class="anim-audio__waveform">
            <span
              v-for="n in 14"
              :key="n"
              class="anim-audio__bar"
              :style="{ '--i': n, '--peak': ((n * 3) % 7) + 3 }"
            />
          </div>
          <div class="anim-audio__extract-arrow">→</div>
          <div class="anim-audio__signature">
            <span
              v-for="n in 6"
              :key="n"
              class="anim-audio__sig-line"
              :style="{ '--w': 40 + (n * 11) % 60 }"
            />
          </div>
        </div>
        <span class="anim-step-label">Extracting</span>
      </template>
      <template v-else-if="phase === 3">
        <div class="anim-audio__result">
          <div class="anim-audio__profile">
            <div class="anim-audio__avatar" />
            <span class="anim-audio__subject">SUBJ-1042</span>
          </div>
          <div class="anim-audio__match-badge">Match · 91%</div>
        </div>
      </template>
      <template v-else>
        <div class="anim-audio__waveform anim-audio__waveform--full">
          <span
            v-for="n in 18"
            :key="n"
            class="anim-audio__bar"
            :style="{ '--i': n, '--peak': ((n * 3) % 7) + 3 }"
          />
        </div>
      </template>
    </div>

    <!-- Video -->
    <div v-else-if="type === 'video'" class="anim anim-video">
      <template v-if="phase === 1">
        <div class="anim-video__strip">
          <div v-for="n in 5" :key="n" class="anim-video__frame" />
        </div>
        <div class="anim-video__play">▶</div>
      </template>
      <template v-else-if="phase === 2">
        <div class="anim-video__strip anim-video__strip--scan">
          <div v-for="n in 5" :key="n" class="anim-video__frame" />
          <div class="anim-video__scanner" />
        </div>
      </template>
      <template v-else-if="phase === 3">
        <div class="anim-video__strip">
          <div
            v-for="n in 5"
            :key="n"
            class="anim-video__frame"
            :class="{ 'anim-video__frame--hit': n === 3 }"
          />
        </div>
        <div class="anim-video__hit-label">Face found</div>
      </template>
      <template v-else>
        <div class="anim-video__strip">
          <div
            v-for="n in 5"
            :key="n"
            class="anim-video__frame"
            :class="{ 'anim-video__frame--hit': n === 3 }"
          />
        </div>
        <div class="anim-video__play">▶</div>
      </template>
    </div>

    <!-- Batch -->
    <div v-else-if="type === 'batch'" class="anim anim-batch">
      <div v-for="n in 6" :key="n" class="anim-batch__cell">
        <span
          v-if="(!phase && n <= 3) || (phase === 2 && n <= 3) || (phase === 3 && n <= 6)"
          class="anim-batch__dot"
        />
        <span v-if="phase === 3 && n <= 3" class="anim-batch__count">{{ n }}</span>
      </div>
    </div>

    <!-- Document / Chargesheet -->
    <div v-else-if="type === 'document'" class="anim anim-document">
      <template v-if="phase === 1">
        <div class="anim-document__page">
          <div class="anim-document__line" v-for="n in 4" :key="n" />
        </div>
      </template>
      <template v-else-if="phase === 2">
        <div class="anim-document__page">
          <div class="anim-document__line" v-for="n in 4" :key="n" />
          <div class="anim-document__highlight" />
        </div>
        <span class="anim-step-label">Indexing</span>
      </template>
      <template v-else-if="phase === 3">
        <div class="anim-document__search">🔍 Found on p.4</div>
      </template>
      <template v-else>
        <div class="anim-document__page">
          <div class="anim-document__line" v-for="n in 4" :key="n" />
          <div class="anim-document__highlight" />
        </div>
        <div class="anim-document__search">🔍 Found on p.4</div>
      </template>
    </div>

    <!-- ID card -->
    <div v-else-if="type === 'idcard'" class="anim anim-idcard">
      <div class="anim-idcard__card">
        <div class="anim-idcard__photo" />
        <div v-if="phase !== 1" class="anim-idcard__fields">
          <span /><span /><span />
        </div>
        <div v-if="phase === 3" class="anim-idcard__verified">✓</div>
      </div>
    </div>

    <!-- Lens -->
    <div v-else-if="type === 'lens'" class="anim anim-lens" :class="{ 'anim-lens--large': size === 'large' }">
      <!-- Hero: full conversation panel -->
      <template v-if="size === 'large' && !phase">
        <div class="anim-lens__panel">
          <div class="anim-lens__panel-header">
            <span class="anim-lens__panel-status" />
            <span class="anim-lens__panel-title">Obsedian Lens</span>
            <span class="anim-lens__panel-tag">Read-only</span>
          </div>
          <div class="anim-lens__panel-body">
            <div class="anim-lens__bubble anim-lens__bubble--user">
              {{ LENS_DEMO.questionHero }}
            </div>
            <div class="anim-lens__bubble anim-lens__bubble--assistant">
              <p class="anim-lens__answer-text">{{ LENS_DEMO.answerHero }}</p>
              <div class="anim-lens__cites">
                <span v-for="cite in LENS_DEMO.heroCites.slice(0, 3)" :key="cite">{{ cite }}</span>
              </div>
            </div>
          </div>
          <div class="anim-lens__panel-input">
            <span class="anim-lens__input-icon" aria-hidden="true" />
            <span class="anim-lens__input-text">{{ LENS_DEMO.placeholder }}</span>
          </div>
        </div>
      </template>

      <template v-else-if="phase === 1">
        <div class="anim-lens__ask-card">
          <div class="anim-lens__ask-input">
            <span class="anim-lens__ask-lens-icon" aria-hidden="true" />
            <span class="anim-lens__ask-text">{{ LENS_DEMO.questionStep }}</span>
            <span class="anim-lens__ask-caret" aria-hidden="true" />
          </div>
          <p class="anim-lens__ask-hint">Photos · video · documents · subjects · objects</p>
        </div>
      </template>
      <template v-else-if="phase === 2">
        <div class="anim-lens__search">
          <div class="anim-lens__search-chips">
            <span
              v-for="(mod, i) in LENS_DEMO.searchModalities"
              :key="mod"
              :style="{ '--i': i }"
            >{{ mod }}</span>
          </div>
          <div class="anim-lens__thinking">
            <span /><span /><span />
          </div>
        </div>
        <span class="anim-step-label">Cross-searching</span>
      </template>
      <template v-else-if="phase === 3">
        <div class="anim-lens__proof-card">
          <div class="anim-lens__proof-header">
            <span class="anim-lens__proof-icon" aria-hidden="true">✓</span>
            <span class="anim-lens__proof-title">11 cross-media matches</span>
          </div>
          <p class="anim-lens__proof-line">{{ LENS_DEMO.answerStep }}</p>
          <div class="anim-lens__proof-cites">
            <span v-for="cite in LENS_DEMO.stepCites" :key="cite">{{ cite }}</span>
          </div>
          <div class="anim-lens__proof-sources">
            <span /><span /><span />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="anim-lens__question">{{ LENS_DEMO.questionCompact }}</div>
        <div class="anim-lens__answer">{{ LENS_DEMO.answerCompact }}</div>
      </template>
    </div>

    <!-- Molecules -->
    <div v-else-if="type === 'graph'" class="anim anim-graph">
      <template v-if="phase === 1">
        <div class="anim-graph__node anim-graph__node--a anim-graph__node--solo" />
        <span class="anim-step-label">Data loaded</span>
      </template>
      <template v-else-if="phase === 2">
        <div class="anim-graph__node anim-graph__node--a" />
        <div class="anim-graph__node anim-graph__node--b" />
        <svg class="anim-graph__lines" viewBox="0 0 120 80">
          <line x1="30" y1="40" x2="60" y2="20" class="anim-graph__line" />
        </svg>
      </template>
      <template v-else-if="phase === 3">
        <div class="anim-graph__node anim-graph__node--a anim-graph__node--warm" />
        <div class="anim-graph__node anim-graph__node--b anim-graph__node--warm" />
        <div class="anim-graph__node anim-graph__node--c anim-graph__node--warm" />
        <svg class="anim-graph__lines" viewBox="0 0 120 80">
          <line x1="30" y1="40" x2="60" y2="20" class="anim-graph__line anim-graph__line--warm" />
          <line x1="30" y1="40" x2="90" y2="55" class="anim-graph__line anim-graph__line--warm anim-graph__line--2" />
          <line x1="60" y1="20" x2="90" y2="55" class="anim-graph__line anim-graph__line--warm anim-graph__line--3" />
        </svg>
      </template>
      <template v-else>
        <div class="anim-graph__node anim-graph__node--a" />
        <div class="anim-graph__node anim-graph__node--b" />
        <div class="anim-graph__node anim-graph__node--c" />
        <svg class="anim-graph__lines" viewBox="0 0 120 80">
          <line x1="30" y1="40" x2="60" y2="20" class="anim-graph__line" />
          <line x1="30" y1="40" x2="90" y2="55" class="anim-graph__line anim-graph__line--2" />
          <line x1="60" y1="20" x2="90" y2="55" class="anim-graph__line anim-graph__line--3" />
        </svg>
      </template>
    </div>

    <!-- Disk analysis -->
    <div v-else-if="type === 'disk'" class="anim anim-disk">
      <template v-if="phase === 1">
        <div class="anim-disk__drive">
          <div class="anim-disk__platter">
            <div class="anim-disk__hub" />
          </div>
          <span class="anim-disk__label">E01</span>
        </div>
        <span class="anim-step-label">Image loaded</span>
      </template>
      <template v-else-if="phase === 2">
        <div class="anim-disk__scan">
          <div class="anim-disk__tree">
            <span class="anim-disk__folder" />
            <span class="anim-disk__file anim-disk__file--1" />
            <span class="anim-disk__file anim-disk__file--2" />
            <span class="anim-disk__file anim-disk__file--3" />
          </div>
          <div class="anim-disk__progress">
            <div class="anim-disk__progress-bar" />
          </div>
        </div>
        <span class="anim-step-label">Cataloging</span>
      </template>
      <template v-else-if="phase === 3">
        <div class="anim-disk__findings">
          <div class="anim-disk__finding anim-disk__finding--hit">photos.zip</div>
          <div class="anim-disk__finding">report.pdf</div>
          <div class="anim-disk__finding anim-disk__finding--hit">chat.db</div>
        </div>
      </template>
      <template v-else>
        <div class="anim-disk__full">
          <div class="anim-disk__drive anim-disk__drive--small">
            <div class="anim-disk__platter">
              <div class="anim-disk__hub" />
            </div>
          </div>
          <div class="anim-disk__arrow">→</div>
          <div class="anim-disk__findings anim-disk__findings--compact">
            <div class="anim-disk__finding anim-disk__finding--hit">3 flagged</div>
            <div class="anim-disk__finding">1,284 files</div>
          </div>
        </div>
      </template>
    </div>

    <div v-else class="anim anim-fallback" />
  </div>
</template>

<script setup>
import { LENS_DEMO } from '@/content/lensExamples.js'

defineProps({
  type: { type: String, required: true },
  size: { type: String, default: 'compact' },
  phase: {
    type: Number,
    default: null,
    validator: (v) => v === null || [1, 2, 3].includes(v),
  },
})
</script>

<style scoped>
.feature-anim {
  height: 100px;
  border-radius: 10px;
  background: var(--surface-container-low);
  border: 1px solid var(--outline-variant);
  margin-bottom: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-anim--medium {
  height: 120px;
}

.feature-anim--large {
  height: 220px;
  border-radius: var(--radius-xl);
  margin-bottom: 0;
}

.feature-anim--large.feature-anim--lens {
  height: 300px;
  padding: 0;
  background: var(--surface-container);
  overflow: hidden;
}

.feature-anim--large.feature-anim--lens .anim-lens--large {
  transform: none;
  width: 100%;
  height: 100%;
  padding: 0;
}

.feature-anim--large .anim-lens--large {
  align-items: stretch;
}

.feature-anim--large .anim:not(.anim-lens--large) {
  transform: scale(1.35);
}

.feature-anim--medium .anim {
  transform: scale(1.1);
}

.anim {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Register */
.anim-register {
  flex-direction: column;
  gap: 4px;
  font-size: 0.625rem;
}

.anim-register__photo {
  width: 28px;
  height: 34px;
  border-radius: 4px;
  border: 1.5px dashed rgba(61, 90, 254, 0.5);
  animation: drop-in 2s ease infinite;
}

.anim-register__arrow {
  color: var(--primary-container);
  animation: bounce 2s ease infinite;
}

.anim-register__card {
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(52, 211, 153, 0.15);
  color: #34d399;
  font-weight: 600;
  animation: fade-up 2s ease infinite 0.6s both;
}

/* Verify */
.anim-verify {
  gap: 6px;
  flex-wrap: wrap;
  padding: 0 8px;
}

.anim-verify__photo {
  width: 24px;
  height: 30px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--outline-variant);
}

.anim-verify__vs {
  font-size: 0.625rem;
  color: var(--on-surface-variant);
  animation: spin-slow 3s linear infinite;
}

.anim-verify__badge {
  width: 100%;
  text-align: center;
  font-size: 0.625rem;
  font-weight: 700;
  color: #34d399;
  animation: pulse-text 2s ease infinite;
}

/* Recognize */
.anim-recognize {
  gap: 12px;
  padding: 0 12px;
}

.anim-prism {
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
}

.feature-anim--medium.feature-anim--step.feature-anim--prism .anim {
  transform: none;
}

.anim-recognize__probe {
  width: 32px;
  height: 38px;
  border-radius: 4px;
  background: rgba(61, 90, 254, 0.2);
  border: 1px solid var(--primary-container);
  flex-shrink: 0;
}

.anim-recognize__results {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.anim-recognize__results span {
  display: block;
  height: 8px;
  border-radius: 2px;
  background: var(--surface-container-high);
  animation: grow-bar 2s ease infinite;
}

.anim-recognize__results span:nth-child(1) { width: 48px; animation-delay: 0.2s; }
.anim-recognize__results span:nth-child(2) { width: 40px; animation-delay: 0.4s; }
.anim-recognize__results span:nth-child(3) { width: 32px; animation-delay: 0.6s; }

/* Live */
.anim-live {
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
}

.anim-live__connect {
  display: flex;
  align-items: center;
  gap: 8px;
}

.anim-live__cam-unit {
  position: relative;
  flex-shrink: 0;
}

.anim-live__cam-body {
  width: 30px;
  height: 22px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.08);
  border: 1.5px solid var(--outline-variant);
  display: flex;
  align-items: center;
  justify-content: center;
}

.anim-live__cam-lens {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1.5px solid var(--primary-container);
  background: rgba(61, 90, 254, 0.15);
  animation: pulse-lens 2s ease infinite;
}

.anim-live__rec {
  position: absolute;
  top: -3px;
  right: -3px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #ef4444;
  animation: blink-rec 1.2s ease infinite;
}

.anim-live__bridge {
  position: relative;
  width: 40px;
  height: 10px;
  flex-shrink: 0;
}

.anim-live__bridge-track {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  border-top: 1.5px dashed rgba(61, 90, 254, 0.45);
  transform: translateY(-50%);
}

.anim-live__bridge-dot {
  position: absolute;
  top: 50%;
  width: 4px;
  height: 4px;
  margin-top: -2px;
  border-radius: 50%;
  background: var(--primary-container);
  box-shadow: 0 0 6px rgba(61, 90, 254, 0.55);
  animation: stream-flow 1.8s ease-in-out infinite;
}

.anim-live__bridge-dot--2 {
  animation-delay: 0.65s;
}

.anim-live__hub {
  position: relative;
  flex-shrink: 0;
}

.anim-live__hub-screen {
  width: 34px;
  height: 26px;
  border-radius: 3px;
  border: 1.5px solid rgba(61, 90, 254, 0.35);
  background: rgba(61, 90, 254, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  animation: hub-glow 2s ease infinite;
}

.anim-live__hub-static {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 12px;
}

.anim-live__hub-static span {
  width: 3px;
  border-radius: 1px;
  background: var(--primary-container);
  animation: live-wave 1.5s ease infinite;
}

.anim-live__hub-static span:nth-child(1) { height: 6px; }
.anim-live__hub-static span:nth-child(2) { height: 10px; animation-delay: 0.2s; }
.anim-live__hub-static span:nth-child(3) { height: 7px; animation-delay: 0.4s; }

.anim-live__hub-tag {
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.4375rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--primary-container);
  white-space: nowrap;
}

.anim-live__frame {
  width: 80px;
  height: 56px;
  border-radius: 6px;
  border: 1px solid var(--outline-variant);
  position: relative;
  overflow: hidden;
}

.anim-live__face {
  position: absolute;
  width: 16px;
  height: 20px;
  border-radius: 50% 50% 40% 40%;
  background: rgba(255, 255, 255, 0.1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.anim-live__scan {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-container);
  animation: scan-v 2.5s ease-in-out infinite;
}

.anim-live__ping {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  animation: ping 1.5s ease infinite;
}

/* Analyze */
.anim-analyze {
  gap: 10px;
  padding: 0 10px;
}

.anim-analyze__photo {
  width: 36px;
  height: 44px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--outline-variant);
}

.anim-analyze__tags {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.anim-analyze__tags span {
  font-size: 0.5625rem;
  padding: 2px 6px;
  border-radius: 3px;
  background: var(--primary-container-dim);
  color: var(--primary-container);
  animation: fade-up 2s ease infinite;
}

.anim-analyze__tags span:nth-child(2) { animation-delay: 0.5s; }

/* Fingerprint */
.anim-fingerprint {
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
}

.anim-fp__pad {
  width: 54px;
  height: 62px;
  border-radius: 8px;
  border: 1.5px dashed rgba(61, 90, 254, 0.45);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.anim-fp__pad--compact {
  width: 46px;
  height: 54px;
}

.anim-fp__pad--full {
  border-style: solid;
  border-color: var(--outline-variant);
}

.anim-fp__pad--matched {
  border-color: rgba(52, 211, 153, 0.45);
  border-style: solid;
  background: rgba(52, 211, 153, 0.06);
}

.anim-fp__ridges {
  position: relative;
  width: 34px;
  height: 42px;
}

.anim-fp__ridge {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 6px;
  border: 1.5px solid rgba(61, 90, 254, 0.55);
  border-radius: 50%;
  background: transparent;
}

.anim-fp__ridge:nth-child(1) { top: 2px; width: 14px; }
.anim-fp__ridge:nth-child(2) { top: 10px; width: 22px; }
.anim-fp__ridge:nth-child(3) { top: 18px; width: 30px; }
.anim-fp__ridge:nth-child(4) { top: 28px; width: 24px; }
.anim-fp__ridge:nth-child(5) { top: 36px; width: 16px; }

.anim-fp__ridge--scan:nth-child(1) { animation: fp-scan 2s ease infinite; }
.anim-fp__ridge--scan:nth-child(2) { animation: fp-scan 2s ease infinite 0.1s; }
.anim-fp__ridge--scan:nth-child(3) { animation: fp-scan 2s ease infinite 0.2s; }
.anim-fp__ridge--scan:nth-child(4) { animation: fp-scan 2s ease infinite 0.3s; }
.anim-fp__ridge--scan:nth-child(5) { animation: fp-scan 2s ease infinite 0.4s; }

.anim-fp__ridge--matched {
  border-color: rgba(52, 211, 153, 0.65);
}

.anim-fp__scanline {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-container);
  animation: scan-v 2.5s ease-in-out infinite;
}

.anim-fp__upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.anim-fp__upload .anim-fp__pad {
  animation: drop-in 2s ease infinite;
}

.anim-fp__extract {
  display: flex;
  align-items: center;
  gap: 10px;
}

.anim-fp__extract-arrow {
  flex-shrink: 0;
  font-size: 0.875rem;
  color: var(--primary-container);
  animation: bounce 2s ease infinite;
}

.anim-fp__minutia {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #7c4dff;
  box-shadow: 0 0 6px rgba(124, 77, 255, 0.6);
  animation: pop-in 2s ease infinite;
}

.anim-fp__minutia--1 { left: 28%; top: 22%; animation-delay: 0.1s; }
.anim-fp__minutia--2 { left: 62%; top: 38%; animation-delay: 0.25s; }
.anim-fp__minutia--3 { left: 38%; top: 58%; animation-delay: 0.4s; }
.anim-fp__minutia--4 { left: 68%; top: 68%; animation-delay: 0.55s; }

.anim-fp__template {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  width: 28px;
  flex-shrink: 0;
}

.anim-fp__tpl-node {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(124, 77, 255, 0.55);
  justify-self: center;
  animation: pop-in 2s ease infinite;
  animation-delay: calc(var(--d) * 0.12s);
}

.anim-fp__result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.anim-fp__result-badge {
  font-size: 0.6875rem;
  font-weight: 700;
  color: #34d399;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(52, 211, 153, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.25);
  animation: pulse-text 2s ease infinite;
}

.anim-fp__result-ranks {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 72px;
}

.anim-fp__result-ranks span {
  display: block;
  height: 5px;
  border-radius: 2px;
  background: var(--surface-container-high);
  animation: grow-bar 2s ease infinite;
}

.anim-fp__result-ranks span:nth-child(1) { width: 80%; animation-delay: 0.1s; }
.anim-fp__result-ranks span:nth-child(2) { width: 58%; animation-delay: 0.25s; }
.anim-fp__result-ranks span:nth-child(3) { width: 36%; animation-delay: 0.4s; }

.feature-anim--medium .anim-fp__pad {
  width: 48px;
  height: 56px;
}

.feature-anim--medium .anim-fp__pad--compact {
  width: 42px;
  height: 50px;
}

.feature-anim--medium .anim-fp__extract {
  gap: 8px;
}

.feature-anim--medium .anim-fp__template {
  width: 24px;
  gap: 4px;
}

.feature-anim--medium .anim-fp__result-ranks {
  width: 64px;
}

.feature-anim--medium.feature-anim--step.feature-anim--fingerprint .anim {
  transform: none;
}

.feature-anim--medium.feature-anim--step .anim-fp__result {
  gap: 5px;
  max-width: 100%;
}

.feature-anim--medium.feature-anim--step .anim-fp__result .anim-fp__pad--compact {
  width: 38px;
  height: 44px;
}

.feature-anim--medium.feature-anim--step .anim-fp__result .anim-fp__ridges {
  width: 28px;
  height: 34px;
}

.feature-anim--medium.feature-anim--step .anim-fp__result .anim-fp__ridge:nth-child(1) { top: 1px; width: 12px; }
.feature-anim--medium.feature-anim--step .anim-fp__result .anim-fp__ridge:nth-child(2) { top: 8px; width: 18px; }
.feature-anim--medium.feature-anim--step .anim-fp__result .anim-fp__ridge:nth-child(3) { top: 15px; width: 24px; }
.feature-anim--medium.feature-anim--step .anim-fp__result .anim-fp__ridge:nth-child(4) { top: 23px; width: 20px; }
.feature-anim--medium.feature-anim--step .anim-fp__result .anim-fp__ridge:nth-child(5) { top: 30px; width: 14px; }

.feature-anim--medium.feature-anim--step .anim-fp__result-badge {
  font-size: 0.625rem;
  padding: 3px 8px;
}

.feature-anim--medium.feature-anim--step .anim-fp__result-ranks {
  width: 56px;
  gap: 3px;
}

.feature-anim--medium.feature-anim--step .anim-fp__result-ranks span {
  height: 4px;
  transform-origin: left center;
}

/* Iris */
.anim-iris {
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
}

.anim-iris__eye {
  width: 52px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.anim-iris__eye--sm {
  width: 36px;
  height: 26px;
}

.anim-iris__sclera {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1.5px solid var(--outline-variant);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.anim-iris__ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(34, 211, 238, 0.55);
}

.anim-iris__ring--1 {
  width: 70%;
  height: 70%;
  animation: iris-pulse 2s ease infinite;
}

.anim-iris__ring--2 {
  width: 50%;
  height: 50%;
  border-color: rgba(34, 211, 238, 0.75);
  animation: iris-pulse 2s ease infinite 0.15s;
}

.anim-iris__ring--3 {
  width: 32%;
  height: 32%;
  border-color: rgba(34, 211, 238, 0.45);
  animation: iris-pulse 2s ease infinite 0.3s;
}

.anim-iris__pupil {
  width: 22%;
  height: 22%;
  border-radius: 50%;
  background: #0f1117;
  box-shadow: 0 0 6px rgba(34, 211, 238, 0.35);
  z-index: 1;
}

.anim-iris__scanline {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: #22d3ee;
  box-shadow: 0 0 8px rgba(34, 211, 238, 0.6);
  animation: scan-v 2s ease-in-out infinite;
  z-index: 2;
}

.anim-iris__capture {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.anim-iris__capture .anim-iris__eye {
  animation: drop-in 2s ease infinite;
}

.anim-iris__verify {
  display: flex;
  align-items: center;
  gap: 6px;
}

.anim-iris__vs {
  font-size: 0.75rem;
  color: var(--primary-container);
  animation: spin-slow 3s linear infinite;
}

.anim-iris__score {
  font-size: 0.6875rem;
  font-weight: 700;
  color: #34d399;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(52, 211, 153, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.25);
  animation: pulse-text 2s ease infinite;
}

.anim-iris__search {
  display: flex;
  align-items: center;
  gap: 10px;
}

.anim-iris__eye--probe {
  flex-shrink: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(34, 211, 238, 0.25);
}

.anim-iris__ranks {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 64px;
}

.anim-iris__ranks span {
  display: block;
  height: 5px;
  border-radius: 2px;
  background: var(--surface-container-high);
  animation: grow-bar 2s ease infinite;
  transform-origin: left center;
}

.anim-iris__ranks span:nth-child(1) { width: 82%; animation-delay: 0.1s; }
.anim-iris__ranks span:nth-child(2) { width: 60%; animation-delay: 0.25s; }
.anim-iris__ranks span:nth-child(3) { width: 38%; animation-delay: 0.4s; }

.anim-iris__saved {
  font-size: 0.625rem;
  font-weight: 700;
  color: #34d399;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(52, 211, 153, 0.12);
  animation: fade-up 2s ease infinite 0.5s both;
}

.feature-anim--medium.feature-anim--step.feature-anim--iris .anim {
  transform: none;
}

.feature-anim--medium.feature-anim--step .anim-iris__eye {
  width: 44px;
  height: 30px;
}

.feature-anim--medium.feature-anim--step .anim-iris__eye--sm {
  width: 30px;
  height: 22px;
}

.feature-anim--medium.feature-anim--step .anim-iris__verify {
  gap: 4px;
}

.feature-anim--medium.feature-anim--step .anim-iris__score {
  font-size: 0.5625rem;
  padding: 1px 4px;
}

.feature-anim--medium.feature-anim--step .anim-iris__search {
  gap: 8px;
}

.feature-anim--medium.feature-anim--step .anim-iris__ranks {
  width: 52px;
  gap: 3px;
}

.feature-anim--medium.feature-anim--step .anim-iris__ranks span {
  height: 4px;
}

.feature-anim--step .anim-iris__verify,
.feature-anim--step .anim-iris__search {
  flex-wrap: nowrap;
}

/* Audio */
.anim-audio {
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}

.anim-audio__waveform {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  height: 44px;
}

.anim-audio__waveform--full {
  width: 100%;
}

.anim-audio__bar {
  width: 3px;
  height: calc(6px + var(--peak, 3) * 2px);
  background: var(--primary-container);
  border-radius: 2px;
  animation: audio-bar 1.2s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.06s);
}

.anim-audio__file {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1.5px dashed rgba(61, 90, 254, 0.45);
  animation: drop-in 2s ease infinite;
}

.anim-audio__file-badge {
  flex-shrink: 0;
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 4px 6px;
  border-radius: 4px;
  background: rgba(61, 90, 254, 0.2);
  color: var(--primary-container);
}

.anim-audio__file-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.anim-audio__file-name {
  font-size: 0.5625rem;
  font-weight: 600;
  color: var(--on-surface-variant);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.anim-audio__file-wave {
  display: flex;
  align-items: center;
  gap: 2px;
  height: 18px;
}

.anim-audio__file-bar {
  width: 3px;
  height: calc(var(--h) * 3px);
  border-radius: 1px;
  background: rgba(61, 90, 254, 0.45);
}

.anim-audio__extract {
  display: flex;
  align-items: center;
  gap: 10px;
}

.anim-audio__extract .anim-audio__waveform {
  height: 36px;
}

.anim-audio__extract-arrow {
  flex-shrink: 0;
  font-size: 0.875rem;
  color: var(--primary-container);
  animation: bounce 2s ease infinite;
}

.anim-audio__signature {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 32px;
  flex-shrink: 0;
}

.anim-audio__sig-line {
  display: block;
  height: 3px;
  width: calc(var(--w) * 1%);
  max-width: 100%;
  border-radius: 2px;
  background: rgba(124, 77, 255, 0.55);
  animation: fill-line 2s ease infinite;
}

.anim-audio__sig-line:nth-child(2) { animation-delay: 0.15s; }
.anim-audio__sig-line:nth-child(3) { animation-delay: 0.3s; }
.anim-audio__sig-line:nth-child(4) { animation-delay: 0.45s; }
.anim-audio__sig-line:nth-child(5) { animation-delay: 0.6s; }
.anim-audio__sig-line:nth-child(6) { animation-delay: 0.75s; }

.anim-audio__result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.anim-audio__profile {
  display: flex;
  align-items: center;
  gap: 8px;
}

.anim-audio__avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(61, 90, 254, 0.2);
  border: 1.5px solid rgba(61, 90, 254, 0.5);
  position: relative;
}

.anim-audio__avatar::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50% 50% 40% 40%;
  background: rgba(255, 255, 255, 0.15);
}

.anim-audio__subject {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--on-surface-variant);
}

.anim-audio__match-badge {
  font-size: 0.6875rem;
  font-weight: 700;
  color: #34d399;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(52, 211, 153, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.25);
  animation: pulse-text 2s ease infinite;
}

.anim-audio__bar {
  transform-origin: center center;
}

.feature-anim--step .anim-audio__extract,
.feature-anim--step .anim-fp__extract {
  flex-wrap: nowrap;
}

.feature-anim--medium .anim-audio__file {
  padding: 8px 10px;
}

.feature-anim--medium .anim-audio__extract {
  gap: 8px;
}

.feature-anim--medium .anim-audio__extract .anim-audio__waveform {
  height: 32px;
}

.feature-anim--medium .anim-audio__bar {
  width: 2px;
}

.feature-anim--medium .anim-audio__signature {
  width: 26px;
}

/* Video */
.anim-video {
  flex-direction: column;
  gap: 4px;
}

.anim-video__strip {
  display: flex;
  gap: 3px;
}

.anim-video__frame {
  width: 14px;
  height: 20px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--outline-variant);
}

.anim-video__frame--hit {
  border-color: #34d399;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.4);
  animation: pulse-border 1.5s ease infinite;
}

.anim-video__play {
  font-size: 0.5rem;
  color: var(--on-surface-variant);
}

/* Disk */
.anim-disk {
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
}

.anim-disk__drive {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.anim-disk__drive--small {
  transform: scale(0.85);
}

.anim-disk__platter {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid rgba(61, 90, 254, 0.55);
  background: rgba(61, 90, 254, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: spin-slow 8s linear infinite;
}

.anim-disk__hub {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--primary-container);
}

.anim-disk__label {
  font-size: 0.5625rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--primary-container);
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(61, 90, 254, 0.15);
}

.anim-disk__scan {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.anim-disk__tree {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 72px;
}

.anim-disk__folder {
  display: block;
  height: 8px;
  width: 56%;
  border-radius: 2px;
  background: rgba(251, 191, 36, 0.35);
}

.anim-disk__file {
  display: block;
  height: 5px;
  border-radius: 2px;
  background: var(--surface-container-high);
  animation: grow-bar 2s ease infinite;
}

.anim-disk__file--1 { width: 88%; margin-left: 8px; animation-delay: 0.1s; }
.anim-disk__file--2 { width: 72%; margin-left: 8px; animation-delay: 0.25s; }
.anim-disk__file--3 { width: 64%; margin-left: 8px; animation-delay: 0.4s; }

.anim-disk__progress {
  width: 80px;
  height: 4px;
  border-radius: 2px;
  background: var(--surface-container-high);
  overflow: hidden;
}

.anim-disk__progress-bar {
  height: 100%;
  width: 35%;
  border-radius: 2px;
  background: var(--primary-container);
  animation: disk-progress 2s ease-in-out infinite;
}

.anim-disk__findings {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 88px;
}

.anim-disk__findings--compact {
  width: 72px;
}

.anim-disk__finding {
  font-size: 0.5rem;
  font-weight: 600;
  padding: 3px 6px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--outline-variant);
  color: var(--on-surface-variant);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.anim-disk__finding--hit {
  color: #34d399;
  border-color: rgba(52, 211, 153, 0.35);
  background: rgba(52, 211, 153, 0.1);
  animation: pulse-text 2s ease infinite;
}

.anim-disk__full {
  display: flex;
  align-items: center;
  gap: 10px;
}

.anim-disk__arrow {
  font-size: 0.875rem;
  color: var(--primary-container);
  animation: bounce 2s ease infinite;
}

.feature-anim--medium .anim-disk__findings {
  width: 80px;
}

.feature-anim--medium .anim-disk__tree {
  width: 64px;
}

/* Batch */
.anim-batch {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  padding: 12px;
  width: 80px;
}

.anim-batch__cell {
  aspect-ratio: 1;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--outline-variant);
  position: relative;
}

.anim-batch__dot {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary-container);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pop-in 2s ease infinite;
}

.anim-batch__cell:nth-child(2) .anim-batch__dot { animation-delay: 0.2s; }
.anim-batch__cell:nth-child(3) .anim-batch__dot { animation-delay: 0.4s; }

/* Document */
.anim-document {
  flex-direction: column;
  gap: 4px;
}

.anim-document__page {
  width: 44px;
  height: 52px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--outline-variant);
  padding: 6px;
  position: relative;
}

.anim-document__line {
  height: 3px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 1px;
  margin-bottom: 4px;
}

.anim-document__highlight {
  position: absolute;
  left: 6px;
  right: 6px;
  top: 22px;
  height: 8px;
  background: rgba(251, 191, 36, 0.25);
  border-radius: 2px;
  animation: highlight-pulse 2s ease infinite;
}

.anim-document__search {
  font-size: 0.5625rem;
  color: var(--accent-warm);
  font-weight: 600;
}

/* ID card */
.anim-idcard__card {
  width: 72px;
  height: 46px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--outline-variant);
  display: flex;
  padding: 6px;
  gap: 6px;
}

.anim-idcard__photo {
  width: 18px;
  height: 22px;
  border-radius: 2px;
  background: rgba(61, 90, 254, 0.2);
  flex-shrink: 0;
}

.anim-idcard__fields {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
}

.anim-idcard__fields span {
  height: 4px;
  border-radius: 1px;
  background: rgba(255, 255, 255, 0.1);
  animation: fill-line 2s ease infinite;
}

.anim-idcard__fields span:nth-child(1) { width: 100%; }
.anim-idcard__fields span:nth-child(2) { width: 80%; animation-delay: 0.2s; }
.anim-idcard__fields span:nth-child(3) { width: 60%; animation-delay: 0.4s; }

/* Lens */
.anim-lens {
  flex-direction: column;
  gap: 6px;
  padding: 0 12px;
  width: 100%;
}

.anim-lens--large {
  padding: 0;
  gap: 0;
}

.anim-lens__panel {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: calc(var(--radius-xl) - 2px);
  overflow: hidden;
  background: var(--surface-container-high);
}

.anim-lens__panel-header {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--outline-variant);
  background: rgba(255, 255, 255, 0.02);
}

.anim-lens__panel-status {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.5);
  animation: hub-pulse 2s ease infinite;
  flex-shrink: 0;
}

.anim-lens__panel-title {
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  flex: 1;
}

.anim-lens__panel-tag {
  font-size: 0.5625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--on-surface-variant);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--outline-variant);
}

.anim-lens__panel-body {
  flex: 1 1 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem 1rem 0.75rem;
  overflow: hidden;
}

.feature-anim--large.feature-anim--lens .anim-lens__panel-header {
  flex-shrink: 0;
  padding: 0.5rem 0.875rem;
}

.feature-anim--large.feature-anim--lens .anim-lens__panel-body {
  gap: 0.5rem;
  padding: 0.625rem 0.875rem 0.5rem;
}

.feature-anim--large.feature-anim--lens .anim-lens__bubble {
  padding: 0.5rem 0.625rem;
}

.feature-anim--large.feature-anim--lens .anim-lens__bubble--user {
  font-size: 0.6875rem;
  line-height: 1.4;
  -webkit-line-clamp: 2;
}

.feature-anim--large.feature-anim--lens .anim-lens__bubble--assistant {
  flex-shrink: 1;
  min-height: 0;
}

.feature-anim--large.feature-anim--lens .anim-lens__answer-text {
  font-size: 0.75rem;
  line-height: 1.4;
  margin-bottom: 0.375rem;
  -webkit-line-clamp: 2;
}

.feature-anim--large.feature-anim--lens .anim-lens__cites {
  gap: 0.25rem;
  flex-wrap: nowrap;
  overflow: hidden;
}

.feature-anim--large.feature-anim--lens .anim-lens__cites span {
  font-size: 0.5625rem;
  padding: 0.15rem 0.375rem;
  white-space: nowrap;
  flex-shrink: 0;
}

.feature-anim--large.feature-anim--lens .anim-lens__panel-input {
  flex-shrink: 0;
  margin: 0 0.625rem 0.625rem;
  padding: 0.5rem 0.75rem;
}

.feature-anim--large.feature-anim--lens .anim-lens__input-text {
  font-size: 0.6875rem;
}

.anim-lens__bubble {
  max-width: 92%;
  border-radius: 12px;
  padding: 0.75rem 0.875rem;
  line-height: 1.45;
  animation: fade-up 0.6s ease both;
}

.anim-lens__bubble--user {
  align-self: flex-end;
  font-size: 0.75rem;
  color: var(--on-surface);
  background: rgba(61, 90, 254, 0.18);
  border: 1px solid rgba(61, 90, 254, 0.3);
  border-bottom-right-radius: 4px;
  animation-delay: 0.15s;
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-width: 0;
}

.anim-lens__bubble--assistant {
  align-self: flex-start;
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  border-bottom-left-radius: 4px;
  animation-delay: 0.45s;
  min-width: 0;
  overflow: hidden;
}

.anim-lens__answer-text {
  font-size: 0.8125rem;
  color: var(--on-surface);
  margin-bottom: 0.625rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.anim-lens__cites {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.anim-lens__cites span {
  font-size: 0.625rem;
  font-weight: 700;
  color: var(--accent-warm);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: rgba(251, 191, 36, 0.12);
  border: 1px solid rgba(251, 191, 36, 0.25);
  animation: fade-up 0.5s ease both;
}

.anim-lens__cites span:nth-child(2) { animation-delay: 0.65s; }
.anim-lens__cites span:nth-child(3) { animation-delay: 0.8s; }

.anim-lens__panel-input {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin: 0 0.75rem 0.75rem;
  padding: 0.625rem 0.875rem;
  border-radius: 10px;
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
}

.anim-lens__input-icon {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1.5px solid rgba(61, 90, 254, 0.55);
  flex-shrink: 0;
  position: relative;
}

.anim-lens__input-icon::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: rgba(61, 90, 254, 0.35);
}

.anim-lens__input-text {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex: 1;
}

.anim-lens__question {
  font-size: 0.5625rem;
  padding: 6px 8px;
  border-radius: 8px 8px 8px 2px;
  background: var(--surface-container-high);
  align-self: flex-start;
  max-width: 95%;
  line-height: 1.45;
  animation: fade-up 2s ease infinite;
}

.anim-lens__answer {
  font-size: 0.5625rem;
  padding: 4px 8px;
  border-radius: 8px 8px 2px 8px;
  background: var(--primary-container-dim);
  color: var(--primary-container);
  align-self: flex-end;
  animation: fade-up 3s ease infinite 1s both;
}

/* Graph */
.anim-graph {
  width: 120px;
  height: 80px;
}

.anim-graph__node {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary-container);
  z-index: 1;
}

.anim-graph__node--a { left: 24px; top: 32px; animation: node-pulse 2s ease infinite; }
.anim-graph__node--b { left: 54px; top: 12px; animation: node-pulse 2s ease infinite 0.3s; }
.anim-graph__node--c { left: 84px; top: 47px; animation: node-pulse 2s ease infinite 0.6s; }

.anim-graph__lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.anim-graph__line {
  stroke: rgba(61, 90, 254, 0.5);
  stroke-width: 1.5;
  stroke-dasharray: 40;
  stroke-dashoffset: 40;
  animation: draw-line 2s ease infinite;
}

.anim-graph__line--2 { animation-delay: 0.3s; }
.anim-graph__line--3 { animation-delay: 0.6s; }

.anim-graph__node--warm {
  background: var(--accent-warm);
  box-shadow: 0 0 0 2px rgba(251, 191, 36, 0.2), 0 0 10px rgba(251, 191, 36, 0.35);
}

.anim-graph__line--warm {
  stroke: rgba(251, 191, 36, 0.55);
}

.feature-anim--step .anim {
  flex-direction: column;
  gap: 6px;
}

.anim-step-label {
  font-size: 0.5625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--on-surface-variant);
}

/* Register phase */
.anim-register__photo--solo {
  width: 36px;
  height: 44px;
  animation: drop-in 2s ease infinite;
}

.anim-register__mesh {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
}

.anim-register__mesh span {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: rgba(61, 90, 254, 0.35);
  animation: mesh-pulse 1.5s ease infinite;
}

.anim-register__mesh span:nth-child(2) { animation-delay: 0.1s; }
.anim-register__mesh span:nth-child(3) { animation-delay: 0.2s; }
.anim-register__mesh span:nth-child(4) { animation-delay: 0.15s; }
.anim-register__mesh span:nth-child(5) { animation-delay: 0.25s; }
.anim-register__mesh span:nth-child(6) { animation-delay: 0.35s; }

/* Verify phase */
.anim-verify__score {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-container);
  line-height: 1;
}

/* Recognize phase */
.anim-recognize__probe--solo {
  width: 40px;
  height: 48px;
}

.anim-recognize__probe--small {
  width: 24px;
  height: 28px;
}

.anim-recognize__search {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.anim-recognize__ring {
  position: absolute;
  width: 48px;
  height: 48px;
  border: 2px solid rgba(61, 90, 254, 0.4);
  border-radius: 50%;
  animation: ring-expand 2s ease infinite;
}

/* Live phase */
.anim-live__alert {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.5rem;
  font-weight: 700;
  color: #34d399;
  background: rgba(52, 211, 153, 0.15);
  padding: 1px 6px;
  border-radius: 3px;
}

/* Analyze phase */
.anim-analyze__photo--solo,
.anim-analyze__photo--scan {
  width: 44px;
  height: 52px;
  position: relative;
}

.anim-analyze__photo--scan {
  overflow: hidden;
}

.anim-analyze__scanline {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-container);
  animation: scan-v 2s ease-in-out infinite;
}

/* Video phase */
.anim-video__strip--scan {
  position: relative;
}

.anim-video__scanner {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--primary-container);
  animation: scan-h 2s ease-in-out infinite;
}

.anim-video__hit-label {
  font-size: 0.5625rem;
  font-weight: 600;
  color: #34d399;
}

/* Batch phase */
.anim-batch__count {
  position: absolute;
  bottom: 2px;
  right: 2px;
  font-size: 0.4375rem;
  font-weight: 700;
  color: var(--primary-container);
}

/* ID card phase */
.anim-idcard__card {
  position: relative;
}

.anim-idcard__verified {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #34d399;
  color: white;
  font-size: 0.625rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Lens phase */
.anim-lens__thinking {
  display: flex;
  gap: 4px;
}

.anim-lens__thinking span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary-container);
  animation: think-dot 1.2s ease infinite;
}

.anim-lens__thinking span:nth-child(2) { animation-delay: 0.2s; }
.anim-lens__thinking span:nth-child(3) { animation-delay: 0.4s; }

.anim-lens__search {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
}

.anim-lens__search-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.3rem;
  max-width: 200px;
}

.anim-lens__search-chips span {
  font-size: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  background: rgba(61, 90, 254, 0.12);
  border: 1px solid rgba(61, 90, 254, 0.25);
  color: var(--primary-container);
  animation: fade-up 0.4s ease both;
  animation-delay: calc(var(--i) * 0.08s);
}

.anim-lens__ask-card {
  width: 100%;
  max-width: 220px;
  padding: 0.75rem;
  border-radius: 10px;
  background: var(--surface-container);
  border: 1px solid rgba(61, 90, 254, 0.3);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  animation: fade-up 0.5s ease both;
}

.anim-lens__ask-input {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.5rem 0.625rem;
  border-radius: 8px;
  background: var(--surface-container-high);
  border: 1px solid var(--outline-variant);
}

.anim-lens__ask-lens-icon {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1.5px solid rgba(61, 90, 254, 0.55);
  flex-shrink: 0;
  position: relative;
  margin-top: 1px;
}

.anim-lens__ask-lens-icon::after {
  content: '';
  position: absolute;
  inset: 2.5px;
  border-radius: 50%;
  background: rgba(61, 90, 254, 0.4);
}

.anim-lens__ask-text {
  flex: 1;
  min-width: 0;
  font-size: 0.625rem;
  font-weight: 600;
  color: var(--on-surface);
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.anim-lens__ask-caret {
  width: 2px;
  height: 12px;
  background: var(--primary-container);
  flex-shrink: 0;
  animation: lens-blink 1s step-end infinite;
}

.anim-lens__ask-hint {
  font-size: 0.5625rem;
  color: var(--on-surface-variant);
  line-height: 1.4;
  padding-left: 0.125rem;
}

.feature-anim--medium .anim-lens__ask-card {
  max-width: 100%;
  padding: 0.625rem;
}

.feature-anim--medium .anim-lens__ask-text {
  font-size: 0.5625rem;
}

.feature-anim--medium.feature-anim--step.feature-anim--lens .anim {
  transform: none;
}

.feature-anim--medium.feature-anim--step .anim-lens__ask-card {
  padding: 0.5rem;
  gap: 0;
}

.feature-anim--medium.feature-anim--step .anim-lens__ask-input {
  padding: 0.375rem 0.5rem;
}

.feature-anim--medium.feature-anim--step .anim-lens__ask-text {
  font-size: 0.5rem;
  -webkit-line-clamp: 2;
}

.feature-anim--medium.feature-anim--step .anim-lens__ask-hint {
  display: none;
}

.feature-anim--medium.feature-anim--step .anim-lens__ask-caret {
  height: 10px;
}

.anim-lens__proof-card {
  width: 100%;
  max-width: 220px;
  padding: 0.75rem;
  border-radius: 10px;
  background: var(--surface-container);
  border: 1px solid rgba(52, 211, 153, 0.3);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  animation: fade-up 0.5s ease both;
}

.anim-lens__proof-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.anim-lens__proof-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(52, 211, 153, 0.15);
  border: 1px solid rgba(52, 211, 153, 0.35);
  color: #34d399;
  font-size: 0.6875rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.anim-lens__proof-title {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--on-surface);
  line-height: 1.3;
}

.anim-lens__proof-line {
  font-size: 0.625rem;
  color: var(--on-surface-variant);
  line-height: 1.4;
}

.anim-lens__proof-cites {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.anim-lens__proof-cites span {
  font-size: 0.5625rem;
  font-weight: 700;
  color: var(--accent-warm);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.22);
  animation: fade-up 0.4s ease both;
}

.anim-lens__proof-cites span:nth-child(2) { animation-delay: 0.15s; }
.anim-lens__proof-cites span:nth-child(3) { animation-delay: 0.3s; }

.anim-lens__proof-sources {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 0.125rem;
}

.anim-lens__proof-sources span {
  display: block;
  height: 5px;
  border-radius: 2px;
  background: var(--surface-container-high);
  animation: grow-bar 1.5s ease infinite;
}

.anim-lens__proof-sources span:nth-child(1) { width: 88%; animation-delay: 0.1s; }
.anim-lens__proof-sources span:nth-child(2) { width: 72%; animation-delay: 0.25s; }
.anim-lens__proof-sources span:nth-child(3) { width: 56%; animation-delay: 0.4s; }

.feature-anim--medium .anim-lens__proof-card {
  max-width: 100%;
  padding: 0.625rem;
}

.feature-anim--medium .anim-lens__proof-title {
  font-size: 0.6875rem;
}

.feature-anim--medium .anim-lens__proof-line {
  font-size: 0.5625rem;
}

/* Graph phase */
.anim-graph__node--solo {
  position: relative;
  left: auto;
  top: auto;
}

.feature-anim--step .anim-graph {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

/* Keyframes */
@keyframes lens-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes hub-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
}

@keyframes drop-in {
  0%, 100% { transform: translateY(-8px); opacity: 0.5; }
  30%, 70% { transform: translateY(0); opacity: 1; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(3px); }
}

@keyframes fade-up {
  0%, 40% { opacity: 0; transform: translateY(6px); }
  60%, 100% { opacity: 1; transform: translateY(0); }
}

@keyframes spin-slow {
  to { transform: rotate(360deg); }
}

@keyframes pulse-text {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@keyframes stream-flow {
  0% { left: 0; opacity: 0; }
  15% { opacity: 1; }
  85% { opacity: 1; }
  100% { left: calc(100% - 4px); opacity: 0; }
}

@keyframes blink-rec {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
}

@keyframes pulse-lens {
  0%, 100% { box-shadow: 0 0 0 0 rgba(61, 90, 254, 0.35); }
  50% { box-shadow: 0 0 0 4px rgba(61, 90, 254, 0); }
}

@keyframes live-wave {
  0%, 100% { transform: scaleY(0.45); opacity: 0.45; }
  50% { transform: scaleY(1); opacity: 1; }
}

@keyframes hub-glow {
  0%, 100% { border-color: rgba(61, 90, 254, 0.35); }
  50% { border-color: rgba(61, 90, 254, 0.65); }
}

@keyframes grow-bar {
  0%, 30% { opacity: 0; transform: scaleX(0); }
  50%, 100% { opacity: 1; transform: scaleX(1); }
}

@keyframes scan-v {
  0%, 100% { top: 0; }
  50% { top: calc(100% - 2px); }
}

@keyframes ping {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}

@keyframes fp-scan {
  0%, 100% { border-color: rgba(61, 90, 254, 0.3); }
  50% { border-color: rgba(61, 90, 254, 0.9); }
}

@keyframes audio-bar {
  0%, 100% { transform: scaleY(0.45); opacity: 0.55; }
  50% { transform: scaleY(1); opacity: 1; }
}

@keyframes pulse-border {
  0%, 100% { box-shadow: 0 0 4px rgba(52, 211, 153, 0.3); }
  50% { box-shadow: 0 0 12px rgba(52, 211, 153, 0.6); }
}

@keyframes pop-in {
  0%, 50% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  70%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}

@keyframes highlight-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@keyframes fill-line {
  0%, 40% { opacity: 0.3; }
  60%, 100% { opacity: 1; }
}

@keyframes draw-line {
  to { stroke-dashoffset: 0; }
}

@keyframes iris-pulse {
  0%, 100% { opacity: 0.5; transform: scale(0.95); }
  50% { opacity: 1; transform: scale(1); }
}

@keyframes node-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.25); }
}

@keyframes mesh-pulse {
  0%, 100% { opacity: 0.4; transform: scale(0.9); }
  50% { opacity: 1; transform: scale(1); }
}

@keyframes ring-expand {
  0%, 100% { transform: scale(0.8); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 1; }
}

@keyframes scan-h {
  0%, 100% { left: 0; }
  50% { left: calc(100% - 3px); }
}

@keyframes think-dot {
  0%, 100% { opacity: 0.3; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-4px); }
}

@keyframes disk-progress {
  0%, 100% { transform: translateX(-100%); width: 35%; }
  50% { transform: translateX(120%); width: 45%; }
}

@media (prefers-reduced-motion: reduce) {
  .feature-anim * {
    animation: none !important;
  }
}
</style>
