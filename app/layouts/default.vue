<template>
  <div class="flex min-h-screen flex-col justify-start">
    <!-- Header -->
    <header class="border-b border-[var(--forest-border)]">
      <UContainer class="flex items-center justify-between py-5">
        <NuxtLink
          to="/"
          class="hover:text-primary text-lg font-semibold tracking-wide text-[var(--forest-text)]"
        >
          chofongsua
        </NuxtLink>

        <nav class="flex gap-6 text-sm text-[var(--forest-muted)]">
          <NuxtLink to="/blog" class="hover:text-primary"> Blog </NuxtLink>
          <NuxtLink to="/cv" class="hover:text-primary"> CV </NuxtLink>
        </nav>
      </UContainer>
    </header>

    <!-- Main -->
    <main>
      <UContainer class="py-10">
        <div class="mx-auto max-w-4xl">
          <NuxtPage />
        </div>
      </UContainer>
    </main>

    <!-- Footer -->
    <footer class="mt-auto border-t border-[var(--forest-border)]">
      <UContainer class="py-6 text-sm text-[var(--forest-muted)]">
        © {{ new Date().getFullYear() }} Chofongsua
      </UContainer>
    </footer>
  </div>
</template>
