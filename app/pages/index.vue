<template>
  <div class="mx-auto max-w-3xl space-y-16">
    <!-- Header -->
    <section v-if="data" class="space-y-3">
      <h1 class="text-accent-primary text-4xl font-semibold tracking-tight">
        {{ data.name }}
      </h1>

      <p class="text-text-muted">{{ data.title }} · {{ data.location }}</p>
    </section>

    <!-- Intro -->
    <section v-if="data" class="bg-bg-surface border-border-subtle rounded-lg border p-6">
      <p class="text-text-main leading-relaxed">
        {{ data.intro }}
      </p>
    </section>

    <!-- Interests -->
    <section v-if="data" class="space-y-4">
      <h2 class="text-text-main text-lg font-medium">Interests</h2>

      <ul class="text-text-muted space-y-1">
        <li
          v-for="item in data.interests"
          :key="item"
          class="before:text-accent-secondary before:mr-2 before:content-['▸']"
        >
          {{ item }}
        </li>
      </ul>
    </section>

    <!-- Error -->
    <section v-if="error" class="text-accent-primary">Failed to load profile.</section>
  </div>
</template>

<script setup lang="ts">
  const { data, error } = await useFetch('/api/profile')
</script>
