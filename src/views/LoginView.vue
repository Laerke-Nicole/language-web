<template>

<div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
      <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Log in</div>
      <form class="flex flex-col gap-3">
        <div class="block relative"> 
          <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
          <input v-model="email" type="text" id="email" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0">
          
          </div>
          <div class="block relative"> 

            <!-- password input -->
          <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
          <input v-model="password" type="password" id="password" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
          
          <!-- error message -->
          <p v-if="errMsg">{{ errMsg }}</p>
          </div>

          <!-- log in button -->
          <button @click="logIn" type="submit" class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Log in</button>

      </form>
    <div class="text-sm text-center mt-[1.6rem]">Don't have an account yet? <RouterLink to="/register" class="text-sm text-[#7747ff] underline">Register an account</RouterLink></div>
  </div>






<!-- 
    <div>
        <h1>Login</h1>
        Username: <input type="text" v-model="email" />
        Password: <input type="password" v-model="password" />
        <p v-if="errMsg">{{ errMsg }}</p>
        <button @click="logIn">Login</button>
    </div> -->
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

<style scoped>

</style>