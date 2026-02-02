export default defineNuxtConfig({
  css: ['~/assets/css/theme.css', '~/assets/css/main.css'],
  modules: ['@nuxt/ui'],
  postcss: {
    plugins: {
      'postcss-nesting': {},
      autoprefixer: {},
    },
  },
})
