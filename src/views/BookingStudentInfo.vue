<template>
    <!-- <div class="pt-20 pb-20 white-bg">
        <div class="mt-14 max-w-md m-auto relative flex flex-col p-12 round-corner text-black primary-bg">
            
            
        </div>
    </div> -->


    <div class="pt-20 pb-20 white-bg flex flex-col justify-center items-center">
        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
            <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="mt-14 max-w-3xl ten-percent-m relative flex flex-col p-12 round-corner text-black primary-bg">

            <!-- top with headline -->
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-3xl font-bold tracking-tight sm:text-4xl black-headline">Contact information</h2>
                <p class="mt-2 text-lg leading-8 black-text">Please fill out your contact information</p>
            </div>

            <!-- fill out form -->
            <form action="#" method="POST" class="m-auto mt-16 max-w-xl sm:mt-20">
                <div class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                    <div>
                        <label for="first-name" class="block text-sm font-semibold leading-6 black-text">First name</label>
                        <div class="mt-2.5">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="white-bg round-corner border-none text-sm w-full h-11 mb-4" v-model="AddStudentData.studentFirstName" />
                        </div>
                        <label for="first-name" class="block text-sm font-semibold leading-6 black-text">{{ alert }}</label>
                    </div>

                    <div>
                        <label for="last-name" class="block text-sm font-semibold leading-6 black-text">Last name</label>
                        <div class="mt-2.5">
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="white-bg round-corner border-none text-sm w-full h-11 mb-4" v-model="AddStudentData.studentLastName" />
                        </div>
                    </div>
            
                    <div class="sm:col-span-2">
                        <label for="email" class="block text-sm font-semibold leading-6 black-text">Email</label>
                        <div class="mt-2.5">
                            <input type="email" name="email" id="email" autocomplete="email" class="white-bg round-corner border-none text-sm w-full h-11 mb-4" v-model="AddStudentData.studentEmail"/>
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="message" class="block text-sm font-semibold leading-6 black-text">Message</label>
                        <div class="mt-2.5">
                            <textarea name="message" id="message" rows="4" class="white-bg round-corner border-none text-sm w-full h-18 mb-4" v-model="AddStudentData.studentMsg" />
                        </div>
                    </div>

                </div>
                
                <div class="mt-4">
                    <RouterLink to='/'>
                        <button type="submit" class="w-full black-btn" @click="firebaseAddSingleStudent()">Book lesson</button>
                    </RouterLink>
                    
                </div>
            </form>  
        </div>

        <!-- below form with text -->
        <div class="mt-6 text-center">
            <p>
                Your personal information will not be used for marketing.<br>You will receive a confirmation of your booking via e-mail.
            </p>
        </div>

    </div>

    <!-- <p>{{ AddStudentData.studentName }}</p> -->


</template>

<script setup>
import useStudentInfo from '../modules/useStudentInfo';
import { onMounted } from 'vue'

// create file and only grab data we need... add everytime u want to add a function like add button that deletes items
const { 
    AddStudentData,
    firebaseAddSingleStudent,

} = useStudentInfo();

// scroll to top when opening page
onMounted(() => {
  window.scrollTo(0, 0)
})





</script>

<style scoped>

</style>