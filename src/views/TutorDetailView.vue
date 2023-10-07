<template>
  <div>
    <div>
      <div v-for="tutor in tutorDetail" :key="tutor">
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
                </div>, 
              </div>
            </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script setup>
import useTutors from '../modules/useTutors.js'
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