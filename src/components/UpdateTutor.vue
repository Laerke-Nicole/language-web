<template>
  
  <div>
    <dialog ref="dialogg" id="dialogbox" >
      <h1>Updated tutor information</h1>

    </dialog>
    <div class="flex gap-4 pb-12">
      <button
          id="floatyClose"
          @click="$emit('close')"
          class="black-btn"
      >
      Exit
      </button>
  
      <!-- complete update button -->
      <button class="black-btn" @click="firebaseUpdateSingleItem(tutor.id), snackbarTest()">Update tutor information</button>
    </div>
    
    <h1>test</h1>

    <div v-if="UpdateTutor">
      <p>Name</p>
      <p>
        <input type="text" placeholder="Edit tutor name" v-model="UpdateTutor.tutorName" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
      </p>

      
<!-- 
      <p>Speaks</p>
      <select v-model="tutor.tutorSpeaks" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
        <option v-for="language in languages" :key="language" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0">
          <p>{{ language.language }}</p>
        </option> 
      </select>

      <p>Price</p>
      <p>
        <input type="text" placeholder="Edit tutor price" v-model="tutor.tutorPrice" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
      </p>

      <p>About</p>
      <p>
        <input type="text" placeholder="Edit tutor about" v-model="tutor.tutorAbout" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
      </p>

      <p>Teaching style</p>
      <p>
        <input type="text" placeholder="Edit tutor teaching style" v-model="tutor.tutorTeachingStyle" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
      </p>

      <div class="flex gap-4">
        <div class="flex flex-col">
          <p>Lessons</p>
          <p>
            <input type="text" placeholder="Edit tutor lessons" v-model="tutor.tutorLessons" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
          </p>
        </div>

        <div class="flex flex-col">
          <p>Students</p>
          <p>
            <input type="text" placeholder="Edit tutor students" v-model="tutor.tutorStudents" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
          </p>
        </div>
        
        <div class="flex flex-col">
          <p>Attendence</p>
          <p>
            <input type="text" placeholder="Edit tutor attendence" v-model="tutor.tutorAttendance" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
          </p>
        </div>
      </div>

      <p>Image</p>
      <p>
        <img :src="tutor.tutorImg" alt="tutor image" class="w-20 h-20">
      </p> -->
    </div>

  </div>

</template>

<script setup>
import { onMounted, toRefs, computed } from 'vue'
import useTutors from '../modules/useTutors.js'
import languages from '../modules/useLanguages.js'
import snackbarTest from '../modules/snackbarTest';




// create file and only grab data we need... add everytime u want to add a function like add button that deletes items
const { tutors, 
  getTutorsData, 
  firebaseUpdateSingleItem,
} = useTutors();

onMounted(() => {
  getTutorsData();
})

// get single page
const props = defineProps({
  id: String
})

const { id } = toRefs(props)

const UpdateTutor = computed(() => {
  // return tutors.value.filter(item => item.id == id.value)
  return tutors.value.find(tutor => tutor.id === id.value)
})


</script>

<style scoped>

</style>