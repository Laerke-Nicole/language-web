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
      
          <button class="black-btn" @click="firebaseAddSingleTutor(), snackbarAddTutor()" >Add tutor</button> <!-- :disabled="uploadBtn" -->
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
          
          <!-- image -->
          <input v-on:change="uploadImg" alt="tutor pfp" type="file" label="File input" width="200" height="200">

  <!--         <input v-on:change="tutorImg" alt="tutor pfp" type="file" label="File input" width="200" height="200" @change="uploadImg">
  -->
        </div>
    
      </div>
    </template>
    
  <script setup>

import useTutors from '../modules/useTutors';
import languages from '../modules/useLanguages.js';
import snackbarAddTutor from '../modules/snackbarAddTutor.js';
import { uploadImg, tutorImg } from '../modules/useImgUpload.js'; // Change this line

  // import useTutors from '../modules/useTutors';
  // import languages from '../modules/useLanguages.js';
  // import snackbarAddTutor from '../modules/snackbarAddTutor.js';
  // //import useImg from '../modules/useImgUpload.js';
  // import { uploadImg } from '../modules/useImgUpload.js';
  // import { tutorImg } from '../modules/useImgUpload.js';

  // create file and only grab data we need... add everytime u want to add a function like add button that deletes items
  const { 
    firebaseAddSingleTutor,
    AddTutorData,
  } = useTutors();

  //const { uploadImg, tutorImg } = useImg;
  </script>
    
  <style scoped>

  </style>