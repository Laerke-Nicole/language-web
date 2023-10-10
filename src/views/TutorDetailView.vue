<template>
  <div class="pt-20">
    <div v-for="tutor in tutorDetail" :key="tutor">
      <div class="flex">
        <!-- left side with img and about -->
        <div class="flex flex-col w-3/6 ten-percent white-bg pt-20 pb-20">
          <h2>{{ tutor.tutorName }}</h2>
          <img :src="tutor.tutorImg" alt="tutor-profile-picture" class="pt-6 pb-6">
          <div>
            <h4 class="text-2xl">About me</h4>
            <p>{{ tutor.tutorAbout }}</p>
          </div>
          
        </div>

        <!-- right side with teaching style and statistics -->
        <div class="w-3/6">
          <div>
            <div class="primary-bg ten-percent pt-20 pb-20">
              <h3 class="text-2xl">My teaching style</h3>
              <p>{{ tutor.tutorTeachingStyle }}</p>
            </div>

            <div class="flex justify-between ten-percent secondary-bg pt-20 pb-20">
              <div class="flex flex-col">
                <h4 class="white-headline text-3xl">{{ tutor.tutorLessons }}</h4>
                <p class="white-text">Lessons</p>
              </div>
              
              <div class="flex flex-col">
                <h4 class="white-headline text-3xl">{{ tutor.tutorStudents }}</h4>
                <p class="white-text">Students</p>
              </div>
              
              <div class="flex flex-col">
                <h4 class="white-headline text-3xl">{{ tutor.tutorAttendance }} %</h4>
                <p class="white-text">Attendence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- booking -->
    <div>
      <div class="flex justify-center items-center ten-percent pt-12 pb-4 white-bg-second">
        <h3>Book a lesson now</h3>
      </div>
      
      <div class="flex flex-col justify-center items-center ten-percent secondary-bg pt-8 pb-8">
        <div class="pb-6">
          <h4 class="white-text">January, 2023</h4>
        </div>

        <div class="flex gap-20">
          <div class="flex flex-col justify-center items-center">
            <h5 class="white-headline text-xl">Mon</h5>
            <p class="white-text">3</p>
          </div>

          <div class="flex flex-col justify-center items-center">
            <h5 class="white-headline text-xl">Tue</h5>
            <p class="white-text">4</p>
          </div>

          <div class="flex flex-col justify-center items-center">
            <h5 class="white-headline text-xl">Wed</h5>
            <p class="white-text">5</p>
          </div>

          <div class="flex flex-col justify-center items-center">
            <h5 class="white-headline text-xl">Thu</h5>
            <p class="white-text">6</p>
          </div>

          <div class="flex flex-col justify-center items-center">
            <h5 class="white-headline text-xl">Fri</h5>
            <p class="white-text">7</p>
          </div>

          <div class="flex flex-col justify-center items-center">
            <h5 class="white-headline text-xl">Sat</h5>
            <p class="white-text">8</p>
          </div>

          <div class="flex flex-col justify-center items-center">
            <h5 class="white-headline text-xl">Sun</h5>
            <p class="white-text">9</p>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import useTutors from '@/modules/useTutors.js'
import { onMounted, toRefs, computed } from 'vue'

onMounted(() => {
  getTutorsData();
})

// get single page
const props = defineProps({
id: String
})

const { id } = toRefs(props)

const { tutors, getTutorsData } = useTutors();

const tutorDetail = computed(() => {
    return tutors.value.filter(item => item.id == id.value)
})

// scroll to top when opening page
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>

</style>