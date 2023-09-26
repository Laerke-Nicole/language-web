<template>
    <h1>Add tutor information</h1>

    

    <div class="flex flex-col justify-center parameters-container">
        <input type="text" placeholder="Tutors name" v-model="AddTutorData.tutorName">
        <input type="text" placeholder="Tutor speaks" v-model="AddTutorData.tutorSpeaks">
        <input type="text" placeholder="Tutor description" v-model="AddTutorData.tutorDescription">
        <input type="text" placeholder="Tutor price" v-model="AddTutorData.tutorPrice">
        <input type="text" placeholder="About tutor" v-model="AddTutorData.tutorAbout">
        <input type="text" placeholder="Tutors teaching style" v-model="AddTutorData.tutorTeachingStyle">
        <input type="text" placeholder="Tutor image" v-model="AddTutorData.tutorImage">
    </div>

    <button class="btn-add" @click="firebaseAddSingleItem()">Add item</button>

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

    <button class="btn-delete" @click="firebaseDeleteSingleItem(tutor.id)">Delete item</button>

    <p>
        <input type="text" placeholder="New tutor name" v-model="tutor.tutorName">
    </p>
    <p>
        <input type="text" placeholder="New tutor name" v-model="tutor.tutorPrice">
    </p>
    <button class="btn-edit" @click="firebaseUpdateSingleItem(tutor.id)">Edit item</button>
    <hr>

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

</script>

<style scoped>
.parameters-container {
    padding: 0 10%;
}

</style>