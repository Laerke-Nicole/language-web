<template>
  <div class="pt-20 pb-20 white-bg">
        <div class="mt-14 max-w-md m-auto relative flex flex-col p-12 round-corner text-black primary-bg">
            <h3 class="text-2xl font-bold mb-2 black-headline text-center">Register</h3>

            <div class="flex flex-col gap-3">
                <!-- email -->
                <label for="email" class="block black-text cursor-text text-sm font-normal">Email</label>
                <input type="text" v-model="email" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4"/>
                
                <!-- password -->
                <label for="password" class="block black-text cursor-text text-sm font-normal">Password</label>
                <input type="password" v-model="password" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0"/>
                <p v-if="errMsg">{{ errMsg }}</p>

                <button @click="register" class="black-btn m-auto mt-3 mb-5">Register</button>
            </div>
            <div class="text-sm text-center mt-[1.6rem]">Already have an account? <RouterLink to="/login" class="text-sm underline">Log in</RouterLink></div>
        </div>
    </div>

</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const email = ref("");
const password = ref("");
const router = useRouter() //get a reference to our vue router

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log('Successfuly Registered!');
        router.push('/bookingview') //redirect to the homepage
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    })
};




// scroll to top when opening page
onMounted(() => {
  window.scrollTo(0, 0)
})

</script>

<style scoped>

</style>