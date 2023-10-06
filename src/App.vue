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


// logo img
let logo = ref('https://firebasestorage.googleapis.com/v0/b/language-booking-system.appspot.com/o/Logo%2Flogo.svg?alt=media&token=2ba1243a-6bd0-49a9-b44b-7f230042e2de&_gl=1*lhh7kp*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY5NjYyNTYwNC45NC4xLjE2OTY2MjYxMTAuMjcuMC4w')

// social media logos
let facebookLogo = ref('https://firebasestorage.googleapis.com/v0/b/language-booking-system.appspot.com/o/SoMe%20logos%2Ffacebook-logo.svg?alt=media&token=53ea56e6-254c-476c-8d83-479bfcd0a278&_gl=1*1174qof*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY5NjYyMTMxOS45My4xLjE2OTY2MjE5MDEuNC4wLjA.')
let instagramLogo = ref('https://firebasestorage.googleapis.com/v0/b/language-booking-system.appspot.com/o/SoMe%20logos%2Finstagram-logo.svg?alt=media&token=565b5784-791b-4a56-ad0b-e56c8d0f202d&_gl=1*rsasuu*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY5NjYyMTMxOS45My4xLjE2OTY2MjE5MjQuNjAuMC4w')

</script>

<template>
  
  <!-- navbar -->
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">

          <!-- logo -->
          <RouterLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">TutorLingo</span>
            <img class="h-8 w-auto" :src="logo" alt="" />
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
        <RouterLink to="/" class="text-sm font-semibold leading-6 black-text">Find a tutor</RouterLink>
        <RouterLink to="/languages" class="text-sm font-semibold leading-6 black-text">Languages</RouterLink>
        <RouterLink to="/community" class="text-sm font-semibold leading-6 black-text">Community</RouterLink>
        <RouterLink to='/navguard' v-if="isLoggedIn">Admin page</RouterLink>
      </PopoverGroup>

      <!-- log in and register -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
        <RouterLink to="/register" class="text-sm font-semibold leading-6 black-text">Register</RouterLink>
        <RouterLink to="/login" class="text-sm font-semibold leading-6 black-text">Login</RouterLink>
        <RouterLink to="/" class="text-sm font-semibold leading-6 black-text"><button @click="logOut" v-if="isLoggedIn">Log out</button></RouterLink>
        
      </div>

    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">

          <!-- logo -->
          <RouterLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">TutorLingo</span>
            <img class="h-8 w-auto" :src="logo" alt="" />
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
              <RouterLink to="/" class="-mx-3 block round-corner px-3 py-2 text-base font-semibold leading-7 black-text">Find a teacher</RouterLink>
              <RouterLink to="/languages" class="-mx-3 block round-corner px-3 py-2 text-base font-semibold leading-7 black-text">Languages</RouterLink>
              <RouterLink to="/community" class="-mx-3 block round-corner px-3 py-2 text-base font-semibold leading-7 black-text">Community</RouterLink>
              <RouterLink to='/navguard' v-if="isLoggedIn">Admin page</RouterLink>
            </div>

            <!-- log in and register -->
            <div class="py-6">
              <RouterLink to="/register" class="-mx-3 block round-corner px-3 py-2.5 text-base font-semibold leading-7 black-text">Register</RouterLink>
              <RouterLink to="/login" class="-mx-3 block round-corner px-3 py-2.5 text-base font-semibold leading-7 black-text">Login</RouterLink>
              <RouterLink to="/login" class="-mx-3 block round-corner px-3 py-2.5 text-base font-semibold leading-7 black-text"><button @click="logOut" v-if="isLoggedIn">Log out</button></RouterLink>
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
        <div class="left-footer">
          <div class="pb-2">
            <img :src="logo" alt="company logo" style="height: 25px;">
          </div>
          <p>Solskinsvej 45, Esbjerg 6700</p>
          <p>+45 49 88 08 94</p>
        </div>
        
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
          <RouterLink to="/contact"><li>Contact us</li></RouterLink>
          <RouterLink to="/about"><li>About us</li></RouterLink>
          <RouterLink to="/faq"><li>FAQ</li></RouterLink>
        </ul>
      </div>

      <!-- right side of footer -->
      <div>
        <h5 class="pb-2">Languages</h5>
        <ul>
          <RouterLink to="/danish"><li>Danish</li></RouterLink>
          <RouterLink to="/dutch"><li>Dutch</li></RouterLink>
          <RouterLink to="/english"><li>English</li></RouterLink>
        </ul>
      </div>
    </div>
    
    <div class="copyright flex items-center h-12 ten-percent">
      <p class="text-xs">© 2023 TutorLingo</p>
    </div>
  </footer>
</template>

<style scoped>
/* navigation bar */
header {
  position: fixed;
  width: 100%;
  z-index: 1000;
}

nav a.router-link-exact-active  {
  color: var(--black-headline);
  font-weight: bold;
  text-decoration: underline;
}

.router-link-active {
  text-decoration: underline;
  font-weight: bold;
  color: var(--black-headline);
}

.block {
  color: var(--black-text);
}

.block:hover {
  background-color: var(--primary-color);
}

nav a:hover  {
  color: var(--black-hover);
}


/* footer */
.left-footer {
  color: var(--black-extra-light);
}

footer li:hover {
  color: var(--black-hover);
}

.copyright {
  background-color: var(--extra-white);
}


</style>
