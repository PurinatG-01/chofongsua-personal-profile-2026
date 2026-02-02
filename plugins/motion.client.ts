import { MotionPlugin } from '@vueuse/motion'

export default defineNuxtPlugin(nuxtApp => {
  // plugins/motion.client.ts
  console.log('Motion plugin loaded')

  nuxtApp.vueApp.use(MotionPlugin)
})
