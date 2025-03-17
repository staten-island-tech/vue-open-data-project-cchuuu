<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/NamesChart">Names</RouterLink>
    <RouterLink to="/MaleChart">Males</RouterLink>
    <RouterLink to="/FemaleChart">Females</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
