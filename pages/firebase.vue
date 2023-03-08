<template>
    <div>
        <section class="hero is-fullheight is-justify-content-flex-start">
            <div class="has-text-centered mt-6">
                <p class="title">Firebase/Nuxt3 Auth</p>
            </div>

            <div class="section">
                <div class="columns">
                    <div class="column is-4 is-offset-2">
                        <AuthFirebase class="box px-5 py-5 mx-4" title="Register" @submit="register" :form="registerForm" :message="registerMessage" />
                        <AuthFirebase class="box px-5 py-5 mx-4" title="Sign in" @submit="signIn" :form="signInForm" />
                    </div>
                    <div class="column is-4" v-if="firebaseUser">
                        <p class="subtitle">Firebase Auth Current User</p>
                        <pre class="is-size-7 has-background-success-light">{{ firebaseUser }}</pre>
                        <button class="button mt-4" @click="signOutUser">Sign Out</button>
                    </div>
                    <div class="column is-4 has-text-centered" v-else>
                        <p>User is signed out</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script setup>
// import { signOutUser } from "../composables/useFirebase";
const timeout = ref(null)
const registerForm = ref({ 
    email: "", 
    password: "" 
});
const signInForm = ref({ 
    email: "", 
    password: "" 
});
const firebaseUser = useFirebaseUser();
const registerMessage = ref('');

const signIn = () => {
    console.log(signInForm.value);
    signInUser(signInForm.value.email, signInForm.value.password);
    signInForm.value = { email: "", password: "" };
};

const register = async () => {
    console.log(registerForm.value);
    const credentials = await createUser(registerForm.value.email, registerForm.value.password);
    registerForm.value = { email: "", password: "" };
    if (credentials) {
        registerMessage.value = `Successfully registered: ${credentials.user.email}`
        clearTimeout(timeout.value)
        timeout.value = setTimeout(() => {
            registerMessage.value = ""
        }, 3000);
    }
};
</script>
  
<style></style>