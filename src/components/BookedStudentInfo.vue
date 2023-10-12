<template>
    <!-- printed student information in a loop -->
    <div v-for="student in students" :key="student">
        <div class="card-content flex flex-col round-corner white-bg pt-12 pb-12 mb-11">
          <div class="flex flex-col ten-percent">

            <!-- list of information on the booked student -->
            <div class="flex flex-col gap-2">
              <!-- <AddedTutorList></AddedTutorList> -->
              
              <h5 class="text-xl">
                First name: {{ student.studentFirstName }}
              </h5>
              <p>
                Last name: {{ student.studentLastName }}
              </p>
            </div>     
          </div>
        </div>
      </div>
</template>

<script setup>
import useStudentInfo from '../modules/useStudentInfo.js';
import { onMounted } from 'vue'

const { students, getStudentsData } = useStudentInfo();

onMounted(() => {
  getStudentsData();
})

</script>

<style scoped>

</style>