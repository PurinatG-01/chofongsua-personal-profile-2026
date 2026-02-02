<template>
  <div class="bg-bg-main text-text-main flex min-h-screen flex-col">
    <!-- Header -->
    <header class="border-border-subtle border-b">
      <UContainer class="flex items-center justify-between py-5">
        <NuxtLink to="/" class="hover:text-accent-primary text-lg font-semibold tracking-wide">
          chofongsua
        </NuxtLink>

        <nav class="text-text-muted flex gap-6 text-sm">
          <NuxtLink to="/blog" class="hover:text-accent-primary"> Blog </NuxtLink>

          <NuxtLink to="/cv" class="hover:text-accent-primary"> CV </NuxtLink>
        </nav>
      </UContainer>
    </header>

    <!-- Main -->
    <main class="flex-1">
      <UContainer class="py-10">
        <div class="mx-auto max-w-4xl">
          <NuxtPage />
        </div>
      </UContainer>
    </main>

    <!-- Footer -->
    <footer class="border-border-subtle border-t">
      <UContainer class="text-text-dim py-6 text-sm">
        © {{ new Date().getFullYear() }} Chofongsua
      </UContainer>
    </footer>
  </div>
</template>
