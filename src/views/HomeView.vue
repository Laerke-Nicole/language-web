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
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    <!-- <div v-if="isLoggedIn">Logged in</div>

    <div v-else>Ikke logged ind</div> -->

    <div class="container tenPercent flex flex-col justify-center ">
      <div>
        <button class="button">Language</button>
        <button class="button">Something</button>
      </div>


      <div class="pt-14 pb-14 flex flex-col self-center">
        <div v-for="tutor in tutors" :key="tutor" class="p-4">
          <RouterLink :to="{ name: 'tutordetails', params: { id: tutor.id }}">
            <div class="flex bg-green-600 h-56">
              <div>
                <img :src="tutor.tutorImage" alt="tutor image" />
              </div>

              <div class="flex flex-col">
                <p>{{ tutor.tutorName }}</p>
                <p>{{ tutor.tutorSpeaks }}</p>
                <p>{{ tutor.tutorDescription }}</p>
                <p class="pt-4">{{ tutor.tutorPrice }} EUR</p>
              </div>

              <div>
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
.container {
  width: 100%;

}

</style>