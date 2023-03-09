<template>
    <div class="container mt-6" v-if="!firebaseUser">
        <AuthFirebase v-if="showRegisterForm" class="box px-5 py-5 mx-4" title="Register" @submit="register" :form="registerForm" :message="registerMessage" />

        <AuthFirebase v-else class="box px-5 py-5 mx-4" title="Sign in" @submit="signIn" :form="signInForm" />

        <div class="level">
            <div class="level-item has-text-centered">
                <button class="button" @click="showRegisterForm = !showRegisterForm">
                    {{ showRegisterForm ? 'Sign In' : 'Register' }}
                </button>
            </div>
        </div>
    </div>

    <NuxtPage v-else/>
</template>

<script setup>
console.log('---App---')

const firebaseUser = useFirebaseUser();
const showRegisterForm = ref(false)
const registerForm = ref({ 
    email: "", 
    password: "" 
});
const signInForm = ref({ 
    email: "", 
    password: "" 
});

const register = async () => {
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

const signIn = () => {
    signInUser(signInForm.value.email, signInForm.value.password);
    signInForm.value = { email: "", password: "" };
};
</script>