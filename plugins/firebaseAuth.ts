import { initializeApp } from "firebase/app"

export default defineNuxtPlugin((NuxtApp) => {
	const { FIREBASE_API_KEY } = useRuntimeConfig().public

	// Config firebase
	const firebaseConfig = {
		apiKey: FIREBASE_API_KEY
	}
	// Initialize Firebase
	const app = initializeApp(firebaseConfig)
	console.log(app)
})
