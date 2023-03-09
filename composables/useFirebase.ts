// https://firebase.google.com/docs/auth/web/start
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"

export const createUser = async (email: string, password: string) => {
	const auth = getAuth()
	const credentials = await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
        });
        return credentials
}

export const signInUser = async (email: string, password: string) => {
	const auth = getAuth()
	const credentials = await signInWithEmailAndPassword(auth, email, password)
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
		});
        return credentials
}

export const initUser = async () => {
	const auth = getAuth()
    const firebaseUser = useFirebaseUser()
    firebaseUser.value = auth.currentUser

    const userCookie = useCookie('userCookie')
    
	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			// console.log('Auth changed:', user)
		} else {
			// User is signed out
            // console.log('Auth changed:', user)
		}
        firebaseUser.value = user
        //@ts-ignore
        userCookie.value = user

        // Test call api
        $fetch('/api/auth', {
            method: 'POST',
            body: { user }
        })
	})
}

export const signOutUser = async () => {
    const auth = getAuth()
    const res = await auth.signOut()
    // console.log('Sign out', res);
    return res
}