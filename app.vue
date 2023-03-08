<template>
    <div>
        <button class="button is-primary" @click="signIn">Sign In</button>
        <button class="button is-danger" @click="signOut">Sign Out</button>

        <pre>{{ credentials }}</pre>
    </div>
</template>

<script setup>
console.log('---App---');
const credentials = ref(null)

async function signIn() {
    const email = 'test1@gmail.com'
    const password = '123456'
    credentials.value = await signInUser(email, password)
}

async function signOut() {
    credentials.value = await signOutUser()
}
</script>