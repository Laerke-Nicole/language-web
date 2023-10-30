<template>

<!-- <div v-if="isLoggedIn && email.value === 'admin@admin.com' && password.value === '123456'">
  Then show admin page
</div>

<div v-else="isloggedIn">
  Then show the normal page
</div> -->





    <div class="ten-percent pt-20 pb-20">
      <h1 class="white-headline pt-14">Choose what to view:</h1>

      <div class="pt-4 pb-14 flex gap-4">
        <div>
          <button class="white-btn" @click="toggleTutors">Show tutor list</button>
        </div>
        <div>
          <button class="white-btn" @click="toggleStudents">Show booked student info</button>
        </div>
      </div>

      <!-- displays tutors -->
      <div v-if="showTutors">
        <!-- list of students that booked with their information -->
        <!-- add tutor  -->
        <div class="flex flex-col justify-center gap-2">
          <h1 class="pb-2 white-headline">Add tutor information</h1>

          <!-- teleport modal with add tutor -->
          <button @click="isOpen = true" class="white-btn mb-12">Add new tutor</button>
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
                <!-- <AddedTutorList></AddedTutorList> -->
                
                <h5 class="text-xl">
                  Tutor name: {{ tutor.tutorName }}
                </h5>
                <p>
                  {{ tutor.tutorSpeaks }}
                </p>
                <p>Image</p>
                <p>
                  <img :src="tutor.tutorImg" alt="tutor image" class="w-20 h-20">
                </p>
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
                  
                <button class="btn-edit black-btn" @click="firebaseUpdateSingleTutor(tutor)">Edit tutor information</button>
              </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <!-- displays students -->
      <div v-if="showStudents">
        <div>
          <StudentAdmin></StudentAdmin>
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
import AddedTutorList from '../components/AddedTutorList.vue'
import StudentAdmin from '../components/StudentAdmin.vue'



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


// modal button open and close
const isOpen = ref(false);


// toggle tutor
const showTutors = ref(false);
const toggleTutors = () => {
  showTutors.value = !showTutors.value;
}

// toggle student
const showStudents = ref(false);
const toggleStudents = () => {
  showStudents.value = !showStudents.value;
}


</script>


<style scoped>
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