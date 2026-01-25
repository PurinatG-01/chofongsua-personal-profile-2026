<template>
  <div class="min-h-screen flex items-center justify-center px-6">
    <div class="max-w-xl w-full space-y-8">

      <!-- Status -->
      <div class="space-y-2">
        <p class="text-sm text-muted tracking-widest">
          SYSTEM ERROR
        </p>

        <h1 class="text-6xl font-semibold text-accent">
          {{ statusCode }}
        </h1>
      </div>

      <!-- Message -->
      <div class="bg-surface border border-border rounded-lg p-6 space-y-4">
        <p class="text-lg">
          {{ message }}
        </p>

        <p class="text-sm text-muted">
          The requested resource could not be located or the system encountered an unexpected condition.
        </p>
      </div>

      <!-- Actions -->
      <div class="flex gap-4">
        <NuxtLink
          to="/"
          class="inline-flex items-center px-4 py-2 border border-border rounded-md text-sm text-accent hover:bg-surface transition"
        >
          ▸ return home
        </NuxtLink>

        <button
          class="inline-flex items-center px-4 py-2 border border-border rounded-md text-sm text-muted hover:text-accent transition"
          @click="clear"
        >
          ▸ reset system
        </button>
      </div>

      <!-- Footer log -->
      <p class="text-xs text-muted">
        [SYS] {{ new Date().toISOString() }}
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
const error = useError()

const statusCode = computed(() => error.value?.statusCode || 500)
const message = computed(
  () => error.value?.statusMessage || 'An unexpected system error occurred.'
)

function clear() {
  clearError({ redirect: '/' })
}
</script>
