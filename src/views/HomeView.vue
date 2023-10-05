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

    <div class="flex">
      <div class="frontpage-left ten-percent pt-20 pb-20 justify-centercontent-center">
        <h1 class="pb-2">Learn a language today</h1>
        <p class="pb-6">We have professional tutors from different countries ready to teach you your desired language with 1 on 1 talks with a tutor.</p>
        <button class="black-btn">Learn more</button>
      </div>

      <div class="frontpage-right ten-percent pt-20 pb-20 justify-center content-center">
        <div class="round-corner">
          <img src="" alt="frontpage image">
        </div>
      </div>
    </div>

    <div class="ten-percent pt-14 pb-14 primary-bg">
      <h3 class="pb-2 text-2xl">Find your Dutch tutor online</h3>
      <p>Our online platform allows you to choose from a wide range of Dutch classes <br> and schedule a lesson in your desired language.</p>
    </div>

    <div class="ten-percent pt-6 pb-6 lang-btn-container flex gap-4 flex-row">
      <button class="white-btn">English</button>
      <button class="white-btn">Danish</button>
      <button class="white-btn">Dutch</button>
      <button class="white-btn">Spanish</button>
    </div>


      <!-- container for all cards with tutors -->
      <div class="cards-container pt-14 pb-14 flex flex-row gap-x-4 gap-y-6 ten-percent primary-bg">
        <div v-for="tutor in tutors" :key="tutor" class="card">
          <RouterLink :to="{ name: 'tutordetails', params: { id: tutor.id }}">

            <div class="card-content flex flex-col round-corner tertiary-bg">
              <div class="ten-percent pt-6 pb-5 round-corner">
                <img src="" alt="tutors-profile-picture">
              </div>

              <div class="flex flex-col ten-percent">
                <h5 class="pb-2 text-lg">{{ tutor.tutorName }}</h5>
                <p>{{ tutor.tutorSpeaks }}</p>

                <hr class="mt-9 mb-4">
                <div class="flex flex-col">
                  <p>Lesson price:</p>
                  <p class="font-bold">{{ tutor.tutorPrice }} EUR</p>
                </div>
              </div>
            </div>

            <!-- box with tutor info -->
            <!-- <div class="rounded flex flex-row pt-12 pb-12"> -->

              <!-- tutor profile picture -->
              <!-- <div class="ten-percent flex flex-col justify-center"> -->
                <!-- <img :src="tutor.tutorImage" alt="tutor image" /> -->
                <!-- <div class="p-10 secondary-bg"></div>
              </div> -->

              <!-- tutor info -->
              <!-- <div class="flex flex-col gap-3 w-4/12">
                <p>{{ tutor.tutorName }}</p>
                <p>{{ tutor.tutorSpeaks }}</p>
                <p>{{ tutor.tutorDescription }}</p>
                <p class="pt-4">{{ tutor.tutorPrice }} EUR</p>
              </div> -->

              <!-- button with call to action -->
              
            <!-- </div> -->
          </RouterLink> 
        </div>
      </div>


    <!-- chess design with what you can do on the website -->
    <div class="flex flex-col">

      <!-- Online tutor -->
      <div class="chess secondary-bg flex pt-14 pb-14">
        <div class="w-6/12 ten-percent flex flex-col items-center justify-center">
          <img src="" alt="student-lesson">
        </div>

        <div class="w-6/12 ten-percent flex flex-col items-center justify-center pt-12">
          <div>
            <h5 class="white-headline pb-2 text-3xl">Online tutor</h5>
            <p class="white-text">You can browse through many different tutors who are ready to teach you online in a 1 on 1 conversation.</p>
          </div>
        </div>
      </div>

      <!-- Learn at any level -->
      <div class="chess primary-bg flex pt-14 pb-14">
        <div class="w-6/12 ten-percent flex flex-col items-center justify-center pt-12">
          <div>
            <h5 class="pb-2 text-3xl">Learn at any level</h5>
            <p>Our tutors can teach you a language no matter what skill level is.<br>They will adjust to your level and help you with tasks that fits your language level best.</p>
          </div>
        </div>

        <div class="w-6/12 ten-percent flex flex-col items-center justify-center">
          <img src="" alt="tutor-teaching">
        </div>
      </div>

      <!-- Four different languages -->
      <div class="chess secondary-bg flex pt-14 pb-14">
        <div class="w-6/12 ten-percent flex flex-col items-center justify-center">
          <img src="" alt="hello-in-languages">
        </div>

        <div class="w-6/12 ten-percent flex flex-col items-center justify-center pt-12">
          <div>
            <h5 class="white-headline pb-2 text-3xl">Four different languages</h5>
            <p class="white-text">We have tutors teaching four languages. We plan on expanding to more languages so you can learn even more languages.</p>
          </div>
        </div>
      </div>
    </div>



    
  </main>
</template>


<style scoped>
/* front page section */
.frontpage-left, .frontpage-right {
  width: 50%;
}

.frontpage-right {
  background-color: var(--secondary-color);
}


/* buttons with languages */
.lang-btn-container {
  background-color: var(--secondary-color);
}


/* loop with card */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* This will evenly space the cards in a row */
}

.card {
  width: calc(33.33% - 20px);
}

.card-content {
  flex-grow: 1; /* Allow content to expand within the card */
  height: 300px;
}


/* chess design */
.chess{
  /* height: 80vh; */
}


</style>