<template>
    <div>
        <h1>Login</h1>
        Username: <input type="text" v-model="email" />
        Password: <input type="password" v-model="password" />
        <p v-if="errMsg">{{ errMsg }}</p>
        <button @click="logIn">Login</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth';

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


</script>

<style lang="scss" scoped>

</style>