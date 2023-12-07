// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@invictus.codes/nuxt-vuetify'
  ],
  vuetify: {
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,
      styles: true,
      autoImport: true,
      useVuetifyLabs: true, 
    }
  }
})
