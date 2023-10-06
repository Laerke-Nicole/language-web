<template>
    <div class="pt-20 pb-20 secondary-bg">
        <div class="mt-14 max-w-md m-auto relative flex flex-col p-12 round-corner text-black primary-bg">
            <h3 class="text-2xl font-bold mb-2 black-headline text-center">Login</h3>

            <div class="flex flex-col gap-3">
                <!-- email -->
                <label for="email" class="block black-text cursor-text text-sm font-normal">Email</label>
                <input type="text" v-model="email" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4"/>
                
                <!-- password -->
                <label for="password" class="block black-text cursor-text text-sm font-normal">Password</label>
                <input type="password" v-model="password" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0"/>
                <p v-if="errMsg">{{ errMsg }}</p>

                <button @click="logIn" class="black-btn m-auto mt-3 mb-5">Login</button>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onMounted } from 'vue'

import router from '../router'

let email = ref ('')
let password = ref ('')
const errMsg = ref ('')

let logIn = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("test data", data)
            router.push('/navguard')
        })
        .catch((error) => {
            switch (error.code) {
                case 'auth/invalid-email':
                    errMsg.value = 'Invalid email address format.'
                    break
                case 'auth/user-disabled':
                    errMsg.value = 'User disabled.'
                    break
                case 'auth/user-not-found':
                    errMsg.value = 'User not found.'
                    break
                case 'auth/wrong-password':
                    errMsg.value = 'Wrong password.'
                    break
                default:
                    errMsg.value = 'Something went wrong.'
                    break
            }
        })
}

onMounted(() => {
  window.scrollTo(0, 0)
})

</script>

<style scoped>

</style>