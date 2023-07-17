// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
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
