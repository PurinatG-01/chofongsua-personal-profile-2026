<template>
  <div class="mx-auto max-w-4xl space-y-12 py-8">
    <!-- Header -->
    <section
      class="border-border flex flex-col gap-2 border-b pb-6 md:flex-row md:items-baseline md:justify-between"
    >
      <div>
        <div class="flex justify-between">
          <h1 class="text-accent text-3xl font-semibold tracking-tight">
            {{ profile.name }}
          </h1>
          <!-- Top actions -->
          <div v-if="profile.cvPdfUrl" class="mb-4 flex justify-end print:hidden">
            <a
              :href="profile.cvPdfUrl"
              download
              class="bg-primary/10 text-primary hover:bg-primary/15 inline-flex items-center rounded-md px-4 py-2 text-xs font-medium transition-colors"
            >
              Download CV as PDF
            </a>
          </div>
        </div>
        <p class="text-muted text-base">{{ profile.title }} · {{ profile.location }}</p>
      </div>

      <div class="flex flex-wrap gap-3 text-sm">
        <a
          v-for="link in profile.links"
          :key="link.label"
          :href="link.href"
          class="hover:text-primary text-[var(--forest-text)] underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          {{ link.label }}
        </a>
      </div>
    </section>

    <!-- Summary -->
    <section class="space-y-3">
      <h2 class="text-lg font-medium tracking-tight">Summary</h2>
      <div class="text-muted space-y-2 text-sm leading-relaxed">
        <p v-for="(line, idx) in profile.summary" :key="idx">
          {{ line }}
        </p>
      </div>
    </section>

    <!-- Skills -->
    <section class="space-y-4">
      <h2 class="text-lg font-medium tracking-tight">Skills</h2>
      <div class="grid gap-6 md:grid-cols-2">
        <div
          v-for="group in profile.skillGroups"
          :key="group.label"
          class="border-border bg-surface rounded-lg border p-4"
        >
          <h3 class="mb-1 text-sm font-semibold">
            {{ group.label }}
          </h3>
          <p class="text-muted text-xs">
            {{ group.items.join(' · ') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="space-y-6">
      <h2 class="text-lg font-medium tracking-tight">Experience</h2>

      <div
        v-for="exp in profile.experiences"
        :key="exp.company + exp.role + exp.period"
        class="border-border space-y-1 border-l pl-4"
      >
        <div class="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
          <div>
            <p class="text-sm font-semibold">{{ exp.role }} · {{ exp.company }}</p>
            <p v-if="exp.location" class="text-muted text-xs">
              {{ exp.location }}
            </p>
          </div>
          <p class="text-muted text-xs">
            {{ exp.period }}
          </p>
        </div>

        <ul class="text-muted mt-2 space-y-1 text-xs leading-relaxed">
          <li
            v-for="(item, idx) in exp.highlights"
            :key="idx"
            class="before:text-accent before:mr-2 before:content-['▸']"
          >
            {{ item }}
          </li>
        </ul>

        <p v-if="exp.tech && exp.tech.length" class="text-muted mt-2 text-[11px]">
          Tech: {{ exp.tech.join(', ') }}
        </p>
      </div>
    </section>

    <!-- Projects -->
    <section v-if="profile.projects.length" class="space-y-4">
      <h2 class="text-lg font-medium tracking-tight">Selected Projects</h2>

      <div class="space-y-4">
        <article
          v-for="project in profile.projects"
          :key="project.name"
          class="border-border bg-surface space-y-1 rounded-lg border p-4"
        >
          <div class="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <h3 class="text-sm font-semibold">
              {{ project.name }}
            </h3>
            <a
              v-if="project.link"
              :href="project.link"
              class="text-primary text-xs underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>
          <p class="text-muted text-xs leading-relaxed">
            {{ project.description }}
          </p>
          <p class="text-muted text-[11px]">Tech: {{ project.tech.join(', ') }}</p>
        </article>
      </div>
    </section>

    <!-- Education -->
    <section v-if="profile.education.length" class="space-y-4">
      <h2 class="text-lg font-medium tracking-tight">Education</h2>

      <div class="space-y-2">
        <div v-for="edu in profile.education" :key="edu.school + edu.degree" class="space-y-0.5">
          <p class="text-sm font-semibold">
            {{ edu.degree }}
          </p>
          <p class="text-muted text-xs">{{ edu.school }} · {{ edu.period }}</p>
          <p v-if="edu.details" class="text-muted text-xs leading-relaxed">
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

<style scoped>
  @media print {
    :deep(body) {
      background: white;
      font-size: 11px;
      line-height: 1.4;
    }

    .max-w-4xl.mx-auto.py-8.space-y-10 {
      max-width: 100% !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      row-gap: 1.5rem !important;
      /* reduce vertical spacing for one-page layout */
    }

    section {
      page-break-inside: avoid;
    }
  }
</style>
