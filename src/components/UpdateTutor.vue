<template>
    <div>
        <dialog ref="dialogg" id="dialogbox" >
        <h1>Added stuff to firebase, yay you!</h1>

        </dialog>
        <button
        id="floatyClose"
        @click="$emit('close')"
        >
        XX
        </button>

        <!-- complete edit button -->
        <button class="btn-edit black-btn" @click="firebaseUpdateSingleItem(tutor), snackbarTest()">Edit tutor information</button>

        <!-- <button class="btn-add" @click="firebaseAddSingleItem(), snackbarTest()">Add Item</button> -->
        <div>
            <h1>hello</h1>

            <!-- <p>Name</p>
              <p>
                <input type="text" placeholder="Edit tutor name" v-model="AddTutorData.tutorName" class="white-bg-second round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">
              </p> -->
        <!-- <input type="text" placeholder="Product name" v-model="AddProductData.productName" > -->

        </div>
    </div>
</template>

<script setup>
import useTutors from '../modules/useTutors.js';
import languages from '../modules/useLanguages.js'
import { onMounted } from 'vue'


import { ref } from 'vue';
const dialogg = ref(null);

let snackbarTest = () => {
  dialogg.value.setAttribute("open", "");
  //document.getElementById("dialogbox").setAttribute("open", "");
  setTimeout(() => { 
    dialogg.value.removeAttribute("open");
   // document.getElementById("dialogbox").removeAttribute("open");
  }, 2000);
}


const { tutors, 
  getTutorsData, 
  AddTutorData,
  firebaseUpdateSingleItem,
} = useTutors();

onMounted(() => {
  getTutorsData();
})


</script>

<style scoped>

</style>