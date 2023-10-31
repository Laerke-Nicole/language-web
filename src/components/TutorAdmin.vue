<template>
    <!-- printed tutor information in a loop -->
    <div v-for="tutor in tutors" :key="tutor">
          <div class="card-content flex flex-col round-corner white-bg pt-12 pb-12 mb-11">
            <div class="flex flex-col ten-percent">

              <!-- list of printed tutor information -->
              <!-- <div class="flex flex-col gap-2"> -->
                <!-- <AddedTutorList></AddedTutorList> -->
                
                <!-- <h5 class="text-xl">
                  Tutor name: {{ tutor.tutorName }}
                </h5>
                <p>
                  {{ tutor.tutorSpeaks }}
                </p>
                <p>Image</p>
                <p>
                  <img :src="tutor.tutorImg" alt="tutor image" class="w-20 h-20">
                </p>
              </div>      -->

              
              <!-- inputs to edit tutor information where you can edit -->
              <div>
                <h5 class="text-xl">Name</h5>
                <p>
                  <input type="text" placeholder="Edit tutor name" v-model="tutor.tutorName" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4 mt-2.5">
                </p>

                <p>Speaks</p>
                <select v-model="tutor.tutorSpeaks" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4 mt-2.5">
                  <option v-for="language in languages" :key="language" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0">
                    <p>{{ language.language }}</p>
                  </option> 
                </select>

                <p>Price</p>
                <p>
                  <input type="text" placeholder="Edit tutor price" v-model="tutor.tutorPrice" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4 mt-2.5">
                </p>

                <p class="black-text">About</p>
                <div class="mt-2.5">
                  <textarea name="message" id="message" rows="4" class="white-bg-second round-corner border-none text-sm w-full h-18 mb-4" v-model="tutor.tutorAbout" />
                </div>

                <p class="black-text">Teaching style</p>
                <div class="mt-2.5">
                  <textarea name="message" id="message" rows="4" class="white-bg-second round-corner border-none text-sm w-full h-18 mb-4" v-model="tutor.tutorTeachingStyle" />
                </div>

                <div class="flex gap-4">
                  <div class="flex flex-col">
                    <p>Lessons</p>
                    <p>
                      <input type="text" placeholder="Edit tutor lessons" v-model="tutor.tutorLessons" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4 mt-2.5">
                    </p>
                  </div>

                  <div class="flex flex-col">
                    <p>Students</p>
                    <p>
                      <input type="text" placeholder="Edit tutor students" v-model="tutor.tutorStudents" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4 mt-2.5">
                    </p>
                  </div>
                  
                  <div class="flex flex-col">
                    <p>Attendence</p>
                    <p>
                      <input type="text" placeholder="Edit tutor attendence" v-model="tutor.tutorAttendance" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4 mt-2.5">
                    </p>
                  </div>
                </div>

                <p>Image</p>
                <p>
                  <img :src="tutor.tutorImg" alt="tutor image" class="w-20 h-20 mt-2.5">
                </p>

                <div class="flex gap-4">
                  <div>
                    <!-- Delete tutor button -->
                    <button class="btn-delete black-btn mt-4" @click="firebaseDeleteSingleTutor(tutor.id)">Delete tutor</button>
                    
                  </div>
                        
                  <div>
                    <!-- complete edit button -->
                    <!-- teleport modal with update tutor -->
                    <!-- <button @click="isOpen = true" class="black-btn mb-12">Edit tutor information</button>
                    <teleport to="body">
                      <div class="modal" v-if="isOpen">
                        <UpdateTutor @close="isOpen = false">

                        </UpdateTutor>
                      </div>
                    </teleport> -->
                  </div>
                  
                <button class="btn-edit black-btn mt-4" @click="firebaseUpdateSingleTutor(tutor)">Edit tutor information</button>
              </div>
                
              </div>
              
            </div>
          </div>
        </div>
</template>

<script setup>
import { onMounted } from 'vue'
import useTutors from '../modules/useTutors.js'
import languages from '../modules/useLanguages.js'


// create file and only grab data we need... add everytime u want to add a function like add button that deletes items
const { tutors, 
  getTutorsData, 
  firebaseDeleteSingleTutor, 
  firebaseUpdateSingleTutor,
} = useTutors();

onMounted(() => {
  getTutorsData();
})



// scroll to top when opening page
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>

</style>