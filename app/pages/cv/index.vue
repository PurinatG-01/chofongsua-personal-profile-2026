<template>
  <div class="max-w-4xl mx-auto py-8 space-y-12">

    <!-- Header -->
    <section class="border-b border-border pb-6 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
      <div>
        <div class="flex justify-between">

          <h1 class="text-3xl font-semibold tracking-tight text-accent">
            {{ profile.name }}
          </h1>
          <!-- Top actions -->
          <div v-if="profile.cvPdfUrl" class="flex justify-end mb-4 print:hidden">
            <a :href="profile.cvPdfUrl" download
              class="inline-flex items-center rounded-md bg-primary/10 px-4 py-2 text-xs font-medium text-primary hover:bg-primary/15 transition-colors">
              Download CV as PDF
            </a>
          </div>
        </div>
        <p class="text-base text-muted">
          {{ profile.title }} · {{ profile.location }}
        </p>
      </div>

      <div class="flex flex-wrap gap-3 text-sm">
        <a v-for="link in profile.links" :key="link.label" :href="link.href"
          class="text-[var(--forest-text)] hover:text-primary underline underline-offset-4" target="_blank"
          rel="noreferrer">
          {{ link.label }}
        </a>
      </div>
    </section>

    <!-- Summary -->
    <section class="space-y-3">
      <h2 class="text-lg font-medium tracking-tight">
        Summary
      </h2>
      <div class="space-y-2 text-sm leading-relaxed text-muted">
        <p v-for="(line, idx) in profile.summary" :key="idx">
          {{ line }}
        </p>
      </div>
    </section>

    <!-- Skills -->
    <section class="space-y-4">
      <h2 class="text-lg font-medium tracking-tight">
        Skills
      </h2>
      <div class="grid gap-6 md:grid-cols-2">
        <div v-for="group in profile.skillGroups" :key="group.label"
          class="rounded-lg border border-border bg-surface p-4">
          <h3 class="text-sm font-semibold mb-1">
            {{ group.label }}
          </h3>
          <p class="text-xs text-muted">
            {{ group.items.join(' · ') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="space-y-6">
      <h2 class="text-lg font-medium tracking-tight">
        Experience
      </h2>

      <div v-for="exp in profile.experiences" :key="exp.company + exp.role + exp.period"
        class="space-y-1 border-l border-border pl-4">
        <div class="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
          <div>
            <p class="text-sm font-semibold">
              {{ exp.role }} · {{ exp.company }}
            </p>
            <p v-if="exp.location" class="text-xs text-muted">
              {{ exp.location }}
            </p>
          </div>
          <p class="text-xs text-muted">
            {{ exp.period }}
          </p>
        </div>

        <ul class="mt-2 space-y-1 text-xs leading-relaxed text-muted">
          <li v-for="(item, idx) in exp.highlights" :key="idx"
            class="before:content-['▸'] before:text-accent before:mr-2">
            {{ item }}
          </li>
        </ul>

        <p v-if="exp.tech && exp.tech.length" class="mt-2 text-[11px] text-muted">
          Tech: {{ exp.tech.join(', ') }}
        </p>
      </div>
    </section>

    <!-- Projects -->
    <section v-if="profile.projects.length" class="space-y-4">
      <h2 class="text-lg font-medium tracking-tight">
        Selected Projects
      </h2>

      <div class="space-y-4">
        <article v-for="project in profile.projects" :key="project.name"
          class="rounded-lg border border-border bg-surface p-4 space-y-1">
          <div class="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <h3 class="text-sm font-semibold">
              {{ project.name }}
            </h3>
            <a v-if="project.link" :href="project.link" class="text-xs text-primary underline underline-offset-4"
              target="_blank" rel="noreferrer">
              View
            </a>
          </div>
          <p class="text-xs text-muted leading-relaxed">
            {{ project.description }}
          </p>
          <p class="text-[11px] text-muted">
            Tech: {{ project.tech.join(', ') }}
          </p>
        </article>
      </div>
    </section>

    <!-- Education -->
    <section v-if="profile.education.length" class="space-y-4">
      <h2 class="text-lg font-medium tracking-tight">
        Education
      </h2>

      <div class="space-y-2">
        <div v-for="edu in profile.education" :key="edu.school + edu.degree" class="space-y-0.5">
          <p class="text-sm font-semibold">
            {{ edu.degree }}
          </p>
          <p class="text-xs text-muted">
            {{ edu.school }} · {{ edu.period }}
          </p>
          <p v-if="edu.details" class="text-xs text-muted leading-relaxed">
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