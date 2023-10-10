<template>

<!-- <div v-if="isLoggedIn && email.value === 'admin@admin.com' && password.value === '123456'">
  Så vises admin side
</div>

<div v-else="isloggedIn">
  Then show the normal page
</div> -->


    <div class="parameters-container pt-20">

      <!-- add tutor  -->
      <div class="flex flex-col justify-center gap-2 pt-14">
        <h1 class="pb-2 white-headline">Add tutor information</h1>

        <!-- teleport modal with add tutor -->
        <button @click="isOpen = true" class="black-btn mb-12">Add new tutor</button>
        <teleport to="body">
          <div class="modal" v-if="isOpen">
            <AddTutor @close="isOpen = false">

            </AddTutor>
          </div>
        </teleport>
      </div>

      <!-- printed tutor information in a loop -->
      <div v-for="tutor in tutors" :key="tutor">
        <div class="card-content flex flex-col round-corner white-bg pt-12 pb-12 mb-11">
          <div class="flex flex-col ten-percent">

            <!-- list of printed tutor information -->
            <div class="flex flex-col gap-2">
              <h5 class="text-xl">
                Tutor name: {{ tutor.tutorName }}
              </h5>
              <p>
                Tutor speaks: {{ tutor.tutorSpeaks }}
              </p>
              <p>
                Tutor price: {{ tutor.tutorPrice }}
              </p>
              <p>
                Tutor about: {{ tutor.tutorAbout }}
              </p>
              <p>
                Tutor teaching style: {{ tutor.tutorTeachingStyle }}
              </p>
              <p>
                Tutor lessons: {{ tutor.tutorLessons }}
              </p>
              <p>
                Tutor students: {{ tutor.tutorStudents }}
              </p>
              <p>
                Tutor attendence: {{ tutor.tutorAttendance }} %
              </p>
              <p>
                Tutor image:
              </p>
              <img :src="tutor.tutorImg" alt="tutor image" class="w-20 h-20">
            </div>     

            <!-- edit tutor  -->
            <!-- inputs to edit tutor information -->
            <div>
              <p>Name</p>
              <p>
                <input type="text" placeholder="Edit tutor name" v-model="tutor.tutorName" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
              </p>

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
              </p>

              <div class="flex gap-4">
                <div>
                  <!-- Delete tutor button -->
                  <button class="btn-delete black-btn" @click="firebaseDeleteSingleItem(tutor.id)">Delete tutor</button>
                  
                </div>
                      
                <div>
                  <!-- complete edit button -->
                  <!-- teleport modal with update tutor -->
                  <button @click="isOpen = true" class="black-btn mb-12">Edit tutor information</button>
                  <teleport to="body">
                    <div class="modal" v-if="isOpen">
                      <UpdateTutor @close="isOpen = false">

                      </UpdateTutor>
                    </div>
                  </teleport>
                </div>
                
              <!-- <button class="btn-edit black-btn" @click="firebaseUpdateSingleItem(tutor)">Edit tutor information</button> -->
            </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>

</template>


<script setup>
import { onMounted } from 'vue'
import { ref } from 'vue';
import useTutors from '../modules/useTutors.js'
import languages from '../modules/useLanguages.js'

// teleport components
import AddTutor from '../components/AddTutor.vue'
import UpdateTutor from '../components/UpdateTutor.vue'

// create file and only grab data we need... add everytime u want to add a function like add button that deletes items
const { tutors, 
  getTutorsData, 
  firebaseDeleteSingleItem, 
  // firebaseAddSingleItem,
  // AddTutorData,
  firebaseUpdateSingleItem,
} = useTutors();

onMounted(() => {
  getTutorsData();
})


// scroll to top when opening page
onMounted(() => {
  window.scrollTo(0, 0)
})


// modal button open and close
const isOpen = ref(false);



</script>


<style scoped>
.parameters-container {
  padding: 0 10%;
  padding-top: 80px;
}


/* modal styling */
.modal {
  position: fixed;
  top: 10%;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal > div {
  background-color: var(--extra-white);
  border-radius: 10px;
  padding: 45px 20px;
  width: 90%;
  max-height: 80%;
  top: 40px;
  left: 40px;
  position: absolute;
  overflow-y: auto;
}

#floatyClose {
  position: absolute;
  top: 96px;
  margin: 10px;
  cursor: pointer;
  z-index:110;
}



</style>