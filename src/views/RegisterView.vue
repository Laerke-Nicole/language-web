<template>
    <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
      <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Register an account</div>
      <form class="flex flex-col gap-3">
        <div class="block relative"> 
          <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
          <input v-model="email" type="text" id="email" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0">
          
          </div>
          <div class="block relative"> 
            <!-- password input -->
            <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
            <input v-model="password" type="password" id="password" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
          </div>

          <!-- log in button -->
          <button @click="logIn" type="submit" class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Register account</button>

      </form>
      <div class="text-sm text-center mt-[1.6rem]">Already have an account? <RouterLink to="/login" class="text-sm text-[#7747ff] underline">Log in</RouterLink></div>
  </div>

</template>

<script setup>
// scroll to top when opening page
onMounted(() => {
  window.scrollTo(0, 0)
})

</script>

<style scoped>

</style>