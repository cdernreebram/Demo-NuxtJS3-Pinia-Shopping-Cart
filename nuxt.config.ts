// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],


// })

import { defineNuxtConfig } from 'nuxt/config' 
import * as dotenv from 'dotenv'

dotenv.config()

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  },
  
  
})
