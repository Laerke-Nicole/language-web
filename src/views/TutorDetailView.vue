<template>
  <div class="pt-20">
    <div v-for="tutor in tutorDetail" :key="tutor">
      <div class="tutor-profile flex">
        <!-- left side with img and about -->
        <div class="left-tutor flex flex-col w-3/6 ten-percent white-bg pt-20 pb-20">
          <h2 class="text-3xl">{{ tutor.tutorName }}</h2>

          <div class="tutor-pfp pt-6 pb-6 pr-16">
            <img :src="tutor.tutorImg" alt="tutor-profile-picture">
          </div>

          <div>
            <h4 class="text-2xl">About me</h4>
            <p>{{ tutor.tutorAbout }}</p>
          </div>
          
        </div>

        <!-- right side with teaching style and statistics -->
        <div class="right-tutor w-3/6 secondary-bg">
          <div>
            <div class="primary-bg ten-percent pt-20 pb-20">
              <h3 class="text-2xl">My teaching style</h3>
              <p>{{ tutor.tutorTeachingStyle }}</p>
            </div>

            <div class="tutor-stats flex justify-between ten-percent secondary-bg pt-20 pb-20">
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
      <div class="flex justify-center items-center ten-percent pt-12 pb-12 white-bg-second gap-4">
        <div>
          <h3>Book a lesson now</h3>
        </div>
        
        <!-- button to book lecture -->
        <div>
          <!-- direct to booking view if user is logged in -->
          <div v-if="isLoggedIn()">
            <RouterLink :to="{ name: 'bookingview' }">
              <button class="black-btn">Book lesson</button>
            </RouterLink>
          </div>

          <!-- else direct to login view -->
          <div v-else>
            <RouterLink :to="{ name: 'login' }">
              <button class="black-btn">Book lesson</button>
            </RouterLink>
          </div>
            
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import useTutors from '@/modules/useTutors.js'
import { onMounted, toRefs, computed } from 'vue'
import isLoggedIn from '@/modules/isLoggedIn.js'

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
/* responsive design */
@media only screen and (max-width: 950px) {
  .tutor-profile {
    flex-direction: column;
  }

  .right-tutor, .left-tutor {
    width: 100%;
  }

  .tutor-pfp {
    padding-right: 0;
  }


  /* calendar */
  .calendar-container {
    gap: 40px;
  }

  .times {
    gap: 40px;
  }

}


@media only screen and (max-width: 600px) {
  /* calendar */
  .calendar-container {
    gap: 16px;
  }

  .calendar-container h5 {
    font-size: 18px;
  }

  .times {
    gap: 16px;
  }
}


@media only screen and (max-width: 500px) {
  .tutor-stats{
    flex-direction: column;
    gap: 24px;
  }
}

/* responsive end */

</style>