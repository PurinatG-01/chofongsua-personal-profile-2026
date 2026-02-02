<template>
  <div class="flex min-h-screen items-center justify-center px-6">
    <div class="w-full max-w-xl space-y-8">
      <!-- Status -->
      <div class="space-y-2">
        <p class="text-muted text-sm tracking-widest">SYSTEM ERROR</p>

        <h1 class="text-accent text-6xl font-semibold">
          {{ statusCode }}
        </h1>
      </div>

      <!-- Message -->
      <div class="bg-surface border-border space-y-4 rounded-lg border p-6">
        <p class="text-lg">
          {{ message }}
        </p>

        <p class="text-muted text-sm">
          The requested resource could not be located or the system encountered an unexpected
          condition.
        </p>
      </div>

      <!-- Actions -->
      <div class="flex gap-4">
        <NuxtLink
          to="/"
          class="border-border text-accent hover:bg-surface inline-flex items-center rounded-md border px-4 py-2 text-sm transition"
        >
          ▸ return home
        </NuxtLink>

        <button
          class="border-border text-muted hover:text-accent inline-flex items-center rounded-md border px-4 py-2 text-sm transition"
          @click="clear"
        >
          ▸ reset system
        </button>
      </div>

      <!-- Footer log -->
      <p class="text-muted text-xs">[SYS] {{ new Date().toISOString() }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const error = useError()

  const statusCode = computed(() => error.value?.statusCode || 500)
  const message = computed(
    () => error.value?.statusMessage || 'An unexpected system error occurred.',
  )

  function clear() {
    clearError({ redirect: '/' })
  }
</script>
