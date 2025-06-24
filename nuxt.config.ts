// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@prisma/nuxt'],
  css: ['./assets/css/style.css'],
  build: {
    transpile: ['primevue']
  },

})
