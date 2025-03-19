<template>
  <div class="container flex m-auto justify-center mt-5">
    <div class="button border-black border-2 rounded bg-amber-100 m-1">
      <router-link to="/" class="text-xl m-3">Home</router-link>
    </div>
    <div class="button border-black border-2 rounded bg-amber-100 m-1">
      <router-link to="NameChart" class="text-xl m-3">Names</router-link>
    </div>
    <div class="button border-black border-2 rounded bg-amber-100 m-1">
      <router-link to="MaleChart" class="text-xl m-3">Male</router-link>
    </div>
    <div class="button border-black border-2 rounded bg-amber-100 m-1">
      <router-link to="FemaleChart" class="text-xl m-3">Female</router-link>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
