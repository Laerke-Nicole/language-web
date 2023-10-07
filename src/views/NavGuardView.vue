<template>

<!-- <div v-if="isLoggedIn && email.value === 'admin@admin.com' && password.value === '123456'">
  Så vises admin side
</div>

<div v-else="isloggedIn">
  Then show the normal page
</div> -->


    <div class="parameters-container pt-20">
        <div class="flex flex-col justify-center gap-2 pt-14">
            <h1 class="pb-2 white-headline">Add tutor information</h1>

            <input type="text" placeholder="Tutors name" v-model="AddTutorData.tutorName" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
            
            <!-- language they speak -->
            <div>
              <p class="white-text">Select a language in the dropdown: </p>
            </div>
            <select v-model="AddTutorData.tutorSpeaks" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
              <option v-for="language in languages" :key="language" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0">
                <p>{{ language.language }}</p>
              </option> 
            </select>

            <input type="text" placeholder="Tutor price" v-model="AddTutorData.tutorPrice" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
            <input type="text" placeholder="About tutor" v-model="AddTutorData.tutorAbout" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
            <input type="text" placeholder="Tutors teaching style" v-model="AddTutorData.tutorTeachingStyle" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
            <input type="text" placeholder="Tutor image" v-model="AddTutorData.tutorImage" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
        </div>

        <!-- add tutor button -->
        <button class="black-btn mb-20" @click="firebaseAddSingleItem()">Add tutor</button>


        <!-- printed tutor information in a loop -->
        <div v-for="tutor in tutors" :key="tutor">
          <div class="card-content flex flex-col round-corner white-bg pt-12 pb-12 mb-11">
              <div class="flex flex-col ten-percent">
                <!-- list of printed tutor information -->
                <div class="flex flex-col gap-2">
                  <h5 class="text-xl">
                    TutorName: {{ tutor.tutorName }}
                  </h5>
                  <p>
                    TutorSpeaks: {{ tutor.tutorSpeaks }}
                  </p>
                  <p>
                    TutorPrice: {{ tutor.tutorPrice }}
                  </p>
                  <p>
                    TutorAbout: {{ tutor.tutorAbout }}
                  </p>
                  <p>
                    TutorTeachingStyle: {{ tutor.tutorTeachingStyle }}
                  </p>
                  <p>
                    TutorImage: {{ tutor.tutorImage }}
                  </p>
                </div>
                


                <!-- edit and delete tutor buttons -->
                <div class="flex flex-row pt-10 gap-4">
                  <!-- modal with editing -->
                  <!-- edit tutor button -->
                  <button @click="showModal" type="button" class="black-btn flex">Edit tutor</button>
                  <Modal :size="size" v-if="isShowModal" @close="closeModal">
                    <template #header>
                      <div class="flex items-center text-lg">
                        Edit tutor information
                      </div>
                    </template>
                    <template #body>
                      
                      <!-- edit options list -->
                      <p>
                        <input type="text" placeholder="Edit tutor name" v-model="tutor.tutorName" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
                      </p>
                      <p>
                          <input type="text" placeholder="Edit tutors languages" v-model="tutor.tutorSpeaks" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
                      </p>
                      
                    </template>
                    <template #footer>
                      <div class="flex justify-between">

                        <!-- close modal button -->
                        <button @click="closeModal" type="button" class="underline">
                          Cancel
                        </button>

                        <!-- complete edit button -->
                        <button class="btn-edit black-btn" @click="firebaseUpdateSingleItem(tutor.id); closeModal();">Edit tutor information</button>
                        
                      </div>
                    </template>
                  </Modal>

                  <!-- Delete tutor button -->
                  <button class="btn-delete black-btn" @click="firebaseDeleteSingleItem(tutor.id)">Delete tutor</button>

                </div>
              </div>
            </div>
        </div>
    </div>

</template>


<script setup>
import useTutors from '../modules/useTutors.js'
import { onMounted } from 'vue'
import languages from '../modules/useLanguages.js'


// create file and only grab data we need... add everytime u want to add a function like add button that deletes items
const { tutors, 
  getTutorsData, 
  firebaseDeleteSingleItem, 
  firebaseAddSingleItem,
  AddTutorData,
  firebaseUpdateSingleItem,
  // UpdateTutorData
} = useTutors();

onMounted(() => {
  getTutorsData();
})


//modal

import { Modal } from 'flowbite-vue'
import { ref } from 'vue'

const isShowModal = ref(false)
function closeModal() {
  isShowModal.value = false
}
function showModal() {
  isShowModal.value = true
}

onMounted(() => {
  window.scrollTo(0, 0)
})

</script>


<style scoped>
.parameters-container {
    padding: 0 10%;
    padding-top: 80px;
}




</style>