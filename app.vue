<template>
    <div>
        <button class="button is-primary" @click="signIn">Sign In</button>
        <button class="button is-danger" @click="signOut">Sign Out</button>
    </div>
</template>

<script setup>
console.log('---App---');

async function signIn() {
    const email = 'test1@gmail.com'
    const password = '123456'
    const credentials = await signInUser(email, password)
    console.log(credentials);
}

async function signOut() {
    const result = await signOutUser()
    console.log('result', result);
}

onMounted(async() => {
    // const credentials = await createUser(email, password)
    // const credentials = await signInUser(email, password)
    // const credentials = await signOutUser()
    // console.log(credentials);
});
</script>