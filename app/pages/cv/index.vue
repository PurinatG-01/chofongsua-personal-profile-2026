<template>
  <div class="mx-auto max-w-4xl space-y-12 py-8">
    <!-- Header -->
    <section
      class="border-border-subtle flex flex-col gap-2 border-b pb-6 md:flex-row md:items-baseline md:justify-between"
    >
      <div>
        <div class="flex justify-between gap-4">
          <h1 class="text-accent-primary text-3xl font-semibold tracking-tight">
            {{ profile.name }}
          </h1>

          <!-- Top actions -->
          <div v-if="profile.cvPdfUrl" class="mb-4 flex justify-end print:hidden">
            <UButton :to="profile.cvPdfUrl" download size="sm" variant="soft" color="primary">
              Download CV as PDF
            </UButton>
          </div>
        </div>

        <p class="text-text-muted text-base">
          {{ profile.title }}
          <span class="text-text-dim"> · {{ profile.location }}</span>
        </p>
      </div>

      <div class="text-text-muted flex flex-wrap gap-3 text-sm">
        <NuxtLink
          v-for="link in profile.links"
          :key="link.label"
          :href="link.href"
          class="hover:text-accent-primary underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </section>

    <!-- Summary -->
    <section class="space-y-3">
      <h2 class="text-text-main text-lg font-medium tracking-tight">Summary</h2>

      <div class="text-text-muted space-y-2 text-sm leading-relaxed">
        <p v-for="(line, idx) in profile.summary" :key="idx">
          {{ line }}
        </p>
      </div>
    </section>

    <!-- Skills -->
    <section class="border-border-subtle space-y-4 border-t pt-8">
      <h2 class="text-text-main text-lg font-medium tracking-tight">Skills</h2>

      <div class="grid gap-6 md:grid-cols-2">
        <div
          v-for="group in profile.skillGroups"
          :key="group.label"
          class="border-border-subtle bg-bg-surface rounded-lg border p-4"
        >
          <h3 class="text-text-main mb-1 text-sm font-semibold">
            {{ group.label }}
          </h3>

          <p class="text-text-muted text-xs">
            {{ group.items.join(' · ') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="border-border-subtle space-y-6 border-t pt-8">
      <h2 class="text-text-main text-lg font-medium tracking-tight">Experience</h2>

      <div
        v-for="exp in profile.experiences"
        :key="exp.company + exp.role + exp.period"
        class="border-border-subtle space-y-1 border-l pl-4"
      >
        <div class="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
          <div>
            <p class="text-text-main text-sm font-medium">{{ exp.role }} · {{ exp.company }}</p>

            <p v-if="exp.location" class="text-text-muted text-xs">
              {{ exp.location }}
            </p>
          </div>

          <p class="text-text-muted text-xs">
            {{ exp.period }}
          </p>
        </div>

        <ul class="text-text-muted mt-3 space-y-1 text-xs leading-relaxed">
          <li
            v-for="(item, idx) in exp.highlights"
            :key="idx"
            class="before:text-accent-secondary before:mr-2 before:content-['▸']"
          >
            {{ item }}
          </li>
        </ul>

        <p v-if="exp.tech?.length" class="text-text-dim mt-2 text-[11px]">
          Tech: {{ exp.tech.join(', ') }}
        </p>
      </div>
    </section>

    <!-- Projects -->
    <section v-if="profile.projects.length" class="space-y-4">
      <h2 class="text-text-main text-lg font-medium tracking-tight">Selected Projects</h2>

      <div class="space-y-4">
        <article
          v-for="project in profile.projects"
          :key="project.name"
          class="border-border-subtle bg-bg-surface space-y-1 rounded-lg border p-4"
        >
          <div class="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <h3 class="text-text-main text-sm font-semibold">
              {{ project.name }}
            </h3>

            <UButton
              v-if="project.link"
              :to="project.link"
              variant="link"
              size="xs"
              target="_blank"
            >
              View
            </UButton>
          </div>

          <p class="text-text-muted text-xs leading-relaxed">
            {{ project.description }}
          </p>

          <p class="text-text-dim text-[11px]">Tech: {{ project.tech.join(', ') }}</p>
        </article>
      </div>
    </section>

    <!-- Education -->
    <section v-if="profile.education.length" class="space-y-4">
      <h2 class="text-text-main text-lg font-medium tracking-tight">Education</h2>

      <div class="space-y-2">
        <div v-for="edu in profile.education" :key="edu.school + edu.degree" class="space-y-0.5">
          <p class="text-text-main text-sm font-semibold">
            {{ edu.degree }}
          </p>

          <p class="text-text-muted text-xs">{{ edu.school }} · {{ edu.period }}</p>

          <p v-if="edu.details" class="text-text-muted text-xs leading-relaxed">
            {{ edu.details }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useCvData } from '../../../composables/useCvData'

  const { profile } = useCvData()
</script>
