// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {},
  typescript: {
    strict: true
  },
  modules: [
    // ...
    '@pinia/nuxt'
  ],
  css: ['@/assets/scss/style.scss'],
  build: {
    transpile: ['vuetify']
  }
})
