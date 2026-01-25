<template>
  <div class="max-w-3xl mx-auto space-y-16">

    <!-- Header -->
    <section v-if="data" class="space-y-3">
      <h1 class="text-4xl font-semibold tracking-tight text-accent">
        {{ data.name }}
      </h1>

      <p class="text-muted">
        {{ data.title }} · {{ data.location }}
      </p>
    </section>

    <!-- Intro -->
    <section v-if="data" class="bg-surface border border-border rounded-lg p-6">
      <p class="leading-relaxed">
        {{ data.intro }}
      </p>
    </section>

    <!-- Interests -->
    <section v-if="data" class="space-y-4">
      <h2 class="text-lg font-medium">
        Interests
      </h2>

      <ul class="space-y-1 text-muted">
        <li v-for="item in data.interests" :key="item" class="before:content-['▸'] before:text-accent before:mr-2">
          {{ item }}
        </li>
      </ul>
    </section>

    <!-- Error -->
    <section v-if="error" class="text-red-400">
      Failed to load profile.
    </section>

  </div>
</template>

<script setup lang="ts">
const { data, error } = await useFetch('/api/profile')
</script>
