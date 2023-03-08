<template>
    <div class="container mx-auto">
        <div>
            <NuxtLink to="/secret">Go to secret page</NuxtLink>
        </div>
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
async function signOut() {
    await signOutUser()
}
</script>