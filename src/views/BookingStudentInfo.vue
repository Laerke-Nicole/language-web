<template>
    <div class="pt-20 pb-12 white-bg flex flex-col justify-center items-center">
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
                        <label class="block text-sm font-semibold leading-6 black-text">Language level</label>
                        <select v-model="AddStudentData.studentLvl" class="white-bg round-corner border-none text-sm w-full h-11 mb-4 mt-2.5">
                          <option v-for="level in levels" :key="level" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0">
                            <p>{{ level.level }}</p>
                          </option> 
                        </select>
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
                
                <!-- <div class="mt-4">
                    <RouterLink to='/'>
                        <button type="submit" class="w-full black-btn" @click="firebaseAddSingleStudent()">Book lesson</button>
                    </RouterLink>
                    
                </div> -->
            </form>  
        </div>

        
        <!-- <p>Month </p>
        <select v-model="AddStudentData.studentMonth" class="month dates border-0 py-1.5 pl-6 pr-20">
          <option v-for="month in months" :key="month" >
            <p>{{ month.month }}</p>
          </option>
        </select> -->

    </div>


    <div class="flex flex-col justify-center items-center ten-percent secondary-bg pt-8 pb-12">
        <!-- <div class="pb-6">
          <h3 class="white-text">January, 2023</h3>
        </div> -->



        

        <!-- calendar with day and date -->
        <!-- <div class="calendar-container flex gap-20">
          <div v-for="calendar in calendar" :key="calendar">
            <div class="date flex flex-col justify-center items-center">
              <h5 class="white-headline text-xl">{{ calendar.day }}</h5>
              <p class="white-text">{{ calendar.date }}</p>
            </div>
          </div>
        </div> -->


        <div class="flex flex-col pt-8">
          <div>
            <h3 class="white-headline text-xl pb-2">Time slots:</h3>
          </div>
          
          <div class="times flex gap-48">
            <div>
              <h5 class="white-headline text-lg">Morning</h5>

                <select v-model="AddStudentData.morningIsTaken" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
                  <option class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0">
                    <p>Book</p>
                  </option> 
                </select>
            </div>

            <div>
              <h5 class="white-headline text-lg">Afternoon</h5>

              <select v-model="AddStudentData.afternoonIsTaken" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
                <option class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0">
                  <p>Book</p>
                </option> 
              </select>
            </div>

            <div>
              <h5 class="white-headline text-lg">Evening</h5>

              <select v-model="AddStudentData.eveningIsTaken" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
                <option class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0">
                  <p>Book</p>
                </option> 
              </select>
            </div>
          </div>

          <!-- button to book lecture -->
          <div class="pt-6">
            <RouterLink to="/">
              <button class="black-btn" @click="firebaseAddSingleStudent()">Book lesson</button>
            </RouterLink>
          </div>
        </div>
      </div> 
</template>

<script setup>
import useStudentInfo from '../modules/useStudentInfo'
import { onMounted } from 'vue'
import levels from '../modules/languageLvl.js'

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