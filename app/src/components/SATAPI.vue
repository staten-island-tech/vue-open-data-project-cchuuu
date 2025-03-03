<template>
  <div>
    <h1>{{ SAT.name }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const SAT = ref('')
async function getSATScores() {
  let response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
  let data = await response.json()
  SAT.value = data
}

onMounted(() => {
  getSATScores()
})
</script>

<style scoped></style>
