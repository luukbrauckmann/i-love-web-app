// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      datocmsApiToken: process.env.DATOCMS_API_TOKEN,
      datocmsGraphqlUrl: process.env.DATOCMS_GRAPHQL_URL,
    }
  }
})
