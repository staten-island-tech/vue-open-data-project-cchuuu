<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NamesChart from './views/MaleChart.vue'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/NamesChart">Names</RouterLink>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
