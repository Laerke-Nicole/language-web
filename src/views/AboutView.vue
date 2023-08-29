<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div v-for="teacher in teachers" :key="teacher">
      <p>
        TeacherID: {{ teacher.id }}
      </p>
      <p>
        TeacherName: {{ teacher.teacherName }}
      </p>
      <p>
        TeacherPrice: {{ teacher.teacherPrice }}
      </p>
    </div>

  </div>
</template>

<script setup>
import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, onSnapshot } from 'firebase/firestore';
import { onMounted } from 'vue'

// to store data from firebase
const teachers = ref([]); 

// tell the system where to get the information from (which collection)
const teacherDataRef = collection(db, 'teachers');

// store documents
const getTeachersData = () => {
  onSnapshot(teacherDataRef, (snapshot) => {
    teachers.value = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
        // productName: doc.data().productName,
        // productPrice: doc.data().productPrice,
      }
    })
  })
  console.log("test", teachers)
}

onMounted(() => {
  getTeachersData();
})


</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
