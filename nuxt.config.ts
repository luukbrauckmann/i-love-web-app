// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'I Love Web',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      datocmsApiToken: process.env.DATOCMS_API_TOKEN,
      datocmsGraphqlUrl: process.env.DATOCMS_GRAPHQL_URL,
    }
  }
})
