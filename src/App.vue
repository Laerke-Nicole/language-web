<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { onMounted, ref } from 'vue'

import { auth } from './firebase.js'

import { signOut, onAuthStateChanged } from 'firebase/auth'

import router from './router'

let isLoggedIn = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
      console.log("User logged in", auth.currentUser)
    } else {
      isLoggedIn.value = false
      console.log("User logged out", auth.currentUser)
    }
  })
})

let logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("User logged out", auth.currentUser)
      router.push('/login')
    })
    .catch((error) => {
      console.log(error)
    })
}


// navgation bar
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/vue'

import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)


// social media logos
let facebookLogo = 'https://firebasestorage.googleapis.com/v0/b/language-booking-system.appspot.com/o/SoMe%20logos%2Ffacebook-logo.svg?alt=media&token=53ea56e6-254c-476c-8d83-479bfcd0a278&_gl=1*1jb6kjf*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY5NjYyMTMxOS45My4xLjE2OTY2MjE0MzEuMTcuMC4w'
let instagramLogo = 'https://firebasestorage.googleapis.com/v0/b/language-booking-system.appspot.com/o/SoMe%20logos%2Finstagram-logo.svg?alt=media&token=565b5784-791b-4a56-ad0b-e56c8d0f202d&_gl=1*19lfray*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY5NjYyMTMxOS45My4xLjE2OTY2MjE0ODQuNjAuMC4w'

</script>

<template>
  
  <!-- navbar -->
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
          <RouterLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <!-- nav links -->
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <RouterLink to="/" class="text-sm font-semibold leading-6 text-gray-900">Find a tutor</RouterLink>
        <RouterLink to="/" class="text-sm font-semibold leading-6 text-gray-900">Languages</RouterLink>
        <RouterLink to="/" class="text-sm font-semibold leading-6 text-gray-900">Community</RouterLink>
      </PopoverGroup>

      <!-- log in and register -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
        <RouterLink to="/register" class="text-sm font-semibold leading-6 text-gray-900">Register</RouterLink>
        <RouterLink to="/login" class="text-sm font-semibold leading-6 text-gray-900">Login</RouterLink>
      </div>

    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">

          <RouterLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </RouterLink>

          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>

        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">

            <!-- nav links -->
            <div class="space-y-2 py-6">
              <RouterLink to="/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Find a teacher</RouterLink>
              <RouterLink to="/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Group class</RouterLink>
              <RouterLink to="/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Community</RouterLink>
            </div>

            <!-- log in and register -->
            <div class="py-6">
              <RouterLink to="/register" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Register</RouterLink>
              <RouterLink to="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Login</RouterLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  <RouterView />

  <footer>
    <div class="flex flex-row ten-percent pt-14 pb-14 justify-evenly">

      <!-- left side of footer -->
      <div class="flex flex-col">
        <div>
          <img src="" alt="company logo" height="60px">
        </div>
        <h5 class="pt-2 pb-2 ">Name of company</h5>
        <p>Solskinsvej 45, Esbjerg 6700</p>
        <p>+45 49 88 08 94</p>

        <!-- social media logos -->
        <div class="SoMe-logos flex pt-3 gap-4">
          <a href="" target="_blank">
            <img :src="facebookLogo" alt="Facebook-logo" height="40px">
          </a>
          <a href="" target="_blank">
            <img :src="instagramLogo" alt="Instagram-logo" height="40px">
          </a>
        </div>
      </div>

      

      <!-- middle of footer -->
      <div>
        <h5 class="pb-2">Information</h5>
        <ul>
          <RouterLink to="/"><li>Contact us</li></RouterLink>
          <RouterLink to="/"><li>About us</li></RouterLink>
          <RouterLink to="/"><li>FAQ</li></RouterLink>
        </ul>
      </div>

      <!-- right side of footer -->
      <div>
        <h5 class="pb-2">Languages</h5>
        <ul>
          <RouterLink to="/"><li>Danish</li></RouterLink>
          <RouterLink to="/"><li>Dutch</li></RouterLink>
          <RouterLink to="/"><li>English</li></RouterLink>
          <RouterLink to="/"><li>Spanish</li></RouterLink>
        </ul>
      </div>
    </div>
    
    <div class="copyright flex items-center h-12 ten-percent">
      <p class="text-xs">© 2023 NAME OF COMPANY</p>
    </div>
  </footer>
</template>

<style scoped>
header {
  /* position: fixed; */
}

footer li:hover {
  color: var(--black-hover);
}

.copyright {
  background-color: #ecf2e4;
}


</style>
