<script setup>
import useTutors from '../modules/useTutors.js'
import { onMounted } from 'vue'


const { tutors, getTutorsData } = useTutors();

onMounted(() => {
  getTutorsData();
})


onMounted(() => {
  window.scrollTo(0, 0)
})

</script>

<template>
  <main>
    <!-- <div v-if="isLoggedIn">Logged in</div>

    <div v-else>Ikke logged ind</div> -->

    <div class="p-20 container tenPercent flex flex-col justify-center">
      <div class="flex gap-4 flex-row">
        <button class="button">Language</button>
        <button class="button">Something</button>
      </div>

      <h1>hej</h1>

      <!-- container for all tutors -->
      <div class="pt-14 pb-14 flex flex-col gap-4">
        <div v-for="tutor in tutors" :key="tutor">
          <RouterLink :to="{ name: 'tutordetails', params: { id: tutor.id }}">

            <!-- box with tutor info -->
            <div class="rounded flex flex-row pt-12 pb-12 primary-bg">

              <!-- tutor profile picture -->
              <div class="tenPercent flex flex-col justify-center">
                <!-- <img :src="tutor.tutorImage" alt="tutor image" /> -->
                <div class="p-10 secondary-bg"></div>
              </div>

              <!-- tutor info -->
              <div class="flex flex-col gap-3 w-4/12">
                <p>{{ tutor.tutorName }}</p>
                <p>{{ tutor.tutorSpeaks }}</p>
                <p>{{ tutor.tutorDescription }}</p>
                <p class="pt-4">{{ tutor.tutorPrice }} EUR</p>
              </div>

              <!-- button with call to action -->
              <div class="tenPercent flex flex-col justify-end">
                <button class="button">See more</button>
              </div>
            </div>
            
      
      
          </RouterLink> 

          </div>
      </div>
      
      <div>
       



          

      </div>
    </div>


    
  </main>
</template>


<style scoped>



</style>