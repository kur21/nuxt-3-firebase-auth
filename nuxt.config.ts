// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        public: {
            FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        }
    },
})
