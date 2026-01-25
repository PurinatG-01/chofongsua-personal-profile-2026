<template>
  <section class="max-w-3xl bg-slate-600">
    <header v-if="title" class="mb-8">
      <h1 class="text-3xl font-semibold tracking-tight">
        {{ title }}
      </h1>

      <p v-if="description" class="mt-2 text-gray-500">
        {{ description }}
      </p>
    </header>

    <div class="space-y-6">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>
