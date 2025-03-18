<template>
  <div class="container flex m-auto justify-center mt-5">
    <div class="button border-black border-2 rounded bg-amber-100 m-1">
      <RouterLink to="/" class="text-xl m-3">Home</RouterLink>
    </div>
    <div class="button border-black border-2 rounded bg-amber-100 m-1">
      <RouterLink to="Names" class="text-xl m-3">Names</RouterLink>
    </div>
    <div class="button border-black border-2 rounded bg-amber-100 m-1">
      <RouterLink to="Male" class="text-xl m-3">Male</RouterLink>
    </div>
    <div class="button border-black border-2 rounded bg-amber-100 m-1">
      <RouterLink to="Female" class="text-xl m-3">Female</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
