<script setup>
import useTutors from '../modules/useTutors.js'
import { onMounted } from 'vue'
import { ref } from 'vue'


const { tutors, getTutorsData } = useTutors();

// scroll to top when opening page
onMounted(() => {
  getTutorsData();
})


onMounted(() => {
  window.scrollTo(0, 0)
})


// front page image
let frontPageImg = ref('https://firebasestorage.googleapis.com/v0/b/language-booking-system.appspot.com/o/Frontpage%20img%2Ffront-page-img.jpg?alt=media&token=59e6569c-4026-4f62-9201-2a4f85e981cb&_gl=1*1dwwx47*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY5NjYyMTMxOS45My4xLjE2OTY2MjMyMjQuNTguMC4w')

// chess images
let chessOne = ref('https://firebasestorage.googleapis.com/v0/b/language-booking-system.appspot.com/o/Chess%20images%2Fextra-img-one.jpg?alt=media&token=a2c103d2-46e0-4fd2-af8d-a6db7359889e&_gl=1*1umk082*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY5NjYyMTMxOS45My4xLjE2OTY2MjI5MjUuNjAuMC4w')
let chessTwo = ref('https://firebasestorage.googleapis.com/v0/b/language-booking-system.appspot.com/o/Chess%20images%2Fextra-img-two.jpg?alt=media&token=fc90cdc7-3451-429b-8f25-e6f9e2916621&_gl=1*1dq2v30*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY5NjYyMTMxOS45My4xLjE2OTY2MjI5NjguMTcuMC4w')
let chessThree = ref('https://firebasestorage.googleapis.com/v0/b/language-booking-system.appspot.com/o/Chess%20images%2Fextra-img-three.jpg?alt=media&token=76a803bc-bd8a-4296-9248-5dc35af36281&_gl=1*k8jcfd*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY5NjYyMTMxOS45My4xLjE2OTY2MjI5NzYuOS4wLjA.')


</script>

<template>
  <main class="pt-20">
    <!-- <div v-if="isLoggedIn">Logged in</div>

    <div v-else>Ikke logged ind</div> -->

    <div class="flex tertiary-bg">
      <div class="frontpage-left ten-percent pt-20 pb-20 justify-centercontent-center">
        <h1 class="pb-2">Learn a language today</h1>
        <p class="pb-6">We have professional tutors from different countries ready to teach you your desired language with 1 on 1 talks with a tutor.</p>
        <RouterLink to="/"><button class="black-btn">Learn more</button></RouterLink>
      </div>

      <div class="frontpage-right ten-percent pt-20 pb-20 justify-center content-center">
        <div class="round-corner">
          <img :src="frontPageImg" alt="frontpage image">
        </div>
      </div>
    </div>

    <div class="ten-percent pt-14 pb-14 primary-bg">
      <h3 class="pb-2 text-2xl">Find your Dutch tutor online</h3>
      <p>Our online platform allows you to choose from a wide range of Dutch classes <br> and schedule a lesson in your desired language.</p>
    </div>

    <div v-for="language in languages" :key="language" class="ten-percent pt-6 pb-6 lang-btn-container flex gap-4 flex-row">
      <!-- <button class="white-btn">{{language.languages}}</button> -->
      <!-- <button class="white-btn">Dutch</button>
      <button class="white-btn">English</button> -->
    </div>


      <!-- container for all cards with tutors -->
      <div class="cards-container pt-14 pb-14 flex flex-row gap-x-4 gap-y-6 ten-percent primary-bg">
        <div v-for="tutor in tutors" :key="tutor" class="card">
          <RouterLink :to="{ name: 'tutordetails', params: { id: tutor.id }}">

            <div class="card-content flex flex-col round-corner tertiary-bg">
              <div class="ten-percent pt-6 pb-5 round-corner">
                <!-- <img src="tutor.tutorImg" alt="tutors-profile-picture"> -->
              </div>

              <div class="flex flex-col ten-percent">
                <h5 class="pb-2 text-lg">{{ tutor.tutorName }}</h5>
                <p>{{ tutor.tutorSpeaks }}</p>

                <hr class="mt-9 mb-4">
                <div class="flex flex-col">
                  <p>Price per lesson:</p>
                  <p class="font-bold">{{ tutor.tutorPrice }} EUR</p>
                </div>
              </div>
            </div>
          </RouterLink> 
        </div>
      </div>


    <!-- chess design with what you can do on the website -->
    <div class="flex flex-col">

      <!-- Online tutor -->
      <div class="chess secondary-bg flex">
        <div class="w-6/12 flex flex-col items-center justify-center">
          <img :src="chessOne" alt="student-lesson">
        </div>

        <div class="w-6/12 ten-percent flex flex-col items-center justify-center pt-12">
          <div>
            <h5 class="white-headline pb-2 text-3xl">Online tutor</h5>
            <p class="white-text">You can browse through many different tutors who are ready to teach you online in a 1 on 1 conversation.</p>
          </div>
        </div>
      </div>

      <!-- Learn at any level -->
      <div class="chess primary-bg flex">
        <div class="w-6/12 ten-percent flex flex-col items-center justify-center pt-12">
          <div>
            <h5 class="pb-2 text-3xl">Learn at any level</h5>
            <p>Our tutors can teach you a language no matter what skill level is.<br>They will adjust to your level and help you with tasks that fits your language level best.</p>
          </div>
        </div>

        <div class="w-6/12 flex flex-col items-center justify-center">
          <img :src="chessTwo" alt="tutor-teaching">
        </div>
      </div>

      <!-- three different languages -->
      <div class="chess secondary-bg flex">
        <div class="w-6/12 flex flex-col items-center justify-center">
          <img :src="chessThree" alt="hello-in-languages">
        </div>

        <div class="w-6/12 ten-percent flex flex-col items-center justify-center pt-12">
          <div>
            <h5 class="white-headline pb-2 text-3xl">Three different languages</h5>
            <p class="white-text">We have tutors teaching three languages. We plan on expanding to more languages so you can learn even more languages.</p>
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