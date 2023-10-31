<template>

<!-- <div v-if="isLoggedIn && email.value === 'admin@admin.com' && password.value === '123456'">
  Then show admin page
</div>

<div v-else="isloggedIn">
  Then show the normal page
</div> -->




    <!-- buttons to choose what to view -->
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

        <!-- display list of tutors where you can edit them -->
        <div>
          <TutorAdmin></TutorAdmin>
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


// teleport components
import AddTutor from '../components/AddTutor.vue'
import StudentAdmin from '../components/StudentAdmin.vue'
import TutorAdmin from '../components/TutorAdmin.vue'



// create file and only grab data we need... add everytime u want to add a function like add button that deletes items
const {
  getTutorsData, 
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