<template>
    <div class="parameters-container">

        <div class="flex flex-col justify-center gap-2">
            <h1>Add tutor information</h1>

            <input type="text" placeholder="Tutors name" v-model="AddTutorData.tutorName" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
            <input type="text" placeholder="Tutor speaks" v-model="AddTutorData.tutorSpeaks" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
            <input type="text" placeholder="Tutor description" v-model="AddTutorData.tutorDescription" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
            <input type="text" placeholder="Tutor price" v-model="AddTutorData.tutorPrice" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
            <input type="text" placeholder="About tutor" v-model="AddTutorData.tutorAbout" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
            <input type="text" placeholder="Tutors teaching style" v-model="AddTutorData.tutorTeachingStyle" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
            <input type="text" placeholder="Tutor image" v-model="AddTutorData.tutorImage" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
        </div>

        <button class="btn-add button" @click="firebaseAddSingleItem()">Add tutor</button>

        <hr>

        <div v-for="tutor in tutors" :key="tutor">
        <p>
            TutorID: {{ tutor.id }}
        </p>
        <p>
            TutorName: {{ tutor.tutorName }}
        </p>
        <p>
            TutorSpeaks: {{ tutor.tutorSpeaks }}
        </p>
        <p>
            TutorDescription: {{ tutor.tutorDescription }}
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

        <button class="btn-delete" @click="firebaseDeleteSingleItem(tutor.id)">Delete tutor</button>

        <p>
            <input type="text" placeholder="Edit tutor name" v-model="tutor.tutorName" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
        </p>
        <p>
            <input type="text" placeholder="Edit tutors languages" v-model="tutor.tutorSpeaks" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
        </p>


        
        <!-- modal with editing -->
        <button @click="showModal" type="button" class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Edit tutor
    </button>
    <Modal :size="size" v-if="isShowModal" @close="closeModal">
      <template #header>
        <div class="flex items-center text-lg">
          Edit tutor information
        </div>
      </template>
      <template #body>
        <p>
            <input type="text" placeholder="Edit tutor name" v-model="tutor.tutorName" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
        </p>
        <p>
            <input type="text" placeholder="Edit tutors languages" v-model="tutor.tutorSpeaks" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
        </p>

      </template>
      <template #footer>
        <div class="flex justify-between">
          <button @click="closeModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Cancel
          </button>
          <button @click="closeModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Edit tutor
          </button>
        </div>
      </template>
    </Modal>


        <button class="btn-edit button" @click="firebaseUpdateSingleItem(tutor.id)">Edit tutor</button>
        <hr>

        </div>

    </div>

</template>


<script setup>

import useTutors from '../modules/useTutors.js'
import { onMounted } from 'vue'


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