<template>
    <div>
      <dialog ref="dialogg" id="dialogbox" >
        <h1>Added stuff to firebase, yay you!</h1>
  
      </dialog>
      <div class="flex gap-4 pb-12">
        <button
            id="floatyClose"
            @click="$emit('close')"
            class="black-btn"
        >
        Exit
        </button>
    
        <button class="black-btn" @click="firebaseAddSingleItem(), snackbarTest()">Add tutor</button>
      </div>
      
      <div>
        <input type="text" placeholder="Tutors name" v-model="AddTutorData.tutorName" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
        <!-- language they speak -->
        <div>
          <p class="black-text">Select a language in the dropdown: </p>
        </div>
        <select v-model="AddTutorData.tutorSpeaks" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
          <option v-for="language in languages" :key="language" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0">
            <p>{{ language.language }}</p>
          </option> 
        </select>

        <input type="text" placeholder="Tutor price" v-model="AddTutorData.tutorPrice" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
        <input type="text" placeholder="About tutor" v-model="AddTutorData.tutorAbout" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
        <input type="text" placeholder="Tutors teaching style" v-model="AddTutorData.tutorTeachingStyle" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
        <input type="text" placeholder="Tutors lessons" v-model="AddTutorData.tutorLessons" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
        <input type="text" placeholder="Tutors students" v-model="AddTutorData.tutorStudents" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
        <input type="text" placeholder="Tutors attendence" v-model="AddTutorData.tutorAttendance" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
        <input type="text" placeholder="Tutor image" v-model="AddTutorData.tutorImg" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
  
      </div>
  
    </div>
  </template>
  
<script setup>
import { ref } from 'vue';
import useTutors from '../modules/useTutors';
import languages from '../modules/useLanguages.js'

const dialogg = ref(null);

let snackbarTest = () => {
    dialogg.value.setAttribute("open", "");
    //document.getElementById("dialogbox").setAttribute("open", "");
    setTimeout(() => { 
        dialogg.value.removeAttribute("open");
        // document.getElementById("dialogbox").removeAttribute("open");
    }, 2000);
}

const { 
    firebaseAddSingleItem ,
    AddTutorData,
} = useTutors();

</script>
  
<style scoped>

</style>