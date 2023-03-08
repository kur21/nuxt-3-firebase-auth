<template>
    <div>
        <div>
            <NuxtLink to="/secret">Go to secret page</NuxtLink>
        </div>
        <button class="button is-primary" @click="signIn" v-if="!firebaseUser">Sign In</button>
        <button class="button is-danger" @click="signOut" v-if="firebaseUser">Sign Out</button>
        <div v-if="firebaseUser">
            <client-only>
                <pre>{{ firebaseUser }}</pre>
            </client-only>
        </div>
        <div v-else>User is signed out</div>
    </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser()

async function signIn() {
    const email = 'test1@gmail.com'
    const password = '123456'
    await signInUser(email, password)
}

async function signOut() {
    await signOutUser()
}
</script>