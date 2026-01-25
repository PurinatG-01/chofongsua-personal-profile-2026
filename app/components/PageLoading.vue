<template>
  <Transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-main)]"
    >
      <div class="w-full max-w-md px-6 space-y-4">
        <div class="relative h-8 border border-border overflow-hidden">
          <!-- Progress bar -->
          <div
            class="absolute inset-y-0 left-0 bg-white transition-all duration-150"
            :style="{ width: `${progress}%` }"
          />

          <!-- Percentage text (masked) -->
          <div
            class="absolute inset-0 flex items-center justify-center font-medium"
            style="mix-blend-mode: difference"
          >
            <span class="text-white">
              {{ progress }}%
            </span>
          </div>
        </div>

        <p class="text-center text-muted text-xs">
          loading route…
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const visible = ref(false)
const progress = ref(0)

let timer: ReturnType<typeof setInterval> | null = null
let startTime = 0

const MIN_DURATION = 600 // ms

function start() {
  visible.value = true
  progress.value = 0
  startTime = Date.now()

  timer = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.floor(Math.random() * 6) + 2
    }
  }, 120)
}

function finish() {
  const elapsed = Date.now() - startTime
  const remaining = Math.max(MIN_DURATION - elapsed, 0)

  progress.value = 100

  setTimeout(() => {
    visible.value = false
    progress.value = 0
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }, remaining)
}

defineExpose({ start, finish })

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
