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





    <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
      <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Register an account</div>
      <form class="flex flex-col gap-3">
        <div class="block relative"> 
          <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
          <input v-model="email" type="text" id="email" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0">
          
          </div>
          <div class="block relative"> 
            <!-- password input -->
            <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
            <input v-model="password" type="password" id="password" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
          </div>

          <!-- log in button -->
          <button @click="register" type="submit" class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Register account</button>

      </form>
      <div class="text-sm text-center mt-[1.6rem]">Already have an account? <RouterLink to="/login" class="text-sm text-[#7747ff] underline">Log in</RouterLink></div>
  </div>

</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' //import router
import { onMounted } from 'vue'

const email = ref("");
const password = ref("");
const router = useRouter() //get a reference to our vue router

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log('Successfuly Registered!');
        router.push('/') //redirect to the homepage
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