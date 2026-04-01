<template>
  <div class="lang-switch" @click.stop>
    <button class="lang-btn" @click="toggle">
      <span class="lang-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      </span>
      <span class="lang-label">{{ currentLabel }}</span>
      <span class="lang-arrow" :class="{ open: isOpen }">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </span>
    </button>

    <div v-if="isOpen" class="lang-dropdown">
      <button
        v-for="item in options"
        :key="item.lang"
        class="lang-option"
        :class="{ active: item.lang === currentLang }"
        @click="switchTo(item)"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vitepress'

const route = useRoute()
const router = useRouter()

const isOpen = ref(false)

const currentLang = computed(() => {
  return route.path.startsWith('/en/') ? 'en' : 'zh'
})

const currentLabel = computed(() => {
  return currentLang.value === 'en' ? 'English' : '简体中文'
})

const options = [
  { lang: 'zh', label: '简体中文', path: '/zh/nameRules/' },
  { lang: 'en', label: 'English', path: '/en/nameRules/' },
]

function toggle() {
  isOpen.value = !isOpen.value
}

function switchTo(item: { lang: string; label: string; path: string }) {
  isOpen.value = false
  router.go(item.path)
}

function handleClickOutside() {
  isOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.lang-switch {
  position: relative;
  display: flex;
  align-items: center;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-1);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.lang-btn:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.lang-icon {
  display: flex;
  align-items: center;
  opacity: 0.7;
}

.lang-label {
  font-weight: 500;
}

.lang-arrow {
  display: flex;
  align-items: center;
  transition: transform 0.2s;
}

.lang-arrow.open {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 120px;
  background: var(--vp-c-bg-elevated);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 4px;
  z-index: 100;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.lang-option {
  display: block;
  width: 100%;
  padding: 7px 12px;
  text-align: left;
  background: transparent;
  border: none;
  border-radius: 5px;
  color: var(--vp-c-text-1);
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s;
}

.lang-option:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
}

.lang-option.active {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  background: var(--vp-c-brand-soft);
}
</style>
