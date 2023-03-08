// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Nuxt Auth with Firebase',
            link: [
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css' }
            ]
        }
    },
	runtimeConfig: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        public: {
            FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        }
    },
})
