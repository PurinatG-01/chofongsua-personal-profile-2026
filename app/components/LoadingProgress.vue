<template>
  <div class="w-full max-w-md mx-auto">
    <div class="relative h-10 border border-border overflow-hidden">
      <!-- Progress bar -->
      <div
        class="absolute inset-y-0 left-0 bg-white transition-all duration-200"
        :style="{ width: `${progress}%` }"
      />

      <!-- Text mask layer -->
      <div
        class="absolute inset-0 flex items-center justify-center font-medium"
        style="mix-blend-mode: difference"
      >
        <span class="text-white">
          {{ progress }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  progress: number
}>()
</script>
