import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

export default defineNuxtPlugin((NuxtApp) => {
	const { FIREBASE_API_KEY } = useRuntimeConfig().public

	// Config firebase
	const firebaseConfig = {
		apiKey: FIREBASE_API_KEY
	}
	// Initialize Firebase
	const app = initializeApp(firebaseConfig)

    initUser()

    const auth = getAuth()
    // NuxtApp.vueApp.provide('auth', auth)
    NuxtApp.provide('auth', auth)
})
