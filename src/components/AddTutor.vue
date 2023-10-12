<template>
    <div>
      <dialog ref="dialogg" id="dialogbox" >
        <h1>Added tutor to Firebase</h1>
  
      </dialog>
      <div class="flex gap-4 pb-12">
        <button
            id="floatyClose"
            @click="$emit('close')"
            class="black-btn"
        >
        Exit
        </button>
    
        <button class="black-btn" @click="firebaseAddSingleTutor(), snackbarTest()">Add tutor</button>
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

        <p class="black-text">About tutor</p>
        <div class="mt-2.5">
          <textarea name="message" id="message" rows="4" class="white-bg round-corner border-none text-sm w-full h-18 mb-4" v-model="AddTutorData.tutorAbout" />
        </div>

        <p class="black-text">Teaching style</p>
        <div class="mt-2.5">
          <textarea name="message" id="message" rows="4" class="white-bg round-corner border-none text-sm w-full h-18 mb-4" v-model="AddTutorData.tutorTeachingStyle" />
        </div>

        <input type="text" placeholder="Tutors lessons" v-model="AddTutorData.tutorLessons" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
        
        <input type="text" placeholder="Tutors students" v-model="AddTutorData.tutorStudents" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
        
        <input type="text" placeholder="Tutors attendence" v-model="AddTutorData.tutorAttendance" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
        
        <input type="text" placeholder="Tutor image" v-model="AddTutorData.tutorImg" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
  
      </div>
  
    </div>
  </template>
  
<script setup>
import useTutors from '../modules/useTutors';
import languages from '../modules/useLanguages.js'
import snackbarTest from '../modules/snackbarTest';




// create file and only grab data we need... add everytime u want to add a function like add button that deletes items
const { 
    firebaseAddSingleTutor,
    AddTutorData,
} = useTutors();

</script>
  
<style scoped>

</style>